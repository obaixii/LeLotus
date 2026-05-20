import React from 'react'

export default function WhyUsHome() {
    return (
        <section className="why-us">
            <div className="container">
                <div style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto 56px' }}>
                    <div className="section-label" style={{ color: 'var(--mint)' }}>Why Choose Us</div>
                    <h2>Committed to Your<br /><em style={{ color: 'var(--mint)' }}>Beauty & Wellbeing</em></h2>
                </div>
                <div className="grid-4">
                    <div className="why-card">
                        <div className="why-icon">👨‍⚕️</div>
                        <h4>Expert Team</h4>
                        <p>Experienced doctors & specialists with international training.</p>
                    </div>
                    <div className="why-card">
                        <div className="why-icon">🔬</div>
                        <h4>Advanced Technology</h4>
                        <p>US FDA approved, state-of-the-art equipment.</p>
                    </div>
                    <div className="why-card">
                        <div className="why-icon">📋</div>
                        <h4>Personalized Care</h4>
                        <p>Tailored treatment plans designed exclusively for you.</p>
                    </div>
                    <div className="why-card">
                        <div className="why-icon">⭐</div>
                        <h4>Premium Experience</h4>
                        <p>Luxury clinic environment with top-tier service.</p>
                    </div>
                </div>
            </div>
        </section>)
}
