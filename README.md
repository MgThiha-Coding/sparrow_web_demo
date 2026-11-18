# Sparrow Kit corporate site

A demonstration Flutter project rendered to server-generated HTML and hydrated
browser JavaScript with Sparrow Kit. Project concepts are illustrative, not
client case studies.

## Build

The demo uses published `sparrow_kit` and `sparrow_cli` version
`2.0.0-experimental.1`. Resolve dependencies, then build the static site from
this checkout:

```powershell
flutter pub get
flutter pub run sparrow_cli kit build web
```

The site uses Manrope font files declared through Flutter's local font asset
configuration. The font's SIL Open Font License is included at
`assets/fonts/OFL.txt`.

The SEO configuration targets the existing production Vercel alias
`https://sparrowwebdemo.vercel.app` and enables indexing for the five public
pages. Keep its page metadata order aligned with the named routes in
`lib/main.dart`. Contact details are placeholders, and the contact form is a
non-submitting preview; neither is ready for real customer inquiries.
