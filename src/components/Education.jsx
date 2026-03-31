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
      progress: 65, // Visual progress for your current degree
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
    <section ref={containerRef} className="py-12 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header - Minimalist & Elegant */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-6xl md:text-8xl uppercase font-black leading-none font-sans mb-8">
              Edu<span className="text-purple-600">ca</span>tion.
            </h2>
            <p className="max-w-2xl text-gray-600 text-lg md:text-xl mt-6 text-right">
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
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="edu-card group relative p-1 bg-[#fbfbfb] border border-slate-100 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(157,60,255,0.1)]"
            >
              <div className="bg-white rounded-[2.3rem] p-8 md:p-12 h-full flex flex-col">
                {/* Top: Status & Year */}
                <div className="flex justify-between items-start mb-12">
                  <div className="space-y-1">
                    <span className="text-xs font-black uppercase tracking-widest text-purple-600">
                      {edu.duration}
                    </span>
                    <h3 className="text-3xl font-black leading-tight group-hover:text-purple-600 transition-colors">
                      {edu.degree}
                    </h3>
                  </div>
                  <div
                    className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-tighter border ${edu.status === "Pursuing" ? "border-purple-200 text-purple-600 bg-purple-50" : "border-slate-200 text-slate-400"}`}
                  >
                    {edu.status}
                  </div>
                </div>

                {/* Progress Visual - Great for "Pursuing" status */}
                <div className="mb-10 space-y-3">
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
                <div className="mb-8">
                  <p className="text-xl font-bold text-slate-800">
                    {edu.university}
                  </p>
                  <p className="text-sm text-slate-500 italic">
                    {edu.location}
                  </p>
                </div>

                <p className="text-slate-600 mb-8 leading-relaxed">
                  {edu.description}
                </p>

                {/* Bottom: Modules/Tags */}
                <div className="mt-auto pt-8 border-t border-slate-50 flex flex-wrap gap-2">
                  {edu.modules.map((mod, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-bold uppercase py-2 px-4 bg-slate-50 text-slate-500 rounded-lg group-hover:bg-purple-600 group-hover:text-white transition-all duration-300"
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
    </section>
  );
};

export default Education;
