import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  const educationData = [
    {
      degree: 'Bachelor of Technology',
      field: 'Computer Science Engineering (Data Science)',
      institution: 'Quantum University',
      location: 'Roorkee, Uttarakhand',
      duration: '2022 - 2026',
      grade: 'Current CGPA: 7.61/10',
      description:
        'Pursuing B.Tech with a specialization in Data Science. Gained strong fundamentals in Web Development, Machine Learning, and Full Stack Development.',
      achievements: [
        'Active member of the Computer Science Society',
        'Built tide data prediction website for Survey of India',
        'Built full stack projects',
      ],
    },
  ];

  return (
    <section id="education" className="py-12 bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            <span className="bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
            My academic journey in computer science and data science
          </p>
        </div>

        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-5 rounded-xl border border-gray-700 hover:border-teal-500/50 transition-all duration-300 transform hover:scale-[1.01] hover:shadow-md hover:shadow-teal-500/10"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-6">
                <div className="flex-shrink-0 mb-4 lg:mb-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-purple-600 rounded-full flex items-center justify-center">
                    <GraduationCap size={24} className="text-white" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                      <p className="text-teal-400 text-sm">{edu.field}</p>
                    </div>
                    <div className="mt-2 lg:mt-0 text-sm text-gray-300 font-medium">
                      {edu.grade}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mb-3 text-gray-400 text-sm">
                    <div className="flex items-center mb-1 sm:mb-0">
                      <MapPin size={14} className="mr-2" />
                      <span>{edu.institution}, {edu.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-2" />
                      <span>{edu.duration}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{edu.description}</p>

                  <div>
                    <h4 className="text-base font-semibold text-white mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-300">
                          <div className="w-2 h-2 bg-teal-400 rounded-full mt-1 mr-3 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
