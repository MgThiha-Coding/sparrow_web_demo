import 'package:flutter/material.dart';

import 'site_sections.dart';

class SitePage extends StatelessWidget {
  const SitePage({super.key});

  @override
  Widget build(BuildContext context) => const Scaffold(
    backgroundColor: Colors.white,
    appBar: SiteNavigation(),
    drawer: SiteDrawer(),
    body: SingleChildScrollView(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          SiteLinks(),
          HeroSection(),
          HighlightsSection(),
          ServicesSection(),
          SolutionsSection(),
          WhySection(),
          ProjectsSection(),
          ProcessSection(),
          AboutSection(),
          FaqSection(),
          ContactSection(),
          SiteFooter(),
        ],
      ),
    ),
  );
}

class ServicesPage extends StatelessWidget {
  const ServicesPage({super.key});
  @override
  Widget build(BuildContext context) => const Scaffold(
    appBar: SiteNavigation(),
    drawer: SiteDrawer(),
    body: SingleChildScrollView(
      child: Column(
        children: [
          SiteLinks(),
          ServicesSection(),
          ProcessSection(),
          ContactSection(),
          SiteFooter(),
        ],
      ),
    ),
  );
}

class SolutionsPage extends StatelessWidget {
  const SolutionsPage({super.key});
  @override
  Widget build(BuildContext context) => const Scaffold(
    appBar: SiteNavigation(),
    drawer: SiteDrawer(),
    body: SingleChildScrollView(
      child: Column(
        children: [
          SiteLinks(),
          SolutionsSection(),
          ProjectsSection(),
          ContactSection(),
          SiteFooter(),
        ],
      ),
    ),
  );
}

class AboutPage extends StatelessWidget {
  const AboutPage({super.key});
  @override
  Widget build(BuildContext context) => const Scaffold(
    appBar: SiteNavigation(),
    drawer: SiteDrawer(),
    body: SingleChildScrollView(
      child: Column(
        children: [
          SiteLinks(),
          AboutSection(),
          WhySection(),
          FaqSection(),
          SiteFooter(),
        ],
      ),
    ),
  );
}

class ContactPage extends StatelessWidget {
  const ContactPage({super.key});
  @override
  Widget build(BuildContext context) => const Scaffold(
    appBar: SiteNavigation(),
    drawer: SiteDrawer(),
    body: SingleChildScrollView(
      child: Column(
        children: [
          SiteLinks(),
          ContactSection(),
          ContactFormPreview(),
          SiteFooter(),
        ],
      ),
    ),
  );
}
