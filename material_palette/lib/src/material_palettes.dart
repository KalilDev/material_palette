import 'package:color_models/color_models.dart';
import 'material_palette.dart';
import 'color_distance.dart';
import 'golden.dart';
import 'golden_data.dart';

/// An class which takes an base color and constructs triadic, complementary,
/// analogous and primary [MaterialPalette]s lazily and memoizes the results.
class MaterialPalettes {
  final HslColor _baseColor;

  MaterialPalettes(
    this._baseColor, {
    ColorDistanceFunction distanceFn = CIE76ColorDistance, // cheaper
    List<List<LabColor>> goldenPalettes = kGoldenMaterialPalettes,
  }) : _lazyPalette = _lazyPaletteFactory(distanceFn, goldenPalettes);

  final _LazyPalette _lazyPalette;

  late final _PaletteGetter _primary = _lazyPalette(_baseColor);

  MaterialPalette get primary => _primary();

  late final _PaletteGetter _complementary =
      _lazyPalette(_baseColor.rotateHue(180));

  MaterialPalette get complementary => _complementary();

  late final _PaletteGetter _analogousL =
      _lazyPalette(_baseColor.rotateHue(-30));
  late final _PaletteGetter _analogousR =
      _lazyPalette(_baseColor.rotateHue(30));

  MaterialPalette get analogousL => _analogousL();
  MaterialPalette get analogousR => _analogousR();
  List<MaterialPalette> get analogous => [analogousL, analogousR];

  late final _PaletteGetter _triadicL = _lazyPalette(_baseColor.rotateHue(60));
  late final _PaletteGetter _triadicR = _lazyPalette(_baseColor.rotateHue(120));

  MaterialPalette get triadicL => _triadicL();
  MaterialPalette get triadicR => _triadicR();
  List<MaterialPalette> get triadic => [triadicL, triadicR];
}

typedef _PaletteGetter = MaterialPalette Function();
typedef _LazyPalette = MaterialPalette Function() Function(ColorModel color);

_LazyPalette _lazyPaletteFactory(
  ColorDistanceFunction distanceFn,
  List<List<LabColor>> goldenPalettes,
) =>
    (color) {
      MaterialPalette? palette;
      return () => palette ??= createMaterialPalette(
            color,
            distanceFn: distanceFn,
            goldenPalettes: goldenPalettes,
          );
    };
