import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Free Wheelie Game Collection - Play Best Games Online',
  description: 'Play the best free wheelie game collection online. Enjoy 6 motorcycle games, bike stunts, and simulators. Master your skills today - no downloads!',
  keywords: 'wheelie game, motorcycle game, bike game, free wheelie, online wheelie game',
  alternates: {
    canonical: 'https://soflo-wheelie-life.com/games',
  },
};

export default function WheelieGamesPage() {
  const games = [
    {
      id: 'mx-offroad-master',
      title: 'MX Offroad Master',
      slug: 'mx-offroad-master',
      thumbnail: '/images/games/mx-offroad-master-cover.avif',
      description: 'Master extreme offroad motorcycle racing and stunts',
      url: 'https://games.crazygames.com/en_US/mx-offroad-master/index.html?isNewUser=false&v=1.344'
    },
    {
      id: 'traffic-rider',
      title: 'Traffic Rider',
      slug: 'traffic-rider',
      thumbnail: '/images/games/traffic-rider-vvq_16x9-cover.avif',
      description: 'Ride through endless traffic on the highway',
      url: 'https://games.crazygames.com/en_US/traffic-rider-vvq/index.html?v=1.344'
    },
    {
      id: 'moto-x3m-4',
      title: 'Moto X3M 4',
      slug: 'moto-x3m-4',
      thumbnail: '/images/games/moto-x3m-4_16x9-cover.avif',
      description: 'Extreme motorcycle stunts and racing action',
      url: 'https://games.crazygames.com/en_US/moto-x3m-4/index.html?v=1.344'
    },
    {
      id: 'super-mx-last-season',
      title: 'Super MX - Last Season',
      slug: 'super-mx-last-season',
      thumbnail: '/images/games/super-mx-last-season_16x9-cover.avif',
      description: 'Professional motocross racing championship',
      url: 'https://games.crazygames.com/en_US/super-mx-last-season/index.html?v=1.344'
    },
    {
      id: 'super-bike-champion',
      title: 'Super Bike - The Champion',
      slug: 'super-bike-champion',
      thumbnail: '/images/games/super-bike-the-champion_16x9-cover.avif',
      description: 'Become the ultimate super bike racing champion',
      url: 'https://games.crazygames.com/en_US/super-bike-the-champion/index.html?v=1.344'
    },
    {
      id: 'dirt-bike-mad-skills',
      title: 'Dirt Bike Mad Skills',
      slug: 'dirt-bike-mad-skills',
      thumbnail: '/images/games/dirt-bike-mad-skills_16x9-cover.avif',
      description: 'Master extreme dirt bike stunts and offroad challenges',
      url: 'https://games.crazygames.com/en_US/dirt-bike-mad-skills/index.html?v=1.344'
    }
  ];

  return (
    <main className="flex-1 min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Hero Section */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#00D9FF] via-[#FF00FF] to-[#FFD700] bg-clip-text text-transparent">
              Best Wheelie Game Collection Online
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
              Discover the ultimate motorcycle gaming experience! Play the best free <strong>wheelie game</strong> titles online. Master every challenge with our curated collection of premium motorcycle stunt games.
            </p>
          </div>

          {/* Games Grid - Only Cards, No iframes */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-16">
            {games.map((game) => (
              <Link
                key={game.id}
                href={`/games/${game.slug}`}
                className="group bg-gradient-to-br from-gray-900 to-black border-2 border-[#00D9FF]/30 rounded-xl overflow-hidden hover:border-[#FF00FF]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#FF00FF]/20 hover:scale-105"
              >
                <div className="aspect-video w-full bg-black relative overflow-hidden">
                  <Image
                    src={game.thumbnail}
                    alt={game.title}
                    width={380}
                    height={214}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2 text-white group-hover:text-[#00D9FF] transition-colors">
                    {game.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">
                    {game.description}
                  </p>
                  <div className="flex items-center gap-2 text-[#00D9FF] font-bold text-sm">
                    <span>Play Now</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Main Content Section - Moved Below Games */}
          <div className="max-w-5xl mx-auto">
            <div className="prose prose-invert prose-lg max-w-none text-gray-300 space-y-6">
              <p>
                Welcome to the premier <strong>wheelie game</strong> destination on the internet! Our extensive collection features the most exciting motorcycle stunt simulators and bike racing titles. Whether you're searching for your next favorite title or want to master advanced techniques, you'll find everything here. Each title in our collection offers unique challenges, realistic physics, and addictive gameplay that keeps enthusiasts coming back for more thrilling action.
              </p>

              <h2 className="text-3xl font-bold mt-8 mb-4 text-[#00D9FF]">
                Why Play Our Collection?
              </h2>

              <p>
                Every <strong>wheelie game</strong> featured here has been carefully selected for quality and entertainment value. Our platform provides instant access to premium motorcycle titles without downloads or registration. Experience authentic physics engines, stunning graphics, and progressive difficulty systems that challenge both beginners and expert players. From classic titles to the latest releases, we've got your motorcycle gaming needs covered with the best selection available.
              </p>

              <p>
                The variety in our catalog ensures there's something for everyone. Try different styles, from realistic simulators to arcade-style stunters. Each title offers distinct mechanics and challenges, allowing you to develop diverse skills. Practice techniques across multiple games to become a true master of motorcycle stunts and racing.
              </p>

              <h2 className="text-3xl font-bold mt-8 mb-4 text-[#00D9FF]">
                Master Your Skills
              </h2>

              <p>
                Improving your <strong>wheelie game</strong> performance requires practice and understanding of motorcycle physics. Each title teaches valuable skills: balance control, throttle management, and timing precision. Start with easier levels to build fundamentals, then progress to advanced challenges. The progressive difficulty helps develop your abilities naturally while keeping gameplay exciting and engaging throughout your journey.
              </p>

              <p>
                Our collection includes comprehensive tutorials and pro tips for every title. Learn optimal strategies, discover hidden shortcuts, and unlock special features. Whether playing your first session or your hundredth, there's always something new to master in the motorcycle gaming world that awaits you.
              </p>

              <h2 className="text-3xl font-bold mt-8 mb-4 text-[#00D9FF]">
                Free Online Access
              </h2>

              <p>
                All <strong>wheelie game</strong> titles on our platform are completely free to play. No hidden costs, no subscriptions—just pure entertainment. Simply click any title and start playing instantly in your browser. This accessibility makes our collection perfect for quick gaming sessions or extended marathons whenever you have time to ride.
              </p>

              <p>
                Our platform works seamlessly across all devices. Play your favorite titles on desktop, laptop, tablet, or smartphone. The responsive design ensures optimal performance regardless of screen size, while games load quickly even on moderate internet connections for smooth gameplay.
              </p>

              <h2 className="text-3xl font-bold mt-8 mb-4 text-[#00D9FF]">
                Join the Community
              </h2>

              <p>
                Thousands of players worldwide have made our site their go-to destination for motorcycle gaming. Join the thriving community where riders share tips, celebrate achievements, and compete for high scores. Whether you're a casual player or a dedicated enthusiast, you'll find your place here. Start your journey today and discover why players everywhere choose us for their motorcycle entertainment!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-black/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#00D9FF]">
            Game Features
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl mb-4">🏍️</div>
              <h3 className="text-xl font-bold mb-3 text-[#FF00FF]">Realistic Physics</h3>
              <p className="text-gray-400">
                Every <strong>wheelie game</strong> features authentic motorcycle behavior and advanced physics simulation for immersive gameplay.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="text-5xl mb-4">🎮</div>
              <h3 className="text-xl font-bold mb-3 text-[#FF00FF]">100% Free</h3>
              <p className="text-gray-400">
                All titles are completely free with no downloads or registration required to start playing.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3 text-[#FF00FF]">Instant Play</h3>
              <p className="text-gray-400">
                Jump into any <strong>wheelie game</strong> instantly with browser-based gameplay on any device anywhere.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-xl font-bold mb-3 text-[#FF00FF]">Diverse Selection</h3>
              <p className="text-gray-400">
                Choose from dozens of titles with unique styles, challenges, and gameplay mechanics.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="text-5xl mb-4">🌟</div>
              <h3 className="text-xl font-bold mb-3 text-[#FF00FF]">Progressive Difficulty</h3>
              <p className="text-gray-400">
                Each title offers increasing challenges as you master techniques and improve skills.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-xl font-bold mb-3 text-[#FF00FF]">Cross-Platform</h3>
              <p className="text-gray-400">
                Play seamlessly across desktop, mobile, and tablet devices with responsive controls.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
