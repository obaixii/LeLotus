import { Link } from 'react-router-dom'

const locations = [
    {
        city: "Islamabad — F8-1",
        address: "United Plaza, Besides Studio M Salon, Street No. 33, Sector F8-1",
        phones: ["0318-5457381", "0305-5181166"],
        hours: {
            monSat: "10:00 AM – 8:00 PM",
            sun: "12:00 PM – 7:00 PM"
        }, map: "https://maps.app.goo.gl/nkSzrMtbbsH1wa138"
    },
    {
        city: "Rawalpindi — DHA Phase 2",
        address: "Crystal Heights, Plaza 14, Bank Al Habib Building, Main GT Road",
        phones: ["0335-5181166", "0318-5457380"],
        hours: {
            monSat: "10:00 AM – 8:00 PM",
            sun: "12:00 PM – 7:00 PM"
        },
        map: "https://maps.app.goo.gl/gUaab1jZLfaHmjKW9"
    },
    {
        city: "Multan",
        address: "Al Mustafa House, Gilani Colony, Ghaus-e-Azam Road",
        phones: ["0344-4455858", "061-6304305"],
        hours: {
            monSat: "10:00 AM – 8:00 PM",
            sun: "12:00 PM – 7:00 PM"
        },
        map: "https://maps.app.goo.gl/2HnTFKEfDaRYZvyv7"
    },
    {
        city: "Lahore — DHA Phase 3",
        address: "2nd Floor, Clinix Pharmacy, Z Block Commercial, DHA Phase 3",
        phones: ["0306-5181166", "0337-9923217"],
        hours: {
            monSat: "10:00 AM – 9:00 PM",
            sun: "12:00 PM – 10:00 PM"
        },
        map: "https://maps.app.goo.gl/6VBg3b7Nehfwjw9T7"
    },
    {
        city: "Karachi",
        address: "Dil-Kusha Gohar Residency, Shop #5, Main Tariq Road",
        phones: ["0318-5457382", "021-34531177"],
        hours: {
            monSat: "11:00 AM – 10:00 PM",
            sun: "3:00 PM – 10:00 PM"
        },
        map: "https://maps.app.goo.gl/bkhNH3tPVCsAJg6Z6"
    },
    {
        city: "Peshawar",
        address: "Muhammad Arcade, Above Bank of Khyber, Near McDonald's, Ring Road",
        phones: ["0331-5181166", "0337-9923216"],
        hours: {
            monSat: "10:00 AM – 8:00 PM",
            sun: "12:00 PM – 7:00 PM"
        },
        map: "https://maps.app.goo.gl/dvyvtavn5Q7HEBXT9"
    },
]

const treatments = [
    "Laser Hair Removal",
    "Medicated HydraFacial",
    "7D HIFU Lifting",
    "Fillers & Botox",
    "Hair Transplant (FUE/FUT)",
    "Body Contouring",
    "Glutathione IV Drips",
    "Plastic Surgery",
]

export default function Footer() {
    return (
        <footer>

            {/* ── Main body ── */}
            <div className="container">

                {/* Brand row */}
                <div className="footer-grid">

                    {/* Brand */}
                    <div className="footer-brand">
                        <div className="footer-logo">LE LOTUS <span>CLINIQUE</span></div>
                        <p>Pakistan's award-winning aesthetic clinic. 30+ advanced treatments across 6 cities — delivered by board-certified experts with FDA-approved technology.</p>
                        <div className="footer-socials">
                            <a href="https://www.facebook.com/share/1GPSTsQMY5/" target="_blank" rel="noreferrer" aria-label="Facebook">
                                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
                            </a>
                            <a href="https://www.instagram.com/lelotuspk" target="_blank" rel="noreferrer" aria-label="Instagram">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                            </a>
                            <a href="https://www.snapchat.com/add/lotusclinique" target="_blank" rel="noreferrer" aria-label="Snapchat">
                                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M12 2C8.5 2 7 4.5 7 7v1c-.5.1-1.5.4-1.5 1s.8.9 1.2 1c-.2.4-.5.8-1.2 1.2-.4.2-.5.6-.1.9.6.4 1.5.5 2 .5.4.6 1.2 1.4 2.6 1.4s2.2-.8 2.6-1.4c.5 0 1.4-.1 2-.5.4-.3.3-.7-.1-.9-.7-.4-1-.8-1.2-1.2.4-.1 1.2-.4 1.2-1S18.5 8.1 18 8V7c0-2.5-1.5-5-6-5z" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* 3 link cols — wrapped in a div for mobile 2-col layout */}
                    <div className="footer-cols-row">
                        <div className="footer-col">
                            <h5>Treatments</h5>
                            {treatments.map(t => (
                                <Link key={t} to="/treatments">{t}</Link>
                            ))}
                        </div>

                        <div className="footer-col">
                            <h5>Clinic</h5>
                            <Link to="/">Home</Link>
                            <Link to="/about">About Us</Link>
                            <Link to="/doctors">Our Doctors</Link>
                            <Link to="/treatments">Treatments</Link>
                            <Link to="/before-after">Before & After</Link>
                            <Link to="/booking">Book Appointment</Link>
                            <a href="mailto:hr@lelotus.pk">Careers</a>
                        </div>

                        <div className="footer-col">
                            <h5>Get in Touch</h5>
                            <a href="tel:+923355181166">📞 +92 335 5181166</a>
                            <a href="mailto:info@lelotus.pk">✉ info@lelotus.pk</a>
                            <a href="mailto:hr@lelotus.pk">💼 hr@lelotus.pk</a>
                            <a href="https://api.whatsapp.com/send/?phone=923355181166" target="_blank" rel="noreferrer">💬 WhatsApp Us</a>
                            <div className="footer-cities">
                                <h5 style={{ marginTop: '20px' }}>Our Cities</h5>
                                {["Islamabad", "Rawalpindi", "Lahore", "Karachi", "Multan", "Peshawar"].map(c => (
                                    <span key={c} className="footer-city-tag">{c}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Locations grid */}
                <div className="footer-locations">
                    <h5 className="footer-locations-title">Our Locations</h5>
                    <div className="footer-locations-grid">
                        {locations.map(loc => (
                            <div key={loc.city} className="footer-location-card">
                                <div className="footer-location-city">{loc.city}</div>
                                <div className="footer-location-address">{loc.address}</div>
                                <div className="footer-location-phones">
                                    {loc.phones.map(p => (
                                        <a key={p} href={`tel:${p}`}>{p}</a>
                                    ))}
                                </div>
                                <div className="footer-location-hours text-dark-grey">
                                    <p><span className="font-semibold">Monday–Saturday:</span> {loc.hours.monSat}</p>
                                    <p><span className="font-semibold">Sunday:</span> {loc.hours.sun}</p>
                                </div>
                                <a href={loc.map} target="_blank" rel="noreferrer" className="footer-location-map">View on Map →</a>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="footer-bottom">
                    <span>© 2026 Le Lotus Clinique. All rights reserved.</span>
                    <span>
                        <a href="#">Privacy Policy</a>
                        <span style={{ margin: '0 10px', opacity: 0.3 }}>·</span>
                        <a href="#">Terms of Service</a>
                    </span>
                </div>
            </div>
        </footer>
    )
}