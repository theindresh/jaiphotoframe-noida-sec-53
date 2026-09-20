import { useState } from 'react'
import './App.css'

const navItems = ['Home', 'Collections', 'Custom Frame', 'Gallery', 'About', 'Contact']

const occasionCards = [
  {
    title: 'Family Frames',
    description: 'Together always',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Couple Frames',
    description: 'Love forever',
    image:
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Wedding Frames',
    description: 'Precious vows',
    image:
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Baby Frames',
    description: 'Little milestones',
    image:
      'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Collage Frames',
    description: 'Many memories',
    image:
      'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Portrait Frames',
    description: 'Your personality',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Gift Frames',
    description: 'Thoughtful gifting',
    image:
      'https://images.unsplash.com/photo-1519533119216-3e727b5ce6d7?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Mirror Frames',
    description: 'Decorative charm',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
  },
]

const featuredFrames = [
  {
    name: 'Family Collage Frame',
    description: 'A warm, timeless display for generations together.',
    image:
      'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Premium Wooden Frame',
    description: 'Elegant natural wood with handcrafted detailing.',
    image:
      'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Heart Collage Frame',
    description: 'Perfect for romantic keepsakes and cherished dates.',
    image:
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'LED Photo Frame',
    description: 'Soft illumination for memorable nights and gifting.',
    image:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Baby Milestone Frame',
    description: 'Celebrate every first step, smile and tiny moment.',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80',
  },
]

const customSteps = [
  'Upload Photo',
  'Choose Frame',
  'Select Size',
  'Add Message',
  'Get Quote on WhatsApp',
]

const galleryImages = [
  'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80',
]

const features = [
  'High Quality Materials',
  'Custom & Unique Designs',
  'Perfect for All Occasions',
  'Local Studio in Noida',
  'Trusted by Customers',
]

