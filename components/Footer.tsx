import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-[#00D9FF]/20 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Brand */}
        <div className="max-w-2xl">
          <Link href="/" className="flex items-center space-x-2 mb-4">
            <span className="text-2xl">🏍️</span>
            <span className="text-xl font-bold bg-gradient-to-r from-[#00D9FF] to-[#FF00FF] bg-clip-text text-transparent">
              SoFlo Wheelie Life
            </span>
          </Link>
          <p className="text-gray-400">
            Experience the ultimate collection of free online motorcycle wheelie and stunt games. Master wheelies, perform incredible stunts, and dominate the streets in your browser.
          </p>
        </div>

        <div className="border-t border-[#00D9FF]/20 mt-8 pt-8 text-center text-gray-400 text-sm space-y-2">
          <p>&copy; {currentYear} SoFlo Wheelie Life. All rights reserved. Play free motorcycle wheelie games online.</p>
          <p>
            Contact: <a href="mailto:support@soflo-wheelie-life.com" className="text-[#00D9FF] hover:text-[#FF00FF] transition-colors">support@soflo-wheelie-life.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
