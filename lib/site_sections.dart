import 'package:flutter/material.dart';

import 'sparrow_kit_web/responsive.dart';

class SiteNavigation extends StatelessWidget implements PreferredSizeWidget {
  const SiteNavigation({super.key});
  @override
  Size get preferredSize => const Size.fromHeight(64);

  @override
  Widget build(BuildContext context) => AppBar(
    backgroundColor: Colors.white,
    elevation: 0,
    toolbarHeight: 64,
    leading: IconButton(
      icon: const Icon(Icons.menu, color: Color(0xFF142B46)),
      tooltip: 'Open navigation',
      onPressed: () => Scaffold.of(context).openDrawer(),
    ),
    title: const Text(
      'SPARROW KIT',
      style: TextStyle(
        fontSize: 16,
        fontWeight: FontWeight.bold,
        letterSpacing: 1.5,
        color: Color(0xFF142B46),
      ),
    ),
    actions: [
      InkWell(
        onTap: () => Navigator.pushNamed(context, '/contact'),
        child: const ActionLabel(label: 'Start a project'),
      ),
    ],
  );
}

class ActionLabel extends StatelessWidget {
  const ActionLabel({super.key, required this.label});
  final String label;

  @override
  Widget build(BuildContext context) => Container(
    decoration: BoxDecoration(
      color: const Color(0xFF173B5E),
      borderRadius: BorderRadius.circular(4),
    ),
    child: Padding(
      padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 13),
      child: Text(
        label,
        style: const TextStyle(
          color: Colors.white,
          fontSize: 14,
          fontWeight: FontWeight.w600,
        ),
      ),
    ),
  );
}

class NavigationLabel extends StatelessWidget {
  const NavigationLabel({super.key, required this.label});
  final String label;

  @override
  Widget build(BuildContext context) => Padding(
    padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 12),
    child: Text(
      label,
      style: const TextStyle(
        color: Color(0xFF40556A),
        fontSize: 14,
        fontWeight: FontWeight.w600,
      ),
    ),
  );
}

class SiteLinks extends StatelessWidget {
  const SiteLinks({super.key});
  @override
  Widget build(BuildContext context) => Container(
    color: Colors.white,
    padding: const EdgeInsets.symmetric(horizontal: 16),
    child: Wrap(
      spacing: 4,
      children: [
        InkWell(
          onTap: () => Navigator.pushNamed(context, '/'),
          child: const NavigationLabel(label: 'Home'),
        ),
        InkWell(
          onTap: () => Navigator.pushNamed(context, '/services'),
          child: const NavigationLabel(label: 'Services'),
        ),
        InkWell(
          onTap: () => Navigator.pushNamed(context, '/solutions'),
          child: const NavigationLabel(label: 'Solutions'),
        ),
        InkWell(
          onTap: () => Navigator.pushNamed(context, '/about'),
          child: const NavigationLabel(label: 'About'),
        ),
        InkWell(
          onTap: () => Navigator.pushNamed(context, '/contact'),
          child: const NavigationLabel(label: 'Contact'),
        ),
      ],
    ),
  );
}

class SiteDrawer extends StatelessWidget {
  const SiteDrawer({super.key});
  @override
  Widget build(BuildContext context) => Drawer(
    backgroundColor: Colors.white,
    child: Padding(
      padding: const EdgeInsets.all(28),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const Text(
            'SPARROW KIT',
            style: TextStyle(
              fontSize: 16,
              fontWeight: FontWeight.bold,
              letterSpacing: 1.5,
              color: Color(0xFF142B46),
            ),
          ),
          const SizedBox(height: 32),
          InkWell(
            onTap: () => Navigator.pushNamed(context, '/'),
            child: const NavigationLabel(label: 'Home'),
          ),
          InkWell(
            onTap: () => Navigator.pushNamed(context, '/services'),
            child: const NavigationLabel(label: 'Services'),
          ),
          InkWell(
            onTap: () => Navigator.pushNamed(context, '/solutions'),
            child: const NavigationLabel(label: 'Solutions'),
          ),
          InkWell(
            onTap: () => Navigator.pushNamed(context, '/about'),
            child: const NavigationLabel(label: 'About'),
          ),
          InkWell(
            onTap: () => Navigator.pushNamed(context, '/contact'),
            child: const NavigationLabel(label: 'Contact'),
          ),
        ],
      ),
    ),
  );
}

