import React from 'react';

export function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-b from-purple-50 via-yellow-50 to-green-50"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="mb-12 text-center relative inline-block left-1/2 -translate-x-1/2 text-3xl">
          About Me
          <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-pink-300 via-blue-300 to-purple-300 rounded-full"></span>
        </h2>
        <div className="space-y-6 text-gray-600 text-lg">
          <p>
            I'm a software developer with a passion for building beautiful,
            functional web applications. I've been building applications for
            several years, and I specialize in React, Django, and native Android
            development.
          </p>
          <p>
            My approach combines technical expertise with a keen eye for design.
            I believe that great software should not only work flawlessly but
            also provide an exceptional user experience.
          </p>
          <p>
            Over the years I have also dabbled in game development, data science
            and exploration, neural networks, language models, and cryptography. I enjoy the
            engineering bits of several aspects of computer science. I enjoy
            building things.
          </p>

          <p>
            When I'm not coding, you can find me reading Sci-Fi, contributing to
            cat shelters, producing electronic music, or cooking/baking
            something delicious. I really like biology too, and am perpetually
            fascinated by the miracle of life.
          </p>
        </div>
      </div>
    </section>
  );
}