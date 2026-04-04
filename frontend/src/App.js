import "@/App.css";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { Phone, Mail, MapPin, Menu, X, ChevronDown, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

// Navigation Component
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const services = [
    { name: "Sofa & Upholstery Cleaning", path: "/services/sofa-upholstery" },
    { name: "Car Interior Detailing", path: "/services/car-interior" },
    { name: "Regular Cleaning", path: "/services/regular-cleaning" },
    { name: "Deep Cleaning", path: "/services/deep-cleaning" },
    { name: "Airbnb & Vacation Rentals", path: "/services/airbnb-vacation" },
    { name: "Professional Carpet Cleaning", path: "/services/carpet-cleaning" },
    { name: "Post-Construction Cleanup", path: "/services/post-construction" },
  ];

  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  return (
    <nav className="bg-white py-2 px-6 sticky top-0 z-50 shadow-sm" data-testid="navigation">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center">
          {/* Left Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} data-testid="nav-home">HOME</Link>
            
            {/* Services Dropdown */}
            <div className="relative" onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)}>
              <button className="nav-link flex items-center gap-1" data-testid="nav-services">
                SERVICES <ChevronDown size={16} className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 min-w-[250px] z-50">
                  {services.map((service, index) => (
                    <Link 
                      key={index} 
                      to={service.path} 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-forest-primary transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link to="/portfolio" className={`nav-link ${location.pathname === '/portfolio' ? 'active' : ''}`}>OUR WORK</Link>
          </div>

          {/* Center Logo */}
          <Link to="/" className="flex items-center justify-center mx-6 lg:mx-12" data-testid="logo-section">
            <img 
              src="https://customer-assets.emergentagent.com/job_web-builder-1191/artifacts/y0mq50rq_logo_sin_fondo-1-removebg-preview.png"
              alt="Mi Hogar Home Cleaning"
              className="logo-image"
            />
          </Link>

          {/* Right Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} data-testid="nav-about">ABOUT US</Link>
            <Link to="/local-focus" className={`nav-link ${location.pathname === '/local-focus' ? 'active' : ''}`} data-testid="nav-local">LOCAL FOCUS</Link>
            <Link to="/quote" className="btn-quote" data-testid="nav-quote">GET A QUOTE</Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden absolute right-6 text-forest-dark"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="mobile-menu-btn"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t mt-4 py-4" data-testid="mobile-menu">
          <div className="flex flex-col items-center space-y-4">
            <Link to="/" className="nav-link">HOME</Link>
            
            <button 
              className="nav-link flex items-center gap-1"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              SERVICES <ChevronDown size={16} className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isServicesOpen && (
              <div className="flex flex-col items-center space-y-2 py-2 bg-gray-50 w-full">
                {services.map((service, index) => (
                  <Link 
                    key={index} 
                    to={service.path} 
                    className="text-sm text-gray-600 hover:text-forest-primary"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
            
            <Link to="/portfolio" className="nav-link">OUR WORK</Link>
            <Link to="/about" className="nav-link">ABOUT US</Link>
            <Link to="/local-focus" className="nav-link">LOCAL FOCUS</Link>
            <Link to="/quote" className="btn-quote">GET A QUOTE</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

// ==================== NEW HOME PAGE SECTIONS ====================

// Hero Section with Real Team Photo
const HeroSection = () => {
  return (
    <section className="hero-new" data-testid="hero-section">
      <div className="hero-bg-container">
        <img 
          src="https://customer-assets.emergentagent.com/job_web-builder-1191/artifacts/e0jwdg5h_image_69.jpg" 
          alt="Mi Hogar team member cleaning in Canmore home with mountain view"
          className="hero-bg-image"
        />
        <div className="hero-overlay-gradient"></div>
      </div>
      <div className="hero-content-new">
        <h1 className="hero-main-title">
          MI HOGAR HOME CLEANING
        </h1>
        <h2 className="hero-sub-title">
          YOUR CANMORE DEEP CLEANING EXPERTS
        </h2>
        <p className="hero-tagline">
          Local, Family-Owned Service
        </p>
        <Link to="/quote" className="btn-hero-cta">GET A QUOTE</Link>
      </div>
    </section>
  );
};

// Services Grid Section
const ServicesGridSection = () => {
  const services = [
    {
      icon: "https://customer-assets.emergentagent.com/job_web-builder-1191/artifacts/5f808ab9_residential1.png",
      title: "Residential Cleaning",
      subtext: "Deep / Regular / Move-in >",
      path: "/services/regular-cleaning"
    },
    {
      icon: "https://customer-assets.emergentagent.com/job_web-builder-1191/artifacts/v0wpxzqm_SOFA1.png",
      title: "Sofa & Upholstery",
      subtext: "Professional Deep Clean",
      path: "/services/sofa-upholstery"
    },
    {
      icon: "https://customer-assets.emergentagent.com/job_web-builder-1191/artifacts/cmbb4q6x_image_70.png",
      title: "Airbnb & Vacation Rentals",
      subtext: "Turnover & Presentation",
      path: "/services/airbnb-vacation"
    },
    {
      icon: "https://customer-assets.emergentagent.com/job_web-builder-1191/artifacts/oinwc6fr_cleaning_carpet1.png",
      title: "Professional Carpet",
      subtext: "Restorative Deep Extraction",
      path: "/services/carpet-cleaning"
    },
    {
      icon: "https://customer-assets.emergentagent.com/job_web-builder-1191/artifacts/5lmp687n_image_63.png",
      title: "Post-Construction",
      subtext: "Drywall Dust & Debris Removal",
      path: "/services/post-construction"
    },
    {
      icon: "https://customer-assets.emergentagent.com/job_web-builder-1191/artifacts/l7hpd6bb_car-shark1.png",
      title: "Car Interior Detailing",
      subtext: "Deep Sanitization",
      path: "/services/car-interior",
      larger: true
    }
  ];

  return (
    <section className="services-grid-section">
      <h2 className="section-title">OUR SERVICES</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <Link to={service.path} key={index} className="service-grid-card">
            <div className={`service-grid-icon ${service.larger ? 'service-grid-icon-large' : ''}`}>
              <img src={service.icon} alt={service.title} />
            </div>
            <h3 className="service-grid-title">{service.title}</h3>
            <p className="service-grid-subtext">{service.subtext}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

// Pride in Details Section (Airbnb)
const AirbnbPortfolioSection = () => {
  return (
    <section className="portfolio-section portfolio-light">
      <div className="portfolio-content">
        <div className="portfolio-image-side">
          <div className="faded-image-container-small">
            <img 
              src="https://customer-assets.emergentagent.com/job_web-builder-1191/artifacts/0to9bdn5_IMG_5638.jpg" 
              alt="Airbnb Welcome Kit preparation"
              className="faded-photo-small"
            />
          </div>
        </div>
        <div className="portfolio-text-side">
          <div className="portfolio-icon">
            <img 
              src="https://customer-assets.emergentagent.com/job_web-builder-1191/artifacts/cmbb4q6x_image_70.png" 
              alt="Airbnb Service Icon"
              className="portfolio-feature-icon"
            />
          </div>
          <h2 className="portfolio-title">AIRBNB & VACATION RENTALS</h2>
          <p className="portfolio-description">
            Hospitality excellence. We ensure your property is guest-ready with deep sanitization and professional linen presentation.
          </p>
          <Link to="/services/airbnb-vacation" className="btn-section-cta">Learn More</Link>
        </div>
      </div>
    </section>
  );
};

// Office & Commercial Spaces Section
const OfficePortfolioSection = () => {
  return (
    <section className="portfolio-section portfolio-cream">
      <div className="portfolio-content portfolio-reverse">
        <div className="portfolio-image-side">
          <div className="faded-image-container-small">
            <img 
              src="https://customer-assets.emergentagent.com/job_web-builder-1191/artifacts/qsk8ejpt_WhatsApp%20Image%202026-04-03%20at%202.33.28%20PM.jpeg" 
              alt="Office cleaning service"
              className="faded-photo-small"
            />
          </div>
        </div>
        <div className="portfolio-text-side">
          <div className="portfolio-icon">
            <img 
              src="https://customer-assets.emergentagent.com/job_web-builder-1191/artifacts/5f808ab9_residential1.png" 
              alt="Office Cleaning Icon"
              className="portfolio-feature-icon"
            />
          </div>
          <h2 className="portfolio-title">OFFICES & COMMERCIAL SPACES</h2>
          <p className="portfolio-description">
            Impeccable workspace solutions for a healthy and professional environment.
          </p>
          <Link to="/services/deep-cleaning" className="btn-section-cta">Learn More</Link>
        </div>
      </div>
    </section>
  );
};

// Sofa & Upholstery Section
const SofaPortfolioSection = () => {
  return (
    <section className="portfolio-section portfolio-light">
      <div className="portfolio-content">
        <div className="portfolio-image-side">
          <div className="faded-image-container-small">
            <img 
              src="https://customer-assets.emergentagent.com/job_web-builder-1191/artifacts/e1j7n4nv_image_68.jpg" 
              alt="Professional sofa extraction cleaning"
              className="faded-photo-small"
            />
          </div>
        </div>
        <div className="portfolio-text-side">
          <div className="portfolio-icon">
            <img 
              src="https://customer-assets.emergentagent.com/job_web-builder-1191/artifacts/w6j58m8h_image_71.png" 
              alt="Sofa Cleaning Icon"
              className="portfolio-feature-icon-large"
            />
          </div>
          <h2 className="portfolio-title">SOFA & UPHOLSTERY DEEP CLEANING</h2>
          <p className="portfolio-description">
            Revitalize your furniture with professional-grade extraction technology.
          </p>
          <Link to="/services/sofa-upholstery" className="btn-section-cta">Learn More</Link>
        </div>
      </div>
    </section>
  );
};

// Post-Construction Section
const PostConstructionSection = () => {
  return (
    <section className="post-construction-section">
      <div className="forest-watermark"></div>
      <div className="post-content">
        <div className="post-images">
          <div className="faded-image-container">
            <img 
              src="https://customer-assets.emergentagent.com/job_web-builder-1191/artifacts/byfdji60_image_67.jpg" 
              alt="Team member cleaning sofa with Shark extractor"
              className="faded-photo"
            />
          </div>
          <div className="faded-image-container mt-4">
            <img 
              src="https://customer-assets.emergentagent.com/job_web-builder-1191/artifacts/fag1x24g_image_68.jpg" 
              alt="Team member vacuuming carpet in office"
              className="faded-photo"
            />
          </div>
        </div>
        <div className="post-text">
          <h2 className="section-title-sparkle">✨ RESTORATIVE POST-CONSTRUCTION CLEANUP ✨</h2>
          <div className="post-icon">
            <img 
              src="https://customer-assets.emergentagent.com/job_web-builder-1191/artifacts/jgkivce7_image_63.png" 
              alt="Post-Construction Icon"
              className="feature-icon"
            />
          </div>
          <ul className="check-list">
            <li>✅ Drywall Dust Removal</li>
            <li>✅ Grout & Surface Restoration</li>
            <li>✅ Move-In Ready Presentation</li>
          </ul>
          <Link to="/services/post-construction" className="btn-section-cta">Learn More</Link>
        </div>
      </div>
    </section>
  );
};

// New Footer Section
const NewFooter = () => {
  return (
    <footer className="new-footer">
      <div className="footer-columns">
        {/* Logo Column */}
        <div className="footer-col">
          <img 
            src="https://customer-assets.emergentagent.com/job_web-builder-1191/artifacts/y0mq50rq_logo_sin_fondo-1-removebg-preview.png"
            alt="Mi Hogar Home Cleaning"
            className="footer-logo"
          />
        </div>

        {/* Contact Column */}
        <div className="footer-col">
          <h3 className="footer-col-title">CONTACT US</h3>
          <div className="footer-contact-items">
            <a href="tel:4036791671" className="footer-contact-item">
              <Phone size={18} />
              <span>403-679-1671</span>
            </a>
            <a href="mailto:info@homecleaningcanmore.ca" className="footer-contact-item">
              <Mail size={18} />
              <span>info@homecleaningcanmore.ca</span>
            </a>
            <a 
              href="https://wa.me/14036791671?text=Hello!%20I'm%20interested%20in%20your%20cleaning%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="footer-whatsapp-btn"
            >
              <MessageCircle size={18} />
              <span>Chat with Us on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Service Area Column */}
        <div className="footer-col">
          <h3 className="footer-col-title">SERVICE AREA</h3>
          <div className="footer-contact-item">
            <MapPin size={18} />
            <span>Serving Canmore & The Bow Valley</span>
          </div>
          <p className="footer-areas">Canmore • Deadman's Flats • Harvie Heights • Lac des Arcs</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Mi Hogar Home Cleaning. All rights reserved.</p>
        <p className="footer-bilingual">Proudly bilingual / Orgullosamente bilingüe 🇨🇦 🇪🇸</p>
      </div>
    </footer>
  );
};

