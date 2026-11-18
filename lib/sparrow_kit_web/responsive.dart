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
  Widget build(BuildContext context) {
    final width = MediaQuery.sizeOf(context).width;
    final crossAxisCount = width < 600
        ? mobileColumns
        : width < 1024
        ? tabletColumns ?? mobileColumns
        : desktopColumns ?? tabletColumns ?? mobileColumns;
    final gap = width < 600
        ? mobileGap
        : width < 1024
        ? tabletGap ?? mobileGap
        : desktopGap ?? tabletGap ?? mobileGap;

    final rows = <Widget>[];
    for (var start = 0; start < children.length; start += crossAxisCount) {
      if (rows.isNotEmpty) {
        rows.add(SizedBox(height: gap));
      }

      final rowChildren = <Widget>[];
      for (var column = 0; column < crossAxisCount; column++) {
        if (column > 0) {
          rowChildren.add(SizedBox(width: gap));
        }
        final childIndex = start + column;
        rowChildren.add(
          Expanded(
            child: childIndex < children.length
                ? children[childIndex]
                : const SizedBox.shrink(),
          ),
        );
      }
      rows.add(
        Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: rowChildren,
        ),
      );
    }

    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: rows,
    );
  }
}
