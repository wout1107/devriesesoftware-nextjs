"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, registerGsapPlugins } from "./gsap-register";

type Props = {
  children: React.ReactNode;
  strength?: number;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  ariaLabel?: string;
  type?: "button" | "submit" | "reset";
};

export default function MagneticButton({
  children,
  strength = 0.35,
  className,
  as = "button",
  href,
  onClick,
  ariaLabel,
  type,
}: Props) {
  registerGsapPlugins();
  const ref = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const mm = gsap.matchMedia();
      mm.add(
        "(min-width: 769px) and (prefers-reduced-motion: no-preference) and (hover: hover)",
        () => {
          const xTo = gsap.quickTo(el, "x", { duration: 0.45, ease: "power3.out" });
          const yTo = gsap.quickTo(el, "y", { duration: 0.45, ease: "power3.out" });

          const handleMove = (e: MouseEvent) => {
            const rect = el.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;
            xTo((e.clientX - cx) * strength);
            yTo((e.clientY - cy) * strength);
          };
          const handleLeave = () => {
            xTo(0);
            yTo(0);
          };

          el.addEventListener("mousemove", handleMove);
          el.addEventListener("mouseleave", handleLeave);
          return () => {
            el.removeEventListener("mousemove", handleMove);
            el.removeEventListener("mouseleave", handleLeave);
          };
        }
      );
    },
    { scope: ref }
  );

  const Tag = as as React.ElementType;
  const props: Record<string, unknown> = {
    ref,
    className,
    "aria-label": ariaLabel,
  };
  if (as === "a") props.href = href;
  if (as === "button") {
    props.type = type ?? "button";
    props.onClick = onClick;
  }
  return <Tag {...props}>{children}</Tag>;
}
