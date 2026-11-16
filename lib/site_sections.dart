import 'package:flutter/material.dart';

import 'sparrow_kit_web/responsive.dart';
import 'sparrow_kit_web/responsive_widgets.dart';
import 'sparrow_kit_web/semantic_widgets.dart';

class SiteNavigation extends StatelessWidget implements PreferredSizeWidget {
  const SiteNavigation({super.key});

  @override
  Size get preferredSize => const Size.fromHeight(72);

  @override
  Widget build(BuildContext context) => AppBar(
    backgroundColor: Colors.white,
    elevation: 0,
    toolbarHeight: 72,
    title: InkWell(
      onTap: () => Navigator.pushNamed(context, '/'),
      child: Row(
        children: [
          Container(
            width: 36,
            height: 36,
            decoration: const BoxDecoration(
              color: Color(0xFF173B5E),
              borderRadius: BorderRadius.all(Radius.circular(10)),
            ),
            child: Center(
              child: const Text(
                'S',
                style: TextStyle(
                  fontFamily: 'Manrope',
                  fontFamilyFallback: ['system-ui', 'sans-serif'],
                  color: Colors.white,
                  fontSize: 20,
                  fontWeight: FontWeight.w700,
                ),
              ),
            ),
          ),
          const SizedBox(width: 11),
          Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            mainAxisSize: MainAxisSize.min,
            children: [
              const Text(
                'SPARROW KIT',
                style: TextStyle(
                  fontFamily: 'Manrope',
                  fontFamilyFallback: ['system-ui', 'sans-serif'],
                  color: Color(0xFF142B46),
                  fontSize: 14,
                  fontWeight: FontWeight.w700,
                  letterSpacing: 0.7,
                ),
              ),
              const Text(
                'Thoughtful software',
                style: TextStyle(
                  fontFamily: 'Manrope',
                  fontFamilyFallback: ['system-ui', 'sans-serif'],
                  color: Color(0xFF64758A),
                  fontSize: 11,
                  fontWeight: FontWeight.w400,
                ),
              ),
            ],
          ),
        ],
      ),
    ),
    actions: const [HeaderAction()],
  );
}

class HeaderAction extends StatelessWidget {
  const HeaderAction({super.key});

  @override
  Widget build(BuildContext context) => Padding(
    padding: const EdgeInsets.only(right: 20),
    child: PrimaryContactAction(label: 'Let’s talk'),
  );
}

class SiteLinks extends StatelessWidget {
  const SiteLinks({super.key});

  @override
  Widget build(BuildContext context) => Container(
    color: Colors.white,
    child: Center(
      child: Container(
        constraints: const BoxConstraints(maxWidth: 1200),
        padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 8),
        child: Wrap(
          spacing: 4,
          runSpacing: 2,
          children: [
            InkWell(
              onTap: () => Navigator.pushNamed(context, '/'),
              child: SiteNavItem(label: 'Home'),
            ),
            InkWell(
              onTap: () => Navigator.pushNamed(context, '/services'),
              child: SiteNavItem(label: 'Services'),
            ),
            InkWell(
              onTap: () => Navigator.pushNamed(context, '/solutions'),
              child: SiteNavItem(label: 'Solutions'),
            ),
            InkWell(
              onTap: () => Navigator.pushNamed(context, '/about'),
              child: SiteNavItem(label: 'About'),
            ),
            InkWell(
              onTap: () => Navigator.pushNamed(context, '/contact'),
              child: SiteNavItem(label: 'Contact'),
            ),
          ],
        ),
      ),
    ),
  );
}

class SiteNavItem extends StatelessWidget {
  const SiteNavItem({super.key, required this.label});

  final String label;

  @override
  Widget build(BuildContext context) => Padding(
    padding: const EdgeInsets.symmetric(horizontal: 11, vertical: 9),
    child: Text(
      label,
      style: const TextStyle(
        fontFamily: 'Manrope',
        fontFamilyFallback: ['system-ui', 'sans-serif'],
        color: Color(0xFF40556A),
        fontSize: 13,
        fontWeight: FontWeight.w600,
      ),
    ),
  );
}

class PrimaryContactAction extends StatelessWidget {
  const PrimaryContactAction({super.key, required this.label});

  final String label;

  @override
  Widget build(BuildContext context) => InkWell(
    onTap: () => Navigator.pushNamed(context, '/contact'),
    child: Container(
      decoration: BoxDecoration(
        color: const Color(0xFF173B5E),
        borderRadius: BorderRadius.circular(9),
        boxShadow: const [
          BoxShadow(
            color: Color(0x17173B5E),
            blurRadius: 12,
            offset: Offset(0, 4),
          ),
        ],
      ),
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 18, vertical: 12),
        child: Text(
          label,
          style: const TextStyle(
            fontFamily: 'Manrope',
            fontFamilyFallback: ['system-ui', 'sans-serif'],
            color: Colors.white,
            fontSize: 13,
            fontWeight: FontWeight.w700,
          ),
        ),
      ),
    ),
  );
}

