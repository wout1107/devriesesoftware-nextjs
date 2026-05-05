import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export type RelatedItem = {
    title: string
    subtitle?: string
    href: string
}

export default function RelatedGrid({
    title,
    items,
    columns = 3,
}: {
    title: string
    items: RelatedItem[]
    columns?: 2 | 3 | 4 | 5
}) {
    return (
        <div>
            <h2 className="seo__h2" style={{ marginBottom: '2.5rem' }}>
                {title}
            </h2>
            <div className={`seo__grid seo__grid--${columns}`}>
                {items.map((item, i) => (
                    <Link key={i} href={item.href} className="seo__related-card">
                        <div>
                            <span className="seo__related-card-title">{item.title}</span>
                            {item.subtitle && (
                                <span className="seo__related-card-sub">{item.subtitle}</span>
                            )}
                        </div>
                        <ArrowRight size={20} className="seo__related-card-arrow" />
                    </Link>
                ))}
            </div>
        </div>
    )
}
