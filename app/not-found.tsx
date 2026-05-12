import type { Metadata } from 'next'
import Link from 'next/link'
import { Inter, Poppins } from 'next/font/google'
import { ArrowRight, Compass, Home, MessageCircle } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import './(app)/globals.css'
import '@/styles/NotFound.css'

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    preload: true,
    variable: '--font-body',
})

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    display: 'swap',
    preload: true,
    variable: '--font-heading',
})

export const metadata: Metadata = {
    title: 'Pagina niet gevonden | Devriese Software',
    description:
        'Deze pagina bestaat niet (meer). Bekijk onze diensten, portfolio of neem contact op — we helpen u graag verder.',
    robots: { index: false, follow: true },
}

const SUGGESTIONS: { label: string; href: string }[] = [
    { label: 'Home', href: '/' },
    { label: 'Diensten', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Website laten maken', href: '/website-laten-maken' },
    { label: 'Webshop laten maken', href: '/webshop-laten-maken' },
    { label: 'App ontwikkeling', href: '/app-ontwikkeling' },
    { label: 'SEO-optimalisatie', href: '/seo-optimalisatie' },
]

export default function GlobalNotFound() {
    return (
        <html lang="nl">
            <body className={`${inter.variable} ${poppins.variable}`}>
                <Navigation />
                <section className="nf">
                    <div className="nf__orbs" aria-hidden>
                        <span className="nf__orb nf__orb--green" />
                        <span className="nf__orb nf__orb--orange" />
                    </div>

                    <div className="nf__content">
                        <span className="nf__badge">
                            <Compass size={14} />
                            Pagina niet gevonden
                        </span>

                        <h1 className="nf__code">404</h1>

                        <h2 className="nf__title">Oeps — deze pagina bestaat niet (meer).</h2>

                        <p className="nf__lead">
                            Misschien is de link verouderd of getypt met een foutje. Geen probleem — kies hieronder
                            waar u naartoe wilt, of stuur ons een berichtje.
                        </p>

                        <div className="nf__cta-row">
                            <Link href="/" className="nf-btn nf-btn--primary">
                                <Home size={18} />
                                Terug naar home
                            </Link>
                            <Link href="/contact" className="nf-btn nf-btn--secondary">
                                <MessageCircle size={18} />
                                Neem contact op
                            </Link>
                        </div>

                        <div className="nf__suggestions">
                            <h3 className="nf__suggestions-title">Populaire pagina&apos;s</h3>
                            <div className="nf__links">
                                {SUGGESTIONS.map((s) => (
                                    <Link key={s.href} href={s.href} className="nf__link">
                                        <span>{s.label}</span>
                                        <ArrowRight size={16} className="nf__link-arrow" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </body>
        </html>
    )
}
