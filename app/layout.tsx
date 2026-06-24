import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { faqs, products, resellerPackages } from "./data/site-content";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const SITE_URL = "https://kareppeecrunch.dekatlokal.com";
const CANONICAL_URL = `${SITE_URL}/`;
const SITE_TITLE =
  "Kareppee Crunch | Kerupuk Singkong Premium Gowa Makassar";
const OG_TITLE =
  "Kareppee Crunch | Kerupuk Singkong Premium Khas Gowa Makassar";
const SITE_DESCRIPTION =
  "Kareppee Crunch menjual kerupuk singkong premium khas Gowa Makassar: renyah, ringan, higienis, dengan varian rasa modern untuk camilan dan oleh-oleh.";
const OG_DESCRIPTION =
  "Kerupuk singkong premium Kareppee Crunch dengan tekstur renyah, ringan, dan varian rasa modern khas Gowa Makassar.";
const HERO_IMAGE_URL = `${SITE_URL}/images/hero.jpeg`;
const SOCIAL_IMAGE_URL = `${SITE_URL}/og-image.jpg`;
const LOGO_URL = `${SITE_URL}/images/logo.png`;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#ea580c",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "Kareppee Crunch",
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  category: "Makanan dan minuman",
  keywords: [
    "Kareppee Crunch",
    "kerupuk singkong premium",
    "kerupuk singkong Gowa",
    "kerupuk singkong Makassar",
    "camilan khas Gowa",
    "oleh-oleh khas Makassar",
    "kerupuk singkong varian rasa",
    "reseller kerupuk singkong",
    "UMKM makanan ringan Sulawesi Selatan",
  ],
  authors: [{ name: "Kareppee Crunch", url: CANONICAL_URL }],
  creator: "Kareppee Crunch",
  publisher: "Kareppee Crunch",
  formatDetection: {
    address: false,
    email: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "Kareppee Crunch - DekatLokal",
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    images: [
      {
        url: SOCIAL_IMAGE_URL,
        secureUrl: SOCIAL_IMAGE_URL,
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Kareppee Crunch kerupuk singkong premium khas Gowa Makassar dari singkong pilihan petani lokal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: OG_TITLE,
    description:
      "Camilan kerupuk singkong premium khas Gowa Makassar dengan varian Original, Hotlado, Jagung Bakar, Matcha, dan Cokelat.",
    images: [
      {
        url: SOCIAL_IMAGE_URL,
        alt: "Kareppee Crunch kerupuk singkong premium khas Gowa Makassar dari singkong pilihan petani lokal",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      {
        url: "/favicon-48x48.png",
        sizes: "48x48",
        type: "image/png",
      },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    title: "Kareppee Crunch",
    statusBarStyle: "default",
  },
  verification: {
    google: "xMYzBHOvyktvEQhprsMYHl38Ea3GPcIkShFYaXj3RKo",
  },
};

const organizationId = `${CANONICAL_URL}#organization`;
const localBusinessId = `${CANONICAL_URL}#localbusiness`;
const websiteId = `${CANONICAL_URL}#website`;
const webpageId = `${CANONICAL_URL}#webpage`;
const breadcrumbId = `${CANONICAL_URL}#breadcrumb`;
const primaryImageId = `${CANONICAL_URL}#primaryimage`;

const productNodes = products.map((product) => ({
  "@type": "Product",
  "@id": `${CANONICAL_URL}#product-${product.slug}`,
  name: `Kerupuk Singkong Kareppee Crunch ${product.name}`,
  description: product.description,
  image: `${SITE_URL}${product.image}`,
  url: `${CANONICAL_URL}#produk-${product.slug}`,
  category: "Kerupuk singkong",
  brand: {
    "@type": "Brand",
    name: "Kareppee Crunch",
  },
  manufacturer: { "@id": organizationId },
}));

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: "Kareppee Crunch",
      url: CANONICAL_URL,
      logo: {
        "@type": "ImageObject",
        url: LOGO_URL,
        width: 1080,
        height: 446,
      },
      image: { "@id": primaryImageId },
      description: SITE_DESCRIPTION,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+62882019886782",
        contactType: "customer service",
        availableLanguage: "id",
        areaServed: "ID",
      },
      sameAs: [
        "https://www.instagram.com/kareppeecrunch/",
        "https://www.facebook.com/61583619765023/",
        "https://www.tiktok.com/@kareppeecrunch",
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": localBusinessId,
      name: "Kareppee Crunch",
      url: CANONICAL_URL,
      description:
        "Kareppee Crunch adalah produsen kerupuk singkong premium khas Gowa dan Makassar dengan varian rasa modern dan tekstur renyah.",
      image: [SOCIAL_IMAGE_URL, HERO_IMAGE_URL],
      logo: LOGO_URL,
      telephone: "+62882019886782",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Perumahan Fakultas Teknik Unhas Gowa, Blok H59",
        addressLocality: "Gowa",
        addressRegion: "Sulawesi Selatan",
        addressCountry: "ID",
      },
      areaServed: [
        { "@type": "AdministrativeArea", name: "Gowa" },
        { "@type": "City", name: "Makassar" },
        { "@type": "AdministrativeArea", name: "Sulawesi Selatan" },
        { "@type": "Country", name: "Indonesia" },
      ],
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:00",
        closes: "22:00",
      },
      parentOrganization: { "@id": organizationId },
      sameAs: [
        "https://www.instagram.com/kareppeecrunch/",
        "https://www.facebook.com/61583619765023/",
        "https://www.tiktok.com/@kareppeecrunch",
      ],
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      name: "Kareppee Crunch",
      alternateName:
        "Kareppee Crunch Kerupuk Singkong Premium Gowa Makassar",
      url: CANONICAL_URL,
      publisher: { "@id": organizationId },
      inLanguage: "id-ID",
    },
    {
      "@type": "ImageObject",
      "@id": primaryImageId,
      url: HERO_IMAGE_URL,
      contentUrl: HERO_IMAGE_URL,
      width: 777,
      height: 1165,
      caption:
        "Kareppee Crunch kerupuk singkong premium khas Gowa Makassar dengan singkong pilihan dari petani lokal",
    },
    {
      "@type": "WebPage",
      "@id": webpageId,
      name: OG_TITLE,
      url: CANONICAL_URL,
      description:
        "Kerupuk singkong premium khas Gowa Makassar dengan tekstur renyah, ringan, dan varian rasa modern.",
      isPartOf: { "@id": websiteId },
      about: { "@id": localBusinessId },
      primaryImageOfPage: { "@id": primaryImageId },
      breadcrumb: { "@id": breadcrumbId },
      inLanguage: "id-ID",
    },
    {
      "@type": "BreadcrumbList",
      "@id": breadcrumbId,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Beranda",
          item: CANONICAL_URL,
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${CANONICAL_URL}#product-list`,
      name: "Varian Kerupuk Singkong Kareppee Crunch",
      numberOfItems: products.length,
      itemListElement: products.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: { "@id": `${CANONICAL_URL}#product-${product.slug}` },
      })),
    },
    ...productNodes,
    {
      "@type": "OfferCatalog",
      "@id": `${CANONICAL_URL}#variant-catalog`,
      name: "Katalog Varian Kerupuk Singkong Kareppee Crunch",
      itemListElement: products.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: { "@id": `${CANONICAL_URL}#product-${product.slug}` },
      })),
    },
    {
      "@type": "OfferCatalog",
      "@id": `${CANONICAL_URL}#reseller-catalog`,
      name: "Paket Reseller Kareppee Crunch",
      itemListElement: resellerPackages.map((resellerPackage) => ({
        "@type": "Offer",
        url: `${CANONICAL_URL}#peluang-kemitraan`,
        price: resellerPackage.priceValue,
        priceCurrency: "IDR",
        seller: { "@id": organizationId },
        itemOffered: {
          "@type": "Service",
          name: `Reseller Kareppee Crunch ${resellerPackage.name}`,
          description: `${resellerPackage.items}. ${resellerPackage.description}.`,
        },
      })),
    },
    {
      "@type": "FAQPage",
      "@id": `${CANONICAL_URL}#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="canonical" href={CANONICAL_URL} />
        <meta property="og:url" content={CANONICAL_URL} />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <script
          id="kareppee-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </body>
    </html>
  );
}
