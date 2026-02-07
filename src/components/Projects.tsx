import React from "react";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "TennisLinked",
      description:
        "A comprehensive tennis booking and social platform that allows users to find, book, and manage tennis partners and court reservations with ease. Features also include booking and managing tennis lessons, an admin panel to manage users, clubs, and bookings, and a social feed to connect with other tennis enthusiasts.",
      tech: ["React Native", "Django (Python)", "PostgreSQL", "Heroku"],
      github: "https://github.com/boldaxis0/",
      live: "https://example.com",
    },
    {
      title: "Volunteer Hub",
      description: "A React app for volunteer shift scheduling and shelter management. ",
      tech: ["React.js", "Firebase", "SQLite"],
      github: "https://github.com/boldaxis0/volunteer-hub",
      live: "https://example.com",
    },
    {
      title: "Quick Scanner",
      description:
        "A conference registration and organisation app, including client-side dashboard, admin panel, and QR based event signup",
      tech: ["Android", "Django", "PostgreSQL"],
      github: "https://github.com",
      live: "https://example.com",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50"
    >
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="mb-12 text-3xl block w-fit mx-auto relative">
          Projects
          <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-green-300 via-yellow-200 to-pink-300 rounded-full"></span>
        </h2>
        <div className="space-y-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-lg p-8 hover:border-purple-300 hover:shadow-md transition-all"
            >
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