// WhatsApp Floating Button
const WhatsAppButton = () => {
  const phoneNumber = "14036791671";
  const message = "Hello! I'm interested in your cleaning services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      data-testid="whatsapp-button"
      aria-label="Contact us on WhatsApp"
    >
      <svg viewBox="0 0 32 32" className="w-8 h-8" fill="white">
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.156-1.97C9.77 30.958 12.78 32 16.004 32 24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.294 22.602c-.388 1.092-1.938 1.998-3.168 2.262-.844.18-1.946.324-5.66-1.216-4.748-1.97-7.806-6.79-8.04-7.104-.226-.314-1.9-2.532-1.9-4.83s1.2-3.428 1.628-3.898c.388-.426.912-.612 1.376-.612.168 0 .318.008.454.016.428.018.642.044.924.716.352.842 1.21 2.948 1.316 3.162.108.214.216.502.072.788-.136.294-.258.424-.472.68-.214.256-.418.452-.632.728-.196.24-.416.496-.178.924.238.426 1.058 1.744 2.27 2.826 1.562 1.392 2.878 1.824 3.284 2.026.312.154.684.128.93-.134.312-.334.698-.89 1.09-1.438.28-.39.632-.44.976-.296.35.136 2.21 1.042 2.59 1.232.38.19.634.286.726.446.094.16.094.912-.294 2.004z"/>
      </svg>
    </a>
  );
};

