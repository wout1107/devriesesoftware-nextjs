"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Check,
  Plus,
  Rocket,
  Code,
  Settings,
  ShoppingCart,
  HelpCircle,
  Layers,
  Globe,
  RefreshCw,
  Zap,
  Package,
  ArrowRight,
} from "lucide-react";
import FadeUp from "@/components/animations/FadeUp";
import StaggerGroup from "@/components/animations/StaggerGroup";
import SplitTextReveal from "@/components/animations/SplitTextReveal";
import MagneticButton from "@/components/animations/MagneticButton";
import "../../../styles/pricing.css";

const packages = [
  {
    name: "Essential",
    price: "1.250",
    description:
      "De perfecte start voor zelfstandigen die meteen professioneel voor de dag willen komen.",
    subtitle:
      "Tech: Next.js (Razendsnel). CMS: Ingebouwd Visueel CMS (Eenvoudig teksten/foto's aanpassen zonder technische kennis).",
    timeline: "1 - 2 weken",
    maintenance: "€25/maand",
    color: "#424633",
    badge: "Perfect voor starters",
    popular: false,
    features: [
      "Onepager of max. 3 pagina's",
      "Contactformulier & Google Maps",
      "Basis SEO-setup (Google Indexatie)",
      "Oplevering binnen 1 - 2 weken",
    ],
    maintenanceFeatures: [
      "Beveiligingsupdates",
      "Kleine aanpassingen (1x/maand)",
      "Basis support per mail",
      "Hosting inbegrepen",
    ],
  },
  {
    name: "Business Growth",
    price: "2.450",
    description:
      "Voor KMO's die topposities in Google willen en leads willen genereren.",
    subtitle:
      "Tech: Next.js + Geavanceerde optimalisatie. CMS: Gebruiksvriendelijk CMS (Volledig beheer van pagina's, blogs en teamleden).",
    timeline: "2 - 3 weken",
    maintenance: "€40/maand",
    color: "#FF6B00",
    badge: "Meest gekozen",
    popular: true,
    features: [
      "Tot 8 unieke pagina's",
      "Blog / Nieuws module",
      "Analytics Dashboard (Privacy-vriendelijk)",
      "Call-to-Action optimalisatie",
      "Oplevering binnen 2 - 3 weken",
    ],
    maintenanceFeatures: [
      "Beveiligingsupdates",
      "Kleine aanpassingen (2x/maand)",
      "E-mail & telefonische support",
      "Hosting inbegrepen",
    ],
  },
  {
    name: "Custom Headless",
    price: "3.950",
    pricePrefix: "Vanaf",
    description:
      "Voor merken die geen compromissen sluiten. Maatwerk, animaties en complexe data.",
    subtitle:
      "Tech: Enterprise Headless Architectuur. CMS: Strapi CMS (Volledig modulair database beheer).",
    timeline: "4+ weken",
    maintenance: "€65/maand",
    color: "#424633",
    badge: "Voor professionals",
    popular: false,
    features: [
      "Volledig maatwerk (Pixel-perfect design implementatie)",
      "Custom Animaties (GSAP)",
      "Meertaligheid (Multi-language setup)",
      "Koppelingen (CRM, API's, ...)",
      "Oplevering binnen 4+ weken",
    ],
    maintenanceFeatures: [
      "Inclusief VPS Hosting & Database beheer",
      "Onbeperkte kleine updates",
      "Prioritaire support",
      "Contentbeheer support",
      "Dagelijkse Backups",
    ],
  },
];

const customFeatures = [
  {
    icon: Layers,
    title: "Headless Architectuur",
    description:
      "Ontkoppelde frontend (Next.js) en backend (Strapi) voor maximale veiligheid en snelheid",
  },
  {
    icon: Globe,
    title: "Dual-Brand Systemen",
    description:
      "Beheer meerdere merken of websites vanuit één centraal dashboard",
  },
  {
    icon: Zap,
    title: "High-End Experience",
    description:
      "Custom animaties (GSAP), scroll-reveals en micro-interacties",
  },
  {
    icon: RefreshCw,
    title: "Complexe Integraties",
    description: "Koppelingen met ERP, CRM of externe API's",
  },
];

