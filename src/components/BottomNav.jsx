import { NavLink } from 'react-router-dom'
import { Home, UtensilsCrossed, Clock, MapPin } from 'lucide-react'
import './BottomNav.css'

export default function BottomNav() {
  return (
    <nav className="bottom-nav" aria-label="Navegación móvil">
      <div className="bottom-nav__container">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `bottom-nav__item ${isActive ? 'bottom-nav__item--active' : ''}`
          }
        >
          <Home size={20} className="bottom-nav__icon" />
          <span className="bottom-nav__label">Inicio</span>
        </NavLink>

        <NavLink
          to="/productos"
          className={({ isActive }) =>
            `bottom-nav__item ${isActive ? 'bottom-nav__item--active' : ''}`
          }
        >
          <UtensilsCrossed size={20} className="bottom-nav__icon" />
          <span className="bottom-nav__label">Carta</span>
        </NavLink>

        <a
          href="/#horarios"
          onClick={(e) => {
            const el = document.getElementById('horarios')
            if (el) {
              e.preventDefault()
              el.scrollIntoView({ behavior: 'smooth' })
            }
          }}
          className="bottom-nav__item"
        >
          <Clock size={20} className="bottom-nav__icon" />
          <span className="bottom-nav__label">Horarios</span>
        </a>

        <NavLink
          to="/ubicacion"
          className={({ isActive }) =>
            `bottom-nav__item ${isActive ? 'bottom-nav__item--active' : ''}`
          }
        >
          <MapPin size={20} className="bottom-nav__icon" />
          <span className="bottom-nav__label">Ubicación</span>
        </NavLink>
      </div>
    </nav>
  )
}
