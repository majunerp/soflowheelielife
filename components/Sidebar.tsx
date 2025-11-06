'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      title: 'Home',
      icon: '🏠',
      href: '/',
    },
    {
      title: 'Wheelie Games',
      icon: '🏍️',
      href: '/games',
    },
  ];

  const categories = [
    { title: 'Motorcycle Games', icon: '🎮' },
    { title: 'Racing Games', icon: '🏁' },
    { title: 'Stunt Games', icon: '🎯' },
    { title: 'Arcade Games', icon: '👾' },
    { title: 'Action Games', icon: '⚡' },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 bg-gradient-to-r from-[#00D9FF] to-[#FF00FF] text-white p-3 rounded-lg shadow-lg hover:opacity-90 transition-opacity"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/70 z-30 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full bg-gradient-to-b from-gray-900 via-black to-gray-900
          border-r border-[#00D9FF]/20 shadow-2xl z-40
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          w-64 overflow-hidden
        `}
      >
        <div className="flex flex-col h-full">
          {/* Logo/Header */}
          <div className="p-6 border-b border-[#00D9FF]/20 bg-black/40">
            <Link href="/" className="block group" onClick={() => setIsOpen(false)}>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-2xl">🏍️</span>
                <h2 className="text-xl font-bold bg-gradient-to-r from-[#00D9FF] to-[#FF00FF] bg-clip-text text-transparent group-hover:from-[#FF00FF] group-hover:to-[#00D9FF] transition-all">
                  SoFlo Wheelie Life
                </h2>
              </div>
              <p className="text-xs text-gray-500 ml-8">Free Motorcycle Games</p>
            </Link>
          </div>

          {/* Navigation Menu */}
          <nav className="flex-1 overflow-y-auto p-4 custom-scrollbar">
            {/* Main Navigation */}
            <div className="space-y-1 mb-6">
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 px-3">
                Main Menu
              </div>
              {menuItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`
                      flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200
                      ${
                        isActive
                          ? 'bg-gradient-to-r from-[#00D9FF]/20 to-[#FF00FF]/20 text-white border border-[#00D9FF]/50 shadow-lg shadow-[#00D9FF]/10'
                          : 'text-gray-400 hover:text-white hover:bg-gray-800/50 hover:border hover:border-gray-700/50'
                      }
                    `}
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="font-medium text-sm">{item.title}</span>
                  </Link>
                );
              })}
            </div>

            {/* Game Categories */}
            <div className="space-y-1">
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 px-3">
                Categories
              </div>
              <div className="space-y-1">
                {categories.map((category, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 px-3 py-2 text-sm text-gray-500 hover:text-gray-400 transition-colors cursor-default"
                  >
                    <span className="text-lg">{category.icon}</span>
                    <span>{category.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-[#00D9FF]/20 bg-black/40">
            <div className="text-xs text-gray-600 text-center space-y-1">
              <p className="font-semibold text-gray-500">© 2024 SoFlo Wheelie Life</p>
              <p>All Rights Reserved</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Custom Scrollbar Styles */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.2);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(0, 217, 255, 0.3);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 217, 255, 0.5);
        }
      `}</style>
    </>
  );
}
