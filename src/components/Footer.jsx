import React, { useState, useEffect } from "react";
import { SiGithub, SiLinkedin, SiX, SiGmail } from "react-icons/si";
import { FiArrowUpRight, FiCommand } from "react-icons/fi";

const Footer = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }),
      );
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer id="footer" className="bg-white border-t-[1px] pt-16 sm:pt-24 selection:bg-[#9D3CFF] selection:text-white overflow-hidden">
      {/* 1. HUGE MARQUEE CTA */}
      <div className="border-y-[1px] border-black py-3 sm:py-4 bg-black text-white group cursor-pointer -rotate-[4deg] md:-rotate-[6deg] w-[120%] -translate-x-5">
        <div className="flex whitespace-nowrap animate-marquee group-hover:pause">
          {[1, 2, 3, 4].map((i) => (
            <h2
              key={i}
              className="text-xl sm:text-3xl md:text-[4vw] font-[1000] uppercase tracking-tighter inline-block mx-3 sm:mx-4 transition-colors group-hover:text-[#9D3CFF]"
            >
              LET'S WORK — GET IN TOUCH —
            </h2>
          ))}
        </div>
      </div>

      <div className="max-w-full px-4 sm:px-6 md:px-12 mt-16 sm:mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 border-b-[1px] border-black pb-12 sm:pb-20">
          {/* 2. THE BIG EMAIL */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            <div className="mb-6 lg:mb-0">
              <p className="font-black text-[#9D3CFF] uppercase text-[10px] sm:text-xs tracking-widest mb-3 sm:mb-4 flex items-center gap-2">
                <FiCommand className="animate-spin-slow" /> Status: Available
                2026
              </p>
              <a
                href="mailto:bharat30.dev@gmail.com"
                className="text-2xl sm:text-4xl md:text-[5vw] font-black uppercase leading-tight tracking-tighter hover:text-[#9D3CFF] transition-all break-all"
              >
                bharat30.dev@gmail.com
              </a>
            </div>
          </div>

          {/* 3. STRUCTURED SOCIAL GRID */}
          <div className="lg:col-span-4 border-l-0 lg:border-l-[1px] border-black pl-0 lg:pl-12 flex flex-col justify-between">
            <div className="grid grid-cols-2 gap-px bg-black border-[1px] border-black">
              <SocialTile className="" Icon={SiGithub} label="Github" href="https://github.com/Bharat8533" />
              <SocialTile className="" Icon={SiLinkedin} label="Linkedin" href="https://www.linkedin.com/in/bharatdev01" />
              <SocialTile className="col-span-2" Icon={SiGmail} label="Email" href="mailto:bharat30.dev@gmail.com" />
            </div>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="mt-6 sm:mt-8 group flex items-center justify-between w-full border-[1px] border-black p-4 sm:p-6 hover:bg-black hover:text-white transition-all active:scale-95"
            >
              <span className="font-black uppercase text-[10px] sm:text-xs tracking-widest">
                Back to top
              </span>
              <FiArrowUpRight className="text-xl sm:text-2xl group-hover:rotate-45 transition-transform" />
            </button>
          </div>
        </div>

        {/* 4. TERMINAL STYLE COPYRIGHT */}
        <div className="py-6 sm:py-8 flex flex-col md:flex-row justify-between items-center text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-center sm:text-left">
          <p>© 2026 Bharat Sharma — Designed & Engineered</p>
        </div>
      </div>

      {/* Tailwind Animation in Global CSS / Style tag */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `,
        }}
      />
    </footer>
  );
};

const SocialTile = ({ Icon, label, href, className = "" }) => (
  <a
    href={href}
    className={`bg-white p-6 flex flex-col items-center gap-2 hover:bg-[#9D3CFF] hover:text-white transition-colors group ${className}`}
  >
    <Icon className="text-2xl" />
    <span className="text-[10px] font-black uppercase opacity-0 group-hover:opacity-100 transition-opacity">
      {label}
    </span>
  </a>
);

export default Footer;
