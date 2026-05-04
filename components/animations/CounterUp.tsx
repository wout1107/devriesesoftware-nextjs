"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, registerGsapPlugins } from "./gsap-register";

type Props = {
  to: number;
  from?: number;
  decimals?: number;
  duration?: number;
  start?: string;
  suffix?: string;
  prefix?: string;
  className?: string;
};

export default function CounterUp({
  to,
  from = 0,
  decimals = 0,
  duration = 1.6,
  start = "top 85%",
  suffix = "",
  prefix = "",
  className,
}: Props) {
  registerGsapPlugins();
  const ref = useRef<HTMLSpanElement | null>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const factor = Math.pow(10, decimals);
      const obj = { val: from };
      el.textContent = `${prefix}${from.toFixed(decimals)}${suffix}`;

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.to(obj, {
          val: to,
          duration,
          ease: "power2.out",
          onUpdate: () => {
            const rounded = Math.round(obj.val * factor) / factor;
            el.textContent = `${prefix}${rounded.toFixed(decimals)}${suffix}`;
          },
          scrollTrigger: {
            trigger: el,
            start,
            once: true,
          },
        });
      });
      mm.add("(prefers-reduced-motion: reduce)", () => {
        el.textContent = `${prefix}${to.toFixed(decimals)}${suffix}`;
      });
    },
    { scope: ref, dependencies: [to, from, decimals] }
  );

  return <span ref={ref} className={className} />;
}
