import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About SoFlo Wheelie Life - Free Motorcycle Games',
  description: 'Learn about SoFlo Wheelie Life, the premier platform for free online motorcycle wheelie and stunt games. Discover our mission and community.',
  keywords: ['about soflo wheelie life', 'motorcycle games platform', 'free bike games', 'wheelie game site'],
  alternates: {
    canonical: 'https://soflo-wheelie-life.com/about',
  },
  openGraph: {
    title: 'About SoFlo Wheelie Life - Free Motorcycle Games',
    description: 'Learn about SoFlo Wheelie Life, the premier platform for free online motorcycle wheelie and stunt games. Discover our mission and community.',
    url: 'https://soflo-wheelie-life.com/about',
    siteName: 'SoFlo Wheelie Life',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <main className="flex-1">
      <section className="bg-gradient-to-b from-black via-gray-900 to-black py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#00D9FF] via-[#FF00FF] to-[#FFD700] bg-clip-text text-transparent">
            About SoFlo Wheelie Life
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your ultimate destination for free online motorcycle wheelie and stunt games.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-black">
        <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
          <h2 className="text-3xl font-bold mb-6 text-[#00D9FF]">Our Mission</h2>
          <p className="text-gray-300">
            <strong>SoFlo Wheelie Life</strong> is dedicated to bringing the excitement of South Florida street motorcycle culture to gamers worldwide through free, accessible online games. We believe everyone should experience the thrill of performing perfect wheelies, executing incredible stunts, and mastering motorcycle control—all without downloads, installations, or costs.
          </p>

          <p className="text-gray-300">
            Our platform curates the best motorcycle wheelie and stunt games available online, ensuring quality, entertainment, and authentic gameplay mechanics. From the flagship <strong>SoFlo Wheelie Life</strong> game to popular titles like Wheelie Life 2, Wheelie Life 3, and Moto X3M, we deliver diverse experiences for all skill levels and preferences.
          </p>

          <h2 className="text-3xl font-bold mb-6 mt-12 text-[#00D9FF]">What We Offer</h2>

          <ul className="space-y-4 text-gray-300">
            <li>
              <strong className="text-[#FF00FF]">Curated Game Collection:</strong> We handpick every motorcycle game on our platform, ensuring high-quality gameplay, realistic physics, and genuine entertainment value.
            </li>
            <li>
              <strong className="text-[#FF00FF]">100% Free Access:</strong> All our games are completely free to play with no hidden costs, subscriptions, or premium features locked behind paywalls.
            </li>
            <li>
              <strong className="text-[#FF00FF]">Instant Browser Play:</strong> No downloads or installations required. Click and play immediately on any device—desktop, laptop, tablet, or smartphone.
            </li>
            <li>
              <strong className="text-[#FF00FF]">Community Focused:</strong> We're building a thriving community of motorcycle gaming enthusiasts who share tips, celebrate achievements, and support fellow players.
            </li>
            <li>
              <strong className="text-[#FF00FF]">Regular Updates:</strong> We continuously add new games, update existing content, and improve user experience based on community feedback.
            </li>
          </ul>

          <h2 className="text-3xl font-bold mb-6 mt-12 text-[#00D9FF]">Our Story</h2>

          <p className="text-gray-300">
            SoFlo Wheelie Life was born from a passion for motorcycle culture and gaming. Inspired by the vibrant street motorcycle scene in South Florida, we set out to create a platform that captures the authentic excitement of wheelies, stunts, and bike mastery in an accessible digital format.
          </p>

          <p className="text-gray-300">
            What started as a single game has evolved into a comprehensive gaming platform featuring the best motorcycle wheelie and stunt games from around the web. We're proud to serve thousands of players worldwide who share our love for two-wheeled excitement.
          </p>

          <h2 className="text-3xl font-bold mb-6 mt-12 text-[#00D9FF]">Contact Us</h2>

          <p className="text-gray-300">
            We love hearing from our community! Whether you have questions, suggestions, or just want to share your high scores, we're here to listen.
          </p>

          <div className="bg-gradient-to-br from-gray-900 to-black border border-[#00D9FF]/30 rounded-lg p-6 my-6">
            <p className="text-gray-300 mb-4">
              <strong className="text-[#FF00FF]">Email:</strong> <a href="mailto:contact@soflo-wheelie-life.com" className="text-[#00D9FF] hover:text-[#FF00FF]">contact@soflo-wheelie-life.com</a>
            </p>
            <p className="text-gray-300 mb-4">
              <strong className="text-[#FF00FF]">Follow Us:</strong>
            </p>
            <div className="flex gap-4">
              <a href="https://www.tiktok.com/@soflowheelielife" className="text-[#00D9FF] hover:text-[#FF00FF]">TikTok</a>
              <a href="https://www.youtube.com/@soflowheelielife" className="text-[#00D9FF] hover:text-[#FF00FF]">YouTube</a>
              <a href="https://twitter.com/soflowheelielife" className="text-[#00D9FF] hover:text-[#FF00FF]">Twitter</a>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/games"
              className="inline-block bg-gradient-to-r from-[#00D9FF] to-[#FF00FF] text-white px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity"
            >
              Browse Our Games
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
