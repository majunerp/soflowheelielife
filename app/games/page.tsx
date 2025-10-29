'use client';

import { useState } from 'react';
import { getAllGames, categories } from '@/lib/games';
import GameCard from '@/components/GameCard';
import Link from 'next/link';

export default function GamesPage() {
  const allGames = getAllGames();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredGames = allGames.filter((game) => {
    const matchesCategory = selectedCategory === 'all' || game.category === selectedCategory;
    const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         game.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         game.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-black via-gray-900 to-black py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center bg-gradient-to-r from-[#00D9FF] via-[#FF00FF] to-[#FFD700] bg-clip-text text-transparent">
            Free Motorcycle Wheelie & Stunt Games
          </h1>
          <p className="text-xl text-gray-300 mb-8 text-center max-w-3xl mx-auto">
            Discover the ultimate collection of motorcycle wheelie games, stunt simulators, and bike racing games. Play instantly in your browser—100% free, no downloads required.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="bg-black py-8 px-4 border-b border-[#00D9FF]/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="w-full md:w-96">
              <input
                type="text"
                placeholder="Search games..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 bg-gray-900 border border-[#00D9FF]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00D9FF] transition-colors"
              />
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-gradient-to-r from-[#00D9FF] to-[#FF00FF] text-white'
                    : 'bg-gray-900 text-gray-400 hover:text-white border border-[#00D9FF]/30'
                }`}
              >
                All Games
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-[#00D9FF] to-[#FF00FF] text-white'
                      : 'bg-gray-900 text-gray-400 hover:text-white border border-[#00D9FF]/30'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4 text-center text-gray-400">
            Showing {filteredGames.length} {filteredGames.length === 1 ? 'game' : 'games'}
          </div>
        </div>
      </section>

      {/* Games Grid */}
      <section className="py-16 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>

          {filteredGames.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-400 text-xl mb-4">No games found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="text-[#00D9FF] hover:text-[#FF00FF] transition-colors font-semibold"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#00D9FF]">
            The Ultimate Motorcycle Wheelie Games Collection
          </h2>
          <div className="prose prose-invert prose-lg max-w-none text-gray-300 space-y-6">
            <p>
              Welcome to the most comprehensive collection of <strong>motorcycle wheelie games</strong> and <strong>stunt simulators</strong> available online. Our platform features handpicked games that deliver authentic wheelie mechanics, realistic physics, and thrilling gameplay. Whether you're searching for the original <strong>SoFlo Wheelie Life</strong> or exploring new motorcycle stunt challenges, you'll find the perfect game here.
            </p>

            <p>
              Every <strong>motorcycle stunt game</strong> in our collection has been carefully selected to ensure high-quality gameplay and genuine entertainment value. From beginner-friendly wheelie tutorials to advanced stunt simulators requiring expert precision, we cater to all skill levels. Our games feature realistic motorcycle physics that accurately simulate bike behavior, helping you develop authentic riding skills while having fun.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-[#FF00FF]">
              Wheelie Games for Every Player
            </h3>

            <p>
              Our <strong>wheelie games</strong> category includes titles specifically designed to help you master the art of motorcycle wheelies. Start with basic wheelie challenges that teach fundamental balance techniques, then progress to advanced games featuring complex urban environments and challenging obstacles. Popular titles like Wheelie Life, Wheelie Life 2, and Wheelie Life 3 offer progressive difficulty systems that grow with your skills, ensuring you're always engaged and challenged.
            </p>

            <p>
              The <strong>Wheelie Challenge</strong> game tests your ability to maintain perfect balance during extended wheelie runs, while games like <strong>Highway Rider Extreme</strong> add the excitement of traffic dodging to your wheelie adventures. Each game provides unique gameplay mechanics while maintaining the realistic physics and responsive controls that make wheelie games so addictive.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-[#FF00FF]">
              Stunt Simulator Excellence
            </h3>

            <p>
              Our <strong>stunt simulator</strong> games deliver the most realistic motorcycle stunt experiences available in browser-based gaming. These advanced simulators feature detailed physics engines that replicate real-world motorcycle dynamics, from weight transfer during acceleration to the delicate balance required for aerial stunts. The <strong>Stunt Simulator</strong> game, in particular, offers an open-world experience where you can practice tricks in massive stunt parks with endless possibilities.
            </p>

            <p>
              Experience <strong>motorcycle stunt games</strong> that challenge your reflexes, timing, and creativity. Perform spectacular flips, nail perfect wheelie landings, and chain together complex trick combinations. Advanced games like <strong>Moto X3M</strong> and <strong>Trial Xtreme</strong> incorporate obstacle courses that demand precision execution of stunts under pressure, providing intense gameplay that rewards skill development.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-[#FF00FF]">
              Racing Games with Wheelie Action
            </h3>

            <p>
              Our racing category combines high-speed motorcycle racing with wheelie and stunt mechanics. These <strong>motorcycle racing games</strong> let you perform wheelies for speed boosts, execute mid-air tricks for points, and navigate challenging tracks at breakneck speeds. <strong>Moto X3M</strong> stands out as a fan favorite, blending racing excitement with death-defying stunts in creative level designs.
            </p>

            <p>
              <strong>Highway Rider Extreme</strong> brings realistic traffic-weaving gameplay to the mix, challenging you to maintain wheelies while dodging cars at high speeds. <strong>Bike Stunts</strong> focuses on precision riding through complex obstacle courses, rewarding perfect execution with higher scores and bike unlocks. Every racing game maintains the quality physics and responsive controls you expect from premium motorcycle games.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-[#FF00FF]">
              Free Browser Gaming at Its Best
            </h3>

            <p>
              All our <strong>free motorcycle games</strong> run directly in your web browser without downloads, installations, or registration requirements. This instant-play accessibility makes our platform perfect for quick gaming sessions or extended play marathons. The games work seamlessly across desktop computers, laptops, tablets, and smartphones, ensuring you can enjoy motorcycle wheelie action wherever you are.
            </p>

            <p>
              We continuously update our collection with new <strong>motorcycle wheelie and stunt games</strong>, ensuring fresh content for our community. Each game undergoes testing to verify compatibility, performance, and gameplay quality before addition to our catalog. Join thousands of players who trust our platform as their go-to destination for free online motorcycle gaming entertainment.
            </p>

            <div className="mt-8 text-center">
              <Link
                href="/games/soflo-wheelie-life"
                className="inline-block bg-gradient-to-r from-[#00D9FF] to-[#FF00FF] text-white px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity"
              >
                Play SoFlo Wheelie Life Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
