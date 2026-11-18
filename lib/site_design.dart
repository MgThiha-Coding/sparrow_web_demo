import 'package:flutter/material.dart';

import 'sparrow_kit_web/responsive.dart';
import 'sparrow_kit_web/responsive_widgets.dart';
import 'sparrow_kit_web/semantic_widgets.dart';

class SiteFrame extends StatelessWidget {
  const SiteFrame({
    super.key,
    required this.activeHome,
    required this.activeServices,
    required this.activeSolutions,
    required this.activeAbout,
    required this.activeContact,
    required this.content,
  });

  final bool activeHome;
  final bool activeServices;
  final bool activeSolutions;
  final bool activeAbout;
  final bool activeContact;
  final Widget content;

  @override
  Widget build(BuildContext context) => Scaffold(
    backgroundColor: const Color(0xFFF5F3EE),
    appBar: const SiteNavigation(),
    drawer: SiteDrawer(
      activeHome: activeHome,
      activeServices: activeServices,
      activeSolutions: activeSolutions,
      activeAbout: activeAbout,
      activeContact: activeContact,
    ),
    body: SingleChildScrollView(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [content, const SiteFooter()],
      ),
    ),
  );
}

class SiteNavigation extends StatelessWidget implements PreferredSizeWidget {
  const SiteNavigation({super.key});

  @override
  Size get preferredSize => const Size.fromHeight(78);

  @override
  Widget build(BuildContext context) => AppBar(
    backgroundColor: const Color(0xFFF5F3EE),
    elevation: 0,
    toolbarHeight: 78,
    title: SiteWordmark(),
    actions: [SiteMenuTrigger(), const SizedBox(width: 18)],
  );
}

class SiteWordmark extends StatelessWidget {
  const SiteWordmark({super.key});

  @override
  Widget build(BuildContext context) => InkWell(
    onTap: () => Navigator.pushNamed(context, '/'),
    child: Row(
      children: [
        Container(
          width: 34,
          height: 34,
          decoration: const BoxDecoration(
            color: Color(0xFF10213A),
            borderRadius: BorderRadius.all(Radius.circular(5)),
          ),
          child: const Center(
            child: Text(
              'S',
              style: TextStyle(
                fontFamily: 'Manrope',
                color: Color(0xFFF5F3EE),
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
            Text(
              'SPARROW',
              style: TextStyle(
                fontFamily: 'Manrope',
                color: Color(0xFF10213A),
                fontSize: 13,
                fontWeight: FontWeight.w700,
                letterSpacing: 1.1,
              ),
            ),
            Text(
              'DIGITAL STUDIO',
              style: TextStyle(
                fontFamily: 'Manrope',
                color: Color(0xFF778294),
                fontSize: 9,
                fontWeight: FontWeight.w600,
                letterSpacing: 1.1,
              ),
            ),
          ],
        ),
      ],
    ),
  );
}

class SiteMenuTrigger extends StatelessWidget {
  const SiteMenuTrigger({super.key});

  @override
  Widget build(BuildContext context) => InkWell(
    onTap: () => Scaffold.of(context).openDrawer(),
    child: Padding(
      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 10),
      child: Row(
        children: [
          Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Container(width: 17, height: 2, color: Color(0xFF10213A)),
              SizedBox(height: 4),
              Container(width: 12, height: 2, color: Color(0xFF4E79E8)),
            ],
          ),
          const SizedBox(width: 8),
          const Text(
            'MENU',
            style: TextStyle(
              fontFamily: 'Manrope',
              color: Color(0xFF10213A),
              fontSize: 10,
              fontWeight: FontWeight.w700,
              letterSpacing: 1.1,
            ),
          ),
        ],
      ),
    ),
  );
}

class SiteNavigationLink extends StatelessWidget {
  const SiteNavigationLink({
    super.key,
    required this.active,
    required this.label,
  });

  final bool active;
  final String label;

  @override
  Widget build(BuildContext context) => Padding(
    padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 10),
    child: Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        Text(
          label,
          style: TextStyle(
            fontFamily: 'Manrope',
            color: const Color(0xFF465267),
            fontSize: 12,
            fontWeight: FontWeight.w500,
          ),
        ),
        const SizedBox(height: 5),
        SparrowResponsiveVisibility(
          showOnMobile: active,
          showOnTablet: active,
          showOnDesktop: active,
          child: Container(
            width: 18,
            height: 2,
            color: const Color(0xFF4E79E8),
          ),
        ),
      ],
    ),
  );
}

class SiteDrawer extends StatelessWidget {
  const SiteDrawer({
    super.key,
    required this.activeHome,
    required this.activeServices,
    required this.activeSolutions,
    required this.activeAbout,
    required this.activeContact,
  });

  final bool activeHome;
  final bool activeServices;
  final bool activeSolutions;
  final bool activeAbout;
  final bool activeContact;

  @override
  Widget build(BuildContext context) => Drawer(
    width: 340,
    backgroundColor: const Color(0xFFF5F3EE),
    child: Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        Padding(
          padding: const EdgeInsets.fromLTRB(26, 28, 20, 24),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              const SiteWordmark(),
              InkWell(
                onTap: () => Scaffold.of(context).closeDrawer(),
                child: const Padding(
                  padding: EdgeInsets.all(10),
                  child: Text(
                    'CLOSE',
                    style: TextStyle(
                      fontFamily: 'Manrope',
                      color: Color(0xFF647084),
                      fontSize: 10,
                      fontWeight: FontWeight.w700,
                      letterSpacing: 1,
                    ),
                  ),
                ),
              ),
            ],
          ),
        ),
        const Divider(height: 1, color: Color(0xFFD9DDE2)),
        const SizedBox(height: 16),
        InkWell(
          onTap: () => Navigator.pushNamed(context, '/'),
          child: SiteDrawerLink(active: activeHome, label: 'Home'),
        ),
        InkWell(
          onTap: () => Navigator.pushNamed(context, '/services'),
          child: SiteDrawerLink(active: activeServices, label: 'Services'),
        ),
        InkWell(
          onTap: () => Navigator.pushNamed(context, '/solutions'),
          child: SiteDrawerLink(active: activeSolutions, label: 'Solutions'),
        ),
        InkWell(
          onTap: () => Navigator.pushNamed(context, '/about'),
          child: SiteDrawerLink(active: activeAbout, label: 'About'),
        ),
        InkWell(
          onTap: () => Navigator.pushNamed(context, '/contact'),
          child: SiteDrawerLink(active: activeContact, label: 'Contact'),
        ),
        const SizedBox(height: 34),
        const Padding(
          padding: EdgeInsets.all(26),
          child: Eyebrow(text: 'THOUGHTFUL SOFTWARE, BUILT TO LAST.'),
        ),
      ],
    ),
  );
}

