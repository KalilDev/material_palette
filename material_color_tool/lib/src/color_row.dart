import 'package:flutter/material.dart';

import 'color_html.dart';

class ColorRowLabel extends StatelessWidget {
  Widget _buildText(BuildContext context, int swatch) => ConstrainedBox(
        constraints: BoxConstraints.loose(Size(
          56.0,
          double.infinity,
        )),
        child: SizedBox(
          height: 24,
          width: double.infinity,
          child: FittedBox(
            fit: BoxFit.contain,
            child: Center(
              child: Padding(
                padding: const EdgeInsets.all(2.0),
                child: Text(
                  swatch.toString().padLeft(3, '0'),
                  style: TextStyle(
                    fontFamily: 'monospace',
                    fontSize: 16,
                  ),
                ),
              ),
            ),
          ),
        ),
      );
  @override
  Widget build(BuildContext context) {
    final swatches = ColorRow.swatchList.reversed;
    return Row(
      children: swatches
          .map((e) => _buildText(context, e))
          .map((e) => Flexible(child: e))
          .toList(),
    );
  }
}

class _ColorWidget extends ImplicitlyAnimatedWidget {
  final VoidCallback? onTap;
  final VoidCallback? onLongPress;
  final MaterialStateProperty<ShapeBorder> shape;
  final Color color;
  final Widget child;

  const _ColorWidget({
    Key? key,
    required this.onTap,
    required this.onLongPress,
    required this.shape,
    required this.child,
    required this.color,
  }) : super(key: key, duration: const Duration(milliseconds: 400));
  @override
  __ColorWidgetState createState() => __ColorWidgetState();
}

class __ColorWidgetState extends ImplicitlyAnimatedWidgetState<_ColorWidget> {
  Tween<Color?>? _color;

  @override
  void forEachTween(TweenVisitor<dynamic> visitor) {
    _color = visitor(_color, widget.color, (v) => ColorTween(begin: v))
        as Tween<Color?>;
  }

  List<MaterialState> _states = [];
  Set<MaterialState> get states => _states.toSet()
    ..addAll([
      if (widget.onTap == null && widget.onLongPress == null)
        MaterialState.disabled,
    ]);
  late final _elevation = MaterialStateProperty.resolveWith<double>(
    (states) {
      if (states.contains(MaterialState.pressed)) {
        return 24.0;
      }
      if (states.contains(MaterialState.hovered)) {
        return 12.0;
      }
      if (states.contains(MaterialState.focused)) {
        return 8.0;
      }
      return 0;
    },
  );
  void _hoverChange(bool hovered) => setState(
        () {
          if (hovered) {
            _states..add(MaterialState.hovered);
            return;
          }
          _states..remove(MaterialState.hovered);
        },
      );

  void _focusChange(bool focused) => setState(
        () {
          if (focused) {
            _states..add(MaterialState.focused);
            return;
          }
          _states..remove(MaterialState.focused);
        },
      );

  void _tapDown(TapDownDetails details) => setState(
        () {
          if (widget.onTap == null) {
            return;
          }
          _states..add(MaterialState.pressed);
        },
      );
  void _tapCancel() => setState(() => _states.remove(MaterialState.pressed));

  void _onTap() => setState(
        () {
          _states.remove(MaterialState.pressed);
          if (widget.onTap == null) {
            return;
          }
          widget.onTap!();
        },
      );
  void _onLongPress() => setState(
        () {
          _states.remove(MaterialState.pressed);
          if (widget.onLongPress == null) {
            return;
          }
          widget.onLongPress!();
        },
      );
  Widget _layout({required Widget child}) => ConstrainedBox(
        constraints: BoxConstraints.loose(Size.square(56.0)),
        child: AspectRatio(
          aspectRatio: 1,
          child: child,
        ),
      );

  @override
  Widget build(BuildContext context) => _layout(
        child: Tooltip(
          message: '#' + colorToHtml(widget.color),
          child: Focus(
            onFocusChange: _focusChange,
            child: AnimatedBuilder(
              animation: controller,
              builder: (context, child) => Material(
                color: _color!.evaluate(animation),
                elevation: _elevation.resolve(states),
                shape: widget.shape.resolve(states),
                child: child,
              ),
              child: InkWell(
                customBorder: widget.shape.resolve(states),
                onTap: _onTap,
                onTapDown: _tapDown,
                onTapCancel: _tapCancel,
                onLongPress: _onLongPress,
                onHover: _hoverChange,
                child: widget.child,
              ),
            ),
          ),
        ),
      );
}

class BigContrastingLetter extends StatelessWidget {
  final String letter;
  final Color background;

  const BigContrastingLetter({
    Key? key,
    required this.letter,
    required this.background,
  }) : super(key: key);
  bool get _isBackgroundDark =>
      ThemeData.estimateBrightnessForColor(background) == Brightness.dark;
  @override
  Widget build(BuildContext context) => Center(
        child: FittedBox(
          fit: BoxFit.contain,
          child: Padding(
            padding: const EdgeInsets.all(8.0),
            child: Text(
              letter,
              style: TextStyle(
                color: _isBackgroundDark
                    ? Colors.white.withOpacity(1)
                    : Colors.black.withOpacity(1),
                fontWeight: FontWeight.bold,
                fontSize: 22,
              ),
            ),
          ),
        ),
      );
}

class ColorRow extends StatelessWidget {
  final MaterialColor color;
  final WidgetBuilder? primary;
  final ValueChanged<Color>? onTap;
  final ValueChanged<Color>? onLongPress;
  final MaterialStateProperty<ShapeBorder>? shape;
  final MaterialStateProperty<ShapeBorder>? primaryShape;

  const ColorRow({
    Key? key,
    required this.color,
    this.primary,
    this.onTap,
    this.shape,
    this.primaryShape,
    this.onLongPress,
  }) : super(key: key);

  static final _kDefaultPrimaryShape =
      MaterialStateProperty.resolveWith<ShapeBorder>((states) {
    if (states.contains(MaterialState.pressed)) {
      return RoundedRectangleBorder(borderRadius: BorderRadius.circular(2.0));
    }
    if (states.contains(MaterialState.hovered)) {
      return RoundedRectangleBorder(borderRadius: BorderRadius.circular(12.0));
    }
    return CircleBorder();
  });
  static final _kDefaultShape =
      MaterialStateProperty.resolveWith<ShapeBorder>((states) {
    if (states.contains(MaterialState.pressed)) {
      return RoundedRectangleBorder(borderRadius: BorderRadius.circular(12.0));
    }
    if (states.contains(MaterialState.hovered)) {
      return RoundedRectangleBorder(borderRadius: BorderRadius.circular(4.0));
    }
    return RoundedRectangleBorder(borderRadius: BorderRadius.zero);
  });

  static final List<int> swatchList =
      List.generate(10, (i) => i == 0 ? 50 : 100 * i);

  Widget _buildColorEntry(BuildContext context, Color color) {
    final isPrimary = color.value == this.color.value;

    return _ColorWidget(
      color: color,
      onTap: onTap == null ? null : () => onTap!(color),
      onLongPress: onLongPress == null ? null : () => onLongPress!(color),
      shape: isPrimary
          ? primaryShape ?? _kDefaultPrimaryShape
          : shape ?? _kDefaultShape,
      child: isPrimary
          ? primary?.call(context) ?? SizedBox.expand()
          : SizedBox.expand(),
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