class SecondaryServicesAction extends StatelessWidget {
  const SecondaryServicesAction({super.key, required this.label});

  final String label;

  @override
  Widget build(BuildContext context) => InkWell(
    onTap: () => Navigator.pushNamed(context, '/services'),
    child: Container(
      decoration: BoxDecoration(
        color: Colors.white,
        border: Border.all(color: const Color(0xFFD8E1EA)),
        borderRadius: BorderRadius.circular(9),
      ),
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 18, vertical: 12),
        child: Text(
          label,
          style: const TextStyle(
            fontFamily: 'Manrope',
            fontFamilyFallback: ['system-ui', 'sans-serif'],
            color: Color(0xFF173B5E),
            fontSize: 13,
            fontWeight: FontWeight.w700,
          ),
        ),
      ),
    ),
  );
}

class SectionContent extends StatelessWidget {
  const SectionContent({
    super.key,
    required this.child,
    this.verticalPadding = 64,
  });

  final Widget child;
  final double verticalPadding;

  @override
  Widget build(BuildContext context) => Center(
    child: Container(
      constraints: const BoxConstraints(maxWidth: 1200),
      padding: EdgeInsets.symmetric(horizontal: 24, vertical: verticalPadding),
      child: child,
    ),
  );
}

class SiteSection extends StatelessWidget {
  const SiteSection({
    super.key,
    required this.child,
    this.verticalPadding = 64,
  });

  final Widget child;
  final double verticalPadding;

  @override
  Widget build(BuildContext context) => Container(
    color: Colors.white,
    child: SectionContent(verticalPadding: verticalPadding, child: child),
  );
}

class PaleSection extends StatelessWidget {
  const PaleSection({
    super.key,
    required this.child,
    this.verticalPadding = 64,
  });

  final Widget child;
  final double verticalPadding;

  @override
  Widget build(BuildContext context) => Container(
    color: const Color(0xFFF4F7FA),
    child: SectionContent(verticalPadding: verticalPadding, child: child),
  );
}

class NavySection extends StatelessWidget {
  const NavySection({
    super.key,
    required this.child,
    this.verticalPadding = 64,
  });

  final Widget child;
  final double verticalPadding;

  @override
  Widget build(BuildContext context) => Container(
    color: const Color(0xFF142B46),
    child: SectionContent(verticalPadding: verticalPadding, child: child),
  );
}

class MetaText extends StatelessWidget {
  const MetaText({super.key, required this.text});

  final String text;

  @override
  Widget build(BuildContext context) => Text(
    text,
    style: const TextStyle(
      fontFamily: 'Manrope',
      fontFamilyFallback: ['system-ui', 'sans-serif'],
      fontSize: 11,
      color: Color(0xFF3B6691),
      fontWeight: FontWeight.w700,
      height: 1.4,
      letterSpacing: 1.1,
    ),
  );
}

class BodyText extends StatelessWidget {
  const BodyText({super.key, required this.text});

  final String text;

  @override
  Widget build(BuildContext context) => Text(
    text,
    style: const TextStyle(
      fontFamily: 'Manrope',
      fontFamilyFallback: ['system-ui', 'sans-serif'],
      fontSize: 15,
      color: Color(0xFF516275),
      fontWeight: FontWeight.w400,
      height: 1.7,
    ),
  );
}

class SmallText extends StatelessWidget {
  const SmallText({super.key, required this.text});

  final String text;

  @override
  Widget build(BuildContext context) => Text(
    text,
    style: const TextStyle(
      fontFamily: 'Manrope',
      fontFamilyFallback: ['system-ui', 'sans-serif'],
      fontSize: 13,
      color: Color(0xFF637183),
      fontWeight: FontWeight.w400,
      height: 1.6,
    ),
  );
}

class LightMetaText extends StatelessWidget {
  const LightMetaText({super.key, required this.text});

  final String text;

  @override
  Widget build(BuildContext context) => Text(
    text,
    style: const TextStyle(
      fontFamily: 'Manrope',
      fontFamilyFallback: ['system-ui', 'sans-serif'],
      fontSize: 11,
      color: Color(0xFFADC5DA),
      fontWeight: FontWeight.w700,
      height: 1.4,
      letterSpacing: 1.1,
    ),
  );
}

class LightCopyText extends StatelessWidget {
  const LightCopyText({super.key, required this.text});

  final String text;

  @override
  Widget build(BuildContext context) => Text(
    text,
    style: const TextStyle(
      fontFamily: 'Manrope',
      fontFamilyFallback: ['system-ui', 'sans-serif'],
      fontSize: 12,
      color: Color(0xFFD8E1EA),
      fontWeight: FontWeight.w400,
      height: 1.55,
    ),
  );
}

