'use client';

import AnnouncementBar from '@/components/layout/announcement-bar';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/features/home/components/hero-section';
import HowItWorksSection from '@/features/home/components/how-it-works-section';
import FeaturesSection from '@/features/home/components/features-section';
import CTASection from '@/components/common/cta-section';

export default function HomePage() {
  return (
    <div className="bg-body text-body font-body antialiased">
      <AnnouncementBar />
      <section className="bg-gradient-to-b from-darkBlue-900 via-blue-700 to-blue-400">
        <Header variant="home" />
        <div className="container mx-auto px-4">
          <HeroSection />
        </div>
      </section>
      <HowItWorksSection />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </div>
  );
}