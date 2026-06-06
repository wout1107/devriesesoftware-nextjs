"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Check,
  Plus,
  Minus,
  Rocket,
  Code,
  Settings,
  HelpCircle,
  Layers,
  Globe,
  RefreshCw,
  Zap,
  SlidersHorizontal,
  TrendingUp,
  Search,
  MapPin,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import FadeUp from "@/components/animations/FadeUp";
import StaggerGroup from "@/components/animations/StaggerGroup";
import SplitTextReveal from "@/components/animations/SplitTextReveal";
import MagneticButton from "@/components/animations/MagneticButton";
import "../../../styles/pricing.css";

// ── Configurator data ──────────────────────────────────────────────
type BaseOption = {
  id: string;
  label: string;
  desc: string;
  price: number;
  popular?: boolean;
};

type ModuleItem = {
  id: string;
  label: string;
  desc: string;
  price: number;
  qty?: boolean;
  max?: number;
  unit?: string;
};

const baseOptions: BaseOption[] = [
  {
    id: "onepager",
    label: "Onepager",
    desc: "Eén krachtige pagina waarop alles samenkomt. Ideaal om snel professioneel online te staan.",
    price: 950,
  },
  {
    id: "multi",
    label: "Meerdere pagina's",
    desc: "Tot 4 pagina's (home, over ons, diensten, contact …). De meest gekozen basis.",
    price: 1850,
    popular: true,
  },
  {
    id: "pro",
    label: "Uitgebreide website",
    desc: "Tot 10 pagina's met geavanceerde structuur, klaar om mee te groeien.",
    price: 2400,
  },
];

const moduleGroups: { title: string; icon: typeof Layers; items: ModuleItem[] }[] =
  [
    {
      title: "Content & Beheer",
      icon: Layers,
      items: [
        {
          id: "cms",
          label: "Eigen CMS",
          desc: "Zelf teksten en foto's aanpassen, zonder technische kennis.",
          price: 450,
        },
        {
          id: "blog",
          label: "Blog / nieuws module",
          desc: "Deel updates en versterk meteen je SEO.",
          price: 250,
        },
        {
          id: "lang",
          label: "Extra taal",
          desc: "Bereik internationale klanten.",
          price: 250,
          qty: true,
          max: 5,
          unit: "taal",
        },
      ],
    },
    {
      title: "Functionaliteit",
      icon: Settings,
      items: [
        {
          id: "forms",
          label: "Geavanceerd formulier",
          desc: "Meerstaps of met bijlagen en automatische mails.",
          price: 200,
        },
        {
          id: "booking",
          label: "Reservatie / boekingssysteem",
          desc: "Laat klanten online afspraken of plaatsen boeken.",
          price: 600,
        },
        {
          id: "shop",
          label: "Webshop (tot 20 producten)",
          desc: "Volledige verkoopomgeving inclusief betaalsysteem.",
          price: 1250,
        },
      ],
    },
    {
      title: "Design & Beleving",
      icon: Zap,
      items: [
        {
          id: "anim",
          label: "Custom animaties (GSAP)",
          desc: "Scroll-reveals en micro-interacties die indruk maken.",
          price: 400,
        },
        {
          id: "photo",
          label: "Fotografie & beeld",
          desc: "Professionele beelden of zorgvuldig gekozen stockfoto's.",
          price: 300,
        },
        {
          id: "newsletter",
          label: "Nieuwsbrief koppeling",
          desc: "Integratie met Mailchimp of Brevo.",
          price: 150,
        },
      ],
    },
  ];

type SeoOption = {
  id: string;
  label: string;
  desc: string;
  price: number;
  tag?: string;
  highlight?: boolean;
};

const seoOptions: SeoOption[] = [
  {
    id: "basis",
    label: "Basis SEO",
    desc: "Google-indexatie, nette meta-tags en een sitemap.",
    price: 0,
    tag: "Inbegrepen",
  },
  {
    id: "boost",
    label: "SEO Boost",
    desc: "Diepgaande optimalisatie: structured data, snelheid, interne linking en zoekwoordonderzoek.",
    price: 450,
  },
  {
    id: "programmatic",
    label: "Programmatic SEO — 200+ pagina's",
    desc: "Automatisch gegenereerde landingspagina's (dienst × regio) die je zichtbaarheid en voorvertoningen in Google fors laten stijgen.",
    price: 1950,
    highlight: true,
  },
];

