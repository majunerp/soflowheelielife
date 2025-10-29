import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import GameEmbed from '@/components/GameEmbed';
import GameCard from '@/components/GameCard';
import { getGameBySlug, getRelatedGames, getAllGames } from '@/lib/games';
import { generateGameSEO, generateGameStructuredData, generateBreadcrumbStructuredData } from '@/lib/seo';

interface GamePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const games = getAllGames();
  return games.map((game) => ({
    slug: game.slug,
  }));
}

export async function generateMetadata({ params }: GamePageProps): Promise<Metadata> {
  const { slug } = await params;
  const game = getGameBySlug(slug);

  if (!game) {
    return {
      title: 'Game Not Found',
    };
  }

  const seo = generateGameSEO(game);

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: {
      canonical: seo.canonical,
    },
    openGraph: seo.openGraph,
    twitter: seo.twitter,
  };
}

export default async function GamePage({ params }: GamePageProps) {
  const { slug } = await params;
  const game = getGameBySlug(slug);

  if (!game) {
    notFound();
  }

  const relatedGames = getRelatedGames(game.id, 4);
  const gameSchema = generateGameStructuredData(game);
  const breadcrumbSchema = generateBreadcrumbStructuredData([
    { name: 'Home', url: '/' },
    { name: 'Games', url: '/games' },
    { name: game.title, url: `/games/${game.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gameSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="flex-1">
        {/* Breadcrumb */}
        <nav className="bg-black border-b border-[#00D9FF]/20 py-4 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center space-x-2 text-sm">
              <Link href="/" className="text-gray-400 hover:text-[#00D9FF] transition-colors">
                Home
              </Link>
              <span className="text-gray-600">/</span>
              <Link href="/games" className="text-gray-400 hover:text-[#00D9FF] transition-colors">
                Games
              </Link>
              <span className="text-gray-600">/</span>
              <span className="text-[#00D9FF]">{game.title}</span>
            </div>
          </div>
        </nav>

        {/* Game Header */}
        <section className="bg-gradient-to-b from-black to-gray-900 py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between mb-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#00D9FF] to-[#FF00FF] bg-clip-text text-transparent">
                  {game.title}
                </h1>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${i < Math.floor(game.rating) ? 'text-[#FFD700]' : 'text-gray-600'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-gray-300 ml-2">{game.rating} / 5.0</span>
                  </div>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-400">{(game.plays / 1000).toFixed(0)}K plays</span>
                  {game.featured && (
                    <>
                      <span className="text-gray-500">•</span>
                      <span className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black px-3 py-1 rounded text-sm font-bold">
                        FEATURED
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Game Embed */}
            <GameEmbed src={game.embedUrl} title={game.title} />
          </div>
        </section>

        {/* Game Info */}
        <section className="py-16 px-4 bg-black">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-[#00D9FF]">
                  About {game.title}
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {game.description}
                </p>

                <div className="prose prose-invert prose-lg max-w-none text-gray-300">
                  <p>
                    <strong>{game.title}</strong> is an exceptional {game.category === 'wheelie' ? 'wheelie game' : game.category === 'stunt' ? 'stunt simulator' : 'racing game'} that delivers an authentic motorcycle gaming experience. Master the art of {game.category === 'wheelie' ? 'wheelie balance and control' : game.category === 'stunt' ? 'complex stunts and aerial maneuvers' : 'high-speed racing and precision handling'} in this free online motorcycle game.
                  </p>

                  <p>
                    Play <strong>{game.title}</strong> instantly in your browser without any downloads. This {game.category} game features realistic physics, responsive controls, and engaging gameplay that will keep you entertained for hours. Whether you're a beginner or an experienced player, {game.title} offers challenges and excitement for all skill levels.
                  </p>

                  <h3 className="text-2xl font-bold mt-8 mb-4 text-[#FF00FF]">
                    Game Features
                  </h3>

                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-[#00D9FF] mr-2">•</span>
                      <span>Realistic motorcycle physics and handling</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#00D9FF] mr-2">•</span>
                      <span>Challenging gameplay with progressive difficulty</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#00D9FF] mr-2">•</span>
                      <span>Smooth controls optimized for browser gaming</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#00D9FF] mr-2">•</span>
                      <span>Completely free to play—no hidden costs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#00D9FF] mr-2">•</span>
                      <span>Works on desktop, tablet, and mobile devices</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#00D9FF] mr-2">•</span>
                      <span>No downloads or installations required</span>
                    </li>
                  </ul>

                  <h3 className="text-2xl font-bold mt-8 mb-4 text-[#FF00FF]">
                    How to Master {game.title}
                  </h3>

                  <p>
                    Success in <strong>{game.title}</strong> requires practice and patience. Start by familiarizing yourself with the basic controls and physics. {game.category === 'wheelie' ? 'Focus on maintaining balance during wheelies by making subtle adjustments with the arrow keys. The key to long wheelies is finding the perfect balance point.' : game.category === 'stunt' ? 'Master individual stunts before attempting complex combinations. Timing is crucial for landing tricks successfully.' : 'Learn the track layout and identify optimal racing lines. Speed management is essential for maintaining control through corners.'}
                  </p>

                  <p>
                    As you improve, challenge yourself with harder difficulties and try to beat your high scores. The game rewards skillful play with a sense of accomplishment that keeps you coming back for more. Join thousands of players who have mastered {game.title} and become a {game.category} champion!
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {game.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-[#00D9FF]/10 text-[#00D9FF] rounded-lg text-sm border border-[#00D9FF]/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Controls */}
              <div className="bg-gradient-to-br from-gray-900 to-black border border-[#00D9FF]/30 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-[#FF00FF]">Game Controls</h3>
                <div className="space-y-3">
                  {game.controls.map((control, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-gray-400">{control.action}:</span>
                      <kbd className="px-3 py-1 bg-gray-800 rounded border border-gray-700 font-mono text-sm">
                        {control.key}
                      </kbd>
                    </div>
                  ))}
                </div>
                <Link
                  href="/controls"
                  className="block mt-4 text-center text-[#00D9FF] hover:text-[#FF00FF] transition-colors text-sm font-semibold"
                >
                  View Full Control Guide →
                </Link>
              </div>

              {/* Category */}
              <div className="bg-gradient-to-br from-gray-900 to-black border border-[#FF00FF]/30 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-[#FF00FF]">Category</h3>
                <Link
                  href={`/games?category=${game.category}`}
                  className="inline-block bg-gradient-to-r from-[#00D9FF] to-[#FF00FF] text-white px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity capitalize"
                >
                  {game.category} Games
                </Link>
              </div>

              {/* Share */}
              <div className="bg-gradient-to-br from-gray-900 to-black border border-[#00D9FF]/30 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-[#FF00FF]">Share This Game</h3>
                <div className="flex gap-2">
                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors text-sm">
                    Facebook
                  </button>
                  <button className="flex-1 bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors text-sm">
                    Twitter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Games */}
        {relatedGames.length > 0 && (
          <section className="py-16 px-4 bg-gradient-to-b from-gray-900 to-black">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                <span className="bg-gradient-to-r from-[#00D9FF] to-[#FF00FF] bg-clip-text text-transparent">
                  More {game.category.charAt(0).toUpperCase() + game.category.slice(1)} Games
                </span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {relatedGames.map((relatedGame) => (
                  <GameCard key={relatedGame.id} game={relatedGame} />
                ))}
              </div>

              <div className="mt-12 text-center">
                <Link
                  href="/games"
                  className="inline-block bg-gradient-to-r from-[#00D9FF] to-[#FF00FF] text-white px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity"
                >
                  View All Games
                </Link>
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
}
