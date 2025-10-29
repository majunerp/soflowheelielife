'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-[#00D9FF] transition-colors">
              Home
            </Link>
            <Link href="/games" className="text-gray-300 hover:text-[#00D9FF] transition-colors">
              Games
            </Link>
            <Link href="/controls" className="text-gray-300 hover:text-[#00D9FF] transition-colors">
              Controls
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-[#00D9FF] transition-colors">
              About
            </Link>
            <Link
              href="/games/soflo-wheelie-life"
              className="bg-gradient-to-r from-[#00D9FF] to-[#FF00FF] text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Play Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-[#00D9FF]"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <Link href="/" className="block text-gray-300 hover:text-[#00D9FF] transition-colors py-2">
              Home
            </Link>
            <Link href="/games" className="block text-gray-300 hover:text-[#00D9FF] transition-colors py-2">
              Games
            </Link>
            <Link href="/controls" className="block text-gray-300 hover:text-[#00D9FF] transition-colors py-2">
              Controls
            </Link>
            <Link href="/about" className="block text-gray-300 hover:text-[#00D9FF] transition-colors py-2">
              About
            </Link>
            <Link
              href="/games/soflo-wheelie-life"
              className="block bg-gradient-to-r from-[#00D9FF] to-[#FF00FF] text-white px-6 py-2 rounded-lg font-semibold text-center hover:opacity-90 transition-opacity"
            >
              Play Now
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
