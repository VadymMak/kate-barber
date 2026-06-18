import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import DecorativeDivider from '@/components/ui/DecorativeDivider';
import StatsBar from '@/components/sections/StatsBar';
import ServicesSection from '@/components/sections/ServicesSection';
import WhyUsSection from '@/components/sections/WhyUsSection';
import GallerySection from '@/components/sections/GallerySection';
import TeamSection from '@/components/sections/TeamSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import BookingSection from '@/components/sections/BookingSection';
import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <DecorativeDivider />
        <StatsBar />
        <ServicesSection />
        <WhyUsSection />
        <GallerySection />
        <TeamSection />
        <TestimonialsSection />
        <BookingSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
