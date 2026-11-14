import 'package:flutter/material.dart';

import 'site_pages.dart';

void main() {
  runApp(
    MaterialApp(
      title: 'Sparrow Kit | Thoughtful software, built to last',
      home: const SitePage(),
      routes: {
        '/services': (_) => const ServicesPage(),
        '/solutions': (_) => const SolutionsPage(),
        '/about': (_) => const AboutPage(),
        '/contact': (_) => const ContactPage(),
      },
    ),
  );
}
