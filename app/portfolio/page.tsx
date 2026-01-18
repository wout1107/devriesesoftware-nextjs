"use client";

import { motion } from "framer-motion";
import { ExternalLink, Globe, Palette, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import "../../styles/Portfolio.css";

export default function Portfolio() {
  const projects = [
    {
      title: "PlanToParty",
      category: "Ticketing Platform",
      description:
        "Een compleet online ticketing platform met event management, admin paneel en organizer dashboard. Gebouwd voor festivals, concerten en evenementen.",
      image: "/assets/PlanToParty.webp",
      tags: ["Angular", "Node.js", "Admin Dashboard", "E-tickets"],
      link: "https://plantoparty.be",
      features: [
        "Online ticket verkoop systeem",
        "Event management dashboard",
        "Organizer controle paneel",
        "Admin paneel voor beheer",
        "QR-code ticket validatie",
        "Real-time event statistieken",
      ],
      color: "#424633",
    },
    {
      title: "Villa Massignano",
      category: "Vakantieverhuur Website",
      description:
        "Website voor een vakantievilla in Italië met geïntegreerde Google Agenda API voor beschikbaarheden, aanvraagformulier, uitgebreide informatie over de villa en omgeving.",
      image: "/assets/villamassignano.webp",
      tags: ["React", "Google Calendar API", "Booking System", "Responsive"],
      link: "https://villamassignano.be",
      features: [
        "Google Calendar API integratie",
        "Real-time beschikbaarheid check",
        "Boekingsaanvraag formulier",
        "Villa informatie & uitrusting",
        "Fotogalerij van de villa",
        "Omgevingsinformatie",
      ],
      color: "#D4AF37",
    },
    {
      title: "Verwilst Laswerken",
      category: "Portfolio Website",
      description:
        "Professionele website voor een zelfstandige lasser, met overzicht van gerealiseerde projecten en vakmanschap om de drempel tot contactopname te verlagen.",
      image: "/assets/verwilstlaswerken.webp",
      tags: ["React", "Portfolio", "Responsief Design", "Contact"],
      link: "https://verwilstlaswerken.be",
      features: [
        "Portfolio van gerealiseerde werken",
        "Fotogalerij projecten",
        "Professionele presentatie",
        "Eenvoudig contactformulier",
        "Responsive design",
        "Modern & clean interface",
      ],
      color: "#FF6B00",
    },
    {
      title: "Architectenbureau Visie",
      category: "Fictieve Portfolio Website",
      description:
        "Minimalistisch digitaal portfolio voor architectenbureau. Een elegant online visitekaartje dat vakmanschap en esthetische visie uitstraalt door middel van projectfotografie.",
      image: "/assets/ArchitectenBureau_visie.webp",
      tags: ["Squarespace", "Portfolio", "Minimalistisch Design"],
      link: "https://demo.devriesesoftware.be",
      features: [
        "Minimalistisch portfolio design",
        "Project fotogalerij",
        "Responsive layout",
        "Subtiele navigatie",
        "Focus op beeldmateriaal",
        "Contact formulier",
      ],
      color: "#8B4513",
    },
  ];

  return (
    <div className="portfolio-page">
      <motion.div
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
        className="portfolio-header"
      >
        <div className="portfolio-icon-wrapper">
          <Globe size={48} className="portfolio-header-icon" />
        </div>
        <h1>Ons Portfolio</h1>
        <p>Ontdek de websites die we met passie hebben ontwikkeld</p>
      </motion.div>

      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.25, delay: index * 0.1 }}
            className="portfolio-card"
            style={{ "--project-color": project.color } as React.CSSProperties}
          >
            <div className="portfolio-image">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="portfolio-overlay">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="overlay-btn"
                  aria-label={`Bezoek ${project.title}`}
                >
                  <ExternalLink size={20} />
                  <span>Bekijk Live</span>
                </a>
              </div>
            </div>

            <div className="portfolio-content">
              <div className="portfolio-header-content">
                <span
                  className="portfolio-category"
                  style={{ backgroundColor: project.color }}
                >
                  {project.category}
                </span>
                <h3>{project.title}</h3>
              </div>

              <p className="portfolio-description">{project.description}</p>

              <div className="portfolio-features">
                <h4>
                  <Zap size={16} />
                  Kenmerken:
                </h4>
                <ul>
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="portfolio-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">
                    <Palette size={12} />
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-link-btn"
                style={{ backgroundColor: project.color }}
              >
                <Globe size={18} />
                Bezoek Website
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Coming Soon Section */}
      <motion.div
        initial={{ y: 20 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.3 }}
        className="portfolio-cta"
      >
        <div className="portfolio-cta-content">
          <h2>Meer projecten volgen binnenkort</h2>
          <p>
            We werken voortdurend aan nieuwe, innovatieve projecten. Wilt u ook
            een professioneel ticketing platform, portfolio website of andere
            digitale oplossing? Neem contact op!
          </p>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link href="/contact" className="btn-primary">
              Start Uw Project
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
