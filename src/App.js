import { useState } from 'react';
import './App.css';

const collections = [
  { title: 'Kitenge', image: '/kitenge1.jpg', note: 'Bold heritage prints' },
  { title: 'Wedding & Events', image: '/women0.jpg', note: 'Made for your moment' },
  { title: "Men's Fashion", image: '/men1.jpg', note: 'Sharp, considered tailoring' },
  { title: "Women's Fashion", image: '/women1.jpg', note: 'Modern feminine silhouettes' },
  { title: "Made's Rwanda", image: '/kitenge2.jpg', note: 'Crafted with meaning' },
  { title: 'Custom Designs', image: '/kitenge4.jpg', note: 'Your vision, realised' },
];

const gallery = [
  '/kitenge3.jpg',
  '/women2.jpg',
  '/men2.jpg',
  '/women3.jpg',
  '/kitenge4.jpg',
  '/women4.jpg',
  '/men3.jpg',
  '/men4.jpg',
  '/women1.jpg',
  '/women0.jpg',
  '/tuyishimiregloria_1789658544447.jpg',
  '/JustBeingMeEMY_1789563769399.jpg',
];
const services = [
  { icon: '✂', title: 'Custom Tailoring', text: 'Personal fittings and thoughtful details for a silhouette that feels like yours.' },
  { icon: '◇', title: 'Occasion Wear', text: 'Elegant looks for weddings, celebrations, work and every important moment.' },
  { icon: '✦', title: 'Style Consultation', text: 'A considered edit of colour, fabric and shape to bring your vision together.' },
  { icon: '▱', title: 'Reliable Delivery', text: 'Clear timelines and careful finishing from our studio to your door.' },
];

