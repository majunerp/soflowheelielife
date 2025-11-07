import { Metadata } from 'next';
import { notFound } from 'next/navigation';

// Game data
const games: Record<string, {
  title: string;
  description: string;
  url: string;
  keywords: string;
}> = {
  'mx-offroad-master': {
    title: 'MX Offroad Master - Free Wheelie Game',
    description: 'Play MX Offroad Master free online! Master extreme offroad motorcycle racing and perform epic stunts in this thrilling wheelie game. No downloads needed.',
    url: 'https://games.crazygames.com/en_US/mx-offroad-master/index.html?isNewUser=false&v=1.344',
    keywords: 'mx offroad master, wheelie game, motorcycle game, offroad racing'
  },
  'traffic-rider': {
    title: 'Traffic Rider - Free Wheelie Game',
    description: 'Play Traffic Rider free online! Ride through endless highway traffic, perform wheelies, and master motorcycle skills in this exciting game. Start playing now!',
    url: 'https://games.crazygames.com/en_US/traffic-rider-vvq/index.html?v=1.344',
    keywords: 'traffic rider, wheelie game, motorcycle game, traffic racing'
  },
  'moto-x3m-4': {
    title: 'Moto X3M 4 - Free Wheelie Game',
    description: 'Play Moto X3M 4 free online! Experience extreme motorcycle stunts and intense racing action in this amazing wheelie game. No downloads, play instantly!',
    url: 'https://games.crazygames.com/en_US/moto-x3m-4/index.html?v=1.344',
    keywords: 'moto x3m 4, wheelie game, motorcycle stunts, racing game'
  },
  'super-mx-last-season': {
    title: 'Super MX Last Season - Free Wheelie Game',
    description: 'Play Super MX Last Season free online! Compete in professional motocross racing championship and master wheelie skills. Start your racing career now!',
    url: 'https://games.crazygames.com/en_US/super-mx-last-season/index.html?v=1.344',
    keywords: 'super mx, wheelie game, motocross, racing championship'
  },
  'super-bike-champion': {
    title: 'Super Bike The Champion - Free Wheelie Game',
    description: 'Play Super Bike Champion free online! Become the ultimate racing champion and master wheelie techniques in this thrilling bike game. Play now for free!',
    url: 'https://games.crazygames.com/en_US/super-bike-the-champion/index.html?v=1.344',
    keywords: 'super bike champion, wheelie game, bike racing, championship'
  },
  'dirt-bike-mad-skills': {
    title: 'Dirt Bike Mad Skills - Free Wheelie Game',
    description: 'Play Dirt Bike Mad Skills free online! Master extreme dirt bike stunts and offroad challenges in this exciting wheelie game. No downloads required!',
    url: 'https://games.crazygames.com/en_US/dirt-bike-mad-skills/index.html?v=1.344',
    keywords: 'dirt bike mad skills, wheelie game, dirt bike, offroad motorcycle'
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const game = games[slug];

  if (!game) {
    return {
      title: 'Game Not Found',
    };
  }

  return {
    title: game.title,
    description: game.description,
    keywords: game.keywords,
    alternates: {
      canonical: `https://soflo-wheelie-life.com/games/${slug}`,
    },
  };
}

export default async function GamePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const game = games[slug];

  if (!game) {
    notFound();
  }

  return (
    <main className="flex-1 min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Game Section */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <div className="mb-6">
            <a
              href="/games"
              className="inline-flex items-center gap-2 text-[#00D9FF] hover:text-[#FF00FF] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="font-semibold">Back to All Games</span>
            </a>
          </div>

          {/* Game Title */}
          <div className="text-center mb-6">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#00D9FF] via-[#FF00FF] to-[#FFD700] bg-clip-text text-transparent">
              {game.title}
            </h1>
          </div>

          {/* Game Embed */}
          <div className="max-w-6xl mx-auto mb-8">
            <div className="aspect-video w-full bg-black rounded-xl overflow-hidden shadow-2xl border-2 border-[#00D9FF]/30">
              <iframe
                src={game.url}
                title={game.title}
                className="w-full h-full"
                frameBorder="0"
                allow="gamepad *;"
                allowFullScreen
              />
            </div>
          </div>

          {/* Play Button */}
          <div className="text-center mb-12">
            <button className="bg-gradient-to-r from-[#00D9FF] to-[#FF00FF] text-white px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity inline-flex items-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
              <span>Play {game.title} Now</span>
            </button>
          </div>

          {/* Content Section Below Game */}
          <div className="max-w-5xl mx-auto">
            <div className="prose prose-invert prose-lg max-w-none text-gray-300 space-y-6">
              <h2 className="text-3xl font-bold mb-4 text-[#00D9FF]">
                About This Wheelie Game
              </h2>

              <p>
                {game.description} This <strong>wheelie game</strong> offers an incredible motorcycle gaming experience with realistic physics, stunning graphics, and challenging gameplay. Perfect for both beginners and experienced <strong>wheelie game</strong> enthusiasts looking for their next favorite motorcycle adventure.
              </p>

              <h3 className="text-2xl font-bold mt-6 mb-3 text-[#FF00FF]">
                Why Play This Game?
              </h3>

              <p>
                This <strong>wheelie game</strong> stands out with its authentic motorcycle physics engine and smooth controls. Whether you're a casual player or a hardcore enthusiast, you'll find the perfect balance of challenge and fun in every ride.
              </p>

              <h2 className="text-3xl font-bold mt-8 mb-4 text-[#00D9FF]">
                How to Play
              </h2>

              <h3 className="text-2xl font-bold mt-6 mb-3 text-[#FF00FF]">
                Game Controls
              </h3>

              <p>
                This <strong>wheelie game</strong> features intuitive controls designed for maximum enjoyment. Use arrow keys or WASD to control your motorcycle, perform wheelies, and navigate through challenging courses. Master the balance between speed and control to achieve the highest scores in this exciting <strong>wheelie game</strong>.
              </p>

              <h2 className="text-3xl font-bold mt-8 mb-4 text-[#00D9FF]">
                Game Features
              </h2>

              <h3 className="text-2xl font-bold mt-6 mb-3 text-[#FF00FF]">
                Key Highlights
              </h3>

              <ul className="space-y-2 ml-6">
                <li>Realistic motorcycle physics and handling</li>
                <li>Challenging tracks and obstacles</li>
                <li>Smooth gameplay and responsive controls</li>
                <li>Free to play online - no downloads required</li>
                <li>Compatible with all modern browsers</li>
              </ul>

              <h2 className="text-3xl font-bold mt-8 mb-4 text-[#00D9FF]">
                More Wheelie Games
              </h2>

              <p>
                Looking for more <strong>wheelie game</strong> action? Check out our complete collection of free motorcycle games. Each <strong>wheelie game</strong> offers unique challenges and exciting gameplay that will test your skills and keep you entertained for hours.
              </p>

              <div className="text-center mt-8">
                <a
                  href="/games"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00D9FF] to-[#FF00FF] text-white px-8 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity"
                >
                  <span>Browse All Wheelie Games</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
