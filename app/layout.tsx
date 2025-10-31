import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  description: "Play SoFlo Wheelie Life and master motorcycle stunts online. Ultimate collection of free wheelie games, stunt simulators, and bike racing. No download required!",
  keywords: ["soflo wheelie life", "motorcycle wheelie game", "stunt simulator", "free bike games", "wheelie games online", "motorcycle stunt games"],
  metadataBase: new URL('https://soflo-wheelie-life.com'),
  alternates: {
    canonical: 'https://soflo-wheelie-life.com/',
  },
  openGraph: {
    title: "SoFlo Wheelie Life - Free Motorcycle Stunt Games",
    description: "Play SoFlo Wheelie Life and master motorcycle stunts online. Ultimate collection of free wheelie games, stunt simulators, and bike racing. No download required!",
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
    description: "Play SoFlo Wheelie Life and master motorcycle stunts online. Ultimate collection of free wheelie games, stunt simulators, and bike racing. No download required!",
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
        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "tyn9jb11cs");
          `}
        </Script>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GE42J9PZE7"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GE42J9PZE7');
          `}
        </Script>

        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
