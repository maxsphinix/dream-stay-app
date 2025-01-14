import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';

export function Help() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Help Center
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Find answers to your questions
        </p>
      </motion.div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <HelpCircle className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mb-4" />
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          How can we help?
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Browse our help articles or contact support
        </p>
      </div>
    </div>
  );
}