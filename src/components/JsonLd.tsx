/**
 * Renders a JSON-LD document into the page. Server-rendered, so crawlers and
 * answer engines see it in the initial HTML without executing JavaScript.
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // Escaping `<` prevents a "</script>" inside any string value from
      // terminating the tag early.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, '\\u003c'),
      }}
    />
  );
}
