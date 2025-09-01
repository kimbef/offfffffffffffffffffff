
import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { VideoShowcase } from './components/VideoShowcase';
import { BlogPreview } from './components/BlogPreview';
import { AdContent } from './components/AdContent';
import { LiveStatus } from './components/LiveStatus';
import { ErrorBoundary } from './components/ErrorBoundary';
import { AboutPage } from './components/AboutPage.tsx';
import { VideosPage } from './components/VideosPage';
import { AdminPage } from './components/AdminPage';
import { AdminLoginPage } from './components/AdminLoginPage';
// import { BlogPage } from './components/BlogPage';
// import { PartnersPage } from './components/PartnersPage';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage />
      case 'videos':
        return <VideosPage />
      // case 'blog':
      //   return <BlogPage />
      // case 'partners':
      //   return <PartnersPage />
      case 'admin':
        return <AdminPage />
      case 'admin-login':
        return <AdminLoginPage />
      default:
        return (
          <>
            <LiveStatus />
            <HeroSection />
            <AdContent position="top" />
            <VideoShowcase />
            <BlogPreview />
            <AdContent position="bottom" />
          </>
        )
    }
  }

  return (
    <ErrorBoundary>
      <main style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>
        <Navigation onPageChange={setCurrentPage} />
        {renderPage()}
      </main>
    </ErrorBoundary>
  );
}

export default App;
