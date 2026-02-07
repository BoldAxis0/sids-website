import React from "react";

export function Experience() {
  const experiences = [
    {
      role: "Software Developer",
      company: "Enzene Biosciences Ltd",
      period: "Sep 2025 - Nov 2025",
      description:
        "Built a proof-of-concept document digitization system that used OCR to extract 30,000+ tokens from scanned and handwritten records, structured the text for LLM-based querying, and validated outputs for accuracy and usability.",
    },
    {
      role: "Team Member",
      company: "Albertaloop - UAlberta's Hyperloop Team",
      period: "Sep 2021 - Apr 2022",
      description:
        "Contributed to the software team in building a real-time dashboard for the hyperloop pod, including sensor data visualization and telemetry processing.",
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-b from-pink-50 via-green-50 to-yellow-50"
    >
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="mb-12 text-3xl block w-fit mx-auto relative">
          Experience
          <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-fuchsia-300 via-orange-200 to-cyan-200 rounded-full"></span>
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-yellow-300 hover:shadow-md transition-shadow"
            >
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
