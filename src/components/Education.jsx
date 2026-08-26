import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const containerRef = useRef(null);
  const educationData = [
    {
      degree: "Master of Computer Applications",
      university: "Manglayatan University",
      location: "Aligarh, UP",
      duration: "2024 — 2026",
      status: "Pursuing",
      progress: 90,
      modules: ["Advanced Web Tech", "Cloud Computing", "AI Algorithms"],
      description:
        "Focusing on full-stack architecture and scalable system design.",
    },
    {
      degree: "Bachelor of Computer Applications",
      university: "Sanskriti University",
      location: "Chhata, Mathura",
      duration: "2020 — 2023",
      status: "Completed",
      progress: 100,
      modules: ["Data Structures", "OOPs", "Database Management"],
      description:
        "Foundation of computer science with excellence in core programming.",
    },
  ];

  return (
    <section ref={containerRef} className="py-12 sm:py-16 px-4 sm:px-6 md:px-12 bg-white">
      <div className="w-full mx-auto">
        {/* Header */}
        <div className="mb-12 sm:mb-20 gap-6 flex flex-col items-start sm:items-end">
          <h2 className="text-4xl sm:text-6xl md:text-8xl uppercase font-black leading-none font-sans mb-2 sm:mb-4">
            Edu<span className="text-purple-600">ca</span>tion.
          </h2>
          <p className="max-w-2xl text-gray-600 text-base sm:text-lg md:text-xl mt-2 sm:mt-6 text-left sm:text-right">
            Academic journey focusing on the intersection of{" "}
            <span className="text-black underline decoration-purple-500 underline-offset-4">
              technical logic
            </span>{" "}
            and{" "}
            <span className="text-black underline decoration-purple-500 underline-offset-4">
              visual design
            </span>
            .
          </p>
        </div>

        {/* Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="edu-card group relative p-1 bg-[#fbfbfb] border border-purple-300 rounded-[1.8rem] sm:rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(157,60,255,0.1)] hover:border-purple-600 cursor-pointer"
              >
                <div className="bg-white rounded-[1.6rem] sm:rounded-[2.3rem] p-5 sm:p-8 md:p-12 h-full flex flex-col justify-between">
                  {/* Top: Status & Year */}
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="space-y-1">
                        <span className="text-xs font-black uppercase tracking-widest text-purple-600">
                          {edu.duration}
                        </span>
                      </div>
                      <div
                        className={`px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-[10px] font-black uppercase tracking-tighter border ${edu.status === "Pursuing" ? "border-purple-200 text-purple-600 bg-purple-50" : "border-slate-200 text-slate-400"}`}
                      >
                        {edu.status}
                      </div>
                    </div>
                    <div className="mb-6 sm:mb-10">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-black leading-tight group-hover:text-purple-600 transition-colors">
                        {edu.degree}
                      </h3>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-6 sm:mb-8 space-y-2">
                      <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-slate-400">
                        <span>Degree Progress</span>
                        <span>{edu.progress}%</span>
                      </div>
                      <div className="h-[2px] w-full bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className="progress-bar h-full bg-purple-600 rounded-full"
                          style={{ width: `${edu.progress}%` }}
                        />
                      </div>
                    </div>

                    {/* Institution Info */}
                    <div className="mb-6 sm:mb-8">
                      <p className="text-lg sm:text-xl font-bold text-slate-800">
                        {edu.university}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-500 italic">
                        {edu.location}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm md:text-base text-slate-600 mb-6 sm:mb-8 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>

                  {/* Modules/Tags */}
                  <div className="pt-6 border-t border-slate-50 flex flex-wrap gap-1.5 sm:gap-2">
                    {edu.modules.map((mod, i) => (
                      <span
                        key={i}
                        className="text-[9px] sm:text-[10px] font-bold uppercase py-1.5 px-3 sm:py-2 sm:px-4 bg-slate-50 text-slate-500 rounded-lg group-hover:bg-purple-600 group-hover:text-white transition-all duration-300"
                      >
                        {mod}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
