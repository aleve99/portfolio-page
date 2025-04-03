'use client'

import { motion } from 'framer-motion';

export function About() {
  const interests = [
    'Playing basketball',
    'Finance and Economics',
    'Designing Products',
    'Technology in all its forms',
    'Analyzing/Visualizing data',
    'Blockchain/DeFi',
    'AI/Prompting'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Who I Am</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I hold a Master&apos;s degree in Management Engineering with a focus on Digital Business and Analytics.
              I&apos;m particularly interested in the logistics-production sector as well as services, alongside my passion for data analysis.
            </p>
            <p className="text-gray-600 leading-relaxed">
              As a hobby, I enjoy developing small personal and professional projects. I&apos;m especially drawn to 
              Blockchain innovation and its applications across various industries. My diverse educational 
              background and technical skills allow me to approach problems from multiple perspectives.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Things I Like</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {interests.map((interest, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="flex items-center bg-gradient-to-r from-blue-50 to-indigo-50 p-3 rounded-lg"
                >
                  <span className="h-2 w-2 bg-blue-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">{interest}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 bg-gradient-to-r from-blue-500 to-indigo-600 p-8 rounded-xl text-white"
        >
          <h3 className="text-2xl font-semibold mb-4">Languages</h3>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="flex items-center">
              <div className="mr-3">
                <span className="block font-medium text-lg">Italian</span>
                <span className="text-blue-100">Native speaker</span>
              </div>
              <div className="flex-grow">
                <div className="h-2 bg-blue-400 bg-opacity-30 rounded-full">
                  <div className="h-2 bg-white rounded-full w-full"></div>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="mr-3">
                <span className="block font-medium text-lg">English</span>
                <span className="text-blue-100">B2 level</span>
              </div>
              <div className="flex-grow">
                <div className="h-2 bg-blue-400 bg-opacity-30 rounded-full">
                  <div className="h-2 bg-white rounded-full w-4/5"></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 