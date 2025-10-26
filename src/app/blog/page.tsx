import AnnouncementBar from '@/components/layout/announcement-bar';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import PlaceholderContent from '@/components/ui/placeholder-content';
import CTASection from '@/components/common/cta-section';

export default function BlogPage() {
  return (
    <div className="bg-body text-body font-body antialiased">
      <AnnouncementBar />
      <section className="bg-darkBlue-900">
        <Header />
      </section>
      <PlaceholderContent />
      <CTASection />
      <Footer />
    </div>
  );
}
