import React, {useRef, useLayoutEffect} from "react";
import { FiArrowUpRight } from "react-icons/fi";
import gsap from "gsap";

const Hero = () => {
  const scope = useRef(null);
 const splitText = (text) => {
   return text.split("").map((char, i) => (
     <span key={i} className="letter inline-block transform-gpu">
       {char === " " ? "\u00A0" : char}
     </span>
   ));
 };


useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    const letters = gsap.utils.toArray(".letter");

    gsap.from(letters, {
      duration: 1.5,
      opacity: 0,
      // Randomized 3D start positions
      x: () => Math.floor(Math.random() * 200) - 100,
      y: () => Math.floor(Math.random() * 200) - 100,
      z: () => Math.floor(Math.random() * 500) - 250,
      rotate: () => Math.floor(Math.random() * 90) - 45,
      rotateX: () => Math.floor(Math.random() * 180) - 90,
      rotateY: () => Math.floor(Math.random() * 180) - 90,

      stagger: {
        each: 0.05,
        from: "random", // Letters reveal in random order
      },
      ease: "expo.out",
      delay: 0.3,
    });

    // 2. HOVER REACTION: Make letters "jitter" or bounce when hovered
    letters.forEach((letter) => {
      letter.addEventListener("mouseenter", () => {
        gsap.to(letter, {
          y: -20,
          rotateX: 20,
          color: "#9333ea",
          duration: 0.3,
          ease: "back.out(3)",
        });
      });

      letter.addEventListener("mouseleave", () => {
        gsap.to(letter, {
          y: 0,
          rotateX: 0,
          color: "inherit",
          duration: 0.5,
          ease: "elastic.out(1, 0.3)",
        });
      });
    });
  }, scope);

  return () => ctx.revert();
}, []);


  return (
    <div
      ref={scope}
      className="relative min-h-screen bg-white text-black font-sans overflow-hidden"
    >
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Left Vertical Spine */}
        <div className="absolute left-[6%] md:left-[8%] h-full w-[1px] bg-black/10 flex flex-col justify-between py-12 items-center top-20">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/20">
            2026
          </span>
          <span className="rotate-[-90deg] whitespace-nowrap text-[8px] font-black uppercase tracking-[1.2em] text-black">
            Crafting Digital Identities
          </span>
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/20">
            Index
          </span>
        </div>

        {/* Right Vertical Spine (The Balanced Counter-part) */}
        <div className="absolute right-[6%] md:right-[8%] h-full w-[1px] bg-black/10 flex flex-col justify-end py-12 items-center">
          <div className="flex flex-col gap-8 items-center">
            <span className="rotate-90 whitespace-nowrap text-[8px] font-bold uppercase tracking-[0.5em] text-black/80">
              Available for Hire
            </span>
          </div>
        </div>

        {/* Top Horizontal Rule (Optional: adds a blueprint feel) */}
        <div className="absolute top-[12%] left-0 w-full h-[1px] bg-black/[0.09]" />
      </div>

      {/* --- MAIN CONTENT --- */}
      <main className="relative z-20 pt-32 pb-20 flex flex-col items-center">
        {/* Intro Text with Mask */}
        <div className="mb-10 overflow-hidden">
          <p className="text-lg md:text-xl font-medium text-black tracking-tight animate-slide-up">
            👋 Hi, My name is{" "}
            <span className="text-black font-bold">Bharat Sharma</span> and I am
            a freelance
          </p>
        </div>

        {/* HERO TYPOGRAPHY */}
        <div className="w-full max-w-[1800px] px-4 flex flex-col items-center relative group">
          <h1 className="text-[14vw] md:text-[12rem] font-[1000] leading-[0.8] tracking-tighter uppercase transition-all duration-700 hover:skew-x-[-5deg]">
            {splitText("webdeveloper")}
          </h1>

          <div className="relative mt-2 md:mt-6">
            <h1 className="text-[14vw] md:text-[13rem] font-[1000] leading-[0.8] tracking-tighter uppercase text-black stroke-text group-hover:text-black transition-all duration-1000 text-center">
              <span className="text-purple-600"> & </span>
              {splitText("frontend")}
            </h1>
            {/* The Floating Arrow is now integrated closer to the text */}
            <div className="absolute -right-4 md:-right-20 top-0 w-16 h-16 md:w-24 md:h-24 bg-black text-white rounded-full flex items-center justify-center hover:bg-purple-600 hover:text-white transition-all duration-500 cursor-pointer shadow-2xl scale-0 group-hover:scale-100 origin-bottom-left">
              <FiArrowUpRight className="text-4xl" />
            </div>
          </div>
        </div>

        {/* CTA SECTION */}
        {/* --- BALANCED ACTIONS & BIO SECTION --- */}
        <div className="w-full max-w-[1400px] mt-20 px-6 md:px-12 grid grid-cols-1 lg:grid-cols-5 items-start gap-12">
          {/* 1. LEFT COLUMN: Intentional Empty Space */}
          <div className="hidden lg:block">
            {/* This space stays empty to drive focus to the center */}
          </div>

          {/* 2. MIDDLE COLUMN: The Action Center */}
          <div className="col-span-2 flex flex-col w-full items-center h-full">
            <div className="flex gap-4 flex-col sm:flex-row items-top">
              <button className="relative px-10 py-5 overflow-hidden group rounded-sm border border-black transition-all hover:text-white w-full sm:w-auto text-center h-fit hover:border-purple-600">
                <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.3em]">
                  Download Resume
                </span>
                <div className="absolute inset-0 bg-purple-600 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
              </button>

              <button className="px-10 py-6 bg-black text-white text-[10px] font-black uppercase tracking-[0.3em] hover:bg-purple-600 transition-all shadow-xl active:scale-95 w-full sm:w-auto text-center h-fit border rounded-sm border-black hover:border-purple-600">
                Contact Me!
              </button>
            </div>

            <div className="group relative w-24 h-24 mt-12 rounded-full border border-black flex justify-center items-center text-4xl text-black overflow-hidden cursor-pointer transition-colors duration-500">
              {/* The Background Fill Layer */}
              <div className="absolute inset-0 bg-purple-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />

              {/* The Arrow Icon */}
              <FiArrowUpRight className="relative z-10 rotate-[135deg] group-hover:text-white transition-all duration-500 ease-out" />
            </div>
          </div>

          {/* 3. RIGHT COLUMN: The About Brief */}
          <div
            className="col-span-2 flex flex-col gap-6 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-purple-600 whitespace-nowrap">
                  01 // Narrative
                </span>
                <div className="h-[1px] w-full bg-black/10" />
              </div>

              <p className="text-[13px] md:text-[14px] leading-[1.8] text-black/80 tracking-tight font-medium text-justify">
                <span className="text-black font-bold">
                  A software developer
                </span>{" "}
                with ~3 years of hands-on experience building dynamic and
                responsive web applications.
                <br />I work across both front-end and back-end development,
                using technologies like{" "}
                <span className="text-black font-bold">
                  React, Next.js, and TypeScript
                </span>{" "}
                to deliver scalable and user-focused solutions. I also have
                experience integrating{" "}
                <span className="text-purple-600 font-bold underline decoration-purple-600/20 underline-offset-4">
                  AI-driven automation
                </span>{" "}
                to streamline workflows and enhance application efficiency.
                Passionate about continuous learning, I enjoy collaborating with
                teams to transform innovative ideas into high-quality products.
              </p>
            </div>

            {/* Metadata Footer */}
            <div className="flex items-center justify-between border-t border-black/5">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-black/90">
                  Location
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-black/70">
                  India // Mathura
                </span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-green-50 rounded-full border border-green-100">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[9px] font-black uppercase tracking-widest text-green-700">
                  Open to Work
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <style
        dangerouslySetInnerHTML={{
          __html: `
          .stroke-text {
            -webkit-text-stroke: 1.5px rgba(255,255,255,0.2);
          }
          
          @keyframes slide-up {
            from { transform: translateY(100%); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }

          .animate-slide-up {
            animation: slide-up 1s cubic-bezier(0.23, 1, 0.32, 1) forwards;
          }

          /* Perspective tilt for the whole main section */
          main {
              perspective: 1000px;
          }
        `,
        }}
      />
    </div>
  );
};

export default Hero;
