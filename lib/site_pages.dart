import 'package:flutter/material.dart';

import 'site_design.dart';
import 'sparrow_kit_web/responsive.dart';

class SitePage extends StatelessWidget {
  const SitePage({super.key});

  @override
  Widget build(BuildContext context) => const SiteFrame(
    activeHome: true,
    activeServices: false,
    activeSolutions: false,
    activeAbout: false,
    activeContact: false,
    content: Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        HomeHero(),
        StrategySection(),
        ApproachSection(),
        ProjectConceptsSection(),
        FaqEditorialSection(),
        SitePageClosing(),
      ],
    ),
  );
}

class ServicesPage extends StatelessWidget {
  const ServicesPage({super.key});

  @override
  Widget build(BuildContext context) => const SiteFrame(
    activeHome: false,
    activeServices: true,
    activeSolutions: false,
    activeAbout: false,
    activeContact: false,
    content: Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        SitePageIntro(
          eyebrow: 'CAPABILITIES',
          title: 'The right expertise, at every stage.',
          description:
              'Illustrative service concepts bring strategy, design and engineering together, from the first idea through a dependable product.',
        ),
        CapabilityPageSection(),
        ApproachSection(),
        SitePageClosing(),
      ],
    ),
  );
}

class SolutionsPage extends StatelessWidget {
  const SolutionsPage({super.key});

  @override
  Widget build(BuildContext context) => const SiteFrame(
    activeHome: false,
    activeServices: false,
    activeSolutions: true,
    activeAbout: false,
    activeContact: false,
    content: Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        SitePageIntro(
          eyebrow: 'SOLUTION CONCEPTS',
          title: 'Technology with a clear purpose.',
          description:
              'These concepts show how software can help people make decisions, serve customers and move work forward.',
        ),
        SolutionConceptsSection(),
        ProjectConceptsSection(),
        SitePageClosing(),
      ],
    ),
  );
}

class AboutPage extends StatelessWidget {
  const AboutPage({super.key});

  @override
  Widget build(BuildContext context) => const SiteFrame(
    activeHome: false,
    activeServices: false,
    activeSolutions: false,
    activeAbout: true,
    activeContact: false,
    content: Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        SitePageIntro(
          eyebrow: 'ABOUT SPARROW KIT',
          title: 'Technology should make work better.',
          description:
              'Sparrow Kit is a technology company concept built around a simple belief: the best digital products combine human understanding with disciplined engineering.',
        ),
        PointOfViewSection(),
        PrinciplesSection(),
        FaqEditorialSection(),
        SitePageClosing(),
      ],
    ),
  );
}

class ContactPage extends StatelessWidget {
  const ContactPage({super.key});

  @override
  Widget build(BuildContext context) => const SiteFrame(
    activeHome: false,
    activeServices: false,
    activeSolutions: false,
    activeAbout: false,
    activeContact: true,
    content: Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        SitePageIntro(
          eyebrow: 'CONTACT',
          title: 'Have something in mind?',
          description:
              'Tell us about the challenge, the opportunity or the idea you are exploring. This page and its form are a demonstration only.',
        ),
        SiteBandMist(
          verticalPadding: 60,
          child: SparrowResponsiveGrid(
            mobileColumns: 1,
            tabletColumns: 2,
            desktopColumns: 2,
            mobileGap: 20,
            tabletGap: 24,
            desktopGap: 34,
            children: [ContactDetailsPanel(), ContactFormPanel()],
          ),
        ),
      ],
    ),
  );
}
