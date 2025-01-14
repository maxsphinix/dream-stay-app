import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Bed, Bath, Home, Heart } from 'lucide-react';

export function Favorites() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Your Favorites
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Keep track of your favorite properties and easily access them later.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80",
            title: "Luxury Penthouse",
            location: "Manhattan, NY",
            price: "$899/night",
            bedrooms: 3,
            bathrooms: 2.5,
            sqft: 2000
          },
          {
            image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80",
            title: "Beachfront Villa",
            location: "Malibu, CA",
            price: "$1,299/night",
            bedrooms: 4,
            bathrooms: 3,
            sqft: 3200
          }
        ].map((property, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow relative"
          >
            <div className="absolute top-4 right-4 z-10">
              <button className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-md">
                <Heart className="w-5 h-5 text-red-500 fill-current" />
              </button>
            </div>
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {property.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                {property.location}
              </p>
              <div className="flex items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-300">
                <span className="flex items-center">
                  <Bed className="w-4 h-4 mr-1" />
                  {property.bedrooms} beds
                </span>
                <span className="flex items-center">
                  <Bath className="w-4 h-4 mr-1" />
                  {property.bathrooms} baths
                </span>
                <span className="flex items-center">
                  <Home className="w-4 h-4 mr-1" />
                  {property.sqft} sqft
                </span>
              </div>
              <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-lg">
                {property.price}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {false && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <Heart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            No favorites yet
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Start adding properties to your favorites to see them here
          </p>
        </motion.div>
      )}
    </div>
  );
}