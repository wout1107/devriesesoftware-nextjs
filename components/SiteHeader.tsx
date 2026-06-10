"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import MenuPanel from "./MenuPanel";
import type { NavCounts } from "@/lib/site/nav";
import "../styles/SiteHeader.css";

type LenisLike = { stop: () => void; start: () => void };

export default function SiteHeader({ counts }: { counts: NavCounts }) {
    const [open, setOpen] = useState(false);
    const [atTop, setAtTop] = useState(true);
    const triggerRef = useRef<HTMLButtonElement | null>(null);

    const close = useCallback(() => setOpen(false), []);

    // Groene bar bovenaan; vervaagt zodra je scrollt
    useEffect(() => {
        const onScroll = () => setAtTop(window.scrollY < 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Body scroll lock + Lenis pauzeren terwijl het paneel open is
    useEffect(() => {
        const lenis = (window as unknown as { __lenis?: LenisLike }).__lenis;
        if (open) {
            const sbw = window.innerWidth - document.documentElement.clientWidth;
            document.documentElement.style.overflow = "hidden";
            if (sbw > 0) document.documentElement.style.paddingRight = `${sbw}px`;
            lenis?.stop();
        } else {
            document.documentElement.style.overflow = "";
            document.documentElement.style.paddingRight = "";
            lenis?.start();
        }
        return () => {
            document.documentElement.style.overflow = "";
            document.documentElement.style.paddingRight = "";
            lenis?.start();
        };
    }, [open]);

    // Focus terug naar de trigger bij sluiten
    const handleClose = useCallback(() => {
        close();
        // wacht tot het paneel weg is voor we focus teruggeven
        window.setTimeout(() => triggerRef.current?.focus(), 0);
    }, [close]);

    return (
        <>
            <header className={`site-header ${atTop ? "is-top" : "is-scrolled"}`}>
                <Link href="/" className="site-header-logo" aria-label="Naar homepage">
                    <Image
                        src="/DevrieseSoftwareRond.webp"
                        alt="Devriese Software"
                        width={46}
                        height={46}
                        priority
                    />
                </Link>

                <button
                    ref={triggerRef}
                    type="button"
                    className="site-header-menu-btn"
                    onClick={() => setOpen(true)}
                    aria-expanded={open}
                    aria-controls="site-menu-panel"
                    aria-haspopup="dialog"
                >
                    <span>Menu</span>
                    <Menu size={18} aria-hidden="true" />
                </button>
            </header>

            <div id="site-menu-panel">
                <MenuPanel open={open} onClose={handleClose} counts={counts} />
            </div>
        </>
    );
}
