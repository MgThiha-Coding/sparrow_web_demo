import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:sparrow_corporate_site/site_pages.dart';

void main() {
  testWidgets('Header action opens the contact page', (tester) async {
    await tester.pumpWidget(
      MaterialApp(
        home: const SitePage(),
        routes: {'/contact': (_) => const ContactPage()},
      ),
    );
    expect(find.text('Thoughtful software,\nbuilt to last.'), findsOneWidget);
    await tester.tap(find.text('Let’s talk'));
    await tester.pumpAndSettle();
    expect(find.text('Have something in mind?'), findsOneWidget);
    expect(find.text('Contact form preview'), findsOneWidget);
  });

  testWidgets('Wrapped site navigation opens services', (tester) async {
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
    expect(find.text('Connected expertise across the work.'), findsOneWidget);
  });

  testWidgets('Contact preview describes fields and cannot submit', (
    tester,
  ) async {
    await tester.pumpWidget(MaterialApp(home: const ContactPage()));

    expect(find.byType(TextField), findsNWidgets(3));
    final nameField = tester.widget<TextField>(find.byType(TextField).first);
    expect(nameField.decoration?.labelText, 'Name');
    expect(nameField.decoration?.hintText, 'Your name');
    expect(nameField.decoration?.helperText, contains('illustrate'));

    final sendButton = tester.widget<OutlinedButton>(
      find.byType(OutlinedButton),
    );
    expect(sendButton.onPressed, isNull);
    expect(find.textContaining('demonstration only'), findsOneWidget);
  });
}
