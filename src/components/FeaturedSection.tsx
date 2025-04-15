
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CafeCard, { CafeType } from './CafeCard';

const featuredCafes: CafeType[] = [
  {
    id: 1,
    name: "Roasted Rituals",
    location: "Connaught Place, Delhi",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3",
    description: "A cozy café with vintage décor, specialty coffees, and a quiet reading corner for those looking to escape the city bustle.",
    tags: ["Specialty Coffee", "Quiet Space", "Vegan Options"]
  },
  {
    id: 2,
    name: "Brewsome",
    location: "Cyber Hub, Gurgaon",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3",
    description: "Modern industrial space offering craft coffees and artisanal pastries, perfect for remote work with their high-speed WiFi.",
    tags: ["Work-Friendly", "Craft Coffee", "Pet Friendly"]
  },
  {
    id: 3,
    name: "The Caffeine Collective",
    location: "Hauz Khas Village, Delhi",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3",
    description: "A bohemian oasis featuring global coffee varieties and a rooftop garden with panoramic views of the Hauz Khas lake.",
    tags: ["Rooftop", "Global Coffees", "Live Music"]
  }
];

const FeaturedSection = () => {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-cream">
            Featured <span className="text-gold">Cafés</span>
          </h2>
          <Link 
            to="/cafes" 
            className="hidden md:flex items-center text-gold hover:text-gold-light transition-colors"
          >
            View All
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCafes.map(cafe => (
            <CafeCard key={cafe.id} cafe={cafe} />
          ))}
        </div>
        
        <div className="mt-10 flex justify-center md:hidden">
          <Link to="/cafes" className="button-outline">
            View All Cafés
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
