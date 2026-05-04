"use client";

import { useRef } from "react";
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
import { useGSAP } from "@gsap/react";
import {
  gsap,
  registerGsapPlugins,
} from "@/components/animations/gsap-register";
import FadeUp from "@/components/animations/FadeUp";
import SplitTextReveal from "@/components/animations/SplitTextReveal";
import MagneticButton from "@/components/animations/MagneticButton";
import "../../../styles/Services.css";

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

export default function Services() {
  const router = useRouter();
  const pageRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);
  const processRef = useRef<HTMLElement | null>(null);
  const processGridRef = useRef<HTMLDivElement | null>(null);
  const lineTopRef = useRef<SVGPathElement | null>(null);
  const lineBottomRef = useRef<SVGPathElement | null>(null);

  useGSAP(
    () => {
      registerGsapPlugins();
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Service cards alternating side reveal
        if (cardsRef.current) {
          const cards = Array.from(
            cardsRef.current.children
          ) as HTMLElement[];
          cards.forEach((card, i) => {
            const fromX = i % 2 === 0 ? -50 : 50;
            gsap.from(card, {
              x: fromX,
              y: 24,
              autoAlpha: 0,
              duration: 0.85,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 88%",
                once: true,
              },
            });

            const isAccent = card.dataset.accent === "true";
            if (isAccent) {
              const glow = card.querySelector<HTMLElement>(".service-icon-new");
              if (glow) {
                gsap.fromTo(
                  glow,
                  { boxShadow: "0 0 0 rgba(255,107,0,0)" },
                  {
                    boxShadow: "0 0 32px rgba(255,107,0,0.55)",
                    duration: 1.6,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                    delay: 0.5,
                  }
                );
              }
            }
          });
        }

        // Process step cards: scale-pop in sequence
        if (processGridRef.current) {
          const cards = Array.from(
            processGridRef.current.children
          ) as HTMLElement[];
          cards.forEach((card) => {
            gsap.from(card, {
              scale: 0.7,
              y: 30,
              autoAlpha: 0,
              duration: 0.7,
              ease: "back.out(1.6)",
              scrollTrigger: {
                trigger: card,
                start: "top 88%",
                once: true,
              },
            });
          });
        }

        // Process connector lines: draw via DrawSVG scrub
        if (processRef.current && lineTopRef.current && lineBottomRef.current) {
          gsap.set([lineTopRef.current, lineBottomRef.current], {
            drawSVG: "0% 0%",
          });
          gsap.to(lineTopRef.current, {
            drawSVG: "0% 100%",
            ease: "none",
            scrollTrigger: {
              trigger: processRef.current,
              start: "top 75%",
              end: "center 60%",
              scrub: 0.6,
            },
          });
          gsap.to(lineBottomRef.current, {
            drawSVG: "0% 100%",
            ease: "none",
            scrollTrigger: {
              trigger: processRef.current,
              start: "center 70%",
              end: "bottom 65%",
              scrub: 0.6,
            },
          });
        }
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        if (cardsRef.current)
          gsap.set(cardsRef.current.children, { autoAlpha: 1, x: 0, y: 0 });
        if (processGridRef.current)
          gsap.set(processGridRef.current.children, {
            autoAlpha: 1,
            scale: 1,
            y: 0,
          });
      });
    },
    { scope: pageRef }
  );

  return (
    <div ref={pageRef} className="services-page">
      <FadeUp className="services-header" as="div">
        <h1>Onze Diensten</h1>
        <p>
          Van website tot webshop, van mobile app tot maatwerk software. Wij
          bouwen digitale oplossingen die werken.
        </p>
      </FadeUp>

      <div ref={cardsRef} className="services-grid">
        {services.map((service, index) => {
          const Icon = service.icon;
          const isAccent = service.color === "#FF6B00";
          return (
            <div
              key={index}
              className="service-card-new"
              data-accent={isAccent}
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
            </div>
          );
        })}
      </div>

      <section ref={processRef} className="process-section">
        <FadeUp className="process-header">
          <SplitTextReveal as="h2" type="words" stagger={0.05}>
            Hoe wij werken
          </SplitTextReveal>
          <p>
            Een eenvoudig en transparant proces, van eerste gesprek tot
            succesvolle lancering.
          </p>
        </FadeUp>

        <div className="process-grid-wrapper">
          <svg
            className="process-connector"
            viewBox="0 0 1200 400"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              ref={lineTopRef}
              d="M 100 80 C 300 80, 500 80, 600 80 S 900 80, 1100 80"
              fill="none"
              stroke="#ff6b00"
              strokeWidth="2"
              strokeDasharray="8 8"
              strokeLinecap="round"
            />
            <path
              ref={lineBottomRef}
              d="M 100 320 C 300 320, 500 320, 600 320 S 900 320, 1100 320"
              fill="none"
              stroke="#ff6b00"
              strokeWidth="2"
              strokeDasharray="8 8"
              strokeLinecap="round"
            />
          </svg>

          <div ref={processGridRef} className="process-grid">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="process-card">
                  <div className="process-number">{step.number}</div>
                  <div className="process-icon">
                    <Icon size={28} />
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="services-cta">
        <FadeUp className="services-cta-content">
          <SplitTextReveal as="h2" type="words" stagger={0.05}>
            Klaar om uw digitale ambities waar te maken?
          </SplitTextReveal>
          <p>
            Neem contact op voor een vrijblijvend gesprek. We bespreken graag uw
            project en denken mee over de beste oplossing.
          </p>
          <div className="cta-buttons">
            <MagneticButton
              className="btn-primary"
              onClick={() => router.push("/contact")}
            >
              Plan een gesprek
            </MagneticButton>
            <MagneticButton
              className="btn-secondary"
              onClick={() => router.push("/portfolio")}
            >
              Bekijk portfolio
            </MagneticButton>
          </div>
        </FadeUp>
      </section>
    </div>
  );
}
