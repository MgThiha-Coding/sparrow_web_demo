import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:sparrow_corporate_site/site_pages.dart';

void main() {
  testWidgets('Site opens the contact page from the primary action', (
    tester,
  ) async {
    await tester.pumpWidget(
      MaterialApp(
        home: const SitePage(),
        routes: {'/contact': (_) => const ContactPage()},
      ),
    );
    expect(find.text('Thoughtful software,\nbuilt to last.'), findsOneWidget);
    await tester.tap(find.text('Start a project'));
    await tester.pumpAndSettle();
    expect(find.text('Contact form preview'), findsOneWidget);
  });

  testWidgets('Horizontal navigation opens services', (tester) async {
    await tester.pumpWidget(
      MaterialApp(
        home: const SitePage(),
        routes: {'/services': (_) => const ServicesPage()},
      ),
    );
    await tester.tap(find.text('Services').first);
    await tester.pumpAndSettle();
    expect(find.text('Thoughtful software,\nbuilt to last.'), findsNothing);
    expect(find.text('The right expertise, at every stage.'), findsOneWidget);
  });
}
