import './Productos.css'

const categorias = [
  {
    id: 'jugos',
    titulo: 'Jugos & Batidos Naturales',
    emoji: '🥤',
    pill: 'pill-mango',
    accent: 'var(--mango-dark)',
    bg: 'var(--mango-light)',
    border: 'var(--mango)',
    imagen: 'https://img.magnific.com/fotos-premium/arco-iris-batidos-sandia-papaya-mango-espinaca-fruta-dragon-batidos-jugos-bebidas-bebidas-variedad-frutas-frescas-mesa-madera_442337-92076.jpg?w=600',
    descripcion: '100% naturales, sin conservantes ni azúcar añadida. Con agua o con leche (también deslactosada, sin costo extra significativo). Solos o combinados — la combinación que tú elijas.',
    extra: null,
    items: null,
    badges: [
      { label: 'Papaya',    color: '#FF6D2E', text: 'white' },
      { label: 'Piña',      color: '#FFB300', text: '#1A0A00' },
      { label: 'Plátano',   color: '#F9A825', text: '#1A0A00' },
      { label: 'Fresa',     color: '#D81B60', text: 'white' },
      { label: 'Mango',     color: '#FF8F00', text: '#1A0A00' },
      { label: 'Arándano',  color: '#6A1B9A', text: 'white' },
      { label: 'Naranja',   color: '#FF6D2E', text: 'white' },
      { label: 'Maracuyá',  color: '#F57F17', text: '#1A0A00' },
      { label: 'Guanábana', color: '#388E3C', text: 'white' },
      { label: 'Lúcuma',    color: '#C8860A', text: 'white' },
      { label: 'Granadilla',color: '#E65100', text: 'white' },
    ],
  },
  {
    id: 'hamburguesas',
    titulo: 'Hamburguesas & Sandwiches',
    emoji: '🍔',
    pill: 'pill-naranja',
    accent: 'var(--naranja)',
    bg: 'var(--naranja-light)',
    border: 'var(--naranja)',
    imagen: 'https://www.mercadonegro.pe/wp-content/uploads/2019/10/hamburgues-2017_07_11_125926.jpg',
    descripcion: 'Preparadas al momento con pan fresco y los ingredientes que más le gustan al barrio. Jugosas, contundentes y con ese sabor que no se olvida.',
    extra: null,
    items: [
      { name: 'Sandwich de pollo deshilachado', icon: '🐔' },
      { name: 'Hamburguesa de pollo',           icon: '🍗' },
      { name: 'Hamburguesa de carne',           icon: '🥩' },
      { name: 'Hamburguesa artesanal',          icon: '🌟' },
      { name: 'Hamburguesa de chorizo',         icon: '🌶️' },
      { name: 'Hamburguesa Royal (huevo + queso)', icon: '👑' },
      { name: 'Pan con chicharrón',             icon: '🥖' },
    ],
    badges: null,
  },
  {
    id: 'postres',
    titulo: 'Postres, Kekes & Empanadas',
    emoji: '🍰',
    pill: 'pill-fucsia',
    accent: 'var(--fucsia)',
    bg: 'var(--fucsia-light)',
    border: 'var(--fucsia)',
    imagenes: [
      'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlRumgOxKO9RkLCTAM4W2aQJR4o2YyaJB-rZVhpc3y-8Lfdkg-eV0mh6hNDtzsiSOv4FPq0LitClCaXggBZ6DAt6BqKa1lZATONEITpDLAgxJC5G__zg0WEmYRiZEe1hF4Uesu5=s508-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlO_HCvSVHXWnxqqgs-M1FBcU9iAtUCAp95NnFfDUKm_kZ1nrgcEbDhl6YoL6dpsTv4B9jSA-rK2pTxNFuAEcQe9EGWsDlRWerP6QUlZeXgDIImRp14kbKLBv-o3Lxtdlh3kFv9FQ=s846-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlHcNmtKoZeXCfxOQvApZcgy4O7d72YdA1xZQoR4dYuok1FXTfhmHQG6JcJ2gd6UzvzDjY59OBCvLIpP0y2nTc65pI4mNmH0_m4Xip0h2Y5CWdcFh1aAPvDuYaW24WH94EAIN5l-g=s846-k-no',
    ],
    descripcion: 'Recetas caseras con el alma de Rosita. Cada keke, empanada y postre es hecho en casa — se nota en el sabor desde el primer bocado.',
    extra: null,
    items: [
      { name: 'Keke de naranja',   icon: '🍊' },
      { name: 'Keke marmoleado',   icon: '🌀' },
      { name: 'Keke de chocolate', icon: '🍫' },
      { name: 'Chifón',            icon: '☁️' },
      { name: 'Empanada de carne', icon: '🥩' },
      { name: 'Empanada de pollo', icon: '🐔' },
      { name: 'Alfajores',         icon: '🍪' },
      { name: 'Pie de manzana',    icon: '🍎' },
      { name: 'Gelatinas',         icon: '💎' },
      { name: 'Leche asada',       icon: '🥛' },
    ],
    badges: null,
  },
  {
    id: 'ensaladas',
    titulo: 'Ensaladas de Frutas',
    emoji: '🥗',
    pill: 'pill-verde',
    accent: 'var(--verde)',
    bg: 'var(--verde-light)',
    border: 'var(--verde)',
    imagenes: [
      'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWl6bTpsVoyGJDG1srXVO20IjuXkFwMR285d2lkwyvnUkxC837h6PCzngwSce2hVOnplGQrN4QAsL_WBQgp8PgoxDcCGKVNw31fwc8Ilo-Yrfn8ZO5ZzvEB-Tc7PyhLl9o4f515v=s563-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn3IjtpU6ZVmwwgLmyk82juvFPrqjzeIAyAaha1D_EQ0i6TA-sxy6-ttdqUlvPVeLoL5I4lOohZLraUp44VxaEzsWDp9QhHCPBBrxaspsw6ywpJLiisRL4QwyBNRh2zMc2lv1rJXw=w203-h153-k-no',
    ],
    descripcion: 'Frescura y color en cada cucharada. Frutas de temporada seleccionadas cada día, con granola o yogurt según tu antojo.',
    extra: null,
    items: [
      { name: 'Ensalada clásica de frutas',     icon: '🍓' },
      { name: 'Ensalada con granola',           icon: '🌾' },
      { name: 'Ensalada con yogurt',            icon: '🥛' },
      { name: 'Ensalada tropical (mango + piña)', icon: '🥭' },
    ],
    badges: null,
  },
  {
    id: 'especial-finde',
    titulo: 'Especial de Fin de Semana',
    emoji: '🥔',
    pill: 'pill-naranja',
    accent: 'var(--naranja)',
    bg: 'var(--naranja-light)',
    border: 'var(--naranja)',
    imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Papa_rellena_Peru.jpg/640px-Papa_rellena_Peru.jpg',
    descripcion: 'Solo los sábados y domingos. La papa rellena de Rosita, doradita por fuera y jugosa por dentro, sale acompañada de ensalada y/o arroz. Un clásico peruano que el barrio ya espera cada fin de semana.',
    extra: '📅 Disponible únicamente sábados y domingos',
    items: [
      { name: 'Papa rellena con ensalada',          icon: '🥗' },
      { name: 'Papa rellena con arroz',             icon: '🍚' },
      { name: 'Papa rellena con ensalada y arroz',  icon: '🍽️' },
    ],
    badges: null,
  },
]