class HeroSection extends StatelessWidget {
  const HeroSection({super.key});
  @override
  Widget build(BuildContext context) => Container(
    color: const Color(0xFFF4F7FA),
    child: Padding(
      padding: const EdgeInsets.symmetric(horizontal: 28, vertical: 56),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          const SparrowResponsiveGrid(
            mobileColumns: 1,
            tabletColumns: 2,
            desktopColumns: 2,
            mobileGap: 32,
            tabletGap: 40,
            desktopGap: 64,
            children: [HeroIntroduction(), HeroVisual()],
          ),
          const SizedBox(height: 48),
          const SparrowResponsiveGrid(
            mobileColumns: 1,
            tabletColumns: 3,
            desktopColumns: 3,
            mobileGap: 12,
            children: [
              HeroPoint(
                number: '01',
                title: 'Thoughtful strategy',
                description: 'Clarity before code.',
              ),
              HeroPoint(
                number: '02',
                title: 'Considered design',
                description: 'Made for real people.',
              ),
              HeroPoint(
                number: '03',
                title: 'Sound engineering',
                description: 'Built for what comes next.',
              ),
            ],
          ),
        ],
      ),
    ),
  );
}

class HeroIntroduction extends StatelessWidget {
  const HeroIntroduction({super.key});
  @override
  Widget build(BuildContext context) => Column(
    crossAxisAlignment: CrossAxisAlignment.start,
    children: [
      const Text(
        'INDEPENDENT THINKING. LASTING IMPACT.',
        style: TextStyle(
          fontSize: 11,
          fontWeight: FontWeight.bold,
          letterSpacing: 1.5,
          color: Color(0xFF3B6691),
        ),
      ),
      const SizedBox(height: 24),
      const Text(
        'Thoughtful software,\nbuilt to last.',
        style: TextStyle(
          fontSize: 40,
          fontWeight: FontWeight.bold,
          height: 1.15,
          color: Color(0xFF142B46),
        ),
      ),
      const SizedBox(height: 20),
      const Text(
        'This demonstration explores how teams can turn complex challenges into clear, dependable digital products.',
        style: TextStyle(fontSize: 17, height: 1.6, color: Color(0xFF516275)),
      ),
      const SizedBox(height: 28),
      Wrap(
        spacing: 12,
        runSpacing: 12,
        children: [
          InkWell(
            onTap: () => Navigator.pushNamed(context, '/contact'),
            child: const ActionLabel(label: 'Start a conversation'),
          ),
          InkWell(
            onTap: () => Navigator.pushNamed(context, '/services'),
            child: Container(
              color: Colors.white,
              child: const Padding(
                padding: EdgeInsets.symmetric(horizontal: 20, vertical: 13),
                child: Text(
                  'Explore our services',
                  style: TextStyle(
                    color: Color(0xFF173B5E),
                    fontSize: 14,
                    fontWeight: FontWeight.w600,
                  ),
                ),
              ),
            ),
          ),
        ],
      ),
    ],
  );
}

class HeroVisual extends StatelessWidget {
  const HeroVisual({super.key});
  @override
  Widget build(BuildContext context) => Container(
    color: const Color(0xFFE2EBF2),
    child: Padding(
      padding: const EdgeInsets.all(28),
      child: Container(
        color: Colors.white,
        child: const Padding(
          padding: EdgeInsets.all(28),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                'THE SPARROW APPROACH',
                style: TextStyle(
                  fontSize: 11,
                  fontWeight: FontWeight.bold,
                  letterSpacing: 1.3,
                  color: Color(0xFF547B9E),
                ),
              ),
              SizedBox(height: 32),
              Text(
                'Clarity at every step.',
                style: TextStyle(
                  fontSize: 24,
                  fontWeight: FontWeight.bold,
                  color: Color(0xFF142B46),
                ),
              ),
              SizedBox(height: 16),
              Divider(color: Color(0xFFDCE5ED), height: 24),
              Text(
                '01   Discover the real challenge',
                style: TextStyle(fontSize: 14, color: Color(0xFF40556A)),
              ),
              Divider(color: Color(0xFFDCE5ED), height: 24),
              Text(
                '02   Design with intention',
                style: TextStyle(fontSize: 14, color: Color(0xFF40556A)),
              ),
              Divider(color: Color(0xFFDCE5ED), height: 24),
              Text(
                '03   Build for the long term',
                style: TextStyle(fontSize: 14, color: Color(0xFF40556A)),
              ),
            ],
          ),
        ),
      ),
    ),
  );
}

