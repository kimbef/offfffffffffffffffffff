export interface YouTubeVideo {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  views: string;
  uploadDate: string;
  game: string;
  platform: "YouTube";
  url: string;
}

export class YouTubeService {
  private static async fetchFromAPI(endpoint: string): Promise<any> {
    try {
      // For now, we'll use a mock response since we don't have the API running
      // In production, this would call your actual API endpoint
      const response = await fetch(`/api/${endpoint}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error(`Error fetching from ${endpoint}:`, error);
      // Return mock data as fallback
      return this.getMockData();
    }
  }

  static async getVideos(): Promise<YouTubeVideo[]> {
    try {
      const data = await this.fetchFromAPI('youtube-videos');
      return data.videos || [];
    } catch (error) {
      console.error('Error fetching YouTube videos:', error);
      return this.getMockData();
    }
  }

  private static getMockData(): YouTubeVideo[] {
    // This is temporary until your API is connected
    return [
      {
        id: 'mock-1',
        title: 'Epic Dota 2 Comeback - Divine Rank Gameplay',
        thumbnail: '/placeholder.jpg',
        duration: '25:30',
        views: '15.2K',
        uploadDate: '2 days ago',
        game: 'Dota 2',
        platform: 'YouTube' as const,
        url: 'https://www.youtube.com/watch?v=mock1'
      },
      {
        id: 'mock-2',
        title: 'Advanced Warding Techniques - Pro Tips',
        thumbnail: '/placeholder.jpg',
        duration: '18:45',
        views: '8.7K',
        uploadDate: '1 week ago',
        game: 'Dota 2',
        platform: 'YouTube' as const,
        url: 'https://www.youtube.com/watch?v=mock2'
      }
    ];
  }
}
