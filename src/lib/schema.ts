export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Faruk Ajibade",
    url: "https://farukajibade.com",
    image: "https://farukajibade.com/preview-image.png",
    description: "Software Engineer and AI Engineer specializing in building scalable web and mobile applications.",
    sameAs: [
      "https://github.com/1FarukDev",
      "https://linkedin.com/in/faruk-ajibade",
      "https://twitter.com/1FarukDev",
    ],
    jobTitle: "Software Engineer, AI Engineer",
    email: "farukajibade@gmail.com",
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Faruk Ajibade",
    url: "https://farukajibade.com",
    description: "Portfolio of Faruk Ajibade - Software Engineer and AI Engineer",
    creator: {
      "@type": "Person",
      name: "Faruk Ajibade",
    },
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