// ==================== SERVICE PAGES ====================

// Post-Construction Page (NEW)
const PostConstructionPage = () => (
  <div className="page-container">
    <div className="page-hero bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-4xl mx-auto text-center py-16 px-4">
        <img 
          src="https://customer-assets.emergentagent.com/job_web-builder-1191/artifacts/jgkivce7_image_63.png"
          alt="Post-Construction Cleaning"
          className="page-hero-icon"
        />
        <h1 className="page-title">Post-Construction Cleanup</h1>
        <p className="page-subtitle">Drywall Dust & Debris Removal Specialists</p>
      </div>
    </div>
    <div className="page-content">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="content-card">
          <h2 className="content-title">Professional Construction Cleanup</h2>
          <p className="content-text">
            After construction or renovation, your space needs specialized cleaning to remove fine drywall dust, debris, and construction residue. Our <strong>post-construction cleanup service</strong> restores your home to move-in ready condition.
          </p>
          <ul className="feature-list">
            <li>Complete drywall dust removal from all surfaces</li>
            <li>Grout and tile cleaning</li>
            <li>Window and glass cleaning</li>
            <li>Floor restoration and polishing</li>
            <li>HVAC vent and filter cleaning</li>
            <li>Final detail cleaning for move-in</li>
          </ul>
          <div className="cta-section">
            <p className="cta-text">Ready to see your renovation shine?</p>
            <Link to="/quote" className="btn-cta">Get a Quote</Link>
          </div>
        </div>
      </div>
    </div>
    <NewFooter />
  </div>
);

