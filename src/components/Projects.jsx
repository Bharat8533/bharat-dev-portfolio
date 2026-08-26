import React, { useState, useRef } from "react";
import { FiArrowUpRight, FiGithub, FiExternalLink, FiLayers } from "react-icons/fi";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// Importing project images from assets
import stayInBraj from "../assets/projects/stayInBraj.png";
import horeca from "../assets/projects/horeca.png";
import foxnex from "../assets/projects/foxnex.png";
import coldEmail from "../assets/projects/coldEmail.png";
import hotelRadham from "../assets/projects/hotelRadham.png";
import brajProperty from "../assets/projects/brajProperty.png";
import githubFinder from "../assets/projects/githubFinder.png";

const projectsData = [
  {
    id: "01",
    title: "StayInBraj Platform",
    category: "Full-Stack",
    description:
      "#1 Hotel Booking & Multi-Vertical Platform in Braj Mathura. All-in-one ecosystem for hotel reservations, food delivery, travel bookings, and real estate. Engineered with Next.js (SSR/SSG), 6 isolated RBAC dashboards, and payment gateway integration.",
    image: stayInBraj,
    tags: ["Next.js (SSR)", "TypeScript", "Tailwind CSS", "PHP 8", "MySQL", "RBAC", "JWT"],
    liveUrl: "https://www.stayinbraj.com/",
    githubUrl: "https://github.com/Bharat8533",
    featured: true,
  },
  {
    id: "02",
    title: "AI Cold Email Automation Engine",
    category: "AI & Backend",
    description:
      "Automated AI-driven email outreach platform processing 500+ leads with 70% reduced manual setup time. Integrates OpenAI GPT-4 & Google Gemini for personalized email reply generation, IMAP lead sync, node-cron scheduling, and 80%+ Jest test coverage.",
    image: coldEmail,
    tags: ["Node.js", "Express", "MongoDB", "OpenAI GPT-4", "Google Gemini", "Nodemailer", "Jest"],
    liveUrl: "https://github.com/Bharat8533",
    githubUrl: "https://github.com/Bharat8533",
    featured: true,
  },
  {
    id: "03",
    title: "FOXNEX LLC",
    category: "E-Commerce",
    description:
      "High-protein healthy snack brand website featuring popped water lily seeds (8g protein, 170 cal). Integrated with custom e-commerce cart, health & nutrition blog, and product showcase.",
    image: foxnex,
    tags: ["E-Commerce", "React.js", "Tailwind CSS", "GSAP", "Health Blog"],
    liveUrl: "https://www.foxnexllc.com",
    githubUrl: "https://github.com/Bharat8533",
    featured: true,
  },
  {
    id: "04",
    title: "Horeca Guardian",
    category: "Full-Stack",
    description:
      "All-in-one hotel & restaurant management system streamlining room reservations, table bookings, live inventory tracking, and POS billing into a unified dashboard.",
    image: horeca,
    tags: ["CodeIgniter 3", "Tailwind CSS", "jQuery", "MySQL", "REST APIs"],
    liveUrl: "https://horecaguardian.com/",
    githubUrl: "https://github.com/Bharat8533",
    featured: true,
  },
  {
    id: "05",
    title: "Hotel Shree Radham",
    category: "Real Estate & Hotel",
    description:
      "Modern luxury hotel booking platform featuring real-time room availability, online reservation workflows, integrated payment gateway, and mobile responsive UI.",
    image: hotelRadham,
    tags: ["PHP 8", "MySQL", "JavaScript", "Tailwind CSS", "Bootstrap"],
    liveUrl: "https://hotelshreeradham.com/",
    githubUrl: "https://github.com/Bharat8533",
    featured: false,
  },
  {
    id: "06",
    title: "Braj Property",
    category: "Real Estate & Hotel",
    description:
      "Region-focused real estate portal for Mathura-Braj. Built with advanced multi-filter property search, interactive gallery showcases, and direct agent inquiry forms.",
    image: brajProperty,
    tags: ["PHP", "MySQL", "Tailwind CSS", "JavaScript", "jQuery"],
    liveUrl: "https://www.brajproperty.in/",
    githubUrl: "https://github.com/Bharat8533",
    featured: false,
  },
  {
    id: "07",
    title: "Account Explorer",
    category: "Frontend",
    description:
      "Interactive GitHub profile & repository analytics finder tool. Provides instant user overview, starred repositories search, language distribution, and profile metrics.",
    image: githubFinder,
    tags: ["React.js", "Tailwind CSS", "GitHub REST API", "Vercel"],
    liveUrl: "https://git-finder-theta.vercel.app/",
    githubUrl: "https://github.com/Bharat8533",
    featured: false,
  },
];

