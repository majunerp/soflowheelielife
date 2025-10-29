'use client';

import { useState } from 'react';

interface GameEmbedProps {
  src: string;
  title: string;
  className?: string;
}

export default function GameEmbed({ src, title, className = '' }: GameEmbedProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const toggleFullscreen = () => {
    const iframe = document.getElementById('game-iframe');
    if (!iframe) return;

    if (!document.fullscreenElement) {
      iframe.requestFullscreen().then(() => {
        setIsFullscreen(true);
      });
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      });
    }
  };

  return (
    <div className={`relative w-full ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 rounded-lg">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#00D9FF]"></div>
            <p className="text-gray-400 mt-4">Loading game...</p>
          </div>
        </div>
      )}

      <div className="relative aspect-video w-full bg-black rounded-lg overflow-hidden shadow-2xl shadow-[#00D9FF]/20">
        <iframe
          id="game-iframe"
          src={src}
          title={title}
          onLoad={handleLoad}
          className="absolute inset-0 w-full h-full border-0"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />

        <button
          onClick={toggleFullscreen}
          className="absolute bottom-4 right-4 bg-black/70 hover:bg-black/90 text-white p-2 rounded-lg transition-colors z-10"
          aria-label="Toggle fullscreen"
        >
          {isFullscreen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
