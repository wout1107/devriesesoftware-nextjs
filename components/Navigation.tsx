"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  Home,
  User,
  Briefcase,
  FolderOpen,
  DollarSign,
  Newspaper,
  Mail,
  Menu,
  X,
  Linkedin,
  Github,
  Facebook,
} from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap, registerGsapPlugins } from "./animations/gsap-register";
import "../styles/Navigation.css";

const navItems = [
  { path: "/", icon: Home, label: "Home" },
  { path: "/over-ons", icon: User, label: "Over ons" },
  { path: "/services", icon: Briefcase, label: "Diensten" },
  { path: "/portfolio", icon: FolderOpen, label: "Portfolio" },
  { path: "/blog", icon: Newspaper, label: "Blog" },
  { path: "/pricing", icon: DollarSign, label: "Prijzen" },
  { path: "/contact", icon: Mail, label: "Contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement | null>(null);
  const brandRef = useRef<HTMLDivElement | null>(null);
  const linksRef = useRef<HTMLUListElement | null>(null);
  const footerRef = useRef<HTMLDivElement | null>(null);
  const toggleIconRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile && isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useGSAP(
    () => {
      registerGsapPlugins();
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        if (brandRef.current) {
          tl.from(brandRef.current, { y: -30, autoAlpha: 0, duration: 0.7 }, 0);
        }
        if (linksRef.current) {
          tl.from(
            linksRef.current.children,
            { x: -24, autoAlpha: 0, duration: 0.55, stagger: 0.07 },
            0.15
          );
        }
        if (footerRef.current) {
          tl.from(footerRef.current, { y: 30, autoAlpha: 0, duration: 0.7 }, 0.4);
        }
      });
      mm.add("(prefers-reduced-motion: reduce)", () => {
        if (brandRef.current) gsap.set(brandRef.current, { autoAlpha: 1, y: 0 });
        if (linksRef.current)
          gsap.set(linksRef.current.children, { autoAlpha: 1, x: 0 });
        if (footerRef.current) gsap.set(footerRef.current, { autoAlpha: 1, y: 0 });
      });
    },
    { scope: navRef }
  );

  useGSAP(
    () => {
      const el = toggleIconRef.current;
      if (!el) return;
      gsap.fromTo(
        el,
        { rotate: isOpen ? -90 : 90, autoAlpha: 0 },
        { rotate: 0, autoAlpha: 1, duration: 0.25, ease: "power2.out" }
      );
    },
    { dependencies: [isOpen] }
  );

  return (
    <>
      <button
        className={`mobile-toggle ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Sluit navigatiemenu" : "Open navigatiemenu"}
        aria-expanded={isOpen}
        aria-controls="main-navigation"
      >
        <span ref={toggleIconRef} style={{ display: "inline-flex" }}>
          {isOpen ? (
            <X size={24} aria-hidden="true" />
          ) : (
            <Menu size={24} aria-hidden="true" />
          )}
        </span>
      </button>

      {isOpen && (
        <div className="nav-backdrop" onClick={() => setIsOpen(false)} />
      )}

      <nav
        ref={navRef}
        className={`vertical-nav ${isOpen ? "open" : ""}`}
        id="main-navigation"
        aria-label="Hoofdnavigatie"
      >
        <div ref={brandRef} className="nav-brand">
          <Link href="/" aria-label="Ga naar homepage">
            <Image
              src="/assets/devriesesoftware.webp"
              alt="Devriese Software logo"
              className="nav-logo"
              width={80}
              height={80}
              priority
            />
          </Link>
        </div>

        <ul ref={linksRef} className="nav-links" role="list">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.path;
            return (
              <li
                key={item.path}
                className={isActive ? "active" : ""}
                role="listitem"
              >
                <Link
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  aria-label={`Ga naar ${item.label}`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span className="nav-icon-wrap">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div ref={footerRef} className="nav-footer">
          <div
            className="social-links"
            role="list"
            aria-label="Social media links"
          >
            <a
              href="https://www.facebook.com/devriesesoftware"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Bezoek onze Facebook pagina (opent in nieuw venster)"
              role="listitem"
              className="social-icon"
            >
              <Facebook size={20} aria-hidden="true" />
            </a>
            <a
              href="https://github.com/Wout1107"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Bezoek onze GitHub pagina (opent in nieuw venster)"
              role="listitem"
              className="social-icon"
            >
              <Github size={20} aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/wout-devriese-a0b460273/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Bezoek onze LinkedIn pagina (opent in nieuw venster)"
              role="listitem"
              className="social-icon"
            >
              <Linkedin size={20} aria-hidden="true" />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
