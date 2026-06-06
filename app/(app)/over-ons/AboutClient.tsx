"use client";

import { useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Code2,
  Heart,
  Target,
  Lightbulb,
  MessageCircle,
  ShieldCheck,
  MapPin,
  Rocket,
  Sparkles,
  GraduationCap,
} from "lucide-react";
import { useGSAP } from "@gsap/react";
import {
  gsap,
  SplitText,
  registerGsapPlugins,
} from "@/components/animations/gsap-register";
import FadeUp from "@/components/animations/FadeUp";
import SplitTextReveal from "@/components/animations/SplitTextReveal";
import MagneticButton from "@/components/animations/MagneticButton";
import "../../../styles/About.css";

const values = [
  {
    icon: MessageCircle,
    title: "Persoonlijk contact",
    description:
      "Je praat altijd rechtstreeks met de developer. Geen tussenpersonen, korte lijnen en snelle antwoorden.",
  },
  {
    icon: Target,
    title: "Werk op maat",
    description:
      "Geen standaard templates. Elke website en applicatie wordt afgestemd op jouw bedrijf en doelen.",
  },
  {
    icon: ShieldCheck,
    title: "Eerlijk & transparant",
    description:
      "Duidelijke prijzen en open communicatie. Je weet altijd waar je aan toe bent, zonder verrassingen.",
  },
  {
    icon: Rocket,
    title: "Moderne technologie",
    description:
      "Snel, veilig en toekomstbestendig. Ik bouw met React, Next.js en de nieuwste tools van het web.",
  },
];

const stats = [
  { value: "5+", label: "Jaar ervaring" },
  { value: "100%", label: "Op maat gebouwd" },
  { value: "24u", label: "Reactietijd" },
];

const journey = [
  {
    icon: Code2,
    title: "Begonnen met passie voor code",
    description:
      "Wat startte als nieuwsgierigheid naar hoe websites werken, groeide uit tot een echte passie voor software ontwikkeling.",
  },
  {
    icon: Lightbulb,
    title: "Devriese Software opgericht",
    description:
      "Met de wens om bedrijven écht te helpen online, ben ik Devriese Software gestart: kwaliteitsvol digitaal werk met een persoonlijke aanpak.",
  },
  {
    icon: Heart,
    title: "Bouwen aan jouw succes",
    description:
      "Vandaag help ik ondernemers en bedrijven met websites, webshops en applicaties die er niet alleen mooi uitzien, maar ook resultaat opleveren.",
  },
];

