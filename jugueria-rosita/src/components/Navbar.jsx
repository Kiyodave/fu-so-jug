import { useState, useEffect, useRef } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const navLinks = [
  { to: '/',          label: 'Inicio' },
  { to: '/productos', label: 'Productos' },
  { to: '/nosotros',  label: 'Nosotros' },
  { to: '/ubicacion', label: 'Ubicación' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const location                  = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Cerrar menú en cambio de ruta
  useEffect(() => { setMenuOpen(false) }, [location])

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">

        {/* LOGO */}
        <Link to="/" className="navbar__logo">
          <div className="navbar__logo-icon">🥤</div>
          <div className="navbar__logo-text">
            <span className="navbar__logo-name">Rosita</span>
            <span className="navbar__logo-sub">Fuente de Soda & Juguería</span>
          </div>
        </Link>

        {/* LINKS — desktop */}
        <ul className="navbar__links">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `navbar__link ${isActive ? 'navbar__link--active' : ''}`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link to="/contacto" className="btn btn-primary navbar__cta">
          Contáctanos
        </Link>

        {/* HAMBURGER */}
        <button
          className={`navbar__burger ${menuOpen ? 'navbar__burger--open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Abrir menú"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* MOBILE MENU */}
      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
        <ul>
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `navbar__mobile-link ${isActive ? 'navbar__mobile-link--active' : ''}`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
          <li>
            <Link to="/contacto" className="btn btn-primary" style={{ marginTop: '1rem', width: '100%', justifyContent: 'center' }}>
              Contáctanos
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