const faqs = [
  {
    question: "Wat is inbegrepen in de onderhoudspakketten?",
    answer:
      "Onze onderhoudspakketten bevatten beveiligingsupdates, technische support, kleine aanpassingen en regelmatige backups om uw website veilig en up-to-date te houden.",
  },
  {
    question: "Kan ik later upgraden naar een hoger pakket?",
    answer:
      "Ja, u kunt altijd upgraden. We berekenen alleen het verschil tussen de pakketten en zorgen voor een soepele overgang.",
  },
  {
    question: "Hoe lang duurt het ontwikkelproces?",
    answer:
      "Dit varieert per pakket: Starter (1 week), Business (1,5-2 weken), Premium (2-3 weken). Complexere projecten en Custom Development hebben een aangepaste tijdlijn.",
  },
  {
    question: "Krijg ik eigendom van de broncode?",
    answer:
      "Ja, na volledige betaling krijgt u volledige eigendom van alle broncode en bestanden van uw website.",
  },
  {
    question: "Wat betekent Strapi CMS?",
    answer:
      "Strapi is een open source CMS waarmee u zelf uw website-inhoud kunt beheren zonder technische kennis. De meerkost van €500 dekt onze tijd en expertise voor de integratie.",
  },
  {
    question: "Is hosting inbegrepen in de prijzen?",
    answer:
      "Ja, de webhosting is volledig inbegrepen in onze maandelijkse onderhoudspakketten. U hoeft zich geen zorgen te maken over het apart regelen van hosting - wij zorgen voor snelle, betrouwbare hosting, inclusief het technisch beheer en monitoring van uw website.",
  },
];

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const router = useRouter();

  return (
    <div className="pricing-page">
      <FadeUp className="pricing-header">
        <div className="header-icon-wrapper">
          <Package size={48} className="header-icon" />
        </div>
        <h1>Website Pakketten</h1>
        <p>
          Transparante prijzen voor professionele websites. Alle prijzen zijn
          exclusief BTW.
        </p>
      </FadeUp>

      <StaggerGroup
        className="pricing-grid-centered"
        stagger={0.12}
        y={32}
        duration={0.85}
      >
        {packages.map((pkg, index) => (
          <div
            key={index}
            className={`pricing-card-centered ${pkg.popular ? "popular" : ""}`}
            style={{ "--package-color": pkg.color } as React.CSSProperties}
          >
            {pkg.popular && (
              <div className="popular-badge-new">⭐ {pkg.badge}</div>
            )}
            {!pkg.popular && <div className="badge-new">{pkg.badge}</div>}
            <div className="pricing-card-header-centered">
              <h3>{pkg.name}</h3>
              <div className="price-wrapper-centered">
                {pkg.pricePrefix && (
                  <span className="price-prefix">{pkg.pricePrefix}</span>
                )}
                <span className="currency">€</span>
                <span className="price">{pkg.price}</span>
              </div>
              <p className="tax-note">excl. btw</p>
            </div>
            <div className="description-section">
              <p className="package-description-new">{pkg.description}</p>
              <p className="package-subtitle">{pkg.subtitle}</p>
            </div>
            <div className="package-features-centered">
              <div className="features-header">
                <Check size={20} className="features-header-icon" />
                <h4>Inbegrepen:</h4>
              </div>
              <ul>
                {pkg.features.map((feature, i) => (
                  <li key={i}>
                    <Check size={18} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="maintenance-section-new">
              <div className="maintenance-header">
                <Zap size={20} className="maintenance-icon" />
                <h4>
                  Onderhoudsoptie: <span>{pkg.maintenance}</span>
                </h4>
              </div>
              <ul>
                {pkg.maintenanceFeatures.map((feature, i) => (
                  <li key={i}>
                    <Check size={16} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <MagneticButton
              onClick={() => router.push("/contact")}
              className="btn-primary btn-large select-package-btn"
            >
              <ArrowRight size={20} />
              <span>Kies {pkg.name}</span>
            </MagneticButton>
          </div>
        ))}
      </StaggerGroup>

      <section className="custom-development-section-full">
        <FadeUp className="custom-dev-header-full">
          <div className="custom-header-icon-wrapper">
            <Code size={56} className="custom-header-icon" />
          </div>
          <SplitTextReveal as="h2" type="words" stagger={0.05}>
            Enterprise & Maatwerk Solutions
          </SplitTextReveal>
          <p className="custom-intro-full">
            Voor organisaties met complexe behoeften, meerdere merken of
            geavanceerde data-architectuur. Wij bouwen schaalbare applicaties
            die klaar zijn voor de toekomst.
          </p>

          <StaggerGroup className="custom-features-grid" stagger={0.1} y={24}>
            {customFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="custom-feature-card">
                  <Icon size={32} className="custom-feature-icon" />
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              );
            })}
          </StaggerGroup>

          <FadeUp className="custom-pricing-box" delay={0.1}>
            <div className="custom-price-info">
              <Code size={48} className="custom-box-icon" />
              <h3>Enterprise & Maatwerk</h3>
              <div className="custom-price-options">
                <div className="price-option">
                  <span className="price-label">Projectbasis:</span>
                  <span className="price-value">vanaf €5.500</span>
                </div>
                <div className="price-divider">of</div>
                <div className="price-option">
                  <span className="price-label">Uurtarief:</span>
                  <span className="price-value">€85/uur</span>
                </div>
              </div>
              <div className="maintenance-note-wrapper">
                <Zap size={20} className="maintenance-note-icon" />
                <p className="maintenance-note">
                  <strong>Hosting & Security:</strong> €55 - €85/maand
                </p>
              </div>
              <p className="delivery-note">
                Levering afhankelijk van projectomvang en complexiteit. Neem
                contact op voor een vrijblijvende offerte op maat.
              </p>
            </div>
            <MagneticButton
              className="btn-primary btn-large"
              onClick={() => router.push("/contact")}
            >
              <Rocket size={20} />
              <span>Vraag offerte aan.</span>
            </MagneticButton>
          </FadeUp>
        </FadeUp>
      </section>

      <section className="extensions-section-redesigned">
        <FadeUp className="extensions-header-redesigned">
          <div className="extensions-icon-badge">
            <Plus size={32} className="extensions-header-icon" />
          </div>
          <SplitTextReveal as="h2" type="words" stagger={0.05}>
            Uitbreidingen & Modules
          </SplitTextReveal>
          <p className="extensions-subtitle">
            Breid uw website uit met krachtige extra functionaliteiten. Alle
            prijzen zijn exclusief BTW.
          </p>
        </FadeUp>

        <div className="extensions-categories">
          <FadeUp className="extension-category">
            <div className="category-header">
              <Settings size={24} className="category-icon" />
              <h3>Basis Functionaliteiten</h3>
            </div>
            <div className="category-grid">
              <div className="extension-card">
                <div className="extension-card-content">
                  <h4>Extra Pagina&apos;s (Advanced)</h4>
                  <p className="extension-description">
                    Pagina&apos;s met custom designblokken en CMS-integratie
                  </p>
                  <div className="extension-price-tag">
                    <span className="price-amount">€180</span>
                    <span className="price-unit">per stuk</span>
                  </div>
                </div>
              </div>

              <div className="extension-card">
                <div className="extension-card-content">
                  <h4>Meertaligheid</h4>
                  <p className="extension-description">
                    Bereik internationale klanten met meerdere talen
                  </p>
                  <div className="extension-price-tag">
                    <span className="price-amount">€250</span>
                    <span className="price-unit">per taal</span>
                  </div>
                </div>
              </div>

              <div className="extension-card">
                <div className="extension-card-content">
                  <h4>Blogmodule (statisch)</h4>
                  <p className="extension-description">
                    Deel nieuws en updates via een statische blog
                  </p>
                  <div className="extension-price-tag">
                    <span className="price-amount">€150</span>
                  </div>
                </div>
              </div>

              <div className="extension-card highlighted">
                <div className="extension-badge">Populair</div>
                <div className="extension-card-content">
                  <h4>Strapi CMS</h4>
                  <p className="extension-description">
                    Bestaande site ombouwen naar een beheersbare omgeving
                  </p>
                  <div className="extension-price-tag">
                    <span className="price-amount">€1.950</span>
                    <span className="price-unit">
                      Enterprise Architecture
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>

          <FadeUp className="extension-category" delay={0.1}>
            <div className="category-header">
              <ShoppingCart size={24} className="category-icon" />
              <h3>E-commerce & Verkoop</h3>
            </div>
            <div className="category-grid">
              <div className="extension-card">
                <div className="extension-card-content">
                  <h4>Webshop basis</h4>
                  <p className="extension-description">
                    Tot 20 producten, inclusief betaalsysteem
                  </p>
                  <div className="extension-price-tag">
                    <span className="price-amount">€1.250</span>
                  </div>
                </div>
              </div>

              <div className="extension-card">
                <div className="extension-card-content">
                  <h4>Uitgebreide webshop</h4>
                  <p className="extension-description">
                    100+ producten met geavanceerd beheer
                  </p>
                  <div className="extension-price-tag">
                    <span className="price-amount">vanaf €2.000</span>
                  </div>
                </div>
              </div>

              <div className="extension-card">
                <div className="extension-card-content">
                  <h4>Smart Content Modules</h4>
                  <p className="extension-description">
                    Vacaturebank, projectportfolio of nieuwsmodule met filtering
                  </p>
                  <div className="extension-price-tag">
                    <span className="price-amount">vanaf €450</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>

          <FadeUp className="extension-category" delay={0.15}>
            <div className="category-header">
              <Zap size={24} className="category-icon" />
              <h3>Marketing & Optimalisatie</h3>
            </div>
            <div className="category-grid">
              <div className="extension-card">
                <div className="extension-card-content">
                  <h4>Nieuwsbrief koppeling</h4>
                  <p className="extension-description">
                    Mailchimp of Brevo integratie
                  </p>
                  <div className="extension-price-tag">
                    <span className="price-amount">€150</span>
                  </div>
                </div>
              </div>

              <div className="extension-card">
                <div className="extension-card-content">
                  <h4>SEO-boostpakket</h4>
                  <p className="extension-description">
                    Inclusief meta-tags en optimalisatie
                  </p>
                  <div className="extension-price-tag">
                    <span className="price-amount">€200</span>
                  </div>
                </div>
              </div>

              <div className="extension-card">
                <div className="extension-card-content">
                  <h4>Fotografie + stockfoto&apos;s</h4>
                  <p className="extension-description">
                    Professionele beelden voor uw website
                  </p>
                  <div className="extension-price-tag">
                    <span className="price-amount">vanaf €300</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>

        <FadeUp className="extensions-info-box">
          <HelpCircle size={24} className="info-icon" />
          <div className="info-content">
            <h4>Niet gevonden wat u zoekt?</h4>
            <p>
              Neem contact op voor een vrijblijvende offerte op maat. We denken
              graag met u mee over de beste oplossing voor uw specifieke
              behoeften.
            </p>
          </div>
        </FadeUp>
      </section>

      <section className="faq-section">
        <FadeUp className="faq-header">
          <h2>Veelgestelde Vragen</h2>
        </FadeUp>

        <StaggerGroup className="faq-container" stagger={0.06} y={18}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openFaq === index ? "open" : ""}`}
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
            >
              <div className="faq-question">
                <HelpCircle size={20} />
                <h4>{faq.question}</h4>
                <span className="faq-toggle">
                  {openFaq === index ? "−" : "+"}
                </span>
              </div>
              {openFaq === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </StaggerGroup>
      </section>

      <section className="pricing-cta">
        <FadeUp className="pricing-cta-content">
          <SplitTextReveal as="h2" type="words" stagger={0.05}>
            Klaar om te starten?
          </SplitTextReveal>
          <p>
            Laten we samen jouw online succes bouwen. Neem vrijblijvend contact
            op voor een persoonlijk adviesgesprek.
          </p>
          <MagneticButton
            className="btn-primary btn-large"
            onClick={() => router.push("/contact")}
          >
            <Rocket size={20} />
            <span>Neem contact op</span>
          </MagneticButton>
        </FadeUp>
      </section>
    </div>
  );
}
