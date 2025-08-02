import React from 'react';
import { ExternalLink, Github, Database, Brain, Globe, Smartphone } from 'lucide-react';

const Projects: React.FC = () => {
  const projects =  [

  {
    title: 'Tide Tracking Website',
    description: 'A responsive web platform developed for the Survey of India, providing real-time 30-day tide prediction data across 70+ Indian and foreign ports.',
    icon: <Globe className="text-cyan-400" size={24} />,
    technologies: ['React.js','TypeScript', 'Tailwind CSS', 'Node.js', 'Express.js', ],
    features: [
      'Real-time tide prediction data',
      'Data visualization for each port',
      'Responsive and accessible design',
      'Live deployment on organizational server'
    ],
    github: 'https://github.com/Sainiaayushi/tide-tracking-web',
    demo: 'https://demo-link.com/tide-tracking',
    image: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'Tide Prediction App',
    description: 'A cross-platform mobile application for tide data access built for Survey of India, offering 7-day tide forecasts for 70+ ports using Flutter.',
    icon: <Smartphone className="text-blue-400" size={24} />,
    technologies: ['Flutter', 'Firebase', 'Node.js', 'REST API'],
    features: [
      'Access 7-day tide data',
      'Interactive port selection interface',
      'Secure cloud-based data syncing',
      'Deployed on Android platform for internal use'
    ],
    
    image: 'https://images.pexels.com/photos/1619315/pexels-photo-1619315.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'Fashion Recommendation System',
    description: 'A machine learning-based clothing recommendation system that suggests outfits based on user preferences. Built using Flask and Streamlit.',
     icon: <Globe className="text-cyan-400" size={24} />,
    technologies: ['Python', 'Scikit-learn', 'Flask', 'Streamlit', 'Pickle'],
    features: [
      'Predicts fashion choices using ML model',
      'User-friendly Streamlit interface',
      'Model trained on fashion dataset',
      'Integrated with web backend for real-time use'
    ],
  
    image: 'https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'Bubble Notes',
    description: 'A sleek, responsive note-taking frontend built using React.js and TypeScript with a bubble-style UI. Focused on performance and modular design.',
     icon: <Globe className="text-cyan-400" size={24} />,
    technologies: ['React.js', 'TypeScript', 'Tailwind CSS'],
    features: [
      'Dynamic note creation and management',
      'Bubble-style interactive interface',
      'Dark mode & responsive layout',
      'Built with modular and scalable code structure'
    ],
    github: 'https://github.com/Sainiaayushi/bubble-notes',
    demo: 'https://demo-link.com/bubble-notes',
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

  return (
    <section id="projects" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my technical projects and innovations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
  key={index}
  className="bg-gradient-to-br  from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-[1.01] hover:shadow-md hover:shadow-purple-500/10 overflow-hidden group"
>
  <div className="relative h-12 overflow-hidden">
   
   
    <div className="absolute top-3 left-3">
      {project.icon}
    </div>
  </div>

  <div className="p-5">
    <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
    <p className="text-gray-300 mb-4 text-sm leading-normal">{project.description}</p>

    <div className="mb-4">
      <h4 className="text-base font-medium text-white mb-2">Key Features:</h4>
      <ul className="space-y-1">
        {project.features.map((feature, featureIndex) => (
          <li key={featureIndex} className="flex items-start">
            <div className="w-2 h-2 bg-purple-400 rounded-full mt-1 mr-2 flex-shrink-0"></div>
            <span className="text-gray-300 text-xs">{feature}</span>
          </li>
        ))}
      </ul>
    </div>

    <div className="mb-4">
      <h4 className="text-base font-medium text-white mb-2">Technologies:</h4>
      <div className="flex flex-wrap gap-1">
        {project.technologies.map((tech, techIndex) => (
          <span
            key={techIndex}
            className="px-2 py-0.5 bg-gray-700 text-gray-300 rounded-full text-xs"
          >
            {tech}
          </span>
        ))}
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

export default Projects;