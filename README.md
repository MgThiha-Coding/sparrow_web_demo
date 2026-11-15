# Sparrow Kit corporate site

A demonstration Flutter project rendered to static HTML and hydrated browser
JavaScript with `sparrow kit build web`. The site includes illustrative project
concepts, not client case studies.

The project currently depends on the adjacent local `dart_web_framework`
checkout. Its Flutter compiler and runtime contain unpublished changes not
present in the public Sparrow Kit main branch. The local Sparrow CLI must be
activated from that checkout to build this project.

The SEO configuration targets the production Vercel alias
`https://sparrowwebdemo.vercel.app` and enables indexing for the five public
pages. The static-site generator uses that origin for canonical URLs,
`robots.txt`, and `sitemap.xml`. Contact details are placeholders and the
contact form is a non-submitting preview; neither is ready for real customer
inquiries.

Page-specific SEO metadata follows the static generation order: home, services,
solutions, about, and contact. Keep this order aligned with the named routes in
`lib/main.dart` when adding or rearranging routes.

## Flutter compiler styling limits

The compiler emits inline widget styles and a responsive grid stylesheet, but
does not support `TextStyle.fontFamily` or Flutter button `style`. Buttons are
therefore built from supported `InkWell`, `Container`, and `Padding` widgets;
text uses the browser's default font. The compiler also places
`Container.padding` outside its background, so colored surfaces use a nested
`Padding` child instead. Responsive grids cannot hide widgets at a breakpoint:
the horizontal navigation remains visible on mobile alongside the drawer.
