"use client";

import { motion } from "framer-motion";
import {
  Code,
  Zap,
  Shield,
  Layers,
  Server,
  Ghost,
  CheckCircle,
  ArrowRight,
  Monitor,
  Smartphone,
  Globe,
} from "lucide-react";
import { useRouter } from "next/navigation";
import "../../styles/Partner.css";

export default function Partner() {
  const router = useRouter();

  const benefits = [
    {
      icon: Layers,
      title: "Core Business",
      description:
        "Jullie leveren het design (Figma/XD), ik doe de code. Pixel-perfect implementatie van jullie visie, zonder compromissen.",
    },
    {
      icon: Code,
      title: "Modern Tech Stack",
      description:
        "Geen trage pagebuilders. Ik werk met de nieuwste frameworks: React, Next.js en Angular voor maximale prestaties.",
    },
    {
      icon: Zap,
      title: "Extreme Snelheid",
      description:
        "Focus op performance. <1 seconde laadtijd en minstens 90/100 Google Lighthouse scores zijn de standaard, geen uitzondering.",
    },
    {
      icon: Server,
      title: "Eigen Infrastructuur",
      description:
        "Hosting op eigen Managed Europese Servers (VPS). 100% GDPR-proof, dagelijkse back-ups en maximale beveiliging.",
    },
    {
      icon: Ghost,
      title: "White Label",
      description:
        "Ik werk volledig op de achtergrond. In de footer: 'Designed by [Jullie Bureau]' + 'Powered by Devriese Software'. Jullie krijgen het krediet.",
    },
    {
      icon: Shield,
      title: "Ontzorging",
      description:
        "Geen technisch gedoe meer. Ik neem het volledige development proces over, zodat jullie kunnen focussen op design en strategie.",
    },
  ];

  return (
    <div className="partner-page">
      {/* Hero Section */}
      <section className="partner-hero">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="partner-hero-content"
        >
          <div className="hero-badge">Voor Agencies & Studio's</div>
          <h1>
            Jullie Design. <span className="highlight">Onze Code.</span>
            <br />
            Pixel-Perfect.
          </h1>
          <p className="hero-subtitle">
            Wij bouwen de technische fundering voor creatieve bureaus.
            <br />
            Snel, veilig en volledig white-label.
          </p>
          <div className="hero-actions">
            <button
              onClick={() => router.push("/contact")}
              className="btn-primary btn-large"
            >
              Start een testproject <ArrowRight size={20} />
            </button>
          </div>
        </motion.div>
      </section>

      {/* Why Partner Grid */}
      <section className="partner-benefits">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2>Waarom Partner Worden?</h2>
          <p>
            Wij lossen het technische vraagstuk op, zodat jullie kunnen groeien.
          </p>
        </motion.div>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="benefit-card"
            >
              <div className="benefit-icon-wrapper">
                <benefit.icon size={32} />
              </div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technology Section */}
      <section className="partner-tech">
        <div className="tech-content-wrapper">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="tech-text"
          >
            <h2>De Technologie: Next.js vs WordPress</h2>
            <p className="tech-intro">
              Waarom kiezen voor maatwerk code in plaats van standaard templates?
            </p>

            <div className="tech-comparison">
              <div className="comparison-item">
                <div className="check-icon">
                  <CheckCircle size={20} />
                </div>
                <div>
                  <h4>Ongeëvenaarde Snelheid</h4>
                  <p>
                    Geen bloatware. Alleen de code die nodig is. Dit resulteert
                    in laadtijden onder de seconde.
                  </p>
                </div>
              </div>
              <div className="comparison-item">
                <div className="check-icon">
                  <CheckCircle size={20} />
                </div>
                <div>
                  <h4>Google Liefde (SEO)</h4>
                  <p>
                    Next.js genereert statische HTML (SSR/SSG), waardoor Google
                    pagina's direct kan indexeren. Veel beter voor ranking.
                  </p>
                </div>
              </div>
              <div className="comparison-item">
                <div className="check-icon">
                  <CheckCircle size={20} />
                </div>
                <div>
                  <h4>Veiligheid by Design</h4>
                  <p>
                    Geen kwetsbare plugins of database lekken. Een statische
                    frontend is vrijwel onhackbaar.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="tech-visual"
          >
            <div className="tech-card">
              <Monitor size={48} className="tech-card-icon" />
              <span>Desktop</span>
            </div>
            <div className="tech-card">
              <Smartphone size={48} className="tech-card-icon" />
              <span>Mobile</span>
            </div>
            <div className="tech-card">
              <Globe size={48} className="tech-card-icon" />
              <span>Web</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="partner-infra">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="infra-container"
        >
          <div className="infra-icon-large">
            <Server size={64} />
          </div>
          <h2>Europese Managed Hosting</h2>
          <p className="infra-text">
            Privacy en snelheid gaan hand in hand. Wij hosten alles op onze eigen
            VPS infrastructuur in Europa.
          </p>
          <div className="infra-badges">
            <div className="infra-badge">100% GDPR Proof</div>
            <div className="infra-badge">Dagelijkse Backups</div>
            <div className="infra-badge">Managed Security</div>
            <div className="infra-badge">Geen Data naar US</div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="partner-cta">
        <div className="partner-cta-content">
          <h2>Klaar om jullie capaciteit te vergroten?</h2>
          <p>
            Vraag onze partnertarieven aan of bespreek direct een lopend project.
          </p>
          <div className="cta-buttons">
            <button
              onClick={() => router.push("/contact")}
              className="btn-primary btn-large"
            >
              Partner worden
            </button>
            <button
              onClick={() => router.push("/portfolio")}
              className="btn-secondary btn-large"
            >
              Bekijk Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
