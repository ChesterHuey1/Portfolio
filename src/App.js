import React from 'react';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import pfp from './assets/pfp.png';
import MelodyMap from './assets/MelodyMap.png';
import StyleSwipe from './assets/StyleSwipe.png';
import FantasyGridiron from './assets/FantasyGridiron.png';
import Weather_Way from './assets/Weather_Way.png';
import Powell from './assets/Powell.png';

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

// About Section
const About = () => {
  return (
    <section id="about" className="pt-24 pb-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-start">
        <div className="flex-shrink-0 -ml-8">
          <div className="w-48 h-48 rounded-full bg-gray-200 overflow-hidden border-4 border-gray-100">
            <img
              src={pfp}
              alt="Chester Huey"
              className="w-full h-full object-cover object-[70%_center]"
            />
          </div>
            <div className="mt-6 space-y-3">
              <h1 className="text-2xl font-bold text-gray-900">Chester Huey</h1>
              <p className="text-gray-600">Computer Science at UC San Diego</p>
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

          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About me</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                I am a Computer Science student passionate about building impactful products to make people's lives better with software
              </p>
              <p>
              I develop full-stack web applications with a focus on building reliable, responsive front-end interfaces that simplify complex ideas. I’m also interested in applying AI and deep learning to create smarter, data-driven web solutions that enhance functionality and interactivity.
              </p>
              <p>
                I am actively pursuing opportunities in Software Engineering, and am eager to showcase my skills and gain insights into industry-standard practices.
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
      company: 'San Francisco State University - Mobile and Intelligent Computing Lab',
      role: 'Research Assistant',
      duration: 'June 2023 - August 2023',
      location: 'San Francisco, CA',
      description: 'Deployed 8-bit quantized MobileNetV2 CNN on Sony Spresense microcontroller with PyTorch, achieving 85% accuracy on 500K+ images. Customized L1-norm pruning to reduce model size by 70% and latency by 60%.',
      achievements: []
    },
    {
      id: 2,
      company: 'Delaget',
      role: 'Software Development Consultant',
      duration: 'February 2023 - March 2023',
      location: 'San Francisco, CA',
      description: 'Developed interactive dashboards with React and Chart.js for restaurant owners to visualize sales, staffing, and inventory data. Cleaned and normalized API responses for consistency.',
      achievements: []
    },
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
              {exp.achievements.length > 0 && (
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-gray-700 flex items-start">
                      <span className="text-gray-400 mr-3 mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              )}
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
      title: 'Melody Map',
      duration: 'March 2025 - June 2025',
      description:
        'Playlist optimization tool using Spotify API, HTML, CSS, and JavaScript. Analyzes user mood and top tracks to generate personalized music recommendations with CI/CD via GitHub Actions.',
      image: MelodyMap,
      tags: ['React','JavaScript', 'Spotify API', 'GitHub Actions', 'CI/CD'],
      githubLink: 'https://github.com/ChesterHuey1/',
    },
    {
      id: 2,
      title: 'Style Swipe',
      duration: 'October 2024 - December 2024',
      description:
        'Fashion social media platform with TypeScript and Tailwind CSS. Express API integration, and E2E testing using Playwright.',
      image: StyleSwipe,
      tags: ['React','TypeScript', 'Next.js', 'MongoDB','Express', 'Playwright', 'Tailwind CSS'],
      githubLink: 'https://github.com/ChesterHuey1/',
    },
    {
      id: 3,
      title: 'Fantasy Face-off',
      duration: 'August 2023 - November 2023',
      description:
        'React-based fantasy sports app with interactive player cards, leaderboards, and live score updates. Integrated RESTful sports APIs with responsive CSS Grid/Flexbox UI.',
      image: FantasyGridiron,
      tags: ['React', 'RESTful API', 'JavaScript'],
      githubLink: 'https://github.com/ChesterHuey1/',
    },
    {
      id: 4,
      title: 'Google CSSI - Weather Trip Planner',
      duration: 'May 2022 - July 2022',
      description:
        'Built weather-aware trip planner with HTML, CSS, and JavaScript. Scraped travel websites using Node.js and Cheerio, integrated OpenWeatherMap API for weather-based scheduling.',
      image: Weather_Way,
      tags: ['JavaScript', 'HTML', 'CSS', 'Node.js', 'Cheerio', 'OpenWeatherMap API'],
      githubLink: 'https://github.com/ChesterHuey1/',
    },
    {
      id: 5,
      title: 'Powell Bowell',
      duration: 'January 2025',
      description:
        'Developed a Restaurant picker for food near UC San Diego Campus with the ability to randomize or query certain foods',
      image: Powell,
      tags: ['HTML', 'CSS', 'JavaScript','Github Actions', 'Linting', 'Jest'],
      githubLink: 'https://github.com/ChesterHuey1/',
    },
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
                  <h3 className="text-xl font-bold text-gray-900">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {project.title}
                    </a>
                  </h3>
                  <span className="text-xs text-gray-500">{project.duration}</span>
                </div>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">{project.description}</p>
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
