import { Game } from './games';

export const SITE_URL = 'https://soflo-wheelie-life.com';
export const SITE_NAME = 'SoFlo Wheelie Life';

export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  openGraph: {
    title: string;
    description: string;
    url: string;
    siteName: string;
    images: Array<{
      url: string;
      width: number;
      height: number;
      alt: string;
    }>;
    type: string;
  };
  twitter: {
    card: string;
    title: string;
    description: string;
    images: string[];
  };
}

export function generateGameSEO(game: Game): SEOMetadata {
  const title = `${game.title} - Play Free Online Motorcycle Game`;
  const description = game.description.slice(0, 155) + (game.description.length > 155 ? '...' : '');

  return {
    title,
    description,
    keywords: [...game.tags, 'free motorcycle game', 'online game', 'browser game'],
    canonical: `${SITE_URL}/games/${game.slug}`,
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/games/${game.slug}`,
      siteName: SITE_NAME,
      images: [{
        url: `${SITE_URL}${game.thumbnail}`,
        width: 1200,
        height: 630,
        alt: `${game.title} gameplay screenshot`
      }],
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${SITE_URL}${game.thumbnail}`]
    }
  };
}

export function generateGameStructuredData(game: Game) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoGame',
    name: game.title,
    description: game.description,
    genre: game.category === 'wheelie' ? 'Wheelie & Stunt' : game.category === 'stunt' ? 'Stunt & Action' : 'Racing',
    gamePlatform: 'Web Browser',
    applicationCategory: 'Game',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: game.rating.toString(),
      ratingCount: Math.floor(game.plays / 10).toString(),
      bestRating: '5',
      worstRating: '1'
    },
    interactionStatistic: {
      '@type': 'InteractionCounter',
      interactionType: 'https://schema.org/PlayAction',
      userInteractionCount: game.plays
    }
  };
}

export function generateBreadcrumbStructuredData(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`
    }))
  };
}

export function generateWebsiteStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description: 'Play free motorcycle wheelie and stunt games online. Experience SoFlo Wheelie Life and more exciting bike games in your browser.',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/games?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  };
}

export function generateOrganizationStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    sameAs: [
      'https://www.tiktok.com/@soflowheelielife',
      'https://www.youtube.com/@soflowheelielife',
      'https://twitter.com/soflowheelielife'
    ]
  };
}
