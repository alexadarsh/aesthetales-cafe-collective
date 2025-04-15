
import { Calendar, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export type EventType = {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  image: string;
  description: string;
  isFeatured?: boolean;
};

interface EventCardProps {
  event: EventType;
}

const EventCard = ({ event }: EventCardProps) => {
  const { id, title, date, time, location, image, description, isFeatured } = event;

  return (
    <div className={`card group ${isFeatured ? 'border-gold/30' : ''}`}>
      {isFeatured && (
        <div className="absolute top-6 right-6 bg-gold text-espresso text-xs font-medium py-1 px-3 rounded-full z-10">
          Featured
        </div>
      )}
      
      <div className="relative overflow-hidden rounded-md mb-4 aspect-video">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <h3 className="text-xl font-serif font-semibold text-cream group-hover:text-gold transition-colors duration-300">
        {title}
      </h3>
      
      <div className="flex flex-col space-y-2 mt-3">
        <div className="flex items-center text-cream-dark text-sm">
          <Calendar size={16} className="mr-2 text-gold" />
          {date}
        </div>
        
        <div className="flex items-center text-cream-dark text-sm">
          <Clock size={16} className="mr-2 text-gold" />
          {time}
        </div>
        
        <div className="flex items-center text-cream-dark text-sm">
          <MapPin size={16} className="mr-2 text-gold" />
          {location}
        </div>
      </div>
      
      <p className="text-cream-dark mt-3 line-clamp-3 text-sm">{description}</p>
      
      <div className="mt-5 flex justify-between items-center">
        <Link 
          to={`/events/${id}`} 
          className="inline-block text-gold hover:text-gold-light font-medium transition-colors"
        >
          View Details
        </Link>
        
        <button className="button-outline py-2 px-4 text-sm">
          Register
        </button>
      </div>
    </div>
  );
};

export default EventCard;