class SiteDrawerLink extends StatelessWidget {
  const SiteDrawerLink({super.key, required this.active, required this.label});

  final bool active;
  final String label;

  @override
  Widget build(BuildContext context) => Padding(
    padding: const EdgeInsets.symmetric(horizontal: 28, vertical: 16),
    child: Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        Text(
          label,
          style: TextStyle(
            fontFamily: 'Manrope',
            color: const Color(0xFF10213A),
            fontSize: 17,
            fontWeight: FontWeight.w500,
          ),
        ),
        Row(
          children: [
            SparrowResponsiveVisibility(
              showOnMobile: active,
              showOnTablet: active,
              showOnDesktop: active,
              child: const Text(
                'CURRENT',
                style: TextStyle(
                  fontFamily: 'Manrope',
                  color: Color(0xFF315ED1),
                  fontSize: 8,
                  fontWeight: FontWeight.w700,
                  letterSpacing: 0.8,
                ),
              ),
            ),
            const SizedBox(width: 8),
            const Text(
              '↗',
              style: TextStyle(
                fontFamily: 'Manrope',
                color: Color(0xFF4E79E8),
                fontSize: 16,
              ),
            ),
          ],
        ),
      ],
    ),
  );
}

class SiteActionPrimary extends StatelessWidget {
  const SiteActionPrimary({super.key, required this.label});

  final String label;

  @override
  Widget build(BuildContext context) => InkWell(
    onTap: () => Navigator.pushNamed(context, '/contact'),
    child: Container(
      decoration: const BoxDecoration(
        color: Color(0xFF315ED1),
        borderRadius: BorderRadius.all(Radius.circular(5)),
        boxShadow: [
          BoxShadow(
            color: Color(0x22315ED1),
            blurRadius: 16,
            offset: Offset(0, 6),
          ),
        ],
      ),
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 18, vertical: 13),
        child: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            Text(
              label,
              style: const TextStyle(
                fontFamily: 'Manrope',
                color: Colors.white,
                fontSize: 12,
                fontWeight: FontWeight.w700,
              ),
            ),
            const SizedBox(width: 14),
            const Text(
              '↗',
              style: TextStyle(
                fontFamily: 'Manrope',
                color: Colors.white,
                fontSize: 14,
                fontWeight: FontWeight.w600,
              ),
            ),
          ],
        ),
      ),
    ),
  );
}

class SiteActionQuiet extends StatelessWidget {
  const SiteActionQuiet({super.key, required this.label});

  final String label;

  @override
  Widget build(BuildContext context) => InkWell(
    onTap: () => Navigator.pushNamed(context, '/services'),
    child: Container(
      decoration: BoxDecoration(
        border: Border.all(color: const Color(0xFFAFBAC8)),
        borderRadius: const BorderRadius.all(Radius.circular(5)),
      ),
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 18, vertical: 12),
        child: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            Text(
              label,
              style: const TextStyle(
                fontFamily: 'Manrope',
                color: Color(0xFF10213A),
                fontSize: 12,
                fontWeight: FontWeight.w700,
              ),
            ),
            const SizedBox(width: 12),
            const Text(
              '→',
              style: TextStyle(
                fontFamily: 'Manrope',
                color: Color(0xFF315ED1),
                fontSize: 14,
              ),
            ),
          ],
        ),
      ),
    ),
  );
}

class SiteBand extends StatelessWidget {
  const SiteBand({super.key, required this.child, this.verticalPadding = 76});

  final Widget child;
  final double verticalPadding;

  @override
  Widget build(BuildContext context) => Center(
    child: Container(
      constraints: const BoxConstraints(maxWidth: 1220),
      padding: EdgeInsets.symmetric(horizontal: 28, vertical: verticalPadding),
      child: child,
    ),
  );
}

class SiteBandWarm extends StatelessWidget {
  const SiteBandWarm({
    super.key,
    required this.child,
    this.verticalPadding = 76,
  });

  final Widget child;
  final double verticalPadding;

  @override
  Widget build(BuildContext context) => Container(
    color: const Color(0xFFF5F3EE),
    child: SiteBand(verticalPadding: verticalPadding, child: child),
  );
}

class SiteBandPaper extends StatelessWidget {
  const SiteBandPaper({
    super.key,
    required this.child,
    this.verticalPadding = 76,
  });

  final Widget child;
  final double verticalPadding;

  @override
  Widget build(BuildContext context) => Container(
    color: const Color(0xFFFCFBF8),
    child: SiteBand(verticalPadding: verticalPadding, child: child),
  );
}

class SiteBandDark extends StatelessWidget {
  const SiteBandDark({
    super.key,
    required this.child,
    this.verticalPadding = 76,
  });

  final Widget child;
  final double verticalPadding;

  @override
  Widget build(BuildContext context) => Container(
    color: const Color(0xFF0D192B),
    child: SiteBand(verticalPadding: verticalPadding, child: child),
  );
}

class SiteBandMist extends StatelessWidget {
  const SiteBandMist({
    super.key,
    required this.child,
    this.verticalPadding = 76,
  });

  final Widget child;
  final double verticalPadding;

  @override
  Widget build(BuildContext context) => Container(
    color: const Color(0xFFEBEEF1),
    child: SiteBand(verticalPadding: verticalPadding, child: child),
  );
}

class SiteBandCool extends StatelessWidget {
  const SiteBandCool({
    super.key,
    required this.child,
    this.verticalPadding = 76,
  });

  final Widget child;
  final double verticalPadding;

  @override
  Widget build(BuildContext context) => Container(
    color: const Color(0xFFE8ECF1),
    child: SiteBand(verticalPadding: verticalPadding, child: child),
  );
}

class Eyebrow extends StatelessWidget {
  const Eyebrow({super.key, required this.text});

  final String text;

  @override
  Widget build(BuildContext context) => Text(
    text,
    style: TextStyle(
      fontFamily: 'Manrope',
      color: const Color(0xFF315ED1),
      fontSize: 10,
      fontWeight: FontWeight.w700,
      letterSpacing: 1.5,
      height: 1.5,
    ),
  );
}

class EyebrowLight extends StatelessWidget {
  const EyebrowLight({super.key, required this.text});

  final String text;

  @override
  Widget build(BuildContext context) => Text(
    text,
    style: const TextStyle(
      fontFamily: 'Manrope',
      color: Color(0xFF9EB9E9),
      fontSize: 10,
      fontWeight: FontWeight.w700,
      letterSpacing: 1.5,
      height: 1.5,
    ),
  );
}

