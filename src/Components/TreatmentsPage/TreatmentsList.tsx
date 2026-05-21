import { useState } from "react"

const treatments = [
    {
        cat: 'skin',
        emoji: '🫧',
        bg: 'linear-gradient(160deg, #c8e8e0, #9dd0c4)',
        title: 'Skin Treatments',
        desc: 'Facial rejuvenation with our advanced solutions including HydraFacial, chemical peels, microneedling, and pigmentation correction. Our dermatologists create customized protocols for your skin type and concerns.',
        tags: ['HydraFacial', 'Chemical Peels', 'Microneedling', 'Pigmentation'],
    },
    {
        cat: 'hair',
        emoji: '✨',
        bg: 'linear-gradient(160deg, #e8dfd0, #d4c8b0)',
        title: 'Hair Restoration',
        desc: 'Comprehensive hair loss solutions including PRP therapy, mesotherapy, low-level laser therapy, and hair transplant consultations. We address hair thinning for both men and women.',
        tags: ['PRP Therapy', 'Mesotherapy', 'LLLT', 'Hair Analysis'],
    },
    {
        cat: 'body',
        emoji: '💫',
        bg: 'linear-gradient(160deg, #d0e4e8, #b0ccd4)',
        title: 'Body Contouring',
        desc: 'Non-invasive body sculpting to define and reshape using cryolipolysis, RF body tightening, and cellulite reduction treatments. Achieve your ideal silhouette without surgery.',
        tags: ['Cryolipolysis', 'RF Tightening', 'Cellulite Reduction'],
    },
    {
        cat: 'injectables',
        emoji: '💉',
        bg: 'linear-gradient(160deg, #e0d8e8, #c8b8d4)',
        title: 'Injectables',
        desc: 'Anti-wrinkle and contouring injections including Botulinum toxin for dynamic wrinkles and hyaluronic acid dermal fillers for volume restoration and facial harmonization.',
        tags: ['Botox', 'Dermal Fillers', 'Lip Enhancement', 'Jawline'],
    },
    {
        cat: 'laser',
        emoji: '⚡',
        bg: 'linear-gradient(160deg, #fce8d8, #f0c8a8)',
        title: 'Laser Treatments',
        desc: 'Advanced laser solutions including laser hair removal, fractional CO2 resurfacing, Q-switched Nd:YAG for pigmentation, and vascular lesion treatments.',
        tags: ['Laser Hair Removal', 'Fractional CO2', 'Nd:YAG', 'Vascular'],
    },
    {
        cat: 'skin',
        emoji: '🌿',
        bg: 'linear-gradient(160deg, #d8e8d0, #b8d4b0)',
        title: 'Acne Treatment',
        desc: 'Comprehensive acne management combining medical-grade skincare, light therapy, chemical exfoliation, and scar revision treatments for clear, smooth skin.',
        tags: ['Blue Light', 'Scar Revision', 'Medical Skincare'],
    },
]

export default function TreatmentsList() {
    const [active, setActive] = useState('all')

    const visible = active === 'all'
        ? treatments
        : treatments.filter(t => t.cat === active)

    return (
        <div id="treatments-list">
            {visible.map((t, i) => (
                <div key={i} className="treatment-list-card">
                    <div className="tlc-img" style={{ background: t.bg }}>{t.emoji}</div>
                    <div className="tlc-body">
                        <h3>{t.title}</h3>
                        <p>{t.desc}</p>
                        <div className="tlc-tags">
                            {t.tags.map(tag => (
                                <span key={tag} className="tag">{tag}</span>
                            ))}
                        </div>
                        <a href="#" className="btn btn-primary btn-sm">Book This Treatment</a>
                    </div>
                </div>
            ))}
        </div>)
}
