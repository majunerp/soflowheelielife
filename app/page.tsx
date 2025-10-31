import GameEmbed from '@/components/GameEmbed';
import GameCard from '@/components/GameCard';
import { getFeaturedGames } from '@/lib/games';
import { generateWebsiteStructuredData, generateOrganizationStructuredData } from '@/lib/seo';

export default function Home() {
  const featuredGames = getFeaturedGames();

  const websiteSchema = generateWebsiteStructuredData();
  const organizationSchema = generateOrganizationStructuredData();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black py-20 px-4">
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-20"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#00D9FF] via-[#FF00FF] to-[#FFD700] bg-clip-text text-transparent">
                SoFlo Wheelie Life
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Master the Ultimate Motorcycle Wheelie Experience with SoFlo Wheelie Life - Play Free Online Stunt Games
              </p>
              <div className="flex justify-center">
                <a
                  href="#game"
                  className="bg-gradient-to-r from-[#00D9FF] to-[#FF00FF] text-white px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity inline-flex items-center justify-center"
                >
                  ▶ Play SoFlo Wheelie Life Now
                </a>
              </div>
            </div>

            {/* Featured Game Embed */}
            <div id="game" className="max-w-5xl mx-auto">
              <GameEmbed
                src="https://game.azgame.io/street-wheelie/"
                title="SoFlo Wheelie Life - Motorcycle Wheelie Game"
              />
            </div>
          </div>
        </section>

        {/* Main Content - SEO Rich Text */}
        <section className="py-16 px-4 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#00D9FF]">
              Experience the Thrill of SoFlo Wheelie Life Motorcycle Games
            </h2>
            <div className="prose prose-invert prose-lg max-w-none text-gray-300 space-y-6">
              <p>
                Welcome to <strong>SoFlo Wheelie Life</strong>, your ultimate destination for free online motorcycle wheelie games and stunt simulators. Immerse yourself in the exhilarating world of South Florida street motorcycle culture with <strong>SoFlo Wheelie Life</strong>, where mastering the perfect wheelie is an art form. Our motorcycle wheelie games platform brings you the most exciting collection of motorcycle stunt games, allowing you to experience the adrenaline rush of street wheelies right in your browser—no downloads required.
              </p>

              <p>
                <strong>SoFlo Wheelie Life</strong> is more than just a game; it's a complete motorcycle stunt gaming experience designed for wheelie enthusiasts worldwide. Whether you're a beginner learning your first wheelie in our <strong>SoFlo Wheelie Life</strong> wheelie games or an experienced rider perfecting advanced stunts, our motorcycle wheelie games offer realistic physics, stunning graphics, and addictive gameplay that keeps you coming back for more. Experience the authentic street motorcycle culture of South Florida through our carefully curated collection of wheelie games and motorcycle stunt simulators.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-[#FF00FF]">
                Why Choose SoFlo Wheelie Life for Your Motorcycle Gaming?
              </h3>

              <p>
                Our platform stands out as the premier destination for motorcycle wheelie enthusiasts and stunt game lovers. <strong>SoFlo Wheelie Life</strong> features an extensive collection of the best motorcycle stunt games available online, including Wheelie Life, Wheelie Life 2, Wheelie Life 3, and many more exciting titles. Each game is handpicked to deliver authentic wheelie mechanics, challenging gameplay, and hours of entertainment. The <strong>SoFlo Wheelie Life</strong> platform ensures every player finds their perfect motorcycle gaming experience.
              </p>

              <p>
                The <strong>SoFlo Wheelie Life</strong> game itself captures the essence of street motorcycle culture with its realistic bike handling, customizable motorcycles, and progressive difficulty system. Players can perform spectacular wheelies, execute complex stunts, and explore various urban environments inspired by South Florida's vibrant street racing scene. The <strong>SoFlo Wheelie Life</strong> game's intuitive controls make it accessible for newcomers while offering depth that challenges even experienced players who want to master every aspect of wheelie riding.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-[#FF00FF]">
                Master Motorcycle Wheelies and Stunts with SoFlo Wheelie Life
              </h3>

              <p>
                Learning to perform the perfect wheelie requires skill, timing, and practice in <strong>SoFlo Wheelie Life</strong>. Our motorcycle wheelie games teach you essential techniques through progressive gameplay. Start with basic wheelie fundamentals in beginner-friendly wheelie games, then advance to more challenging motorcycle stunt simulators that test your balance, coordination, and reflexes. Every wheelie game in our <strong>SoFlo Wheelie Life</strong> collection offers unique challenges, from maintaining long-distance wheelies to executing precision stunts in tight urban environments.
              </p>

              <p>
                The motorcycle stunt games and stunt simulator games on our <strong>SoFlo Wheelie Life</strong> platform provide realistic motorcycle physics that accurately replicate real-world bike behavior. Feel the weight transfer as you pop a wheelie, manage your balance during extended wheelie runs in our wheelie games, and nail perfect landings after aerial stunts. These motorcycle stunt simulators help develop an intuitive understanding of motorcycle dynamics while delivering thrilling wheelie game gameplay.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-[#FF00FF]">
                Free Online Motorcycle Games - No Downloads Required
              </h3>

              <p>
                All our motorcycle wheelie and stunt games are completely free to play online. We believe everyone should have access to high-quality wheelie games and motorcycle gaming experiences without barriers. Simply visit our <strong>SoFlo Wheelie Life</strong> website, choose your favorite motorcycle wheelie game, and start playing instantly in your web browser. No installations, no downloads, no sign-ups—just pure motorcycle stunt gaming fun. This accessibility makes <strong>SoFlo Wheelie Life</strong> perfect for quick wheelie game sessions during breaks or extended play sessions when you have more time to master advanced techniques.
              </p>

              <p>
                Our <strong>SoFlo Wheelie Life</strong> wheelie games platform works seamlessly across all devices, including desktop computers, laptops, tablets, and smartphones. Whether you're at home, at school, or on the go, you can enjoy our collection of motorcycle stunt games and wheelie games. The responsive design ensures optimal motorcycle wheelie gameplay regardless of your screen size, while our <strong>SoFlo Wheelie Life</strong> stunt games load quickly even on slower internet connections.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-[#FF00FF]">
                Explore Our Complete Game Collection
              </h3>

              <p>
                Beyond the flagship <strong>SoFlo Wheelie Life</strong> motorcycle wheelie game, we offer a diverse selection of motorcycle racing and stunt titles. Try Wheelie Life 2 for enhanced graphics and new wheelie challenges, or jump into Wheelie Life 3 for the latest in wheelie gaming technology. Each sequel builds upon its predecessor with improved mechanics, more bikes to unlock, and increasingly creative stunt opportunities in our <strong>SoFlo Wheelie Life</strong> motorcycle stunt games collection.
              </p>

              <p>
                For variety, explore our racing games like Moto X3M, which combines high-speed racing with death-defying stunts. Test your skills in Highway Rider Extreme, where you'll weave through traffic while pulling off incredible wheelies. Try the Wheelie Challenge for an endless runner-style experience focused purely on maintaining the longest wheelie possible. Every motorcycle wheelie game on <strong>SoFlo Wheelie Life</strong> offers unique gameplay while maintaining the quality and excitement you expect from our motorcycle stunt games collection.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-[#FF00FF]">
                Join the SoFlo Wheelie Life Community
              </h3>

              <p>
                <strong>SoFlo Wheelie Life</strong> has built a thriving community of motorcycle gaming enthusiasts from around the world. Players share tips, tricks, and high scores while celebrating incredible stunt achievements in <strong>SoFlo Wheelie Life</strong> games. Join thousands of riders who have made our platform their go-to destination for motorcycle wheelie entertainment. Follow us on social media for <strong>SoFlo Wheelie Life</strong> game updates, community highlights, and exclusive content that will enhance your wheelie gaming experience.
              </p>

              <p>
                Whether you're passionate about motorcycle culture, love stunt games, or simply enjoy casual browser gaming, <strong>SoFlo Wheelie Life</strong> welcomes you. Our commitment to delivering the best free online motorcycle games continues to grow with regular updates, new game additions, and community-driven improvements. Start your <strong>SoFlo Wheelie Life</strong> wheelie journey today and discover why players worldwide choose SoFlo Wheelie Life as their favorite motorcycle gaming destination.
              </p>
            </div>
          </div>
        </section>

        {/* Game Controls Section */}
        <section className="py-16 px-4 bg-black">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-[#00D9FF]">
              How to Play SoFlo Wheelie Life
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-gray-900 to-black border border-[#00D9FF]/30 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-[#FF00FF]">Basic Controls</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Accelerate:</span>
                    <kbd className="px-3 py-1 bg-gray-800 rounded border border-gray-700 font-mono">↑ / W</kbd>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Brake / Reverse:</span>
                    <kbd className="px-3 py-1 bg-gray-800 rounded border border-gray-700 font-mono">↓ / S</kbd>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Balance Backward:</span>
                    <kbd className="px-3 py-1 bg-gray-800 rounded border border-gray-700 font-mono">← / A</kbd>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Balance Forward:</span>
                    <kbd className="px-3 py-1 bg-gray-800 rounded border border-gray-700 font-mono">→ / D</kbd>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Wheelie:</span>
                    <kbd className="px-3 py-1 bg-gray-800 rounded border border-gray-700 font-mono">Space</kbd>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Boost:</span>
                    <kbd className="px-3 py-1 bg-gray-800 rounded border border-gray-700 font-mono">Shift</kbd>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-black border border-[#FF00FF]/30 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-[#FF00FF]">Pro Tips for SoFlo Wheelie Life</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-[#00D9FF] mr-2">•</span>
                    <span>Start with lower speeds in SoFlo Wheelie Life to master wheelie balance before attempting high-speed stunts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00D9FF] mr-2">•</span>
                    <span>Use subtle balance adjustments to maintain long wheelies in SoFlo Wheelie Life—smooth is fast</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00D9FF] mr-2">•</span>
                    <span>Practice throttle control to find the sweet spot for consistent wheelies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00D9FF] mr-2">•</span>
                    <span>Unlock better bikes by completing challenges and achieving high scores in SoFlo Wheelie Life</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00D9FF] mr-2">•</span>
                    <span>Experiment with different motorcycles to find your perfect ride</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Wheelie Mastery Tutorial */}
            <div className="mt-12 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 text-center text-[#00D9FF]">
                Master Advanced Wheelie Techniques in SoFlo Wheelie Life
              </h3>

              <div className="prose prose-invert max-w-none text-gray-300 space-y-4">
                <p>
                  The <strong>wheelie</strong> is the cornerstone of <strong>SoFlo Wheelie Life</strong> motorcycle stunt games. Executing perfect wheelies in our motorcycle wheelie games requires understanding balance physics, throttle control, and weight distribution. Follow this comprehensive wheelie tutorial to master this essential skill.
                </p>

                <h4 className="text-xl font-bold mt-6 mb-3 text-[#FF00FF]">Beginner Wheelie Tutorial</h4>
                <ol className="space-y-3 ml-6 list-decimal">
                  <li><strong className="text-[#00D9FF]">Start at moderate speed:</strong> Begin accelerating in your motorcycle wheelie game using the up arrow or W key. Moderate speed provides better wheelie control for learning.</li>
                  <li><strong className="text-[#00D9FF]">Initiate the wheelie:</strong> Press and hold Space to lift the front wheel. In <strong>SoFlo Wheelie Life</strong>, this transfers weight to the rear and elevates the front wheel.</li>
                  <li><strong className="text-[#00D9FF]">Find the balance point:</strong> Use left/right arrows (or A/D) to maintain your motorcycle wheelie. The goal is staying on one wheel without flipping backward.</li>
                  <li><strong className="text-[#00D9FF]">Maintain the wheelie:</strong> Continue accelerating gently in your stunt game while making micro-adjustments. Smooth inputs prevent instability in motorcycle stunt games.</li>
                  <li><strong className="text-[#00D9FF]">Land safely:</strong> Ease off throttle and shift weight forward to bring the front wheel down smoothly in your wheelie game.</li>
                </ol>

                <h4 className="text-xl font-bold mt-6 mb-3 text-[#FF00FF]">Advanced Wheelie Techniques</h4>
                <p>
                  Once you've mastered basic wheelies in <strong>SoFlo Wheelie Life</strong>, challenge yourself with these advanced motorcycle stunt techniques:
                </p>
                <ul className="space-y-2 ml-6">
                  <li><strong className="text-[#00D9FF]">High-Speed Wheelies:</strong> Performing wheelies at maximum velocity in motorcycle stunt games requires lightning-fast balance corrections.</li>
                  <li><strong className="text-[#00D9FF]">Extended Wheelie Runs:</strong> The Wheelie Challenge tests how long you can maintain wheelies in our motorcycle wheelie games.</li>
                  <li><strong className="text-[#00D9FF]">Combo Wheelies:</strong> Chain wheelies with jumps and flips in <strong>SoFlo Wheelie Life</strong> stunt games for higher scores.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 bg-black">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#00D9FF]">
              Why Players Love SoFlo Wheelie Life
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="text-5xl mb-4">🏍️</div>
                <h3 className="text-xl font-bold mb-3 text-[#FF00FF]">Realistic Physics</h3>
                <p className="text-gray-400">
                  Experience authentic motorcycle behavior in SoFlo Wheelie Life with advanced physics simulation that makes every wheelie feel real.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="text-5xl mb-4">🎮</div>
                <h3 className="text-xl font-bold mb-3 text-[#FF00FF]">100% Free</h3>
                <p className="text-gray-400">
                  All SoFlo Wheelie Life motorcycle games are completely free to play with no hidden costs, downloads, or registration required.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-xl font-bold mb-3 text-[#FF00FF]">Instant Play</h3>
                <p className="text-gray-400">
                  Jump straight into SoFlo Wheelie Life action with instant browser-based gameplay on any device, anywhere, anytime.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="text-5xl mb-4">🎨</div>
                <h3 className="text-xl font-bold mb-3 text-[#FF00FF]">Customization</h3>
                <p className="text-gray-400">
                  Unlock and customize dozens of motorcycles in SoFlo Wheelie Life with unique stats, colors, and performance upgrades.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="text-5xl mb-4">🌟</div>
                <h3 className="text-xl font-bold mb-3 text-[#FF00FF]">Progressive Challenges</h3>
                <p className="text-gray-400">
                  Master increasingly difficult stunts and obstacles as you progress from novice to wheelie expert.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="text-5xl mb-4">📱</div>
                <h3 className="text-xl font-bold mb-3 text-[#FF00FF]">Cross-Platform</h3>
                <p className="text-gray-400">
                  Play seamlessly across desktop, mobile, and tablet devices with responsive controls and optimized performance.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