// Sofa & Upholstery Page
const SofaUpholsteryPage = () => (
  <div className="page-container">
    <div className="page-hero bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-4xl mx-auto text-center py-16 px-4">
        <img 
          src="https://customer-assets.emergentagent.com/job_web-builder-1191/artifacts/v0wpxzqm_SOFA1.png"
          alt="Sofa Cleaning"
          className="page-hero-icon"
        />
        <h1 className="page-title">Couch Cleaning Canmore</h1>
        <p className="page-subtitle">Breathe Life Back into Your Upholstery</p>
      </div>
    </div>
    <div className="page-content">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="content-card">
          <h2 className="content-title">Professional Upholstery Restoration</h2>
          <p className="content-text">
            Using our professional <strong>Shark StainStriker extraction technology</strong>, we remove embedded dirt, pet hair, dust mites, and deep stains from your sofas, chairs, and upholstered furniture.
          </p>
          <ul className="feature-list">
            <li>Deep extraction removes years of embedded dirt</li>
            <li>Pet hair and dander removal</li>
            <li>Dust mite elimination for allergy relief</li>
            <li>Fast drying times – furniture ready same day</li>
            <li>Eco-friendly, non-toxic cleaning solutions</li>
            <li>Safe for all fabric types</li>
          </ul>
          <div className="cta-section">
            <p className="cta-text">Ready to refresh your furniture?</p>
            <Link to="/quote" className="btn-cta">Get a Quote</Link>
          </div>
        </div>
      </div>
    </div>
    <NewFooter />
  </div>
);

