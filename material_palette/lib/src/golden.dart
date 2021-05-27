import 'package:color_models/color_models.dart';

import 'color_distance.dart';
import 'golden_data.dart';

/// An proved material color palette, which was made by the Material team.
class GoldenMaterialPalette {
  final int primaryIndex;
  final List<LabColor> swatches;

  const GoldenMaterialPalette(this.primaryIndex, this.swatches);

  LabColor get primarySwatch => swatches[primaryIndex];
}

/// An function which returns an linear which can be used to compare colors.
typedef ColorDistanceFunction = double Function(LabColor a, LabColor b);

/// Walk through the [goldenPalettes] and return the closest one, according to
/// the [distanceFn]
GoldenMaterialPalette findClosestGoldenPalette(
  LabColor inputColor, {
  List<List<LabColor>> goldenPalettes = kGoldenMaterialPalettes,
  ColorDistanceFunction distanceFn = CIEDE2000ColorDistance,
}) {
  List<LabColor> row = goldenPalettes[0];
  int e = -1;
  double distance = double.infinity;

  for (var l = 0; l < goldenPalettes.length; l++) {
    for (var h = 0; h < goldenPalettes[l].length && 0 < distance; h++) {
      final newDistance = distanceFn(inputColor, goldenPalettes[l][h]);
      if (newDistance < distance) {
        distance = newDistance;
        row = goldenPalettes[l];
        e = h;
      }
    }
  }
  return GoldenMaterialPalette(e, row);
}
