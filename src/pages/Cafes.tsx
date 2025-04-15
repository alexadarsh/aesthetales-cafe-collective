
import { useState } from 'react';
import { Search, MapPin, Filter } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CafeCard, { CafeType } from '@/components/CafeCard';

// Extended cafe data for the cafes page
const cafesData: CafeType[] = [
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
  },
  {
    id: 4,
    name: "Serenitea",
    location: "South Extension, Delhi",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1564486054184-40488ba014a7?ixlib=rb-4.0.3",
    description: "A Japanese-inspired café serving matcha creations alongside specialty coffee in a minimalist setting.",
    tags: ["Japanese", "Matcha", "Minimalist"]
  },
  {
    id: 5,
    name: "Velvet Brew",
    location: "Galleria Market, Gurgaon",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-4.0.3",
    description: "Luxurious café known for their velvety smooth coffee and chocolate pairings in an elegant atmosphere.",
    tags: ["Luxury", "Chocolate", "Date Spot"]
  },
  {
    id: 6,
    name: "The Grind House",
    location: "Noida Sector 18",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1534040385115-33dcb3acba5b?ixlib=rb-4.0.3",
    description: "Rustic coffee shop with in-house roasting, offering coffee workshops and a wide variety of brewing methods.",
    tags: ["In-house Roasting", "Workshops", "Breakfast"]
  }
];

const areas = [
  "All Locations",
  "Delhi",
  "Gurgaon",
  "Noida",
  "Connaught Place",
  "Hauz Khas",
  "Cyber Hub"
];

const tags = [
  "Specialty Coffee",
  "Work-Friendly",
  "Pet Friendly",
  "Vegan Options",
  "Rooftop",
  "Live Music",
  "In-house Roasting"
];

const Cafes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedArea, setSelectedArea] = useState("All Locations");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleTagToggle = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const filteredCafes = cafesData.filter(cafe => {
    // Search filter
    const matchesSearch = cafe.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          cafe.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Area filter
    const matchesArea = selectedArea === "All Locations" || 
                        cafe.location.includes(selectedArea);
    
    // Tags filter
    const matchesTags = selectedTags.length === 0 || 
                        selectedTags.some(tag => cafe.tags.includes(tag));
    
    return matchesSearch && matchesArea && matchesTags;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              <span className="gold-gradient">Discover Cafés</span>
            </h1>
            <p className="text-cream-dark max-w-2xl mx-auto">
              Explore our curated selection of exceptional cafés across Delhi NCR, from hidden gems to popular spots.
            </p>
          </div>
          
          <div className="mb-8 flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cream-dark" size={20} />
              <input
                type="text"
                placeholder="Search cafés by name or description..."
                className="input-field pl-10 w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="relative md:w-64">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cream-dark" size={20} />
              <select
                className="input-field appearance-none pl-10 w-full pr-10"
                value={selectedArea}
                onChange={(e) => setSelectedArea(e.target.value)}
              >
                {areas.map(area => (
                  <option key={area} value={area}>{area}</option>
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
              <h3 className="text-gold font-medium mb-3">Filter by Tags</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map(tag => (
                  <button
                    key={tag}
                    className={`px-3 py-1 rounded-full text-sm transition-all ${
                      selectedTags.includes(tag) 
                        ? 'bg-gold text-espresso' 
                        : 'bg-mocha text-cream-dark hover:bg-mocha-light'
                    }`}
                    onClick={() => handleTagToggle(tag)}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          {filteredCafes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCafes.map(cafe => (
                <CafeCard key={cafe.id} cafe={cafe} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-cream text-lg mb-2">No cafés match your search criteria</p>
              <p className="text-cream-dark">Try adjusting your filters or search term</p>
              <button 
                className="button-gold mt-4"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedArea("All Locations");
                  setSelectedTags([]);
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

export default Cafes;
