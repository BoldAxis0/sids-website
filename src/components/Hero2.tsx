import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-pink-50 via-blue-50 to-purple-50">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="mb-6">John Doe</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Full-stack developer crafting elegant solutions to complex problems.
          Passionate about <span className="relative inline-block">
            <span className="relative z-10">clean code</span>
            <span className="absolute bottom-1 left-0 w-full h-3 bg-green-200 -z-0 -rotate-1"></span>
          </span> and <span className="relative inline-block">
            <span className="relative z-10">user experience</span>
            <span className="absolute bottom-1 left-0 w-full h-3 bg-yellow-200 -z-0 rotate-1"></span>
          </span>.
        </p>
        <div className="flex items-center justify-center gap-4 mb-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 hover:bg-purple-100 text-gray-600 hover:text-purple-600 transition-all hover:scale-110"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-600 transition-all hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:hello@example.com"
            className="p-3 rounded-full bg-gray-100 hover:bg-pink-100 text-gray-600 hover:text-pink-600 transition-all hover:scale-110"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 hover:bg-amber-100 text-gray-600 hover:text-amber-600 transition-all hover:scale-110"
            aria-label="Resume"
          >
            <FileText className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}