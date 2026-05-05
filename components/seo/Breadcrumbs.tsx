import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

export type BreadcrumbItem = { name: string; href?: string }

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
    return (
        <nav aria-label="Breadcrumb" className="seo__breadcrumbs">
            <ol className="seo__breadcrumbs-list">
                <li>
                    <Link href="/">
                        <Home size={15} />
                        <span>Home</span>
                    </Link>
                </li>
                {items.map((item, i) => (
                    <li key={i}>
                        <ChevronRight size={15} />
                        {item.href ? (
                            <Link href={item.href}>{item.name}</Link>
                        ) : (
                            <span className="seo__breadcrumbs-current" aria-current="page">
                                {item.name}
                            </span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    )
}
