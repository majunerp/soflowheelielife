import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-black/90 backdrop-blur-sm border-b border-[#00D9FF]/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="text-2xl">🏍️</span>
            <span className="text-xl font-bold bg-gradient-to-r from-[#00D9FF] to-[#FF00FF] bg-clip-text text-transparent">
              SoFlo Wheelie Life
            </span>
          </Link>

          <a
            href="#game"
            className="bg-gradient-to-r from-[#00D9FF] to-[#FF00FF] text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Play Now
          </a>
        </div>
      </div>
    </nav>
  );
}
