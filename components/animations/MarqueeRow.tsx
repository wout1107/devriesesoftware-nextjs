"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, registerGsapPlugins } from "./gsap-register";

type Props = {
  children: React.ReactNode;
  speed?: number;
  reverse?: boolean;
  pauseOnHover?: boolean;
  className?: string;
};

export default function MarqueeRow({
  children,
  speed = 40,
  reverse = false,
  pauseOnHover = true,
  className,
}: Props) {
  registerGsapPlugins();
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const track = trackRef.current;
      if (!track) return;

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const half = track.scrollWidth / 2;
        if (!half) return;
        const tween = gsap.to(track, {
          x: reverse ? half : -half,
          duration: half / speed,
          ease: "none",
          repeat: -1,
        });
        gsap.set(track, { x: reverse ? -half : 0 });

        if (pauseOnHover && wrapperRef.current) {
          const w = wrapperRef.current;
          const onEnter = () => tween.timeScale(0.15);
          const onLeave = () => tween.timeScale(1);
          w.addEventListener("mouseenter", onEnter);
          w.addEventListener("mouseleave", onLeave);
          return () => {
            w.removeEventListener("mouseenter", onEnter);
            w.removeEventListener("mouseleave", onLeave);
            tween.kill();
          };
        }
        return () => {
          tween.kill();
        };
      });
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(track, { x: 0 });
      });
    },
    { scope: wrapperRef }
  );

  return (
    <div
      ref={wrapperRef}
      className={className}
      style={{ overflow: "hidden", width: "100%" }}
    >
      <div
        ref={trackRef}
        style={{ display: "inline-flex", whiteSpace: "nowrap", willChange: "transform" }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
