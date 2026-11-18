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
  Widget build(BuildContext context) {
    final width = MediaQuery.sizeOf(context).width;
    if (width < 600 && !showOnMobile) {
      return const SizedBox.shrink();
    }
    if (width >= 600 &&
        width < 1024 &&
        !(showOnTablet ?? showOnMobile)) {
      return const SizedBox.shrink();
    }
    if (width >= 1024 &&
        !(showOnDesktop ?? showOnTablet ?? showOnMobile)) {
      return const SizedBox.shrink();
    }
    return child;
  }
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
  Widget build(BuildContext context) {
    final width = MediaQuery.sizeOf(context).width;
    final fontSize = width < 600
        ? mobileFontSize
        : width < 1024
        ? tabletFontSize ?? mobileFontSize
        : desktopFontSize ?? tabletFontSize ?? mobileFontSize;
    return Text(text, style: style?.copyWith(fontSize: fontSize));
  }
}
