import { useState } from "react";
import { NavLink } from "react-router-dom";
import { NavLinks } from "../../Data/NavLinks.ts";
import logo from "../../assets/LogoHorizontal.png";
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
                    <div className="h-10 sm:h-12">
                        <img src={logo} alt="Le Lotus Clinique" className="h-full w-auto object-cover" />
                    </div>
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