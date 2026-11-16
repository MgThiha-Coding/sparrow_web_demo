import 'package:sparrow_kit/server.dart';

const String sparrowSiteBaseUrl = 'https://sparrowwebdemo.vercel.app';

const _pageMetadata = [
  _PageMetadata(
    path: '/',
    title: 'Sparrow Kit | Thoughtful software, built to last',
    description: 'Explore Sparrow Kit’s demonstration of thoughtful software, digital products, technology solutions, and collaborative delivery.',
  ),
  _PageMetadata(
    path: '/services',
    title: 'Sparrow Kit Services | Software Design & Engineering',
    description: 'Explore Sparrow Kit’s software service concepts, from custom and web applications to mobile products, UX design, and technical consulting.',
  ),
  _PageMetadata(
    path: '/solutions',
    title: 'Sparrow Kit Solutions | Operations, Customer & Data',
    description: 'Explore Sparrow Kit’s technology solution concepts for operations, customer experiences, and useful data and reporting.',
  ),
  _PageMetadata(
    path: '/about',
    title: 'About Sparrow Kit | Philosophy & Approach',
    description: 'Learn about Sparrow Kit’s technology company concept, including its focus on human understanding, clear communication, and careful engineering.',
  ),
  _PageMetadata(
    path: '/contact',
    title: 'Contact Sparrow Kit | Form Preview',
    description: 'See the Sparrow Kit contact page and form preview. Contact details are placeholders and the form is not connected to a service.',
  ),
];

// The compiler passes no route path, so this order must match MaterialApp.routes.
var _nextPageMetadataIndex = 0;

HeadMetadata buildSparrowSeoMetadata(String? _) {
  if (_nextPageMetadataIndex >= _pageMetadata.length) {
    throw StateError(
      'SEO metadata was requested more times than there are declared pages.',
    );
  }

  final page = _pageMetadata[_nextPageMetadataIndex++];
  final pageUrl =
      '$sparrowSiteBaseUrl${page.path == '/' ? '/' : '${page.path}/'}';

  return HeadMetadata(
    title: page.title,
    description: page.description,
    language: 'en',
    locale: 'en_US',
    robots: const RobotsDirectives(index: true, follow: true),
    metaTags: [
      MetaTag.property('og:title', page.title),
      MetaTag.property('og:type', 'website'),
      MetaTag.property('og:url', pageUrl),
      MetaTag.property('og:description', page.description),
      MetaTag.property('og:site_name', 'Sparrow Kit'),
    ],
    twitterCard: TwitterCardMetadata(
      card: 'summary',
      title: page.title,
      description: page.description,
    ),
    jsonLd: [
      _WebsiteJsonLd(
        name: 'Sparrow Kit',
        url: sparrowSiteBaseUrl,
        description: 'A demonstration site about thoughtful software, digital products, and technology solutions.',
      ),
    ],
  );
}

class _PageMetadata {
  const _PageMetadata({
    required this.path,
    required this.title,
    required this.description,
  });

  final String path;
  final String title;
  final String description;
}

class _WebsiteJsonLd implements JsonLdSchema {
  const _WebsiteJsonLd({
    required this.name,
    required this.url,
    required this.description,
  });

  final String name;
  final String url;
  final String description;

  @override
  Map<String, Object?> toJsonLd() => {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': name,
    'url': url,
    'description': description,
  };
}
