export default function HeroHome() {
    return (
        <>

            <div id="page-home" className="page active">

                {/* <!-- Hero -- */}
                <section className="hero">
                    <div className="hero-content">
                        <div className="hero-eyebrow">Aesthetic Excellence</div>
                        <h1>Enhancing Beauty.<br /><em>Elevating Confidence.</em></h1>
                        <p className="hero-desc">Advanced aesthetic treatments for skin, body and hair with world-class care and cutting-edge technology for natural, lasting results.</p>
                        <div className="hero-actions">
                            <a href="#" className="btn btn-primary" >Book Consultation</a>
                            <a href="#" className="btn btn-outline">Explore Treatments</a>
                        </div>
                        <div className="hero-stats">
                            <div>
                                <div className="hero-stat-num">10<span>+</span></div>
                                <div className="hero-stat-label">Years Excellence</div>
                            </div>
                            <div>
                                <div className="hero-stat-num">15K<span>+</span></div>
                                <div className="hero-stat-label">Happy Clients</div>
                            </div>
                            <div>
                                <div className="hero-stat-num">20<span>+</span></div>
                                <div className="hero-stat-label">Expert Doctors</div>
                            </div>
                            <div>
                                <div className="hero-stat-num">50<span>+</span></div>
                                <div className="hero-stat-label">Treatments</div>
                            </div>
                        </div>
                    </div>
                    <div className="hero-image-wrap">
                        <div className="hero-image">
                            <svg viewBox="0 0 400 500" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '80%', opacity: 0.6 }}>
                                <ellipse cx="200" cy="160" rx="80" ry="100" fill="rgba(255,255,255,0.5)" />
                                <ellipse cx="200" cy="350" rx="100" ry="120" fill="rgba(255,255,255,0.3)" />
                                <circle cx="200" cy="120" r="55" fill="rgba(255,255,255,0.6)" />
                            </svg>
                        </div>
                        <div className="hero-badge">
                            <div className="hero-badge-text">Excellence in<br />Aesthetic Care</div>
                            <div className="hero-badge-sub">FDA Approved Treatments</div>
                        </div>
                    </div>
                </section>

            </div>

        </>
    )
}
