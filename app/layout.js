import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script";
import StructuredData from "./components/StructuredData";
import FAQStructuredData from "./components/FAQStructuredData";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://endurance-index.ro"),
  title: {
    default: "Endurance Ro-Index 2025 | Studiu de cercetare despre sporturile de anduranță din România",
    template: "%s | Endurance Ro-Index"
  },
  description:
    "Prima platformă de date din România despre participarea și participanții la concursuri de masă - alergare, ciclism, triatlon. Studiu de cercetare 2025 cu 1.110 concurenți, 54 concursuri și 242 branduri relevante.",
  keywords: [
    "endurance sports Romania",
    "alergare România",
    "ciclism România",
    "triatlon România",
    "concursuri de masă",
    "studiu de cercetare sportivă",
    "sporturi de anduranță",
    "participanți concursuri",
    "statistici sport România",
    "endurance index"
  ],
  authors: [{ name: "Quantix Marketing Consulting" }],
  creator: "Quantix Marketing Consulting",
  publisher: "Endurance Ro-Index",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: "https://endurance-index.ro",
    siteName: "Endurance Ro-Index",
    title: "Endurance Ro-Index 2025 | Studiu de cercetare despre sporturile de anduranță din România",
    description: "Prima platformă de date din România despre participarea și participanții la concursuri de masă - alergare, ciclism, triatlon. Studiu de cercetare 2025 cu 1.110 concurenți, 54 concursuri și 242 branduri relevante.",
    images: [
      {
        url: "/images-sitemap.xml",
        width: 1200,
        height: 630,
        alt: "Endurance Ro-Index - Studiu de cercetare despre sporturile de anduranță din România",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Endurance Ro-Index 2025 | Studiu de cercetare despre sporturile de anduranță din România",
    description: "Prima platformă de date din România despre participarea și participanții la concursuri de masă - alergare, ciclism, triatlon.",
    images: ["/images-sitemap.xml"],
    creator: "@endurance_ro_index",
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/android-chrome-192x192.png", type: "image/png", sizes: "192x192" },
      { url: "/android-chrome-512x512.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  other: {
    "theme-color": "#0f3e5e",
    "msapplication-TileColor": "#0f3e5e",
    "msapplication-TileImage": "/favicon-32x32.png",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="ro">
      <head>
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#0f3e5e" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#0f3e5e" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StructuredData />
        <FAQStructuredData />
        {children}
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-2KLTFK0VWD`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2KLTFK0VWD', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
        <Analytics />
      </body>
    </html>
  );
}
