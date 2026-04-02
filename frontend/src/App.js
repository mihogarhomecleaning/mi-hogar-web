import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Phone, Mail, MapPin, Menu, X } from "lucide-react";
import { useState } from "react";

// Navigation Component
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white py-2 px-6 sticky top-0 z-50 shadow-sm" data-testid="navigation">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center">
          {/* Left Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="nav-link active" data-testid="nav-home">HOME</a>
            <a href="#services" className="nav-link" data-testid="nav-services">SERVICES</a>
            <a href="#about" className="nav-link" data-testid="nav-about">ABOUT US</a>
          </div>

          {/* Center Logo */}
          <div className="flex items-center justify-center mx-8 md:mx-16" data-testid="logo-section">
            <img 
              src="https://customer-assets.emergentagent.com/job_web-builder-1191/artifacts/y0mq50rq_logo_sin_fondo-1-removebg-preview.png"
              alt="Mi Hogar Home Cleaning"
              className="logo-image"
            />
          </div>

          {/* Right Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#local" className="nav-link" data-testid="nav-local">LOCAL FOCUS</a>
            <a href="#quote" className="btn-quote" data-testid="nav-quote">GET A QUOTE</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden absolute right-6 text-forest-dark"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="mobile-menu-btn"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t mt-4 py-4" data-testid="mobile-menu">
          <div className="flex flex-col items-center space-y-4">
            <a href="#home" className="nav-link active">HOME</a>
            <a href="#services" className="nav-link">SERVICES</a>
            <a href="#about" className="nav-link">ABOUT US</a>
            <a href="#local" className="nav-link">LOCAL FOCUS</a>
            <a href="#quote" className="btn-quote">GET A QUOTE</a>
          </div>
        </div>
      )}
    </nav>
  );
};

// Hero Section
const HeroSection = () => {
  return (
    <section id="home" className="hero-section" data-testid="hero-section">
      <div className="hero-image-container">
        <img 
          src="https://customer-assets.emergentagent.com/job_web-builder-1191/artifacts/37i3bn3l_FONDO.jpg" 
          alt="Modern home interior with Three Sisters mountain view"
          className="hero-image"
        />
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content">
        <h2 className="hero-title" data-testid="hero-title">
          TRUSTWORTHY HOME CARE,
          <br />
          <span className="text-forest-dark">BOW VALLEY LOCAL</span>
        </h2>
        <p className="hero-subtitle" data-testid="hero-subtitle">
          WE CLEAN YOUR HOME LIKE OUR OWN
        </p>
      </div>
    </section>
  );
};

// Services Section
const ServicesSection = () => {
  const topServices = [
    {
      image: "https://customer-assets.emergentagent.com/job_web-builder-1191/artifacts/15e4oh01_residential1.png",
      title: "RESIDENTIAL CLEANING",
      links: ["Deep", "Regular", "Move-in"],
      testId: "service-residential"
    },
    {
      image: "https://customer-assets.emergentagent.com/job_web-builder-1191/artifacts/v0wpxzqm_SOFA1.png",
      title: "CARPET & UPHOLSTERY",
      links: ["Steam Clean", "Carpet"],
      testId: "service-carpet"
    },
    {
      image: "https://customer-assets.emergentagent.com/job_web-builder-1191/artifacts/rbs7d979_UTENSILIOS1.png",
      title: "SPECIALIZED",
      links: ["Detailed", "Sanitize"],
      testId: "service-specialized"
    }
  ];

  const bottomServices = [
    {
      image: "https://customer-assets.emergentagent.com/job_web-builder-1191/artifacts/74r0l4mn_cleaning_carpet1-removebg-preview.png",
      title: "PROFESSIONAL CARPET",
      links: ["Steam Extraction", "Deep Clean"],
      testId: "service-pro-carpet"
    },
    {
      image: "https://customer-assets.emergentagent.com/job_web-builder-1191/artifacts/f0bam41y_MAT_CLEANING1.png",
      title: "MAT CLEANING",
      links: ["Car Interior", "Trunk Mats", "Floor Mats"],
      testId: "service-mat"
    }
  ];

  return (
    <section id="services" className="services-section" data-testid="services-section">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top row - 3 services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {topServices.map((service, index) => (
            <div key={index} className="service-card" data-testid={service.testId}>
              <div className="service-icon-wrapper">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="service-image"
                />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <div className="service-links">
                {service.links.map((link, i) => (
                  <span key={i}>
                    <a href={`#${link.toLowerCase().replace(/\s/g, '-')}`} className="service-link">
                      {link}
                    </a>
                    {i < service.links.length - 1 && " / "}
                  </span>
                ))}
                {index === 0 && " >"}
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom row - 2 services centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {bottomServices.map((service, index) => (
            <div key={index} className="service-card" data-testid={service.testId}>
              <div className="service-icon-wrapper">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="service-image"
                />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <div className="service-links">
                {service.links.map((link, i) => (
                  <span key={i}>
                    <a href={`#${link.toLowerCase().replace(/\s/g, '-')}`} className="service-link">
                      {link}
                    </a>
                    {i < service.links.length - 1 && " / "}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Footer Section
const ContactFooter = () => {
  return (
    <footer id="local" className="contact-footer-new" data-testid="contact-footer">
      <div className="footer-image-container">
        <img 
          src="https://customer-assets.emergentagent.com/job_web-builder-1191/artifacts/m4dgynsv_1.jpg"
          alt="Canmore location with contact info"
          className="footer-full-image"
        />
      </div>
    </footer>
  );
};

// WhatsApp Floating Button
const WhatsAppButton = () => {
  const phoneNumber = "14036791671"; // Canada phone number
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

// Main Landing Page
const LandingPage = () => {
  return (
    <div className="landing-page" data-testid="landing-page">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <ContactFooter />
      <WhatsAppButton />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
