"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, registerGsapPlugins } from "./gsap-register";

type Props = {
  children: React.ReactNode;
  stagger?: number;
  y?: number;
  duration?: number;
  start?: string;
  scale?: number;
  ease?: string;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
  selector?: string;
};

export default function StaggerGroup({
  children,
  stagger = 0.08,
  y = 28,
  duration = 0.8,
  start = "top 90%",
  scale,
  ease = "power3.out",
  className,
  as = "div",
  selector,
}: Props) {
  registerGsapPlugins();
  const ref = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const targets = selector
        ? Array.from(el.querySelectorAll<HTMLElement>(selector))
        : (Array.from(el.children) as HTMLElement[]);
      if (targets.length === 0) return;

      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced) {
        gsap.set(targets, { autoAlpha: 1, y: 0, scale: 1 });
        return;
      }

      const fromVars: gsap.TweenVars = { autoAlpha: 0, y };
      const toVars: gsap.TweenVars = {
        autoAlpha: 1,
        y: 0,
        duration,
        stagger,
        ease,
        scrollTrigger: {
          trigger: el,
          start,
          once: true,
        },
      };
      if (scale !== undefined) {
        fromVars.scale = scale;
        toVars.scale = 1;
      }

      gsap.set(targets, fromVars);
      gsap.to(targets, toVars);
    },
    { scope: ref, dependencies: [selector] }
  );

  const Tag = as as React.ElementType;
  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