class SiteHeading extends StatelessWidget {
  const SiteHeading({
    super.key,
    required this.level,
    required this.text,
    this.size = 34,
  });

  final int level;
  final String text;
  final double size;

  @override
  Widget build(BuildContext context) => SparrowHeading(
    level: level,
    text: text,
    style: TextStyle(
      fontFamily: 'Manrope',
      color: const Color(0xFF10213A),
      fontSize: size,
      fontWeight: FontWeight.w600,
      height: 1.14,
      letterSpacing: -0.8,
    ),
  );
}

class SiteHeadingLight extends StatelessWidget {
  const SiteHeadingLight({
    super.key,
    required this.level,
    required this.text,
    this.size = 34,
  });

  final int level;
  final String text;
  final double size;

  @override
  Widget build(BuildContext context) => SparrowHeading(
    level: level,
    text: text,
    style: TextStyle(
      fontFamily: 'Manrope',
      color: const Color(0xFFF8F7F2),
      fontSize: size,
      fontWeight: FontWeight.w600,
      height: 1.14,
      letterSpacing: -0.8,
    ),
  );
}

class SiteBodyCopy extends StatelessWidget {
  const SiteBodyCopy({super.key, required this.text, this.size = 16});

  final String text;
  final double size;

  @override
  Widget build(BuildContext context) => SparrowResponsiveText(
    text: text,
    mobileFontSize: size,
    tabletFontSize: size,
    desktopFontSize: size,
    style: TextStyle(
      fontFamily: 'Manrope',
      color: const Color(0xFF596579),
      height: 1.75,
    ),
  );
}

class SiteBodyCopyLight extends StatelessWidget {
  const SiteBodyCopyLight({super.key, required this.text, this.size = 16});

  final String text;
  final double size;

  @override
  Widget build(BuildContext context) => SparrowResponsiveText(
    text: text,
    mobileFontSize: size,
    tabletFontSize: size,
    desktopFontSize: size,
    style: const TextStyle(
      fontFamily: 'Manrope',
      color: Color(0xFFCED6E2),
      height: 1.75,
    ),
  );
}

class SiteFineCopy extends StatelessWidget {
  const SiteFineCopy({super.key, required this.text});

  final String text;

  @override
  Widget build(BuildContext context) => Text(
    text,
    style: TextStyle(
      fontFamily: 'Manrope',
      color: const Color(0xFF778294),
      fontSize: 12,
      fontWeight: FontWeight.w400,
      height: 1.65,
    ),
  );
}

class SiteFineCopyLight extends StatelessWidget {
  const SiteFineCopyLight({super.key, required this.text});

  final String text;

  @override
  Widget build(BuildContext context) => Text(
    text,
    style: const TextStyle(
      fontFamily: 'Manrope',
      color: Color(0xFFADB9C9),
      fontSize: 12,
      fontWeight: FontWeight.w400,
      height: 1.65,
    ),
  );
}

class Hairline extends StatelessWidget {
  const Hairline({super.key});

  @override
  Widget build(BuildContext context) =>
      Container(height: 1, color: const Color(0xFFD8DCE1));
}

class HairlineLight extends StatelessWidget {
  const HairlineLight({super.key});

  @override
  Widget build(BuildContext context) =>
      Container(height: 1, color: const Color(0xFF34445B));
}

class SitePageIntro extends StatelessWidget {
  const SitePageIntro({
    super.key,
    required this.eyebrow,
    required this.title,
    required this.description,
  });

  final String eyebrow;
  final String title;
  final String description;

  @override
  Widget build(BuildContext context) => SiteBandWarm(
    verticalPadding: 70,
    child: SparrowResponsiveGrid(
      mobileColumns: 1,
      tabletColumns: 2,
      desktopColumns: 2,
      mobileGap: 22,
      tabletGap: 32,
      desktopGap: 64,
      children: [
        Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Eyebrow(text: eyebrow),
            const SizedBox(height: 18),
            SiteHeading(level: 1, text: title, size: 43),
          ],
        ),
        Padding(
          padding: const EdgeInsets.only(top: 38),
          child: SiteBodyCopy(text: description, size: 17),
        ),
      ],
    ),
  );
}

class HomeHero extends StatelessWidget {
  const HomeHero({super.key});

  @override
  Widget build(BuildContext context) => SiteBandWarm(
    verticalPadding: 54,
    child: SparrowResponsiveGrid(
      mobileColumns: 1,
      tabletColumns: 2,
      desktopColumns: 2,
      mobileGap: 38,
      tabletGap: 38,
      desktopGap: 70,
      children: const [HomeHeroCopy(), SystemMapPanel()],
    ),
  );
}

class HomeHeroCopy extends StatelessWidget {
  const HomeHeroCopy({super.key});

  @override
  Widget build(BuildContext context) => Column(
    crossAxisAlignment: CrossAxisAlignment.start,
    children: [
      const Eyebrow(text: 'INDEPENDENT THINKING. LASTING IMPACT.'),
      const SizedBox(height: 25),
      const SiteHeading(
        level: 1,
        text: 'Thoughtful software,\nbuilt to last.',
        size: 43,
      ),
      const SizedBox(height: 22),
      const SiteBodyCopy(
        text: 'This demonstration explores how teams can turn complex challenges into clear, dependable digital products.',
        size: 17,
      ),
      const SizedBox(height: 28),
      const Wrap(
        spacing: 12,
        runSpacing: 12,
        children: [
          SiteActionPrimary(label: 'Start a conversation'),
          SiteActionQuiet(label: 'Explore services'),
        ],
      ),
      const SizedBox(height: 31),
      const Eyebrow(text: 'STRATEGY     /     DESIGN     /     ENGINEERING'),
    ],
  );
}

class SystemMapPanel extends StatelessWidget {
  const SystemMapPanel({super.key});

  @override
  Widget build(BuildContext context) => Container(
    decoration: BoxDecoration(
      gradient: const LinearGradient(
        colors: [Color(0xFF13243D), Color(0xFF0A1424)],
        begin: Alignment.topLeft,
        end: Alignment.bottomRight,
      ),
      border: Border.all(color: const Color(0xFF253953)),
      borderRadius: BorderRadius.circular(9),
      boxShadow: const [
        BoxShadow(
          color: Color(0x1C10213A),
          blurRadius: 28,
          offset: Offset(0, 15),
        ),
      ],
    ),
    child: Padding(
      padding: const EdgeInsets.all(26),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              EyebrowLight(text: 'A SYSTEMS VIEW'),
              Text(
                'S / 01',
                style: TextStyle(
                  fontFamily: 'Manrope',
                  color: Color(0xFF8898AD),
                  fontSize: 10,
                  fontWeight: FontWeight.w600,
                  letterSpacing: 1,
                ),
              ),
            ],
          ),
          SizedBox(height: 35),
          SiteHeadingLight(
            level: 2,
            text: 'Make complexity\nuseful.',
            size: 28,
          ),
          SizedBox(height: 9),
          SiteFineCopyLight(
            text: 'A considered path from challenge to product.',
          ),
          SizedBox(height: 25),
          HairlineLight(),
          SystemMapRow(
            number: '01',
            title: 'Understand the challenge',
            detail: 'People · context · outcomes',
          ),
          HairlineLight(),
          SystemMapRow(
            number: '02',
            title: 'Design with intention',
            detail: 'Structure · experience · decisions',
          ),
          HairlineLight(),
          SystemMapRow(
            number: '03',
            title: 'Build for the long term',
            detail: 'Care · clarity · improvement',
          ),
        ],
      ),
    ),
  );
}