class ContactLineText extends StatelessWidget {
  const ContactLineText({super.key, required this.text});

  final String text;

  @override
  Widget build(BuildContext context) => Text(
    text,
    style: const TextStyle(
      fontFamily: 'Manrope',
      fontFamilyFallback: ['system-ui', 'sans-serif'],
      fontSize: 14,
      color: Color(0xFF40556A),
      fontWeight: FontWeight.w600,
      height: 1.6,
    ),
  );
}

class PageIntro extends StatelessWidget {
  const PageIntro({
    super.key,
    required this.eyebrow,
    required this.title,
    required this.description,
  });

  final String eyebrow;
  final String title;
  final String description;

  @override
  Widget build(BuildContext context) => PaleSection(
    verticalPadding: 56,
    child: Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        MetaText(text: eyebrow),
        const SizedBox(height: 15),
        SparrowHeading(
          level: 1,
          text: title,
          style: const TextStyle(
            fontFamily: 'Manrope',
            fontFamilyFallback: ['system-ui', 'sans-serif'],
            color: Color(0xFF142B46),
            fontSize: 38,
            fontWeight: FontWeight.w700,
            height: 1.12,
          ),
        ),
        const SizedBox(height: 14),
        SparrowResponsiveText(
          text: description,
          mobileFontSize: 16,
          tabletFontSize: 17,
          desktopFontSize: 18,
          style: const TextStyle(
            fontFamily: 'Manrope',
            fontFamilyFallback: ['system-ui', 'sans-serif'],
            color: Color(0xFF516275),
            height: 1.6,
          ),
        ),
      ],
    ),
  );
}

class SectionIntro extends StatelessWidget {
  const SectionIntro({
    super.key,
    required this.eyebrow,
    required this.title,
    required this.description,
  });

  final String eyebrow;
  final String title;
  final String description;

  @override
  Widget build(BuildContext context) => Column(
    crossAxisAlignment: CrossAxisAlignment.start,
    children: [
      MetaText(text: eyebrow),
      const SizedBox(height: 13),
      SparrowHeading(
        level: 2,
        text: title,
        style: const TextStyle(
          fontFamily: 'Manrope',
          fontFamilyFallback: ['system-ui', 'sans-serif'],
          color: Color(0xFF142B46),
          fontSize: 27,
          fontWeight: FontWeight.w700,
          height: 1.2,
        ),
      ),
      const SizedBox(height: 11),
      SmallText(text: description),
      const SizedBox(height: 26),
    ],
  );
}

class FeatureCard extends StatelessWidget {
  const FeatureCard({
    super.key,
    required this.number,
    required this.title,
    required this.description,
  });

  final String number;
  final String title;
  final String description;

  @override
  Widget build(BuildContext context) => Container(
    decoration: BoxDecoration(
      color: Colors.white,
      border: Border.all(color: const Color(0xFFE2E9EF)),
      borderRadius: BorderRadius.circular(14),
      boxShadow: const [
        BoxShadow(
          color: Color(0x0A142B46),
          blurRadius: 18,
          offset: Offset(0, 5),
        ),
      ],
    ),
    child: Padding(
      padding: const EdgeInsets.all(22),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          MetaText(text: number),
          const SizedBox(height: 18),
          SparrowHeading(
            level: 3,
            text: title,
            style: const TextStyle(
              fontFamily: 'Manrope',
              fontFamilyFallback: ['system-ui', 'sans-serif'],
              color: Color(0xFF142B46),
              fontSize: 17,
              fontWeight: FontWeight.w700,
              height: 1.3,
            ),
          ),
          const SizedBox(height: 9),
          SmallText(text: description),
        ],
      ),
    ),
  );
}

class HeroSection extends StatelessWidget {
  const HeroSection({super.key});

  @override
  Widget build(BuildContext context) => PaleSection(
    verticalPadding: 30,
    child: SparrowResponsiveGrid(
      mobileColumns: 1,
      tabletColumns: 1,
      desktopColumns: 2,
      mobileGap: 32,
      desktopGap: 58,
      children: const [HeroIntroduction(), HeroVisual()],
    ),
  );
}

class HeroIntroduction extends StatelessWidget {
  const HeroIntroduction({super.key});

