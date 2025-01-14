import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

export function Bookings() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Your Bookings
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Manage your upcoming and past stays
        </p>
      </motion.div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <Calendar className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mb-4" />
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          No Bookings Yet
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Your booking history will appear here
        </p>
      </div>
    </div>
  );
}