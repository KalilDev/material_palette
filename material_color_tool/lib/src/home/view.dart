import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter/services.dart';
import 'package:tuple/tuple.dart';
import 'package:color_models/color_models.dart';
import 'package:flutter_color_models/flutter_color_models.dart';
import 'package:flutter_colorpicker/flutter_colorpicker.dart';
import 'package:flutter_material_palette/flutter_material_palette.dart';

import '../color_html.dart';
import '../color_row.dart';
import '../picker.dart';

class HomePage extends StatefulWidget {
  HomePage({Key? key}) : super(key: key);

  @override
  _HomePageState createState() => _HomePageState();
}

class _ColorGroupSection extends StatelessWidget {
  final String title;
  final List<Widget> colors;
  final double margin;
  final double gutter;
  const _ColorGroupSection({
    required this.title,
    required this.colors,
    this.margin = 36.0,
    this.gutter = 24.0,
  });
  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        SizedBox(
          height: margin,
        ),
        Text(
          title,
          style: TextStyle(
            fontWeight: FontWeight.bold,
            fontSize: 16,
            letterSpacing: -0.2,
            color: Theme.of(context).colorScheme.onSurface.withOpacity(0.6),
          ),
        ),
        SizedBox(
          height: gutter,
        ),
        ...colors,
        ColorRowLabel(),
      ],
    );
  }
}

class _HomePageState extends State<HomePage> {
  Color primary = Colors.black;
  late MaterialColors primaryMaterial = MaterialColors.deriveFrom(primary);

  Color? secondary;
  MaterialColor? _secondaryMaterial;
  MaterialColor? get secondaryMaterial => secondary == null
      ? null
      : _secondaryMaterial ??= deriveMaterialColor(secondary!);

  void setPrimary(Color newColor) => setState(() {
        primary = newColor;
        primaryMaterial = MaterialColors.deriveFrom(newColor);
      });

  void unsetSecondary() => setState(() {
        _secondaryMaterial = null;
        secondary = null;
      });

  void setSecondary(Color newColor) => setState(() {
        _secondaryMaterial = null;
        secondary = newColor;
      });

  static double margin(BuildContext context) =>
      MediaQuery.of(context).size.longestSide /
      (60 + ((MediaQuery.of(context).size.shortestSide - 480) / 1200) * -35);

  ValueChanged<Color> _copyColor(BuildContext context) => (c) async {
        final colorHtml = '#' + colorToHtml(c);
        await Clipboard.setData(ClipboardData(text: colorHtml));
        ScaffoldMessenger.of(context).clearSnackBars();
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: Text('The color $colorHtml was copied to the clipboard!'),
            behavior: SnackBarBehavior.floating,
          ),
        );
      };

  Widget _mainBody(BuildContext context) => AppBody(
        primaryMaterial: primaryMaterial,
        secondaryMaterial: secondaryMaterial,
        margin: margin(context),
        setPrimary: setPrimary,
        setSecondary: setSecondary,
        onColorTap: _copyColor(context),
      );

  Widget _pickers(BuildContext context) => PickersSheet(
      primaryMaterial: primaryMaterial,
      secondaryMaterial: secondaryMaterial,
      setPrimary: setPrimary,
      setSecondary: setSecondary,
      unsetSecondary: unsetSecondary);

  bool _isBig(BuildContext context) => MediaQuery.of(context).size.width >= 600;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      endDrawer: _isBig(context)
          ? null
          : Drawer(
              child: Stack(
                fit: StackFit.expand,
                children: [
                  Positioned.fill(child: AbsorbPointer()),
                  SafeArea(
                    child: _pickers(context),
                  ),
                ],
              ),
            ),
      body: Row(
        children: [
          Expanded(child: Builder(builder: _mainBody)),
          if (_isBig(context)) ...[
            VerticalDivider(),
            SizedBox(
              width: 200,
              child: _pickers(context),
            )
          ]
        ],
      ),
    );
  }
}

class PickersSheet extends StatelessWidget {
  final MaterialColors primaryMaterial;
  final MaterialColor? secondaryMaterial;
  final ValueChanged<Color> setPrimary;
  final ValueChanged<Color> setSecondary;
  final VoidCallback unsetSecondary;

  const PickersSheet({
    Key? key,
    required this.primaryMaterial,
    required this.secondaryMaterial,
    required this.setPrimary,
    required this.setSecondary,
    required this.unsetSecondary,
  }) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Material(
      color: Colors.white,
      child: ListView(
        children: [
          MaterialColorPicker(
            color: primaryMaterial.primary,
            setColor: setPrimary,
            label: 'Primary Color',
          ),
          Divider(),
          MaterialColorPicker(
            color: secondaryMaterial,
            setColor: setSecondary,
            removeColor: unsetSecondary,
            label: 'Secondary Color',
          ),
          Divider(),
        ],
      ),
    );
  }
}

class AppBody extends StatelessWidget {
  final MaterialColors primaryMaterial;
  final MaterialColor? secondaryMaterial;
  final double margin;
  final ValueChanged<Color> setPrimary;
  final ValueChanged<Color> setSecondary;
  final ValueChanged<Color> onColorTap;

  const AppBody({
    Key? key,
    required this.primaryMaterial,
    required this.secondaryMaterial,
    required this.margin,
    required this.setPrimary,
    required this.setSecondary,
    required this.onColorTap,
  }) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.symmetric(horizontal: margin),
      child: ListView(
        children: [
          SizedBox(height: margin),
          Text(
            'Color palettes',
            style: Theme.of(context).textTheme.headline5,
          ),
          _ColorGroupSection(
            title: 'PRIMARY',
            colors: [
              ColorRow(
                color: primaryMaterial.primary,
                primary: (c) => BigContrastingLetter(
                  letter: 'P',
                  background: primaryMaterial.primary,
                ),
                onTap: onColorTap,
                onLongPress: setPrimary,
              )
            ],
          ),
          if (secondaryMaterial != null)
            _ColorGroupSection(
              title: 'SECONDARY',
              colors: [
                ColorRow(
                  color: secondaryMaterial!,
                  primary: (c) => BigContrastingLetter(
                    letter: 'S',
                    background: secondaryMaterial!,
                  ),
                  onTap: onColorTap,
                  onLongPress: setSecondary,
                )
              ],
            )
          else ...[
            _ColorGroupSection(
              title: 'COMPLEMENTARY',
              colors: [
                ColorRow(
                  color: primaryMaterial.complementary,
                  onTap: onColorTap,
                  onLongPress: setSecondary,
                )
              ],
            ),
            _ColorGroupSection(
              title: 'ANALOGOUS',
              colors: primaryMaterial.analogous
                  .map((c) => ColorRow(
                        color: c,
                        onTap: onColorTap,
                        onLongPress: setSecondary,
                      ))
                  .expand((e) => [SizedBox(height: 2.0), e])
                  .toList(),
            ),
            _ColorGroupSection(
              title: 'TRIADIC',
              colors: primaryMaterial.triadic
                  .map((c) => ColorRow(
                        color: c,
                        onTap: onColorTap,
                        onLongPress: setSecondary,
                      ))
                  .expand((e) => [SizedBox(height: 2.0), e])
                  .toList(),
            ),
          ],
          SizedBox(height: margin),
        ],
      ),
    );
  }
}
