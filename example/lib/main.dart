import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:tuple/tuple.dart';
import 'package:color_models/color_models.dart';
import 'package:flutter_color_models/flutter_color_models.dart';
import 'package:flutter_colorpicker/flutter_colorpicker.dart';
import 'pallette.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blueGrey,
      ),
      home: MyHomePage(),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key? key}) : super(key: key);

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class ExtraColors {
  final MaterialColor complementary;
  final List<MaterialColor> analogous;
  final List<MaterialColor> triadic;

  const ExtraColors(this.complementary, this.analogous, this.triadic);
  factory ExtraColors.fromPrimary(Color primary) {
    final hsl = primary.toHslColor();
    return ExtraColors(
      paletteFromColor(hsl.rotateHue(180).toColor()),
      [
        paletteFromColor(hsl.rotateHue(60).toColor()),
        paletteFromColor(hsl.rotateHue(60).toColor()),
      ],
      [
        paletteFromColor(hsl.rotateHue(120).toColor()),
        paletteFromColor(hsl.rotateHue(-120).toColor()),
      ],
    );
  }
}

class _Section extends StatelessWidget {
  final String title;
  final List<Widget> colors;
  final double margin;
  final double gutter;
  const _Section({
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
        _ColorRulerLabel(),
      ],
    );
  }
}

class _MyHomePageState extends State<MyHomePage> {
  Color primary = Colors.black;
  MaterialColor? _primaryMaterial;
  MaterialColor get primaryMaterial =>
      _primaryMaterial ??= paletteFromColor(primary);
  ExtraColors? _extraColors;
  ExtraColors get extraColors =>
      _extraColors ??= ExtraColors.fromPrimary(primary);

  Color? secondary;
  MaterialColor? _secondaryMaterial;
  MaterialColor? get secondaryMaterial => secondary == null
      ? null
      : _secondaryMaterial ??= paletteFromColor(secondary!);

  void setPrimary(Color newColor) => setState(() {
        _primaryMaterial = null;
        _extraColors = null;
        primary = newColor;
      });

  void unsetSecondary() => setState(() {
        _secondaryMaterial = null;
        secondary = null;
      });

  void setSecondary(Color newColor) => setState(() {
        _secondaryMaterial = null;
        secondary = newColor;
      });

  static final margin = 48.0;
  Widget _mainBody(BuildContext context) => Padding(
        padding: EdgeInsets.symmetric(horizontal: 48.0),
        child: ListView(
          children: [
            SizedBox(height: margin),
            Text(
              'Color palettes',
              style: Theme.of(context).textTheme.headline5,
            ),
            _Section(
              title: 'PRIMARY',
              colors: [
                _ColorRuler(
                  color: primaryMaterial,
                  primary: (c) => Center(
                    child: Padding(
                      padding: const EdgeInsets.all(8.0),
                      child: Text('P'),
                    ),
                  ),
                )
              ],
            ),
            if (secondary != null)
              _Section(
                title: 'SECONDARY',
                colors: [
                  _ColorRuler(
                    color: secondaryMaterial!,
                    primary: (c) => Center(
                      child: Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: Text('S'),
                      ),
                    ),
                  )
                ],
              )
            else ...[
              _Section(
                title: 'COMPLEMENTARY',
                colors: [_ColorRuler(color: extraColors.complementary)],
              ),
              _Section(
                title: 'ANALOGOUS',
                colors: extraColors.analogous
                    .map((c) => _ColorRuler(color: c))
                    .expand((e) => [SizedBox(height: 2.0), e])
                    .toList(),
              ),
              _Section(
                title: 'TRIADIC',
                colors: extraColors.triadic
                    .map((c) => _ColorRuler(color: c))
                    .expand((e) => [SizedBox(height: 2.0), e])
                    .toList(),
              ),
            ],
            SizedBox(height: margin),
          ],
        ),
      );

  Widget _pickers(BuildContext context) => Material(
        color: Colors.white,
        child: Column(
          children: [
            _Picker(
              color: primaryMaterial,
              setColor: setPrimary,
              label: 'Primary Color',
            ),
            Divider(),
            _Picker(
              color: secondaryMaterial,
              setColor: setSecondary,
              removeColor: unsetSecondary,
              label: 'Secondary Color',
            ),
            Divider(),
          ],
        ),
      );

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Row(
        children: [
          Expanded(child: _mainBody(context)),
          VerticalDivider(),
          SizedBox(
            width: 200,
            child: _pickers(context),
          )
        ],
      ),
    );
  }
}

