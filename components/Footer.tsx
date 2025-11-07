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

        <div className="border-t border-[#00D9FF]/20 mt-8 pt-8">
          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <Link
              href="/terms"
              className="text-gray-400 hover:text-[#00D9FF] transition-colors text-sm"
            >
              Terms of Service
            </Link>
            <span className="text-gray-600">•</span>
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-[#00D9FF] transition-colors text-sm"
            >
              Privacy Policy
            </Link>
            <span className="text-gray-600">•</span>
            <a
              href="mailto:support@soflo-wheelie-life.com"
              className="text-gray-400 hover:text-[#00D9FF] transition-colors text-sm"
            >
              Contact Us
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-400 text-sm">
            <p>&copy; {currentYear} SoFlo Wheelie Life. All rights reserved. Play free motorcycle wheelie games online.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
