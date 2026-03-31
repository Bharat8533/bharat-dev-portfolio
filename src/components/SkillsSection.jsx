import React, { useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const categories = ["All", "Frontend", "Backend", "Database", "AI & Tools"];

const skills = [
  // Frontend
  { name: "HTML5", category: "frontend" },
  { name: "CSS3", category: "frontend" },
  { name: "JavaScript (ES6+)", category: "frontend" },
  { name: "React.js", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Bootstrap", category: "frontend" },
  { name: "jQuery", category: "frontend" },
  { name: "GSAP", category: "frontend" },
  { name: "Responsive Design", category: "frontend" },
  { name: "SEO Basics", category: "frontend" },

  // Backend
  { name: "Node.js", category: "backend" },
  { name: "Express.js", category: "backend" },
  { name: "PHP 8", category: "backend" },
  { name: "CodeIgniter 3", category: "backend" },
  { name: "RESTful APIs", category: "backend" },
  { name: "JWT Authentication", category: "backend" },

  // Databases
  { name: "MySQL", category: "database" },
  { name: "MongoDB", category: "database" },
  { name: "Mongoose", category: "database" },
  { name: "Firebase", category: "database" },

  // AI & Automation
  { name: "OpenAI API", category: "ai & tools" },
  { name: "Google Generative AI", category: "ai & tools" },
  { name: "Email Automation", category: "ai & tools" },
  { name: "node-cron", category: "ai & tools" },

  // Tools
  { name: "Git", category: "tool" },
  { name: "GitHub", category: "tool" },
  { name: "Postman", category: "tool" },
  { name: "Figma", category: "tool" },
  { name: "Vercel", category: "tool" },
  { name: "dotenv", category: "tool" },
  { name: "CORS", category: "tool" },
];

const SkillsSection = () => {
  const containerRef = useRef(null);
  const [activeTab, setActiveTab] = useState("All");
  const draggingCard = useRef(null);
  const offset = useRef({ x: 0, y: 0 });

  const filteredSkills = useMemo(() => {
    return activeTab === "All"
      ? skills
      : skills.filter(
          (skill) => skill.category === activeTab.toLocaleLowerCase(),
        );
  }, [activeTab]);

  useGSAP(() => {
    if (filteredSkills.length > 0) {
      gsap.fromTo(
        ".skill-card",
        {
          scale: 0,
          opacity: 0,
          y: 20,
        },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.5,
          duration: 0.5,
          stagger: 0.03,
          ease: "back.out(2)",
        },
      );
    }
  }, [filteredSkills]);

  const handleMouseDown = (e, carId) => {
    const card = e.currentTarget;
    draggingCard.current = card;

    const xProp = gsap.getProperty(card, "x");
    const yProp = gsap.getProperty(card, "y");
    offset.current = {
      x: e.clientX - xProp,
      y: e.clientY - yProp,
    };
    gsap.set(card, { zIndex: 1000, cursor: "grabbing" });

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  }

  const handleMouseMove = (e) => {
    
    if(!draggingCard.current) return;

    gsap.set(draggingCard.current, {
      x: e.clientX - offset.current.x,
      y: e.clientY - offset.current.y,
    });
  }

  const handleMouseUp = () => {
    if (draggingCard.current) {
      gsap.set(draggingCard.current, { zIndex: 50, cursor: "grab" });
      draggingCard.current = null;
    }
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
  };

  return (
    <section ref={containerRef} className="w-full px-6 md:px-12">
      <div className="mb-12">
        <h2 className="text-6xl md:text-8xl uppercase font-black leading-none font-sans">
          Ski<span className="text-purple-600">ll</span>s.
        </h2>
        <p className="max-w-2xl text-gray-600 text-lg md:text-xl mt-6">
          Bridging the gap between robust backend logic and pixel-perfect
          frontend interactivity. Here is my technical arsenal.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3  mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`group relative px-12 py-4 rounded-sm font-bold uppercase tracking-tighter transition-all duration-300
              ${
                activeTab === cat
                  ? "text-white border-purple-600"
                  : "text-purple-600 border-purple-600/50 hover:border-purple-600 hover:text-purple-600"
              } border bg-white/5 backdrop-blur-sm overflow-hidden`}
          >
            {/* Background fill animation */}
            <div
              className={`absolute inset-0 bg-purple-600 transition-transform duration-300 -z-10 ${activeTab === cat ? "translate-y-0" : "translate-y-full group-hover:translate-y-[90%]"}`}
            />
            <span className="relative z-10">{cat}</span>
          </button>
        ))}
      </div>

      <div className="w-[80%] mx-auto h-[1px] bg-gradient-to-r from-transparent via-purple-600 to-transparent mb-12 "></div>

      <div className="flex flex-wrap gap-4 max-h-[40dvh] items-end justify-center relative rounded-xl max-w-[80%] mx-auto">
        {filteredSkills.map((skill, i) => {
          const randomRotation = Math.floor(Math.random() * 30) - 15;
          const randomX = Math.floor(Math.random() * 20) - 10;
          const randomY = Math.floor(Math.random() * 20) - 10;
          const randomZ = Math.floor(Math.random() * 50);

          return (
            <div
              key={skill.name}
              onMouseDown={(e) => handleMouseDown(e, skill.name)}
              className="skill-card group relative overflow-hidden px-8 py-4 h-16 border rounded-xl bg-purple-600 text-white hover:border-purple-500 transition-colors duration-300 cursor-pointer"
              style={{
                transform: `rotate(${randomRotation}deg) translate(${randomX}px, ${randomY}px)`,
                zIndex: randomZ,
                margin: "-5px", // This forces the overlap
              }}
            >
              {/* Animated Background Overlay */}
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out -z-10" />

              <span className="text-lg md:text-xl font-medium group-hover:text-purple-600 transition-colors">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SkillsSection;