class HeroPoint extends StatelessWidget {
  const HeroPoint({
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
    color: Colors.white,
    child: Padding(
      padding: const EdgeInsets.all(20),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            number,
            style: const TextStyle(fontSize: 12, color: Color(0xFF6383A1)),
          ),
          const SizedBox(height: 18),
          Text(
            title,
            style: const TextStyle(
              fontSize: 16,
              fontWeight: FontWeight.bold,
              color: Color(0xFF142B46),
            ),
          ),
          const SizedBox(height: 8),
          Text(
            description,
            style: const TextStyle(fontSize: 14, color: Color(0xFF637183)),
          ),
        ],
      ),
    ),
  );
}

class HighlightsSection extends StatelessWidget {
  const HighlightsSection({super.key});
  @override
  Widget build(BuildContext context) => Container(
    padding: const EdgeInsets.symmetric(horizontal: 28, vertical: 34),
    child: const Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          'BUILT ON PRINCIPLES',
          style: TextStyle(
            fontSize: 11,
            letterSpacing: 1.5,
            fontWeight: FontWeight.bold,
            color: Color(0xFF6383A1),
          ),
        ),
        SizedBox(height: 16),
        Text(
          'A practical partner for the long term.',
          style: TextStyle(fontSize: 20, color: Color(0xFF142B46)),
        ),
        SizedBox(height: 12),
        Text(
          'Clear communication  /  Quality engineering  /  Sustainable delivery',
          style: TextStyle(fontSize: 14, height: 1.6, color: Color(0xFF637183)),
        ),
      ],
    ),
  );
}

class SectionHeading extends StatelessWidget {
  const SectionHeading({
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
      Text(
        eyebrow,
        style: const TextStyle(
          fontSize: 11,
          fontWeight: FontWeight.bold,
          letterSpacing: 1.5,
          color: Color(0xFF3B6691),
        ),
      ),
      const SizedBox(height: 16),
      Text(
        title,
        style: const TextStyle(
          fontSize: 28,
          fontWeight: FontWeight.bold,
          height: 1.2,
          color: Color(0xFF142B46),
        ),
      ),
      const SizedBox(height: 14),
      Text(
        description,
        style: const TextStyle(
          fontSize: 16,
          height: 1.6,
          color: Color(0xFF637183),
        ),
      ),
      const SizedBox(height: 32),
    ],
  );
}

class InfoCard extends StatelessWidget {
  const InfoCard({
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
    color: const Color(0xFFE2E9EF),
    child: Padding(
      padding: const EdgeInsets.all(1),
      child: Container(
        color: Colors.white,
        child: Padding(
          padding: const EdgeInsets.all(26),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                number,
                style: const TextStyle(
                  fontSize: 12,
                  fontWeight: FontWeight.bold,
                  color: Color(0xFF547B9E),
                ),
              ),
              const SizedBox(height: 22),
              Text(
                title,
                style: const TextStyle(
                  fontSize: 18,
                  fontWeight: FontWeight.bold,
                  color: Color(0xFF142B46),
                ),
              ),
              const SizedBox(height: 10),
              Text(
                description,
                style: const TextStyle(
                  fontSize: 14,
                  height: 1.6,
                  color: Color(0xFF637183),
                ),
              ),
            ],
          ),
        ),
      ),
    ),
  );
}

