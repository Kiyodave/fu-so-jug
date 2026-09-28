import { Link } from 'react-router-dom'
import {
  CupSoda,
  MapPin,
  Mail,
  Clock,
  ShoppingBag,
  Navigation,
  Heart,
  ChevronRight
} from 'lucide-react'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      {/* Decorative wave */}
      <div className="footer__wave" aria-hidden="true">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="var(--crema)" />
        </svg>
      </div>

      <div className="footer__body">
        <div className="container">
          <div className="footer__grid">

            {/* BRAND */}
            <div className="footer__brand">
              <div className="footer__logo">
                <span className="footer__logo-icon" style={{ display: 'inline-flex', alignItems: 'center' }}>
                  <CupSoda size={22} color="var(--naranja)" />
                </span>
                <div>
                  <p className="footer__logo-name">Rosita</p>
                  <p className="footer__logo-sub">Juguería & Fuente de Soda</p>
                </div>
              </div>
              <p className="footer__tagline">
                Jugos naturales, postres caseros<br />
                y sabor de barrio desde marzo 2024.
              </p>
              {/* Social */}
              <div className="footer__socials">
                <a href="https://maps.app.goo.gl/ZfzrqrF5TbmFc7tT6" target="_blank" rel="noreferrer"
                   className="footer__social-btn" aria-label="Google Maps"
                   style={{ background: '#EA4335', color: 'white' }}>
                  <MapPin size={16} />
                </a>
                <a href="mailto:andrewsqd4123@gmail.com"
                   className="footer__social-btn" aria-label="Correo"
                   style={{ background: 'var(--fucsia)', color: 'white' }}>
                  <Mail size={16} />
                </a>
              </div>
            </div>

            {/* QUICK LINKS */}
            <div className="footer__col">
              <h4 className="footer__col-title">Navegación</h4>
              <ul className="footer__nav">
                {[
                  { to: '/',          label: 'Inicio' },
                  { to: '/productos', label: 'Productos' },
                  { to: '/nosotros',  label: 'Nosotros' },
                  { to: '/ubicacion', label: 'Ubicación' },
                  { to: '/contacto',  label: 'Contacto' },
                ].map(({ to, label }) => (
                  <li key={to}>
                    <Link to={to} className="footer__nav-link" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <ChevronRight size={13} className="footer__nav-arrow" /> {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* PRODUCTS */}
            <div className="footer__col">
              <h4 className="footer__col-title">Nuestros Sabores</h4>
              <ul className="footer__nav">
                {[
                  'Jugos 100% naturales',
                  'Batidos y combinados',
                  'Sandwiches & hamburguesas',
                  'Kekes y postres caseros',
                  'Empanadas artesanales',
                  'Ensaladas de frutas',
                  'Papa rellena (sáb–dom)',
                ].map(item => (
                  <li key={item}>
                    <span className="footer__nav-link" style={{ cursor: 'default', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <ChevronRight size={13} className="footer__nav-arrow" color="var(--naranja)" /> {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONTACT */}
            <div className="footer__col">
              <h4 className="footer__col-title">Información</h4>
              <ul className="footer__contact">
                <li>
                  <span className="footer__contact-icon" style={{ display: 'inline-flex', alignItems: 'center' }}>
                    <MapPin size={16} color="var(--naranja)" />
                  </span>
                  <span>Campoy, San Juan de Lurigancho</span>
                </li>
                <li>
                  <span className="footer__contact-icon" style={{ display: 'inline-flex', alignItems: 'center' }}>
                    <Mail size={16} color="var(--fucsia)" />
                  </span>
                  <a href="mailto:andrewsqd4123@gmail.com">andrewsqd4123@gmail.com</a>
                </li>
                <li>
                  <span className="footer__contact-icon" style={{ display: 'inline-flex', alignItems: 'center' }}>
                    <Clock size={16} color="var(--mango-dark)" />
                  </span>
                  <span>Lun – Dom: 6:30 pm – 12:00 am</span>
                </li>
                <li>
                  <span className="footer__contact-icon" style={{ display: 'inline-flex', alignItems: 'center' }}>
                    <ShoppingBag size={16} color="var(--verde)" />
                  </span>
                  <span>Solo en local · Para llevar disponible</span>
                </li>
                <li>
                  <span className="footer__contact-icon" style={{ display: 'inline-flex', alignItems: 'center' }}>
                    <Navigation size={16} color="var(--naranja)" />
                  </span>
                  <a href="https://maps.app.goo.gl/ZfzrqrF5TbmFc7tT6" target="_blank" rel="noreferrer">
                    Ver en Google Maps
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* BOTTOM BAR */}
          <div className="footer__bottom">
            <p>© {year} Juguería Rosita. Todos los derechos reservados.</p>
            <p className="footer__made" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
              Hecho con <Heart size={14} color="var(--fucsia)" fill="var(--fucsia)" /> en Lima, Perú
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
