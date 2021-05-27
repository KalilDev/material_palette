import 'package:color_models/color_models.dart';
import 'color_distance.dart';
import 'golden.dart';
import 'golden_data.dart';
import 'dart:math' as math;

/// An [MaterialPalette] which was derived from an [GoldenMaterialPalette] and
/// an [primary] color.
class MaterialPalette {
  final int primarySwatch;
  final Map<int, RgbColor> swatches;

  const MaterialPalette(
    this.primarySwatch,
    this.swatches,
  );

  static int swatchFromIndex(int i) => i == 0 ? 50 : i * 100;

  factory MaterialPalette.fromSwatches(
    int primaryIndex,
    List<RgbColor> swatches,
  ) =>
      MaterialPalette(
        swatchFromIndex(primaryIndex),
        {
          for (var i = 0; i < swatches.length; i++)
            swatchFromIndex(i): swatches[i]
        },
      );

  RgbColor get primary => swatches[primarySwatch]!;
}

/// Create an [MaterialPalette] with [rawTarget] as the primary color.
MaterialPalette createMaterialPalette(
  ColorModel rawTarget, {
  List<List<LabColor>> goldenPalettes = kGoldenMaterialPalettes,
  ColorDistanceFunction distanceFn = CIEDE2000ColorDistance,
}) {
  final target = rawTarget.toLchColor();

  final goldenPalette = findClosestGoldenPalette(
    rawTarget.toLabColor(),
    goldenPalettes: goldenPalettes,
    distanceFn: distanceFn,
  );
  final goldenSwatches = goldenPalette.swatches;

  final goldenPrimary = goldenPalette.primarySwatch.toLchColor();
  final isLowSaturation = goldenSwatches[5].toLchColor().chroma < 30;

  final targetLightnessFac =
          _kLightnessSwatchFactors[goldenPalette.primaryIndex],
      targetChromaFac = _kChromaSwatchFactors[goldenPalette.primaryIndex];

  final dtL = goldenPrimary.lightness - target.lightness,
      dtC = goldenPrimary.chroma - target.chroma,
      dtH = goldenPrimary.hue - target.hue;

  var nextLightness = 100.0;
  return MaterialPalette.fromSwatches(
    goldenPalette.primaryIndex,
    goldenSwatches
        .map((golden) => golden.toLchColor())
        .mapIndexed<RgbColor>((golden, i) {
      if (i == goldenPalette.primaryIndex) {
        nextLightness = math.max(target.lightness - 1.7, 0);
        return rawTarget.toRgbColor();
      }

      final swatchLightnessFactor =
          _kLightnessSwatchFactors[i] / targetLightnessFac;
      var lightness = golden.lightness - swatchLightnessFactor * dtL;
      lightness = math.min(lightness, nextLightness);
      lightness = lightness.clamp(0, 100);

      final swatchChromaFactor = _kChromaSwatchFactors[i] / targetChromaFac;
      var chroma = isLowSaturation
          ? golden.chroma - dtC
          : golden.chroma - dtC * math.min(swatchChromaFactor, 1.25);
      chroma = math.max(0, chroma);

      final hue = (golden.hue - dtH + 360) % 360;

      final resultColor = new LchColor(lightness, chroma, hue);

      nextLightness = math.max(resultColor.lightness - 1.7, 0);
      return resultColor.toRgbColor();
    }).toList(),
  );
}

const List<double> _kLightnessSwatchFactors = [
  2.048875457, // Color(0xFF070707)
  5.124792061, // Color(0xFF111111)
  8.751659557, // Color(0xFF191919)
  12.07628774, // Color(0xFF202020)
  13.91449542, // Color(0xFF232323)
  15.92738893, // Color(0xFF282828)
  15.46585818, // Color(0xFF272727)
  15.09779227, // Color(0xFF262626)
  15.13738673, // Color(0xFF262626)
  15.09818372, // Color(0xFF262626)
];
const List<double> _kChromaSwatchFactors = [
  1.762442714, // Color(0xFF080204)
  4.213532634, // Color(0xFF0e0004)
  7.395827458, // Color(0xFF140004)
  11.07174158, // Color(0xFF190004)
  13.89634504, // Color(0xFF1d0004)
  16.37591477, // Color(0xFF1f0004)
  16.27071136, // Color(0xFF1f0004)
  16.54160806, // Color(0xFF200004)
  17.35916727, // Color(0xFF210004)
  19.88410864, // Color(0xFF230005)
];

extension _T<T> on Iterable<T> {
  Iterable<T1> mapIndexed<T1>(T1 Function(T, int) fn) sync* {
    var it = iterator, i = 0;
    while (it.moveNext()) {
      yield fn(it.current, i++);
    }
  }
}
