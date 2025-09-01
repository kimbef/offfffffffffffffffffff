import React from 'react';

interface AdContentProps {
  position: 'top' | 'middle' | 'bottom';
}

export const AdContent: React.FC<AdContentProps> = ({ position }) => {
  const getAdContent = () => {
    switch (position) {
      case 'top':
        return {
          title: 'Sponsored by Gaming Gear Pro',
          description: 'Get the best gaming equipment for your Dota 2 sessions',
          cta: 'Shop Now',
          bgColor: 'bg-gradient-accent'
        };
      case 'middle':
        return {
          title: 'Join Our Discord Community',
          description: 'Connect with fellow Dota 2 players and get exclusive tips',
          cta: 'Join Discord',
          bgColor: 'bg-gradient-primary'
        };
      case 'bottom':
        return {
          title: 'Support the Channel',
          description: 'Help us create more amazing Dota 2 content',
          cta: 'Support Us',
          bgColor: 'bg-accent-purple'
        };
      default:
        return {
          title: 'Advertisement',
          description: 'Your ad could be here',
          cta: 'Learn More',
          bgColor: 'bg-bg-muted'
        };
    }
  };

  const ad = getAdContent();

  return (
    <section className={`py-12 ${ad.bgColor} relative overflow-hidden`}>
      {/* Background pattern - simplified */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-dots-pattern"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
          {ad.title}
        </h2>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          {ad.description}
        </p>
        
        <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
          {ad.cta}
        </button>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
    </section>
  );
};
