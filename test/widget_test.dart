import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:sparrow_corporate_site/site_pages.dart';

void main() {
  testWidgets('Hero action opens the contact page', (tester) async {
    await tester.pumpWidget(
      MaterialApp(
        home: const SitePage(),
        routes: {'/contact': (_) => const ContactPage()},
      ),
    );
    expect(find.text('Thoughtful software,\nbuilt to last.'), findsOneWidget);
    await tester.ensureVisible(find.text('Start a conversation'));
    await tester.pumpAndSettle();
    await tester.tap(find.text('Start a conversation'));
    await tester.pumpAndSettle();
    expect(find.text('Have something in mind?'), findsOneWidget);
    expect(find.text('Contact form preview'), findsOneWidget);
  });

  testWidgets('Mobile navigation opens services and closes', (tester) async {
    await tester.pumpWidget(
      MaterialApp(
        home: const SitePage(),
        routes: {'/services': (_) => const ServicesPage()},
      ),
    );
    await tester.tap(find.text('MENU'));
    await tester.pumpAndSettle();
    expect(find.text('CLOSE'), findsOneWidget);
    await tester.tap(find.text('Services').last);
    await tester.pumpAndSettle();
    expect(find.text('CLOSE'), findsNothing);
    expect(find.text('Thoughtful software,\nbuilt to last.'), findsNothing);
    expect(find.text('The right expertise, at every stage.'), findsOneWidget);
    expect(find.text('Connected expertise across the work.'), findsOneWidget);
  });

  testWidgets('Contact preview describes fields and cannot submit', (
    tester,
  ) async {
    await tester.pumpWidget(MaterialApp(home: const ContactPage()));

    final fields = tester.widgetList<TextField>(find.byType(TextField));
    expect(fields, hasLength(3));
    final nameField = fields.first;
    expect(nameField.decoration?.labelText, 'Name');
    expect(nameField.decoration?.hintText, 'Your name');
    expect(nameField.decoration?.helperText, contains('illustrate'));
    for (final field in fields) {
      expect(field.style?.fontFamily, 'Manrope');
      expect(field.decoration?.labelStyle?.fontFamily, 'Manrope');
      expect(field.decoration?.hintStyle?.fontFamily, 'Manrope');
      expect(field.decoration?.helperStyle?.fontFamily, 'Manrope');
    }

    final sendButton = tester.widget<OutlinedButton>(
      find.byType(OutlinedButton),
    );
    expect(sendButton.onPressed, isNull);
    expect(find.textContaining('demonstration only'), findsOneWidget);
  });
}