type MaintenanceOption = {
  id: string;
  label: string;
  desc: string;
  price: number;
  popular?: boolean;
};

const maintenanceOptions: MaintenanceOption[] = [
  {
    id: "none",
    label: "Geen onderhoud",
    desc: "Je beheert de site volledig zelf.",
    price: 0,
  },
  {
    id: "basic",
    label: "Basis",
    desc: "Beveiligingsupdates, backups en mail-support.",
    price: 25,
  },
  {
    id: "pro",
    label: "Pro",
    desc: "Alles van Basis + prioritaire support en maandelijkse aanpassingen.",
    price: 40,
    popular: true,
  },
];

const allModules = moduleGroups.flatMap((g) => g.items);

const eur = (n: number) => new Intl.NumberFormat("nl-BE").format(n);

// ── Maatwerk + FAQ data ────────────────────────────────────────────
const customFeatures = [
  {
    icon: Layers,
    title: "Headless Architectuur",
    description:
      "Ontkoppelde frontend (Next.js) en backend voor maximale veiligheid en snelheid",
  },
  {
    icon: Globe,
    title: "Multi-Brand Systemen",
    description:
      "Beheer meerdere merken of websites vanuit één centraal dashboard",
  },
  {
    icon: Zap,
    title: "High-End Experience",
    description: "Custom animaties (GSAP), scroll-reveals en micro-interacties",
  },
  {
    icon: RefreshCw,
    title: "Complexe Integraties",
    description: "Koppelingen met ERP, CRM of externe API's",
  },
];

const faqs = [
  {
    question: "Hoe werkt de configurator precies?",
    answer:
      "Je kiest een basispakket en vinkt de modules aan die je nodig hebt. De prijs links wordt meteen bijgewerkt, zodat je altijd weet waar je aan toe bent. De prijs is een richtprijs — na een kort gesprek bevestig ik alles in een offerte op maat.",
  },
  {
    question: "Wat is het Programmatic SEO-pakket?",
    answer:
      "Daarmee maak ik in één keer 200 of meer landingspagina's aan, opgebouwd uit combinaties van je diensten en regio's (bv. 'webshop laten maken in Brugge'). Elke pagina is uniek en geoptimaliseerd, waardoor je in veel meer zoekopdrachten verschijnt en je voorvertoningen in Google stijgen. Ideaal voor lokale vindbaarheid.",
  },
  {
    question: "Zijn de prijzen inclusief BTW?",
    answer:
      "Nee, alle prijzen zijn exclusief 21% BTW. De eenmalige bouwprijs betaal je bij oplevering, het onderhoud is een maandelijks bedrag.",
  },
  {
    question: "Kan ik later modules toevoegen?",
    answer:
      "Zeker. De website wordt modulair gebouwd, dus je kan altijd later extra functionaliteiten of pagina's toevoegen.",
  },
  {
    question: "Is hosting inbegrepen?",
    answer:
      "Hosting, technisch beheer en monitoring zitten in de maandelijkse onderhoudspakketten (Basis en Pro). Kies je geen onderhoud, dan bespreken we de hosting apart.",
  },
  {
    question: "Krijg ik eigendom van de broncode?",
    answer:
      "Ja, na volledige betaling krijg je de volledige eigendom van alle broncode en bestanden van je website.",
  },
];