class ServicesSection extends StatelessWidget {
  const ServicesSection({super.key});
  @override
  Widget build(BuildContext context) => Container(
    color: Colors.white,
    padding: const EdgeInsets.symmetric(horizontal: 28, vertical: 72),
    child: const Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        SectionHeading(
          eyebrow: '01 / SERVICE CONCEPTS',
          title: 'The right expertise, at every stage.',
          description: 'Illustrative service concepts bring strategy, design and engineering together, from the first idea through a dependable product.',
        ),
        SparrowResponsiveGrid(
          mobileColumns: 1,
          tabletColumns: 2,
          desktopColumns: 3,
          mobileGap: 14,
          children: [
            InfoCard(
              number: '01',
              title: 'Custom software',
              description: 'Purpose-built applications that fit the way your business works.',
            ),
            InfoCard(
              number: '02',
              title: 'Web applications',
              description: 'Accessible, responsive digital experiences for modern teams.',
            ),
            InfoCard(
              number: '03',
              title: 'Mobile applications',
              description:
                  'Useful, intuitive experiences for people on the move.',
            ),
            InfoCard(
              number: '04',
              title: 'UI / UX design',
              description:
                  'Research-led interfaces that make complexity feel simple.',
            ),
            InfoCard(
              number: '05',
              title: 'Enterprise solutions',
              description:
                  'Connected systems designed around real operational needs.',
            ),
            InfoCard(
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
  Widget build(BuildContext context) => Container(
    color: const Color(0xFFF4F7FA),
    child: const Padding(
      padding: EdgeInsets.symmetric(horizontal: 28, vertical: 72),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          SectionHeading(
            eyebrow: '02 / SOLUTION CONCEPTS',
            title: 'Technology with a clear purpose.',
            description: 'These concepts show how software can help people make decisions, serve customers and move work forward.',
          ),
          SparrowResponsiveGrid(
            mobileColumns: 1,
            tabletColumns: 2,
            desktopColumns: 3,
            mobileGap: 14,
            children: [
              InfoCard(
                number: 'A',
                title: 'Operations platforms',
                description: 'Bring processes, teams and information together in one place.',
              ),
              InfoCard(
                number: 'B',
                title: 'Customer experiences',
                description:
                    'Make essential services easier to find, use and trust.',
              ),
              InfoCard(
                number: 'C',
                title: 'Data and reporting',
                description: 'Turn operational data into useful, understandable insight.',
              ),
            ],
          ),
        ],
      ),
    ),
  );
}

class WhySection extends StatelessWidget {
  const WhySection({super.key});
  @override
  Widget build(BuildContext context) => Container(
    padding: const EdgeInsets.symmetric(horizontal: 28, vertical: 72),
    child: const Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        SectionHeading(
          eyebrow: '03 / OUR APPROACH',
          title: 'Built for today. Ready for tomorrow.',
          description: 'Good software is not just delivered. It is understood, maintained and improved over time.',
        ),
        SparrowResponsiveGrid(
          mobileColumns: 1,
          tabletColumns: 2,
          desktopColumns: 3,
          mobileGap: 14,
          children: [
            InfoCard(
              number: '01',
              title: 'Engineering quality',
              description: 'Careful implementation and testing are part of the work, not an afterthought.',
            ),
            InfoCard(
              number: '02',
              title: 'Scalable architecture',
              description: 'Practical foundations leave room for products and teams to grow.',
            ),
            InfoCard(
              number: '03',
              title: 'Business-first delivery',
              description:
                  'Technical choices are grounded in the outcome you need.',
            ),
            InfoCard(
              number: '04',
              title: 'Reliable collaboration',
              description: 'Open communication keeps decisions clear and progress visible.',
            ),
            InfoCard(
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

class ProjectsSection extends StatelessWidget {
  const ProjectsSection({super.key});
  @override
  Widget build(BuildContext context) => Container(
    color: const Color(0xFFF4F7FA),
    child: const Padding(
      padding: EdgeInsets.symmetric(horizontal: 28, vertical: 72),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          SectionHeading(
            eyebrow: '04 / SELECTED CONCEPTS',
            title: 'A closer look at the possibilities.',
            description: 'Illustrative demo concepts, created to show the kinds of problems we can help solve. These are not client case studies.',
          ),
          SparrowResponsiveGrid(
            mobileColumns: 1,
            tabletColumns: 2,
            desktopColumns: 2,
            mobileGap: 18,
            children: [
              InfoCard(
                number: 'DEMO / OPERATIONS',
                title: 'A clearer view of work',
                description: 'A conceptual workspace for coordinating projects, priorities and decisions across a growing team.',
              ),
              InfoCard(
                number: 'DEMO / CUSTOMER EXPERIENCE',
                title: 'Services made more accessible',
                description: 'A conceptual customer portal that makes everyday requests easier to navigate and manage.',
              ),
            ],
          ),
        ],
      ),
    ),
  );
}

class ProcessSection extends StatelessWidget {
  const ProcessSection({super.key});
  @override
  Widget build(BuildContext context) => Container(
    padding: const EdgeInsets.symmetric(horizontal: 28, vertical: 72),
    child: const Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        SectionHeading(
          eyebrow: '05 / HOW WE WORK',
          title: 'A clear path from idea to impact.',
          description: 'A collaborative process that makes space for learning, feedback and steady progress.',
        ),
        SparrowResponsiveGrid(
          mobileColumns: 1,
          tabletColumns: 2,
          desktopColumns: 4,
          mobileGap: 14,
          children: [
            InfoCard(
              number: '01 / DISCOVER',
              title: 'Understand',
              description: 'Align on the problem, people and desired outcomes.',
            ),
            InfoCard(
              number: '02 / DEFINE',
              title: 'Shape',
              description:
                  'Turn insights into a focused plan and design direction.',
            ),
            InfoCard(
              number: '03 / BUILD',
              title: 'Deliver',
              description:
                  'Design, build and test in clear, collaborative stages.',
            ),
            InfoCard(
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

class AboutSection extends StatelessWidget {
  const AboutSection({super.key});
  @override
  Widget build(BuildContext context) => Container(
    color: const Color(0xFF142B46),
    child: const Padding(
      padding: EdgeInsets.symmetric(horizontal: 28, vertical: 72),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            '06 / ABOUT SPARROW KIT',
            style: TextStyle(
              fontSize: 11,
              letterSpacing: 1.5,
              fontWeight: FontWeight.bold,
              color: Color(0xFFADC5DA),
            ),
          ),
          SizedBox(height: 18),
          Text(
            'Technology should make work better.',
            style: TextStyle(
              fontSize: 28,
              fontWeight: FontWeight.bold,
              height: 1.2,
              color: Colors.white,
            ),
          ),
          SizedBox(height: 18),
          Text(
            'Sparrow Kit is a technology company concept built around a simple belief: the best digital products combine human understanding with disciplined engineering.',
            style: TextStyle(
              fontSize: 16,
              height: 1.7,
              color: Color(0xFFD8E1EA),
            ),
          ),
          SizedBox(height: 18),
          Text(
            'Our philosophy is to listen carefully, communicate openly and build with the people who will use and maintain the result in mind.',
            style: TextStyle(
              fontSize: 16,
              height: 1.7,
              color: Color(0xFFD8E1EA),
            ),
          ),
        ],
      ),
    ),
  );
}

class FaqSection extends StatelessWidget {
  const FaqSection({super.key});
  @override
  Widget build(BuildContext context) => Container(
    padding: const EdgeInsets.symmetric(horizontal: 28, vertical: 72),
    child: const Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        SectionHeading(
          eyebrow: '07 / FAQ',
          title: 'A few useful answers.',
          description:
              'A straightforward starting point for a thoughtful conversation.',
        ),
        InfoCard(
          number: '01',
          title: 'When should we involve a technical partner?',
          description: 'Early involvement can clarify scope, validate assumptions and help avoid costly rework.',
        ),
        SizedBox(height: 12),
        InfoCard(
          number: '02',
          title: 'Can you work with an existing product?',
          description: 'A typical engagement can start with an assessment of the existing system and its priorities.',
        ),
        SizedBox(height: 12),
        InfoCard(
          number: '03',
          title: 'What happens after launch?',
          description: 'Maintenance, documentation and ongoing improvements should be planned alongside delivery.',
        ),
      ],
    ),
  );
}

class ContactSection extends StatelessWidget {
  const ContactSection({super.key});
  @override
  Widget build(BuildContext context) => Container(
    color: const Color(0xFFEAF1F6),
    child: Padding(
      padding: const EdgeInsets.symmetric(horizontal: 28, vertical: 72),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const SectionHeading(
            eyebrow: '08 / LET’S TALK',
            title: 'Have something in mind?',
            description: 'Tell us about the challenge, the opportunity or the idea you are exploring.',
          ),
          InkWell(
            onTap: () => Navigator.pushNamed(context, '/contact'),
            child: const ActionLabel(label: 'Start a conversation'),
          ),
          const SizedBox(height: 20),
          const Text(
            'Email: contact@example.com  ·  Business contact: placeholder',
            style: TextStyle(
              fontSize: 14,
              height: 1.6,
              color: Color(0xFF637183),
            ),
          ),
          const SizedBox(height: 8),
          const Text(
            'Contact details are placeholders and are not monitored.',
            style: TextStyle(fontSize: 13, color: Color(0xFF637183)),
          ),
        ],
      ),
    ),
  );
}

class ContactFormPreview extends StatelessWidget {
  const ContactFormPreview({super.key});
  @override
  Widget build(BuildContext context) => Container(
    padding: const EdgeInsets.symmetric(horizontal: 28, vertical: 48),
    child: const Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          'Contact form preview',
          style: TextStyle(
            fontSize: 22,
            fontWeight: FontWeight.bold,
            color: Color(0xFF142B46),
          ),
        ),
        SizedBox(height: 12),
        Text(
          'This form is a visual preview and is not connected to a service.',
          style: TextStyle(fontSize: 14, color: Color(0xFF637183)),
        ),
        SizedBox(height: 24),
        TextField(
          decoration: InputDecoration(labelText: 'Name', hintText: 'Your name'),
        ),
        SizedBox(height: 16),
        TextField(
          keyboardType: TextInputType.emailAddress,
          decoration: InputDecoration(
            labelText: 'Email',
            hintText: 'you@example.com',
          ),
        ),
        SizedBox(height: 16),
        TextField(
          decoration: InputDecoration(
            labelText: 'Project',
            hintText: 'Tell us what you are considering',
          ),
        ),
      ],
    ),
  );
}

