import 'package:color_models/color_models.dart';
import 'golden.dart';
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

class _LCH {
  const _LCH(
    this.lightness,
    this.chroma,
    this.hue,
    this.alpha,
  );
  final num lightness;
  final num chroma;
  final num hue;
  final int alpha;

  factory _LCH.fromLab(LabColor color) => _LCH(
        color.lightness,
        math.sqrt(math.pow(color.a, 2) + math.pow(color.b, 2)),
        (180 * math.atan2(color.b, color.a) / math.pi + 360) % 360,
        color.alpha,
      );

  LabColor toLab() {
    final hueRadians = hue * math.pi / 180;
    // The clamping should not happen but we want to play nice with the other
    // [ColorSpace]s
    return LabColor(
      lightness.clamp(0, 100),
      (chroma * math.cos(hueRadians)).clamp(-128, 127),
      (chroma * math.sin(hueRadians)).clamp(-128, 127),
      alpha,
    );
  }
}

/// Create an [MaterialPalette] with [rawTarget] as the primary color.
MaterialPalette createMaterialPalette(
  ColorModel rawTarget, {
  ColorDistanceFunction distanceFn = deltaE00,
}) {
  final target = _LCH.fromLab(rawTarget.toLabColor());

  final goldenPalette = findClosestGoldenPalette(
    rawTarget.toLabColor(),
    distanceFn: distanceFn,
  );
  final goldenSwatches = goldenPalette.swatches;

  final goldenPrimary = _LCH.fromLab(goldenPalette.primarySwatch);
  final isLowSaturation = _LCH.fromLab(goldenSwatches[5]).chroma < 30;

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
        .map((golden) => _LCH.fromLab(golden))
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

      final resultColor = new _LCH(lightness, chroma, hue, 255);

      nextLightness = math.max(resultColor.lightness - 1.7, 0);
      return resultColor.toLab().toRgbColor();
    }).toList(),
  );
}

const List<double> _kLightnessSwatchFactors = [
  2.048875457,
  5.124792061,
  8.751659557,
  12.07628774,
  13.91449542,
  15.92738893,
  15.46585818,
  15.09779227,
  15.13738673,
  15.09818372,
];
const List<double> _kChromaSwatchFactors = [
  1.762442714,
  4.213532634,
  7.395827458,
  11.07174158,
  13.89634504,
  16.37591477,
  16.27071136,
  16.54160806,
  17.35916727,
  19.88410864,
];

extension _T<T> on Iterable<T> {
  Iterable<T1> mapIndexed<T1>(T1 Function(T, int) fn) sync* {
    var it = iterator, i = 0;
    while (it.moveNext()) {
      yield fn(it.current, i++);
    }
  }
}
