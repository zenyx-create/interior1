import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import './App.css'

const videoUrl = 'https://files.catbox.moe/mte0v5.mp4'
const whatsappUrl = 'https://wa.me/919355618309'
const emailUrl = 'mailto:singhvaibhav0953@gmail.com'

const interiors = [
  'Opulent Living Lounge',
  'Royal Master Suite',
  'Marble Dining Salon',
  'Contemporary Villa Foyer',
  'Boutique Office Interior',
  'Penthouse Family Room',
]

const mandirs = [
  'Carved Teak Mandir',
  'Backlit Marble Shrine',
  'Temple Wall Niche',
  'Luxury Brass Sanctum',
  'Minimal Divine Corner',
  'Grand Home Temple',
]

const services = [
  'Luxury residences',
  'Bespoke mandir design',
  'Space planning',
  'Material curation',
]

const pageVariants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  exit: { opacity: 0, y: -18, transition: { duration: 0.25 } },
}

function Header() {
  const links = [
    ['/', 'Home'],
    ['/portfolio', 'Portfolio'],
    ['/mandir-designs', 'Mandir Designs'],
    ['/about', 'About'],
    ['/contact', 'Contact'],
  ]

  return (
    <header className="site-header">
      <Link className="brand" to="/" aria-label="Livo Arts & Designs home">
        <span className="brand-mark">L</span>
        <span>Livo Arts & Designs</span>
      </Link>
      <nav className="nav-links" aria-label="Primary navigation">
        {links.map(([to, label]) => (
          <NavLink key={to} to={to} className={({ isActive }) => (isActive ? 'active' : '')}>
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

function FloatingActions() {
  return (
    <div className="floating-actions" aria-label="Quick contact links">
      <a
  href={whatsappUrl}
  target="_blank"
  rel="noreferrer"
  aria-label="Chat on WhatsApp"
>
  <FaWhatsapp />
</a>

<a
  href={emailUrl}
  aria-label="Send email"
>
  <MdEmail />
</a>
    </div>
  )
}

function SectionIntro({ eyebrow, title, text }) {
  return (
    <motion.div className="section-intro" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{text}</p>
    </motion.div>
  )
}

function ProjectCard({ title, type, index }) {
  return (
    <motion.article className="project-card" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.04 }} whileHover={{ y: -10 }}>
      <div className={`project-image image-${(index % 6) + 1}`}>
        <span>{type}</span>
      </div>
      <div className="project-content">
        <p>{type}</p>
        <h3>{title}</h3>
        <span>View concept →</span>
      </div>
    </motion.article>
  )
}

function Home() {
  return (
    <motion.main variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <section className="hero-section">
        <video className="hero-video" src={videoUrl} autoPlay muted loop playsInline poster="/favicon.svg" />
        <div className="hero-overlay" />
        <motion.div className="hero-content" initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: 'easeOut' }}>
          <p className="eyebrow">Luxury interiors • Divine mandir artistry</p>
          <motion.h1
  initial={{ opacity: 0, y: 80 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2 }}
>
  Crafting timeless interiors with divine mandir artistry.
</motion.h1>
          <p className="hero-copy">Premium residential interiors shaped with rich materials, calm details, and sacred spaces designed for modern Indian homes.</p>
          <div className="hero-buttons">
            <Link className="btn primary" to="/portfolio">Explore Portfolio</Link>
            <Link className="btn secondary" to="/contact">Book Consultation</Link>
          </div>
        </motion.div>
      </section>
      <section className="stats-band">
        {['Bespoke Design', 'Premium Materials', 'Mandir Specialists', 'Turnkey Vision'].map((item) => <span key={item}>{item}</span>)}
      </section>
      <SectionIntro eyebrow="Signature work" title="Interiors that feel intimate, cinematic, and enduring." text="Every project balances refined planning, handcrafted details, and a warm black-gold palette for an unmistakably premium mood." />
      <div className="card-grid home-grid">
        {interiors.slice(0, 3).map((item, index) => <ProjectCard key={item} title={item} type="Interior" index={index} />)}
      </div>
    </motion.main>
  )
}

function Portfolio() {
  return (
    <PageShell eyebrow="Portfolio" title="Luxury project cards and curated interior gallery." text="Explore elegant living rooms, suites, foyers, dining spaces, and statement corners designed for premium lifestyles.">
      <div className="card-grid">{interiors.map((item, index) => <ProjectCard key={item} title={item} type="Interior Gallery" index={index} />)}</div>
    </PageShell>
  )
}

function MandirDesigns() {
  return (
    <PageShell eyebrow="Mandir designs" title="Sacred spaces with rich detailing and peaceful proportion." text="From compact home mandirs to grand carved sanctums, each design blends devotion, lighting, material craft, and modern utility.">
      <div className="card-grid">{mandirs.map((item, index) => <ProjectCard key={item} title={item} type="Mandir Gallery" index={index} />)}</div>
    </PageShell>
  )
}

function About() {
  return (
    <PageShell eyebrow="About Livo" title="A design studio for refined homes and soulful mandirs." text="Livo Arts & Designs creates immersive interiors where luxury is quiet, personal, and deeply functional.">
      <div className="about-panel">
        <div><h3>Our approach</h3><p>We combine mood-led concepts, precise space planning, material storytelling, and detailed execution guidance to make every room feel complete.</p></div>
        <ul>{services.map((service) => <li key={service}>{service}</li>)}</ul>
      </div>
    </PageShell>
  )
}

function Contact() {
  return (
    <PageShell eyebrow="Contact" title="Book a luxury design consultation." text="Tell us about your home, mandir, or renovation vision. We will help shape it into a premium design experience.">
      <div className="contact-layout">
        <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
          <input type="text" placeholder="Your name" aria-label="Your name" required />
          <input type="email" placeholder="Email address" aria-label="Email address" required />
          <input type="tel" placeholder="Phone number" aria-label="Phone number" />
          <textarea placeholder="Tell us about your project" aria-label="Project message" rows="6" required />
          <button className="btn primary" type="submit">Send Enquiry</button>
        </form>
        <div className="contact-card">
          <h3>Start your project</h3>
          <p>Connect instantly for consultations, mandir design concepts, and interior styling enquiries.</p>
          <a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp: +91 93556 18309</a>
          <a href={emailUrl}>singhvaibhav0953@gmail.com</a>
        </div>
      </div>
    </PageShell>
  )
}

function PageShell({ eyebrow, title, text, children }) {
  return (
    <motion.main className="page" variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <SectionIntro eyebrow={eyebrow} title={title} text={text} />
      {children}
    </motion.main>
  )
}

function App() {
  const location = useLocation()
  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/mandir-designs" element={<MandirDesigns />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
      <FloatingActions />
      <footer>© 2026 Livo Arts & Designs. Crafted for timeless luxury.</footer>
    </>
  )
}

export default App