class SystemMapRow extends StatelessWidget {
  const SystemMapRow({
    super.key,
    required this.number,
    required this.title,
    required this.detail,
  });

  final String number;
  final String title;
  final String detail;

  @override
  Widget build(BuildContext context) => Padding(
    padding: const EdgeInsets.symmetric(vertical: 14),
    child: Row(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          number,
          style: const TextStyle(
            fontFamily: 'Manrope',
            color: Color(0xFF86A7F2),
            fontSize: 11,
            fontWeight: FontWeight.w700,
          ),
        ),
        const SizedBox(width: 17),
        Expanded(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                title,
                style: const TextStyle(
                  fontFamily: 'Manrope',
                  color: Color(0xFFF6F4EF),
                  fontSize: 13,
                  fontWeight: FontWeight.w600,
                ),
              ),
              const SizedBox(height: 5),
              SiteFineCopyLight(text: detail),
            ],
          ),
        ),
      ],
    ),
  );
}

class StrategySection extends StatelessWidget {
  const StrategySection({super.key});

  @override
  Widget build(BuildContext context) => SiteBandPaper(
    verticalPadding: 82,
    child: Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: const [
        Eyebrow(text: 'STRATEGY  /  DESIGN  /  ENGINEERING'),
        SizedBox(height: 15),
        SiteHeading(
          level: 2,
          text: 'One thoughtful practice.\nThree connected disciplines.',
          size: 34,
        ),
        SizedBox(height: 16),
        SiteBodyCopy(
          text: 'Illustrative service concepts bring strategy, design and engineering together, from the first idea through a dependable product.',
        ),
        SizedBox(height: 44),
        SparrowResponsiveGrid(
          mobileColumns: 1,
          tabletColumns: 3,
          desktopColumns: 3,
          mobileGap: 25,
          tabletGap: 26,
          desktopGap: 42,
          children: [
            DisciplineNote(
              number: '01',
              title: 'Understand',
              description: 'Align on the problem, people and desired outcomes.',
            ),
            DisciplineNote(
              number: '02',
              title: 'Shape',
              description:
                  'Turn insights into a focused plan and design direction.',
            ),
            DisciplineNote(
              number: '03',
              title: 'Deliver',
              description:
                  'Design, build and test in clear, collaborative stages.',
            ),
          ],
        ),
      ],
    ),
  );
}

class DisciplineNote extends StatelessWidget {
  const DisciplineNote({
    super.key,
    required this.number,
    required this.title,
    required this.description,
  });

  final String number;
  final String title;
  final String description;

  @override
  Widget build(BuildContext context) => Column(
    crossAxisAlignment: CrossAxisAlignment.start,
    children: [
      const Hairline(),
      const SizedBox(height: 16),
      Eyebrow(text: number),
      const SizedBox(height: 22),
      SiteHeading(level: 3, text: title, size: 22),
      const SizedBox(height: 9),
      SiteFineCopy(text: description),
    ],
  );
}

class ApproachSection extends StatelessWidget {
  const ApproachSection({super.key});

