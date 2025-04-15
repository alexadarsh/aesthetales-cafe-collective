
import { ArrowRight, Coffee, Star, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

type UpdateType = {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  type: 'news' | 'cafe' | 'event';
};

const latestUpdates: UpdateType[] = [
  {
    id: 1,
    title: "Now Brewing: Ethiopian Yirgacheffe at The Caffeine Collective",
    date: "April 13, 2024",
    excerpt: "Experience the floral and citrus notes of this exceptional single-origin coffee, available for a limited time.",
    type: 'cafe'
  },
  {
    id: 2,
    title: "Monthly Coffee Subscription Now Available",
    date: "April 10, 2024",
    excerpt: "Get curated coffee beans from Delhi NCR's top cafés delivered straight to your door every month.",
    type: 'news'
  },
  {
    id: 3,
    title: "New Café Alert: Serenitea Opens in South Extension",
    date: "April 7, 2024",
    excerpt: "A Japanese-inspired café serving matcha creations alongside specialty coffee in a minimalist setting.",
    type: 'cafe'
  },
  {
    id: 4,
    title: "Coffee & Jazz Night - April Edition",
    date: "April 18, 2024",
    excerpt: "Join us for an evening of smooth jazz and specialty coffee tasting at Roasted Rituals.",
    type: 'event'
  }
];

const getIcon = (type: string) => {
  switch (type) {
    case 'cafe':
      return <Coffee size={18} className="text-gold" />;
    case 'event':
      return <Calendar size={18} className="text-gold" />;
    default:
      return <Star size={18} className="text-gold" />;
  }
};

const getTypeLabel = (type: string) => {
  switch (type) {
    case 'cafe':
      return 'Café Update';
    case 'event':
      return 'Event';
    default:
      return 'News';
  }
};

const UpdatesSection = () => {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-cream">
            Latest <span className="text-gold">Updates</span>
          </h2>
          <Link 
            to="#" 
            className="hidden md:flex items-center text-gold hover:text-gold-light transition-colors"
          >
            View All
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {latestUpdates.map(update => (
            <div key={update.id} className="card">
              <div className="flex items-center mb-3">
                {getIcon(update.type)}
                <span className="text-sm text-gold ml-2 font-medium">
                  {getTypeLabel(update.type)}
                </span>
                <span className="text-xs text-cream-dark ml-auto">
                  {update.date}
                </span>
              </div>
              
              <h3 className="text-lg font-serif font-semibold text-cream hover:text-gold transition-colors duration-300">
                <Link to="#">{update.title}</Link>
              </h3>
              
              <p className="text-cream-dark mt-2 text-sm">{update.excerpt}</p>
              
              <Link 
                to="#" 
                className="mt-4 inline-block text-gold hover:text-gold-light font-medium transition-colors text-sm"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-10 flex justify-center md:hidden">
          <Link to="#" className="button-outline">
            View All Updates
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UpdatesSection;
