import React from 'react';

export function Experience() {
  const experiences = [
    {
      role: 'Senior Full-Stack Developer',
      company: 'Tech Company Inc.',
      period: '2022 - Present',
      description: 'Lead development of customer-facing web applications. Mentor junior developers and establish coding standards.',
    },
    {
      role: 'Full-Stack Developer',
      company: 'Digital Solutions LLC',
      period: '2020 - 2022',
      description: 'Built and maintained multiple client projects. Collaborated with design teams to implement responsive interfaces.',
    },
    {
      role: 'Frontend Developer',
      company: 'Startup Ventures',
      period: '2019 - 2020',
      description: 'Developed user interfaces for web applications. Optimized performance and implemented modern design patterns.',
    },
  ];

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-b from-pink-50 via-green-50 to-yellow-50">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="mb-12 text-center">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-yellow-300 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="mb-1">{exp.role}</h3>
                  <p className="text-gray-600">{exp.company}</p>
                </div>
                <p className="text-gray-500 mt-2 md:mt-0">{exp.period}</p>
              </div>
              <p className="text-gray-600">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}