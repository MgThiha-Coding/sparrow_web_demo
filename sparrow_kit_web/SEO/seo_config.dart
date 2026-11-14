import 'package:sparrow_kit/server.dart';

// Reserved placeholder: replace with the real production origin before launch.
const String sparrowSiteBaseUrl = 'https://example.com';
const String sparrowSeoDescription =
    'Sparrow Kit creates thoughtful software, digital products and technology solutions built to last.';

HeadMetadata buildSparrowSeoMetadata(String? appTitle) => HeadMetadata(
  title: appTitle ?? 'Sparrow Kit | Thoughtful software, built to last',
  description: sparrowSeoDescription,
  language: 'en',
  locale: 'en_US',
  robots: const RobotsDirectives(index: false, follow: false),
  metaTags: [
    MetaTag.property(
      'og:title',
      'Sparrow Kit | Thoughtful software, built to last',
    ),
    MetaTag.property('og:type', 'website'),
    MetaTag.property('og:description', sparrowSeoDescription),
    MetaTag.property('og:site_name', 'Sparrow Kit'),
  ],
  twitterCard: const TwitterCardMetadata(
    card: 'summary',
    title: 'Sparrow Kit | Thoughtful software, built to last',
    description: sparrowSeoDescription,
  ),
);
