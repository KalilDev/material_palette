import 'package:flutter/material.dart';
import 'package:material_palette/material_palette.dart';
import 'package:flutter_color_models/flutter_color_models.dart'
    show ToColorModel, ToColor;

/// An class which takes an base [MaterialPalettes] and provides an flutter api
/// which provides complementary, analogous, triadic and primary
/// [MaterialColor]s lazily, memoizing the results.
class MaterialColors {
  final MaterialPalettes _base;

  MaterialColors(this._base);

  /// Create an [MaterialColors] from the [MaterialPalettes] which uses the
  /// [color] as the primary color and derives the palletes lazily.
  factory MaterialColors.deriveFrom(
    Color color, {
    ColorDistanceFunction distanceFn = deltaE94, // cheaper
  }) =>
      MaterialColors(
        MaterialPalettes(
          color.toHslColor(),
          distanceFn: distanceFn,
        ),
      );

  late final _MaterialColorGetter _primary = _lazyMaterialColor(_base.primary);

  MaterialColor get primary => _primary();

  late final _MaterialColorGetter _complementary =
      _lazyMaterialColor(_base.complementary);

  MaterialColor get complementary => _complementary();

  late final _MaterialColorGetter _analogousL =
      _lazyMaterialColor(_base.analogousL);
  late final _MaterialColorGetter _analogousR =
      _lazyMaterialColor(_base.analogousR);

  MaterialColor get analogousL => _analogousL();
  MaterialColor get analogousR => _analogousR();
  List<MaterialColor> get analogous => [analogousL, analogousR];

  late final _MaterialColorGetter _triadicL =
      _lazyMaterialColor(_base.triadicL);
  late final _MaterialColorGetter _triadicR =
      _lazyMaterialColor(_base.triadicR);

  MaterialColor get triadicL => _triadicL();
  MaterialColor get triadicR => _triadicR();
  List<MaterialColor> get triadic => [triadicL, triadicR];
}

typedef _MaterialColorGetter = MaterialColor Function();
_MaterialColorGetter _lazyMaterialColor(MaterialPalette palette) {
  MaterialColor? color;
  return () => color ??= materialColorFromPalette(palette);
}

/// Transform an [MaterialPalette] into an flutter [MaterialColor]
MaterialColor materialColorFromPalette(MaterialPalette palette) =>
    MaterialColor(
      palette.primary.toColor().value,
      palette.swatches.map(
        (key, value) => MapEntry(key, value.toColor()),
      ),
    );

/// Compute the [MaterialColor] which results from the [color].
MaterialColor deriveMaterialColor(
  Color color, {
  ColorDistanceFunction distanceFn = deltaE94, // cheaper
}) {
  final palette = createMaterialPalette(color.toLabColor());
  return MaterialColor(
    color.value,
    palette.swatches.map(
      (key, value) => MapEntry(key, value.toColor()),
    ),
  );
}
