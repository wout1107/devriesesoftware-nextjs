"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, registerGsapPlugins } from "./gsap-register";

type Props = {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  start?: string;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
};

export default function FadeUp({
  children,
  delay = 0,
  y = 32,
  duration = 0.9,
  start = "top 90%",
  className,
  as = "div",
}: Props) {
  registerGsapPlugins();
  const ref = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced) {
        gsap.set(el, { autoAlpha: 1, y: 0 });
        return;
      }
      gsap.set(el, { autoAlpha: 0, y });
      gsap.to(el, {
        autoAlpha: 1,
        y: 0,
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start,
          once: true,
        },
      });
    },
    { scope: ref }
  );

  const Tag = as as React.ElementType;
  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
