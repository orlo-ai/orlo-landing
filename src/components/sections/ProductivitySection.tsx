'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  SparklesIcon,
  HeartIcon,
  FlagIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

interface ProductivityFeature {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
}

const features: ProductivityFeature[] = [
  {
    title: 'Move with Joy',
    description: 'Push goals forward with focus and delight',
    icon: SparklesIcon,
    gradient: 'from-purple-600 to-pink-700'
  },
  {
    title: 'Mental Peace',
    description: 'Release all thoughts safely to your second brain',
    icon: HeartIcon,
    gradient: 'from-blue-600 to-cyan-700'
  },
  {
    title: 'More Your Way',
    description: 'Let your habits do the heavy lifting',
    icon: FlagIcon,
    gradient: 'from-green-600 to-emerald-600'
  },
  {
    title: 'Never Alone',
    description: 'Reflect and plan with guidance',
    icon: UserGroupIcon,
    gradient: 'from-orange-600 to-red-600'
  }
];

function ProductivitySection() {
  return (
    <section className="py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white"></div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-20 lg:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-4xl lg:text-6xl font-bold leading-tight mb-6 sm:mb-8"
          >
            <span className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 bg-clip-text text-transparent">
              How hard are you working
            </span>
            <br />
            <span className="bg-gradient-to-r from-indigo-600 via-purple-800 to-indigo-600 bg-clip-text text-transparent">
              on your productivity tools?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-xl lg:text-2xl text-gray-600 max-w-3xl lg:max-w-4xl mx-auto leading-relaxed tracking-tight px-2"
          >
            With Orlo, focus on your goals, not on which of a thousand todos comes first.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 lg:gap-10 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.21, 0.47, 0.32, 0.98]
              }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full bg-white/60 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-gray-200/50 shadow-lg shadow-gray-200/50 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-gray-300/50 group-hover:border-gray-300/50">
                {/* Gradient border overlay on hover */}
                <div className={`absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                <div className="relative">
                  {/* Icon */}
                  <div className="mb-3 sm:mb-6">
                    <div className={`inline-flex items-center justify-center w-10 h-10 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl bg-gradient-to-br ${feature.gradient} shadow-lg transform transition-transform duration-300 group-hover:scale-110`}>
                      <feature.icon className="w-6 h-6 sm:w-10 sm:h-10 text-white" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-xl font-bold mb-1.5 sm:mb-3 text-gray-900 transition-colors duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-600 leading-snug sm:leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}

ProductivitySection.displayName = 'ProductivitySection';

export default React.memo(ProductivitySection);
