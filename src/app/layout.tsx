import type { Metadata, Viewport } from "next";
import "./globals.css";
import UrlBar from "@/components/UrlBar";

export const metadata: Metadata = {
  title: "ibbe flow / surveys that don't suck",
  description: "Access exclusive research studies published by the team. Experience a fluid way to share insights through conversational participation.",
  keywords: "research participation, curated studies, team insights, user feedback, immersive experience, active participation, conversational surveys, study access",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: "IBBE Forms - Research That Feels Truly Human",
    description: "Contribute to curated studies designed for true engagement. A refreshing and immersive way to share your perspective.",
    type: "website",
    siteName: "IBBE Forms",
  },
  twitter: {
    card: "summary_large_image",
    title: "IBBE Forms - Research That Feels Truly Human",
    description: "Contribute to curated studies designed for true engagement. A refreshing and immersive way to share your perspective.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <UrlBar />
        {children}
      </body>
    </html>
  );
}
