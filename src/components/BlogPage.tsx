import React from 'react';

export const BlogPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-white mb-8">Blog</h1>
      <div className="grid gap-6">
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-white mb-4">Latest Gaming News</h2>
          <p className="text-gray-300 mb-4">
            Stay updated with the latest gaming news, reviews, and insights from the gaming world.
          </p>
          <div className="text-sm text-gray-400">Published: December 2024</div>
        </div>
        
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-white mb-4">Gaming Tips & Tricks</h2>
          <p className="text-gray-300 mb-4">
            Discover helpful tips and strategies to improve your gaming skills and performance.
          </p>
          <div className="text-sm text-gray-400">Published: December 2024</div>
        </div>
        
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-white mb-4">Game Reviews</h2>
          <p className="text-gray-300 mb-4">
            In-depth reviews of the latest games, covering gameplay, graphics, and overall experience.
          </p>
          <div className="text-sm text-gray-400">Published: December 2024</div>
        </div>
      </div>
    </div>
  );
};
