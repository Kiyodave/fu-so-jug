import {
  Leaf,
  Heart,
  Moon,
  Users,
  Sparkles,
  CakeSlice,
  CupSoda,
  Globe,
  MapPin
} from 'lucide-react'
import './Nosotros.css'

const valores = [
  { icon: Leaf, titulo: 'Ingredientes Frescos', desc: 'Seleccionamos las mejores frutas del mercado cada mañana. Sin aditivos ni conservantes. Solo lo mejor de la naturaleza.' },
  { icon: Heart, titulo: 'Hecho con Cariño', desc: 'Cada receta lleva el alma de Rosita y su familia. Un sabor que solo el calor de casa puede lograr, y que el barrio ya reconoce.' },
  { icon: Moon, titulo: 'Atención Nocturna', desc: 'Atendemos de lunes a domingo de 6:30 pm a 12:00 am. Porque el antojo llega cuando llega, ¡y Rosita siempre te espera!' },
  { icon: Users, titulo: 'Barrio y Comunidad', desc: 'Somos de Campoy, SJL. Apostamos por el barrio y nos encanta atender a cada vecino con la misma amabilidad de siempre.' },
]

const timeline = [
  { year: 'Mar 2024', evento: 'En una charla casual entre hijos y su madre, nació la idea. Rosita abre su juguería en Campoy con ilusión y recetas propias.', icon: Sparkles },
  { year: 'Jun 2024', evento: 'La fama de los jugos naturales y batidos se riega de boca en boca por el barrio. ¡Los vecinos repiten!', icon: Heart },
  { year: 'Sep 2024', evento: 'Incorporamos hamburguesas artesanales, kekes de la casa, empanadas y postres caseros al menú.', icon: CakeSlice },
  { year: 'Ene 2025', evento: 'Más de 50 combinaciones de jugos disponibles. La variedad y calidad crecen cada semana.', icon: CupSoda },
  { year: 'Hoy', evento: '¡Ya estamos en digital! Gracias por visitarnos. La familia Rosita sigue creciendo junto a ti.', icon: Globe },
]

export default function Nosotros() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero page-hero--fucsia">
        <div className="blob page-hero__blob-1" />
        <div className="blob page-hero__blob-2" />
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <span className="title-pill pill-fucsia">Nuestra historia</span>
          <h1 className="section-title" style={{ marginTop: '0.5rem' }}>
            Quiénes <span className="text-fucsia">somos</span>
          </h1>
          <div className="divider divider-fucsia" />
          <p className="section-subtitle" style={{ marginTop: '1rem' }}>
            Una familia con pasión por los sabores naturales, la buena sazón y la atención de corazón.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="section-pad">
        <div className="container">
          <div className="nosotros-story">
            <div className="nosotros-story__img-side">
              <div className="nosotros-img-stack">
                <img
                  src="https://img.magnific.com/fotos-premium/arco-iris-batidos-sandia-papaya-mango-espinaca-fruta-dragon-batidos-jugos-bebidas-bebidas-variedad-frutas-frescas-mesa-madera_442337-92076.jpg?w=500"
                  alt="Jugos Rosita"
                  className="nosotros-img-main"
                />
                <div className="nosotros-img-badge glass-card" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <MapPin size={24} color="var(--fucsia)" />
                  <div>
                    <p style={{ fontWeight: 800, fontSize: '1rem', lineHeight: 1 }}>Campoy, SJL</p>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Desde marzo 2024</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="nosotros-story__text animate-fade-up">
              <span className="title-pill pill-fucsia" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                <Heart size={14} /> Nuestra historia
              </span>
              <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, margin: '0.75rem 0 1.25rem', color: 'var(--dark)' }}>
                Un sueño que nació de una conversación en familia
              </h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1rem' }}>
                Todo empezó en marzo del <strong>2024</strong>, cuando en una charla cotidiana entre
                los hijos y su madre, surgió casi de la nada la idea de montar una juguería.
                Lo que comenzó como una ocurrencia casual se convirtió rápidamente en un plan serio,
                y con mucha determinación abrieron las puertas de <strong>Juguería Rosita</strong>
                en el corazón de <strong>Campoy</strong>.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1rem' }}>
                La carta empezó sencilla: jugos naturales y batidos frescos. Pero con el entusiasmo
                del barrio y el sabor que Rosita pone en cada preparación, pronto se sumaron
                las hamburguesas artesanales, los kekes caseros, las empanadas y los postres
                horneados en casa. <em>La gente repite, y eso lo dice todo</em>.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>
                Llevamos un camino lleno de aprendizaje, siendo parte del día a día del vecindario.
                Y como toda buena experiencia, la nuestra viene con una banda sonora inolvidable: <strong>los mejores clásicos del rock y pop de los 80s y 90s</strong> sonando siempre de fondo.
                Atendemos de lunes a domingo de <strong>6:30 pm a 12:00 am</strong>. Ven por el sabor casero, ¡quédate por la buena música!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section className="section-pad" style={{ background: 'var(--crema-2)' }}>
        <div className="container text-center">
          <span className="title-pill pill-mango">Nuestros pilares</span>
          <h2 className="section-title" style={{ marginTop: '0.5rem' }}>Lo que nos mueve</h2>
          <div className="divider divider-mango" />
          <div className="valores-grid" style={{ marginTop: '3rem' }}>
            {valores.map(v => {
              const ValIcon = v.icon
              return (
                <div key={v.titulo} className="valor-card glass-card">
                  <span className="valor-card__icon-wrap" style={{
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    background: 'var(--naranja-light)',
                    color: 'var(--naranja)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem'
                  }}>
                    <ValIcon size={24} />
                  </span>
                  <h3 className="valor-card__title">{v.titulo}</h3>
                  <p className="valor-card__desc">{v.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section-pad">
        <div className="container text-center">
          <span className="title-pill pill-naranja">Nuestra trayectoria</span>
          <h2 className="section-title" style={{ marginTop: '0.5rem' }}>
            Historia en <span className="text-naranja">línea del tiempo</span>
          </h2>
          <div className="divider divider-mango" />
          <div className="timeline">
            {timeline.map((item, i) => {
              const TimeIcon = item.icon
              return (
                <div
                  key={item.year}
                  className={`timeline-item ${i % 2 === 0 ? 'timeline-item--left' : 'timeline-item--right'}`}
                >
                  <div className="timeline-card glass-card">
                    <span style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 36,
                      height: 36,
                      borderRadius: '50%',
                      background: 'var(--naranja-light)',
                      color: 'var(--naranja)',
                      marginBottom: '0.5rem'
                    }}>
                      <TimeIcon size={18} />
                    </span>
                    <p className="timeline-card__year">{item.year}</p>
                    <p className="timeline-card__event">{item.evento}</p>
                  </div>
                  <div className="timeline-dot" />
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
