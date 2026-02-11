import React from "react";

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
            functional web and mobile applications. I've several years of
            experience creating real-world solutions, and I specialize in React,
            Django, and native Android development.
          </p>
          <p>
            My approach combines technical expertise with a keen eye for design.
            I believe that great software should be both pleasant to look at and
            interact with, as well as provide a seamless user experience. I
            think competent leadership combined with dedicated teams can
            accomplish almost anything, and some of humanity's greatest
            endeavours are a testament to this.
          </p>
          <p>
            I am curious by default, and I enjoy the engineering side of several
            domains within computer science. Over the years I have dabbled in
            game development, data science and exploration, neural networks,
            language models, numerical methods, and cryptography. I like
            building things.
          </p>

          <p>
            When I'm not coding, you can find me reading or watching Sci-Fi,
            producing electronic music, working at a cat shelter or
            cooking/baking something delicious. I'm a big fan of biology too,
            and continue to be perpetually fascinated by the miracle of life.
          </p>
        </div>
      </div>
    </section>
  );
}
