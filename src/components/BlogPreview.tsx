import React from 'react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

export const BlogPreview: React.FC = () => {
  // Mock data - replace with real blog data
  const featuredPosts: BlogPost[] = [
    {
      id: '1',
      title: 'The Evolution of Dota 2 Meta: From 6.84 to Present',
      excerpt: 'Explore how the Dota 2 meta has evolved over the years, from the infamous 6.84 patch to the current competitive scene...',
      author: 'unoobZzz',
      date: '3 days ago',
      readTime: '8 min read',
      category: 'Strategy',
      image: '/placeholder.jpg'
    },
    {
      id: '2',
      title: 'Advanced Warding Techniques for Support Players',
      excerpt: 'Master the art of warding with these advanced techniques that will give your team the vision advantage...',
      author: 'unoobZzz',
      date: '1 week ago',
      readTime: '6 min read',
      category: 'Guide',
      image: '/placeholder.jpg'
    },
    {
      id: '3',
      title: 'Carry Role Mastery: Farming Patterns and Efficiency',
      excerpt: 'Learn the optimal farming patterns and efficiency techniques to maximize your gold income as a carry...',
      author: 'unoobZzz',
      date: '2 weeks ago',
      readTime: '10 min read',
      category: 'Gameplay',
      image: '/placeholder.jpg'
    }
  ];

  return (
    <section className="py-20 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Latest <span className="text-accent-blue">Blog Posts</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Deep dives into Dota 2 strategy, meta analysis, and advanced gameplay techniques
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-bg-card rounded-lg overflow-hidden shadow-card hover:shadow-glow transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Post Image */}
              <div className="aspect-video bg-bg-muted overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Post Content */}
              <div className="p-6">
                {/* Category and Read Time */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs bg-accent-purple/20 text-accent-purple px-3 py-1 rounded-full font-medium">
                    {post.category}
                  </span>
                  <span className="text-xs text-text-muted">{post.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-text-primary mb-3 line-clamp-2 hover:text-accent-blue transition-colors duration-300">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-text-secondary text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Author and Date */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-accent-blue rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">U</span>
                    </div>
                    <span className="text-sm text-text-secondary">{post.author}</span>
                  </div>
                  <span className="text-xs text-text-muted">{post.date}</span>
                </div>

                {/* Read More Button */}
                <button className="w-full mt-4 py-2 border border-accent-blue text-accent-blue rounded-lg hover:bg-accent-blue hover:text-white transition-colors duration-300">
                  Read More
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* View All Posts Button */}
        <div className="text-center mt-12">
          <a 
            href="/blog" 
            className="inline-flex items-center px-8 py-4 border-2 border-accent-blue text-accent-blue font-semibold rounded-lg hover:bg-accent-blue hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            View All Posts
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
