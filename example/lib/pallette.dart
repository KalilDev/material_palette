import 'package:flutter/material.dart';
import 'package:material_palette/material_palette.dart';
import 'package:color_models/color_models.dart';
import 'package:flutter_color_models/flutter_color_models.dart';

MaterialColor paletteFromColor(Color color) => MaterialColor(
      color.value,
      Map.fromEntries(
        createMaterialPalette(color.toLabColor()).map(
          (e) => MapEntry(
            e.item1,
            e.item2.toColor(),
          ),
        ),
      ),
    );
