import { Link } from 'react-router-dom'
import './Inicio.css'

const testimonios = [
  {
    nombre: 'Angello Patrick',
    texto: 'Recomendado, tienen la opción de hacer jugos con leche deslactosada y el precio solo varía un poco, además, comparado con otras juguerías, los costos son accesibles. Los kekes suaves y se nota que son de casa.',
    estrellas: 5,
    avatar: '👨',
    fecha: 'hace 1 semana',
    lugar: 'SJL',
  },
  {
    nombre: 'Milagros Quispe',
    texto: 'Hoy fui a comer un pan con chicharrón me encantó, estaba jugoso. Me alegra que esté hasta tarde, volveré sí o sí.',
    estrellas: 5,
    avatar: '👩',
    fecha: 'hace 3 días',
    lugar: 'Campoy',
  },
  {
    nombre: 'Kevin Flores',
    texto: 'Buen servicio, tienen gran variedad de productos, venden todo lo que indica la carta y a buen precio.',
    estrellas: 5,
    avatar: '👨‍🦱',
    fecha: 'hace 2 semanas',
    lugar: 'San Juan de Lurigancho',
  },
  {
    nombre: 'Rodrigo Salinas',
    texto: 'Delicioso, recomendado por 9 de cada 10 chefs 🍴',
    estrellas: 5,
    avatar: '👨‍🍳',
    fecha: 'hace 1 mes',
    lugar: 'Lima',
  },
  {
    nombre: 'Sandra Ríos',
    texto: 'Estaba rico... volveré pronto 😋',
    estrellas: 5,
    avatar: '👩‍🦰',
    fecha: 'hace 1 semana',
    lugar: 'Campoy, SJL',
  },
]


const frutas = [
  { emoji: '🥭', name: 'Mango', color: '#FFB300' },
  { emoji: '🍓', name: 'Fresa', color: '#D81B60' },
  { emoji: '🍍', name: 'Piña', color: '#FF8F00' },
  { emoji: '🫐', name: 'Arándano', color: '#6A1B9A' },
  { emoji: '🍌', name: 'Plátano', color: '#F9A825' },
  { emoji: '🍊', name: 'Naranja', color: '#FF6D2E' },
  { emoji: '🍈', name: 'Papaya', color: '#E64A19' },
]

const sabias = [
  {
    img: 'https://7diasdesabor.com/wp-content/uploads/2024/01/BEBIDA.jpg',
    titulo: 'El Reseteo Digestivo',
    color: 'var(--naranja)',
    pill: 'pill-naranja',
    texto: 'La papaína (papaya) + bromelina (piña) desinfama el intestino al instante y acelera la digestión. ¡Ideal después de un almuerzo contundente!',
  },
  {
    img: 'https://campograndeperu.com/wp-content/uploads/2024/03/jugo-de-fresas-con-arandanos.jpg',
    titulo: 'Escudo Neuronal',
    color: 'var(--fucsia)',
    pill: 'pill-fucsia',
    texto: 'Arándano + fresa: bloquea radicales libres, retrasa el envejecimiento celular y estimula la memoria. Antioxidantes al máximo.',
  },
  {
    img: 'https://comedelahuerta.com/wp-content/uploads/2020/10/batido-de-platano-y-mango.jpg',
    titulo: 'Cóctel de la Felicidad',
    color: 'var(--mango-dark)',
    pill: 'pill-mango',
    texto: 'Plátano + mango produce serotonina de forma natural. Reduce la ansiedad y mejora tu estado de ánimo en minutos.',
  },
]

