import Link from 'next/link';
import Image from 'next/image';
import { Game } from '@/lib/games';

interface GameCardProps {
  game: Game;
}

export default function GameCard({ game }: GameCardProps) {
  return (
    <Link href={`/games/${game.slug}`} className="group">
      <div className="bg-gradient-to-br from-gray-900 to-black border border-[#00D9FF]/20 rounded-lg overflow-hidden transition-all duration-300 hover:border-[#00D9FF] hover:-translate-y-1 hover:shadow-xl hover:shadow-[#00D9FF]/20">
        <div className="relative aspect-video overflow-hidden bg-gray-800">
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
            <span className="text-6xl">🏍️</span>
          </div>
          {game.featured && (
            <div className="absolute top-2 right-2 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black px-2 py-1 rounded text-xs font-bold">
              FEATURED
            </div>
          )}
        </div>

        <div className="p-4">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00D9FF] transition-colors">
            {game.title}
          </h3>

          <p className="text-gray-400 text-sm mb-3 line-clamp-2">
            {game.description}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${i < Math.floor(game.rating) ? 'text-[#FFD700]' : 'text-gray-600'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-gray-400 text-sm ml-2">{game.rating}</span>
            </div>

            <span className="text-gray-500 text-xs">
              {(game.plays / 1000).toFixed(0)}K plays
            </span>
          </div>

          <div className="flex flex-wrap gap-1 mt-3">
            {game.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 bg-[#00D9FF]/10 text-[#00D9FF] rounded"
              >
                {tag}
              </span>
            ))}
          </div>

          <button className="w-full mt-4 bg-gradient-to-r from-[#00D9FF] to-[#FF00FF] text-white py-2 rounded-lg font-semibold group-hover:opacity-90 transition-opacity">
            Play Now
          </button>
        </div>
      </div>
    </Link>
  );
}