  @override
  Widget build(BuildContext context) => Column(
    crossAxisAlignment: CrossAxisAlignment.start,
    children: [
      const MetaText(text: 'INDEPENDENT THINKING. LASTING IMPACT.'),
      const SizedBox(height: 20),
      const SparrowHeading(
        level: 1,
        text: 'Thoughtful software,\nbuilt to last.',
        style: TextStyle(
          fontFamily: 'Manrope',
          fontFamilyFallback: ['system-ui', 'sans-serif'],
          color: Color(0xFF142B46),
          fontSize: 39,
          fontWeight: FontWeight.w700,
          height: 1.1,
        ),
      ),
      const SizedBox(height: 18),
      const SparrowResponsiveText(
        text: 'This demonstration explores how teams can turn complex challenges into clear, dependable digital products.',
        mobileFontSize: 16,
        tabletFontSize: 17,
        desktopFontSize: 18,
        style: TextStyle(
          fontFamily: 'Manrope',
          fontFamilyFallback: ['system-ui', 'sans-serif'],
          color: Color(0xFF516275),
          height: 1.65,
        ),
      ),
      const SizedBox(height: 24),
      Wrap(
        spacing: 10,
        runSpacing: 10,
        children: const [
          PrimaryContactAction(label: 'Start a conversation'),
          SecondaryServicesAction(label: 'Explore services'),
        ],
      ),
      const SizedBox(height: 22),
      const SmallText(text: 'STRATEGY  ·  DESIGN  ·  ENGINEERING'),
    ],
  );
}

class HeroVisual extends StatelessWidget {
  const HeroVisual({super.key});

  @override
  Widget build(BuildContext context) => Stack(
    alignment: Alignment.topLeft,
    children: [
      Container(
        decoration: BoxDecoration(
          gradient: const LinearGradient(
            colors: [Color(0xFFE8F0F6), Color(0xFFF8FAFC)],
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
          ),
          border: Border.all(color: const Color(0xFFD8E3EC)),
          borderRadius: BorderRadius.circular(22),
        ),
        child: Padding(
          padding: const EdgeInsets.all(20),
          child: Container(
            decoration: BoxDecoration(
              color: Colors.white,
              border: Border.all(color: const Color(0xFFE2E9EF)),
              borderRadius: BorderRadius.circular(15),
              boxShadow: const [
                BoxShadow(
                  color: Color(0x12142B46),
                  blurRadius: 24,
                  offset: Offset(0, 10),
                ),
              ],
            ),
            child: Padding(
              padding: const EdgeInsets.all(22),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: const [
                  MetaText(text: 'THE SPARROW APPROACH'),
                  SizedBox(height: 16),
                  SparrowHeading(
                    level: 3,
                    text: 'Clarity at every step.',
                    style: TextStyle(
                      fontFamily: 'Manrope',
                      fontFamilyFallback: ['system-ui', 'sans-serif'],
                      color: Color(0xFF142B46),
                      fontSize: 20,
                      fontWeight: FontWeight.w700,
                      height: 1.3,
                    ),
                  ),
                  SizedBox(height: 6),
                  SmallText(
                    text: 'A practical path from challenge to product.',
                  ),
                  SizedBox(height: 15),
                  Divider(color: Color(0xFFE5EBF0), height: 1),
                  MethodStep(
                    number: '01',
                    title: 'Understand the challenge',
                    description: 'Listen, learn and align on the real need.',
                  ),
                  Divider(color: Color(0xFFE5EBF0), height: 1),
                  MethodStep(
                    number: '02',
                    title: 'Design with intention',
                    description: 'Shape a clear experience around people.',
                  ),
                  Divider(color: Color(0xFFE5EBF0), height: 1),
                  MethodStep(
                    number: '03',
                    title: 'Build for the long term',
                    description: 'Deliver carefully and plan for what follows.',
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
      Positioned(
        top: 8,
        right: 8,
        child: SparrowResponsiveVisibility(
          showOnMobile: false,
          showOnTablet: false,
          showOnDesktop: true,
          child: Container(
            decoration: const BoxDecoration(
              color: Color(0xFF173B5E),
              borderRadius: BorderRadius.all(Radius.circular(20)),
            ),
            child: Padding(
              padding: EdgeInsets.symmetric(horizontal: 12, vertical: 7),
              child: Text(
                'A WORKING METHOD',
                style: TextStyle(
                  fontFamily: 'Manrope',
                  fontFamilyFallback: ['system-ui', 'sans-serif'],
                  color: Colors.white,
                  fontSize: 9,
                  fontWeight: FontWeight.w700,
                  letterSpacing: 0.5,
                ),
              ),
            ),
          ),
        ),
      ),
    ],
  );
}

class MethodStep extends StatelessWidget {
  const MethodStep({
    super.key,
    required this.number,
    required this.title,
    required this.description,
  });

  final String number;
  final String title;
  final String description;

  @override
  Widget build(BuildContext context) => Padding(
    padding: const EdgeInsets.symmetric(vertical: 13),
    child: Row(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Container(
          width: 30,
          height: 30,
          decoration: BoxDecoration(
            color: const Color(0xFFEAF1F6),
            borderRadius: BorderRadius.circular(9),
          ),
          child: Center(
            child: Text(
              number,
              style: const TextStyle(
                fontFamily: 'Manrope',
                fontFamilyFallback: ['system-ui', 'sans-serif'],
                fontSize: 10,
                color: Color(0xFF315D82),
                fontWeight: FontWeight.w700,
                height: 1.2,
              ),
            ),
          ),
        ),
        const SizedBox(width: 12),
        Expanded(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                title,
                style: const TextStyle(
                  fontFamily: 'Manrope',
                  fontFamilyFallback: ['system-ui', 'sans-serif'],
                  fontSize: 12,
                  color: Color(0xFF142B46),
                  fontWeight: FontWeight.w700,
                  height: 1.4,
                ),
              ),
              const SizedBox(height: 3),
              SmallText(text: description),
            ],
          ),
        ),
      ],
    ),
  );
}

class HomeServicesSection extends StatelessWidget {
  const HomeServicesSection({super.key});

  @override
  Widget build(BuildContext context) => SiteSection(
    child: Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: const [
        SectionIntro(
          eyebrow: 'CAPABILITIES',
          title: 'The right expertise, at every stage.',
          description: 'Illustrative service concepts bring strategy, design and engineering together, from the first idea through a dependable product.',
        ),
        SparrowResponsiveGrid(
          mobileColumns: 1,
          tabletColumns: 2,
          desktopColumns: 3,
          mobileGap: 14,
          children: [
            FeatureCard(
              number: '01 / SOFTWARE',
              title: 'Purpose-built products',
              description: 'Applications shaped around the way people and businesses work.',
            ),
            FeatureCard(
              number: '02 / EXPERIENCE',
              title: 'Useful by design',
              description: 'Accessible, intuitive interfaces that make complex work clearer.',
            ),
            FeatureCard(
              number: '03 / ENGINEERING',
              title: 'Built to evolve',
              description:
                  'Dependable foundations that support maintenance and change.',
            ),
          ],
        ),
      ],
    ),
  );
}

class HomeApproachSection extends StatelessWidget {
  const HomeApproachSection({super.key});

