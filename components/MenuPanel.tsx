"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, X } from "lucide-react";
import {
    AnimatePresence,
    motion,
    useReducedMotion,
} from "motion/react";
import {
    NAV_ITEMS,
    SOCIALS,
    CONTACT_EMAIL,
    LOCATION,
    PRIVACY_HREF,
    type NavCounts,
} from "@/lib/site/nav";
import "../styles/MenuPanel.css";

type Props = {
    open: boolean;
    onClose: () => void;
    counts: NavCounts;
};

function useBrusselsClock(active: boolean) {
    const [time, setTime] = useState<string | null>(null);
    useEffect(() => {
        if (!active) return;
        const fmt = new Intl.DateTimeFormat("nl-BE", {
            hour: "2-digit",
            minute: "2-digit",
            timeZone: "Europe/Brussels",
        });
        const tick = () => setTime(fmt.format(new Date()));
        tick();
        const id = window.setInterval(tick, 60 * 1000);
        return () => window.clearInterval(id);
    }, [active]);
    return time;
}

export default function MenuPanel({ open, onClose, counts }: Props) {
    const reduce = useReducedMotion();
    const pathname = usePathname();
    const panelRef = useRef<HTMLDivElement | null>(null);
    const closeBtnRef = useRef<HTMLButtonElement | null>(null);
    const clock = useBrusselsClock(open);

    // Sluit automatisch bij route-wissel
    const lastPath = useRef(pathname);
    useEffect(() => {
        if (open && pathname !== lastPath.current) onClose();
        lastPath.current = pathname;
    }, [pathname, open, onClose]);

    // Escape + focus trap + initiële focus op sluitknop
    useEffect(() => {
        if (!open) return;
        const panel = panelRef.current;
        closeBtnRef.current?.focus();

        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                e.preventDefault();
                onClose();
                return;
            }
            if (e.key !== "Tab" || !panel) return;
            const focusables = panel.querySelectorAll<HTMLElement>(
                'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
            );
            if (focusables.length === 0) return;
            const first = focusables[0];
            const last = focusables[focusables.length - 1];
            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        };
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, [open, onClose]);

    const linkTransition = (i: number) =>
        reduce
            ? { duration: 0 }
            : {
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1] as const,
                  delay: 0.18 + i * 0.06,
              };

    return (
        <AnimatePresence>
            {open && (
                <div className="menu-root" role="dialog" aria-modal="true" aria-label="Hoofdmenu">
                    {/* Backdrop */}
                    <motion.button
                        type="button"
                        className="menu-backdrop"
                        aria-label="Menu sluiten"
                        onClick={onClose}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: reduce ? 0 : 0.3 }}
                    />

                    {/* Panel */}
                    <motion.div
                        ref={panelRef}
                        className="menu-panel"
                        data-lenis-prevent
                        initial={reduce ? { opacity: 0 } : { x: "100%" }}
                        animate={reduce ? { opacity: 1 } : { x: 0 }}
                        exit={reduce ? { opacity: 0 } : { x: "100%" }}
                        transition={
                            reduce
                                ? { duration: 0.2 }
                                : { type: "spring", stiffness: 300, damping: 30 }
                        }
                    >
                        <div className="menu-panel-head">
                            <span className="menu-mono menu-eyebrow">MENU</span>
                            <button
                                ref={closeBtnRef}
                                type="button"
                                className="menu-close"
                                onClick={onClose}
                                aria-label="Menu sluiten"
                            >
                                <X size={22} />
                            </button>
                        </div>

                        {/* Nav links */}
                        <nav className="menu-nav" aria-label="Hoofdnavigatie">
                            <ul>
                                {NAV_ITEMS.map((item, i) => {
                                    const active = pathname === item.href;
                                    const count =
                                        item.countKey ? counts[item.countKey] : null;
                                    return (
                                        <li key={item.key} className="menu-nav-line">
                                            <motion.span
                                                className="menu-nav-mask-inner"
                                                initial={
                                                    reduce
                                                        ? { opacity: 0 }
                                                        : { y: "110%" }
                                                }
                                                animate={
                                                    reduce
                                                        ? { opacity: 1 }
                                                        : { y: 0 }
                                                }
                                                transition={linkTransition(i)}
                                            >
                                                <Link
                                                    href={item.href}
                                                    className={`menu-nav-link ${active ? "is-active" : ""}`}
                                                    aria-current={active ? "page" : undefined}
                                                    onClick={onClose}
                                                >
                                                    {item.label.toUpperCase()}
                                                </Link>
                                                {count != null && (
                                                    <span className="menu-nav-badge menu-mono">
                                                        [{count}]
                                                    </span>
                                                )}
                                            </motion.span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </nav>

                        {/* Let's talk */}
                        <div className="menu-divider" />
                        <div className="menu-block">
                            <span className="menu-mono menu-label">LET&apos;S TALK</span>
                            <a href={`mailto:${CONTACT_EMAIL}`} className="menu-email">
                                {CONTACT_EMAIL.toUpperCase()}
                            </a>
                            <div className="menu-locale">
                                <span>{LOCATION}</span>
                                <span className="menu-mono menu-clock" suppressHydrationWarning>
                                    {clock ?? "--:--"}
                                </span>
                            </div>
                        </div>

                        {/* Socials */}
                        {SOCIALS.length > 0 && (
                            <>
                                <div className="menu-divider" />
                                <div className="menu-block">
                                    <span className="menu-mono menu-label">[SOCIALS]</span>
                                    <ul className="menu-socials menu-mono">
                                        {SOCIALS.map((s) => (
                                            <li key={s.label}>
                                                <a
                                                    href={s.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <span className="menu-social-idx">
                                                        {s.index}
                                                    </span>
                                                    {s.label.toUpperCase()}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </>
                        )}

                        {/* Footer */}
                        <div className="menu-foot">
                            <Link href={PRIVACY_HREF} onClick={onClose} className="menu-foot-link">
                                Privacy <ArrowUpRight size={14} />
                            </Link>
                            <span className="menu-mono menu-copy">
                                © 2026 Devriese Software
                            </span>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
