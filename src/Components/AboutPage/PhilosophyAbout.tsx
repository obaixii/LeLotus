export default function PhilosophyAbout() {
    return (
        <section style={{ background: 'var(--white)' }}>
            <div className="container">
                <div className="philosophy-grid">
                    <div className="philosophy-text">
                        <div className="section-label">Our Philosophy</div>
                        <h2>Beauty Rooted in <em>Confidence</em></h2>
                        <div className="section-divider"></div>
                        <p>We believe in timeless, natural results. Using advanced technology and a personalized approach, we deliver safe, effective treatments that bring out the best in you.</p>
                        <p>Our expert team of doctors and specialists use evidence-based treatments to help you look your best — maintaining authenticity while enhancing what makes you uniquely beautiful.</p>
                        <p>Every treatment plan is carefully crafted for each individual, ensuring results that complement your natural features and exceed your expectations.</p>
                    </div>
                    <div className="about-image-stack">
                        <div className="about-img-main" style={{ aspectRatio: '4/5' }}>
                            <svg viewBox="0 0 300 380" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '70%', opacity: '0.5' }}>
                                <ellipse cx="150" cy="120" rx="65" ry="80" fill="rgba(255,255,255,0.7)" />
                                <ellipse cx="150" cy="280" rx="80" ry="70" fill="rgba(255,255,255,0.4)" />
                            </svg>
                        </div>
                        <div className="about-img-accent">
                            <span style={{ fontSize: '2rem', opacity: '0.6' }}>🌸</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>)
}