export default function Pricing() {
  const router = useRouter();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Configurator state
  const [base, setBase] = useState<string>("multi");
  const [modules, setModules] = useState<Record<string, number>>({});
  const [seo, setSeo] = useState<string>("basis");
  const [maint, setMaint] = useState<string>("basic");

  const toggleModule = (item: ModuleItem) => {
    setModules((prev) => {
      const next = { ...prev };
      if (next[item.id]) delete next[item.id];
      else next[item.id] = 1;
      return next;
    });
  };

  const setQty = (item: ModuleItem, delta: number) => {
    setModules((prev) => {
      const current = prev[item.id] ?? 0;
      const max = item.max ?? 99;
      const value = Math.min(max, Math.max(0, current + delta));
      const next = { ...prev };
      if (value === 0) delete next[item.id];
      else next[item.id] = value;
      return next;
    });
  };

  const { oneTime, monthly, lineItems } = useMemo(() => {
    const lines: { label: string; amount: number }[] = [];

    const baseOpt = baseOptions.find((b) => b.id === base);
    if (baseOpt) lines.push({ label: baseOpt.label, amount: baseOpt.price });

    for (const item of allModules) {
      const qty = modules[item.id];
      if (!qty) continue;
      const amount = item.price * qty;
      lines.push({
        label: item.qty ? `${item.label} ×${qty}` : item.label,
        amount,
      });
    }

    const seoOpt = seoOptions.find((s) => s.id === seo);
    if (seoOpt && seoOpt.price > 0)
      lines.push({ label: seoOpt.label, amount: seoOpt.price });

    const oneTimeTotal = lines.reduce((sum, l) => sum + l.amount, 0);
    const maintOpt = maintenanceOptions.find((m) => m.id === maint);

    return {
      oneTime: oneTimeTotal,
      monthly: maintOpt?.price ?? 0,
      lineItems: lines,
    };
  }, [base, modules, seo, maint]);

  const requestConfig = () => {
    const baseOpt = baseOptions.find((b) => b.id === base);
    const maintOpt = maintenanceOptions.find((m) => m.id === maint);
    const seoOpt = seoOptions.find((s) => s.id === seo);
    const hasShop = !!modules["shop"];

    // Projecttype afstemmen op de selectie
    const projectType = hasShop ? "ecommerce" : "website";

    // Budget-bereik afleiden uit het eenmalige totaal
    const budget =
      oneTime < 1000
        ? "500-1000"
        : oneTime < 2500
          ? "1000-2500"
          : oneTime < 5000
            ? "2500-5000"
            : oneTime < 10000
              ? "5000-10000"
              : "10000+";

    // Leesbare samenvatting voor het berichtveld
    const moduleLines = lineItems
      .filter((l) => l.label !== baseOpt?.label)
      .map((l) => `   • ${l.label} — €${eur(l.amount)}`);

    const message = [
      "── Offerte-aanvraag via configurator ──",
      "",
      `Basispakket: ${baseOpt?.label ?? "-"} — €${eur(baseOpt?.price ?? 0)}`,
      moduleLines.length
        ? `Gekozen opties:\n${moduleLines.join("\n")}`
        : "Gekozen opties: geen",
      `SEO-aanpak: ${seoOpt?.label ?? "-"}${
        seoOpt && seoOpt.price > 0 ? ` — €${eur(seoOpt.price)}` : " (inbegrepen)"
      }`,
      `Onderhoud: ${maintOpt?.label ?? "Geen"}${
        monthly ? ` — €${monthly}/maand` : ""
      }`,
      "",
      `Eenmalig totaal: €${eur(oneTime)} excl. btw`,
      monthly ? `Maandelijks onderhoud: €${monthly}/maand excl. btw` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const payload = { v: 1, projectType, budget, message };

    try {
      sessionStorage.setItem("ds_config", JSON.stringify(payload));
    } catch {
      // sessionStorage geblokkeerd — val terug op query param
    }
    router.push(`/contact?config=${encodeURIComponent(message)}`);
  };

  return (
    <div className="pricing-page">
      <FadeUp className="pricing-header">
        <div className="header-icon-wrapper">
          <SlidersHorizontal size={48} className="header-icon" />
        </div>
        <h1>Stel je website samen</h1>
        <p>
          Bouw je eigen pakket met de configurator hieronder en zie meteen wat
          het kost. Alle prijzen zijn exclusief BTW.
        </p>
      </FadeUp>

      {/* ── CONFIGURATOR ───────────────────────────────────────── */}
      <section className="configurator">
        <div className="configurator-options">
          {/* Stap 1: basis */}
          <FadeUp className="config-block">
            <div className="config-step-head">
              <span className="config-step-num">1</span>
              <h3>Kies je basis</h3>
            </div>
            <div className="config-radio-grid">
              {baseOptions.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  className={`config-radio-card ${base === opt.id ? "selected" : ""}`}
                  onClick={() => setBase(opt.id)}
                  aria-pressed={base === opt.id}
                >
                  {opt.popular && (
                    <span className="config-pill">Meest gekozen</span>
                  )}
                  <span className="config-card-title">{opt.label}</span>
                  <span className="config-card-price">€{eur(opt.price)}</span>
                  <span className="config-card-desc">{opt.desc}</span>
                </button>
              ))}
            </div>
          </FadeUp>

          {/* Stap 2: modules */}
          <FadeUp className="config-block">
            <div className="config-step-head">
              <span className="config-step-num">2</span>
              <h3>Voeg modules toe</h3>
            </div>
            {moduleGroups.map((group) => {
              const Icon = group.icon;
              return (
                <div key={group.title} className="config-module-group">
                  <div className="config-group-label">
                    <Icon size={18} />
                    <span>{group.title}</span>
                  </div>
                  <div className="config-toggle-grid">
                    {group.items.map((item) => {
                      const qty = modules[item.id] ?? 0;
                      const active = qty > 0;
                      if (item.qty) {
                        return (
                          <div
                            key={item.id}
                            className={`config-toggle-card ${active ? "active" : ""}`}
                          >
                            <div className="config-toggle-info">
                              <span className="config-toggle-title">
                                {item.label}
                              </span>
                              <span className="config-toggle-desc">
                                {item.desc}
                              </span>
                              <span className="config-toggle-price">
                                +€{eur(item.price)} per {item.unit}
                              </span>
                            </div>
                            <div className="config-stepper">
                              <button
                                type="button"
                                onClick={() => setQty(item, -1)}
                                aria-label={`Minder ${item.label}`}
                                disabled={qty === 0}
                              >
                                <Minus size={16} />
                              </button>
                              <span className="config-stepper-value">{qty}</span>
                              <button
                                type="button"
                                onClick={() => setQty(item, 1)}
                                aria-label={`Meer ${item.label}`}
                                disabled={qty >= (item.max ?? 99)}
                              >
                                <Plus size={16} />
                              </button>
                            </div>
                          </div>
                        );
                      }
                      return (
                        <button
                          key={item.id}
                          type="button"
                          className={`config-toggle-card ${active ? "active" : ""}`}
                          onClick={() => toggleModule(item)}
                          aria-pressed={active}
                        >
                          <span className="config-check">
                            {active && <Check size={14} />}
                          </span>
                          <div className="config-toggle-info">
                            <span className="config-toggle-title">
                              {item.label}
                            </span>
                            <span className="config-toggle-desc">
                              {item.desc}
                            </span>
                            <span className="config-toggle-price">
                              +€{eur(item.price)}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </FadeUp>

          {/* Stap 3: SEO */}
          <FadeUp className="config-block">
            <div className="config-step-head">
              <span className="config-step-num">3</span>
              <h3>Kies je SEO-aanpak</h3>
            </div>
            <div className="config-seo-list">
              {seoOptions.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  className={`config-seo-card ${seo === opt.id ? "selected" : ""} ${
                    opt.highlight ? "highlight" : ""
                  }`}
                  onClick={() => setSeo(opt.id)}
                  aria-pressed={seo === opt.id}
                >
                  <span className="config-seo-radio" />
                  <div className="config-seo-info">
                    <span className="config-seo-title">
                      {opt.highlight && <TrendingUp size={16} />}
                      {opt.label}
                    </span>
                    <span className="config-seo-desc">{opt.desc}</span>
                  </div>
                  <span className="config-seo-price">
                    {opt.price === 0 ? "Inbegrepen" : `+€${eur(opt.price)}`}
                  </span>
                </button>
              ))}
            </div>
          </FadeUp>

          {/* Stap 4: onderhoud */}
          <FadeUp className="config-block">
            <div className="config-step-head">
              <span className="config-step-num">4</span>
              <h3>Onderhoud &amp; hosting</h3>
            </div>
            <div className="config-radio-grid">
              {maintenanceOptions.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  className={`config-radio-card ${maint === opt.id ? "selected" : ""}`}
                  onClick={() => setMaint(opt.id)}
                  aria-pressed={maint === opt.id}
                >
                  {opt.popular && <span className="config-pill">Aanbevolen</span>}
                  <span className="config-card-title">{opt.label}</span>
                  <span className="config-card-price">
                    {opt.price === 0 ? "€0" : `€${opt.price}`}
                    <span className="config-card-per">/maand</span>
                  </span>
                  <span className="config-card-desc">{opt.desc}</span>
                </button>
              ))}
            </div>
          </FadeUp>
        </div>

        {/* Live summary */}
        <FadeUp className="config-summary" as="aside">
          <div className="config-summary-inner">
            <h3>Jouw configuratie</h3>
            <ul className="config-summary-lines">
              {lineItems.map((l, i) => (
                <li key={i}>
                  <span>{l.label}</span>
                  <span>€{eur(l.amount)}</span>
                </li>
              ))}
            </ul>
            <div className="config-summary-total">
              <div className="config-total-row">
                <span>Eenmalig</span>
                <strong>€{eur(oneTime)}</strong>
              </div>
              <span className="config-total-note">excl. btw</span>
              {monthly > 0 && (
                <div className="config-total-row monthly">
                  <span>Onderhoud</span>
                  <strong>€{monthly}/mnd</strong>
                </div>
              )}
            </div>
            <MagneticButton
              className="btn-primary btn-large config-cta"
              onClick={requestConfig}
              ariaLabel="Vraag deze configuratie aan"
            >
              <ArrowRight size={20} />
              <span>Vraag deze offerte aan</span>
            </MagneticButton>
            <p className="config-disclaimer">
              Richtprijs — je ontvangt een definitieve offerte na een kort,
              vrijblijvend gesprek.
            </p>
          </div>
        </FadeUp>
      </section>

      {/* Vaste actiebalk: totaal + offerte-knop (altijd zichtbaar) */}
      <div className="config-mobilebar">
        <div className="config-mobilebar-inner">
          <div className="config-mobilebar-price">
            <span className="config-mobilebar-label">Totaal excl. btw</span>
            <strong>
              €{eur(oneTime)}
              {monthly > 0 && (
                <span className="config-mobilebar-monthly">
                  {" "}
                  + €{monthly}/mnd
                </span>
              )}
            </strong>
          </div>
          <button
            type="button"
            className="btn-primary config-mobilebar-btn"
            onClick={requestConfig}
            aria-label="Vraag deze offerte aan"
          >
            <ArrowRight size={18} />
            <span>Offerte aanvragen</span>
          </button>
        </div>
      </div>

      {/* ── PROGRAMMATIC SEO HIGHLIGHT ─────────────────────────── */}
      <section className="seo-highlight">
        <FadeUp className="seo-highlight-inner">
          <div className="seo-highlight-badge">
            <TrendingUp size={28} />
          </div>
          <SplitTextReveal as="h2" type="words" stagger={0.05}>
            Programmatic SEO: 200+ pagina's in één pakket
          </SplitTextReveal>
          <p className="seo-highlight-lead">
            Domineer de lokale zoekresultaten. Ik genereer honderden unieke,
            geoptimaliseerde landingspagina's die elke combinatie van jouw
            diensten en regio's afdekken — zodat je verschijnt waar je klanten
            écht zoeken.
          </p>
          <StaggerGroup className="seo-highlight-grid" stagger={0.1} y={24}>
            <div className="seo-point">
              <Search size={28} />
              <h4>Meer zoekwoorden</h4>
              <p>
                Elke pagina mikt op een specifieke zoekopdracht, goed voor een
                veelvoud aan vindbare termen.
              </p>
            </div>
            <div className="seo-point">
              <MapPin size={28} />
              <h4>Lokale dominantie</h4>
              <p>
                Dienst × regio-pagina's (bv. &quot;webshop laten maken in
                Brugge&quot;) trekken gericht lokaal verkeer aan.
              </p>
            </div>
            <div className="seo-point">
              <Sparkles size={28} />
              <h4>Sterkere previews</h4>
              <p>
                Nette titels, meta-beschrijvingen en structured data laten je
                voorvertoningen in Google opvallen.
              </p>
            </div>
          </StaggerGroup>
          <div className="seo-highlight-price">
            <span>Voeg toe vanaf</span>
            <strong>€1.950</strong>
            <span className="seo-highlight-price-note">
              eenmalig · 200+ pagina's
            </span>
          </div>
        </FadeUp>
      </section>

      {/* ── MAATWERK ───────────────────────────────────────────── */}
      <section className="custom-development-section-full">
        <FadeUp className="custom-dev-header-full">
          <div className="custom-header-icon-wrapper">
            <Code size={56} className="custom-header-icon" />
          </div>
          <SplitTextReveal as="h2" type="words" stagger={0.05}>
            Maatwerk &amp; Enterprise
          </SplitTextReveal>
          <p className="custom-intro-full">
            Heb je nood aan een complexe webapplicatie, meerdere merken of een
            geavanceerde data-architectuur? Dan groeien we voorbij de
            configurator. Ik bouw schaalbare oplossingen die klaar zijn voor de
            toekomst.
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
              <h3>Maatwerkproject</h3>
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
                  <strong>Hosting &amp; Security:</strong> €55 - €85/maand
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
              <span>Vraag offerte aan</span>
            </MagneticButton>
          </FadeUp>
        </FadeUp>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────── */}
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

      {/* ── CTA ────────────────────────────────────────────────── */}
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
