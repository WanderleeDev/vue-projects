const descriptionApp = "Shorten and share links easily with ShortenLink.";
const titleApp = "ShortenLink - Shorten your links easily";

export const metadata = {
  titleTemplate: "ShortenLink - %s",
  htmlAttrs: { lang: "en" },
  link: [
    { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    { rel: "canonical", href: "https://vue-showcase-8bg.pages.dev" },
  ],
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "robots", content: "index, follow" },
    { name: "description", content: descriptionApp },

    // Metadatos de Open Graph
    {
      property: "og:title",
      content: titleApp,
    },
    { name: "og:description", content: descriptionApp },
    {
      property: "og:image",
      content:
        "https://res.cloudinary.com/dy8gpozi6/image/upload/v1740771723/vue_-showcase-cover_dbjycm.webp",
    },
    { property: "og:site_name", content: "ShortenLink" },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://vue-showcase-8bg.pages.dev/" },

    // Metadatos para Twitter
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:title",
      content: titleApp,
    },
    { name: "twitter:description", content: descriptionApp },
    {
      name: "twitter:image",
      content:
        "https://res.cloudinary.com/dy8gpozi6/image/upload/v1740771723/vue_-showcase-cover_dbjycm.webp",
    },
    {
      name: "twitter:url",
      content: "https://vue-showcase-8bg.pages.dev/",
    },
    { name: "twitter:domain", content: "vue-showcase-8bg.pages.dev" },
  ],
};