// Car Interior Page
const CarInteriorPage = () => (
  <div className="page-container">
    <div className="page-hero-image">
      <img 
        src="https://customer-assets.emergentagent.com/job_web-builder-1191/artifacts/59ru3znc_image_72.jpg"
        alt="Car interior cleaning with mountain view"
        className="page-banner-image"
      />
      <div className="page-hero-overlay">
        <h1 className="page-title-overlay">Mobile Car Detailing Canmore</h1>
        <p className="page-subtitle-overlay">Professional Interior Restoration</p>
      </div>
    </div>
    <div className="page-content">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="content-card">
          <h2 className="content-title">On-Site Mobile Service</h2>
          <p className="content-text">
            We come to you! Our <strong>mobile car detailing service</strong> brings professional-grade equipment right to your driveway, office, or wherever your vehicle is parked.
          </p>
          <ul className="feature-list">
            <li>High-power extraction for Alberta winter salt stains</li>
            <li>Complete carpet and floor mat restoration</li>
            <li>Seat deep cleaning and sanitization</li>
            <li>Dashboard and console detailing</li>
            <li>Odor elimination and air freshening</li>
            <li>Convenient mobile service – we come to you</li>
          </ul>
          <div className="cta-section">
            <p className="cta-text">Ready for a fresh, clean interior?</p>
            <Link to="/quote" className="btn-cta">Get a Quote</Link>
          </div>
        </div>
      </div>
    </div>
    <NewFooter />
  </div>
);

