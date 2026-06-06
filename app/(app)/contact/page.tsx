"use client";

import { useEffect, useRef, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Loader,
  User,
  Clock,
  MessageCircle,
  Zap,
  CheckCircle,
  Calendar,
} from "lucide-react";
import { useGSAP } from "@gsap/react";
import {
  gsap,
  SplitText,
  registerGsapPlugins,
} from "@/components/animations/gsap-register";
import FadeUp from "@/components/animations/FadeUp";
import SplitTextReveal from "@/components/animations/SplitTextReveal";
import "../../../styles/Contact.css";

const benefits = [
  {
    icon: Zap,
    title: "Snelle Reactie",
    description: "Antwoord binnen 24 uur",
  },
  {
    icon: MessageCircle,
    title: "Persoonlijk Contact",
    description: "Direct contact met de developer",
  },
  {
    icon: CheckCircle,
    title: "Vrijblijvend",
    description: "Geen verplichtingen, gratis advies",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
    newsletter: false,
    privacy: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  // Velden voorinvullen wanneer men vanuit de configurator komt
  useEffect(() => {
    let raw: string | null = null;
    try {
      raw = sessionStorage.getItem("ds_config");
      if (raw) sessionStorage.removeItem("ds_config");
    } catch {
      // sessionStorage niet beschikbaar
    }

    // Gestructureerde payload (JSON) heeft voorrang
    if (raw) {
      try {
        const parsed = JSON.parse(raw) as {
          projectType?: string;
          budget?: string;
          message?: string;
        };
        setFormData((prev) => ({
          ...prev,
          projectType: prev.projectType || parsed.projectType || "website",
          budget: prev.budget || parsed.budget || "",
          message: prev.message || parsed.message || "",
        }));
        return;
      } catch {
        // geen JSON — val terug op platte tekst hieronder
      }
    }

    // Fallback: platte tekst uit sessionStorage of query (?config=)
    const text =
      raw ?? new URLSearchParams(window.location.search).get("config");
    if (text) {
      setFormData((prev) => ({
        ...prev,
        projectType: prev.projectType || "website",
        message: prev.message || text,
      }));
    }
  }, []);

  const pageRef = useRef<HTMLDivElement | null>(null);
  const headerIconRef = useRef<HTMLDivElement | null>(null);
  const headerH1Ref = useRef<HTMLHeadingElement | null>(null);
  const headerPRef = useRef<HTMLParagraphElement | null>(null);
  const benefitsRef = useRef<HTMLDivElement | null>(null);
  const personRef = useRef<HTMLDivElement | null>(null);
  const infoItemsRef = useRef<HTMLDivElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);
  const orbsRef = useRef<HTMLDivElement | null>(null);
  const submitBtnRef = useRef<HTMLButtonElement | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("https://formspree.io/f/mrblnzqn", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          _replyto: formData.email,
          _subject: "Nieuw contactformulier via website",
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          projectType: "",
          budget: "",
          timeline: "",
          message: "",
          newsletter: false,
          privacy: false,
        });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  useGSAP(
    () => {
      registerGsapPlugins();
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduced) {
        gsap.set(
          [
            headerIconRef.current,
            headerH1Ref.current,
            headerPRef.current,
            benefitsRef.current,
            personRef.current,
            infoItemsRef.current,
            formRef.current,
          ].filter(Boolean),
          { autoAlpha: 1, x: 0, y: 0, scale: 1 }
        );
        return;
      }

      // Hero entrance timeline
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      if (headerIconRef.current) {
        gsap.set(headerIconRef.current, { scale: 0, rotation: -45, autoAlpha: 0 });
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
        // Continuous breathe
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
          {
            yPercent: 0,
            autoAlpha: 1,
            duration: 0.85,
            stagger: 0.1,
          },
          0.2
        );
      }

      if (headerPRef.current) {
        gsap.set(headerPRef.current, { y: 24, autoAlpha: 0 });
        tl.to(
          headerPRef.current,
          { y: 0, autoAlpha: 1, duration: 0.6 },
          0.55
        );
      }

      // Benefit cards: pop with icon spin
      if (benefitsRef.current) {
        const cards = Array.from(
          benefitsRef.current.children
        ) as HTMLElement[];
        gsap.set(cards, { y: 40, autoAlpha: 0, scale: 0.9 });
        gsap.to(cards, {
          y: 0,
          autoAlpha: 1,
          scale: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: benefitsRef.current,
            start: "top 88%",
            once: true,
          },
        });
        cards.forEach((card) => {
          const icon = card.querySelector<HTMLElement>(".benefit-icon");
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

      // Person card: scale in
      if (personRef.current) {
        gsap.set(personRef.current, { x: -32, autoAlpha: 0 });
        gsap.to(personRef.current, {
          x: 0,
          autoAlpha: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: personRef.current,
            start: "top 85%",
            once: true,
          },
        });
      }

      // Info items: slide-in from left, staggered
      if (infoItemsRef.current) {
        const items = Array.from(
          infoItemsRef.current.querySelectorAll<HTMLElement>(".info-item")
        );
        gsap.set(items, { x: -28, autoAlpha: 0 });
        gsap.to(items, {
          x: 0,
          autoAlpha: 1,
          duration: 0.55,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: infoItemsRef.current,
            start: "top 85%",
            once: true,
          },
        });
      }

      // Form: stagger fields
      if (formRef.current) {
        gsap.set(formRef.current, { x: 32, autoAlpha: 0 });
        gsap.to(formRef.current, {
          x: 0,
          autoAlpha: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 85%",
            once: true,
          },
        });
        const groups = Array.from(
          formRef.current.querySelectorAll<HTMLElement>(".form-group")
        );
        gsap.set(groups, { y: 18, autoAlpha: 0 });
        gsap.to(groups, {
          y: 0,
          autoAlpha: 1,
          duration: 0.45,
          stagger: 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
            once: true,
          },
        });
      }

      // Submit button magnetic effect (desktop only)
      if (
        submitBtnRef.current &&
        window.matchMedia("(min-width: 769px) and (hover: hover)").matches
      ) {
        const btn = submitBtnRef.current;
        const xTo = gsap.quickTo(btn, "x", { duration: 0.45, ease: "power3.out" });
        const yTo = gsap.quickTo(btn, "y", { duration: 0.45, ease: "power3.out" });
        const handleMove = (e: MouseEvent) => {
          const rect = btn.getBoundingClientRect();
          const cx = rect.left + rect.width / 2;
          const cy = rect.top + rect.height / 2;
          xTo((e.clientX - cx) * 0.3);
          yTo((e.clientY - cy) * 0.3);
        };
        const handleLeave = () => {
          xTo(0);
          yTo(0);
        };
        btn.addEventListener("mousemove", handleMove);
        btn.addEventListener("mouseleave", handleLeave);
      }

      // Background orbs: parallax scrub
      if (orbsRef.current) {
        const orbs = orbsRef.current.querySelectorAll<HTMLElement>(".contact-orb");
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

  // Form field focus glow
  const handleFocus = (e: React.FocusEvent<HTMLElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1.01,
      duration: 0.25,
      ease: "power2.out",
    });
  };
  const handleBlur = (e: React.FocusEvent<HTMLElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      duration: 0.25,
      ease: "power2.out",
    });
  };

  return (
    <div ref={pageRef} className="contact-page">
      <div ref={orbsRef} className="contact-bg">
        <div className="contact-orb orb-1"></div>
        <div className="contact-orb orb-2"></div>
        <div className="contact-orb orb-3"></div>
      </div>

      <div className="contact-header">
        <div ref={headerIconRef} className="header-icon-wrapper">
          <Mail size={48} className="header-icon" />
        </div>
        <h1 ref={headerH1Ref}>Laten we uw project bespreken</h1>
        <p ref={headerPRef}>
          Of u nu een eenvoudige website nodig heeft of een complexe
          webapplicatie wilt ontwikkelen, ik help u graag verder. Neem contact
          op voor een vrijblijvend gesprek over uw wensen en mogelijkheden.
        </p>
      </div>

      <div ref={benefitsRef} className="contact-benefits">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;
          return (
            <div key={index} className="benefit-card">
              <div className="benefit-icon">
                <Icon size={24} />
              </div>
              <h4>{benefit.title}</h4>
              <p>{benefit.description}</p>
            </div>
          );
        })}
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <div ref={personRef} className="contact-person">
            <div className="person-icon">
              <User size={40} />
            </div>
            <div className="person-details">
              <h3>Wout Devriese</h3>
              <p className="person-title">Founder & Lead Developer</p>
            </div>
          </div>

          <div ref={infoItemsRef} className="info-items">
            <div className="info-item">
              <Mail size={24} />
              <div>
                <h4>Email</h4>
                <a href="mailto:info@devriesesoftware.be">
                  info@devriesesoftware.be
                </a>
              </div>
            </div>

            <div className="info-item">
              <Phone size={24} />
              <div>
                <h4>Telefoon</h4>
                <a href="tel:+32498525482">+32 498 52 54 82</a>
              </div>
            </div>

            <div className="info-item">
              <MapPin size={24} />
              <div>
                <h4>Adres</h4>
                <p>Vinktse Binnenweg 3</p>
                <p>8700 Kanegem [Tielt]</p>
                <p>België</p>
              </div>
            </div>

            <div className="info-item availability">
              <Clock size={24} />
              <div>
                <h4>Beschikbaarheid</h4>
                <div className="availability-details">
                  <div className="availability-row">
                    <Calendar size={16} />
                    <span className="day">Maandag - Vrijdag</span>
                    <span className="time">09:00 - 18:00</span>
                  </div>
                  <div className="availability-row">
                    <Calendar size={16} />
                    <span className="day">Weekend</span>
                    <span className="time">Op afspraak</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
          <div className="form-intro-block">
            <SplitTextReveal as="h3" type="words" stagger={0.04}>
              Vertel ons over uw project
            </SplitTextReveal>
            <FadeUp>
              <p className="form-intro">
                Vul onderstaand formulier in en ik neem zo snel mogelijk contact
                met u op om uw project te bespreken.
              </p>
            </FadeUp>
          </div>

          <div className="form-row-two">
            <div className="form-group">
              <label htmlFor="firstName">Voornaam *</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
                placeholder="Jouw voornaam"
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Achternaam *</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
                placeholder="Jouw achternaam"
              />
            </div>
          </div>

          <div className="form-row-two">
            <div className="form-group">
              <label htmlFor="email">Email adres *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
                placeholder="jouw@email.be"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Telefoonnummer</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder="+32 498 52 54 82"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="company">Bedrijfsnaam</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder="Jouw bedrijf (optioneel)"
            />
          </div>

          <div className="form-row-two">
            <div className="form-group">
              <label htmlFor="projectType">Type project *</label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
              >
                <option value="">Selecteer een optie</option>
                <option value="website">Website</option>
                <option value="webapp">Web Applicatie</option>
                <option value="mobile">Mobile App</option>
                <option value="ecommerce">E-commerce</option>
                <option value="redesign">Website Redesign</option>
                <option value="maintenance">Onderhoud</option>
                <option value="other">Anders</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="budget">Indicatief budget</label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              >
                <option value="">Selecteer budget range</option>
                <option value="500-1000">€500 - €1.000</option>
                <option value="1000-2500">€1.000 - €2.500</option>
                <option value="2500-5000">€2.500 - €5.000</option>
                <option value="5000-10000">€5.000 - €10.000</option>
                <option value="10000+">€10.000+</option>
                <option value="unknown">Weet ik nog niet</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="timeline">Gewenste opleverdatum</label>
            <select
              id="timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              <option value="">Selecteer tijdlijn</option>
              <option value="asap">Zo snel mogelijk</option>
              <option value="1month">Binnen 1 maand</option>
              <option value="3months">Binnen 3 maanden</option>
              <option value="6months">Binnen 6 maanden</option>
              <option value="flexible">Flexibel</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Projectomschrijving *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
              rows={6}
              placeholder="Vertel ons meer over uw project, doelstellingen en specifieke wensen..."
            />
          </div>

          <div className="form-group checkbox-group">
            <input
              type="checkbox"
              id="newsletter"
              name="newsletter"
              checked={formData.newsletter}
              onChange={handleChange}
            />
            <label htmlFor="newsletter">
              Ik wil graag updates ontvangen over nieuwe services en tips
            </label>
          </div>

          <div className="form-group checkbox-group">
            <input
              type="checkbox"
              id="privacy"
              name="privacy"
              checked={formData.privacy}
              onChange={handleChange}
              required
            />
            <label htmlFor="privacy">
              Ik ga akkoord met de verwerking van mijn gegevens volgens het
              privacybeleid *
            </label>
          </div>

          {submitStatus === "success" && (
            <div className="form-feedback success">
              <CheckCircle size={20} />
              Bedankt voor je bericht! Ik neem zo snel mogelijk contact met je
              op.
            </div>
          )}

          {submitStatus === "error" && (
            <div className="form-feedback error">
              ✗ Er ging iets mis. Probeer het later opnieuw of neem direct
              contact met me op.
            </div>
          )}

          <button
            ref={submitBtnRef}
            type="submit"
            className="submit-btn"
            disabled={isSubmitting}
            aria-label="Verstuur contactformulier"
          >
            {isSubmitting ? (
              <>
                <Loader size={18} className="spinner" />
                Versturen...
              </>
            ) : (
              <>
                Verstuur Bericht
                <Send size={18} />
              </>
            )}
          </button>

          <input type="text" name="_gotcha" style={{ display: "none" }} />
        </form>
      </div>
    </div>
  );
}
