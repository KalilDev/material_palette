import 'package:flutter/material.dart';
import 'package:flutter_colorpicker/flutter_colorpicker.dart';

import 'color_html.dart';
import 'color_row.dart';

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

class __PickerHtmlColorState extends State<_PickerHtmlColor> {
  late final controller =
      TextEditingController(text: colorToHtml(widget.color));
  void didUpdateWidget(_PickerHtmlColor old) {
    super.didUpdateWidget(old);
    if (old.color != widget.color) {
      controller.text = colorToHtml(widget.color);
    }
  }

  void _trySet() {
    final color = htmlToColor(controller.text);
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
    controller.text = colorToHtml(widget.color);
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

class MaterialColorPicker extends StatefulWidget {
  final MaterialColor? color;
  final ValueChanged<Color> setColor;
  final VoidCallback? removeColor;
  final String label;

  const MaterialColorPicker({
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

  @override
  _MaterialColorPickerState createState() => _MaterialColorPickerState();
}

class _MaterialColorPickerState extends State<MaterialColorPicker>
    with SingleTickerProviderStateMixin {
  Widget _addButton(BuildContext context) => AspectRatio(
        aspectRatio: 2,
        child: Material(
          shape: MaterialColorPicker._buttonShape(context),
          child: InkWell(
            onTap: () => widget.setColor(Colors.black),
            customBorder: MaterialColorPicker._buttonShape(context),
            child: Center(
              child: Icon(Icons.add),
            ),
          ),
        ),
      );

  List<Widget> _pickerWidgets(BuildContext context) => [
        ColorRow(
          color: widget.color!,
          onTap: widget.setColor,
        ),
        SizedBox(height: MaterialColorPicker.gutter),
        AspectRatio(
          aspectRatio: 2,
          child: Material(
            shape: MaterialColorPicker._shape,
            clipBehavior: Clip.antiAlias,
            child: ColorPickerArea(
              HSVColor.fromColor(widget.color!),
              (c) => widget.setColor(c.toColor()),
              PaletteType.hsv,
            ),
          ),
        ),
        SizedBox(height: MaterialColorPicker.gutter / 2),
        SizedBox(
          height: 30,
          child: ColorPickerSlider(
            TrackType.hue,
            HSVColor.fromColor(widget.color!),
            (c) => widget.setColor(c.toColor()),
          ),
        ),
        SizedBox(height: MaterialColorPicker.gutter / 2),
        Row(
          children: [
            SizedBox(
              height: 24.0,
              width: 24,
              child: Material(
                color: widget.color!,
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
              width: MaterialColorPicker.gutter / 2,
            ),
            Flexible(
              child: _PickerHtmlColor(
                color: widget.color!,
                setColor: widget.setColor,
              ),
            ),
          ],
        ),
        if (widget.removeColor != null) ...[
          SizedBox(height: MaterialColorPicker.gutter),
          SizedBox(
            width: double.infinity,
            child: TextButton.icon(
              onPressed: widget.removeColor,
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
          top: MaterialColorPicker.margin + (MaterialColorPicker.gutter / 2),
          left: MaterialColorPicker.margin,
          right: MaterialColorPicker.margin,
          bottom: MaterialColorPicker.margin,
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              widget.label,
              style: Theme.of(context)
                  .textTheme
                  .subtitle2!
                  .copyWith(fontWeight: FontWeight.normal),
            ),
            SizedBox(
              height: MaterialColorPicker.gutter,
            ),
            AnimatedSize(
              duration: Duration(milliseconds: 400),
              alignment: Alignment.topCenter,
              vsync: this,
              child: AnimatedSwitcher(
                duration: Duration(
                  milliseconds: 400,
                ),
                layoutBuilder: layoutBuilder,
                child: widget.color == null
                    ? _addButton(context)
                    : Column(
                        children: _pickerWidgets(context),
                        mainAxisSize: MainAxisSize.min,
                      ),
              ),
            )
          ],
        ),
      );

  static Widget layoutBuilder(
      Widget? currentChild, List<Widget> previousChildren) {
    return Stack(children: <Widget>[
      ...previousChildren,
      if (currentChild != null) currentChild,
    ], alignment: Alignment.topCenter);
  }
}
