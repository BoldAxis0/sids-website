import React from 'react';

export function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'HTML/CSS'],
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'REST APIs'],
    },
    {
      title: 'Tools & Others',
      skills: ['Git', 'Docker', 'AWS', 'Figma', 'Agile/Scrum'],
    },
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-b from-green-50 via-pink-50 to-blue-50">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="mb-12 text-center">Skills</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => {
            const colors = ['border-purple-300', 'border-yellow-300', 'border-green-300'];
            const bgColors = ['bg-purple-50', 'bg-yellow-50', 'bg-green-50'];
            const textColors = ['text-purple-600', 'text-yellow-700', 'text-green-600'];
            return (
              <div key={idx} className={`bg-white p-8 rounded-lg border-t-4 ${colors[idx]} shadow-sm hover:shadow-md transition-shadow`}>
                <div className={`inline-block px-4 py-2 rounded-full ${bgColors[idx]} mb-4`}>
                  <h3 className={`mb-0 ${textColors[idx]}`}>{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIdx) => (
                    <li key={skillIdx} className="text-gray-600">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}