  @override
  Widget build(BuildContext context) => SiteBandDark(
    verticalPadding: 82,
    child: Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: const [
        EyebrowLight(text: 'THE SPARROW APPROACH'),
        SizedBox(height: 18),
        SiteHeadingLight(
          level: 2,
          text: 'A clear path from idea to impact.',
          size: 36,
        ),
        SizedBox(height: 12),
        SiteBodyCopyLight(
          text: 'Good software is not just delivered. It is understood, maintained and improved over time.',
        ),
        SizedBox(height: 42),
        SparrowResponsiveGrid(
          mobileColumns: 1,
          tabletColumns: 2,
          desktopColumns: 4,
          mobileGap: 26,
          tabletGap: 25,
          desktopGap: 28,
          children: [
            ApproachStep(
              number: '01 / DISCOVER',
              title: 'Understand',
              description: 'Align on the problem, people and desired outcomes.',
            ),
            ApproachStep(
              number: '02 / DEFINE',
              title: 'Shape',
              description:
                  'Turn insights into a focused plan and design direction.',
            ),
            ApproachStep(
              number: '03 / BUILD',
              title: 'Deliver',
              description:
                  'Design, build and test in clear, collaborative stages.',
            ),
            ApproachStep(
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

class ApproachStep extends StatelessWidget {
  const ApproachStep({
    super.key,
    required this.number,
    required this.title,
    required this.description,
  });

  final String number;
  final String title;
  final String description;

  @override
  Widget build(BuildContext context) => Column(
    crossAxisAlignment: CrossAxisAlignment.start,
    children: [
      const HairlineLight(),
      const SizedBox(height: 15),
      EyebrowLight(text: number),
      const SizedBox(height: 20),
      SiteHeadingLight(level: 3, text: title, size: 21),
      const SizedBox(height: 8),
      SiteFineCopyLight(text: description),
    ],
  );
}

class ProjectConceptsSection extends StatelessWidget {
  const ProjectConceptsSection({super.key});

  @override
  Widget build(BuildContext context) => SiteBandMist(
    verticalPadding: 82,
    child: Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: const [
        Eyebrow(text: 'DEMONSTRATION CONCEPTS'),
        SizedBox(height: 15),
        SparrowResponsiveGrid(
          mobileColumns: 1,
          tabletColumns: 2,
          desktopColumns: 2,
          mobileGap: 34,
          tabletGap: 28,
          desktopGap: 40,
          children: [
            ConceptStory(
              category: 'DEMO / OPERATIONS',
              title: 'A clearer view of work',
              description: 'A conceptual workspace for coordinating projects, priorities and decisions across a growing team.',
              visual: OperationsSketch(),
            ),
            ConceptStory(
              category: 'DEMO / CUSTOMER EXPERIENCE',
              title: 'Services made more accessible',
              description: 'A conceptual customer portal that makes everyday requests easier to navigate and manage.',
              visual: PortalSketch(),
            ),
          ],
        ),
        SizedBox(height: 24),
        SiteFineCopy(
          text: 'Illustrative demo concepts only. These are not client case studies.',
        ),
      ],
    ),
  );
}

class ConceptStory extends StatelessWidget {
  const ConceptStory({
    super.key,
    required this.category,
    required this.title,
    required this.description,
    required this.visual,
  });

  final String category;
  final String title;
  final String description;
  final Widget visual;

  @override
  Widget build(BuildContext context) => Column(
    crossAxisAlignment: CrossAxisAlignment.start,
    children: [
      visual,
      const SizedBox(height: 22),
      Eyebrow(text: category),
      const SizedBox(height: 10),
      SiteHeading(level: 3, text: title, size: 23),
      const SizedBox(height: 8),
      SiteFineCopy(text: description),
    ],
  );
}

class OperationsSketch extends StatelessWidget {
  const OperationsSketch({super.key});

  @override
  Widget build(BuildContext context) => Container(
    height: 220,
    decoration: const BoxDecoration(
      color: Color(0xFF14243B),
      borderRadius: BorderRadius.all(Radius.circular(7)),
    ),
    child: Padding(
      padding: const EdgeInsets.all(18),
      child: Row(
        children: [
          Container(
            width: 44,
            decoration: const BoxDecoration(
              color: Color(0xFF20344F),
              borderRadius: BorderRadius.all(Radius.circular(4)),
            ),
            child: Padding(
              padding: const EdgeInsets.symmetric(vertical: 16),
              child: Column(
                children: [
                  Container(width: 15, height: 15, color: Color(0xFF8DAAF2)),
                  SizedBox(height: 15),
                  Container(width: 15, height: 2, color: Color(0xFF526780)),
                  SizedBox(height: 12),
                  Container(width: 15, height: 2, color: Color(0xFF526780)),
                ],
              ),
            ),
          ),
          const SizedBox(width: 16),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  'WORKSPACE / OVERVIEW',
                  style: TextStyle(
                    fontFamily: 'Manrope',
                    color: Color(0xFFA8B7CA),
                    fontSize: 9,
                    fontWeight: FontWeight.w600,
                    letterSpacing: 0.8,
                  ),
                ),
                SizedBox(height: 16),
                SizedBox(
                  height: 35,
                  child: Row(
                    children: [
                      Expanded(child: Container(color: Color(0xFF233952))),
                      SizedBox(width: 8),
                      Expanded(child: Container(color: Color(0xFF233952))),
                      SizedBox(width: 8),
                      Expanded(child: Container(color: Color(0xFF233952))),
                    ],
                  ),
                ),
                SizedBox(height: 12),
                Container(height: 1, color: Color(0xFF34475F)),
                SizedBox(height: 14),
                SketchLine(width: 86),
                SizedBox(height: 10),
                SketchLine(width: 64),
                SizedBox(height: 10),
                SketchLine(width: 76),
                SizedBox(height: 10),
                SketchLine(width: 48),
              ],
            ),
          ),
        ],
      ),
    ),
  );
}

class SketchLine extends StatelessWidget {
  const SketchLine({super.key, required this.width});

  final double width;

  @override
  Widget build(BuildContext context) =>
      Container(width: width, height: 5, color: const Color(0xFF7488A2));
}

class PortalSketch extends StatelessWidget {
  const PortalSketch({super.key});

  @override
  Widget build(BuildContext context) => Container(
    height: 220,
    decoration: const BoxDecoration(
      color: Color(0xFFE0E6EC),
      borderRadius: BorderRadius.all(Radius.circular(7)),
    ),
    child: Center(
      child: Container(
        width: 205,
        decoration: const BoxDecoration(
          color: Color(0xFFFCFBF8),
          borderRadius: BorderRadius.all(Radius.circular(5)),
          boxShadow: [
            BoxShadow(
              color: Color(0x1810213A),
              blurRadius: 18,
              offset: Offset(0, 7),
            ),
          ],
        ),
        child: Padding(
          padding: const EdgeInsets.all(16),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Eyebrow(text: 'YOUR SERVICES'),
              SizedBox(height: 13),
              SiteHeading(level: 4, text: 'How can we help?', size: 15),
              SizedBox(height: 12),
              SketchLine(width: 90),
              SizedBox(height: 7),
              SketchLine(width: 68),
              SizedBox(height: 15),
              Row(
                children: [
                  Expanded(
                    child: SizedBox(
                      height: 30,
                      child: Container(color: Color(0xFF315ED1)),
                    ),
                  ),
                  SizedBox(width: 7),
                  Expanded(
                    child: SizedBox(
                      height: 30,
                      child: Container(color: Color(0xFFE8ECF2)),
                    ),
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    ),
  );
}

class SitePageClosing extends StatelessWidget {
  const SitePageClosing({super.key});

  @override
  Widget build(BuildContext context) => SiteBandCool(
    verticalPadding: 62,
    child: SparrowResponsiveGrid(
      mobileColumns: 1,
      tabletColumns: 2,
      desktopColumns: 2,
      mobileGap: 24,
      desktopGap: 36,
      children: const [
        Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Eyebrow(text: 'NEXT STEP'),
            SizedBox(height: 12),
            SiteHeading(level: 2, text: 'Have something in mind?', size: 28),
          ],
        ),
        Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            SiteBodyCopy(
              text: 'Explore the contact page and its clearly marked form preview.',
              size: 14,
            ),
            SizedBox(height: 16),
            SiteActionPrimary(label: 'Contact'),
          ],
        ),
      ],
    ),
  );
}

class SitePageFooter extends StatelessWidget {
  const SitePageFooter({super.key});
  @override
  Widget build(BuildContext context) => SiteBandDark(
    verticalPadding: 38,
    child: Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        SparrowResponsiveGrid(
          mobileColumns: 1,
          tabletColumns: 2,
          desktopColumns: 2,
          mobileGap: 20,
          desktopGap: 28,
          children: [
            const Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                EyebrowLight(text: 'SPARROW KIT'),
                SizedBox(height: 8),
                SiteFineCopyLight(text: 'Thoughtful software, built to last.'),
              ],
            ),
            Wrap(
              spacing: 6,
              runSpacing: 6,
              children: [
                InkWell(
                  onTap: () => Navigator.pushNamed(context, '/'),
                  child: const SiteNavigationLink(active: false, label: 'Home'),
                ),
                InkWell(
                  onTap: () => Navigator.pushNamed(context, '/services'),
                  child: const SiteNavigationLink(
                    active: false,
                    label: 'Services',
                  ),
                ),
                InkWell(
                  onTap: () => Navigator.pushNamed(context, '/solutions'),
                  child: const SiteNavigationLink(
                    active: false,
                    label: 'Solutions',
                  ),
                ),
                InkWell(
                  onTap: () => Navigator.pushNamed(context, '/about'),
                  child: const SiteNavigationLink(
                    active: false,
                    label: 'About',
                  ),
                ),
                InkWell(
                  onTap: () => Navigator.pushNamed(context, '/contact'),
                  child: const SiteNavigationLink(
                    active: false,
                    label: 'Contact',
                  ),
                ),
              ],
            ),
          ],
        ),
        const SizedBox(height: 30),
        const HairlineLight(),
        const SizedBox(height: 16),
        const SiteFineCopyLight(
          text: '© 2026 Sparrow Kit. Demonstration website. Contact details are placeholders.',
        ),
      ],
    ),
  );
}

