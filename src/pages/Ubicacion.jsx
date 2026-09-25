import './Ubicacion.css'

const MAPS_EMBED = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.374657010433!2d-76.9639053!3d-12.0177078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c50076aded33%3A0x4a6f2c2d8bce51dc!2sJuguer%C3%ADa%20Rosita!5e0!3m2!1ses!2spe!4v1727000000000!5m2!1ses!2spe'
const MAPS_LINK  = 'https://maps.app.goo.gl/ZfzrqrF5TbmFc7tT6'

const horarios = [
  { dia: 'Lunes',    hora: '6:30 pm – 12:00 am', open: true  },
  { dia: 'Martes',   hora: '6:30 pm – 12:00 am', open: true  },
  { dia: 'Miércoles',hora: '6:30 pm – 12:00 am', open: true  },
  { dia: 'Jueves',   hora: '6:30 pm – 12:00 am', open: true  },
  { dia: 'Viernes',  hora: '6:30 pm – 12:00 am', open: true  },
  { dia: 'Sábado',   hora: '6:30 pm – 12:00 am', open: true  },
  { dia: 'Domingo',  hora: '6:30 pm – 12:00 am', open: true  },
]

// Día actual (0=Dom, 1=Lun … 6=Sáb)
const hoy = new Date().getDay()
const diaIdx = hoy === 0 ? 6 : hoy - 1 // convertir a índice lun=0..dom=6

export default function Ubicacion() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero page-hero--verde">
        <div className="blob page-hero__blob-1" />
        <div className="blob page-hero__blob-2" />
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <span className="title-pill pill-verde">📍 Campoy, San Juan de Lurigancho</span>
          <h1 className="section-title" style={{ marginTop: '0.5rem' }}>
            Encuéntranos <span className="text-verde">aquí</span>
          </h1>
          <div className="divider divider-verde" />
          <p className="section-subtitle" style={{ marginTop: '1rem' }}>
            Estamos en el corazón de Campoy, SJL. ¡Ven de noche y siéntete como en casa!
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <div className="ubicacion-grid">

            {/* INFO */}
            <div className="ubicacion-info animate-fade-up">

              {/* Dirección */}
              <div className="ubi-card glass-card">
                <span className="ubi-card__icon" style={{ background: 'var(--naranja-light)' }}>📍</span>
                <div>
                  <h3 className="ubi-card__title">Dirección</h3>
                  <p className="ubi-card__text" style={{ fontWeight: 700, fontSize: '1rem' }}>Juguería Rosita</p>
                  <p className="ubi-card__text">Campoy – San Juan de Lurigancho</p>
                  <p className="ubi-card__text">Lima, Perú</p>
                  <a
                    href={MAPS_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-mango"
                    style={{ marginTop: '1rem', fontSize: '0.85rem', padding: '0.6rem 1.2rem' }}
                  >
                    📍 Abrir en Google Maps
                  </a>
                </div>
              </div>

              {/* Teléfono */}
              <div className="ubi-card glass-card">
                <span className="ubi-card__icon" style={{ background: 'var(--verde-light)' }}>📞</span>
                <div>
                  <h3 className="ubi-card__title">WhatsApp & Llamadas</h3>
                  <a href="tel:+51987654321" className="ubi-card__link">+51 987 654 321</a>
                  <a
                    href="https://wa.me/51987654321?text=Hola%20Rosita!%20Quiero%20hacer%20un%20pedido%20%F0%9F%A5%A4"
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    style={{ marginTop: '1rem', background: '#25D366', color: 'white', fontSize: '0.85rem', padding: '0.6rem 1.2rem' }}
                  >
                    💬 Escribir por WhatsApp
                  </a>
                </div>
              </div>

              {/* Horarios */}
              <div className="ubi-card glass-card">
                <span className="ubi-card__icon" style={{ background: 'var(--fucsia-light)' }}>🌙</span>
                <div style={{ width: '100%' }}>
                  <h3 className="ubi-card__title">Horario de atención</h3>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                    Abierto todos los días de la semana
                  </p>
                  <table className="horario-table">
                    <tbody>
                      {horarios.map((h, i) => (
                        <tr
                          key={h.dia}
                          className={`horario-row ${i === diaIdx ? 'horario-row--hoy' : ''}`}
                        >
                          <td className="horario-dia">
                            {i === diaIdx && <span className="hoy-badge">Hoy</span>}
                            {h.dia}
                          </td>
                          <td className="horario-hora">{h.hora}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Como llegar */}
              <div className="ubi-card glass-card">
                <span className="ubi-card__icon" style={{ background: 'var(--mango-light)' }}>🚌</span>
                <div>
                  <h3 className="ubi-card__title">Cómo llegar a Campoy</h3>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.5rem' }}>
                    {[
                      '🚌 Combis y colectivos que pasan por Campoy (Av. Gran Chimú)',
                      '🚇 Metro: Estación Las Flores → Mototaxi a Campoy (10 min)',
                      '🚗 Por la Av. Wiesse o Av. Gran Chimú hacia Campoy',
                      '📱 Busca "Juguería Rosita" en Google Maps para ruta exacta',
                    ].map(item => (
                      <li key={item} style={{ fontSize: '0.87rem', color: 'var(--text-muted)' }}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* MAPA */}
            <div className="ubicacion-mapa">
              <div className="mapa-wrapper glass-card">
                <iframe
                  title="Ubicación Juguería Rosita – Campoy, SJL"
                  src={MAPS_EMBED}
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: 'var(--radius-md)' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
                style={{ marginTop: '1.25rem', width: '100%', justifyContent: 'center' }}
              >
                🗺️ Ver ruta en Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
