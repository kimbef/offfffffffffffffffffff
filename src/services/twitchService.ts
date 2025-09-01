export interface TwitchStreamStatus {
  isLive: boolean;
  title?: string;
  game?: string;
  viewerCount?: number;
  startedAt?: string;
  thumbnail?: string;
  url: string;
  error?: string;
}

export class TwitchService {
  static async getStreamStatus(): Promise<TwitchStreamStatus> {
    try {
      // In production, this would call your actual Twitch API endpoint
      const response = await fetch('/api/twitch-status');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching Twitch status:', error);
      // Return fallback data
      return {
        isLive: false,
        url: 'https://www.twitch.tv/unoobzzz',
        error: 'Failed to fetch stream status'
      };
    }
  }

  static async checkStatusPeriodically(
    callback: (status: TwitchStreamStatus) => void,
    intervalMs: number = 30000
  ): Promise<() => void> {
    const checkStatus = async () => {
      const status = await this.getStreamStatus();
      callback(status);
    };

    // Check immediately
    await checkStatus();

    // Set up interval
    const intervalId = setInterval(checkStatus, intervalMs);

    // Return cleanup function
    return () => clearInterval(intervalId);
  }
}