class CapabilityPageSection extends StatelessWidget {
  const CapabilityPageSection({super.key});

  @override
  Widget build(BuildContext context) => SiteBandPaper(
    verticalPadding: 72,
    child: Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: const [
        Eyebrow(text: 'OUR SERVICES'),
        SizedBox(height: 14),
        SiteHeading(
          level: 2,
          text: 'Connected expertise across the work.',
          size: 33,
        ),
        SizedBox(height: 12),
        SiteBodyCopy(
          text: 'Illustrative service concepts bring strategy, design and engineering together, from the first idea through a dependable product.',
        ),
        SizedBox(height: 38),
        SparrowResponsiveGrid(
          mobileColumns: 1,
          tabletColumns: 2,
          desktopColumns: 2,
          mobileGap: 25,
          tabletGap: 25,
          desktopGap: 34,
          children: [
            ServiceEditorialRow(
              number: '01',
              title: 'Custom software',
              description: 'Purpose-built applications that fit the way your business works.',
            ),
            ServiceEditorialRow(
              number: '02',
              title: 'Web applications',
              description: 'Accessible, responsive digital experiences for modern teams.',
            ),
            ServiceEditorialRow(
              number: '03',
              title: 'Mobile applications',
              description:
                  'Useful, intuitive experiences for people on the move.',
            ),
            ServiceEditorialRow(
              number: '04',
              title: 'UI / UX design',
              description:
                  'Research-led interfaces that make complexity feel simple.',
            ),
            ServiceEditorialRow(
              number: '05',
              title: 'Enterprise solutions',
              description:
                  'Connected systems designed around real operational needs.',
            ),
            ServiceEditorialRow(
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

class ServiceEditorialRow extends StatelessWidget {
  const ServiceEditorialRow({
    super.key,
    required this.number,
    required this.title,
    required this.description,
  });

  final String number;
  final String title;
  final String description;

  @override
  Widget build(BuildContext context) => Column(
    crossAxisAlignment: CrossAxisAlignment.start,
    children: [
      const Hairline(),
      const SizedBox(height: 16),
      Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Eyebrow(text: number),
          const SizedBox(width: 18),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                SiteHeading(level: 3, text: title, size: 20),
                const SizedBox(height: 8),
                SiteFineCopy(text: description),
              ],
            ),
          ),
        ],
      ),
    ],
  );
}

class SolutionConceptsSection extends StatelessWidget {
  const SolutionConceptsSection({super.key});

  @override
  Widget build(BuildContext context) => SiteBandPaper(
    verticalPadding: 75,
    child: Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: const [
        Eyebrow(text: 'SOLUTION CONCEPTS'),
        SizedBox(height: 14),
        SiteHeading(
          level: 2,
          text: 'Ideas organized around real needs.',
          size: 33,
        ),
        SizedBox(height: 13),
        SiteBodyCopy(
          text: 'These concepts show how software can help people make decisions, serve customers and move work forward.',
        ),
        SizedBox(height: 39),
        SolutionEditorialRow(
          number: '01',
          title: 'Operations platforms',
          description:
              'Bring processes, teams and information together in one place.',
          visual: OperationsSketch(),
        ),
        SizedBox(height: 31),
        SolutionEditorialRow(
          number: '02',
          title: 'Customer experiences',
          description: 'Make essential services easier to find, use and trust.',
          visual: PortalSketch(),
        ),
        SizedBox(height: 31),
        SolutionEditorialRow(
          number: '03',
          title: 'Data and reporting',
          description:
              'Turn operational data into useful, understandable insight.',
          visual: DataSketch(),
        ),
      ],
    ),
  );
}

class SolutionEditorialRow extends StatelessWidget {
  const SolutionEditorialRow({
    super.key,
    required this.number,
    required this.title,
    required this.description,
    required this.visual,
  });

  final String number;
  final String title;
  final String description;
  final Widget visual;

  @override
  Widget build(BuildContext context) => Column(
    crossAxisAlignment: CrossAxisAlignment.stretch,
    children: [
      const Hairline(),
      const SizedBox(height: 20),
      SparrowResponsiveGrid(
        mobileColumns: 1,
        tabletColumns: 2,
        desktopColumns: 2,
        mobileGap: 20,
        desktopGap: 40,
        children: [
          Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Eyebrow(text: number),
              const SizedBox(height: 13),
              SiteHeading(level: 3, text: title, size: 25),
              const SizedBox(height: 10),
              SiteFineCopy(text: description),
            ],
          ),
          visual,
        ],
      ),
    ],
  );
}

class DataSketch extends StatelessWidget {
  const DataSketch({super.key});

  @override
  Widget build(BuildContext context) => Container(
    height: 190,
    decoration: const BoxDecoration(
      color: Color(0xFF14243B),
      borderRadius: BorderRadius.all(Radius.circular(7)),
    ),
    child: Padding(
      padding: const EdgeInsets.all(20),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          EyebrowLight(text: 'REPORTING / OVERVIEW'),
          SizedBox(height: 16),
          Expanded(
            child: Row(
              crossAxisAlignment: CrossAxisAlignment.end,
              children: [
                DataBar(height: 36),
                DataBar(height: 62),
                DataBar(height: 49),
                DataBar(height: 88),
                DataBar(height: 70),
                DataBar(height: 104),
                DataBar(height: 76),
                DataBar(height: 120),
              ],
            ),
          ),
          SizedBox(height: 13),
          Container(height: 1, color: Color(0xFF42536A)),
          SizedBox(height: 10),
          SiteFineCopyLight(text: 'A clearer view of what matters.'),
        ],
      ),
    ),
  );
}

class DataBar extends StatelessWidget {
  const DataBar({super.key, required this.height});

  final double height;

