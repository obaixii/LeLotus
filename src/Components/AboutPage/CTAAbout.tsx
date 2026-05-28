import { Link } from "react-router-dom";

export default function CTAAbout() {
    return (
        <section className="cta-banner">
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <h2>Ready to Begin Your<br />Transformation?</h2>
                <p>Book a consultation today and take the first step.</p>
                <Link to="/booking" className="btn btn-outline-white">Book Consultation</Link>
            </div>
        </section>)
}
