import AccordionItem from '../Components/PrivacyPolicyPage/AccordionItem'
import { privacySections, privacyMeta } from '../Data/PrivacyPolicy/sections'

export default function PrivacyPolicy() {
    return (
        <div id="page-privacy" className="page">

            {/* ─── Hero ─── */}
            <div className="page-hero" style={{ background: 'linear-gradient(135deg, #f8fafb 0%, #eef6f6 100%)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', right: '-5%', top: '-20%', width: '50%', height: '140%', borderRadius: '50% 0 0 50%', background: 'linear-gradient(160deg, rgba(100,196,149,0.07), rgba(0,148,163,0.05))', pointerEvents: 'none' }} />
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <p className="section-label">Legal Document</p>
                    <h1>Privacy <em style={{ fontStyle: 'italic', color: 'var(--color-teal)' }}>Policy</em></h1>
                    <div className="section-divider" />
                    <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', marginBottom: '24px' }}>
                        {privacyMeta.map(item => (
                            <div key={item.label} className="pp-meta-chip">
                                <span className="pp-meta-label">{item.label}</span>
                                <span className="pp-meta-value">{item.value}</span>
                            </div>
                        ))}
                    </div>
                    <p style={{ maxWidth: '560px' }}>
                        This policy applies to all patients, visitors, and users of Le Lotus Clinique services across all locations in Pakistan including Islamabad, Rawalpindi, Lahore, Karachi, Peshawar, and Multan.
                    </p>
                </div>
            </div>

            {/* ─── Accordion Body ─── */}
            <section>
                <div className="container">
                    <div className="pp-body">
                        {privacySections.map((s, i) => (
                            <AccordionItem key={s.id} num={i + 1} section={s} />
                        ))}
                    </div>
                </div>
            </section>

        </div>
    )
}