export default function AboutClient() {
  const router = useRouter();

  const pageRef = useRef<HTMLDivElement | null>(null);
  const orbsRef = useRef<HTMLDivElement | null>(null);
  const headerIconRef = useRef<HTMLDivElement | null>(null);
  const headerH1Ref = useRef<HTMLHeadingElement | null>(null);
  const headerPRef = useRef<HTMLParagraphElement | null>(null);
  const photoRef = useRef<HTMLDivElement | null>(null);
  const introRef = useRef<HTMLDivElement | null>(null);
  const statsRef = useRef<HTMLDivElement | null>(null);
  const valuesRef = useRef<HTMLDivElement | null>(null);
  const journeyRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      registerGsapPlugins();
      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduced) {
        gsap.set(
          [
            headerIconRef.current,
            headerH1Ref.current,
            headerPRef.current,
            photoRef.current,
            introRef.current,
            statsRef.current,
            valuesRef.current,
            journeyRef.current,
          ].filter(Boolean),
          { autoAlpha: 1, x: 0, y: 0, scale: 1 }
        );
        return;
      }

      // Hero entrance timeline
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      if (headerIconRef.current) {
        gsap.set(headerIconRef.current, {
          scale: 0,
          rotation: -45,
          autoAlpha: 0,
        });
        tl.to(
          headerIconRef.current,
          {
            scale: 1,
            rotation: 0,
            autoAlpha: 1,
            duration: 0.7,
            ease: "back.out(1.8)",
          },
          0
        );
        gsap.to(headerIconRef.current, {
          y: -6,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 1,
        });
      }

      if (headerH1Ref.current) {
        const split = new SplitText(headerH1Ref.current, {
          type: "lines",
          mask: "lines",
          linesClass: "split-line",
        });
        gsap.set(split.lines, { yPercent: 110, autoAlpha: 0 });
        tl.to(
          split.lines,
          { yPercent: 0, autoAlpha: 1, duration: 0.85, stagger: 0.1 },
          0.2
        );
      }

      if (headerPRef.current) {
        gsap.set(headerPRef.current, { y: 24, autoAlpha: 0 });
        tl.to(headerPRef.current, { y: 0, autoAlpha: 1, duration: 0.6 }, 0.55);
      }

      // Photo: scale + fade in
      if (photoRef.current) {
        gsap.set(photoRef.current, { scale: 0.8, autoAlpha: 0 });
        gsap.to(photoRef.current, {
          scale: 1,
          autoAlpha: 1,
          duration: 0.9,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: photoRef.current,
            start: "top 88%",
            once: true,
          },
        });
      }

      // Intro text: slide from right
      if (introRef.current) {
        gsap.set(introRef.current, { x: 32, autoAlpha: 0 });
        gsap.to(introRef.current, {
          x: 0,
          autoAlpha: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: introRef.current,
            start: "top 85%",
            once: true,
          },
        });
      }

      // Stats: pop in staggered
      if (statsRef.current) {
        const items = Array.from(statsRef.current.children) as HTMLElement[];
        gsap.set(items, { y: 30, autoAlpha: 0, scale: 0.9 });
        gsap.to(items, {
          y: 0,
          autoAlpha: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.12,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 90%",
            once: true,
          },
        });
      }

      // Value cards: pop with icon spin
      if (valuesRef.current) {
        const cards = Array.from(valuesRef.current.children) as HTMLElement[];
        gsap.set(cards, { y: 40, autoAlpha: 0, scale: 0.9 });
        gsap.to(cards, {
          y: 0,
          autoAlpha: 1,
          scale: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: valuesRef.current,
            start: "top 85%",
            once: true,
          },
        });
        cards.forEach((card) => {
          const icon = card.querySelector<HTMLElement>(".value-icon");
          if (icon) {
            gsap.set(icon, { rotation: -90 });
            gsap.to(icon, {
              rotation: 0,
              duration: 0.8,
              ease: "back.out(1.6)",
              scrollTrigger: {
                trigger: card,
                start: "top 88%",
                once: true,
              },
            });
          }
        });
      }

      // Journey steps: slide in from left, staggered
      if (journeyRef.current) {
        const items = Array.from(
          journeyRef.current.querySelectorAll<HTMLElement>(".journey-step")
        );
        gsap.set(items, { x: -28, autoAlpha: 0 });
        gsap.to(items, {
          x: 0,
          autoAlpha: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: journeyRef.current,
            start: "top 82%",
            once: true,
          },
        });
      }

      // Background orbs: parallax scrub
      if (orbsRef.current) {
        const orbs = orbsRef.current.querySelectorAll<HTMLElement>(".about-orb");
        orbs.forEach((orb, i) => {
          gsap.to(orb, {
            y: i % 2 === 0 ? -120 : 120,
            x: i % 2 === 0 ? 40 : -40,
            ease: "none",
            scrollTrigger: {
              trigger: pageRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 1,
            },
          });
        });
      }
    },
    { scope: pageRef }
  );

  return (
    <div ref={pageRef} className="about-page">
      <div ref={orbsRef} className="about-bg">
        <div className="about-orb orb-1"></div>
        <div className="about-orb orb-2"></div>
        <div className="about-orb orb-3"></div>
      </div>

      <div className="about-header">
        <div ref={headerIconRef} className="header-icon-wrapper">
          <Sparkles size={48} className="header-icon" />
        </div>
        <h1 ref={headerH1Ref}>De mens achter Devriese Software</h1>
        <p ref={headerPRef}>
          Geen groot, anoniem bureau, maar één developer met een passie voor het
          web. Ik help ondernemers en bedrijven aan een sterke online
          aanwezigheid, met een persoonlijke aanpak van A tot Z.
        </p>
      </div>

      <div className="about-intro">
        <div ref={photoRef} className="about-photo">
          <div className="photo-ring">
            <Image
              src="/assets/wout-devriese.jpg"
              alt="Wout Devriese, founder van Devriese Software"
              width={640}
              height={640}
              className="photo-img"
              priority
              quality={90}
            />
          </div>
          <div className="photo-badge">
            <MapPin size={16} />
            <span>West-Vlaanderen</span>
          </div>
        </div>

        <div ref={introRef} className="about-intro-text">
          <span className="intro-eyebrow">Aangenaam, ik ben</span>
          <SplitTextReveal as="h2" type="words" stagger={0.04}>
            Wout Devriese
          </SplitTextReveal>
          <p className="intro-role">Founder &amp; Lead Developer</p>
          <p>
            Al van jongs af aan ben ik gefascineerd door technologie en hoe je
            met code echte problemen oplost. Die fascinatie heb ik verdiept met
            een bachelor <strong>Toegepaste Informatica</strong>, afstudeerrichting{" "}
            <strong>Software Development</strong>, aan{" "}
            <strong>VIVES Kortrijk</strong> — en omgezet in mijn werk: het bouwen
            van websites, webshops en webapplicaties die niet alleen mooi zijn,
            maar vooral werken voor jouw bedrijf.
          </p>
          <p>
            Wat mij drijft? De combinatie van techniek en mensen. Ik vind het
            geweldig om met jou samen te zitten, te luisteren naar wat je echt
            nodig hebt, en dat te vertalen naar een digitale oplossing die het
            verschil maakt. Korte lijnen, eerlijk advies en kwaliteit waar ik
            achter sta.
          </p>

          <div className="about-education">
            <div className="education-icon">
              <GraduationCap size={22} />
            </div>
            <div className="education-text">
              <span className="education-degree">
                Bachelor Toegepaste Informatica — Software Development
              </span>
              <span className="education-school">VIVES Hogeschool, Kortrijk</span>
            </div>
          </div>

          <div ref={statsRef} className="about-stats">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-item">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="about-section">
        <FadeUp className="section-header" as="div">
          <h2>Waar ik voor sta</h2>
          <p>
            Een paar principes die in elk project terugkomen — daar mag je me op
            afrekenen.
          </p>
        </FadeUp>

        <div ref={valuesRef} className="about-values">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div key={value.title} className="value-card">
                <div className="value-icon">
                  <Icon size={24} />
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="about-section">
        <FadeUp className="section-header" as="div">
          <h2>Mijn verhaal</h2>
          <p>Van nieuwsgierige beginner tot jouw digitale partner.</p>
        </FadeUp>

        <div ref={journeyRef} className="about-journey">
          {journey.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="journey-step">
                <div className="journey-icon">
                  <Icon size={22} />
                </div>
                <div className="journey-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="about-cta">
        <FadeUp className="about-cta-inner" as="div">
          <h2>Klaar om samen te bouwen?</h2>
          <p>
            Heb je een idee, een project of gewoon een vraag? Ik denk graag met
            je mee. Een eerste gesprek is altijd vrijblijvend.
          </p>
          <div className="about-cta-buttons">
            <MagneticButton
              className="btn-primary"
              onClick={() => router.push("/contact")}
              ariaLabel="Ga naar de contactpagina"
            >
              Neem contact op
            </MagneticButton>
            <MagneticButton
              className="btn-secondary"
              onClick={() => router.push("/portfolio")}
              ariaLabel="Bekijk het portfolio"
            >
              Bekijk mijn werk
            </MagneticButton>
          </div>
        </FadeUp>
      </section>
    </div>
  );
}
