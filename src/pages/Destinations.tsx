import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Star } from 'lucide-react';

export function Destinations() {
  const destinations = [
    {
      city: "Paris",
      country: "France",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80",
      rating: 4.9,
      properties: 1234
    },
    {
      city: "Tokyo",
      country: "Japan",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80",
      rating: 4.8,
      properties: 2156
    },
    {
      city: "New York",
      country: "USA",
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80",
      rating: 4.7,
      properties: 3789
    },
    {
      city: "Barcelona",
      country: "Spain",
      image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&q=80",
      rating: 4.8,
      properties: 1567
    },
    {
      city: "Dubai",
      country: "UAE",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80",
      rating: 4.9,
      properties: 892
    },
    {
      city: "Sydney",
      country: "Australia",
      image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&q=80",
      rating: 4.7,
      properties: 1345
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Popular Destinations
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Explore our most popular destinations around the world
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {destinations.map((destination, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="relative h-64">
              <img
                src={destination.image}
                alt={`${destination.city}, ${destination.country}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-2xl font-bold text-white mb-1">
                {destination.city}
              </h3>
              <div className="flex items-center justify-between">
                <p className="text-white/90 flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {destination.country}
                </p>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 mr-1 fill-current" />
                  <span className="text-white">{destination.rating}</span>
                </div>
              </div>
              <p className="text-white/80 text-sm mt-2">
                {destination.properties.toLocaleString()} properties
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}