  @override
  Widget build(BuildContext context) => Expanded(
    child: Padding(
      padding: const EdgeInsets.symmetric(horizontal: 3),
      child: Align(
        alignment: Alignment.bottomCenter,
        child: Container(
          height: height,
          decoration: const BoxDecoration(
            color: Color(0xFF638BEA),
            borderRadius: BorderRadius.all(Radius.circular(2)),
          ),
        ),
      ),
    ),
  );
}

class PointOfViewSection extends StatelessWidget {
  const PointOfViewSection({super.key});

  @override
  Widget build(BuildContext context) => SiteBandDark(
    verticalPadding: 82,
    child: SparrowResponsiveGrid(
      mobileColumns: 1,
      tabletColumns: 2,
      desktopColumns: 2,
      mobileGap: 24,
      desktopGap: 56,
      children: const [
        EyebrowLight(text: 'A POINT OF VIEW'),
        Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            SiteHeadingLight(
              level: 2,
              text: 'People first.\nSystems with purpose.',
              size: 33,
            ),
            SizedBox(height: 18),
            SiteBodyCopyLight(
              text: 'Our philosophy is to listen carefully, communicate openly and build with the people who will use and maintain the result in mind.',
            ),
          ],
        ),
      ],
    ),
  );
}

class PrinciplesSection extends StatelessWidget {
  const PrinciplesSection({super.key});

  @override
  Widget build(BuildContext context) => SiteBandWarm(
    verticalPadding: 76,
    child: Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: const [
        Eyebrow(text: 'OUR APPROACH'),
        SizedBox(height: 14),
        SiteHeading(
          level: 2,
          text: 'Built for today. Ready for tomorrow.',
          size: 33,
        ),
        SizedBox(height: 12),
        SiteBodyCopy(
          text: 'Good software is not just delivered. It is understood, maintained and improved over time.',
        ),
        SizedBox(height: 36),
        PrincipleRow(
          number: '01',
          title: 'Engineering quality',
          description: 'Careful implementation and testing are part of the work, not an afterthought.',
        ),
        PrincipleRow(
          number: '02',
          title: 'Scalable architecture',
          description: 'Practical foundations leave room for products and teams to grow.',
        ),
        PrincipleRow(
          number: '03',
          title: 'Business-first delivery',
          description:
              'Technical choices are grounded in the outcome you need.',
        ),
        PrincipleRow(
          number: '04',
          title: 'Reliable collaboration',
          description:
              'Open communication keeps decisions clear and progress visible.',
        ),
        PrincipleRow(
          number: '05',
          title: 'Long-term maintainability',
          description: 'Readable systems and thoughtful handovers support what comes next.',
        ),
      ],
    ),
  );
}

class PrincipleRow extends StatelessWidget {
  const PrincipleRow({
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
    padding: const EdgeInsets.only(top: 19),
    child: Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        const Hairline(),
        const SizedBox(height: 15),
        SparrowResponsiveGrid(
          mobileColumns: 1,
          tabletColumns: 3,
          desktopColumns: 3,
          mobileGap: 8,
          tabletGap: 20,
          desktopGap: 28,
          children: [
            Eyebrow(text: number),
            SiteHeading(level: 3, text: title, size: 18),
            SiteFineCopy(text: description),
          ],
        ),
      ],
    ),
  );
}

class FaqEditorialSection extends StatelessWidget {
  const FaqEditorialSection({super.key});

  @override
  Widget build(BuildContext context) => SiteBandPaper(
    verticalPadding: 75,
    child: Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: const [
        Eyebrow(text: 'FAQ'),
        SizedBox(height: 13),
        SiteHeading(level: 2, text: 'A few useful answers.', size: 31),
        SizedBox(height: 28),
        FaqEditorialRow(
          number: '01',
          title: 'When should we involve a technical partner?',
          description: 'Early involvement can clarify scope, validate assumptions and help avoid costly rework.',
        ),
        FaqEditorialRow(
          number: '02',
          title: 'Can you work with an existing product?',
          description: 'A typical engagement can start with an assessment of the existing system and its priorities.',
        ),
        FaqEditorialRow(
          number: '03',
          title: 'What happens after launch?',
          description: 'Maintenance, documentation and ongoing improvements should be planned alongside delivery.',
        ),
      ],
    ),
  );
}

class FaqEditorialRow extends StatelessWidget {
  const FaqEditorialRow({
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
    padding: const EdgeInsets.only(top: 18),
    child: Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        const Hairline(),
        const SizedBox(height: 16),
        SparrowResponsiveGrid(
          mobileColumns: 1,
          tabletColumns: 3,
          desktopColumns: 3,
          mobileGap: 8,
          tabletGap: 22,
          desktopGap: 30,
          children: [
            Eyebrow(text: number),
            SiteHeading(level: 3, text: title, size: 17),
            SiteFineCopy(text: description),
          ],
        ),
      ],
    ),
  );
}

class ContactDetailsPanel extends StatelessWidget {
  const ContactDetailsPanel({super.key});

  @override
  Widget build(BuildContext context) => Container(
    decoration: const BoxDecoration(
      color: Color(0xFF0D192B),
      borderRadius: BorderRadius.all(Radius.circular(7)),
    ),
    child: Padding(
      padding: const EdgeInsets.all(27),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: const [
          EyebrowLight(text: 'A NOTE BEFORE YOU WRITE'),
          SizedBox(height: 18),
          SiteHeadingLight(level: 2, text: 'A clear starting point.', size: 25),
          SizedBox(height: 13),
          SiteBodyCopyLight(
            text: 'The details below are placeholders. This demonstration does not send or store messages.',
            size: 14,
          ),
          SizedBox(height: 25),
          HairlineLight(),
          SizedBox(height: 17),
          EyebrowLight(text: 'EMAIL'),
          SizedBox(height: 6),
          Text(
            'contact@example.com',
            style: TextStyle(
              fontFamily: 'Manrope',
              color: Color(0xFFF5F3EE),
              fontSize: 14,
              fontWeight: FontWeight.w600,
            ),
          ),
          SizedBox(height: 19),
          EyebrowLight(text: 'BUSINESS CONTACT'),
          SizedBox(height: 6),
          SiteFineCopyLight(text: 'Placeholder contact'),
        ],
      ),
    ),
  );
}

class ContactFormPanel extends StatelessWidget {
  const ContactFormPanel({super.key});

