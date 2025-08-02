import React from 'react';
import { Code, Server, Network, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code className="text-purple-400" size={20} />,
      title: 'Frontend Development',
      description: 'Building responsive, accessible UIs with React, HTML, CSS, and Tailwind.'
    },
    {
      icon: <Server className="text-teal-400" size={20} />,
      title: 'Backend Engineering',
      description: 'Creating APIs and server-side logic with Node.js, Express.'
    },
    
    {
      icon: <Sparkles className="text-yellow-400" size={20} />,
      title: 'Clean Code',
      description: 'Writing maintainable code using Git, MVC, modular structure, and best practices.'
    }
  ];

  return (
    <section  className="py-12 bg-gray-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            I'm a Full Stack Developer passionate about building real-world solutions with clean and scalable code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm p-4 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-[1.03] hover:shadow-md"
            >
              <div className="mb-3">{item.icon}</div>
              <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-purple-900/20 to-pink-900/20 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xl font-semibold text-white mb-4">My Journey</h3>
            <p className="text-gray-300 text-base leading-relaxed">
              As a Computer Science student, I enjoy building web apps with full-stack technologies.
              From REST APIs to cloud deployment, I thrive on solving problems and creating impactful digital experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