class _PickerHtmlColor extends StatefulWidget {
  final MaterialColor color;
  final ValueChanged<Color> setColor;

  const _PickerHtmlColor({
    Key? key,
    required this.color,
    required this.setColor,
  }) : super(key: key);
  @override
  __PickerHtmlColorState createState() => __PickerHtmlColorState();
}

Color? _htmlToColor(String string) {
  string = string.startsWith('#') ? string.substring(1) : string;
  final String r, g, b;
  final bool shift16;
  if (string.length == 3) {
    shift16 = true;
    r = string[0];
    g = string[1];
    b = string[2];
  } else if (string.length == 6) {
    shift16 = false;
    r = string.substring(0, 2);
    g = string.substring(2, 4);
    b = string.substring(4, 6);
  } else {
    return null;
  }
  int? ir = int.tryParse(r, radix: 16),
      ig = int.tryParse(g, radix: 16),
      ib = int.tryParse(b, radix: 16);
  if (ir == null || ig == null || ib == null) {
    return null;
  }
  if (shift16) {
    ir <<= 4;
    ig <<= 4;
    ib <<= 4;
  }
  return Color.fromARGB(0xFF, ir, ig, ib);
}

String _colorToHtml(Color color) =>
    color.red.toRadixString(16).padLeft(2, '0') +
    color.green.toRadixString(16).padLeft(2, '0') +
    color.blue.toRadixString(16).padLeft(2, '0');

class __PickerHtmlColorState extends State<_PickerHtmlColor> {
  late final controller =
      TextEditingController(text: _colorToHtml(widget.color));
  void didUpdateWidget(_PickerHtmlColor old) {
    super.didUpdateWidget(old);
    if (old.color != widget.color) {
      controller.text = _colorToHtml(widget.color);
    }
  }

  void _trySet() {
    final color = _htmlToColor(controller.text);
    if (color == null) {
      _setError();
      return;
    }
    if (color == widget.color) {
      return;
    }
    widget.setColor(color);
  }

  void _changed(String val) {
    _unsetError();
  }

  bool error = false;
  void _setError() => setState(() => error = true);
  void _unsetError() => setState(() => error = false);

  void _focusChange(bool isFocused) {
    if (isFocused) {
      return;
    }
    controller.text = _colorToHtml(widget.color);
  }

  @override
  Widget build(BuildContext context) {
    return Focus(
      onFocusChange: _focusChange,
      child: TextField(
        controller: controller,
        onEditingComplete: _trySet,
        onChanged: _changed,
        decoration: InputDecoration(
          isDense: true,
          filled: true,
          prefix: Text('#'),
          errorText: error ? 'Cor inválida!' : null,
        ),
      ),
    );
  }
}

class _Picker extends StatelessWidget {
  final MaterialColor? color;
  final ValueChanged<Color> setColor;
  final VoidCallback? removeColor;
  final String label;

  const _Picker({
    Key? key,
    this.color,
    required this.setColor,
    this.removeColor,
    required this.label,
  }) : super(key: key);

  static const margin = 12.0;
  static const gutter = 12.0;

