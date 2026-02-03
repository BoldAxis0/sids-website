import React from 'react';

export function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-b from-purple-50 via-yellow-50 to-green-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="mb-12 text-center relative inline-block left-1/2 -translate-x-1/2">
          About Me
          <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-pink-300 via-blue-300 to-purple-300 rounded-full"></span>
        </h2>
        <div className="space-y-6 text-gray-600">
          <p>
            I'm a software developer with a passion for building beautiful, functional web applications.
            With over 5 years of experience, I specialize in React, TypeScript, and modern web technologies.
          </p>
          <p>
            My approach combines technical expertise with a keen eye for design. I believe that great
            software should not only work flawlessly but also provide an exceptional user experience.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies, contributing to open-source
            projects, or enjoying a good cup of coffee while reading about the latest industry trends.
          </p>
        </div>
      </div>
    </section>
  );
}