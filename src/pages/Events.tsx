
import { useState } from 'react';
import { Calendar, Search, Filter } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EventCard, { EventType } from '@/components/EventCard';

// Extended events data for the events page
const eventsData: EventType[] = [
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
  },
  {
    id: 3,
    title: "Coffee & Jazz Night",
    date: "April 18, 2024",
    time: "7:00 PM - 10:00 PM",
    location: "The Caffeine Collective, Hauz Khas",
    image: "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?ixlib=rb-4.0.3",
    description: "Enjoy an evening of smooth jazz performances while sampling our special coffee menu. A perfect night out for music and coffee lovers.",
    isFeatured: false
  },
  {
    id: 4,
    title: "Café Hopping Tour: South Delhi Edition",
    date: "April 27, 2024",
    time: "10:00 AM - 2:00 PM",
    location: "Meeting Point: Serenitea, South Extension",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-4.0.3",
    description: "Join our guided tour of South Delhi's most Instagram-worthy cafés. Includes coffee tastings at each location and transport between venues.",
    isFeatured: true
  },
  {
    id: 5,
    title: "Cold Brew & Kombucha Workshop",
    date: "May 2, 2024",
    time: "4:00 PM - 6:00 PM",
    location: "Velvet Brew, Galleria Market",
    image: "https://images.unsplash.com/photo-1527683703631-9108e48f8734?ixlib=rb-4.0.3",
    description: "Learn how to make perfect cold brew coffee and kombucha at home with our resident fermentation expert. All materials provided.",
    isFeatured: false
  },
  {
    id: 6,
    title: "Coffee Bean Roasting Demonstration",
    date: "May 9, 2024",
    time: "11:00 AM - 1:00 PM",
    location: "The Grind House, Noida",
    image: "https://images.unsplash.com/photo-1507226983735-a838615193b0?ixlib=rb-4.0.3",
    description: "Watch our master roaster demonstrate the art of coffee roasting and learn about the process from green bean to perfect roast.",
    isFeatured: false
  }
];

const eventTypes = [
  "All Events",
  "Workshops",
  "Tastings",
  "Tours",
  "Classes",
  "Social Gatherings"
];

const Events = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [eventType, setEventType] = useState("All Events");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedMonths, setSelectedMonths] = useState<string[]>([]);

  // Extract all months from events
  const months = [...new Set(eventsData.map(event => {
    const date = new Date(event.date);
    return date.toLocaleString('default', { month: 'long' });
  }))];

  const handleMonthToggle = (month: string) => {
    if (selectedMonths.includes(month)) {
      setSelectedMonths(selectedMonths.filter(m => m !== month));
    } else {
      setSelectedMonths([...selectedMonths, month]);
    }
  };

  const filteredEvents = eventsData.filter(event => {
    // Search filter
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          event.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Event type filter - just a placeholder, would need proper categorization
    const matchesType = eventType === "All Events" || 
                        (eventType === "Workshops" && event.title.includes("Workshop")) ||
                        (eventType === "Tastings" && event.title.includes("Tasting")) ||
                        (eventType === "Tours" && event.title.includes("Tour")) ||
                        (eventType === "Classes" && event.title.includes("Class")) ||
                        (eventType === "Social Gatherings" && event.title.includes("Night"));
    
    // Month filter
    const eventMonth = new Date(event.date).toLocaleString('default', { month: 'long' });
    const matchesMonth = selectedMonths.length === 0 || selectedMonths.includes(eventMonth);
    
    return matchesSearch && matchesType && matchesMonth;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              <span className="gold-gradient">Upcoming Events</span>
            </h1>
            <p className="text-cream-dark max-w-2xl mx-auto">
              Join our community for coffee tastings, workshops, café tours, and social gatherings across Delhi NCR.
            </p>
          </div>
          
          <div className="mb-8 flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cream-dark" size={20} />
              <input
                type="text"
                placeholder="Search events..."
                className="input-field pl-10 w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="relative md:w-64">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cream-dark" size={20} />
              <select
                className="input-field appearance-none pl-10 w-full pr-10"
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
              >
                {eventTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
            
            <button 
              className="button-outline md:w-auto flex items-center justify-center"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <Filter size={20} className="mr-2" />
              Filter
            </button>
          </div>
          
          {/* Filters Panel */}
          {isFilterOpen && (
            <div className="bg-espresso-light border border-mocha p-4 rounded-md mb-8 animate-fade-in">
              <h3 className="text-gold font-medium mb-3">Filter by Month</h3>
              <div className="flex flex-wrap gap-2">
                {months.map(month => (
                  <button
                    key={month}
                    className={`px-3 py-1 rounded-full text-sm transition-all ${
                      selectedMonths.includes(month) 
                        ? 'bg-gold text-espresso' 
                        : 'bg-mocha text-cream-dark hover:bg-mocha-light'
                    }`}
                    onClick={() => handleMonthToggle(month)}
                  >
                    {month}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredEvents.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-cream text-lg mb-2">No events match your search criteria</p>
              <p className="text-cream-dark">Try adjusting your filters or search term</p>
              <button 
                className="button-gold mt-4"
                onClick={() => {
                  setSearchTerm("");
                  setEventType("All Events");
                  setSelectedMonths([]);
                }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Events;