  static ShapeBorder _buttonShape(BuildContext context) =>
      RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(4.0),
        side: BorderSide(
          color: Theme.of(context).colorScheme.onSurface.withOpacity(0.2),
        ),
      );
  static final ShapeBorder _shape = RoundedRectangleBorder(
    borderRadius: BorderRadius.circular(4.0),
  );

  Widget _addButton(BuildContext context) => AspectRatio(
        aspectRatio: 2,
        child: Material(
          shape: _buttonShape(context),
          child: InkWell(
            onTap: () => setColor(Colors.black),
            customBorder: _buttonShape(context),
            child: Center(
              child: Icon(Icons.add),
            ),
          ),
        ),
      );
  List<Widget> _pickerWidgets(BuildContext context) => [
        _ColorRuler(
          color: color!,
          onTap: setColor,
        ),
        SizedBox(height: gutter),
        AspectRatio(
          aspectRatio: 2,
          child: Material(
            shape: _shape,
            clipBehavior: Clip.antiAlias,
            child: ColorPickerArea(
              HSVColor.fromColor(color!),
              (c) => setColor(c.toColor()),
              PaletteType.hsv,
            ),
          ),
        ),
        SizedBox(height: gutter / 2),
        SizedBox(
          height: 30,
          child: ColorPickerSlider(
            TrackType.hue,
            HSVColor.fromColor(color!),
            (c) => setColor(c.toColor()),
          ),
        ),
        SizedBox(height: gutter / 2),
        Row(
          children: [
            SizedBox(
              height: 24.0,
              width: 24,
              child: Material(
                color: color!,
                shape: CircleBorder(
                  side: BorderSide(
                    color: Theme.of(context)
                        .colorScheme
                        .onSurface
                        .withOpacity(0.2),
                  ),
                ),
              ),
            ),
            SizedBox(
              width: gutter / 2,
            ),
            Flexible(
              child: _PickerHtmlColor(
                color: color!,
                setColor: setColor,
              ),
            ),
          ],
        ),
        if (removeColor != null) ...[
          SizedBox(height: gutter),
          SizedBox(
            width: double.infinity,
            child: TextButton.icon(
              onPressed: removeColor,
              style: ButtonStyle(
                foregroundColor: MaterialStateColor.resolveWith(
                  (_) => Theme.of(context).colorScheme.onSurface,
                ),
                backgroundColor:
                    MaterialStateColor.resolveWith((_) => Color.alphaBlend(
                          Theme.of(context)
                              .colorScheme
                              .onSurface
                              .withOpacity(0.1),
                          Theme.of(context).colorScheme.surface,
                        )),
              ),
              icon: Icon(Icons.invert_colors_off),
              label: Text('Remove color'),
            ),
          )
        ]
      ];

  @override
  Widget build(BuildContext context) => Padding(
        padding: EdgeInsets.only(
          top: margin + (gutter / 2),
          left: margin,
          right: margin,
          bottom: margin,
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              label,
              style: Theme.of(context)
                  .textTheme
                  .subtitle2!
                  .copyWith(fontWeight: FontWeight.normal),
            ),
            SizedBox(
              height: gutter,
            ),
            if (color == null)
              _addButton(context)
            else
              ..._pickerWidgets(context)
          ],
        ),
      );
}

class _ColorRulerLabel extends StatelessWidget {
  Widget _buildText(BuildContext context, int swatch) => ConstrainedBox(
        constraints: BoxConstraints.loose(Size(
          56.0,
          double.infinity,
        )),
        child: SizedBox(
          height: 36,
          child: Center(
            child: Text(
              swatch.toString(),
              style: TextStyle(
                fontFamily: 'monospace',
                fontSize: 16,
              ),
            ),
          ),
        ),
      );
  @override
  Widget build(BuildContext context) {
    final swatches = _ColorRuler.swatchList.reversed;
    return Row(
      children: swatches
          .map((e) => _buildText(context, e))
          .map((e) => Flexible(child: e))
          .toList(),
    );
  }
}

class _ColorRuler extends StatelessWidget {
  final MaterialColor color;
  final WidgetBuilder? primary;
  final ValueChanged<Color>? onTap;

  const _ColorRuler({
    Key? key,
    required this.color,
    this.primary,
    this.onTap,
  }) : super(key: key);

  static final List<int> swatchList =
      List.generate(10, (i) => i == 0 ? 50 : 100 * i);

  Widget _buildColorEntry(BuildContext context, Color color) {
    final isPrimary = color.value == this.color.value;
    final shape = isPrimary
        ? CircleBorder()
        : RoundedRectangleBorder(borderRadius: BorderRadius.circular(4.0));

    return ConstrainedBox(
      constraints: BoxConstraints.loose(Size.square(56.0)),
      child: AspectRatio(
        aspectRatio: 1,
        child: Material(
          color: color,
          child: InkWell(
            customBorder: shape,
            onTap: onTap == null ? null : () => onTap!(color),
            child: isPrimary
                ? primary?.call(context) ?? SizedBox.expand()
                : SizedBox.expand(),
          ),
          shape: shape,
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final colors = swatchList.reversed.map((i) => color[i]!);
    return Row(
      children: colors
          .map((e) => _buildColorEntry(context, e))
          .map((e) => Flexible(child: e))
          .toList(),
    );
  }
}
