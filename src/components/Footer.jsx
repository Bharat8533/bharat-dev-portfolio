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
    <footer className="bg-white border-t-[1px] pt-32 selection:bg-[#9D3CFF] selection:text-white overflow-hidden">
      {/* 1. HUGE MARQUEE CTA (Matches your background text style) */}
      <div className="border-y-[1px] border-black py-4 md:py-4 bg-black text-white group cursor-pointer -rotate-[6deg] w-[120%] -translate-x-5">
        <div className="flex whitespace-nowrap animate-marquee group-hover:pause">
          {[1, 2, 3, 4].map((i) => (
            <h2
              key={i}
              className="text-[4vw] font-[1000] uppercase tracking-tighter inline-block mx-4 transition-colors group-hover:text-[#9D3CFF]"
            >
              LET'S WORK — GET IN TOUCH —
            </h2>
          ))}
        </div>
      </div>

      <div className="max-w-full px-6 md:px-12 mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 border-b-[1px] border-black pb-20">
          {/* 2. THE BIG EMAIL (No more circles, just pure text) */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            <div>
              <p className="font-black text-[#9D3CFF] uppercase text-xs tracking-widest mb-4 flex items-center gap-2">
                <FiCommand className="animate-spin-slow" /> Status: Available
                2026
              </p>
              <a
                href="mailto:bharat30.dev@gmail.com"
                className="text-[5vw] font-black uppercase leading-none tracking-tighter hover:text-[#9D3CFF] transition-all break-all"
              >
                bharat30.dev@gmail.com
              </a>
            </div>
          </div>

          {/* 3. STRUCTURED SOCIAL GRID */}
          <div className="lg:col-span-4 border-l-[1px] border-black pl-0 lg:pl-12 flex flex-col justify-between">
            <div className="grid grid-cols-2 gap-px bg-black border-[1px] border-black">
              <SocialTile Icon={SiGithub} label="Github" href="#" />
              <SocialTile Icon={SiLinkedin} label="Linkedin" href="#" />
              <SocialTile Icon={SiX} label="Twitter" href="#" />
              <SocialTile Icon={SiGmail} label="Email" href="#" />
            </div>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="mt-8 group flex items-center justify-between w-full border-[1px] border-black p-6 hover:bg-black hover:text-white transition-all"
            >
              <span className="font-black uppercase text-xs tracking-widest">
                Back to top
              </span>
              <FiArrowUpRight className="text-2xl group-hover:rotate-45 transition-transform" />
            </button>
          </div>
        </div>

        {/* 4. TERMINAL STYLE COPYRIGHT */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-[0.2em]">
          <p>© 2026 Bharat Sharma — Designed</p>
          <div className="flex gap-6 mt-4 md:mt-0 opacity-50">
            <span>Updated On: 25.02.26</span>
          </div>
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

const SocialTile = ({ Icon, label, href }) => (
  <a
    href={href}
    className="bg-white p-6 flex flex-col items-center gap-2 hover:bg-[#9D3CFF] hover:text-white transition-colors group"
  >
    <Icon className="text-2xl" />
    <span className="text-[10px] font-black uppercase opacity-0 group-hover:opacity-100 transition-opacity">
      {label}
    </span>
  </a>
);

export default Footer;
