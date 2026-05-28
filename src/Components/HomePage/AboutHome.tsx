import { Link } from 'react-router-dom'

export default function AboutHome() {
    return (
        <section className="about-home">
            <div className="container">
                <div className="grid-2">
                    <div className="about-image-stack">
                        <div className="about-img-main">
                            <svg viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '70%', opacity: 0.5 }}>
                                <ellipse cx="150" cy="130" rx="70" ry="90" fill="rgba(255,255,255,0.7)" />
                                <ellipse cx="150" cy="300" rx="90" ry="80" fill="rgba(255,255,255,0.4)" />
                            </svg>
                        </div>
                        <div className="about-img-accent">
                            <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '50%', opacity: 0.7 }}>
                                <ellipse cx="18" cy="28" rx="3" ry="5" fill="white" opacity="0.4" />
                                <ellipse cx="18" cy="22" rx="5" ry="9" fill="white" opacity="0.6" />
                                <ellipse cx="12" cy="20" rx="4" ry="7" transform="rotate(-30 12 20)" fill="white" opacity="0.5" />
                                <ellipse cx="24" cy="20" rx="4" ry="7" transform="rotate(30 24 20)" fill="white" opacity="0.5" />
                            </svg>
                        </div>
                    </div>
                    <div>
                        <div className="section-label">About Le Lotus Clinique</div>
                        <h2>Where Science Meets <em>Aesthetics</em></h2>
                        <div className="section-divider"></div>
                        <p>At Le Lotus Clinique, we believe true beauty comes from confidence. Our expert team of doctors and specialists use evidence-based treatments to help you look your best — naturally.</p>
                        <ul style={{ listStyle: 'none', margin: '24px 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem', color: '#5a6464' }}><span style={{ color: 'var(--color-teal)', fontSize: '1rem' }}>✓</span> Internationally approved treatments</li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem', color: '#5a6464' }}><span style={{ color: 'var(--color-teal)', fontSize: '1rem' }}>✓</span> Customized plans for every individual</li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem', color: '#5a6464' }}><span style={{ color: 'var(--color-teal)', fontSize: '1rem' }}>✓</span> Safe, effective & long-lasting results</li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem', color: '#5a6464' }}><span style={{ color: 'var(--color-teal)', fontSize: '1rem' }}>✓</span> Luxurious & comfortable environment</li>
                        </ul>
                        <Link to="/treatments" className="btn btn-primary">Explore Treatments →</Link>
                    </div>
                </div>
            </div>
        </section>)
}
