import React from "react";
import { SkillCategoryBox } from "./SkillCategoryBox";

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML/CSS"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "REST APIs"],
    },
    {
      title: "Tools & Others",
      skills: ["Git", "Docker", "AWS", "Figma", "Agile/Scrum"],
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-b from-green-50 via-pink-50 to-blue-50"
    >
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="mb-12 text-3xl block w-fit mx-auto relative">
          Skills
          <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-emerald-300 via-cyan-300 to-indigo-300 rounded-full"></span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => {
            const colors = [
              "border-purple-300",
              "border-yellow-300",
              "border-green-300",
            ];
            const bgColors = ["bg-purple-50", "bg-yellow-50", "bg-green-50"];
            const textColors = [
              "text-purple-600",
              "text-yellow-700",
              "text-green-600",
            ];
            return (
              <SkillCategoryBox
                key={idx}
                title={category.title}
                skills={category.skills}
                color={colors[idx]}
                bgColor={bgColors[idx]}
                textColor={textColors[idx]}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
