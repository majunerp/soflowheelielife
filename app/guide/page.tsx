import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Motorcycle Game Guide - SoFlo Wheelie Life',
  description: 'Master motorcycle wheelies and stunts with our complete game guide. Learn keyboard shortcuts, advanced techniques, and pro tips for SoFlo Wheelie Life.',
  keywords: ['game guide', 'how to play', 'wheelie controls', 'motorcycle game guide', 'soflo wheelie life guide', 'stunt game tutorial'],
  alternates: {
    canonical: 'https://soflo-wheelie-life.com/guide',
  },
  openGraph: {
    title: 'Motorcycle Game Guide - SoFlo Wheelie Life',
    description: 'Master motorcycle wheelies and stunts with our complete game guide. Learn keyboard shortcuts, advanced techniques, and pro tips for SoFlo Wheelie Life.',
    url: 'https://soflo-wheelie-life.com/guide',
    siteName: 'SoFlo Wheelie Life',
    type: 'website',
  },
};

export default function GuidePage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-black via-gray-900 to-black py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#00D9FF] via-[#FF00FF] to-[#FFD700] bg-clip-text text-transparent">
            Master Your Motorcycle Skills
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Complete guide to controls, techniques, and pro tips for dominating SoFlo Wheelie Life and other motorcycle stunt games.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert prose-lg max-w-none text-gray-300 space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#00D9FF]">
                Basic Game Controls
              </h2>

              <p className="mb-6">
                Learning the <strong>motorcycle game controls</strong> is essential for mastering <strong>SoFlo Wheelie Life</strong> and other wheelie games on our platform. The control scheme is designed to be intuitive yet deep, allowing beginners to start playing immediately while providing advanced players the precision needed for expert-level stunts.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-gradient-to-br from-gray-900 to-black border border-[#00D9FF]/30 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-[#FF00FF]">Primary Controls</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-400">Accelerate</span>
                        <div className="flex gap-2">
                          <kbd className="px-3 py-1 bg-gray-800 rounded border border-gray-700 font-mono">↑</kbd>
                          <kbd className="px-3 py-1 bg-gray-800 rounded border border-gray-700 font-mono">W</kbd>
                        </div>
                      </div>
                      <p className="text-sm text-gray-500">Increase motorcycle speed and maintain momentum</p>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-400">Brake / Reverse</span>
                        <div className="flex gap-2">
                          <kbd className="px-3 py-1 bg-gray-800 rounded border border-gray-700 font-mono">↓</kbd>
                          <kbd className="px-3 py-1 bg-gray-800 rounded border border-gray-700 font-mono">S</kbd>
                        </div>
                      </div>
                      <p className="text-sm text-gray-500">Slow down or move backward for positioning</p>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-400">Balance Backward</span>
                        <div className="flex gap-2">
                          <kbd className="px-3 py-1 bg-gray-800 rounded border border-gray-700 font-mono">←</kbd>
                          <kbd className="px-3 py-1 bg-gray-800 rounded border border-gray-700 font-mono">A</kbd>
                        </div>
                      </div>
                      <p className="text-sm text-gray-500">Shift weight backward during wheelies and stunts</p>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-400">Balance Forward</span>
                        <div className="flex gap-2">
                          <kbd className="px-3 py-1 bg-gray-800 rounded border border-gray-700 font-mono">→</kbd>
                          <kbd className="px-3 py-1 bg-gray-800 rounded border border-gray-700 font-mono">D</kbd>
                        </div>
                      </div>
                      <p className="text-sm text-gray-500">Shift weight forward to prevent tipping over</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-900 to-black border border-[#FF00FF]/30 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-[#FF00FF]">Advanced Controls</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-400">Wheelie</span>
                        <kbd className="px-3 py-1 bg-gray-800 rounded border border-gray-700 font-mono">Space</kbd>
                      </div>
                      <p className="text-sm text-gray-500">Lift front wheel for wheelie maneuvers</p>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-400">Boost / Nitro</span>
                        <kbd className="px-3 py-1 bg-gray-800 rounded border border-gray-700 font-mono">Shift</kbd>
                      </div>
                      <p className="text-sm text-gray-500">Activate speed boost (when available)</p>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-400">Jump</span>
                        <kbd className="px-3 py-1 bg-gray-800 rounded border border-gray-700 font-mono">Space</kbd>
                      </div>
                      <p className="text-sm text-gray-500">Launch off ramps for aerial stunts</p>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-400">Camera View</span>
                        <kbd className="px-3 py-1 bg-gray-800 rounded border border-gray-700 font-mono">C</kbd>
                      </div>
                      <p className="text-sm text-gray-500">Switch between camera angles (select games)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#00D9FF]">
                Mastering Wheelie Techniques
              </h2>

              <p>
                The <strong>wheelie</strong> is the cornerstone technique in <strong>SoFlo Wheelie Life</strong> and similar motorcycle stunt games. Executing the perfect wheelie requires understanding balance physics, throttle control, and weight distribution. Here's how to master this essential motorcycle skill.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-[#FF00FF]">
                Beginner Wheelie Tutorial
              </h3>

              <ol className="space-y-4 ml-6">
                <li className="pl-2">
                  <strong className="text-[#00D9FF]">Start at moderate speed:</strong> Begin accelerating with the up arrow or W key. Avoid going too fast initially—moderate speed provides better control for learning.
                </li>
                <li className="pl-2">
                  <strong className="text-[#00D9FF]">Initiate the wheelie:</strong> Press and hold the Space bar to lift the front wheel. In <strong>SoFlo Wheelie Life</strong>, this transfers weight to the rear and elevates the front wheel off the ground.
                </li>
                <li className="pl-2">
                  <strong className="text-[#00D9FF]">Find the balance point:</strong> Use the left/right arrow keys (or A/D) to adjust your balance. The goal is maintaining the motorcycle at the sweet spot where it stays on one wheel without flipping backward.
                </li>
                <li className="pl-2">
                  <strong className="text-[#00D9FF]">Maintain the wheelie:</strong> Continue accelerating gently while making micro-adjustments with the balance controls. Smooth inputs are key—aggressive movements cause instability.
                </li>
                <li className="pl-2">
                  <strong className="text-[#00D9FF]">Landing safely:</strong> To end the wheelie, ease off the throttle and shift your weight forward (right arrow or D key) to bring the front wheel down smoothly.
                </li>
              </ol>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-[#FF00FF]">
                Advanced Wheelie Techniques
              </h3>

              <p>
                Once you've mastered basic wheelies in your favorite <strong>motorcycle stunt games</strong>, challenge yourself with these advanced techniques:
              </p>

              <ul className="space-y-3 ml-6">
                <li className="pl-2">
                  <strong className="text-[#00D9FF]">High-Speed Wheelies:</strong> Performing wheelies at maximum velocity requires lightning-fast balance corrections. Practice at increasing speeds to build muscle memory and reaction time.
                </li>
                <li className="pl-2">
                  <strong className="text-[#00D9FF]">Extended Wheelie Runs:</strong> The Wheelie Challenge game mode tests how long you can maintain a single wheelie. Focus on finding and staying at the perfect balance point for maximum distance.
                </li>
                <li className="pl-2">
                  <strong className="text-[#00D9FF]">Wheelie Through Obstacles:</strong> Advanced <strong>stunt simulator</strong> levels incorporate obstacles during wheelie sections. Plan your line and maintain composure through challenging sections.
                </li>
                <li className="pl-2">
                  <strong className="text-[#00D9FF]">Combo Wheelies:</strong> Chain wheelies with other stunts like jumps and flips for higher scores. Timing the transition between different maneuvers is crucial for success.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#00D9FF]">
                Stunt and Racing Techniques
              </h2>

              <p>
                Beyond wheelies, <strong>SoFlo Wheelie Life</strong> and our other <strong>motorcycle games</strong> feature diverse gameplay requiring specialized techniques for stunts, racing, and obstacle navigation.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-[#FF00FF]">
                Aerial Stunts
              </h3>

              <p>
                Games like <strong>Moto X3M</strong> and <strong>Stunt Simulator</strong> incorporate ramps and aerial sections. Execute flips by pressing forward or backward repeatedly while airborne. The key is timing your rotations to land wheels-first for clean landings and maximum points.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-[#FF00FF]">
                Racing Optimization
              </h3>

              <p>
                In racing-focused motorcycle games, optimal performance requires mastering racing lines, braking points, and boost management. Study track layouts, identify the fastest paths, and practice consistent execution. Strategic boost usage often makes the difference between victory and defeat.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-[#FF00FF]">
                Obstacle Navigation
              </h3>

              <p>
                <strong>Trial Xtreme</strong> and similar trial games demand precise obstacle navigation. Approach challenges methodically—use careful throttle control, subtle balance adjustments, and patience. Rushing through difficult sections typically results in crashes; steady, controlled riding achieves better results.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#00D9FF]">
                Pro Tips for Maximum Performance
              </h2>

              <div className="bg-gradient-to-br from-gray-900 to-black border border-[#00D9FF]/30 rounded-lg p-6 my-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-[#FF00FF] mr-3 text-xl">🏆</span>
                    <div>
                      <strong className="text-[#00D9FF]">Practice in training modes:</strong> Many <strong>motorcycle stunt games</strong> offer practice areas or tutorial levels. Use these to develop skills without pressure before attempting difficult challenges.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF00FF] mr-3 text-xl">🎯</span>
                    <div>
                      <strong className="text-[#00D9FF]">Learn from failures:</strong> Every crash teaches something. Analyze what went wrong and adjust your approach. The best <strong>SoFlo Wheelie Life</strong> players learned through thousands of attempts.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF00FF] mr-3 text-xl">⚙️</span>
                    <div>
                      <strong className="text-[#00D9FF]">Customize controls if possible:</strong> Some games allow control remapping. Experiment with configurations to find what feels most comfortable and responsive for your playstyle.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF00FF] mr-3 text-xl">📊</span>
                    <div>
                      <strong className="text-[#00D9FF]">Watch expert gameplay:</strong> Study videos of skilled players tackling difficult sections. Observe their techniques, timing, and decision-making to improve your own gameplay.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF00FF] mr-3 text-xl">🔧</span>
                    <div>
                      <strong className="text-[#00D9FF]">Upgrade strategically:</strong> In games with bike customization, prioritize upgrades that match your playstyle. Balance-focused builds suit wheelie specialists, while acceleration benefits racers.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF00FF] mr-3 text-xl">🎮</span>
                    <div>
                      <strong className="text-[#00D9FF]">Take breaks:</strong> Fatigue reduces performance. If you're stuck on a difficult level, take a short break. Returning with a fresh mind often leads to immediate improvement.
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#00D9FF]">
                Game-Specific Control Variations
              </h2>

              <p>
                While most <strong>motorcycle wheelie games</strong> share similar control schemes, some titles feature unique mechanics:
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-gray-900 border border-[#00D9FF]/20 rounded-lg p-4">
                  <h4 className="font-bold text-[#FF00FF] mb-2">Wheelie Challenge</h4>
                  <p className="text-sm text-gray-400">
                    Uses simplified tap/hold controls. Hold to wheelie, release to stabilize. Perfect for quick mobile sessions or casual play.
                  </p>
                </div>

                <div className="bg-gray-900 border border-[#00D9FF]/20 rounded-lg p-4">
                  <h4 className="font-bold text-[#FF00FF] mb-2">Stunt Simulator</h4>
                  <p className="text-sm text-gray-400">
                    Features free-roam camera controls (C key) and additional trick buttons. Offers the most control depth for creative stunt composition.
                  </p>
                </div>

                <div className="bg-gray-900 border border-[#00D9FF]/20 rounded-lg p-4">
                  <h4 className="font-bold text-[#FF00FF] mb-2">Highway Rider Extreme</h4>
                  <p className="text-sm text-gray-400">
                    Adds lane-switching controls for traffic navigation. Left/right arrows switch lanes while Space performs wheelies for speed boosts.
                  </p>
                </div>
              </div>

              <p>
                Check individual game pages for specific control information. Each <strong>motorcycle game</strong> provides an in-game tutorial explaining its unique mechanics.
              </p>
            </div>

            <div className="bg-gradient-to-r from-[#00D9FF]/20 to-[#FF00FF]/20 border border-[#00D9FF]/50 rounded-lg p-8 text-center my-12">
              <h2 className="text-2xl font-bold mb-4 text-white">
                Ready to Master SoFlo Wheelie Life?
              </h2>
              <p className="text-gray-300 mb-6">
                Put your new skills to the test in the ultimate motorcycle wheelie game. Start playing now and become a wheelie champion!
              </p>
              <Link
                href="/#game"
                className="inline-block bg-gradient-to-r from-[#00D9FF] to-[#FF00FF] text-white px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity"
              >
                Play SoFlo Wheelie Life Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
