import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";

const Marquee = () => {
  const scrollingText = useRef(null);
  const tween = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      tween.current = gsap
        .to(scrollingText.current, {
          xPercent: -50,
          repeat: -1,
          duration: 20,
          ease: "linear",
        })
        .totalProgress(0.5);

      const handleWheel = (e) => {
        if (e.deltaY > 0) {
          // Scrolling Down -> Move Left
          gsap.to(tween.current, { timeScale: 1, duration: 0.5 });
        } else {
          // Scrolling Up -> Move Right
          gsap.to(tween.current, { timeScale: -1, duration: 0.5 });
        }
      };

      window.addEventListener("wheel", handleWheel);

      return () => window.removeEventListener("wheel", handleWheel);
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-[120%] -translate-y-10 -translate-x-10 rotate-[8deg] h-32 bg-purple-600 overflow-hidden flex items-center relative border-y border-black/10">
      <div
        ref={scrollingText}
        className="flex whitespace-nowrap will-change-transform"
      >
        <div className="flex gap-12 text-5xl uppercase text-white px-6 font-[1000] tracking-tighter">
          <span>Web Developer</span>
          <span>●</span>
          <span>UI/UX Designer</span>
          <span>●</span>
          <span>Freelance</span>
          <span>●</span>
          <span>Available 2026</span>
          <span>●</span>
        </div>
        <div className="flex gap-12 text-5xl uppercase text-white px-6 font-[1000] tracking-tighter">
          <span>Web Developer</span>
          <span>●</span>
          <span>UI/UX Designer</span>
          <span>●</span>
          <span>Freelance</span>
          <span>●</span>
          <span>Available 2026</span>
          <span>●</span>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
