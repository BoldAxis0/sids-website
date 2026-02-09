import React from "react";

type SkillCategoryBoxProps = {
  title: string;
  skills: string[];
  color:
    | "border-purple-300"
    | "border-yellow-300"
    | "border-blue-300"
    | "border-pink-300"
    | "border-green-300";
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
  // Map color prop to hover:border-* class
  const hoverBorderClass =
    {
      "border-purple-300": "hover:border-purple-300",
      "border-yellow-300": "hover:border-yellow-300",
      "border-blue-300": "hover:border-blue-300",
      "border-pink-300": "hover:border-pink-300",
      "border-green-300": "hover:border-green-300",
    }[color] || "";

  return (
    <div
      className={`bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow ${hoverBorderClass}`}
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
