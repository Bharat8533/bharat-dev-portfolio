import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  const projects = [
    { title: "E-COMMERCE OS", tags: "React / Next.js", id: "01" },
    { title: "AI AUTOMATION", tags: "Python / OpenAI", id: "02" },
    { title: "FINTECH DASH", tags: "TypeScript / Tailwind", id: "03" },
  ];

  useEffect(() => {
    // Initial fade in for the whole section
    gsap.fromTo(
      triggerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top 80%",
        },
      },
    );
  }, []);

  return (
    <section
      ref={triggerRef}
      className="bg-white py-20 px-6 md:px-12 overflow-hidden"
    >
      <div className="flex justify-between items-end mb-16">
        <h2 className="text-7xl md:text-9xl font-black tracking-tighter uppercase leading-none">
          Work<span className="text-[#9D3CFF]">.</span>
        </h2>
        <p className="max-w-[200px] text-xs font-bold uppercase text-gray-500 mb-2">
          Selected projects and digital experiences 2024-2026
        </p>
      </div>

      <div className="border-t border-black">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative flex flex-col md:flex-row md:items-center justify-between py-10 border-b border-black cursor-none hover:bg-[#9D3CFF] transition-colors duration-500"
            onMouseEnter={(e) => {
              gsap.to(`.img-${index}`, { opacity: 1, scale: 1, duration: 0.4 });
            }}
            onMouseLeave={(e) => {
              gsap.to(`.img-${index}`, {
                opacity: 0,
                scale: 0.8,
                duration: 0.4,
              });
            }}
          >
            <div className="flex items-start gap-4 z-10">
              <span className="text-sm font-bold mt-2 group-hover:text-white">
                {project.id}
              </span>
              <h3 className="text-4xl md:text-6xl font-black uppercase group-hover:text-white transition-all">
                {project.title}
              </h3>
            </div>

            <div className="z-10 mt-4 md:mt-0">
              <span className="px-4 py-2 border border-black rounded-full text-xs font-bold uppercase group-hover:border-white group-hover:text-white">
                {project.tags}
              </span>
            </div>

            {/* Floating Image Preview (Hidden by default, shows on hover) */}
            <div
              className={`img-${index} pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-40 bg-gray-200 opacity-0 scale-75 overflow-hidden rounded-lg shadow-2xl z-20 transition-transform duration-300 group-hover:rotate-3`}
            >
              <div className="w-full h-full bg-black flex items-center justify-center text-white font-black">
                PROJECT PREVIEW
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <button className="px-8 py-4 bg-black text-white font-bold uppercase hover:bg-[#9D3CFF] transition-colors">
          View All Experiments
        </button>
      </div>
    </section>
  );
};

export default Projects;
