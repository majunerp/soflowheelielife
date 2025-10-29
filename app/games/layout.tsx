import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Motorcycle Wheelie & Stunt Games Online',
  description: 'Browse our complete collection of free motorcycle wheelie games, stunt simulators, and bike racing games. Play SoFlo Wheelie Life and more instantly in your browser.',
  keywords: ['motorcycle games', 'wheelie games', 'stunt simulator', 'bike games', 'free online games', 'motorcycle racing', 'soflo wheelie life'],
  alternates: {
    canonical: 'https://soflo-wheelie-life.com/games',
  },
  openGraph: {
    title: 'Free Motorcycle Wheelie & Stunt Games Online',
    description: 'Browse our complete collection of free motorcycle wheelie games, stunt simulators, and bike racing games. Play instantly—no downloads required.',
    url: 'https://soflo-wheelie-life.com/games',
    siteName: 'SoFlo Wheelie Life',
    images: [
      {
        url: 'https://soflo-wheelie-life.com/images/og-games.jpg',
        width: 1200,
        height: 630,
        alt: 'Motorcycle Wheelie and Stunt Games Collection',
      }
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Motorcycle Wheelie & Stunt Games Online',
    description: 'Browse our complete collection of free motorcycle wheelie games and stunt simulators. Play instantly—no downloads required.',
    images: ['https://soflo-wheelie-life.com/images/og-games.jpg'],
  },
};

export default function GamesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
