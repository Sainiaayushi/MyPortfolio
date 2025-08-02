import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const experienceData = [
    {
      title: 'Full Stack Developer',
      company: 'Survey of India – Marine Geodesy Department',
      location: 'Dehradun, Uttarakhand',
      duration: 'June 2025 – Present',
      description:
        'Built web/mobile platforms for real-time tide data across 70+ ports in India and abroad.',
      responsibilities: [
        'Developed a responsive tide prediction site using React.js & Tailwind CSS',
        'Built mobile app in Flutter for cross-platform access',
        'Created and integrated RESTful APIs with Node.js/Express',
        'Deployed web/mobile apps with high uptime',
        'Resolved critical bugs across frontend/backend systems',
        'Deprecation of legacy system following a critical issue discovery',
      ],
      technologies: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'Flutter', 'React Native'],
      achievements: [
        'Launched real-time tide data platform for 70+ ports',
        'Digitized tide data operations and marine analytics',
      ],
    },
    {
      title: 'Web Development Intern',
      company: 'CPIT Institute of Education',
      location: 'Roorkee, Uttarakhand',
      duration: 'June 2023 – August 2023',
      type: 'Internship',
      description:
        'Worked on frontend/backend tasks .',
      responsibilities: [
        'Built dynamic pages with HTML, CSS, JS',
        'Designed UI for Websites',
        'Assisted backend development with senior devs',
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'MySQL'],
      achievements: ['Improved UI responsiveness by 35%'],
    },
  ];

  return (
    <section id="experience" className="py-14 bg-gray-900/60">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-base text-gray-300 max-w-xl mx-auto">
            A snapshot of my professional roles and internships
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-800/60 p-6 rounded-xl border border-gray-700 hover:border-pink-500/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full flex items-center justify-center">
                  <Briefcase size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{exp.title}</h3>
                  <p className="text-sm text-pink-400">{exp.company}</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-gray-400 text-sm mb-3">
                <div className="flex items-center">
                  <MapPin size={14} className="mr-1" />
                  {exp.location}
                </div>
                <div className="flex items-center">
                  <Calendar size={14} className="mr-1" />
                  {exp.duration}
                </div>
                {exp.type && (
                  <span className="px-2 py-0.5 bg-pink-600/20 text-pink-400 rounded-full text-xs">
                    {exp.type}
                  </span>
                )}
              </div>

              <p className="text-sm text-gray-300 mb-4">{exp.description}</p>

              <div className="mb-3">
                <h4 className="text-sm font-semibold text-white mb-1">Responsibilities</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-3">
                <h4 className="text-sm font-semibold text-white mb-1">Technologies</h4>
                <div className="flex flex-wrap gap-1">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="px-2 py-0.5 bg-gray-700 text-gray-300 text-xs rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-white mb-1">Achievements</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
                  {exp.achievements.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
