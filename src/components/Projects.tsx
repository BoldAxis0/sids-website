import React from "react";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "TennisLinked",
      description:
        "A comprehensive tennis booking and social platform that allows users to find, book, and manage tennis partners and court reservations with ease. Features also include booking and managing tennis lessons, an admin panel to manage users, clubs, and bookings, and a social feed to connect with other tennis enthusiasts.",
      tech: ["React Native", "Django", "PostgreSQL", "Heroku"],
      github: null,
    },
    {
      title: "Volunteer Hub",
      description:
        "An administrative app built for animal shelters, with volunteer shift scheduling and other general shelter management. ",
      tech: ["React.js", "Firebase", "Vercel"],
      github: "https://github.com/boldaxis0/volunteer-hub",
    },
    {
      title: "Quick Scanner",
      description:
        "A conference registration and organisation app, including client-side dashboard, admin panel, and QR based event signup",
      tech: ["Android", "Firebase", "NoSQL (Firestore)"],
      github: "https://github.com/BoldAxis0/Quick-Scanner",
    },
    {
      title: "Gains Connect",
      description:
        "A full fledged mock specialised social media app for fitness enthusiasts, with features like friend connections, a social feed, community, and interconnectivity with similar apps.",
      tech: ["Vue.js", "Django", "PostgreSQL"],
      github: "https://github.com/BoldAxis0/uofa-cmput404.github.io",
    },
    {
      title: "Mom's Recipes",
      description:
        "An archieval site for my mom's recipes, with features including picture upload, audio instructions, detailed notes, an intuititve UI, and a simple admin panel to add and manage recipes.",
      tech: ["React", "Django", "Vercel", "Heroku", "Cloudinary"],
      github: "https://github.com/boldaxis0/moms-recipes",
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
              <div className="relative mb-4">
                <h3 className="text-lg  leading-tight pr-8">{project.title}</h3>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-purple-500 transition-colors absolute top-0 right-0"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
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
