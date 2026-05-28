import { Link } from 'react-router-dom'

export default function TreatmentsHome() {
    return (
        <section className="treatments-home">
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px' }}>
                    <div>
                        <div className="section-label">Treatments</div>
                        <h2>Our Signature<br />Treatments</h2>
                    </div>
                    <Link to="/treatments" className="btn btn-outline">View All Treatments</Link>
                </div>
                <div className="grid-4">
                    <div className="treatment-card">
                        <div className="treatment-card-img" style={{ background: 'linear-gradient(160deg, #c8e8e0, #9dd0c4)' }}>🫧</div>
                        <div className="treatment-card-body">
                            <h4>Skin Treatments</h4>
                            <p>Facial rejuvenation with our advanced solutions.</p>
                            <span className="btn btn-ghost">Explore</span>
                        </div>
                    </div>
                    <div className="treatment-card">
                        <div className="treatment-card-img" style={{ background: 'linear-gradient(160deg, #e8dfd0, #d4c8b0)' }}>✨</div>
                        <div className="treatment-card-body">
                            <h4>Hair Restoration</h4>
                            <p>Advanced solutions for hair loss and scalp concerns.</p>
                            <span className="btn btn-ghost">Explore</span>
                        </div>
                    </div>
                    <div className="treatment-card">
                        <div className="treatment-card-img" style={{ background: 'linear-gradient(160deg, #d0e4e8, #b0ccd4)' }}>💫</div>
                        <div className="treatment-card-body">
                            <h4>Body Contouring</h4>
                            <p>Sculpt and define your body with non-surgical methods.</p>
                            <span className="btn btn-ghost">Explore</span>
                        </div>
                    </div>
                    <div className="treatment-card">
                        <div className="treatment-card-img" style={{ background: 'linear-gradient(160deg, #e0d8e8, #c8b8d4)' }}>⚡</div>
                        <div className="treatment-card-body">
                            <h4>Laser Treatments</h4>
                            <p>Advanced laser solutions for skin rejuvenation.</p>
                            <span className="btn btn-ghost">Explore</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