function Arrow() {
  return <span aria-hidden="true">→</span>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    return setMenuOpen(false);
  }

  return (
    <div className="site-shell">
      <header className="navbar">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Coxy Fashion House home">
          <img src="/logo.png" alt="Coxy Fashion House" />
        </a>
        <button
          className={`menu-btn ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          type="button"
        >
          <span /> <span /> <span />
        </button>
        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a className="active" href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About Us</a>
          <a href="#collections" onClick={closeMenu}>Collections </a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#gallery" onClick={closeMenu}>Gallery</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Shop Now</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <img className="hero-bg" src="/main-photo.png" alt="Model wearing a colourful Coxy Kitenge dress" />
          <div className="hero-overlay" />
          <div className="hero-content">
            <img className="hero-logo" src="/logo.png" alt="Coxy Fashion House" />
            <div className="hero-rule" />
            <p className="script-line">Crafted in Rwanda, Made for You.</p>
            <p className="hero-text">Unique clothing designed and tailored to express your style.</p>
            <div className="hero-buttons">
              <a className="btn btn-gold" href="#collections">Explore Our Collection <Arrow /></a>
              <a className="btn btn-outline" href="#contact">Contact Us</a>
            </div>
          </div>
        </section>

        <section className="trust-strip" aria-label="Coxy Fashion House benefits">
          <div><span className="benefit-icon">◇</span><span><strong>High Quality Fabrics</strong><small>We use the best fabrics<br />for lasting beauty.</small></span></div>
          <div><span className="benefit-icon">✂</span><span><strong>Custom Tailoring</strong><small>Perfect fit for every<br />occasion.</small></span></div>
          <div><span className="benefit-icon">▱</span><span><strong>Timely Delivery</strong><small>Your orders, on time,<br />always.</small></span></div>
          <div><span className="benefit-icon">♢</span><span><strong>Made in Rwanda</strong><small>Supporting local talent<br />and culture.</small></span></div>
          <div><span className="benefit-icon">♡</span><span><strong>Customer Satisfaction</strong><small>Your happiness<br />is our priority.</small></span></div>
        </section>

        <section className="section collections" id="collections">
          <div className="collection-layout">
            <div className="section-intro">
              <p className="section-label">Our Collections</p>
              <h2>Styles for Every Occasion</h2>
              <p>From traditional to modern, we create outfits that celebrate your unique style and personality.</p>
              <a className="btn btn-dark" href="#gallery">View All Collections <Arrow /></a>
            </div>
            <div className="collection-grid">
              {collections.map((item) => <a className="collection-card" href="#contact" key={item.title}>
                <div className="collection-image"><img src={item.image} alt={item.title} /><span className="card-arrow"><Arrow /></span></div>
                <div className="card-caption"><strong>{item.title}</strong><Arrow /></div>
                <small>{item.note}</small>
              </a>)}
            </div>
          </div>
        </section>

        <section className="section services" id="services">
          <div className="section-heading centered">
            <p className="section-label">What We Offer</p>
            <h2>Made Around You</h2>
            <p>From the first idea to the final fitting, our process is personal, precise and made to last.</p>
          </div>
          <div className="service-grid">
            {services.map((service) => <article className="service-card" key={service.title}>
              <div className="service-icon" aria-hidden="true">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>)}
          </div>
        </section>

        <section className="about-band" id="about">
          <div className="about-image"><img src="/main-photo.png" alt="Coxy fashion design in vivid Kitenge fabric" /></div>
          <div className="about-copy">
            <p className="section-label">About Coxy Fashion House</p>
            <h2>More Than Clothes,<br /><em>It's a Story.</em></h2>
            <p>Coxy Fashion House is a Rwandan fashion brand specializing in custom-made clothing for women and men. We blend tradition and modernity to bring you elegant, comfortable and unique designs for every occasion.</p>
            <a className="btn btn-outline gold-outline" href="#contact">Learn More <Arrow /></a>
          </div>
          <div className="stats"><div><b>5+</b><span>Years of Experience</span></div><div><b>20+</b><span>Happy Clients</span></div><div><b>100%</b><span>Made in Rwanda</span></div></div>
        </section>

        <section className="section gallery" id="gallery">
          <div className="gallery-header">
            <div>
              <p className="section-label">Our Gallery</p>
              <h2>Recent Work</h2>
              <p>Take a look at some of our latest designs and creations.</p>
            </div>
            <a className="btn btn-dark gallery-btn" href="#contact">View Gallery <Arrow /></a>
          </div>

          <div className="gallery-grid">
            {gallery.map((image, index) => {
              const labels = [
                'Kitenge Edit',
                'Wedding Glow',
                'Tailored Ease',
                'Signature Style',
                'Heritage Print',
                'Modern Muse',
                'Gentlemen’s Line',
                'City Chic',
                'Soft Layers',
                'Occasion Ready',
                'Made in Rwanda',
                'Studio Story',
                'Bright Moments',
                'Coxy Collection'
              ];

              return (
                <figure className="gallery-item" key={`${image}-${index}`}>
                  <img src={image} alt={`Coxy Fashion design ${index + 1}`} />
                  <figcaption>{labels[index] || 'Coxy Collection'}</figcaption>
                </figure>
              );
            })}
          </div>
        </section>

        <section className="contact-banner" id="contact"><div><p className="section-label">Let's Create Something Beautiful</p><h2>Ready for Your Next Outfit?</h2><p>Contact us today for custom orders, inquiries or to book an appointment.</p></div><a className="btn btn-gold" href="mailto:coxyfashionhouse@gmail.com">Contact Us <Arrow /></a><div className="contact-meta"><span>+250788515470</span><span><span></span></span></div></section>
      </main>

      <footer className="footer"><div className="footer-main"><div className="footer-brand"><img src="/logo.png" alt="Coxy Fashion House" /><p>Crafted in Rwanda, Made for You.</p></div><div><h3>Quick Links</h3><div className="footer-links"><a href="#home">Home</a><a href="#about">About Us</a><a href="#collections">Collections</a><a href="#services">Services</a><a href="#gallery">Gallery</a><a href="#contact">Contact</a></div></div><div><h3>Contact Info</h3><div className="footer-contact"><a href="tel:+250788515470"><span className="footer-contact-icon" aria-hidden="true">☎</span><span>+250788515470</span></a><a href="https://mail.google.com/mail/?view=cm&fs=1&to=coxyfashionhouse@gmail.com" target="_blank" rel="noreferrer"><span className="footer-contact-icon" aria-hidden="true">✉</span><span>coxyfashionhouse@gmail.com</span></a><span><span className="footer-contact-icon" aria-hidden="true">⌖</span><span>Kigali, Rwanda</span></span></div></div></div><div className="footer-bottom"><span>© 2025 Coxy Fashion House. All rights reserved.</span><span>Made in Rwanda · Fashion · Culture · Elegance</span></div></footer>
    </div>
  );
}

export default App;