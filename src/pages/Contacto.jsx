import { useState } from 'react'
import './Contacto.css'

const faqs = [
  {
    q: '¿Los jugos son 100% naturales?',
    a: 'Sí, totalmente. Todos nuestros jugos se preparan con fruta fresca, sin conservantes, sin colorantes y sin azúcar añadida (salvo que lo pidas). Solo fruta, amor y nada más.'
  },
  {
    q: '¿Hay muchas combinaciones de jugos?',
    a: 'Tenemos bastantes combinaciones disponibles y también puedes armar la tuya según lo que prefieras. Si tienes alguna mezcla favorita o quieres algo especial, solo pídelo en el local y lo preparamos.'
  },
  {
    q: '¿Hacen delivery?',
    a: 'Por ahora no contamos con delivery. Todo se pide directamente en el local, pero sí tenemos opción para llevar 🛍️.'
  },
  {
    q: '¿Puedo hacer pedidos por WhatsApp o teléfono?',
    a: 'Por el momento no tomamos pedidos por teléfono ni WhatsApp. Pasa por el local y te atendemos con gusto. Para consultas generales puedes escribirnos al correo.'
  },
  {
    q: '¿Aceptan leche deslactosada?',
    a: 'Sí, tenemos la opción de preparar tus jugos y batidos con leche deslactosada. El precio puede variar un poco, pero la diferencia es mínima.'
  },
  {
    q: '¿Qué ofrecen los fines de semana?',
    a: 'Los sábados y domingos preparamos papa rellena casera, que sale acompañada de ensalada y/o arroz. ¡Es el especial que el barrio ya espera cada finde! 🥔'
  },
]

export default function Contacto() {
  const [form, setForm]     = useState({ nombre: '', email: '', asunto: '', mensaje: '' })
  const [openFaq, setOpenFaq] = useState(null)
  const [sent, setSent]     = useState(false)
  const [sending, setSending] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setSending(true)
    setTimeout(() => { setSending(false); setSent(true) }, 1800)
  }

  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero page-hero--fucsia">
        <div className="blob page-hero__blob-1" />
        <div className="blob page-hero__blob-2" />
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <span className="title-pill pill-fucsia">Estamos para ti</span>
          <h1 className="section-title" style={{ marginTop: '0.5rem' }}>
            Contáctanos <span className="text-fucsia">💬</span>
          </h1>
          <div className="divider divider-fucsia" />
          <p className="section-subtitle" style={{ marginTop: '1rem' }}>
            ¿Tienes alguna pregunta o sugerencia? Escríbenos al correo y te respondemos pronto.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <div className="contacto-grid">

            {/* FORM */}
            <div className="contacto-form-side">
              {sent ? (
                <div className="form-success glass-card">
                  <span className="form-success__icon">🎉</span>
                  <h3>¡Mensaje enviado!</h3>
                  <p>Gracias, <strong>{form.nombre}</strong>. Te responderemos a la brevedad.</p>
                  <button className="btn btn-primary" onClick={() => { setSent(false); setForm({ nombre:'',email:'',asunto:'',mensaje:'' }) }}>
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form className="contact-form glass-card" onSubmit={handleSubmit}>
                  <h2 className="contact-form__title">Envíanos un mensaje</h2>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                    Tu mensaje llegará a: <strong>andrewsqd4123@gmail.com</strong>
                  </p>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="nombre">Nombre completo</label>
                      <input
                        id="nombre" type="text" name="nombre"
                        value={form.nombre} onChange={handleChange}
                        placeholder="Tu nombre" required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Tu correo electrónico</label>
                      <input
                        id="email" type="email" name="email"
                        value={form.email} onChange={handleChange}
                        placeholder="tu@correo.com" required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="asunto">Asunto</label>
                    <select id="asunto" name="asunto" value={form.asunto} onChange={handleChange} required>
                      <option value="">Selecciona un asunto…</option>
                      <option value="consulta">Consulta general</option>
                      <option value="sugerencia">Sugerencia</option>
                      <option value="felicitacion">Felicitación</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="mensaje">Mensaje</label>
                    <textarea
                      id="mensaje" name="mensaje"
                      value={form.mensaje} onChange={handleChange}
                      placeholder="Cuéntanos en qué podemos ayudarte…"
                      rows={5} required
                    />
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} disabled={sending}>
                    {sending ? '⏳ Enviando…' : '🚀 Enviar mensaje'}
                  </button>
                </form>
              )}
            </div>

            {/* SIDE INFO */}
            <div className="contacto-side">
              <div className="contacto-channels">
                {[
                  {
                    icon: '✉️',
                    label: 'Correo electrónico',
                    val: 'andrewsqd4123@gmail.com',
                    link: 'mailto:andrewsqd4123@gmail.com',
                    bg: 'var(--fucsia-light)',
                    color: 'var(--fucsia)',
                  },
                  {
                    icon: '📍',
                    label: 'Visítanos',
                    val: 'Campoy, San Juan de Lurigancho',
                    link: 'https://maps.app.goo.gl/ZfzrqrF5TbmFc7tT6',
                    bg: 'var(--naranja-light)',
                    color: 'var(--naranja)',
                  },
                  {
                    icon: '🌙',
                    label: 'Horario',
                    val: 'Lun – Dom: 6:30 pm – 12:00 am',
                    link: null,
                    bg: 'var(--mango-light)',
                    color: 'var(--mango-dark)',
                  },
                  {
                    icon: '🛍️',
                    label: 'Para llevar',
                    val: 'Sí, todo se puede llevar',
                    link: null,
                    bg: 'var(--verde-light)',
                    color: 'var(--verde)',
                  },
                ].map(ch => (
                  ch.link ? (
                    <a
                      key={ch.label}
                      href={ch.link}
                      target={ch.link.startsWith('http') ? '_blank' : '_self'}
                      rel="noreferrer"
                      className="channel-card glass-card"
                    >
                      <span className="channel-icon" style={{ background: ch.bg, color: ch.color }}>{ch.icon}</span>
                      <div>
                        <p className="channel-label">{ch.label}</p>
                        <p className="channel-val">{ch.val}</p>
                      </div>
                      <span className="channel-arrow">→</span>
                    </a>
                  ) : (
                    <div key={ch.label} className="channel-card glass-card" style={{ cursor: 'default' }}>
                      <span className="channel-icon" style={{ background: ch.bg, color: ch.color }}>{ch.icon}</span>
                      <div>
                        <p className="channel-label">{ch.label}</p>
                        <p className="channel-val">{ch.val}</p>
                      </div>
                    </div>
                  )
                ))}
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div style={{ marginTop: '4rem' }}>
            <div className="text-center" style={{ marginBottom: '2rem' }}>
              <span className="title-pill pill-mango">Preguntas frecuentes</span>
              <h2 className="section-title" style={{ marginTop: '0.5rem' }}>
                ¿Tienes dudas? <span className="text-mango">Tenemos respuestas</span>
              </h2>
              <div className="divider divider-mango" />
            </div>
            <div className="faq-list">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className={`faq-item glass-card ${openFaq === i ? 'faq-item--open' : ''}`}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <div className="faq-header">
                    <span className="faq-q">{faq.q}</span>
                    <span className="faq-toggle">{openFaq === i ? '−' : '+'}</span>
                  </div>
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
