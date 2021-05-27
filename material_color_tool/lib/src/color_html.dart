import 'package:flutter/material.dart';

String colorToHtml(Color color) =>
    color.red.toRadixString(16).padLeft(2, '0') +
    color.green.toRadixString(16).padLeft(2, '0') +
    color.blue.toRadixString(16).padLeft(2, '0');

Color? htmlToColor(String string) {
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
