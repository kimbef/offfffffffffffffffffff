interface Video {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  views: string;
  date: string;
  game: string;
}

export const VideoShowcase: React.FC = () => {
  // Static data for now to fix the export issue
  const videos: Video[] = [
    {
      id: '1',
      title: 'Epic Dota 2 Comeback - Divine Rank Gameplay',
      thumbnail: '/placeholder.jpg',
      duration: '25:30',
      views: '15.2K',
      date: '2 days ago',
      game: 'Dota 2'
    },
    {
      id: '2',
      title: 'Advanced Warding Techniques - Pro Tips',
      thumbnail: '/placeholder.jpg',
      duration: '18:45',
      views: '8.7K',
      date: '1 week ago',
      game: 'Dota 2'
    },
    {
      id: '3',
      title: 'Carry Role Mastery - Farming Efficiency',
      thumbnail: '/placeholder.jpg',
      duration: '32:15',
      views: '12.1K',
      date: '2 weeks ago',
      game: 'Dota 2'
    },
    {
      id: '4',
      title: 'Support Play Guide - Vision Control',
      thumbnail: '/placeholder.jpg',
      duration: '22:30',
      views: '6.9K',
      date: '3 weeks ago',
      game: 'Dota 2'
    }
  ];

  return (
    <section className="py-20 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Latest <span className="text-accent-blue">Videos</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Dive into the latest Dota 2 content, strategies, and epic gameplay moments
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video) => (
            <div 
              key={video.id} 
              className="group bg-bg-card rounded-lg overflow-hidden shadow-card hover:shadow-glow transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video bg-bg-muted overflow-hidden">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                
                {/* Duration badge */}
                <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>

                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-accent-blue/90 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Video Info */}
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs bg-accent-purple/20 text-accent-purple px-2 py-1 rounded-full">
                    {video.game}
                  </span>
                </div>
                
                <h3 className="text-text-primary font-semibold text-sm line-clamp-2 mb-2 group-hover:text-accent-blue transition-colors duration-300">
                  {video.title}
                </h3>
                
                <div className="flex items-center justify-between text-xs text-text-muted">
                  <span>{video.views} views</span>
                  <span>{video.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a 
            href="https://www.youtube.com/@unoobZzz" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-accent text-white font-semibold rounded-lg hover:shadow-glow transition-all duration-300 transform hover:scale-105"
          >
            View All Videos
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
