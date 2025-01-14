import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search as SearchIcon, MapPin, Bed, Bath, Home, Filter } from 'lucide-react';

export function Search() {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [filters, setFilters] = useState({
    bedrooms: '',
    bathrooms: '',
    propertyType: ''
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Section */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full md:w-64 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md h-fit"
        >
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Filters</h2>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Price Range
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="number"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                  className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                  placeholder="Min"
                />
                <span className="text-gray-500">-</span>
                <input
                  type="number"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                  className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                  placeholder="Max"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Bedrooms
              </label>
              <select
                value={filters.bedrooms}
                onChange={(e) => setFilters({ ...filters, bedrooms: e.target.value })}
                className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
              >
                <option value="">Any</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Bathrooms
              </label>
              <select
                value={filters.bathrooms}
                onChange={(e) => setFilters({ ...filters, bathrooms: e.target.value })}
                className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
              >
                <option value="">Any</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Property Type
              </label>
              <select
                value={filters.propertyType}
                onChange={(e) => setFilters({ ...filters, propertyType: e.target.value })}
                className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
              >
                <option value="">Any</option>
                <option value="house">House</option>
                <option value="apartment">Apartment</option>
                <option value="condo">Condo</option>
                <option value="villa">Villa</option>
              </select>
            </div>

            <button className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2">
              <Filter className="w-4 h-4" />
              Apply Filters
            </button>
          </div>
        </motion.div>

        {/* Results Section */}
        <div className="flex-1">
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search by location, property name, or keywords..."
              className="w-full px-6 py-4 pr-12 rounded-lg border dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <SearchIcon className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80",
                title: "Sunset Valley Villa",
                location: "Beverly Hills, CA",
                price: "$599/night",
                bedrooms: 4,
                bathrooms: 3,
                sqft: 2800
              },
              {
                image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80",
                title: "Modern Downtown Loft",
                location: "Seattle, WA",
                price: "$299/night",
                bedrooms: 2,
                bathrooms: 2,
                sqft: 1200
              },
              {
                image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80",
                title: "Oceanfront Paradise",
                location: "Miami Beach, FL",
                price: "$799/night",
                bedrooms: 5,
                bathrooms: 4,
                sqft: 3500
              },
              {
                image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&q=80",
                title: "Mountain View Retreat",
                location: "Aspen, CO",
                price: "$899/night",
                bedrooms: 6,
                bathrooms: 5,
                sqft: 4200
              }
            ].map((property, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
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
        </div>
      </div>
    </div>
  );
}