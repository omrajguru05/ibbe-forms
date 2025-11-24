import type { Metadata, Viewport } from "next";
import "./globals.css";
import UrlBar from "@/components/UrlBar";

export const metadata: Metadata = {
  title: "ibbe flow / surveys that don't suck",
  description: "Surveys that actually feel human.",
  icons: {
    icon: '/favicon.ico',
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
