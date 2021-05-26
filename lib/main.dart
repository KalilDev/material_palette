import 'package:color_models/color_models.dart';
import 'package:material_palette/material_palette.dart';
import 'package:tuple/tuple.dart';

void main() {
  final red = RgbColor(255, 0, 0);
  final pallete = createMaterialPalette(red)
      .map((e) => Tuple2(e.item1, e.item2.toRgbColor().toList()))
      .map((e) =>
          '${e.item1}: ' +
          '#' +
          e.item2.map((e) => e.toRadixString(16).padLeft(2, '0')).join());
  print(pallete.join('\n'));
}
