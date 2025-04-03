'use client'

import { motion } from 'framer-motion';

type Skill = {
  name: string;
  level: 'Entry' | 'Intermediate' | 'Advanced';
  icon: string;
  color: string;
};

export function Skills() {
  const skills: Skill[] = [
    { 
      name: 'Python', 
      level: 'Advanced', 
      icon: '🐍', 
      color: 'from-green-400 to-cyan-500'
    },
    { 
      name: 'C/C++', 
      level: 'Intermediate', 
      icon: '⚙️', 
      color: 'from-blue-500 to-indigo-600'
    },
    { 
      name: 'SQL', 
      level: 'Entry', 
      icon: '🗄️', 
      color: 'from-orange-400 to-amber-500'
    },
    { 
      name: 'Office/Excel', 
      level: 'Intermediate', 
      icon: '📊', 
      color: 'from-green-500 to-emerald-600' 
    },
    { 
      name: 'Power BI', 
      level: 'Intermediate', 
      icon: '📈', 
      color: 'from-yellow-400 to-amber-500'
    },
    { 
      name: 'CAD/Technical Drawing', 
      level: 'Entry', 
      icon: '✏️', 
      color: 'from-red-400 to-rose-500'
    },
    { 
      name: 'Blockchain/Smart Contracts', 
      level: 'Intermediate', 
      icon: '🔗', 
      color: 'from-purple-500 to-violet-600'
    },
  ];

  const getLevelWidth = (level: Skill['level']) => {
    switch (level) {
      case 'Entry': return 'w-1/3';
      case 'Intermediate': return 'w-2/3';
      case 'Advanced': return 'w-full';
      default: return 'w-1/2';
    }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-3">{skill.icon}</span>
                <h3 className="text-xl font-semibold text-gray-800">{skill.name}</h3>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <motion.div 
                  className={`h-2 rounded-full bg-gradient-to-r ${skill.color} ${getLevelWidth(skill.level)}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                />
              </div>
              <div className="mt-2 text-sm text-gray-600">
                {skill.level} level
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 p-6 bg-white rounded-xl shadow-md text-center"
        >
          <p className="text-lg text-gray-700 italic">
            &quot;I&apos;m constantly expanding my skill set and exploring new technologies to solve complex problems.&quot;
          </p>
        </motion.div>
      </div>
    </section>
  );
} 