import React from 'react';

export const PartnersPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-white mb-8">Partners</h1>
      <div className="grid gap-6">
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-white mb-4">Gaming Companies</h2>
          <p className="text-gray-300 mb-4">
            We partner with leading gaming companies to bring you the best content and experiences.
          </p>
          <div className="text-sm text-gray-400">Partnership Type: Content Collaboration</div>
        </div>
        
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-white mb-4">Streaming Platforms</h2>
          <p className="text-gray-300 mb-4">
            Strategic partnerships with major streaming platforms to expand our reach and audience.
          </p>
          <div className="text-sm text-gray-400">Partnership Type: Platform Integration</div>
        </div>
        
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-white mb-4">Gaming Equipment</h2>
          <p className="text-gray-300 mb-4">
            Collaborations with gaming hardware manufacturers to showcase the latest equipment.
          </p>
          <div className="text-sm text-gray-400">Partnership Type: Product Promotion</div>
        </div>
      </div>
    </div>
  );
};
