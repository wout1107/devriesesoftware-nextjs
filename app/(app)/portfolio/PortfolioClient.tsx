"use client";

import { useRef } from "react";
import { ExternalLink, Globe, Palette, Zap } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useGSAP } from "@gsap/react";
import {
    gsap,
    SplitText,
    registerGsapPlugins,
} from "@/components/animations/gsap-register";
import FadeUp from "@/components/animations/FadeUp";
import SplitTextReveal from "@/components/animations/SplitTextReveal";
import MagneticButton from "@/components/animations/MagneticButton";
import ParallaxImage from "@/components/animations/ParallaxImage";
import "../../../styles/Portfolio.css";

interface Project {
    id: string | number;
    name: string;
    category: string;
    description: string;
    image: {
        url: string;
        alt?: string;
    };
    features: { feature: string }[];
    technologies: { name: string; type: string }[];
    websiteUrl?: string;
    color?: string;
}

interface PortfolioClientProps {
    projects: Project[];
}

export default function PortfolioClient({ projects }: PortfolioClientProps) {
    const router = useRouter();
    const pageRef = useRef<HTMLDivElement | null>(null);
    const gridRef = useRef<HTMLDivElement | null>(null);

    useGSAP(
        () => {
            registerGsapPlugins();
            const mm = gsap.matchMedia();

            mm.add("(prefers-reduced-motion: no-preference)", () => {
                if (!gridRef.current) return;
                const cards = Array.from(
                    gridRef.current.children
                ) as HTMLElement[];

                cards.forEach((card) => {
                    const image = card.querySelector<HTMLElement>(".portfolio-image");
                    const category = card.querySelector<HTMLElement>(".portfolio-category");
                    const title = card.querySelector<HTMLHeadingElement>(
                        ".portfolio-header-content h3"
                    );
                    const desc = card.querySelector<HTMLElement>(".portfolio-description");
                    const features = card.querySelectorAll<HTMLLIElement>(
                        ".portfolio-features li"
                    );
                    const tags = card.querySelectorAll<HTMLElement>(".portfolio-tags .tag");
                    const linkBtn = card.querySelector<HTMLElement>(".portfolio-link-btn");

                    const tl = gsap.timeline({
                        defaults: { ease: "power3.out" },
                        scrollTrigger: {
                            trigger: card,
                            start: "top 80%",
                            once: true,
                        },
                    });

                    if (image) {
                        tl.fromTo(
                            image,
                            { clipPath: "inset(0 0 100% 0)", autoAlpha: 0 },
                            {
                                clipPath: "inset(0 0 0% 0)",
                                autoAlpha: 1,
                                duration: 1,
                                ease: "power4.out",
                            },
                            0
                        );
                    }
                    if (category) {
                        tl.from(category, { x: -28, autoAlpha: 0, duration: 0.55 }, 0.25);
                    }
                    if (title) {
                        const split = new SplitText(title, { type: "words" });
                        tl.from(
                            split.words,
                            { yPercent: 80, autoAlpha: 0, duration: 0.7, stagger: 0.05 },
                            0.35
                        );
                    }
                    if (desc) {
                        tl.from(desc, { y: 18, autoAlpha: 0, duration: 0.55 }, 0.55);
                    }
                    if (features.length > 0) {
                        tl.from(
                            features,
                            { x: -16, autoAlpha: 0, duration: 0.45, stagger: 0.06 },
                            0.65
                        );
                    }
                    if (tags.length > 0) {
                        tl.from(
                            tags,
                            {
                                y: 14,
                                autoAlpha: 0,
                                duration: 0.45,
                                stagger: 0.05,
                                ease: "back.out(1.5)",
                            },
                            0.8
                        );
                    }
                    if (linkBtn) {
                        tl.from(linkBtn, { y: 16, autoAlpha: 0, duration: 0.5 }, 0.95);
                    }
                });
            });

            mm.add("(prefers-reduced-motion: reduce)", () => {
                if (!gridRef.current) return;
                gsap.set(gridRef.current.querySelectorAll("*"), {
                    autoAlpha: 1,
                    x: 0,
                    y: 0,
                    clipPath: "none",
                });
            });
        },
        { scope: pageRef }
    );

    return (
        <div ref={pageRef} className="portfolio-page">
            <FadeUp className="portfolio-header">
                <div className="portfolio-icon-wrapper">
                    <Globe size={48} className="portfolio-header-icon" />
                </div>
                <h1>Ons Portfolio</h1>
                <p>Ontdek de websites die we met passie hebben ontwikkeld</p>
            </FadeUp>

            <div ref={gridRef} className="portfolio-grid">
                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        className="portfolio-card"
                        style={{ "--project-color": project.color || "#424633" } as React.CSSProperties}
                    >
                        <ParallaxImage shift={8} className="portfolio-image">
                            <Image
                                src={project.image.url}
                                alt={project.image.alt || project.name}
                                width={600}
                                height={400}
                                priority={index === 0}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            {project.websiteUrl && (
                                <div className="portfolio-overlay">
                                    <a
                                        href={project.websiteUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="overlay-btn"
                                        aria-label={`Bezoek ${project.name}`}
                                    >
                                        <ExternalLink size={20} />
                                        <span>Bekijk Live</span>
                                    </a>
                                </div>
                            )}
                        </ParallaxImage>

                        <div className="portfolio-content">
                            <div className="portfolio-header-content">
                                <span
                                    className="portfolio-category"
                                    style={{ backgroundColor: project.color || "#424633" }}
                                >
                                    {project.category}
                                </span>
                                <h3>{project.name}</h3>
                            </div>

                            <p className="portfolio-description">{project.description}</p>

                            {project.features && project.features.length > 0 && (
                                <div className="portfolio-features">
                                    <h4>
                                        <Zap size={16} />
                                        Kenmerken:
                                    </h4>
                                    <ul>
                                        {project.features.map((f, i) => (
                                            <li key={i}>{f.feature}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {project.technologies && project.technologies.length > 0 && (
                                <div className="portfolio-tags">
                                    {project.technologies.map((tech, i) => (
                                        <span key={i} className="tag">
                                            <Palette size={12} />
                                            {tech.name}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {project.websiteUrl && (
                                <a
                                    href={project.websiteUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="portfolio-link-btn"
                                    style={{ backgroundColor: project.color || "#424633" }}
                                >
                                    <Globe size={18} />
                                    Bezoek Website
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <FadeUp className="portfolio-cta">
                <div className="portfolio-cta-content">
                    <SplitTextReveal as="h2" type="words" stagger={0.05}>
                        Meer projecten volgen binnenkort
                    </SplitTextReveal>
                    <p>
                        We werken voortdurend aan nieuwe, innovatieve projecten. Wilt u ook
                        een professioneel ticketing platform, portfolio website of andere
                        digitale oplossing? Neem contact op!
                    </p>
                    <MagneticButton
                        className="btn-primary"
                        onClick={() => router.push("/contact")}
                    >
                        Start Uw Project
                    </MagneticButton>
                </div>
            </FadeUp>
        </div>
    );
}
