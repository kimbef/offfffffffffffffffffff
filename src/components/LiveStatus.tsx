import React, { useState, useEffect } from 'react';
import { TwitchService } from '../services/twitchService';
import type { TwitchStreamStatus } from '../services/twitchService';

export const LiveStatus: React.FC = () => {
  const [streamStatus, setStreamStatus] = useState<TwitchStreamStatus>({
    isLive: false,
    url: 'https://www.twitch.tv/unoobzzz'
  });

  useEffect(() => {
    let cleanup: (() => void) | undefined;

    const setupStatusChecking = async () => {
      cleanup = await TwitchService.checkStatusPeriodically((status) => {
        setStreamStatus(status);
      }, 30000); // Check every 30 seconds
    };

    setupStatusChecking();

    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  if (!streamStatus.isLive) {
    return null; // Don't show anything if not live
  }

  return (
    <div className="fixed top-20 left-4 z-40">
      <div className="bg-accent-red text-white px-4 py-2 rounded-lg shadow-lg animate-pulse">
        <div className="flex items-center gap-2">
          {/* Live indicator */}
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <span className="text-sm font-semibold">LIVE</span>
        </div>
        
        {/* Stream info */}
        <div className="mt-2 text-xs">
          <div className="font-medium truncate max-w-48" title={streamStatus.title}>
            {streamStatus.title || 'Dota 2 Stream'}
          </div>
          <div className="text-red-100">
            {streamStatus.viewerCount ? `${streamStatus.viewerCount.toLocaleString()} viewers` : 'Live now'}
          </div>
        </div>

        {/* Watch button */}
        <a 
          href={streamStatus.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 block w-full bg-white text-accent-red text-xs font-semibold py-1 px-2 rounded text-center hover:bg-gray-100 transition-colors"
        >
          Watch Now
        </a>
      </div>
    </div>
  );
};
