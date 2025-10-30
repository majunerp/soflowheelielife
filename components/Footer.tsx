import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-[#00D9FF]/20 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">🏍️</span>
              <span className="text-xl font-bold bg-gradient-to-r from-[#00D9FF] to-[#FF00FF] bg-clip-text text-transparent">
                SoFlo Wheelie Life
              </span>
            </Link>
            <p className="text-gray-400 max-w-md">
              Experience the ultimate collection of free online motorcycle wheelie and stunt games. Master wheelies, perform incredible stunts, and dominate the streets in your browser.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-start md:items-end">
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.tiktok.com/@soflowheelielife" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00D9FF] transition-colors" aria-label="TikTok">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a href="https://www.youtube.com/@soflowheelielife" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00D9FF] transition-colors" aria-label="YouTube">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="https://twitter.com/soflowheelielife" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00D9FF] transition-colors" aria-label="Twitter">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#00D9FF]/20 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} SoFlo Wheelie Life. All rights reserved. Play free motorcycle wheelie games online.</p>
        </div>
      </div>
    </footer>
  );
}