class FooterLabel extends StatelessWidget {
  const FooterLabel({super.key, required this.label});
  final String label;

  @override
  Widget build(BuildContext context) => Padding(
    padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 10),
    child: Text(
      label,
      style: const TextStyle(fontSize: 14, color: Color(0xFFD8E1EA)),
    ),
  );
}

class SiteFooter extends StatelessWidget {
  const SiteFooter({super.key});
  @override
  Widget build(BuildContext context) => Container(
    color: const Color(0xFF142B46),
    child: Padding(
      padding: const EdgeInsets.symmetric(horizontal: 28, vertical: 40),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const Text(
            'SPARROW KIT',
            style: TextStyle(
              fontSize: 16,
              fontWeight: FontWeight.bold,
              letterSpacing: 1.5,
              color: Colors.white,
            ),
          ),
          const SizedBox(height: 12),
          const Text(
            'Thoughtful software, built to last.',
            style: TextStyle(fontSize: 14, color: Color(0xFFD8E1EA)),
          ),
          const SizedBox(height: 20),
          Wrap(
            spacing: 8,
            runSpacing: 8,
            children: [
              InkWell(
                onTap: () => Navigator.pushNamed(context, '/'),
                child: const FooterLabel(label: 'Home'),
              ),
              InkWell(
                onTap: () => Navigator.pushNamed(context, '/services'),
                child: const FooterLabel(label: 'Services'),
              ),
              InkWell(
                onTap: () => Navigator.pushNamed(context, '/solutions'),
                child: const FooterLabel(label: 'Solutions'),
              ),
              InkWell(
                onTap: () => Navigator.pushNamed(context, '/about'),
                child: const FooterLabel(label: 'About'),
              ),
              InkWell(
                onTap: () => Navigator.pushNamed(context, '/contact'),
                child: const FooterLabel(label: 'Contact'),
              ),
            ],
          ),
          const SizedBox(height: 12),
          const Text(
            'contact@example.com  ·  Placeholder contact',
            style: TextStyle(fontSize: 14, color: Color(0xFFD8E1EA)),
          ),
          const SizedBox(height: 24),
          const Text(
            '© 2026 Sparrow Kit. Demonstration website.',
            style: TextStyle(fontSize: 12, color: Color(0xFFADC5DA)),
          ),
        ],
      ),
    ),
  );
}
