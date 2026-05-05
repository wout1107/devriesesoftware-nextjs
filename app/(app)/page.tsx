"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
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
  MapPin,
} from "lucide-react";
import { useGSAP } from "@gsap/react";
import { TechIcons, TechName } from "@/components/TechIcons";
import {
  gsap,
  ScrollTrigger,
  SplitText,
  registerGsapPlugins,
} from "@/components/animations/gsap-register";
import FadeUp from "@/components/animations/FadeUp";
import StaggerGroup from "@/components/animations/StaggerGroup";
import SplitTextReveal from "@/components/animations/SplitTextReveal";
import MagneticButton from "@/components/animations/MagneticButton";
import MarqueeRow from "@/components/animations/MarqueeRow";
import CounterUp from "@/components/animations/CounterUp";
import "../../styles/Home.css";

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

export default function Home() {
  const router = useRouter();
  const heroRef = useRef<HTMLDivElement | null>(null);
  const heroH1Ref = useRef<HTMLHeadingElement | null>(null);
  const heroBadgeRef = useRef<HTMLDivElement | null>(null);
  const heroSubtitleRef = useRef<HTMLParagraphElement | null>(null);
  const heroCtaRef = useRef<HTMLDivElement | null>(null);
  const heroLogoRef = useRef<HTMLDivElement | null>(null);
  const ctaSectionRef = useRef<HTMLElement | null>(null);
  const ctaContentRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      registerGsapPlugins();
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        if (heroBadgeRef.current) {
          tl.from(
            heroBadgeRef.current,
            { scale: 0, autoAlpha: 0, duration: 0.5, ease: "back.out(2)" },
            0
          );
        }
        if (heroH1Ref.current) {
          const split = new SplitText(heroH1Ref.current, {
            type: "lines",
            mask: "lines",
            linesClass: "split-line",
          });
          tl.from(
            split.lines,
            { yPercent: 110, autoAlpha: 0, duration: 0.9, stagger: 0.12 },
            0.1
          );
        }
        if (heroSubtitleRef.current) {
          const splitWords = new SplitText(heroSubtitleRef.current, {
            type: "words",
          });
          tl.from(
            splitWords.words,
            { y: 18, autoAlpha: 0, duration: 0.6, stagger: 0.04 },
            0.45
          );
        }
        if (heroCtaRef.current) {
          tl.from(
            heroCtaRef.current.children,
            { y: 22, autoAlpha: 0, duration: 0.6, stagger: 0.1 },
            0.65
          );
        }
        if (heroLogoRef.current) {
          tl.from(
            heroLogoRef.current,
            { scale: 0.92, autoAlpha: 0, duration: 1, ease: "power2.out" },
            0.05
          );
          gsap.to(heroLogoRef.current, {
            y: -8,
            duration: 4.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: 1,
          });
        }
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(
          [
            heroBadgeRef.current,
            heroH1Ref.current,
            heroSubtitleRef.current,
            heroCtaRef.current,
            heroLogoRef.current,
          ].filter(Boolean),
          { autoAlpha: 1, scale: 1, y: 0 }
        );
      });

      // CTA section background scrub parallax
      mm.add(
        "(min-width: 769px) and (prefers-reduced-motion: no-preference)",
        () => {
          if (!ctaSectionRef.current || !ctaContentRef.current) return;
          gsap.fromTo(
            ctaContentRef.current,
            { y: 40 },
            {
              y: -40,
              ease: "none",
              scrollTrigger: {
                trigger: ctaSectionRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        }
      );

      const refresh = () => ScrollTrigger.refresh();
      const id = window.setTimeout(refresh, 200);
      return () => window.clearTimeout(id);
    },
    { scope: heroRef }
  );

  return (
    <div className="home" ref={heroRef}>
      <section className="hero" aria-labelledby="hero-heading">
        <div className="page-container">
          <div className="hero-top-row">
            <div className="hero-text">
              <div ref={heroBadgeRef} className="badge">
                <Rocket size={16} aria-hidden="true" />
                <span>Premium Web Development</span>
              </div>

              <h1 id="hero-heading" ref={heroH1Ref}>
                Voor moderne bedrijven en ambitieuze starters
              </h1>

              <p ref={heroSubtitleRef} className="hero-subtitle">
                Jouw merk. Onze code. Perfecte balans.
              </p>

              <div ref={heroCtaRef} className="hero-cta">
                <MagneticButton
                  className="btn-primary"
                  onClick={() => router.push("/contact")}
                  ariaLabel="Start jouw project - Neem contact op"
                >
                  Start je project
                  <ArrowRight size={20} aria-hidden="true" />
                </MagneticButton>
                <MagneticButton
                  className="btn-secondary"
                  onClick={() => router.push("/services")}
                  ariaLabel="Bekijk onze diensten pagina"
                >
                  Bekijk diensten
                </MagneticButton>
              </div>
            </div>

            <div ref={heroLogoRef} className="hero-logo-container">
              <Image
                src="/assets/devriesesoftware.webp"
                alt="Devriese Software - Modern Web Development"
                className="hero-logo-main"
                width={220}
                height={220}
                priority
              />
            </div>
          </div>

          <div
            className="tech-stack"
            role="region"
            aria-labelledby="tech-stack-heading"
          >
            <p className="tech-stack-label" id="tech-stack-heading">
              Onze Tech Stack
            </p>
            <MarqueeRow speed={50} className="tech-marquee">
              {techStack.map((tech, index) => {
                const IconComponent = TechIcons[tech.icon as TechName];
                return (
                  <div
                    key={`a-${index}`}
                    className="tech-item tech-item-marquee"
                    title={tech.name}
                    style={{ "--tech-color": tech.color } as React.CSSProperties}
                  >
                    <div
                      className="tech-icon"
                      style={{ color: tech.color }}
                      aria-hidden="true"
                    >
                      {IconComponent && <IconComponent />}
                    </div>
                    <span className="tech-name">{tech.name}</span>
                  </div>
                );
              })}
            </MarqueeRow>
          </div>
        </div>
      </section>

      <section className="google-reviews" aria-labelledby="reviews-heading">
        <FadeUp className="reviews-header">
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
          <SplitTextReveal as="h2" type="words" stagger={0.06} className="reviews-h2">
            <span id="reviews-heading">Wat onze klanten zeggen</span>
          </SplitTextReveal>
          <div className="rating-summary">
            <div className="rating-stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} fill="#FBBC05" color="#FBBC05" />
              ))}
            </div>
            <span className="rating-score">
              <CounterUp to={5.0} decimals={1} />
            </span>
            <span className="rating-count">uit 3 reviews</span>
          </div>
        </FadeUp>

        <StaggerGroup
          className="reviews-grid"
          stagger={0.12}
          y={36}
          duration={0.85}
        >
          {googleReviews.map((review, index) => (
            <div
              key={index}
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
            </div>
          ))}
        </StaggerGroup>

        <FadeUp delay={0.1}>
          <a
            href="https://www.google.com/search?q=Devriese+Software+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="google-link"
          >
            Bekijk alle reviews op Google
            <ArrowRight size={18} />
          </a>
        </FadeUp>
      </section>

      <section className="features" aria-labelledby="features-heading">
        <SplitTextReveal
          as="h2"
          type="words"
          stagger={0.05}
          className="features-title"
        >
          <span id="features-heading">Wat wij bieden</span>
        </SplitTextReveal>

        <StaggerGroup
          className="features-grid"
          stagger={0.12}
          y={40}
          scale={0.94}
          ease="back.out(1.4)"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="feature-card" role="listitem">
                <div className="feature-icon" aria-hidden="true">
                  <Icon size={28} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            );
          })}
        </StaggerGroup>
      </section>

      <section className="expertise" aria-labelledby="expertise-heading">
        <FadeUp className="expertise-header">
          <h2 id="expertise-heading">Onze Specialisaties</h2>
          <p>Technologieën en diensten waar wij in excelleren</p>
        </FadeUp>

        <StaggerGroup
          className="expertise-grid"
          stagger={0.07}
          y={20}
          scale={0.85}
          duration={0.6}
          ease="back.out(1.7)"
        >
          {expertise.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="expertise-item" role="listitem">
                <Icon size={24} aria-hidden="true" />
                <span>{item.title}</span>
              </div>
            );
          })}
        </StaggerGroup>
      </section>

      <section className="local-section" aria-labelledby="local-heading">
        <FadeUp className="local-header">
          <div className="local-badge">
            <MapPin size={14} aria-hidden="true" />
            <span>Lokaal aanwezig in heel Vlaanderen</span>
          </div>
          <h2 id="local-heading">Web developer in jouw regio</h2>
          <p>Bekijk onze diensten per stad of bekijk een specifiek vakgebied.</p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="local-services-grid">
            {[
              { slug: "website-laten-maken", label: "Website laten maken" },
              { slug: "webshop-laten-maken", label: "Webshop laten maken" },
              { slug: "webapplicatie-laten-maken", label: "Webapplicatie" },
              { slug: "app-ontwikkeling", label: "App ontwikkeling" },
              { slug: "software-op-maat", label: "Software op maat" },
              { slug: "seo-optimalisatie", label: "SEO optimalisatie" },
            ].map((s) => (
              <Link key={s.slug} href={`/${s.slug}`} className="local-service-card">
                <span>{s.label}</span>
                <ArrowRight size={16} />
              </Link>
            ))}
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="local-cities">
            <span className="local-cities-label">Populaire steden:</span>
            {["tielt", "brugge", "gent", "kortrijk", "roeselare", "antwerpen", "leuven", "hasselt"].map((c) => (
              <Link key={c} href={`/regio/${c}`} className="local-city-pill">
                {c.charAt(0).toUpperCase() + c.slice(1)}
              </Link>
            ))}
          </div>
        </FadeUp>
      </section>

      <section
        ref={ctaSectionRef}
        className="cta-section"
        aria-labelledby="cta-heading"
      >
        <div ref={ctaContentRef} className="cta-content">
          <SplitTextReveal as="h2" type="words" stagger={0.06}>
            <span id="cta-heading">Klaar om te starten?</span>
          </SplitTextReveal>
          <FadeUp>
            <p>
              Laten we jouw idee omzetten in een krachtige digitale oplossing.
              Neem contact op voor een vrijblijvend gesprek.
            </p>
          </FadeUp>
          <FadeUp delay={0.15}>
            <MagneticButton
              className="btn-primary btn-large"
              onClick={() => router.push("/contact")}
              ariaLabel="Start jouw project nu - Neem contact met ons op"
            >
              Start je project nu
              <ArrowRight size={20} aria-hidden="true" />
            </MagneticButton>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