const Projects = () => {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  useGSAP(
    () => {
      gsap.fromTo(
        ".project-card",
        { opacity: 0, y: 40, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.12,
          ease: "power3.out",
        }
      );
    },
    { scope: containerRef, dependencies: [activeCategory] }
  );

  return (
    <section
      ref={containerRef}
      id="projects"
      className="w-full py-16 md:py-24 px-4 sm:px-6 md:px-12 bg-white text-black font-sans relative overflow-hidden"
    >
      {/* SECTION HEADER */}
      <div className="max-w-7xl mx-auto mb-10 sm:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-black uppercase tracking-[0.4em] text-purple-600">
              03 // Portfolio
            </span>
            <div className="h-[1px] w-12 bg-purple-600/30" />
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-8xl uppercase font-black leading-none font-sans tracking-tight">
            Pro<span className="text-purple-600">je</span>cts.
          </h2>
        </div>
        <p className="max-w-md text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
          A selection of full-stack web platforms, client solutions, and interactive applications crafted with focus on performance, design, and user experience.
        </p>
      </div>

      {/* PROJECTS GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="project-card group relative bg-[#fcfcfc] border border-gray-200 rounded-[1.8rem] sm:rounded-[2.5rem] p-4 md:p-6 overflow-hidden transition-all duration-500 hover:border-purple-600 hover:shadow-[0_25px_50px_-12px_rgba(147,51,234,0.15)] flex flex-col justify-between"
          >
            {/* CARD IMAGE & OVERLAY */}
            <div className="relative w-full h-48 sm:h-64 md:h-80 rounded-[1.4rem] sm:rounded-[2rem] overflow-hidden bg-gray-100 border border-gray-100 group-hover:shadow-md transition-all">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Top Badges */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex items-center gap-2 z-10">
                <span className="px-2.5 py-1 bg-black/80 backdrop-blur-md text-white text-[9px] sm:text-[10px] font-black uppercase tracking-widest rounded-full border border-white/10">
                  {project.id}
                </span>
                <span className="px-2.5 py-1 bg-purple-600/90 backdrop-blur-md text-white text-[9px] sm:text-[10px] font-black uppercase tracking-widest rounded-full">
                  {project.category}
                </span>
              </div>

              {/* Hover Quick-Action Floating Button */}
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 bg-purple-600 text-white rounded-full flex items-center justify-center shadow-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-black"
                title="View Live Demo"
              >
                <FiArrowUpRight className="text-lg sm:text-xl" />
              </a>
            </div>

            {/* CARD CONTENT */}
            <div className="pt-4 sm:pt-6 pb-2 px-1 sm:px-2 flex flex-col flex-grow justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight text-gray-900 group-hover:text-purple-600 transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-6">
                  {project.description}
                </p>
              </div>

              {/* TECH STACK TAGS */}
              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-purple-50 text-purple-700 border border-purple-100/80 rounded-lg text-[10px] font-bold uppercase tracking-wider group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* ACTION BUTTONS */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-black hover:text-purple-600 transition-colors group/link"
                  >
                    <span>Live Preview</span>
                    <FiArrowUpRight className="text-sm group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-500 hover:text-black transition-colors"
                  >
                    <FiGithub className="text-sm" />
                    <span>Source</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* BOTTOM SEPARATOR & CALLOUT */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
          Want to see more project source code or custom work?
        </p>
        <a
          href="https://github.com/Bharat8533"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 bg-black text-white text-xs font-black uppercase tracking-[0.2em] rounded-full hover:bg-purple-600 transition-all shadow-lg active:scale-95 flex items-center gap-2"
        >
          <FiGithub className="text-base" />
          <span>Explore GitHub Repos</span>
        </a>
      </div>
    </section>
  );
};

export default Projects;
