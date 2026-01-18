"use client";

import { motion } from "framer-motion";
import {
  Globe,
  ShoppingCart,
  Smartphone,
  Cog,
  Wrench,
  Lightbulb,
  MessageCircle,
  FileText,
  Palette,
  Zap,
  CheckCircle,
  Rocket,
  CheckSquare,
} from "lucide-react";
import { useRouter } from "next/navigation";
import "../../styles/Services.css";

export default function Services() {
  const router = useRouter();

  const services = [
    {
      icon: Globe,
      title: "Websites",
      description: "Professionele websites die uw bedrijf online laten stralen",
      color: "#424633",
      features: [
        "Responsive design (werkt op alle apparaten)",
        "Snelle laadtijden",
        "Vindbaar in Google (SEO)",
        "Eenvoudig te onderhouden",
        "Veilig en betrouwbaar",
      ],
    },
    {
      icon: ShoppingCart,
      title: "Webshops",
      description: "Online verkopen? Wij bouwen een webshop die converteert",
      color: "#FF6B00",
      features: [
        "Volledige webshop met betaalsysteem",
        "Productbeheer",
        "Bestellingen overzicht",
        "Automatische facturen",
        "Mobiel-vriendelijk design",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description:
        "Apps voor iPhone en Android die uw klanten elke dag gebruiken",
      color: "#424633",
      features: [
        "App voor iOS en Android",
        "Push notificaties",
        "Offline functionaliteit",
        "App Store publicatie",
        "Gebruiksvriendelijke interface",
      ],
    },
    {
      icon: Cog,
      title: "Web Applicaties",
      description:
        "Op maat gemaakte systemen die uw bedrijfsprocessen automatiseren",
      color: "#424633",
      features: [
        "Maatwerk software",
        "Automatisering van processen",
        "Gebruikersbeheer",
        "Rapportages en analytics",
        "Koppelingen met andere systemen",
      ],
    },
    {
      icon: Wrench,
      title: "Onderhoud & Support",
      description: "Zorgeloos digitaal: wij houden alles up-to-date en veilig",
      color: "#FF6B00",
      features: [
        "Regelmatige updates",
        "Backup en beveiliging",
        "Technische support",
        "Performance monitoring",
        "24/7 beschikbaarheid",
      ],
    },
    {
      icon: Lightbulb,
      title: "Digitaal Advies",
      description: "Niet zeker wat u nodig heeft? Wij denken graag mee",
      color: "#424633",
      features: [
        "Gratis adviesgesprek",
        "Technische haalbaarheidstudie",
        "Strategisch digitaal plan",
        "Kostenschatting",
        "Implementatie roadmap",
      ],
    },
  ];

  const processSteps = [
    {
      icon: MessageCircle,
      number: "1",
      title: "Kennismaking",
      description:
        "We bespreken uw wensen, doelen en budget in een vrijblijvend gesprek.",
    },
    {
      icon: FileText,
      number: "2",
      title: "Plan & Offerte",
      description:
        "U krijgt een duidelijk plan met vaste prijzen en geen verrassingen.",
    },
    {
      icon: Palette,
      number: "3",
      title: "Ontwerp",
      description:
        "We maken een design dat perfect bij uw merk en doelgroep past.",
    },
    {
      icon: Zap,
      number: "4",
      title: "Bouwen",
      description: "Uw project wordt gebouwd met de nieuwste technologieën.",
    },
    {
      icon: CheckCircle,
      number: "5",
      title: "Testen",
      description: "Uitgebreide tests zorgen ervoor dat alles perfect werkt.",
    },
    {
      icon: Rocket,
      number: "6",
      title: "Live!",
      description:
        "Uw project gaat live en we zorgen voor een vlotte overdracht.",
    },
  ];

  return (
    <div className="services-page">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="services-header"
      >
        <h1>Onze Diensten</h1>
        <p>
          Van website tot webshop, van mobile app tot maatwerk software. Wij
          bouwen digitale oplossingen die werken.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="services-grid">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="service-card-new"
              style={{ "--service-color": service.color } as React.CSSProperties}
            >
              <div className="service-header">
                <div
                  className="service-icon-new"
                  style={{ backgroundColor: service.color }}
                >
                  <Icon size={32} />
                </div>
                <h3>{service.title}</h3>
              </div>

              <p className="service-description">{service.description}</p>

              <div className="service-divider"></div>

              <h4 className="features-title-small">Wat u krijgt:</h4>
              <ul className="service-features">
                {service.features.map((feature, i) => (
                  <li key={i}>
                    <CheckSquare size={18} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>

      {/* Process Section */}
      <section className="process-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="process-header"
        >
          <h2>Hoe wij werken</h2>
          <p>
            Een eenvoudig en transparant proces, van eerste gesprek tot
            succesvolle lancering.
          </p>
        </motion.div>

        <div className="process-grid">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="process-card"
              >
                <div className="process-number">{step.number}</div>
                <div className="process-icon">
                  <Icon size={28} />
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="services-cta-content"
        >
          <h2>Klaar om uw digitale ambities waar te maken?</h2>
          <p>
            Neem contact op voor een vrijblijvend gesprek. We bespreken graag uw
            project en denken mee over de beste oplossing.
          </p>
          <div className="cta-buttons">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
              onClick={() => router.push("/contact")}
            >
              Plan een gesprek
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
              onClick={() => router.push("/portfolio")}
            >
              Bekijk portfolio
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
