'use client';

import { motion } from 'framer-motion';

interface ProductivityFeature {
  title: string;
  description: string;
  icon: string;
  gradient: string;
}

const features: ProductivityFeature[] = [
  {
    title: 'Move with Joy',
    description: 'Push goals forward with focus and delight',
    icon: '✨',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Mental Peace',
    description: 'Release all thoughts safely to your second brain',
    icon: '🧘',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'More Your Way',
    description: 'Let your habits do the heavy lifting',
    icon: '🎯',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Never Alone',
    description: 'Reflect and plan with guidance, not empty pages',
    icon: '🤝',
    gradient: 'from-orange-500 to-red-500'
  }
];

export default function ProductivitySection() {
  return (
    <section className="py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white"></div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8"
          >
            <span className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 bg-clip-text text-transparent">
              How hard are you working
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
              on your productivity tools?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Focus on your goals, not on which of a thousand todos comes first.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-6xl mx-auto">
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
              <div className="relative h-full bg-white/60 backdrop-blur-xl rounded-3xl p-8 sm:p-10 border border-gray-200/50 shadow-lg shadow-gray-200/50 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-gray-300/50 group-hover:border-gray-300/50">
                {/* Gradient border overlay on hover */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                <div className="relative">
                  {/* Icon */}
                  <div className="mb-6 sm:mb-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-lg transform transition-transform duration-300 group-hover:scale-110`}>
                      <span className="text-3xl sm:text-4xl">{feature.icon}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 transition-colors duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom accent */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 sm:mt-20 max-w-xs mx-auto h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full"
        />
      </div>
    </section>
  );
}
