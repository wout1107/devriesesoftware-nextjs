"use client";

import { motion } from "framer-motion";
import { ExternalLink, Globe, Palette, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import "../../../styles/Portfolio.css";

// Type for project data from Payload CMS
interface Project {
    id: string;
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
    return (
        <div className="portfolio-page">
            <motion.div
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.3 }}
                className="portfolio-header"
            >
                <div className="portfolio-icon-wrapper">
                    <Globe size={48} className="portfolio-header-icon" />
                </div>
                <h1>Ons Portfolio</h1>
                <p>Ontdek de websites die we met passie hebben ontwikkeld</p>
            </motion.div>

            <div className="portfolio-grid">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ y: 20 }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.25, delay: index * 0.1 }}
                        className="portfolio-card"
                        style={{ "--project-color": project.color || "#424633" } as React.CSSProperties}
                    >
                        <div className="portfolio-image">
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
                        </div>

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
                    </motion.div>
                ))}
            </div>

            {/* Coming Soon Section */}
            <motion.div
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.3 }}
                className="portfolio-cta"
            >
                <div className="portfolio-cta-content">
                    <h2>Meer projecten volgen binnenkort</h2>
                    <p>
                        We werken voortdurend aan nieuwe, innovatieve projecten. Wilt u ook
                        een professioneel ticketing platform, portfolio website of andere
                        digitale oplossing? Neem contact op!
                    </p>
                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                        <Link href="/contact" className="btn-primary">
                            Start Uw Project
                        </Link>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}
