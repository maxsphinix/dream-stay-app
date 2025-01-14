import React from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, MapPin, Calendar, Settings, Bell, Shield } from 'lucide-react';

export function Profile() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
        >
          {/* Profile Header */}
          <div className="relative h-32 bg-gradient-to-r from-indigo-500 to-purple-600">
            <div className="absolute -bottom-12 left-8">
              <div className="w-24 h-24 rounded-full bg-white dark:bg-gray-700 p-1">
                <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center">
                  <User className="w-12 h-12 text-gray-600 dark:text-gray-300" />
                </div>
              </div>
            </div>
          </div>

          {/* Profile Info */}
          <div className="pt-16 px-8 pb-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                  John Doe
                </h1>
                <p className="text-gray-600 dark:text-gray-300">
                  Member since 2024
                </p>
              </div>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
                Edit Profile
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="space-y-4"
              >
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Contact Information
                </h2>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Mail className="w-5 h-5 mr-3" />
                  <span>john.doe@example.com</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Phone className="w-5 h-5 mr-3" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <MapPin className="w-5 h-5 mr-3" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Calendar className="w-5 h-5 mr-3" />
                  <span>Joined January 2024</span>
                </div>
              </motion.div>

              {/* Account Settings */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-4"
              >
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Account Settings
                </h2>
                <button className="w-full flex items-center justify-between p-3 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <div className="flex items-center">
                    <Settings className="w-5 h-5 mr-3 text-gray-600 dark:text-gray-300" />
                    <span className="text-gray-600 dark:text-gray-300">Account Preferences</span>
                  </div>
                </button>
                <button className="w-full flex items-center justify-between p-3 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <div className="flex items-center">
                    <Bell className="w-5 h-5 mr-3 text-gray-600 dark:text-gray-300" />
                    <span className="text-gray-600 dark:text-gray-300">Notifications</span>
                  </div>
                </button>
                <button className="w-full flex items-center justify-between p-3 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <div className="flex items-center">
                    <Shield className="w-5 h-5 mr-3 text-gray-600 dark:text-gray-300" />
                    <span className="text-gray-600 dark:text-gray-300">Privacy & Security</span>
                  </div>
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}