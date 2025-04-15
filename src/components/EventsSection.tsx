
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import EventCard, { EventType } from './EventCard';

const upcomingEvents: EventType[] = [
  {
    id: 1,
    title: "Coffee Tasting Workshop",
    date: "April 20, 2024",
    time: "3:00 PM - 5:00 PM",
    location: "Roasted Rituals, Connaught Place",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3",
    description: "Join our expert baristas for an immersive coffee tasting experience. Learn to identify flavor notes, brewing techniques, and the art of cupping.",
    isFeatured: true
  },
  {
    id: 2,
    title: "Latte Art Masterclass",
    date: "April 25, 2024",
    time: "6:00 PM - 8:00 PM",
    location: "Brewsome, Cyber Hub",
    image: "https://images.unsplash.com/photo-1592663527359-cf6642f54cff?ixlib=rb-4.0.3",
    description: "Master the delicate art of latte design with our champion barista. This hands-on workshop will cover everything from hearts to rosettas.",
    isFeatured: false
  }
];

const EventsSection = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-espresso-dark">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-cream">
            Upcoming <span className="text-gold">Events</span>
          </h2>
          <Link 
            to="/events" 
            className="hidden md:flex items-center text-gold hover:text-gold-light transition-colors"
          >
            View All
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {upcomingEvents.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
        
        <div className="mt-10 flex justify-center md:hidden">
          <Link to="/events" className="button-outline">
            View All Events
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
