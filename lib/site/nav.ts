// Eén bron voor de site-navigatie, socials en contactgegevens.
// (Geen Payload-globals in dit project; e-mail is overal hardcoded.)

export type NavKey = 'home' | 'services' | 'portfolio' | 'blog' | 'pricing' | 'contact'

export type NavItem = {
    key: NavKey
    label: string
    href: string
    /** Welke count-prop dit item toont als badge ('portfolio' | 'blog') */
    countKey?: 'portfolio' | 'blog'
}

// Volgorde zoals gevraagd. "Over ons" zit bewust NIET in de hoofdnav (staat in de footer).
export const NAV_ITEMS: NavItem[] = [
    { key: 'home', label: 'Home', href: '/' },
    { key: 'services', label: 'Diensten', href: '/services' },
    { key: 'portfolio', label: 'Portfolio', href: '/portfolio', countKey: 'portfolio' },
    { key: 'blog', label: 'Blog', href: '/blog', countKey: 'blog' },
    { key: 'pricing', label: 'Prijzen', href: '/pricing' },
    { key: 'contact', label: 'Contact', href: '/contact' },
]

export const CONTACT_EMAIL = 'info@devriesesoftware.be'

export const LOCATION = 'Tielt (BE)'

// Enkel de socials die de site echt heeft.
export type Social = { index: string; label: string; href: string }
export const SOCIALS: Social[] = [
    { index: '1.0', label: 'LinkedIn', href: 'https://www.linkedin.com/in/wout-devriese-a0b460273/' },
    { index: '1.1', label: 'GitHub', href: 'https://github.com/Wout1107' },
    { index: '1.2', label: 'Facebook', href: 'https://www.facebook.com/devriesesoftware' },
]

export const PRIVACY_HREF = '/privacy'

export type NavCounts = { portfolio: number | null; blog: number | null }
