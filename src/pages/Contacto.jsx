import { useState } from 'react'
import emailjs from '@emailjs/browser'
import {
  Mail,
  MapPin,
  Clock,
  ShoppingBag,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  HelpCircle,
  ArrowRight
} from 'lucide-react'
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
    a: 'Por ahora no contamos con delivery. Todo se pide directamente en el local, pero sí tenemos opción para llevar.'
  },
  {
    q: '¿Puedo hacer pedidos por WhatsApp o teléfono?',
    a: 'Por el momento no tomamos pedidos por teléfono ni WhatsApp. Pasa por el local y te atendemos con gusto. Para consultas generales puedes escribirnos al correo.'
  },
  {
    q: '¿Aceptan leche deslactosada?',
    a: 'Sí, tenemos la opción de preparar tus jugos y batidos con leche deslactosada. El precio varía solo un poco, siendo accesible.'
  },
  {
    q: '¿Qué ofrecen los fines de semana?',
    a: 'Los sábados y domingos preparamos papa rellena casera, que sale acompañada de ensalada y/o arroz. Es el especial que el barrio ya espera cada fin de semana.'
  },
]

export default function Contacto() {
  const [form, setForm]         = useState({ nombre: '', email: '', asunto: '', mensaje: '' })
  const [openFaq, setOpenFaq]   = useState(null)
  const [sent, setSent]         = useState(false)
  const [sending, setSending]   = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setErrorMsg('')

    try {
      await emailjs.send(
        'service_oxb4q9p',
        'template_aatir1a',
        {
          nombre: form.nombre,
          email: form.email,
          asunto: form.asunto,
          mensaje: form.mensaje,
        },
        'gtGQRQ_VV1kmHWKxb'
      )
      setSent(true)
    } catch (err) {
      console.error('Error al enviar correo con EmailJS:', err)
      setErrorMsg('No se pudo enviar el mensaje en este momento. Por favor escríbenos directamente a andrewsqd4123@gmail.com')
    } finally {
      setSending(false)
    }
  }

  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero page-hero--fucsia">
        <div className="blob page-hero__blob-1" />
        <div className="blob page-hero__blob-2" />
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <span className="title-pill pill-fucsia" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
            <Mail size={14} /> Estamos para ti
          </span>
          <h1 className="section-title" style={{ marginTop: '0.5rem' }}>
            Contáctanos
          </h1>
          <div className="divider divider-fucsia" />
          <p className="section-subtitle" style={{ marginTop: '1rem' }}>
            ¿Tienes alguna consulta o sugerencia? Escríbenos y te respondemos directamente al correo.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <div className="contacto-grid">

            {/* FORM */}
            <div className="contacto-form-side">
              {sent ? (
                <div className="form-success glass-card" style={{ textAlign: 'center', padding: '2.5rem 1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                    <CheckCircle2 size={48} color="var(--verde)" />
                  </div>
                  <h3>¡Mensaje enviado con éxito!</h3>
                  <p style={{ margin: '0.75rem 0 1.75rem', color: 'var(--text-muted)' }}>
                    Gracias por escribirnos, <strong>{form.nombre}</strong>. Te responderemos a la brevedad a tu correo ({form.email}).
                  </p>
                  <button
                    className="btn btn-primary"
                    onClick={() => { setSent(false); setForm({ nombre:'', email:'', asunto:'', mensaje:'' }) }}
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form className="contact-form glass-card" onSubmit={handleSubmit}>
                  <h2 className="contact-form__title">Envíanos un mensaje</h2>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                    Tu mensaje llegará directamente a: <strong>andrewsqd4123@gmail.com</strong>
                  </p>

                  {errorMsg && (
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      padding: '0.85rem 1rem',
                      background: 'rgba(216, 27, 96, 0.1)',
                      color: 'var(--fucsia)',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.88rem',
                      marginBottom: '1.25rem',
                      border: '1px solid rgba(216, 27, 96, 0.25)'
                    }}>
                      <AlertCircle size={18} style={{ flexShrink: 0 }} />
                      <span>{errorMsg}</span>
                    </div>
                  )}

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
                      <option value="Consulta general">Consulta general</option>
                      <option value="Sugerencia">Sugerencia</option>
                      <option value="Felicitación">Felicitación</option>
                      <option value="Otro motivo">Otro motivo</option>
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

                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ width: '100%', justifyContent: 'center', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                    disabled={sending}
                  >
                    {sending ? (
                      <>
                        <Loader2 size={16} className="spin-icon" />
                        <span>Enviando mensaje…</span>
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>Enviar mensaje</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* SIDE INFO */}
            <div className="contacto-side">
              <div className="contacto-channels">
                {[
                  {
                    icon: Mail,
                    label: 'Correo electrónico',
                    val: 'andrewsqd4123@gmail.com',
                    link: 'mailto:andrewsqd4123@gmail.com',
                    bg: 'var(--fucsia-light)',
                    color: 'var(--fucsia)',
                  },
                  {
                    icon: MapPin,
                    label: 'Visítanos en persona',
                    val: 'Campoy, San Juan de Lurigancho',
                    link: 'https://maps.app.goo.gl/ZfzrqrF5TbmFc7tT6',
                    bg: 'var(--naranja-light)',
                    color: 'var(--naranja)',
                  },
                  {
                    icon: Clock,
                    label: 'Horario de atención',
                    val: 'Lun – Dom: 6:30 pm – 12:00 am',
                    link: null,
                    bg: 'var(--mango-light)',
                    color: 'var(--mango-dark)',
                  },
                  {
                    icon: ShoppingBag,
                    label: 'Para llevar',
                    val: 'Sí, todo se prepara para llevar',
                    link: null,
                    bg: 'var(--verde-light)',
                    color: 'var(--verde)',
                  },
                ].map(ch => {
                  const ChannelIcon = ch.icon
                  return ch.link ? (
                    <a
                      key={ch.label}
                      href={ch.link}
                      target={ch.link.startsWith('http') ? '_blank' : '_self'}
                      rel="noreferrer"
                      className="channel-card glass-card"
                    >
                      <span className="channel-icon" style={{ background: ch.bg, color: ch.color }}>
                        <ChannelIcon size={18} />
                      </span>
                      <div>
                        <p className="channel-label">{ch.label}</p>
                        <p className="channel-val">{ch.val}</p>
                      </div>
                      <ArrowRight size={16} className="channel-arrow" style={{ marginLeft: 'auto' }} />
                    </a>
                  ) : (
                    <div key={ch.label} className="channel-card glass-card" style={{ cursor: 'default' }}>
                      <span className="channel-icon" style={{ background: ch.bg, color: ch.color }}>
                        <ChannelIcon size={18} />
                      </span>
                      <div>
                        <p className="channel-label">{ch.label}</p>
                        <p className="channel-val">{ch.val}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div style={{ marginTop: '4rem' }}>
            <div className="text-center" style={{ marginBottom: '2rem' }}>
              <span className="title-pill pill-mango" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                <HelpCircle size={14} /> Preguntas frecuentes
              </span>
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