// Regular Cleaning Page
const RegularCleaningPage = () => (
  <div className="page-container">
    <div className="page-hero bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-4xl mx-auto text-center py-16 px-4">
        <img 
          src="https://customer-assets.emergentagent.com/job_web-builder-1191/artifacts/15e4oh01_residential1.png"
          alt="Residential Cleaning"
          className="page-hero-icon"
        />
        <h1 className="page-title">Canmore House Cleaning</h1>
        <p className="page-subtitle">Reliable, Recurring Home Care</p>
      </div>
    </div>
    <div className="page-content">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="content-card">
          <h2 className="content-title">Maintenance Cleaning You Can Count On</h2>
          <p className="content-text">
            Our <strong>regular cleaning service</strong> is designed for busy families and professionals who want a consistently clean home without the hassle.
          </p>
          <ul className="feature-list">
            <li>Weekly, bi-weekly, or monthly scheduling</li>
            <li>Consistent, thorough surface cleaning</li>
            <li>Kitchen and bathroom sanitization</li>
            <li>Dusting, vacuuming, and mopping</li>
            <li>Flexible scheduling to fit your life</li>
          </ul>
          <div className="cta-section">
            <p className="cta-text">Ready to reclaim your free time?</p>
            <Link to="/quote" className="btn-cta">Get a Quote</Link>
          </div>
        </div>
      </div>
    </div>
    <NewFooter />
  </div>
);

// Deep Cleaning Page
const DeepCleaningPage = () => (
  <div className="page-container">
    <div className="page-hero bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-4xl mx-auto text-center py-16 px-4">
        <img 
          src="https://customer-assets.emergentagent.com/job_web-builder-1191/artifacts/rbs7d979_UTENSILIOS1.png"
          alt="Deep Cleaning"
          className="page-hero-icon"
        />
        <h1 className="page-title">Restorative Grout & Surface Cleaning</h1>
        <p className="page-subtitle">Deep Cleaning That Reaches Every Corner</p>
      </div>
    </div>
    <div className="page-content">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="content-card">
          <h2 className="content-title">Beyond Surface Clean</h2>
          <p className="content-text">
            Our <strong>deep cleaning service</strong> reaches the places regular cleaning can't.
          </p>
          <ul className="feature-list">
            <li>Grout line restoration and brightening</li>
            <li>Behind and under appliance cleaning</li>
            <li>Inside cabinet and drawer cleaning</li>
            <li>Baseboard and trim detailing</li>
            <li>Light fixture and fan cleaning</li>
            <li>Window track and sill cleaning</li>
          </ul>
          <div className="cta-section">
            <p className="cta-text">Ready for a truly deep clean?</p>
            <Link to="/quote" className="btn-cta">Get a Quote</Link>
          </div>
        </div>
      </div>
    </div>
    <NewFooter />
  </div>
);

// Airbnb & Vacation Rentals Page
const AirbnbPage = () => (
  <div className="page-container">
    <div className="page-hero bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-4xl mx-auto text-center py-16 px-4">
        <img 
          src="https://customer-assets.emergentagent.com/job_web-builder-1191/artifacts/2v673ucj_image_70.png"
          alt="Airbnb Service"
          className="page-hero-icon"
        />
        <h1 className="page-title">Five-Star Turnover Services</h1>
        <p className="page-subtitle">For Your Vacation Rental</p>
      </div>
    </div>
    <div className="page-content">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="content-card">
          <h2 className="content-title">Reliable, High-Standard Cleaning for Hosts</h2>
          <p className="content-text">
            As an <strong>Airbnb or vacation rental host</strong>, your reviews depend on cleanliness. We deliver hotel-quality presentation.
          </p>
          <ul className="feature-list">
            <li>Complete sanitization between guests</li>
            <li>Hotel-quality bed making and towel staging</li>
            <li>Restocking of amenities and supplies</li>
            <li>Damage reporting and documentation</li>
            <li>Quick turnarounds for back-to-back bookings</li>
            <li>Consistent quality you can count on</li>
          </ul>
          <div className="cta-section">
            <p className="cta-text">Want more 5-star reviews?</p>
            <Link to="/quote" className="btn-cta">Chat With Us</Link>
          </div>
        </div>
      </div>
    </div>
    <NewFooter />
  </div>
);

