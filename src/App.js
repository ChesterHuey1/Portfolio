import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, MapPin } from 'lucide-react';

// Navbar Component
const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-5xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <button
            onClick={() => scrollToSection('about')}
            className="text-lg font-semibold text-gray-800 hover:text-gray-600 transition-colors"
          >
            Chester Huey
          </button>

          <div className="flex gap-6">
            <button
              onClick={() => scrollToSection('experience')}
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Projects
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

// About Section with Photo
const About = () => {
  return (
    <section id="about" className="pt-24 pb-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Left side - Photo */}
          <div className="flex-shrink-0">
            <div className="w-48 h-48 rounded-full bg-gray-200 overflow-hidden border-4 border-gray-100">
              {/* Replace this with your photo */}
              <img
                src="https://via.placeholder.com/200x200/6366f1/ffffff?text=Your+Photo"
                alt="Chester Huey"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-6 space-y-3">
              <h1 className="text-2xl font-bold text-gray-900">Chester Huey</h1>
              <p className="text-gray-600">Computer Science Student</p>
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin size={16} />
                <span className="text-sm">San Francisco, CA</span>
              </div>
              <div className="flex gap-3 pt-2">
                <a
                  href="mailto:youremail@gmail.com"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                  title="Email"
                >
                  <Mail size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/chester-huey/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com/ChesterHuey1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                  title="GitHub"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right side - About content */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About me</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                I am a Computer Science student passionate about building impactful, user-centered 
                software and exploring how technology intersects with urban systems and sustainability.
              </p>
              <p>
                I specialize in driving user and results-oriented innovation by identifying complex 
                challenges, constructing strategic roadmaps toward nuanced solutions, and leveraging 
                my technical expertise to develop products that shape the world.
              </p>
              <p>
                I am actively pursuing opportunities in Software Engineering and Product Management, 
                and am eager to showcase my skills and gain insights into industry-standard practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Experience Section
const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: '[Company Name]',
      role: '[Your Role Title]',
      duration: '[Month YYYY – Month YYYY]',
      location: '[City, State]',
      description: 'Brief description of your role and key responsibilities. Focus on impact and measurable outcomes. Highlight the technologies you used and the problems you solved.',
      achievements: [
        'Key achievement or project you worked on',
        'Quantifiable result or impact you made',
        'Technical skill or tool you mastered'
      ]
    },
    {
      id: 2,
      company: '[Company Name]',
      role: '[Your Role Title]',
      duration: '[Month YYYY – Month YYYY]',
      location: '[City, State]',
      description: 'Brief description of your role and key responsibilities. Emphasize collaboration with teams and delivery of features or products.',
      achievements: [
        'Key achievement or project you worked on',
        'Technical contribution or innovation',
      ]
    },
    {
      id: 3,
      company: '[Company Name]',
      role: '[Your Role Title]',
      duration: '[Month YYYY – Month YYYY]',
      location: '[City, State]',
      description: 'Brief description of your role. Focus on skills developed and experience gained.',
      achievements: [
        'Key project or initiative you led',
        'Impact on the team or organization'
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">Selected Experience</h2>
        
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div key={exp.id} className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {exp.role} <span className="text-gray-600 font-normal">at</span> {exp.company}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">{exp.location}</p>
                </div>
                <span className="text-gray-600 text-sm mt-2 sm:mt-0">{exp.duration}</span>
              </div>
              
              <p className="text-gray-700 mb-4">{exp.description}</p>
              
              <ul className="space-y-2">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="text-gray-700 flex items-start">
                    <span className="text-gray-400 mr-3 mt-1">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Projects Section
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'PeerWalk',
      duration: 'Dec. 2018 - present',
      description: 'Ensuring safety and security for students walking through nighttime Berkeley.',
      image: 'https://via.placeholder.com/600x300/1e293b/ffffff?text=Project+Screenshot',
      tags: ['React', 'Node.js', 'MongoDB']
    },
    {
      id: 2,
      title: 'OskiList',
      duration: 'Sept. 2018 - Feb. 2018',
      description: 'Built a unified and streamlined web application for UC Berkeley students to buy and sell services and used goods.',
      image: 'https://via.placeholder.com/600x300/0f766e/ffffff?text=Project+Screenshot',
      tags: ['Python', 'Django', 'PostgreSQL']
    },
    {
      id: 3,
      title: 'Gmail Autoreply',
      duration: 'Aug. 2018 - Jan. 2019',
      description: 'Created an extension to replace Gmail autoreplies with interesting and related quotes.',
      image: 'https://via.placeholder.com/600x300/7c3aed/ffffff?text=Project+Screenshot',
      tags: ['JavaScript', 'Chrome API']
    }
  ];

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video bg-gray-100 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <span className="text-xs text-gray-500">{project.duration}</span>
                </div>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="py-8 bg-gray-50 border-t border-gray-200">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="text-gray-600 text-sm">
          © 2024 Chester Huey. Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

// Main App Component
function App() {
  return (
    <div className="font-sans bg-white">
      <Navbar />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;