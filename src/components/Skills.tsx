import React from 'react';
import { Code, Database, Brain, Globe, Smartphone, Server } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    
    {
      title: 'Web Development',
      icon: <Globe className="text-teal-400" size={20} />,
      skills: ['React', 'Node.js', 'HTML/CSS', 'Next.js', 'Express.js','WordPress', 'Tailwind CSS']
    },
    {
      title: 'Data Science & ML',
      icon: <Brain className="text-pink-400" size={20} />,
      skills: ['Machine Learning', 'Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', ]
    },
   
    {
      title: 'Tools & Technologies',
      icon: <Server className="text-blue-400" size={20} />,
      skills: ['Github', 'Postman','Vs Code', 'Android Studio']
    }
  ];

  return (
    <section id="skills" className="py-12 bg-gray-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-teal-400 to-pink-400 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            A categorized list of technologies and tools I’ve worked with
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-900/50 p-5 rounded-xl border border-gray-700 hover:border-teal-500/50 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-lg font-semibold text-white ml-3">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-gray-700 text-gray-300 text-sm px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gray-900/40 p-6 rounded-xl border border-gray-700 text-center">
          <h3 className="text-xl font-semibold text-white mb-3">Always Learning</h3>
          <p className="text-sm text-gray-300 max-w-2xl mx-auto">
            I constantly explore and adopt new tools, languages, and frameworks to stay current
            in tech. Currently diving deeper into Full Stack Development ,cloud services, system design, and AI-powered applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