// Professional Carpet Cleaning Page
const CarpetCleaningPage = () => (
  <div className="page-container">
    <div className="page-hero bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-4xl mx-auto text-center py-16 px-4">
        <img 
          src="https://customer-assets.emergentagent.com/job_web-builder-1191/artifacts/74r0l4mn_cleaning_carpet1-removebg-preview.png"
          alt="Professional Carpet Cleaning"
          className="page-hero-icon"
        />
        <h1 className="page-title">Deep Carpet Restoration & Care</h1>
        <p className="page-subtitle">Professional Extraction Technology</p>
      </div>
    </div>
    <div className="page-content">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="content-card">
          <h2 className="content-title">Restore Your Carpets to Like-New</h2>
          <p className="content-text">
            Our <strong>professional carpet cleaning</strong> uses powerful extraction technology.
          </p>
          <ul className="feature-list">
            <li>Professional extraction removes stubborn dirt</li>
            <li>Salt & calcium removal for Alberta winter grime</li>
            <li>Allergen reduction – dust, dander, pollen</li>
            <li>Stain treatment and removal</li>
            <li>Eco-friendly cleaning solutions</li>
          </ul>
          <div className="cta-section">
            <p className="cta-text">Ready to restore your carpets?</p>
            <Link to="/quote" className="btn-cta">Get a Quote</Link>
          </div>
        </div>
      </div>
    </div>
    <NewFooter />
  </div>
);

// About Us Page
const AboutPage = () => (
  <div className="page-container">
    <div className="page-hero-about">
      <img 
        src="https://customer-assets.emergentagent.com/job_web-builder-1191/artifacts/af5dcw7d_ChatGPT%20Image%20Apr%204%2C%202026%2C%2003_51_09%20PM.png"
        alt="Cozy Canmore home interior with mountain view"
        className="about-hero-image"
      />
    </div>
    <div className="page-content">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="content-card">
          <h2 className="content-title">A Family Business, Built on Trust</h2>
          <p className="content-text">
            Mi Hogar means "My Home" in Spanish – and that's exactly how we treat every home we clean. We're a <strong>local, family-owned business</strong> based right here in the Bow Valley.
          </p>
          <h3 className="content-subtitle">Our Promise</h3>
          <ul className="feature-list">
            <li>Trustworthy, background-checked team members</li>
            <li>Consistent quality on every visit</li>
            <li>Eco-friendly, non-toxic cleaning products</li>
            <li>Respect for your home and belongings</li>
          </ul>
          <div className="cta-section">
            <p className="cta-text">Ready to experience the Mi Hogar difference?</p>
            <Link to="/quote" className="btn-cta">Get a Quote</Link>
          </div>
        </div>
      </div>
    </div>
    <NewFooter />
  </div>
);

// Local Focus Page
const LocalFocusPage = () => (
  <div className="page-container">
    <div className="page-hero bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-4xl mx-auto text-center py-16 px-4">
        <h1 className="page-title">Cleaning Built for the Bow Valley Lifestyle</h1>
        <p className="page-subtitle">We Know Canmore</p>
      </div>
    </div>
    <div className="page-content">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="content-card">
          <h2 className="content-title">Local Expertise, Mountain Standards</h2>
          <p className="content-text">
            Living in Canmore means dealing with unique cleaning challenges.
          </p>
          <h3 className="content-subtitle">Canmore-Specific Challenges We Handle</h3>
          <ul className="feature-list">
            <li>Winter salt and calcium buildup on floors and carpets</li>
            <li>Mud and dirt from mountain trails</li>
            <li>Pet hair from active, outdoor-loving dogs</li>
            <li>Airbnb turnover during peak ski and summer seasons</li>
            <li>Wood floor care in dry mountain air</li>
            <li>Large windows with mountain views kept sparkling</li>
          </ul>
          <div className="cta-section">
            <p className="cta-text">Let your neighbors take care of your home.</p>
            <Link to="/quote" className="btn-cta">Get a Quote</Link>
          </div>
        </div>
      </div>
    </div>
    <NewFooter />
  </div>
);

