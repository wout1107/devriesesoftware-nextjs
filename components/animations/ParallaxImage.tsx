"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, registerGsapPlugins } from "./gsap-register";

type Props = {
  children: React.ReactNode;
  shift?: number;
  className?: string;
};

export default function ParallaxImage({ children, shift = 12, className }: Props) {
  registerGsapPlugins();
  const ref = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const inner = el.firstElementChild as HTMLElement | null;
      if (!inner) return;

      const mm = gsap.matchMedia();
      mm.add(
        "(min-width: 769px) and (prefers-reduced-motion: no-preference)",
        () => {
          gsap.fromTo(
            inner,
            { yPercent: shift },
            {
              yPercent: -shift,
              ease: "none",
              scrollTrigger: {
                trigger: el,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        }
      );
    },
    { scope: ref }
  );

  return (
    <div
      ref={ref}
      className={className}
      style={{ overflow: "hidden", position: "relative" }}
    >
      {children}
    </div>
  );
}
