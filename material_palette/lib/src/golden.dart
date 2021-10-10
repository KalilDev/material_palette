import 'package:color_models/color_models.dart';
import 'golden_data.dart';
import 'package:delta_e/delta_e.dart' as de;
export 'package:delta_e/delta_e.dart' hide LabColor;

/// An proved material color palette, which was made by the Material team.
class GoldenMaterialPalette {
  final int primaryIndex;
  final List<LabColor> swatches;

  const GoldenMaterialPalette(this.primaryIndex, this.swatches);

  LabColor get primarySwatch => swatches[primaryIndex];
}

/// An function which returns an linear which can be used to compare colors.
typedef ColorDistanceFunction = double Function(de.LabColor a, de.LabColor b);

de.LabColor _labToDeltaELab(LabColor lab) => de.LabColor(
      lab.lightness.toDouble(),
      lab.a.toDouble(),
      lab.b.toDouble(),
    );

/// Walk through the [goldenPalettes] and return the closest one, according to
/// the [distanceFn]
GoldenMaterialPalette findClosestGoldenPalette(
  LabColor inputColor, {
  ColorDistanceFunction distanceFn = de.deltaE00,
}) {
  final input = _labToDeltaELab(inputColor);
  int e = -1;
  double distance = double.infinity;

  List<LabColor> row = kGoldenMaterialPalettes[0];
  for (var l = 0; l < kDEGoldenMaterialPalettes.length; l++) {
    for (var h = 0;
        h < kDEGoldenMaterialPalettes[l].length && 0 < distance;
        h++) {
      final newDistance = distanceFn(input, kDEGoldenMaterialPalettes[l][h]);
      if (newDistance < distance) {
        distance = newDistance;
        row = kGoldenMaterialPalettes[l];
        e = h;
      }
    }
  }
  return GoldenMaterialPalette(e, row);
}