  @override
  Widget build(BuildContext context) => NavySection(
    child: Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: const [
        LightMetaText(text: 'HOW WE WORK'),
        SizedBox(height: 13),
        SparrowHeading(
          level: 2,
          text: 'A clear path from idea to impact.',
          style: TextStyle(
            fontFamily: 'Manrope',
            fontFamilyFallback: ['system-ui', 'sans-serif'],
            color: Colors.white,
            fontSize: 27,
            fontWeight: FontWeight.w700,
            height: 1.2,
          ),
        ),
        SizedBox(height: 25),
        SparrowResponsiveGrid(
          mobileColumns: 1,
          tabletColumns: 2,
          desktopColumns: 4,
          mobileGap: 18,
          children: [
            ProcessCard(
              number: '01 / DISCOVER',
              title: 'Understand',
              description: 'Align on the problem, people and desired outcomes.',
            ),
            ProcessCard(
              number: '02 / DEFINE',
              title: 'Shape',
              description:
                  'Turn insights into a focused plan and design direction.',
            ),
            ProcessCard(
              number: '03 / BUILD',
              title: 'Deliver',
              description:
                  'Design, build and test in clear, collaborative stages.',
            ),
            ProcessCard(
              number: '04 / EVOLVE',
              title: 'Improve',
              description: 'Support, maintain and refine as needs change.',
            ),
          ],
        ),
      ],
    ),
  );
}

class ProcessCard extends StatelessWidget {
  const ProcessCard({
    super.key,
    required this.number,
    required this.title,
    required this.description,
  });

  final String number;
  final String title;
  final String description;

  @override
  Widget build(BuildContext context) => Container(
    decoration: BoxDecoration(
      border: Border.all(color: const Color(0xFF36516C)),
      borderRadius: BorderRadius.circular(13),
    ),
    child: Padding(
      padding: const EdgeInsets.all(17),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            number,
            style: const TextStyle(
              fontFamily: 'Manrope',
              fontFamilyFallback: ['system-ui', 'sans-serif'],
              color: Color(0xFFADC5DA),
              fontSize: 10,
              fontWeight: FontWeight.w700,
            ),
          ),
          const SizedBox(height: 13),
          SparrowHeading(
            level: 3,
            text: title,
            style: const TextStyle(
              fontFamily: 'Manrope',
              fontFamilyFallback: ['system-ui', 'sans-serif'],
              color: Colors.white,
              fontSize: 16,
              fontWeight: FontWeight.w700,
              height: 1.3,
            ),
          ),
          const SizedBox(height: 7),
          LightCopyText(text: description),
        ],
      ),
    ),
  );
}

class ProjectConceptsSection extends StatelessWidget {
  const ProjectConceptsSection({super.key});

