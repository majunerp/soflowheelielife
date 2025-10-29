import gamesData from '@/data/games.json';

export interface GameControl {
  key: string;
  action: string;
}

export interface Game {
  id: string;
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  embedUrl: string;
  category: 'wheelie' | 'stunt' | 'racing';
  controls: GameControl[];
  tags: string[];
  featured: boolean;
  rating: number;
  plays: number;
}

export function getAllGames(): Game[] {
  return gamesData as Game[];
}

export function getGameBySlug(slug: string): Game | undefined {
  return gamesData.find((game) => game.slug === slug) as Game | undefined;
}

export function getFeaturedGames(): Game[] {
  return gamesData.filter((game) => game.featured) as Game[];
}

export function getGamesByCategory(category: 'wheelie' | 'stunt' | 'racing'): Game[] {
  return gamesData.filter((game) => game.category === category) as Game[];
}

export function getRelatedGames(currentGameId: string, limit: number = 4): Game[] {
  const currentGame = gamesData.find((game) => game.id === currentGameId) as Game | undefined;
  if (!currentGame) return [];

  return gamesData
    .filter((game) => game.id !== currentGameId && game.category === currentGame.category)
    .slice(0, limit) as Game[];
}

export const categories = [
  { id: 'wheelie', name: 'Wheelie Games', description: 'Master the art of motorcycle wheelies' },
  { id: 'stunt', name: 'Stunt Games', description: 'Perform incredible motorcycle stunts and tricks' },
  { id: 'racing', name: 'Racing Games', description: 'High-speed motorcycle racing action' },
] as const;
