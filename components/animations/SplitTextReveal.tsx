"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, SplitText, registerGsapPlugins } from "./gsap-register";

type Props = {
  children: React.ReactNode;
  type?: "lines" | "words" | "chars";
  stagger?: number;
  duration?: number;
  delay?: number;
  yPercent?: number;
  ease?: string;
  start?: string;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
};

export default function SplitTextReveal({
  children,
  type = "lines",
  stagger = 0.08,
  duration = 0.9,
  delay = 0,
  yPercent = 110,
  ease = "power3.out",
  start = "top 90%",
  className,
  as = "h2",
}: Props) {
  registerGsapPlugins();
  const ref = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced) {
        gsap.set(el, { autoAlpha: 1 });
        return;
      }

      const split = new SplitText(el, {
        type,
        mask: type === "lines" ? "lines" : undefined,
        linesClass: "split-line",
        wordsClass: "split-word",
        charsClass: "split-char",
      });
      const targets =
        type === "chars" ? split.chars : type === "words" ? split.words : split.lines;

      gsap.set(targets, { yPercent, autoAlpha: 0 });
      gsap.to(targets, {
        yPercent: 0,
        autoAlpha: 1,
        duration,
        delay,
        stagger,
        ease,
        scrollTrigger: {
          trigger: el,
          start,
          once: true,
        },
      });

      return () => {
        split.revert();
      };
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