  @override
  Widget build(BuildContext context) => PaleSection(
    child: Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: const [
        SectionIntro(
          eyebrow: 'DEMO CONCEPTS',
          title: 'A closer look at the possibilities.',
          description: 'Illustrative demo concepts show the kinds of problems we can help solve. These are not client case studies.',
        ),
        SparrowResponsiveGrid(
          mobileColumns: 1,
          tabletColumns: 2,
          desktopColumns: 2,
          mobileGap: 16,
          children: [
            FeatureCard(
              number: 'DEMO / OPERATIONS',
              title: 'A clearer view of work',
              description: 'A conceptual workspace for coordinating projects, priorities and decisions across a growing team.',
            ),
            FeatureCard(
              number: 'DEMO / CUSTOMER EXPERIENCE',
              title: 'Services made more accessible',
              description: 'A conceptual customer portal that makes everyday requests easier to navigate and manage.',
            ),
          ],
        ),
      ],
    ),
  );
}

class AboutSummarySection extends StatelessWidget {
  const AboutSummarySection({super.key});

  @override
  Widget build(BuildContext context) => SiteSection(
    child: const Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        BodyText(
          text: 'Our philosophy is to listen carefully, communicate openly and build with the people who will use and maintain the result in mind.',
        ),
      ],
    ),
  );
}

class ServicesSection extends StatelessWidget {
  const ServicesSection({super.key});

  @override
  Widget build(BuildContext context) => SiteSection(
    child: Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: const [
        SectionIntro(
          eyebrow: 'OUR SERVICES',
          title: 'Connected expertise across the work.',
          description: 'Illustrative service concepts bring strategy, design and engineering together, from the first idea through a dependable product.',
        ),
        SparrowResponsiveGrid(
          mobileColumns: 1,
          tabletColumns: 2,
          desktopColumns: 3,
          mobileGap: 15,
          children: [
            FeatureCard(
              number: '01',
              title: 'Custom software',
              description: 'Purpose-built applications that fit the way your business works.',
            ),
            FeatureCard(
              number: '02',
              title: 'Web applications',
              description: 'Accessible, responsive digital experiences for modern teams.',
            ),
            FeatureCard(
              number: '03',
              title: 'Mobile applications',
              description:
                  'Useful, intuitive experiences for people on the move.',
            ),
            FeatureCard(
              number: '04',
              title: 'UI / UX design',
              description:
                  'Research-led interfaces that make complexity feel simple.',
            ),
            FeatureCard(
              number: '05',
              title: 'Enterprise solutions',
              description:
                  'Connected systems designed around real operational needs.',
            ),
            FeatureCard(
              number: '06',
              title: 'Technical consulting',
              description: 'Clear guidance for architecture, delivery and technology decisions.',
            ),
          ],
        ),
      ],
    ),
  );
}

class SolutionsSection extends StatelessWidget {
  const SolutionsSection({super.key});

  @override
  Widget build(BuildContext context) => SiteSection(
    child: Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: const [
        SectionIntro(
          eyebrow: 'SOLUTION CONCEPTS',
          title: 'Ideas organized around real needs.',
          description: 'These concepts show how software can help people make decisions, serve customers and move work forward.',
        ),
        SparrowResponsiveGrid(
          mobileColumns: 1,
          tabletColumns: 2,
          desktopColumns: 3,
          mobileGap: 15,
          children: [
            FeatureCard(
              number: 'A',
              title: 'Operations platforms',
              description: 'Bring processes, teams and information together in one place.',
            ),
            FeatureCard(
              number: 'B',
              title: 'Customer experiences',
              description:
                  'Make essential services easier to find, use and trust.',
            ),
            FeatureCard(
              number: 'C',
              title: 'Data and reporting',
              description:
                  'Turn operational data into useful, understandable insight.',
            ),
          ],
        ),
      ],
    ),
  );
}

class WhySection extends StatelessWidget {
  const WhySection({super.key});

  @override
  Widget build(BuildContext context) => PaleSection(
    child: Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: const [
        SectionIntro(
          eyebrow: 'OUR APPROACH',
          title: 'Built for today. Ready for tomorrow.',
          description: 'Good software is not just delivered. It is understood, maintained and improved over time.',
        ),
        SparrowResponsiveGrid(
          mobileColumns: 1,
          tabletColumns: 2,
          desktopColumns: 3,
          mobileGap: 15,
          children: [
            FeatureCard(
              number: '01',
              title: 'Engineering quality',
              description: 'Careful implementation and testing are part of the work, not an afterthought.',
            ),
            FeatureCard(
              number: '02',
              title: 'Scalable architecture',
              description: 'Practical foundations leave room for products and teams to grow.',
            ),
            FeatureCard(
              number: '03',
              title: 'Business-first delivery',
              description:
                  'Technical choices are grounded in the outcome you need.',
            ),
            FeatureCard(
              number: '04',
              title: 'Reliable collaboration',
              description: 'Open communication keeps decisions clear and progress visible.',
            ),
            FeatureCard(
              number: '05',
              title: 'Long-term maintainability',
              description: 'Readable systems and thoughtful handovers support what comes next.',
            ),
          ],
        ),
      ],
    ),
  );
}

