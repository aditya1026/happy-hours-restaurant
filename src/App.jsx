import React from 'react';
import DemoBanner from './components/DemoBanner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import FeaturedFood from './components/FeaturedFood';
import MenuPreview from './components/MenuPreview';
import StatementSection from './components/StatementSection';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Location from './components/Location';
import InstagramCTA from './components/InstagramCTA';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import QuickActions from './components/QuickActions';

function App() {
  return (
    <div className="min-h-screen bg-dark text-cream font-sans selection:bg-brand-orange selection:text-white flex flex-col antialiased">
      {/* Presentation Notice Banner */}
      <DemoBanner />

      {/* Section 1: Premium Navigation */}
      <Navbar />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* Section 2: Hero Section */}
        <Hero />

        {/* Section 3: About Section (Cream Editorial) */}
        <About />

        {/* Section 4: Experience Section (Dark Luxury) */}
        <Experience />

        {/* Section 5: Featured Food Showcase (Cream Bento) */}
        <FeaturedFood />

        {/* Section 6: Menu Preview & Interactive Category Tabs (Dark) */}
        <MenuPreview />

        {/* Section 7: Dramatic Cinematic Statement (Dark Immersive) */}
        <StatementSection />

        {/* Section 8: Image Gallery (Cream Masonry) */}
        <Gallery />

        {/* Section 9: Testimonials Slider (Dark Elegant) */}
        <Testimonials />

        {/* Section 10: Location & Map Directions (Cream Split) */}
        <Location />

        {/* Section 11: Instagram Feed CTA (Dark Grid) */}
        <InstagramCTA />

        {/* Section 12: Final Closing Call To Action (Dark Glowing) */}
        <FinalCTA />
      </main>

      {/* Section 13: Footer */}
      <Footer />

      {/* Floating Quick Action Pill */}
      <QuickActions />
    </div>
  );
}

export default App;
