export default function InfoBooking() {
    return (
        <div className="booking-info">
            <div className="booking-info-card">
                <h3>Clinic Information</h3>
                <ul className="info-list">
                    <li>
                        <span className="icon">📍</span>
                        <span>Le Lotus Clinique, Rawalpindi, Punjab, Pakistan</span>
                    </li>
                    <li>
                        <span className="icon">📞</span>
                        <a href="tel:+923000000000" style={{ color: 'inherit', textDecoration: 'none' }}>
                            +92 300 000 0000
                        </a>
                    </li>
                    <li>
                        <span className="icon">✉</span>
                        <a href="mailto:info@lelotusc.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                            info@lelotusc.com
                        </a>
                    </li>
                    <li>
                        <span className="icon">🕐</span>
                        <span>Monday – Saturday: 10:00 AM – 7:00 PM</span>
                    </li>
                    <li>
                        <span className="icon">📅</span>
                        <span>Sunday: By appointment only</span>
                    </li>
                </ul>
            </div>

            <div className="help-card">
                <div style={{ fontSize: '2rem', marginBottom: '8px' }}>📞</div>
                <h4>Need Help?</h4>
                <p>Our team is here to assist you. Call us directly for immediate assistance.</p>
                <a href="tel:+923000000000" className="btn btn-outline-white">Contact Us</a>
            </div>
        </div>
    )
}