class FaqSection extends StatelessWidget {
  const FaqSection({super.key});

  @override
  Widget build(BuildContext context) => SiteSection(
    child: Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: const [
        SectionIntro(
          eyebrow: 'FAQ',
          title: 'A few useful answers.',
          description:
              'A straightforward starting point for a thoughtful conversation.',
        ),
        FeatureCard(
          number: '01',
          title: 'When should we involve a technical partner?',
          description: 'Early involvement can clarify scope, validate assumptions and help avoid costly rework.',
        ),
        SizedBox(height: 12),
        FeatureCard(
          number: '02',
          title: 'Can you work with an existing product?',
          description: 'A typical engagement can start with an assessment of the existing system and its priorities.',
        ),
        SizedBox(height: 12),
        FeatureCard(
          number: '03',
          title: 'What happens after launch?',
          description: 'Maintenance, documentation and ongoing improvements should be planned alongside delivery.',
        ),
      ],
    ),
  );
}

class ContactBanner extends StatelessWidget {
  const ContactBanner({super.key});

  @override
  Widget build(BuildContext context) => PaleSection(
    verticalPadding: 48,
    child: Row(
      crossAxisAlignment: CrossAxisAlignment.center,
      children: const [
        Expanded(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              MetaText(text: 'NEXT STEP'),
              SizedBox(height: 10),
              SparrowHeading(
                level: 2,
                text: 'Have something in mind?',
                style: TextStyle(
                  fontFamily: 'Manrope',
                  fontFamilyFallback: ['system-ui', 'sans-serif'],
                  color: Color(0xFF142B46),
                  fontSize: 24,
                  fontWeight: FontWeight.w700,
                  height: 1.25,
                ),
              ),
              SizedBox(height: 8),
              SmallText(
                text: 'Explore the contact page and its clearly marked form preview.',
              ),
            ],
          ),
        ),
        SizedBox(width: 18),
        PrimaryContactAction(label: 'Contact'),
      ],
    ),
  );
}

class ContactFormPreview extends StatelessWidget {
  const ContactFormPreview({super.key});

  @override
  Widget build(BuildContext context) => Container(
    decoration: BoxDecoration(
      color: Colors.white,
      border: Border.all(color: const Color(0xFFE2E9EF)),
      borderRadius: BorderRadius.circular(15),
      boxShadow: const [
        BoxShadow(
          color: Color(0x0A142B46),
          blurRadius: 18,
          offset: Offset(0, 5),
        ),
      ],
    ),
    child: Padding(
      padding: const EdgeInsets.all(22),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: const [
          SparrowHeading(
            level: 2,
            text: 'Contact form preview',
            style: TextStyle(
              fontFamily: 'Manrope',
              fontFamilyFallback: ['system-ui', 'sans-serif'],
              color: Color(0xFF142B46),
              fontSize: 20,
              fontWeight: FontWeight.w700,
              height: 1.3,
            ),
          ),
          SizedBox(height: 7),
          SmallText(
            text: 'This form is a visual preview and is not connected to a service.',
          ),
          SizedBox(height: 21),
          TextField(
            decoration: InputDecoration(
              labelText: 'Name',
              hintText: 'Your name',
              helperText: 'A name helps illustrate the form layout.',
              filled: true,
              fillColor: Colors.white,
              border: OutlineInputBorder(
                borderRadius: BorderRadius.all(Radius.circular(9)),
                borderSide: BorderSide(color: Color(0xFFD1DCE6), width: 1),
              ),
              focusedBorder: OutlineInputBorder(
                borderRadius: BorderRadius.all(Radius.circular(9)),
                borderSide: BorderSide(color: Color(0xFF315D82), width: 2),
              ),
            ),
          ),
          SizedBox(height: 14),
          TextField(
            keyboardType: TextInputType.emailAddress,
            decoration: InputDecoration(
              labelText: 'Email',
              hintText: 'you@example.com',
              helperText: 'No address is sent or stored.',
              filled: true,
              fillColor: Colors.white,
              border: OutlineInputBorder(
                borderRadius: BorderRadius.all(Radius.circular(9)),
                borderSide: BorderSide(color: Color(0xFFD1DCE6), width: 1),
              ),
              focusedBorder: OutlineInputBorder(
                borderRadius: BorderRadius.all(Radius.circular(9)),
                borderSide: BorderSide(color: Color(0xFF315D82), width: 2),
              ),
            ),
          ),
          SizedBox(height: 14),
          TextField(
            decoration: InputDecoration(
              labelText: 'Project',
              hintText: 'What are you considering?',
              helperText: 'This example field does not submit.',
              filled: true,
              fillColor: Colors.white,
              border: OutlineInputBorder(
                borderRadius: BorderRadius.all(Radius.circular(9)),
                borderSide: BorderSide(color: Color(0xFFD1DCE6), width: 1),
              ),
              focusedBorder: OutlineInputBorder(
                borderRadius: BorderRadius.all(Radius.circular(9)),
                borderSide: BorderSide(color: Color(0xFF315D82), width: 2),
              ),
            ),
          ),
          SizedBox(height: 18),
          OutlinedButton(
            onPressed: null,
            child: Text(
              'Sending is not enabled',
              style: TextStyle(
                fontFamily: 'Manrope',
                fontFamilyFallback: ['system-ui', 'sans-serif'],
                fontSize: 13,
                fontWeight: FontWeight.w600,
              ),
            ),
          ),
        ],
      ),
    ),
  );
}