  @override
  Widget build(BuildContext context) => Container(
    decoration: BoxDecoration(
      color: const Color(0xFFFCFBF8),
      border: Border.all(color: const Color(0xFFD9DDE2)),
      borderRadius: BorderRadius.circular(7),
    ),
    child: Padding(
      padding: const EdgeInsets.all(27),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: const [
          Eyebrow(text: 'FORM PREVIEW'),
          SizedBox(height: 12),
          SiteHeading(level: 2, text: 'Contact form preview', size: 23),
          SizedBox(height: 8),
          SiteFineCopy(
            text: 'This form is a visual preview and is not connected to a service.',
          ),
          SizedBox(height: 22),
          TextField(
            style: TextStyle(
              fontFamily: 'Manrope',
              fontSize: 14,
              fontWeight: FontWeight.w500,
              color: Color(0xFF10213A),
            ),
            decoration: InputDecoration(
              labelText: 'Name',
              labelStyle: TextStyle(
                fontFamily: 'Manrope',
                fontSize: 12,
                fontWeight: FontWeight.w600,
                color: Color(0xFF526176),
              ),
              hintText: 'Your name',
              hintStyle: TextStyle(
                fontFamily: 'Manrope',
                fontSize: 14,
                color: Color(0xFF8994A3),
              ),
              helperText: 'A name helps illustrate the form layout.',
              helperStyle: TextStyle(
                fontFamily: 'Manrope',
                fontSize: 11,
                height: 1.35,
                color: Color(0xFF738096),
              ),
              errorStyle: TextStyle(
                fontFamily: 'Manrope',
                fontSize: 11,
                height: 1.35,
                color: Color(0xFFB3261E),
              ),
              filled: true,
              fillColor: Color(0xFFFCFBF8),
              border: OutlineInputBorder(
                borderRadius: BorderRadius.all(Radius.circular(4)),
                borderSide: BorderSide(color: Color(0xFFCCD2DA), width: 1),
              ),
              focusedBorder: OutlineInputBorder(
                borderRadius: BorderRadius.all(Radius.circular(4)),
                borderSide: BorderSide(color: Color(0xFF315ED1), width: 2),
              ),
              errorBorder: OutlineInputBorder(
                borderRadius: BorderRadius.all(Radius.circular(4)),
                borderSide: BorderSide(color: Color(0xFFB3261E), width: 1),
              ),
              focusedErrorBorder: OutlineInputBorder(
                borderRadius: BorderRadius.all(Radius.circular(4)),
                borderSide: BorderSide(color: Color(0xFFB3261E), width: 2),
              ),
            ),
          ),
          SizedBox(height: 13),
          TextField(
            style: TextStyle(
              fontFamily: 'Manrope',
              fontSize: 14,
              fontWeight: FontWeight.w500,
              color: Color(0xFF10213A),
            ),
            keyboardType: TextInputType.emailAddress,
            decoration: InputDecoration(
              labelText: 'Email',
              labelStyle: TextStyle(
                fontFamily: 'Manrope',
                fontSize: 12,
                fontWeight: FontWeight.w600,
                color: Color(0xFF526176),
              ),
              hintText: 'you@example.com',
              hintStyle: TextStyle(
                fontFamily: 'Manrope',
                fontSize: 14,
                color: Color(0xFF8994A3),
              ),
              helperText: 'No address is sent or stored.',
              helperStyle: TextStyle(
                fontFamily: 'Manrope',
                fontSize: 11,
                height: 1.35,
                color: Color(0xFF738096),
              ),
              errorStyle: TextStyle(
                fontFamily: 'Manrope',
                fontSize: 11,
                height: 1.35,
                color: Color(0xFFB3261E),
              ),
              filled: true,
              fillColor: Color(0xFFFCFBF8),
              border: OutlineInputBorder(
                borderRadius: BorderRadius.all(Radius.circular(4)),
                borderSide: BorderSide(color: Color(0xFFCCD2DA), width: 1),
              ),
              focusedBorder: OutlineInputBorder(
                borderRadius: BorderRadius.all(Radius.circular(4)),
                borderSide: BorderSide(color: Color(0xFF315ED1), width: 2),
              ),
              errorBorder: OutlineInputBorder(
                borderRadius: BorderRadius.all(Radius.circular(4)),
                borderSide: BorderSide(color: Color(0xFFB3261E), width: 1),
              ),
              focusedErrorBorder: OutlineInputBorder(
                borderRadius: BorderRadius.all(Radius.circular(4)),
                borderSide: BorderSide(color: Color(0xFFB3261E), width: 2),
              ),
            ),
          ),
          SizedBox(height: 13),
          TextField(
            style: TextStyle(
              fontFamily: 'Manrope',
              fontSize: 14,
              fontWeight: FontWeight.w500,
              color: Color(0xFF10213A),
            ),
            decoration: InputDecoration(
              labelText: 'Project',
              labelStyle: TextStyle(
                fontFamily: 'Manrope',
                fontSize: 12,
                fontWeight: FontWeight.w600,
                color: Color(0xFF526176),
              ),
              hintText: 'What are you considering?',
              hintStyle: TextStyle(
                fontFamily: 'Manrope',
                fontSize: 14,
                color: Color(0xFF8994A3),
              ),
              helperText: 'This example field does not submit.',
              helperStyle: TextStyle(
                fontFamily: 'Manrope',
                fontSize: 11,
                height: 1.35,
                color: Color(0xFF738096),
              ),
              errorStyle: TextStyle(
                fontFamily: 'Manrope',
                fontSize: 11,
                height: 1.35,
                color: Color(0xFFB3261E),
              ),
              filled: true,
              fillColor: Color(0xFFFCFBF8),
              border: OutlineInputBorder(
                borderRadius: BorderRadius.all(Radius.circular(4)),
                borderSide: BorderSide(color: Color(0xFFCCD2DA), width: 1),
              ),
              focusedBorder: OutlineInputBorder(
                borderRadius: BorderRadius.all(Radius.circular(4)),
                borderSide: BorderSide(color: Color(0xFF315ED1), width: 2),
              ),
              errorBorder: OutlineInputBorder(
                borderRadius: BorderRadius.all(Radius.circular(4)),
                borderSide: BorderSide(color: Color(0xFFB3261E), width: 1),
              ),
              focusedErrorBorder: OutlineInputBorder(
                borderRadius: BorderRadius.all(Radius.circular(4)),
                borderSide: BorderSide(color: Color(0xFFB3261E), width: 2),
              ),
            ),
          ),
          SizedBox(height: 17),
          OutlinedButton(
            onPressed: null,
            child: Text(
              'Sending is not enabled',
              style: TextStyle(
                fontFamily: 'Manrope',
                fontSize: 12,
                fontWeight: FontWeight.w600,
              ),
            ),
          ),
        ],
      ),
    ),
  );
}

class SiteFooter extends StatelessWidget {
  const SiteFooter({super.key});

  @override
  Widget build(BuildContext context) => const SitePageFooter();
}
