import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const aboutSection = document.getElementById('projects');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-teal-400 bg-clip-text text-transparent">
              Aayushi Saini
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-8">
            Web Developer
          </h2>
          
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm a passionate Web Developer skilled in building responsive web applications using modern technologies like React, TypeScript Node.js, Express. I enjoy crafting seamless user experiences and writing clean, maintainable code to bridge the gap between frontend and backend development.
          </p>

          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/Sainiaayushi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 hover:bg-purple-600 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/aayushi-saini-214259250/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 hover:bg-blue-600 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:sainiaayushi348@gmail.com"
              className="p-3 bg-gray-800 hover:bg-teal-600 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-teal-500/25"
            >
              <Mail size={24} />
            </a>
          </div>

          <button
            onClick={scrollToProjects}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full text-white font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
          >
            Explore My Work
            <ChevronDown className="ml-2 animate-bounce" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
