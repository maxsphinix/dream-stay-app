import React from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

export function Home() {
  return (
    <div className="relative">
      <div 
        className="h-[70vh] bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white max-w-2xl"
            >
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                Find Your Dream Stay
              </h1>
              <p className="text-xl mb-8">
                Discover unique places to stay around the world
              </p>
              
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for your perfect stay..."
                  className="w-full px-6 py-4 rounded-full text-gray-900 bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-indigo-600 text-white p-3 rounded-full hover:bg-indigo-700 transition-colors">
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Popular Destinations
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&q=80",
                title: "Modern Villa",
                location: "Los Angeles, CA",
                price: "$299/night"
              },
              {
                image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80",
                title: "Luxury Apartment",
                location: "New York, NY",
                price: "$199/night"
              },
              {
                image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&q=80",
                title: "Cozy Cottage",
                location: "Portland, OR",
                price: "$149/night"
              }
            ].map((property, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {property.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {property.location}
                  </p>
                  <p className="text-indigo-600 dark:text-indigo-400 font-semibold">
                    {property.price}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}