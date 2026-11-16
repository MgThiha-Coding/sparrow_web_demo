import 'package:flutter/material.dart';

class SparrowResponsiveVisibility extends StatelessWidget {
  const SparrowResponsiveVisibility({
    super.key,
    required this.child,
    this.showOnMobile = true,
    this.showOnTablet,
    this.showOnDesktop,
  });

  final Widget child;
  final bool showOnMobile;
  final bool? showOnTablet;
  final bool? showOnDesktop;

  @override
  Widget build(BuildContext context) => child;
}

class SparrowResponsiveText extends StatelessWidget {
  const SparrowResponsiveText({
    super.key,
    required this.text,
    required this.mobileFontSize,
    this.tabletFontSize,
    this.desktopFontSize,
    this.style,
  });

  final String text;
  final double mobileFontSize;
  final double? tabletFontSize;
  final double? desktopFontSize;
  final TextStyle? style;

  @override
  Widget build(BuildContext context) => Text(text, style: style);
}
