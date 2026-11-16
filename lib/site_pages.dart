import 'package:flutter/material.dart';

import 'site_sections.dart';
import 'sparrow_kit_web/responsive.dart';

class SitePage extends StatelessWidget {
  const SitePage({super.key});

  @override
  Widget build(BuildContext context) => const Scaffold(
    backgroundColor: Colors.white,
    appBar: SiteNavigation(),
    body: SingleChildScrollView(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          SiteLinks(),
          HeroSection(),
          HomeServicesSection(),
          HomeApproachSection(),
          ProjectConceptsSection(),
          FaqSection(),
          ContactBanner(),
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
    body: SingleChildScrollView(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          SiteLinks(),
          PageIntro(
            eyebrow: 'SERVICES',
            title: 'The right expertise, at every stage.',
            description: 'Illustrative service concepts bring strategy, design and engineering together, from the first idea through a dependable product.',
          ),
          ServicesSection(),
          HomeApproachSection(),
          ContactBanner(),
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
    body: SingleChildScrollView(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          SiteLinks(),
          PageIntro(
            eyebrow: 'SOLUTIONS',
            title: 'Technology with a clear purpose.',
            description: 'These concepts show how software can help people make decisions, serve customers and move work forward.',
          ),
          SolutionsSection(),
          ProjectConceptsSection(),
          ContactBanner(),
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
    body: SingleChildScrollView(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          SiteLinks(),
          PageIntro(
            eyebrow: 'ABOUT SPARROW KIT',
            title: 'Technology should make work better.',
            description: 'Sparrow Kit is a technology company concept built around a simple belief: the best digital products combine human understanding with disciplined engineering.',
          ),
          AboutSummarySection(),
          WhySection(),
          FaqSection(),
          ContactBanner(),
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
    body: SingleChildScrollView(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          SiteLinks(),
          PageIntro(
            eyebrow: 'CONTACT',
            title: 'Have something in mind?',
            description: 'Tell us about the challenge, the opportunity or the idea you are exploring. This page and its form are a demonstration only.',
          ),
          SiteSection(
            child: SparrowResponsiveGrid(
              mobileColumns: 1,
              tabletColumns: 1,
              desktopColumns: 2,
              mobileGap: 18,
              desktopGap: 28,
              children: [ContactDetails(), ContactFormPreview()],
            ),
          ),
          SiteFooter(),
        ],
      ),
    ),
  );
}