export default function Productos() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero page-hero--naranja">
        <div className="blob page-hero__blob-1" />
        <div className="blob page-hero__blob-2" />
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <span className="title-pill pill-naranja">🍽️ Lo que ofrecemos</span>
          <h1 className="section-title" style={{ marginTop: '0.5rem' }}>
            Nuestro <span className="text-naranja">Menú</span>
          </h1>
          <div className="divider divider-mango" />
          <p className="section-subtitle" style={{ marginTop: '1rem' }}>
            Todo hecho con amor, ingredientes frescos y la sazón que solo Rosita sabe dar.
            Pedidos en local — y sí <strong>hay para llevar</strong> 🛍️
          </p>
        </div>
      </section>

      {/* CATEGORÍAS */}
      <section className="section-pad">
        <div className="container">
          {categorias.map((cat, idx) => (
            <div
              key={cat.id}
              id={cat.id}
              className={`producto-row ${idx % 2 !== 0 ? 'producto-row--reverse' : ''}`}
              style={{ '--accent': cat.accent, '--bg': cat.bg, '--border': cat.border }}
            >
              {/* IMAGEN */}
              <div className="producto-row__img-side">
                {cat.imagen ? (
                  <img src={cat.imagen} alt={cat.titulo} className="producto-row__img" />
                ) : (
                  <div className="producto-row__img-grid">
                    {(cat.imagenes || []).slice(0,3).map((src, i) => (
                      <img key={i} src={src} alt={`${cat.titulo} ${i+1}`} className="producto-row__img-mini" />
                    ))}
                  </div>
                )}
              </div>

              {/* CONTENT */}
              <div className="producto-row__content">
                <span className={`title-pill ${cat.pill}`}>
                  {cat.emoji} {cat.titulo}
                </span>
                <h2 className="producto-row__title">{cat.titulo}</h2>
                <p className="producto-row__desc">{cat.descripcion}</p>

                {/* BADGE ESPECIAL (finde) */}
                {cat.extra && (
                  <div className="producto-finde-badge">
                    {cat.extra}
                  </div>
                )}

                {/* BADGES (frutas) */}
                {cat.badges && (
                  <div className="producto-row__badges">
                    {cat.badges.map(b => (
                      <span
                        key={b.label}
                        className="fruit-badge"
                        style={{ background: b.color, color: b.text }}
                      >
                        {b.label}
                      </span>
                    ))}
                  </div>
                )}

                {/* LISTA */}
                {cat.items && (
                  <ul className="producto-row__list">
                    {cat.items.map(item => (
                      <li key={item.name} className="producto-row__list-item">
                        <span className="producto-row__list-icon">{item.icon}</span>
                        {item.name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
