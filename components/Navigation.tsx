"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Home,
  Briefcase,
  FolderOpen,
  DollarSign,
  Mail,
  Menu,
  X,
  Linkedin,
  Github,
  Facebook,
} from "lucide-react";
import "../styles/Navigation.css";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const main = document.querySelector(".main-content") as HTMLElement;
    if (!main) return;

    const isMobile = window.innerWidth <= 768;

    if (isMobile && isOpen) {
      main.style.overflow = "hidden";
      main.style.height = "100vh";
      main.style.position = "fixed";
      main.style.width = "100%";
    } else {
      main.style.overflow = "";
      main.style.height = "";
      main.style.position = "";
      main.style.width = "";
    }

    return () => {
      main.style.overflow = "";
      main.style.height = "";
      main.style.position = "";
      main.style.width = "";
    };
  }, [isOpen]);

  const navItems = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/services", icon: Briefcase, label: "Diensten" },
    { path: "/portfolio", icon: FolderOpen, label: "Portfolio" },
    { path: "/pricing", icon: DollarSign, label: "Prijzen" },
    { path: "/contact", icon: Mail, label: "Contact" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <>
      <motion.button
        className={`mobile-toggle ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{ rotate: isOpen ? 90 : 0 }}
        aria-label={isOpen ? "Sluit navigatiemenu" : "Open navigatiemenu"}
        aria-expanded={isOpen}
        aria-controls="main-navigation"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} aria-hidden="true" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu size={24} aria-hidden="true" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {isOpen && (
        <div className="nav-backdrop" onClick={() => setIsOpen(false)} />
      )}

      <nav
        className={`vertical-nav ${isOpen ? "open" : ""}`}
        id="main-navigation"
        aria-label="Hoofdnavigatie"
      >
        <motion.div
          className="nav-brand"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
        >
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
        </motion.div>

        <motion.ul
          className="nav-links"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          role="list"
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.path;

            return (
              <motion.li
                key={item.path}
                className={isActive ? "active" : ""}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                role="listitem"
              >
                <Link
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  aria-label={`Ga naar ${item.label}`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <motion.div
                    animate={
                      isActive
                        ? {
                          rotate: [0, -5, 5, -5, 0],
                          scale: [1, 1.1, 1],
                        }
                        : {}
                    }
                    transition={{
                      duration: 0.5,
                      repeat: isActive ? Infinity : 0,
                      repeatDelay: 3,
                    }}
                  >
                    <Icon size={20} aria-hidden="true" />
                  </motion.div>
                  <span>{item.label}</span>
                </Link>
              </motion.li>
            );
          })}
        </motion.ul>

        <motion.div
          className="nav-footer"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.6 }}
        >
          <div
            className="social-links"
            role="list"
            aria-label="Social media links"
          >
            <motion.a
              href="https://www.facebook.com/devriesesoftware"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Bezoek onze Facebook pagina (opent in nieuw venster)"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              role="listitem"
              className="social-icon"
            >
              <Facebook size={20} aria-hidden="true" />
            </motion.a>
            <motion.a
              href="https://github.com/Wout1107"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Bezoek onze GitHub pagina (opent in nieuw venster)"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
              role="listitem"
              className="social-icon"
            >
              <Github size={20} aria-hidden="true" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/wout-devriese-a0b460273/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Bezoek onze LinkedIn pagina (opent in nieuw venster)"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              role="listitem"
              className="social-icon"
            >
              <Linkedin size={20} aria-hidden="true" />
            </motion.a>
          </div>
        </motion.div>
      </nav>
    </>
  );
}
