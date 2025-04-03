'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';

type Tag = {
  id: string;
  name: string;
  color: string;
};

type EducationItem = {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
  description: string;
  details?: string[];
  category: 'degree' | 'course' | 'program';
  tags: string[];
};

export function Education() {
  const [filter, setFilter] = useState<string>('all');
  const [tagFilter, setTagFilter] = useState<string>('');
  
  // Define education categories with proper ordering
  const categories = [
    { id: 'degree', name: 'Degrees', icon: '🎓' },
    { id: 'program', name: 'Programs', icon: '🌍' },
    { id: 'course', name: 'Courses', icon: '📚' },
  ];
  
  // Define tags with colors
  const tags: Tag[] = [
    { id: 'engineering', name: 'Engineering', color: 'bg-blue-100 text-blue-800' },
    { id: 'management', name: 'Management', color: 'bg-purple-100 text-purple-800' },
    { id: 'analytics', name: 'Analytics', color: 'bg-green-100 text-green-800' },
    { id: 'business', name: 'Business', color: 'bg-amber-100 text-amber-800' },
    { id: 'blockchain', name: 'Blockchain', color: 'bg-indigo-100 text-indigo-800' },
    { id: 'technology', name: 'Technology', color: 'bg-cyan-100 text-cyan-800' },
    { id: 'sixsigma', name: 'Six Sigma', color: 'bg-yellow-100 text-yellow-800' },
    { id: 'international', name: 'International', color: 'bg-rose-100 text-rose-800' },
    { id: 'optimization', name: 'Optimization', color: 'bg-orange-100 text-orange-800' },
    { id: 'finance', name: 'Finance', color: 'bg-red-100 text-red-800' },
  ];
  
  const education: EducationItem[] = [
    {
      id: 'master',
      degree: "Master's in Management Engineering",
      institution: "Università degli studi di Udine",
      period: "September 2022 - March 2025",
      location: "Udine, Italy",
      description: "Specialization in Digital Business and Analytics",
      category: 'degree',
      tags: ['management', 'engineering', 'analytics', 'business', 'technology', 'optimization', 'finance'],
      details: [
        "Thesis on Development of local search algorithms for a project scheduling problem with complex resource constraints.",
        "Degree: 108"
      ]
    },
    {
      id: 'bachelor',
      degree: "Bachelor's in Management Engineering",
      institution: "Università degli studi di Udine",
      period: "September 2018 - July 2022",
      location: "Udine, Italy",
      description: "Specialization in Information Technology",
      category: 'degree',
      tags: ['management', 'engineering', 'technology', 'blockchain'],
      details: [
        "Thesis: Hedging Risk in Blockchain: MetalSwap protocol analysis",
        "Degree: 96"
      ]
    },
    {
      id: 'erasmus',
      degree: "Erasmus Exchange Program",
      institution: "AGH University of Krakow",
      period: "September 2023 - March 2024",
      location: "Krakow, Poland",
      description: "6 months erasmus program, courses held in English",
      category: 'program',
      tags: ['international', 'business', 'analytics', 'finance'],
      details: [
        "Econometrics, Financial Risk Management, Business Process Reengineering, Process Mining, International Marketing"
      ]
    },
    {
      id: 'sixSigma',
      degree: "Lean Six Sigma Summer Course",
      institution: "University of Rhode Island",
      period: "July 2023 - August 2023",
      location: "Rhode Island, USA",
      description: "Intensive course about Lean Six Sigma methodologies",
      category: 'course',
      tags: ['sixsigma', 'management', 'international']
    }
  ];

  // Filter education items based on selected filters
  const filteredEducation = education.filter(item => {
    if (filter !== 'all' && item.category !== filter) return false;
    if (tagFilter && !item.tags.includes(tagFilter)) return false;
    return true;
  });

  // Function to get timeline position classes
  const getTimelinePosition = (index: number) => {
    return index % 2 === 0 
      ? 'md:ml-[calc(50%-0.5rem)] lg:ml-0' 
      : 'md:mr-[calc(50%-0.5rem)] md:ml-auto lg:ml-0 lg:mr-0';
  };

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Education</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My academic journey spans multiple opportunities and programs, 
            providing me with a diverse set of skills in management engineering, 
            analytics, and technology.
          </p>
        </motion.div>

        {/* Filters section */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-6">
            {/* Category filters */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-lg transition-all duration-200 text-sm font-medium ${
                  filter === 'all' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All
              </button>
              
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`px-4 py-2 rounded-lg transition-all duration-200 text-sm font-medium flex items-center gap-2 ${
                    filter === category.id 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span>{category.icon}</span>
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
            
            {/* Tag filters */}
            <div className="flex flex-wrap gap-2">
              {tagFilter && (
                <button
                  onClick={() => setTagFilter('')}
                  className="px-3 py-1 bg-gray-200 text-gray-700 text-xs rounded-full flex items-center"
                >
                  Clear Tags
                  <span className="ml-1 text-gray-500">×</span>
                </button>
              )}
              
              {tags.map(tag => (
                <button
                  key={tag.id}
                  onClick={() => setTagFilter(tag.id === tagFilter ? '' : tag.id)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
                    tag.id === tagFilter 
                      ? 'ring-2 ring-offset-1 ring-blue-500 ' + tag.color
                      : tag.color + ' opacity-70 hover:opacity-100'
                  }`}
                >
                  {tag.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline and education items */}
        <div className="relative lg:flex">
          {/* Timeline */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 -translate-x-1/2 lg:hidden"></div>
          
          {/* Vertical category headers for larger screens */}
          <div className="hidden lg:block w-52 flex-shrink-0 pt-10">
            <div className="sticky top-24 space-y-10">
              {categories.map(category => (
                <div 
                  key={category.id}
                  className={`flex items-center cursor-pointer group ${
                    filter === category.id || filter === 'all' ? 'opacity-100' : 'opacity-50'
                  }`}
                  onClick={() => setFilter(category.id === filter ? 'all' : category.id)}
                >
                  <div className={`w-10 h-10 flex items-center justify-center rounded-full ${
                    filter === category.id ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600 group-hover:bg-blue-200'
                  }`}>
                    <span className="text-xl">{category.icon}</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800">{category.name}</h3>
                    <p className="text-sm text-gray-500">
                      {education.filter(e => e.category === category.id).length} items
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Education items */}
          <div className="w-full lg:ml-10">
            {filteredEducation.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-xl shadow-sm">
                <p className="text-gray-500">No education items match your filters.</p>
                <button 
                  onClick={() => {setFilter('all'); setTagFilter('');}}
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="space-y-8 md:space-y-12">
                {filteredEducation.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`relative md:w-[calc(50%-1rem)] lg:w-full ${getTimelinePosition(index)}`}
                  >
                    {/* Category label on mobile */}
                    <div className="lg:hidden absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 z-10 md:left-auto md:right-0 md:translate-x-0">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        item.category === 'degree' ? 'bg-blue-600' : 
                        item.category === 'program' ? 'bg-purple-600' : 'bg-amber-600'
                      } text-white`}>
                        {item.category === 'degree' ? '🎓' : 
                         item.category === 'program' ? '🌍' : '📚'}
                      </div>
                    </div>
                    
                    {/* Timeline dot on medium screens */}
                    <div className="hidden md:block lg:hidden absolute top-4 left-0 transform -translate-x-[calc(50vw-0.5rem)] z-10">
                      <div className="w-4 h-4 rounded-full bg-blue-600"></div>
                    </div>
                    
                    {/* Education card */}
                    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                      {/* Timeline line connector */}
                      <div className="hidden md:block lg:hidden absolute top-4 left-0 w-[calc(50vw-1rem-2rem)] h-0.5 bg-blue-200 -translate-x-full"></div>
                      
                      {/* Header with period */}
                      <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
                        <div className="flex justify-between items-center">
                          <h3 className="text-xl font-bold text-gray-800">{item.degree}</h3>
                          <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                            {item.period}
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        {/* Institution and location */}
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4 text-gray-600">
                          <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                            <span>{item.institution}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span>{item.location}</span>
                          </div>
                        </div>
                        
                        {/* Description */}
                        <p className="text-gray-700 mb-4">{item.description}</p>
                        
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {item.tags.map(tagId => {
                            const tag = tags.find(t => t.id === tagId);
                            return tag ? (
                              <span 
                                key={tag.id} 
                                className={`px-2 py-1 rounded-full text-xs ${tag.color} cursor-pointer`}
                                onClick={() => setTagFilter(tag.id === tagFilter ? '' : tag.id)}
                              >
                                {tag.name}
                              </span>
                            ) : null;
                          })}
                        </div>
                        
                        {/* Details */}
                        {item.details && item.details.length > 0 && (
                          <div className="mt-4 pt-4 border-t border-gray-100">
                            <h4 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-2">Details</h4>
                            <ul className="space-y-2">
                              {item.details.map((detail, idx) => (
                                <li key={idx} className="flex items-start">
                                  <span className="text-blue-500 mr-2">•</span>
                                  <span className="text-gray-600 text-sm">{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
} 