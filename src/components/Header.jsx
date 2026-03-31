import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaDribbble, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { HiOutlineMenuAlt4, HiX } from 'react-icons/hi';

const AmazingHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const links = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
    { name: 'Projects', url: '/projects' },
    { name: 'Contact', url: '/contact' }
  ];

  const crossButtonRef = useRef(null);

  return (
    <>
      <header className="fixed top-0 w-full px-8 py-2 md:px-20 transition-all duration-500 backdrop-blur-sm bg-blend-hard-light z-50">
        <div className="max-w-[1920px] mx-auto grid grid-cols-3 items-center">
          {/* LEFT: THE STATEMENT LOGO */}
          <div className="flex justify-start">
            <Link to="/" className="group flex items-center">
              <span className="text-4xl md:text-5xl font-[1000] tracking-[-0.08em] uppercase leading-none">
                BHA
                <span className="text-purple-600 group-hover:tracking-normal transition-all duration-500">
                  R
                </span>
                AT
              </span>
              <div className="w-2 h-2 bg-purple-600 rounded-full mt-4 ml-1 group-hover:scale-[2.5] transition-transform duration-500"></div>
            </Link>
          </div>

          {/* MIDDLE: THE FLOATING ICON ISLAND */}
          <div className="flex justify-center">
            {/* Main Container: Structured Glass Tray */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-2 bg-white/70 backdrop-blur-2xl border border-gray-100 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.04)]">
              {/* 1. LIVE STATUS INDICATOR */}
              <div className="flex items-center gap-2.5 px-4 py-2 bg-purple-50 rounded-md border border-purple-100 mr-2">
                <div className="relative flex h-2 w-2">
                  {/* The Dipper/Pulsing Effect */}
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </div>
                <span className="text-[9px] font-[900] uppercase tracking-[0.2em] text-gray-700">
                  Online
                </span>
              </div>

              {/* 2. ICON GROUP */}
              <div className="flex items-center gap-1">
                {[
                  { icon: <FaInstagram size={18} />, label: "Instagram" },
                  { icon: <FaDribbble size={18} />, label: "Dribbble" },
                  { icon: <FaLinkedinIn size={18} />, label: "LinkedIn" },
                  { icon: <FaGithub size={18} />, label: "Github" },
                ].map((item, index) => (
                  <React.Fragment key={index}>
                    <a
                      href="#"
                      className="group/item relative w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-500 hover:bg-black"
                    >
                      {/* Icon - Turns white and rotates on hover */}
                      <div className="relative z-10 text-gray-400 group-hover/item:text-white group-hover/item:rotate-[360deg] transition-all duration-700">
                        {item.icon}
                      </div>

                      {/* BOTTOM TOOLTIP - Positioned below the dock */}
                      <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-black text-white text-[8px] font-black uppercase tracking-[0.2em] rounded-md opacity-0 group-hover/item:opacity-100 group-hover/item:-bottom-10 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-xl">
                        {item.label}
                        {/* Arrow pointing UP to the dock */}
                        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black rotate-45" />
                      </span>
                    </a>

                    {/* Subtle separator dot (except after the last item) */}
                    {index < 3 && (
                      <div className="w-1 h-1 bg-gray-200 rounded-full mx-0.5" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: THE INTERACTIVE TRIGGER */}
          <div className="flex justify-end items-center gap-8">
            <div className="hidden xl:flex flex-col items-end leading-none">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-1">
                Interaction
              </span>
              <span className="text-xs font-bold text-black uppercase">
                Open Menu
              </span>
            </div>
            <button
              onClick={() => setMenuOpen(true)}
              className="relative w-20 h-20 flex items-center justify-center bg-black text-white rounded-full group overflow-hidden transition-all duration-500 hover:shadow-2xl active:scale-90"
            >
              <HiOutlineMenuAlt4
                size={32}
                className="relative z-10 group-hover:rotate-180 transition-transform duration-500"
              />
              {/* Hover background filler */}
              <div className="absolute inset-0 bg-purple-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </button>
          </div>
        </div>
      </header>

      {/* FULL SCREEN MENU OVERLAY */}
      <div
        className={`fixed inset-0 z-[2000] bg-[#0A0A0A] transition-all duration-[1000ms] ease-[cubic-bezier(0.85,0,0.15,1)] ${menuOpen ? "translate-y-0" : "-translate-y-full"}`}
      >
        {/* Background Large Text (Decorative) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <h2
            className={`text-[25vw] font-black text-white/[0.02] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ${menuOpen ? "scale-100 opacity-100" : "scale-150 opacity-0"}`}
          >
            {hoveredIndex !== null ? links[hoveredIndex].name : "MENU"}
          </h2>
        </div>

        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-12 right-12 w-20 h-20"
        >
          <div
            
            className="w-full h-full border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-purple-600 transition-all z-50 relative peer"
          >
            <HiX size={40} />
            <div className="w-full h-full absolute top-0 rounded-full peer group-hover:bg-green-600"></div>
          </div>
        </button>

        <div className="h-full flex flex-col md:flex-row items-center justify-between px-10 md:px-24 relative z-10">
          {/* Main Navigation with Masked Stagger Effect */}
          <nav className="flex flex-col">
            {links.map((link, index) => (
              <div key={index} className="overflow-hidden group">
                <Link
                  to={link.url}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-baseline gap-8 py-2 transition-all duration-[800ms] ease-out ${menuOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
                  style={{
                    transitionDelay: `${menuOpen ? 400 + index * 100 : 0}ms`,
                  }}
                >
                  <span className="text-purple-600 font-mono text-xl font-bold italic">
                    0{index + 1}
                  </span>
                  <h2 className="text-6xl md:text-[8vw] font-black uppercase tracking-tighter leading-none text-white/20 group-hover:text-white group-hover:italic group-hover:tracking-normal transition-all duration-500">
                    {link.name}
                  </h2>
                </Link>
              </div>
            ))}
          </nav>

          {/* Sidebar Info - Staggered Fade */}
          <div
            className={`hidden lg:flex flex-col items-end gap-16 text-right transition-all duration-1000 delay-700 ${menuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
          >
            <div className="space-y-4">
              <h4 className="text-purple-600 uppercase tracking-[0.4em] text-[10px] font-black">
                Social Channels
              </h4>
              <div className="flex flex-col text-3xl font-bold text-white space-y-2">
                {["Instagram", "LinkedIn", "GitHub"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="hover:text-purple-600 hover:translate-x-[-10px] transition-all duration-300"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-purple-600 uppercase tracking-[0.4em] text-[10px] font-black">
                Get In Touch
              </h4>
              <p className="text-3xl font-bold text-white border-b-2 border-purple-600 pb-2">
                bharat30.dev@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Metadata */}
        <div className="absolute bottom-12 left-10 md:left-24 flex gap-12 text-[10px] font-black uppercase tracking-[0.5em] text-white/20">
          <span>Portfolio 2026</span>
          <span>Based in Mathura India</span>
        </div>
      </div>
    </>
  );
};

export default AmazingHeader;