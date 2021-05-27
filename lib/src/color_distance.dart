import 'package:color_models/color_models.dart';
import 'dart:math' as math;

double _inverseTangent360(num a, num b) {
  if (0.0001 > a.abs() && 0.0001 > b.abs()) return 0;
  a = 180 * math.atan2(a, b) / math.pi;
  return 0.0 <= a ? a.toDouble() : a + 360.0;
}

double CIE76ColorDistance(LabColor A, LabColor B) {
  final L1 = A.lightness, L2 = B.lightness;
  final A1 = A.a, A2 = B.a;
  final B1 = A.b, B2 = B.b;
  return math.sqrt(
    math.pow(L2 - L1, 2) + math.pow(A2 - A1, 2) + math.pow(B2 - B1, 2),
  );
}

double CIEDE2000ColorDistance(LabColor A, LabColor B) {
  var f = (B.lightness + A.lightness) / 2,
      // Distance from g.A to g.B
      c = math.sqrt(math.pow(B.a, 2) + math.pow(B.b, 2)),
      // Distance from inputColor.A to inputColor.B
      n = math.sqrt(math.pow(A.a, 2) + math.pow(A.b, 2)),
      // Avg of distances
      u = (c + n) / 2;
  u = 0.5 *
      (1 - math.sqrt(math.pow(u, 7) / (math.pow(u, 7) + math.pow(25, 7))));
  var q = B.a * (1 + u),
      p = A.a * (1 + u),
      // LAB to LCH `C` factor on g with `A` from `q`
      r = math.sqrt(math.pow(q, 2) + math.pow(B.b, 2)),
      // LAB to LCH `C` factor on inputColor with `A` from `p`
      t = math.sqrt(math.pow(p, 2) + math.pow(A.b, 2));
  u = t - r;
  var v = (r + t) / 2;
  q = _inverseTangent360(B.b, q);
  p = _inverseTangent360(A.b, p);
  r = 2 *
      math.sqrt(r * t) *
      math.sin((0.0001 > c.abs() || 0.0001 > n.abs()
              ? 0
              : 180 >= (p - q).abs()
                  ? p - q
                  : p <= q
                      ? p - q + 360
                      : p - q - 360) /
          2 *
          math.pi /
          180);
  c = 0.0001 > c.abs() || 0.0001 > n.abs()
      ? 0
      : 180 >= (p - q).abs()
          ? (q + p) / 2
          : 360 > q + p
              ? (q + p + 360) / 2
              : (q + p - 360) / 2;
  n = 1 + 0.045 * v;
  t = 1 +
      0.015 *
          v *
          (1 -
              0.17 * math.cos((c - 30) * math.pi / 180) +
              0.24 * math.cos(2 * c * math.pi / 180) +
              0.32 * math.cos((3 * c + 6) * math.pi / 180) -
              0.2 * math.cos((4 * c - 63) * math.pi / 180));
  return math.sqrt(math.pow(
          (A.lightness - B.lightness) /
              (1 +
                  0.015 *
                      math.pow(f - 50, 2) /
                      math.sqrt(20 + math.pow(f - 50, 2))),
          2) +
      math.pow(u / (1 * n), 2) +
      math.pow(r / (1 * t), 2) +
      u /
          (1 * n) *
          math.sqrt(math.pow(v, 7) / (math.pow(v, 7) + math.pow(25, 7))) *
          math.sin(
              60 * math.exp(-math.pow((c - 275) / 25, 2)) * math.pi / 180) *
          -2 *
          (r / (1 * t)));
}
