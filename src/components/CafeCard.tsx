
import { Star, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export type CafeType = {
  id: number;
  name: string;
  location: string;
  rating: number;
  image: string;
  description: string;
  tags: string[];
};

interface CafeCardProps {
  cafe: CafeType;
}

const CafeCard = ({ cafe }: CafeCardProps) => {
  const { id, name, location, rating, image, description, tags } = cafe;

  return (
    <div className="card group">
      <div className="relative overflow-hidden rounded-md mb-4 aspect-[4/3]">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3 bg-espresso-dark/80 text-gold font-medium py-1 px-2 rounded-md text-sm flex items-center">
          <Star size={16} className="mr-1 fill-gold" />
          {rating}
        </div>
      </div>
      
      <h3 className="text-xl font-serif font-semibold text-cream group-hover:text-gold transition-colors duration-300">
        {name}
      </h3>
      
      <div className="flex items-center text-cream-dark mt-2 text-sm">
        <MapPin size={16} className="mr-1 text-gold" />
        {location}
      </div>
      
      <p className="text-cream-dark mt-3 line-clamp-2 text-sm">{description}</p>
      
      <div className="flex flex-wrap gap-2 mt-4">
        {tags.map((tag, index) => (
          <span 
            key={index} 
            className="text-xs bg-mocha px-2 py-1 rounded-full text-cream-dark"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <Link 
        to={`/cafes/${id}`} 
        className="mt-5 inline-block text-gold hover:text-gold-light font-medium transition-colors"
      >
        View Details
      </Link>
    </div>
  );
};

export default CafeCard;
