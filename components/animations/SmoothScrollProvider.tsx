"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { gsap, ScrollTrigger, registerGsapPlugins } from "./gsap-register";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function SmoothScrollProvider({ children, className }: Props) {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    registerGsapPlugins();

    const mm = gsap.matchMedia();

    mm.add(
      "(min-width: 769px) and (prefers-reduced-motion: no-preference)",
      () => {
        const lenis = new Lenis({
          duration: 1.1,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
          wheelMultiplier: 1,
          touchMultiplier: 1.4,
        });
        lenisRef.current = lenis;

        lenis.on("scroll", ScrollTrigger.update);

        const tickerCallback = (time: number) => lenis.raf(time * 1000);
        gsap.ticker.add(tickerCallback);
        gsap.ticker.lagSmoothing(0);

        ScrollTrigger.refresh();

        return () => {
          gsap.ticker.remove(tickerCallback);
          lenis.destroy();
          lenisRef.current = null;
        };
      }
    );

    const refreshOnLoad = () => ScrollTrigger.refresh();
    if (typeof document !== "undefined" && "fonts" in document) {
      document.fonts.ready.then(refreshOnLoad);
    }
    window.addEventListener("load", refreshOnLoad);

    return () => {
      mm.revert();
      window.removeEventListener("load", refreshOnLoad);
    };
  }, []);

  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
    const id = window.setTimeout(() => ScrollTrigger.refresh(), 50);
    return () => window.clearTimeout(id);
  }, [pathname]);

  return <main className={className ?? "main-content"}>{children}</main>;
}
