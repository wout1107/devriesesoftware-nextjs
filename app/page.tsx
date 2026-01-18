"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  ArrowRight,
  Code,
  Cloud,
  Database,
  Globe,
  Rocket,
  Smartphone,
  ShoppingCart,
  Star,
} from "lucide-react";
import { TechIcons, TechName } from "@/components/TechIcons";
import "../styles/Home.css";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const router = useRouter();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (window.innerWidth > 768) {
      const handleMouseMove = (e: MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      };
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  const features = [
    {
      icon: Globe,
      title: "Web Development",
      desc: "Moderne websites & webapplicaties",
    },
    {
      icon: Cloud,
      title: "Cloud Oplossingen",
      desc: "Hosting & infrastructuur",
    },
    {
      icon: Database,
      title: "API & Backend",
      desc: "Strapi CMS & integraties",
    },
  ];

  const expertise = [
    { title: "Web Development", icon: Code },
    { title: "Web Applicaties", icon: Rocket },
    { title: "Mobile Apps", icon: Smartphone },
    { title: "E-commerce", icon: ShoppingCart },
    { title: "Cloud Hosting", icon: Cloud },
    { title: "API Development", icon: Database },
  ];

  const googleReviews = [
    {
      name: "Wilson Vanlerberghe",
      date: "Januari 2026",
      text: "We hebben Wout gecontacteerd om een website te maken van onze vakantiewoning. Vanaf het begin verliep de communicatie zeer goed en werd er echt naar onze wensen geluisterd. Het resultaat is dan ook zeer geslaagd. Ook wat betreft de nazorg en opvolging zijn we uiterst tevreden. Devriese Software is wat ons betreft een echte aanrader!",
      rating: 5,
    },
    {
      name: "François Vancompernolle",
      date: "Januari 2026",
      text: "",
      rating: 5,
    },
    {
      name: "Francois Spherebox",
      date: "Januari 2026",
      text: "",
      rating: 5,
    },
  ];

  const techStack = [
    { name: "React", color: "#61DAFB", icon: "React" },
    { name: "Next.js", color: "#000000", icon: "NextJS" },
    { name: "React Native", color: "#61DAFB", icon: "ReactNative" },
    { name: "Node.js", color: "#339933", icon: "NodeJS" },
    { name: "JavaScript", color: "#F7DF1E", icon: "JavaScript" },
    { name: "HTML5", color: "#E34F26", icon: "HTML5" },
    { name: "CSS3", color: "#1572B6", icon: "CSS3" },
    { name: "Strapi", color: "#4945FF", icon: "Strapi" },
    { name: "Nginx", color: "#009639", icon: "Nginx" },
    { name: "Cloudflare", color: "#F38020", icon: "Cloudflare" },
  ];

  return (
    <div className="home">
      <section className="hero" aria-labelledby="hero-heading">
        <div className="page-container">
          <div className="hero-top-row">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="hero-text"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.05, type: "spring", stiffness: 300 }}
                className="badge"
              >
                <Rocket size={16} aria-hidden="true" />
                <span>Premium Web Development</span>
              </motion.div>

              <h1 id="hero-heading" style={{ willChange: "auto" }}>
                Voor moderne bedrijven en ambitieuze starters
              </h1>

              <p className="hero-subtitle">
                Jouw merk. Onze code. Perfecte balans.
              </p>

              <div className="hero-cta">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                  onClick={() => router.push("/contact")}
                  aria-label="Start jouw project - Neem contact op"
                >
                  Start je project
                  <ArrowRight size={20} aria-hidden="true" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary"
                  onClick={() => router.push("/services")}
                  aria-label="Bekijk onze diensten pagina"
                >
                  Bekijk diensten
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ scale: 0.95 }}
              animate={
                shouldReduceMotion
                  ? { scale: 1 }
                  : {
                    y: [0, -6, 0],
                    scale: [1, 1.02, 1],
                    rotate: [0, 1.2, 0, -1.2, 0],
                  }
              }
              transition={
                shouldReduceMotion
                  ? { duration: 0.3, delay: 0.1 }
                  : {
                    duration: 10,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                    delay: 0.1,
                  }
              }
              whileHover={
                shouldReduceMotion
                  ? {}
                  : {
                    scale: 1.05,
                    rotate: 0.4,
                    transition: {
                      type: "spring",
                      stiffness: 200,
                      damping: 18,
                    },
                  }
              }
              className="hero-logo-container"
            >
              <Image
                src="/assets/devriesesoftware.webp"
                alt="Devriese Software - Modern Web Development"
                className="hero-logo-main"
                width={220}
                height={220}
                priority
                style={{ willChange: "auto" }}
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="tech-stack"
            role="region"
            aria-labelledby="tech-stack-heading"
          >
            <p className="tech-stack-label" id="tech-stack-heading">
              Onze Tech Stack:
            </p>
            <div className="tech-stack-grid" role="list">
              {techStack.map((tech, index) => {
                const IconComponent = TechIcons[tech.icon as TechName];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.05 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="tech-item"
                    title={tech.name}
                    style={{ "--tech-color": tech.color } as React.CSSProperties}
                    role="listitem"
                  >
                    <div
                      className="tech-icon"
                      style={{ color: tech.color }}
                      aria-hidden="true"
                    >
                      {IconComponent && <IconComponent />}
                    </div>
                    <span className="tech-name">{tech.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="google-reviews" aria-labelledby="reviews-heading">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="reviews-header"
        >
          <div className="google-badge">
            <svg viewBox="0 0 24 24" width="28" height="28" aria-label="Google">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span>Google Reviews</span>
          </div>
          <h2 id="reviews-heading">Wat onze klanten zeggen</h2>
          <div className="rating-summary">
            <div className="rating-stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} fill="#FBBC05" color="#FBBC05" />
              ))}
            </div>
            <span className="rating-score">5.0</span>
            <span className="rating-count">uit 3 reviews</span>
          </div>
        </motion.div>

        <div className="reviews-grid" role="list">
          {googleReviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className={`review-card ${!review.text ? "review-card-compact" : ""}`}
              role="listitem"
            >
              <div className="review-header">
                <div className="reviewer-avatar">{review.name.charAt(0)}</div>
                <div className="reviewer-info">
                  <span className="reviewer-name">{review.name}</span>
                  <span className="review-date">{review.date}</span>
                </div>
              </div>
              <div className="review-stars">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="#FBBC05" color="#FBBC05" />
                ))}
              </div>
              {review.text && <p className="review-text">{review.text}</p>}
            </motion.div>
          ))}
        </div>

        <motion.a
          href="https://www.google.com/search?q=Devriese+Software+reviews"
          target="_blank"
          rel="noopener noreferrer"
          className="google-link"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Bekijk alle reviews op Google
          <ArrowRight size={18} />
        </motion.a>
      </section>

      <section className="features" aria-labelledby="features-heading">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="features-title"
          id="features-heading"
        >
          Wat wij bieden
        </motion.h2>

        <div className="features-grid" role="list">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="feature-card"
                role="listitem"
              >
                <div className="feature-icon" aria-hidden="true">
                  <Icon size={28} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="expertise" aria-labelledby="expertise-heading">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="expertise-header"
        >
          <h2 id="expertise-heading">Onze Specialisaties</h2>
          <p>Technologieën en diensten waar wij in excelleren</p>
        </motion.div>

        <div className="expertise-grid" role="list">
          {expertise.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="expertise-item"
                role="listitem"
              >
                <Icon size={24} aria-hidden="true" />
                <span>{item.title}</span>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="cta-section" aria-labelledby="cta-heading">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="cta-content"
        >
          <h2 id="cta-heading">Klaar om te starten?</h2>
          <p>
            Laten we jouw idee omzetten in een krachtige digitale oplossing.
            Neem contact op voor een vrijblijvend gesprek.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary btn-large"
            onClick={() => router.push("/contact")}
            aria-label="Start jouw project nu - Neem contact met ons op"
          >
            Start je project nu
            <ArrowRight size={20} aria-hidden="true" />
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}