const testimonials = [
  {
    name: 'Priya Sharma',
    location: 'Noida',
    quote:
      'Beautiful frame and excellent finishing. Very cooperative and good quality work.',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Amit Verma',
    location: 'Sector 53',
    quote:
      'We got a custom family collage, and the final result looked premium and elegant.',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Ritika Singh',
    location: 'Greater Noida',
    quote:
      'Framing quality is excellent and the team guided us beautifully for the design.',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=900&q=80',
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="page-shell">
      <header className="site-header">
        <div className="topbar">
          <div className="topbar-inner shell">
            <div className="brand-mini">Noida Sector 53, Near Shiv Mandir</div>
            <div className="topbar-meta">
              <span>Call: 8810329059</span>
              <span>•</span>
              <span>8862275611</span>
            </div>
          </div>
        </div>

        <div className="nav-wrap shell">
          <div className="brand" aria-label="जय PHOTO फ्रेम logo">
            <div className="brand-mark">ज</div>
            <div className="brand-text">
              <strong>जय फोटो फ्रेम</strong>
              <span>आपकी यादें, हमारी कला ❤️</span>
            </div>
          </div>

          <nav className={`main-nav ${menuOpen ? 'open' : ''}`} aria-label="Main navigation">
            {navItems.map((item) => (
              <a key={item} href="#" className="nav-link">
                {item}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <a href="https://wa.me/918810329059" className="whatsapp-btn">
              WhatsApp Us
            </a>
            <button
              type="button"
              className="menu-toggle"
              onClick={() => setMenuOpen((state) => !state)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero shell">
          <div className="hero-copy">
            <div className="eyebrow">Premium Frames • Custom Designs • Personalised Gifts</div>
            <h1>
              Your Memories
              <span>Deserve a Beautiful Frame</span>
            </h1>
            <p className="hindi-line">आपकी यादें, हमारी कला ❤️</p>
            <p className="subtext">
              Premium Photo Frames, Custom Designs, Collages &amp; Personalised Gifts in Noida Sector 53.
            </p>

            <div className="hero-actions">
              <a href="#collections" className="primary-btn">
                Explore Collections
              </a>
              <a href="https://wa.me/918810329059" className="secondary-btn">
                Chat on WhatsApp
              </a>
            </div>

            <div className="trust-row">
              <span>✔ Premium Quality</span>
              <span>✔ Custom Design</span>
              <span>✔ Fast Delivery</span>
              <span>✔ Local Studio</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="photo-frame-card">
              <img
                src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80"
                alt="Premium framed family portrait"
              />
              <div className="caption-pill">Good Memories Forever ❤️</div>
            </div>
          </div>
        </section>

        <section className="occasion shell" id="collections">
          <div className="section-header">
            <h2>Shop by Occasion</h2>
            <p>Every memory deserves a beautiful home.</p>
          </div>

          <div className="occasion-grid">
            {occasionCards.map((card) => (
              <article key={card.title} className="occasion-card">
                <div className="occasion-image-wrap">
                  <img src={card.image} alt={card.title} />
                </div>
                <div className="occasion-content">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="featured shell">
          <div className="section-header compact">
            <h2>Featured Frames</h2>
            <a href="#" className="inline-link">
              View All Frames →
            </a>
          </div>

          <div className="featured-grid">
            {featuredFrames.map((frame) => (
              <article key={frame.name} className="feature-card">
                <button type="button" className="wish-btn" aria-label={`Save ${frame.name}`}>
                  ♡
                </button>
                <div className="feature-image-wrap">
                  <img src={frame.image} alt={frame.name} />
                </div>
                <div className="feature-info">
                  <h3>{frame.name}</h3>
                  <p>{frame.description}</p>
                  <a href="https://wa.me/918810329059" className="price-link">
                    Get Price on WhatsApp
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="custom-order">
          <div className="shell custom-inner">
            <div className="custom-copy">
              <p className="eyebrow light">Custom Made</p>
              <h2>Create Your Own Custom Frame</h2>
              <p>
                Turn your favourite photos into a unique keepsake. Choose your dimensions, style and personal message.
              </p>
              <a href="https://wa.me/918810329059" className="primary-btn dark">
                Start Custom Order
              </a>
            </div>

            <div className="workflow-card">
              <div className="workflow-grid">
                {customSteps.map((step, index) => (
                  <div key={step} className="workflow-item">
                    <span className="step-number">{index + 1}</span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="gallery shell">
          <div className="section-header compact">
            <h2>Our Gallery</h2>
            <div className="filter-pills" aria-label="Gallery filters">
              <button type="button" className="filter active">All</button>
              <button type="button" className="filter">Family</button>
              <button type="button" className="filter">Couple</button>
              <button type="button" className="filter">Wedding</button>
              <button type="button" className="filter">Baby</button>
              <button type="button" className="filter">Collage</button>
              <button type="button" className="filter">Custom</button>
            </div>
          </div>

          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <div key={image + index} className={`gallery-item item-${index % 3}`}>
                <img src={image} alt="Gallery frame sample" />
              </div>
            ))}
          </div>
        </section>

        <section className="why-choose shell">
          <div className="section-header compact">
            <h2>Why Choose जय फोटो फ्रेम?</h2>
          </div>

          <div className="feature-list">
            {features.map((feature, index) => (
              <div key={feature} className="feature-box">
                <div className="feature-icon">{['✦', '✧', '◎', '◈', '★'][index]}</div>
                <h3>{feature}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="testimonials shell">
          <div className="section-header compact">
            <h2>What Our Customers Say</h2>
          </div>

          <div className="testimonial-grid">
            {testimonials.map((review) => (
              <article key={review.name} className="testimonial-card">
                <div className="stars">★★★★★</div>
                <div className="review-author">
                  <img src={review.image} alt={review.name} />
                  <div>
                    <strong>{review.name}</strong>
                    <span>{review.location}</span>
                  </div>
                </div>
                <p>“{review.quote}”</p>
              </article>
            ))}
          </div>
        </section>

        <section className="visit shell">
          <div className="visit-card">
            <div className="visit-copy">
              <div className="eyebrow">Visit Our Studio</div>
              <h2>जय फोटो फ्रेम</h2>
              <p>Noida Sector 53</p>
              <p>Near Shiv Mandir</p>
              <p>Noida, Uttar Pradesh</p>

              <div className="location-actions">
                <a href="https://maps.google.com/?q=Noida+Sector+53+Near+Shiv+Mandir" className="primary-btn">
                  Get Directions
                </a>
                <a href="tel:8810329059" className="secondary-btn">
                  Call Now
                </a>
              </div>
            </div>

            <div className="map-panel" aria-label="Studio location map preview">
              <div className="map-pin">📍</div>
              <div className="map-label">Noida Sector 53</div>
            </div>
          </div>
        </section>

        <section className="cta-banner shell">
          <div className="cta-content">
            <div>
              <h2>Let’s Frame Your Memories</h2>
              <p>Call or WhatsApp us for enquiries, custom orders or visit our studio.</p>
            </div>

            <div className="cta-actions">
              <a href="tel:8810329059" className="primary-btn light">Call Now</a>
              <a href="https://wa.me/918810329059" className="secondary-btn light">WhatsApp</a>
              <a href="https://wa.me/918810329059" className="secondary-btn light">Chat on WhatsApp</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-grid">
          <div className="footer-brand">
            <div className="brand small-brand">
              <div className="brand-mark">ज</div>
              <div className="brand-text">
                <strong>जय फोटो फ्रेम</strong>
                <span>आपकी यादें, हमारी कला ❤️</span>
              </div>
            </div>
            <p>
              Premium quality frames, custom-designed keepsakes and memorable gifting inspired by real moments.
            </p>
          </div>

          <div>
            <h3>Quick Links</h3>
            <ul>
              <li>Home</li>
              <li>Collections</li>
              <li>Custom Frame</li>
              <li>Gallery</li>
            </ul>
          </div>

          <div>
            <h3>Our Services</h3>
            <ul>
              <li>Photo Framing</li>
              <li>Collage Framing</li>
              <li>Custom Photo Gifts</li>
              <li>Mirror &amp; LED Frames</li>
            </ul>
          </div>

          <div>
            <h3>Visit Us</h3>
            <ul>
              <li>Noida Sector 53</li>
              <li>Near Shiv Mandir</li>
              <li>8810329059</li>
              <li>8862275611</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom shell">
          <span>© 2026 जय फोटो फ्रेम. All rights reserved.</span>
          <div className="socials">
            <span>Instagram</span>
            <span>Facebook</span>
            <span>WhatsApp</span>
          </div>
        </div>
      </footer>

      <div className="mobile-bar">
        <a href="tel:8810329059">Call Now</a>
        <a href="https://wa.me/918810329059">WhatsApp</a>
      </div>
    </div>
  )
}

export default App