export default function Inicio() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="hero">
        {/* Blobs decorativos */}
        <div className="blob hero__blob-1" />
        <div className="blob hero__blob-2" />
        <div className="blob hero__blob-3" />

        <div className="container hero__content">
          <div className="hero__text animate-fade-up">
            <span className="title-pill pill-fucsia">🇵🇪 Campoy, San Juan de Lurigancho</span>
            <h1 className="hero__headline">
              Jugos, sabores y<br />
              <span className="hero__headline-accent display-title">amor hecho vaso</span>
            </h1>
            <p className="hero__desc">
              Bienvenido a <strong>Juguería Rosita</strong>, el rinc&oacute;n de sabor
              que naci&oacute; de una conversaci&oacute;n en familia y se hizo realidad
              en Campoy, San Juan de Lurigancho. Jugos frescos, postres
              caseros y mucho amor desde marzo 2024. 🍹
            </p>
            <div className="hero__actions">
              <Link to="/productos" className="btn btn-primary">
                Ver nuestro menú
              </Link>
              <Link to="/contacto" className="btn btn-outline" style={{ color: 'var(--dark)', borderColor: 'var(--naranja)', borderWidth: '2px' }}>
                Escríbenos
              </Link>
            </div>
          </div>

          <div className="hero__visual animate-fade animate-delay-2">
            <div className="hero__img-wrap">
              <img
                src="https://img.magnific.com/fotos-premium/arco-iris-batidos-sandia-papaya-mango-espinaca-fruta-dragon-batidos-jugos-bebidas-bebidas-variedad-frutas-frescas-mesa-madera_442337-92076.jpg?w=600"
                alt="Variedad de jugos Rosita"
                className="hero__img"
              />
              {/* Badge flotante */}
              <div className="hero__badge animate-float">
                <span className="hero__badge-emoji">⭐</span>
                <div>
                  <p className="hero__badge-number">5.0</p>
                  <p className="hero__badge-label">en Google</p>
                </div>
              </div>
              <div className="hero__badge hero__badge-2 animate-float" style={{ animationDelay: '1.2s' }}>
                <span className="hero__badge-emoji">🥤</span>
                <div>
                  <p className="hero__badge-number">+50</p>
                  <p className="hero__badge-label">combinaciones</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Frutas animadas en la parte inferior */}
        <div className="hero__frutas">
          {frutas.map((f, i) => (
            <span
              key={f.name}
              className="hero__fruta"
              style={{ animationDelay: `${i * 0.15}s` }}
              title={f.name}
            >
              {f.emoji}
            </span>
          ))}
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="stats-strip">
        <div className="container">
          <div className="stats-grid">
            {[
              { val: 'Mar 2024', label: 'Desde marzo', emoji: '🗓️' },
              { val: '+50', label: 'Combinaciones', emoji: '🧃' },
              { val: '5.0★', label: 'Calificación Google', emoji: '⭐' },
              { val: '100%', label: 'Fruta natural', emoji: '🍓' },
            ].map(s => (
              <div key={s.label} className="stat-card glass-card">
                <span className="stat-emoji">{s.emoji}</span>
                <p className="stat-val">{s.val}</p>
                <p className="stat-label">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCTOS DESTACADOS ── */}
      <section className="section-pad">
        <div className="container text-center">
          <span className="title-pill pill-naranja">Lo más pedido</span>
          <h2 className="section-title">Nuestras estrellas <span className="text-naranja">del menú</span></h2>
          <div className="divider divider-mango" />
          <p className="section-subtitle">
            Del jugo natural a las hamburguesas artesanales, todo lo que más piden nuestros clientes.
          </p>
          <div className="grid-3">
            {[
              {
                img: 'https://img.magnific.com/fotos-premium/arco-iris-batidos-sandia-papaya-mango-espinaca-fruta-dragon-batidos-jugos-bebidas-bebidas-variedad-frutas-frescas-mesa-madera_442337-92076.jpg?w=400',
                title: 'Jugos & Batidos',
                desc: 'Naturales, sin conservantes. Con agua o leche. Solos o combinados.',
                color: '#FFB300',
                bgColor: 'var(--mango-light)',
              },
              {
                img: 'https://www.mercadonegro.pe/wp-content/uploads/2019/10/hamburgues-2017_07_11_125926.jpg',
                title: 'Hamburguesas & Sandwiches',
                desc: 'Artesanales, jugosas. Royal, chorizo, pollo, carne. Cada bocado, un festival.',
                color: '#FF6D2E',
                bgColor: 'var(--naranja-light)',
              },
              {
                img: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlRumgOxKO9RkLCTAM4W2aQJR4o2YyaJB-rZVhpc3y-8Lfdkg-eV0mh6hNDtzsiSOv4FPq0LitClCaXggBZ6DAt6BqKa1lZATONEITpDLAgxJC5G__zg0WEmYRiZEe1hF4Uesu5=s508-k-no',
                title: 'Postres Caseros',
                desc: 'Kekes, empanadas, alfajores y más. Recetas de abuela con amor de siempre.',
                color: '#D81B60',
                bgColor: 'var(--fucsia-light)',
              },
            ].map(card => (
              <div key={card.title} className="highlight-card" style={{ '--accent': card.color, '--bg': card.bgColor }}>
                <div className="highlight-card__img-wrap">
                  <img src={card.img} alt={card.title} className="highlight-card__img" />
                  <div className="highlight-card__overlay" />
                </div>
                <div className="highlight-card__body">
                  <h3 className="highlight-card__title">{card.title}</h3>
                  <p className="highlight-card__desc">{card.desc}</p>
                  <Link to="/productos" className="highlight-card__link">
                    Ver más →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SABÍAS QUE ── */}
      <section className="sabia-section section-pad">
        <div className="container">
          <div className="text-center">
            <span className="title-pill pill-verde">Tip de salud 💡</span>
            <h2 className="section-title">¿Sabías qué...?</h2>
            <div className="divider divider-verde" />
            <p className="section-subtitle">
              Descubre el poder oculto de nuestras frutas y cómo combinarlas para potenciar tu salud diaria.
            </p>
          </div>
          <div className="grid-3">
            {sabias.map(card => (
              <div key={card.titulo} className="sabia-card glass-card">
                <div className="sabia-card__img-wrap">
                  <img src={card.img} alt={card.titulo} className="sabia-card__img" />
                  <div className="sabia-card__img-bar" style={{ background: card.color }} />
                </div>
                <div className="sabia-card__body">
                  <span className={`title-pill ${card.pill}`}>{card.titulo}</span>
                  <p className="sabia-card__text">{card.texto}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIOS ── */}
      <section className="section-pad" style={{ background: 'linear-gradient(180deg, transparent, rgba(255,179,0,0.06), transparent)' }}>
        <div className="container text-center">
          <span className="title-pill pill-fucsia">⭐ Reseñas de Google Maps</span>
          <h2 className="section-title">Lo que dice <span className="text-fucsia">el barrio</span></h2>
          <div className="divider divider-fucsia" />
          <p className="section-subtitle" style={{ marginBottom: '3rem' }}>
            Opiniones reales de nuestros clientes de Campoy y San Juan de Lurigancho.
          </p>

          {/* RATING BADGE */}
          <div className="rating-badge glass-card" style={{ display: 'inline-flex', alignItems: 'center', gap: '1.2rem', padding: '1rem 2rem', marginBottom: '3rem', borderRadius: 'var(--radius-xl)' }}>
            <div style={{ textAlign: 'left' }}>
              <p style={{ fontSize: '2.8rem', fontWeight: 900, lineHeight: 1, color: 'var(--naranja)', fontFamily: 'var(--font-display)' }}>5.0</p>
              <p style={{ fontSize: '1.3rem', lineHeight: 1, margin: '0.2rem 0 0.4rem' }}>⭐⭐⭐⭐⭐</p>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Calificación en Google Maps</p>
            </div>
            <div style={{ width: 1, height: '4rem', background: 'rgba(0,0,0,0.1)' }} />
            <div style={{ textAlign: 'left' }}>
              <img src="https://www.google.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg" alt="Google" style={{ height: '22px', marginBottom: '0.4rem' }} />
              <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', margin: 0 }}>Ver perfil en Google Maps</p>
              <a href="https://maps.app.goo.gl/ZfzrqrF5TbmFc7tT6" target="_blank" rel="noreferrer"
                 style={{ fontSize: '0.78rem', color: 'var(--fucsia)', fontWeight: 700 }}>Juguería Rosita →</a>
            </div>
          </div>

          <div className="testi-scroll">
            {testimonios.map((t, i) => (
              <div key={i} className="testi-card glass-card">
                <div className="testi-card__header">
                  <span className="testi-card__avatar">{t.avatar}</span>
                  <div style={{ textAlign: 'left' }}>
                    <strong style={{ display: 'block', fontSize: '0.95rem' }}>{t.nombre}</strong>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{t.lugar} · {t.fecha}</span>
                  </div>
                  <img src="https://www.google.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg"
                       alt="Google" style={{ height: '14px', marginLeft: 'auto', opacity: 0.5 }} />
                </div>
                <div className="testi-card__stars">
                  {'⭐'.repeat(t.estrellas)}
                </div>
                <p className="testi-card__text">"{t.texto}"</p>
              </div>
            ))}
          </div>
          <a href="https://maps.app.goo.gl/ZfzrqrF5TbmFc7tT6" target="_blank" rel="noreferrer"
             className="btn btn-outline" style={{ marginTop: '2.5rem' }}>
            Ver todas las reseñas en Google →
          </a>
        </div>
      </section>

      {/* ── GALERÍA ── */}
      {/* 📸 REEMPLAZA las URLs con tus fotos reales (Google Fotos, Drive, etc.) */}
      <section className="galeria-section section-pad">
        <div className="container text-center">
          <span className="title-pill pill-naranja">📸 Galería</span>
          <h2 className="section-title">Así se ve <span className="text-naranja">Rosita</span></h2>
          <div className="divider divider-mango" />
          <p className="section-subtitle">Un vistazo a nuestros jugos, postres y el ambiente que te espera.</p>
          <div className="galeria-grid">
            {[
              {
                url: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlRumgOxKO9RkLCTAM4W2aQJR4o2YyaJB-rZVhpc3y-8Lfdkg-eV0mh6hNDtzsiSOv4FPq0LitClCaXggBZ6DAt6BqKa1lZATONEITpDLAgxJC5G__zg0WEmYRiZEe1hF4Uesu5=s508-k-no',
                alt: 'Postres caseros de Rosita',
                label: 'Postres 🍰',
                grande: true,
              },
              {
                url: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWl6bTpsVoyGJDG1srXVO20IjuXkFwMR285d2lkwyvnUkxC837h6PCzngwSce2hVOnplGQrN4QAsL_WBQgp8PgoxDcCGKVNw31fwc8Ilo-Yrfn8ZO5ZzvEB-Tc7PyhLl9o4f515v=s563-k-no',
                alt: 'Ensalada de frutas',
                label: 'Ensalada de frutas 🍓',
                grande: false,
              },
              {
                url: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlO_HCvSVHXWnxqqgs-M1FBcU9iAtUCAp95NnFfDUKm_kZ1nrgcEbDhl6YoL6dpsTv4B9jSA-rK2pTxNFuAEcQe9EGWsDlRWerP6QUlZeXgDIImRp14kbKLBv-o3Lxtdlh3kFv9FQ=s846-k-no',
                alt: 'Kekes de Rosita',
                label: 'Kekes artesanales 🍊',
                grande: false,
              },
              {
                url: 'https://img.magnific.com/fotos-premium/arco-iris-batidos-sandia-papaya-mango-espinaca-fruta-dragon-batidos-jugos-bebidas-bebidas-variedad-frutas-frescas-mesa-madera_442337-92076.jpg?w=600',
                alt: 'Jugos naturales',
                label: 'Jugos naturales 🥤',
                grande: false,
              },
              {
                url: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn3IjtpU6ZVmwwgLmyk82juvFPrqjzeIAyAaha1D_EQ0i6TA-sxy6-ttdqUlvPVeLoL5I4lOohZLraUp44VxaEzsWDp9QhHCPBBrxaspsw6ywpJLiisRL4QwyBNRh2zMc2lv1rJXw=w203-h153-k-no',
                alt: 'Ensalada de frutas variada',
                label: 'Frutas frescas 🥭',
                grande: false,
              },
            ].map((foto, i) => (
              <div key={i} className={`galeria-item ${foto.grande ? 'galeria-item--grande' : ''}`}>
                <img src={foto.url} alt={foto.alt} loading="lazy" />
                <div className="galeria-item__overlay">
                  <span className="galeria-item__label">{foto.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HORARIOS ── */}
      {(() => {
        const ahora = new Date();
        const hora = ahora.getHours() + ahora.getMinutes() / 60;
        const abierto = hora >= 18.5 || hora < 0; // 6:30pm = 18.5h; cierra a medianoche
        const diasSemana = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];
        const hoy = diasSemana[ahora.getDay()];
        const dias = [
          { dia: 'Lunes',     horario: '6:30 pm – 12:00 am' },
          { dia: 'Martes',    horario: '6:30 pm – 12:00 am' },
          { dia: 'Miércoles', horario: '6:30 pm – 12:00 am' },
          { dia: 'Jueves',    horario: '6:30 pm – 12:00 am' },
          { dia: 'Viernes',   horario: '6:30 pm – 12:00 am' },
          { dia: 'Sábado',    horario: '6:30 pm – 12:00 am' },
          { dia: 'Domingo',   horario: '6:30 pm – 12:00 am' },
        ];
        return (
          <section className="horarios-section section-pad">
            <div className="container">
              <div className="horarios-inner">

                {/* TEXTO */}
                <div className="horarios-text animate-fade-up">
                  <span className="title-pill pill-verde">🕐 Horarios</span>
                  <h2 className="section-title">¿Cuándo <span className="text-verde">nos visitas?</span></h2>
                  <div className="divider divider-verde" style={{ margin: '1rem 0 1.5rem' }} />
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                    Estamos abiertos <strong>todos los días de la semana</strong>, listos para recibirte con el jugo que más te gusta.
                  </p>

                  {/* ESTADO ACTUAL */}
                  <div className={`estado-badge ${abierto ? 'estado-badge--open' : 'estado-badge--closed'}`}>
                    <span className="estado-dot" />
                    <span>{abierto ? '🟢 Abierto ahora · Hasta las 12:00 am' : '🔴 Cerrado · Abrimos hoy a las 6:30 pm'}</span>
                  </div>

                  <a href="https://maps.app.goo.gl/ZfzrqrF5TbmFc7tT6" target="_blank" rel="noreferrer"
                     className="btn btn-primary" style={{ marginTop: '1.75rem', display: 'inline-flex' }}>
                    📍 Cómo llegar
                  </a>
                </div>

                {/* TABLA */}
                <div className="horarios-tabla glass-card animate-fade-up animate-delay-2">
                  <div className="horarios-tabla__header">
                    <span>📅 Horario semanal</span>
                  </div>
                  <table className="horario-tbl">
                    <tbody>
                      {dias.map(({ dia, horario }) => {
                        const esHoy = dia === hoy;
                        return (
                          <tr key={dia} className={`horario-tbl__row ${esHoy ? 'horario-tbl__row--hoy' : ''}`}>
                            <td className="horario-tbl__dia">
                              {esHoy && <span className="hoy-pill">HOY</span>}
                              {dia}
                            </td>
                            <td className="horario-tbl__horario">{horario}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                  <div className="horarios-tabla__footer">
                    Atención todos los días sin excepción 🎉
                  </div>
                </div>

              </div>
            </div>
          </section>
        );
      })()}

      {/* ── CTA FINAL ── */}
      <section className="cta-section">
        <div className="blob cta__blob-1" />
        <div className="blob cta__blob-2" />
        <div className="container cta__inner">
          <h2 className="cta__title">
            ¿Listo para tu próximo jugo favorito?
          </h2>
          <p className="cta__sub">Visítanos o escríbenos. ¡Te esperamos con sabor!</p>
          <div className="cta__actions">
            <Link to="/ubicacion" className="btn btn-mango">📍 Cómo llegar</Link>
            <Link to="/contacto"  className="btn btn-outline">💬 Escríbenos</Link>
          </div>
        </div>
      </section>
    </>
  )
}
