import React from "react";

const Experience = () => {
  const experiences = [
    {
      id: "01",
      role: "Senior Full Stack Developer",
      company: "Osculant Technologies",
      period: "Dec 2025 — Present",
      description:
        "Leading the engineering vision and coordinating team-wide technical execution.",
      highlights: [
        "Lead development teams & mentor junior developers",
        "Project architecture & requirement gathering",
        "Strategic task assignment & sprint management",
        "End-to-end project ownership & delivery",
      ],
      current: true,
    },
    {
      id: "02",
      role: "Full Stack Developer",
      company: "Osculant Technologies",
      period: "July 2023 — Dec 2025",
      description:
        "Architecting high-performance web platforms and optimizing internal workflows.",
      highlights: [
        "Built 'OTA' and 'Property Management System' from scratch",
        "Increased company productivity via custom internal tools",
        "Owned UI/UX design & frontend performance optimization",
        "Delivered 15+ complex full-stack projects",
      ],
      current: false,
    },
  ];

  return (
    <section className="w-full pt-24 px-6 md:px-12 bg-white text-black font-sans">
      {/* Header aligned with your Skills style */}
      <div className="mb-20 w-full flex flex-col items-end">
        <h2 className="text-6xl md:text-8xl uppercase font-black leading-none">
          Exp<span className="text-purple-600">er</span>ience.
        </h2>
        <p className="max-w-2xl text-gray-600 text-lg md:text-xl mt-6 text-right">
          A track record of building robust platforms and leading teams at
          Osculant Technologies.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className={`group relative grid grid-cols-1 md:grid-cols-12 border-t border-gray-200 py-12 transition-all duration-500 hover:bg-gray-50/50 px-4`}
          >
            {/* Column 1: Time & Status */}
            <div className="md:col-span-3 mb-4 md:mb-0">
              <span className="block text-purple-600 font-black text-xl mb-1">
                {exp.id}.
              </span>
              <p className="text-sm font-bold uppercase tracking-widest text-gray-400">
                {exp.period}
              </p>
              {exp.current && (
                <span className="inline-block mt-2 px-3 py-1 bg-purple-100 text-purple-700 text-[10px] font-black uppercase rounded-full">
                  Current Role
                </span>
              )}
            </div>

            {/* Column 2: Role & Company */}
            <div className="md:col-span-4 mb-6 md:mb-0">
              <h3 className="text-3xl md:text-4xl font-black uppercase leading-tight group-hover:text-purple-600 transition-colors">
                {exp.role.split(" ").map((word, i) => (
                  <React.Fragment key={i}>
                    {word}
                    <br />
                  </React.Fragment>
                ))}
              </h3>
              <p className="text-lg font-bold mt-2 text-gray-800">
                {exp.company}
              </p>
            </div>

            {/* Column 3: Details & Grid of Tasks */}
            <div className="md:col-span-5">
              <p className="text-gray-600 text-lg mb-8 leading-relaxed italic">
                "{exp.description}"
              </p>

              <div className="grid grid-cols-1 gap-y-3">
                {exp.highlights.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="h-[2px] w-4 bg-purple-600"></div>
                    <p className="text-sm font-bold uppercase tracking-tight text-gray-700">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Hover Background Accent */}
            <div className="absolute left-0 top-0 w-1 h-0 bg-purple-600 transition-all duration-300 group-hover:h-full" />
          </div>
        ))}
      </div>

      {/* Bottom Spacer/Separator */}
      <div className="w-full h-[1px] bg-gray-200 mt-4"></div>
    </section>
  );
};

export default Experience;
