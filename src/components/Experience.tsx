'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';

type Category = {
  id: string;
  name: string;
  icon: string;
  color: string;
};

type Experience = {
  id: string;
  position: string;
  company: string;
  companyLogo?: string;
  location: string;
  period: string;
  startDate: string; // For sorting/timeline - YYYY-MM format
  endDate: string; // For sorting/timeline - YYYY-MM format or "present"
  description: string[];
  skills: string[];
  category: string;
  highlight?: boolean;
};

export function Experience() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  
  const categories: Category[] = [
    { id: 'pmo', name: 'PMO', icon: '🏢', color: 'from-indigo-500 to-purple-600' },
    { id: 'internship', name: 'Internship', icon: '🚀', color: 'from-blue-500 to-cyan-600' },
    { id: 'data', name: 'Data', icon: '📊', color: 'from-green-500 to-emerald-600' }
  ];
  
  const experiences: Experience[] = [
    {
      id: 'deloitte',
      position: "Analyst",
      company: "Deloitte Italy S.p.A S.B.",
      location: "Milan, Italy",
      period: "June 1, 2025 - ongoing",
      startDate: "2025-06",
      endDate: "present",
      description: [
        "Data analysis (financial sector)",
        "Trading algorithm development",
        "AI/ML for banking process optimization"
      ],
      skills: ["Data Analysis", "Python", "AI", "Machine Learning", "Finance"],
      category: 'data',
      highlight: true
    },
    {
      id: 'danieli',
      position: "PMO Junior",
      company: "Danieli & C. Officine Meccaniche SpA",
      location: "Buttrio, Italy",
      period: "October 1, 2024 - December 10, 2024",
      startDate: "2024-10",
      endDate: "2024-12",
      description: [
        "Organized trainings for non-conformity management through proprietary software",
        "Risk management process rethinking based on ISO 31000 (started)"
      ],
      skills: ["Risk Management", "Project Management", "ISO 31000", "Training", "Documentation"],
      category: 'pmo',
    },
    {
      id: 'boato',
      position: "Internship",
      company: "Boato International SpA",
      location: "Monfalcone, Italy",
      period: "June 5, 2022 - December 5, 2022",
      startDate: "2022-06",
      endDate: "2022-12",
      description: [
        "Project analysis",
        "Materials analysis",
        "Purchase price analysis",
        "Management data entry",
        "Excel automation tools"
      ],
      skills: ["Project Management", "Excel", "Power Query", "IBM Cognos", "AS400", "Vision", "Data Analysis"],
      category: 'internship'
    }
  ];

  // Filter experiences based on selected category
  const filteredExperiences = activeFilter === 'all' 
    ? experiences 
    : experiences.filter(exp => exp.category === activeFilter);
  
  // Sort experiences by start date (newest first)
  const sortedExperiences = [...filteredExperiences].sort(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  );

  // Timeline generation - extract all years from experiences for the timeline
  const allDates = experiences.flatMap(exp => [exp.startDate, exp.endDate === 'present' ? new Date().getFullYear() + '-' + (new Date().getMonth() + 1) : exp.endDate]);
  const years = [...new Set(allDates.map(date => date.split('-')[0]))].sort((a, b) => b.localeCompare(a));

  // Toggle expanded state for an experience
  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My professional journey includes corporate roles, internships, and academic projects
            that have helped me develop a diverse skill set in management and engineering.
          </p>
          
          {/* GitHub Link */}
          <motion.a 
            href="https://github.com/aleve99" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-white text-gray-800 border border-gray-200 rounded-full shadow-sm hover:shadow-md transition-all hover:bg-gray-50 hover:border-indigo-200"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
            <span className="font-medium">Check out my GitHub</span>
          </motion.a>
        </motion.div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-full transition-all duration-200 ${
              activeFilter === 'all'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            All Experiences
          </button>
          
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-4 py-2 rounded-full transition-all duration-200 flex items-center gap-2 ${
                activeFilter === category.id
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Timeline years */}
        <div className="hidden md:flex justify-between mb-8 px-16 relative">
          <div className="absolute left-0 right-0 h-0.5 bg-gray-200 top-4"></div>
          {years.map(year => (
            <div key={year} className="relative">
              <div className="h-2 w-2 rounded-full bg-indigo-600 mb-2 mx-auto"></div>
              <div className="text-sm font-medium text-gray-700">{year}</div>
            </div>
          ))}
        </div>
        
        {/* Experience Cards */}
        <div className="relative space-y-12">
          {/* Vertical timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block"></div>
          
          {sortedExperiences.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-xl shadow-sm border border-gray-100">
              <p className="text-gray-500">No experiences found in this category.</p>
              <button 
                onClick={() => setActiveFilter('all')}
                className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm"
              >
                View All Experiences
              </button>
            </div>
          ) : (
            sortedExperiences.map((exp, index) => {
              const category = categories.find(c => c.id === exp.category);
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative md:ml-16"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-16 top-6 hidden md:flex flex-col items-center">
                    <div className={`h-8 w-8 rounded-full bg-gradient-to-br ${category?.color || 'from-indigo-500 to-purple-600'} shadow-md flex items-center justify-center text-white`}>
                      {category?.icon}
                    </div>
                    <div className="mt-2 text-xs font-medium text-gray-500 rotate-90 origin-top-left">
                      {exp.startDate.replace('-', '/')}
                    </div>
                  </div>

                  <div 
                    className={`group bg-white rounded-xl shadow-md hover:shadow-lg transition-all overflow-hidden border-l-4 ${
                      exp.highlight ? 'border-indigo-600' : 'border-gray-200'
                    }`}
                  >
                    <div className="cursor-pointer" onClick={() => toggleExpand(exp.id)}>
                      <div className="p-6 md:p-8">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                          <div>
                            <div className="flex items-center gap-3">
                              <h3 className="text-xl font-bold text-gray-800">{exp.position}</h3>
                              {exp.highlight && (
                                <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">
                                  Latest
                                </span>
                              )}
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mt-2">
                              <div className="flex items-center gap-2 text-gray-600">
                                <svg className="w-4 h-4 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                                <span>{exp.company}</span>
                              </div>
                              <div className="flex items-center gap-2 text-gray-600">
                                <svg className="w-4 h-4 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>{exp.location}</span>
                              </div>
                            </div>
                          </div>
                          <div className="mt-3 md:mt-0">
                            <div className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full inline-flex items-center gap-1">
                              <svg className="w-4 h-4 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              <span>{exp.period}</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Preview of description */}
                        {expandedId !== exp.id && (
                          <>
                            <p className="text-gray-600 line-clamp-2 mb-3">{exp.description[0]}</p>
                            <div className="flex justify-between items-center">
                              <div className="flex -space-x-2">
                                {exp.skills.slice(0, 3).map((skill, i) => (
                                  <div 
                                    key={i} 
                                    className="w-8 h-8 rounded-full bg-indigo-100 border-2 border-white flex items-center justify-center text-xs text-indigo-800 font-medium"
                                    title={skill}
                                  >
                                    {skill.substring(0, 1)}
                                  </div>
                                ))}
                                {exp.skills.length > 3 && (
                                  <div className="w-8 h-8 rounded-full bg-indigo-50 border-2 border-white flex items-center justify-center text-xs text-indigo-800 font-medium">
                                    +{exp.skills.length - 3}
                                  </div>
                                )}
                              </div>
                              <div className="text-indigo-600 font-medium text-sm flex items-center gap-1">
                                View Details
                                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </div>
                            </div>
                          </>
                        )}
                        
                        {/* Expanded view */}
                        {expandedId === exp.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="mb-6">
                              <h4 className="text-lg font-semibold text-gray-800 mb-3">Responsibilities</h4>
                              <ul className="space-y-2">
                                {exp.description.map((item, i) => (
                                  <li key={i} className="flex items-start text-gray-600">
                                    <span className="h-5 w-5 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                                      ✓
                                    </span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            <div>
                              <h4 className="text-lg font-semibold text-gray-800 mb-3">Skills Applied</h4>
                              <div className="flex flex-wrap gap-2">
                                {exp.skills.map((skill, i) => (
                                  <span
                                    key={i}
                                    className="bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 text-sm px-3 py-1 rounded-full"
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div className="mt-6 text-center">
                              <button 
                                onClick={() => setExpandedId(null)}
                                className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium text-sm"
                              >
                                <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                </svg>
                                Show Less
                              </button>
                            </div>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
} 