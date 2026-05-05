'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

type Faq = { question: string; answer: string }

export default function FaqAccordion({ faqs }: { faqs: Faq[] }) {
    const [open, setOpen] = useState<number | null>(0)

    return (
        <div className="seo__faq">
            {faqs.map((faq, i) => {
                const isOpen = open === i
                return (
                    <div
                        key={i}
                        className={`seo__faq-item${isOpen ? ' seo__faq-item--open' : ''}`}
                    >
                        <button
                            onClick={() => setOpen(isOpen ? null : i)}
                            className="seo__faq-toggle"
                            aria-expanded={isOpen}
                        >
                            <span className="seo__faq-question">{faq.question}</span>
                            <span className="seo__faq-icon">
                                <ChevronDown size={20} />
                            </span>
                        </button>
                        <div className="seo__faq-body">
                            <div className="seo__faq-body-inner">
                                <div className="seo__faq-answer">{faq.answer}</div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
