import { ReactNode } from "react";
import MainLayout from "./components/MainLayout";
import "./globals.css";

export const metadata = {
  title: "Forenzička ekspertiza | Portfolio sudskog veštaka za mehaniku",
  description:
    "Portfolio i prezentacija sudskog veštaka za mehaniku. Saznajte više o uslugama procene štete, procene vrednosti, i stručnih mišljenja.",
  keywords:
    "forenzička ekspertiza, sudski veštak, procena štete, procena vrednosti, stručna mišljenja, portfolio sudskog veštaka, mehanička ekspertiza",
  authors: [{ name: "Forenzička ekspertiza", url: "https://www.masinskivestak.rs" }],
  robots: "index, follow",
  openGraph: {
    title: "Forenzička ekspertiza | Portfolio sudskog veštaka za mehaniku",
    description:
      "Prezentacija sudskog veštaka za mehaniku, sa uslugama procene štete, procene vrednosti, i izrade stručnih mišljenja.",
    url: "https://www.masinskivestak.rs",
    type: "website",
    locale: "sr_RS",
    siteName: "Forenzička ekspertiza",
    images: [
      {
        url: "https://www.masinskivestak.rs/images/baner.png",
        width: 1200,
        height: 630,
        alt: "Forenzička ekspertiza banner image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Forenzička ekspertiza | Portfolio sudskog veštaka za mehaniku",
    description:
      "Saznajte više o stručnim uslugama procene štete i vrednosti koje pruža sudski veštak za mehaniku.",
    images: ["https://www.masinskivestak.rs/images/baner.png"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="sr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.authors[0].name} />
        <meta name="robots" content={metadata.robots} />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:locale" content={metadata.openGraph.locale} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        {metadata.openGraph.images.map((image, index) => (
          <meta key={index} property="og:image" content={image.url} />
        ))}

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta
          name="twitter:description"
          content={metadata.twitter.description}
        />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        
        <link rel="canonical" href="https://www.masinskivestak.rs" />

        <title>{metadata.title}</title>
      </head>
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
