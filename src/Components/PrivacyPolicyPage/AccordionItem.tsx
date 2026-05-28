import { useState } from 'react'
import type { Section } from '../../Data/PrivacyPolicy/sections'
import PPList from './PPList'

type AccordionItemProps = {
    num: number
    section: Section
}

export default function AccordionItem({ num, section }: AccordionItemProps) {
    const [open, setOpen] = useState(false)
    const { title, paragraphs, list, groups, note, trailingParagraph, contact } = section

    return (
        <div className="privacy-section">
            <button className="pp-accordion-head" onClick={() => setOpen(o => !o)}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <span className="section-label" style={{ margin: 0 }}>
                        {String(num).padStart(2, '0')}
                    </span>
                    <h2 style={{ margin: 0 }}>{title}</h2>
                </div>
                <span className="pp-chevron">{open ? '−' : '+'}</span>
            </button>

            {open && (
                <div className="pp-accordion-body">

                    {/* Leading paragraphs */}
                    {paragraphs?.map((p, i) => <p key={i}>{p}</p>)}

                    {/* Grouped subheading + list pairs */}
                    {groups?.map((g, i) => (
                        <div key={i}>
                            <p className="privacy-subheading">{g.subheading}</p>
                            <PPList items={g.items} />
                        </div>
                    ))}

                    {/* Simple list */}
                    {list && <PPList items={list} />}

                    {/* Note block */}
                    {note && <div className="privacy-note">{note}</div>}

                    {/* Trailing paragraph */}
                    {trailingParagraph && (
                        <p>
                            {trailingParagraph.includes('@')
                                ? <>
                                    {trailingParagraph.split(/([\w.-]+@[\w.-]+\.\w+)/g).map((part, i) =>
                                        part.includes('@')
                                            ? <a key={i} href={`mailto:${part}`} className="privacy-link">{part}</a>
                                            : part
                                    )}
                                </>
                                : trailingParagraph
                            }
                        </p>
                    )}

                    {/* Contact card */}
                    {contact && (
                        <div className="privacy-contact-card">
                            <strong>Le Lotus Clinique</strong>
                            {contact.map(item => (
                                <p key={item.label}>
                                    <span style={{ marginRight: '8px' }}>{item.icon}</span>
                                    <strong style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', marginRight: '6px' }}>{item.label}:</strong>
                                    {item.href
                                        ? <a href={item.href} className="privacy-link">{item.value}</a>
                                        : item.value
                                    }
                                </p>
                            ))}
                        </div>
                    )}

                </div>
            )}
        </div>
    )
}