import React from "react";

type SkillCategoryBoxProps = {
  title: string;
  skills: string[];
  color: string;
  bgColor: string;
  textColor: string;
};

export function SkillCategoryBox({
  title,
  skills,
  color,
  bgColor,
  textColor,
}: SkillCategoryBoxProps) {
  return (
    <div
      className={`bg-white p-8 rounded-lg border-t-4 ${color} shadow-sm hover:shadow-md transition-shadow`}
    >
      <div className={`inline-block px-4 py-2 rounded-full ${bgColor} mb-4`}>
        <h3 className={`mb-0 ${textColor}`}>{title}</h3>
      </div>
      <ul className="space-y-2">
        {skills.map((skill, skillIdx) => (
          <li key={skillIdx} className="text-gray-600">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
