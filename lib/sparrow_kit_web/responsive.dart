import 'package:flutter/material.dart';

class SparrowResponsiveGrid extends StatelessWidget {
  const SparrowResponsiveGrid({
    super.key,
    required this.children,
    required this.mobileColumns,
    this.tabletColumns,
    this.desktopColumns,
    this.mobileGap = 0,
    this.tabletGap,
    this.desktopGap,
  });

  final List<Widget> children;
  final int mobileColumns;
  final int? tabletColumns;
  final int? desktopColumns;
  final double mobileGap;
  final double? tabletGap;
  final double? desktopGap;

  @override
  Widget build(BuildContext context) => GridView.count(
    crossAxisCount: mobileColumns,
    crossAxisSpacing: mobileGap,
    mainAxisSpacing: mobileGap,
    shrinkWrap: true,
    physics: const NeverScrollableScrollPhysics(),
    children: children,
  );
}
