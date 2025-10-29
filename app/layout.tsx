import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SoFlo Wheelie Life - Free Motorcycle Stunt Games",
  description: "Play SoFlo Wheelie Life and master motorcycle stunts online. Ultimate collection of free wheelie games, stunt simulators, and bike racing.",
  keywords: ["soflo wheelie life", "motorcycle wheelie game", "stunt simulator", "free bike games", "wheelie games online", "motorcycle stunt games"],
  metadataBase: new URL('https://soflo-wheelie-life.com'),
  alternates: {
    canonical: 'https://soflo-wheelie-life.com/',
  },
  openGraph: {
    title: "SoFlo Wheelie Life - Free Motorcycle Stunt Games",
    description: "Play SoFlo Wheelie Life and master motorcycle stunts online. Ultimate collection of free wheelie games, stunt simulators, and bike racing.",
    url: 'https://soflo-wheelie-life.com/',
    siteName: 'SoFlo Wheelie Life',
    images: [
      {
        url: 'https://soflo-wheelie-life.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SoFlo Wheelie Life - Motorcycle Stunt Games',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "SoFlo Wheelie Life - Free Motorcycle Stunt Games",
    description: "Play SoFlo Wheelie Life and master motorcycle stunts online. Ultimate collection of free wheelie games, stunt simulators, and bike racing.",
    images: ['https://soflo-wheelie-life.com/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white min-h-screen flex flex-col`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
