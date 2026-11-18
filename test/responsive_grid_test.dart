import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:sparrow_corporate_site/sparrow_kit_web/responsive.dart';
import 'package:sparrow_corporate_site/sparrow_kit_web/responsive_widgets.dart';

void main() {
  testWidgets('Responsive grid applies each viewport layout', (tester) async {
    addTearDown(tester.view.resetPhysicalSize);
    addTearDown(tester.view.resetDevicePixelRatio);

    const viewports = <(double, int, double)>[
      (375, 1, 12),
      (768, 2, 24),
      (1440, 3, 32),
    ];

    for (final (width, columns, spacing) in viewports) {
      tester.view.physicalSize = Size(width, 900);
      tester.view.devicePixelRatio = 1;
      await tester.pumpWidget(
        MaterialApp(
          home: Scaffold(
            body: SparrowResponsiveGrid(
              mobileColumns: 1,
              tabletColumns: 2,
              desktopColumns: 3,
              mobileGap: 12,
              tabletGap: 24,
              desktopGap: 32,
              children: const [SizedBox(height: 40), SizedBox(height: 40)],
            ),
          ),
        ),
      );

      final row = find
          .descendant(
            of: find.byType(SparrowResponsiveGrid),
            matching: find.byType(Row),
          )
          .first;
      expect(
        find.descendant(of: row, matching: find.byType(Expanded)),
        findsNWidgets(columns),
      );
      final gaps = tester.widgetList<SizedBox>(
        find.descendant(
          of: find.byType(SparrowResponsiveGrid),
          matching: find.byType(SizedBox),
        ),
      );
      expect(
        gaps.any((gap) => gap.width == spacing || gap.height == spacing),
        isTrue,
      );
    }
  });

  testWidgets('Responsive visibility follows mobile, tablet, and desktop', (
    tester,
  ) async {
    addTearDown(tester.view.resetPhysicalSize);
    addTearDown(tester.view.resetDevicePixelRatio);

    for (final (width, isDesktop) in [
      (375.0, false),
      (768.0, false),
      (1440.0, true),
    ]) {
      tester.view.physicalSize = Size(width, 900);
      tester.view.devicePixelRatio = 1;
      await tester.pumpWidget(
        MaterialApp(
          home: Scaffold(
            body: SparrowResponsiveVisibility(
              showOnMobile: false,
              showOnTablet: false,
              showOnDesktop: true,
              child: const Text('Desktop navigation'),
            ),
          ),
        ),
      );
      expect(
        find.text('Desktop navigation'),
        isDesktop ? findsOneWidget : findsNothing,
      );
    }
  });
}
