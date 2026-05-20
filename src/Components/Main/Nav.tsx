import { useState } from "react";
import { NavLink } from "react-router-dom";
import { NavLinks } from "../../Data/NavLinks.ts";
export default function Nav() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const toggleMobileNav = () => setMobileOpen(prev => !prev);
    const closeMobileNav = () => setMobileOpen(false);

    const activeClass = ({ isActive }: { isActive: boolean }) =>
        isActive ? "active" : "";



    return (
        <>
            <nav id="main-nav">
                <NavLink className="nav-logo" to="/" onClick={closeMobileNav}>
                    <svg className="nav-logo-icon" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="18" cy="28" rx="3" ry="5" fill="#0094a3" opacity="0.3" />
                        <ellipse cx="18" cy="22" rx="5" ry="9" fill="#0094a3" opacity="0.5" />
                        <ellipse cx="12" cy="20" rx="4" ry="7" transform="rotate(-30 12 20)" fill="#64c495" opacity="0.6" />
                        <ellipse cx="24" cy="20" rx="4" ry="7" transform="rotate(30 24 20)" fill="#64c495" opacity="0.6" />
                        <ellipse cx="8" cy="17" rx="3" ry="6" transform="rotate(-55 8 17)" fill="#0094a3" opacity="0.4" />
                        <ellipse cx="28" cy="17" rx="3" ry="6" transform="rotate(55 28 17)" fill="#0094a3" opacity="0.4" />
                        <circle cx="18" cy="22" r="2.5" fill="#0094a3" />
                    </svg>
                    <div className="nav-logo-text">Le Lotus<span>Clinique</span></div>
                </NavLink>

                <ul className="nav-links">
                    {NavLinks.map(({ to, label }) => (
                        <li key={to}>
                            <NavLink to={to} className={activeClass} end>
                                {label}
                            </NavLink>
                        </li>
                    ))}
                    <li>
                        <NavLink to="/booking" className="nav-cta">
                            Book Appointment
                        </NavLink>
                    </li>
                </ul>

                <button
                    className="nav-hamburger"
                    aria-label="Menu"
                    onClick={toggleMobileNav}
                >
                    <span></span><span></span><span></span>
                </button>
            </nav>

            <div className={`mobile-nav${mobileOpen ? " open" : ""}`} id="mobile-nav">
                {NavLinks.map(({ to, label }, i) => (
                    <NavLink key={i} to={to} className={activeClass} onClick={closeMobileNav} end>
                        {label}
                    </NavLink>
                ))}
                <NavLink to="/booking" className="nav-cta" onClick={closeMobileNav}>
                    Book Appointment
                </NavLink>
            </div>
        </>
    );
}