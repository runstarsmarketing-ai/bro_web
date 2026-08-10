import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Process } from './components/Process';
import { FeaturedWork } from './components/FeaturedWork';
import { SeamlessExperience } from './components/SeamlessExperience';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { VideoModal } from './components/VideoModal';
import { ContactModal } from './components/ContactModal';

export default function App() {
  const [videoModal, setVideoModal] = useState<{
    isOpen: boolean;
    url: string;
    title: string;
  }>({
    isOpen: false,
    url: '',
    title: '',
  });

  const [contactModalOpen, setContactModalOpen] = useState(false);

  const handleOpenVideoModal = (url: string, title: string) => {
    setVideoModal({
      isOpen: true,
      url,
      title,
    });
  };

  const handleCloseVideoModal = () => {
    setVideoModal({ ...videoModal, isOpen: false });
  };

  return (
    <div className="min-h-screen bg-black text-zinc-100 selection:bg-white selection:text-black font-sans antialiased overflow-x-hidden">
      {/* Top Navbar */}
      <Navbar
        onOpenContact={() => setContactModalOpen(true)}
      />

      {/* Main Page Sections */}
      <main>
        {/* Section 1: Hero + Premiere Style Timeline Editor */}
        <Hero onOpenContact={() => setContactModalOpen(true)} />

        {/* Section 2: About Me & Stats */}
        <About onOpenVideoModal={handleOpenVideoModal} />

        {/* Section 3: Portfolio & Filter Tabs */}
        <Portfolio onOpenVideoModal={handleOpenVideoModal} />

        {/* Section 4: My Work Process */}
        <Process />

        {/* Section 5: Featured Work Showcase */}
        <FeaturedWork onOpenVideoModal={handleOpenVideoModal} />

        {/* Section 6: Seamless Experience & Multi-screen Features */}
        <SeamlessExperience
          onOpenContact={() => setContactModalOpen(true)}
        />

        {/* Section 7: Services Offered */}
        <Services onOpenContact={() => setContactModalOpen(true)} />

        {/* Section 8: Testimonials */}
        <Testimonials />

        {/* Section 9: Contact Banner */}
        <ContactSection onOpenContactModal={() => setContactModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Video Modal Player */}
      <VideoModal
        isOpen={videoModal.isOpen}
        videoUrl={videoModal.url}
        title={videoModal.title}
        onClose={handleCloseVideoModal}
      />

      {/* Project Inquiry Contact Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </div>
  );
}
