
import Hero from '@/components/Hero';
import FeaturedSection from '@/components/FeaturedSection';
import EventsSection from '@/components/EventsSection';
import UpdatesSection from '@/components/UpdatesSection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturedSection />
        <EventsSection />
        <UpdatesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