class ContactDetails extends StatelessWidget {
  const ContactDetails({super.key});

  @override
  Widget build(BuildContext context) => Container(
    decoration: BoxDecoration(
      color: const Color(0xFFF4F7FA),
      borderRadius: BorderRadius.circular(15),
    ),
    child: Padding(
      padding: const EdgeInsets.all(22),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: const [
          SparrowHeading(
            level: 2,
            text: 'Contact details',
            style: TextStyle(
              fontFamily: 'Manrope',
              fontFamilyFallback: ['system-ui', 'sans-serif'],
              color: Color(0xFF142B46),
              fontSize: 20,
              fontWeight: FontWeight.w700,
              height: 1.3,
            ),
          ),
          SizedBox(height: 14),
          ContactLineText(text: 'Email: contact@example.com'),
          SizedBox(height: 6),
          ContactLineText(text: 'Business contact: placeholder'),
          SizedBox(height: 14),
          SmallText(
            text: 'Contact details are placeholders and are not monitored. This site does not send or store form entries.',
          ),
        ],
      ),
    ),
  );
}

class SiteFooter extends StatelessWidget {
  const SiteFooter({super.key});

  @override
  Widget build(BuildContext context) => NavySection(
    verticalPadding: 35,
    child: Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const Text(
          'SPARROW KIT',
          style: TextStyle(
            fontFamily: 'Manrope',
            fontFamilyFallback: ['system-ui', 'sans-serif'],
            color: Colors.white,
            fontSize: 14,
            fontWeight: FontWeight.w700,
            letterSpacing: 0.7,
          ),
        ),
        const SizedBox(height: 7),
        const LightCopyText(text: 'Thoughtful software, built to last.'),
        const SizedBox(height: 17),
        Wrap(
          spacing: 4,
          runSpacing: 4,
          children: [
            InkWell(
              onTap: () => Navigator.pushNamed(context, '/'),
              child: FooterItem(label: 'Home'),
            ),
            InkWell(
              onTap: () => Navigator.pushNamed(context, '/services'),
              child: FooterItem(label: 'Services'),
            ),
            InkWell(
              onTap: () => Navigator.pushNamed(context, '/solutions'),
              child: FooterItem(label: 'Solutions'),
            ),
            InkWell(
              onTap: () => Navigator.pushNamed(context, '/about'),
              child: FooterItem(label: 'About'),
            ),
            InkWell(
              onTap: () => Navigator.pushNamed(context, '/contact'),
              child: FooterItem(label: 'Contact'),
            ),
          ],
        ),
        const SizedBox(height: 16),
        const LightCopyText(
          text: 'contact@example.com  ·  Placeholder contact',
        ),
        const SizedBox(height: 18),
        const Text(
          '© 2026 Sparrow Kit. Demonstration website.',
          style: TextStyle(
            fontFamily: 'Manrope',
            fontFamilyFallback: ['system-ui', 'sans-serif'],
            color: Color(0xFFADC5DA),
            fontSize: 11,
            fontWeight: FontWeight.w400,
          ),
        ),
      ],
    ),
  );
}

class FooterItem extends StatelessWidget {
  const FooterItem({super.key, required this.label});

  final String label;

  @override
  Widget build(BuildContext context) => Padding(
    padding: const EdgeInsets.symmetric(horizontal: 9, vertical: 7),
    child: Text(
      label,
      style: const TextStyle(
        fontFamily: 'Manrope',
        fontFamilyFallback: ['system-ui', 'sans-serif'],
        color: Color(0xFFD8E1EA),
        fontSize: 12,
        fontWeight: FontWeight.w600,
      ),
    ),
  );
}
