import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured online shopping platform with payment integration, inventory management, and admin dashboard.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates, team workspaces, and progress tracking.',
      tech: ['Next.js', 'TypeScript', 'MongoDB', 'Socket.io'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'Weather Dashboard',
      description: 'Interactive weather application with location-based forecasts, historical data, and customizable widgets.',
      tech: ['React', 'Tailwind CSS', 'Weather API'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="mb-12 text-center">Projects</h2>
        <div className="space-y-8">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-lg p-8 hover:border-purple-300 hover:shadow-md transition-all">
              <div className="flex items-start justify-between mb-4">
                <h3>{project.title}</h3>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-purple-500 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-green-500 transition-colors"
                    aria-label="Live Demo"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIdx) => (
                  <span
                    key={techIdx}
                    className="px-3 py-1 bg-purple-50 text-purple-600 text-sm rounded-full border border-purple-200 hover:bg-purple-100 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}