// Portfolio Page
const PortfolioPage = () => (
  <div className="page-container">
    <div className="page-hero-about">
      <img 
        src="https://customer-assets.emergentagent.com/job_web-builder-1191/artifacts/7nm1hmlb_IMG_5633.jpeg"
        alt="Professional cleaning services showcase - Kitchen, Bathroom, Bedroom"
        className="about-hero-image"
      />
    </div>
    <div className="page-content">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="content-card">
          <h2 className="content-title">Airbnb & Vacation Rental Results</h2>
          <p className="content-text">
            We take pride in delivering <strong>hotel-quality cleanliness</strong> for vacation rentals throughout the Bow Valley.
          </p>
          <ul className="feature-list">
            <li>Spotless kitchens and bathrooms</li>
            <li>Fresh, crisp bed linens and towel presentation</li>
            <li>Dust-free surfaces and clean floors</li>
            <li>Welcoming atmosphere for arriving guests</li>
          </ul>
          <div className="cta-section">
            <p className="cta-text">Want results like these for your property?</p>
            <Link to="/quote" className="btn-cta">Get a Quote</Link>
          </div>
        </div>
      </div>
    </div>
    <NewFooter />
  </div>
);

// Get a Quote Page
const QuotePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = "14036791671";
    const message = `New Quote Request:\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\nMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="page-container">
      <div className="page-hero bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-4xl mx-auto text-center py-16 px-4">
          <h1 className="page-title">Get a Quote</h1>
          <p className="page-subtitle">Tell Us About Your Cleaning Needs</p>
        </div>
      </div>
      <div className="page-content">
        <div className="max-w-2xl mx-auto px-4 py-12">
          <div className="content-card">
            <form onSubmit={handleSubmit} className="quote-form">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="your@email.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input 
                  type="tel" 
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  placeholder="(403) 555-0000"
                />
              </div>
              <div className="form-group">
                <label htmlFor="service">Service Needed *</label>
                <select 
                  id="service" 
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                >
                  <option value="">Select a service...</option>
                  <option value="regular">Regular Cleaning</option>
                  <option value="deep">Deep Cleaning</option>
                  <option value="sofa">Sofa & Upholstery Cleaning</option>
                  <option value="carpet">Professional Carpet Cleaning</option>
                  <option value="car">Car Interior Detailing</option>
                  <option value="airbnb">Airbnb & Vacation Rental</option>
                  <option value="post-construction">Post-Construction Cleanup</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message"
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Tell us about your space and any specific needs..."
                ></textarea>
              </div>
              <button type="submit" className="btn-submit">
                Send via WhatsApp
              </button>
            </form>
            <div className="contact-alternatives">
              <p>Or contact us directly:</p>
              <div className="contact-methods">
                <a href="tel:4036791671" className="contact-method">
                  <Phone size={20} />
                  <span>403-679-1671</span>
                </a>
                <a href="mailto:info@homecleaningcanmore.ca" className="contact-method">
                  <Mail size={20} />
                  <span>info@homecleaningcanmore.ca</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NewFooter />
    </div>
  );
};

// Main Home Page
const HomePage = () => {
  return (
    <div className="home-page" data-testid="landing-page">
      <HeroSection />
      <ServicesGridSection />
      <AirbnbPortfolioSection />
      <OfficePortfolioSection />
      <SofaPortfolioSection />
      <NewFooter />
    </div>
  );
};

// Layout Component
const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
      <WhatsAppButton />
    </>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Service Pages */}
            <Route path="/services/sofa-upholstery" element={<SofaUpholsteryPage />} />
            <Route path="/services/car-interior" element={<CarInteriorPage />} />
            <Route path="/services/regular-cleaning" element={<RegularCleaningPage />} />
            <Route path="/services/deep-cleaning" element={<DeepCleaningPage />} />
            <Route path="/services/airbnb-vacation" element={<AirbnbPage />} />
            <Route path="/services/carpet-cleaning" element={<CarpetCleaningPage />} />
            <Route path="/services/post-construction" element={<PostConstructionPage />} />
            {/* Other Pages */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/local-focus" element={<LocalFocusPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/quote" element={<QuotePage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
