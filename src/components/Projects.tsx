'use client'

import { motion } from 'framer-motion';
import Image from 'next/image';

type Project = {
  title: string;
  description: string;
  url: string;
  image: string;
  technologies: string[];
};

export function Projects() {
  const projects: Project[] = [
    {
      title: "Carburanti FVG",
      description: "A web platform to check and compare fuel prices in the Friuli Venezia Giulia region of Italy.",
      url: "https://carburantifvg.it",
      image: "/project_icons/carburanti.png",
      technologies: ["Data Visualization", "API Integration", "SQL", "Python"]
    },
    {
      title: "Stays & Flights",
      description: "A travel platform that allows to discover multi-flight trip options.",
      url: "https://stays.flights",
      image: "/project_icons/staysflights.png",
      technologies: ["Web Development", "API Development", "UX Design", "Microservices", "SQL", "Python"]
    },
    {
      title: "AlgoPixels",
      description: "A creative project exploring NFTs and smart contracts.",
      url: "https://algopixels.site",
      image: "/project_icons/algopixels.png",
      technologies: ["Algorand", "Smart Contracts", "NFTs", "Python", "Blockchain"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Personal Projects</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
            >
              <div className="h-48 bg-gradient-to-r from-blue-400 to-indigo-500 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    width={120} 
                    height={120} 
                    className="text-white" 
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
                
                <div className="h-20">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 rounded-md hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 mt-4"
                >
                  Visit Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            These are some of the personal projects I&apos;ve worked on. Each one represents different technologies and skills 
            I&apos;ve developed through self-learning and practical application.
          </p>
        </motion.div>
      </div>
    </section>
  );
} 