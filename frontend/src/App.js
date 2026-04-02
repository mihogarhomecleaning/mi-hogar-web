import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Phone, Mail, MapPin, Menu, X } from "lucide-react";
import { useState } from "react";

// Navigation Component
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white py-4 px-6 sticky top-0 z-50 shadow-sm" data-testid="navigation">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="nav-link active" data-testid="nav-home">HOME</a>
          <a href="#services" className="nav-link" data-testid="nav-services">SERVICES</a>
          <a href="#about" className="nav-link" data-testid="nav-about">ABOUT US</a>
        </div>

        {/* Logo */}
        <div className="flex flex-col items-center" data-testid="logo-section">
          <div className="logo-heart relative">
            <svg viewBox="0 0 100 90" className="w-16 h-14">
              <defs>
                <clipPath id="heartClip">
                  <path d="M50,85 C20,55 5,35 5,25 C5,10 20,5 35,5 C45,5 50,15 50,15 C50,15 55,5 65,5 C80,5 95,10 95,25 C95,35 80,55 50,85 Z" />
                </clipPath>
              </defs>
              <path d="M50,85 C20,55 5,35 5,25 C5,10 20,5 35,5 C45,5 50,15 50,15 C50,15 55,5 65,5 C80,5 95,10 95,25 C95,35 80,55 50,85 Z" 
                    fill="none" stroke="#4a4a4a" strokeWidth="3"/>
              <g clipPath="url(#heartClip)">
                <rect x="0" y="0" width="100" height="45" fill="#87CEEB"/>
                <polygon points="20,45 30,28 40,42 50,20 60,42 70,28 80,45" fill="white"/>
                <polygon points="25,45 35,32 45,43 55,25 65,43 75,32 85,45" fill="#2d5a3d"/>
                <polygon points="15,55 25,45 35,55 45,42 55,55 65,45 75,55 85,48 95,55" fill="#1a472a"/>
                <rect x="0" y="55" width="100" height="35" fill="#1a472a"/>
                <rect x="42" y="58" width="16" height="18" fill="#d4a574"/>
                <polygon points="38,58 50,45 62,58" fill="#4a4a4a"/>
              </g>
            </svg>
            {/* Maple Leaf */}
            <svg viewBox="0 0 24 24" className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-4 h-4">
              <path d="M12,2 L13.5,7 L17,6 L15,9 L20,10 L16,13 L18,17 L12,14 L6,17 L8,13 L4,10 L9,9 L7,6 L10.5,7 Z" fill="#c41e3a"/>
            </svg>
          </div>
          <div className="text-center flex items-center gap-1">
            <h1 className="logo-title font-serif italic">Mi hogar</h1>
            <svg viewBox="0 0 30 40" className="w-5 h-6 ml-1">
              <ellipse cx="10" cy="32" rx="8" ry="6" fill="#2d5a3d"/>
              <rect x="8" y="8" width="4" height="24" fill="#2d5a3d"/>
              <circle cx="10" cy="10" r="6" fill="#2d5a3d"/>
              <path d="M10,4 Q16,8 10,14 Q4,8 10,4" fill="#4a7c59"/>
            </svg>
          </div>
          <p className="logo-subtitle">Home Cleaning</p>
        </div>

        {/* Right Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#local" className="nav-link" data-testid="nav-local">LOCAL FOCUS</a>
          <a href="#quote" className="btn-quote" data-testid="nav-quote">GET A QUOTE</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-forest-dark"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          data-testid="mobile-menu-btn"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
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
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80" 
          alt="Modern home interior with mountain view"
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

// Custom Service Icons
const ResidentialIcon = () => (
  <svg viewBox="0 0 80 80" className="w-20 h-20">
    {/* House outline */}
    <path d="M40,12 L70,35 L70,70 L10,70 L10,35 Z" fill="none" stroke="#2d5a3d" strokeWidth="2"/>
    <path d="M40,12 L10,35" fill="none" stroke="#2d5a3d" strokeWidth="2"/>
    <path d="M40,12 L70,35" fill="none" stroke="#2d5a3d" strokeWidth="2"/>
    {/* Roof accent */}
    <polygon points="40,12 70,35 10,35" fill="#f0f7f2"/>
    {/* Bed */}
    <rect x="20" y="45" width="40" height="20" rx="3" fill="none" stroke="#2d5a3d" strokeWidth="2"/>
    <rect x="20" y="45" width="40" height="8" rx="2" fill="#87CEEB"/>
    <ellipse cx="28" cy="50" rx="5" ry="4" fill="white" stroke="#2d5a3d" strokeWidth="1"/>
    <ellipse cx="52" cy="50" rx="5" ry="4" fill="white" stroke="#2d5a3d" strokeWidth="1"/>
    {/* Sparkles */}
    <text x="58" y="25" fill="#2d5a3d" fontSize="10">✦</text>
    <text x="65" y="18" fill="#2d5a3d" fontSize="8">✦</text>
  </svg>
);

const CarpetIcon = () => (
  <svg viewBox="0 0 80 80" className="w-20 h-20">
    {/* Sofa back */}
    <path d="M10,30 Q10,20 20,20 L60,20 Q70,20 70,30 L70,50 L10,50 Z" fill="#6b7280" stroke="#2d5a3d" strokeWidth="2"/>
    {/* Sofa seat */}
    <rect x="8" y="45" width="64" height="18" rx="3" fill="#9ca3af" stroke="#2d5a3d" strokeWidth="2"/>
    {/* Armrests */}
    <rect x="5" y="35" width="12" height="30" rx="4" fill="#6b7280" stroke="#2d5a3d" strokeWidth="2"/>
    <rect x="63" y="35" width="12" height="30" rx="4" fill="#6b7280" stroke="#2d5a3d" strokeWidth="2"/>
    {/* Cushion lines */}
    <line x1="30" y1="25" x2="30" y2="45" stroke="#2d5a3d" strokeWidth="1"/>
    <line x1="50" y1="25" x2="50" y2="45" stroke="#2d5a3d" strokeWidth="1"/>
    {/* Legs */}
    <rect x="15" y="63" width="6" height="8" fill="#2d5a3d"/>
    <rect x="59" y="63" width="6" height="8" fill="#2d5a3d"/>
  </svg>
);

const SpecializedIcon = () => (
  <svg viewBox="0 0 80 80" className="w-20 h-20">
    {/* Hard hat */}
    <ellipse cx="40" cy="50" rx="30" ry="12" fill="#f59e0b" stroke="#2d5a3d" strokeWidth="2"/>
    <path d="M15,50 Q15,25 40,20 Q65,25 65,50" fill="#fbbf24" stroke="#2d5a3d" strokeWidth="2"/>
    <rect x="35" y="45" width="10" height="8" fill="#f59e0b"/>
    {/* Leaf decoration */}
    <ellipse cx="60" cy="35" rx="10" ry="15" fill="#2d5a3d" transform="rotate(30 60 35)"/>
    <ellipse cx="55" cy="28" rx="8" ry="12" fill="#4a7c59" transform="rotate(20 55 28)"/>
    <line x1="60" y1="50" x2="55" y2="25" stroke="#1a472a" strokeWidth="2"/>
  </svg>
);

// Services Section
const ServicesSection = () => {
  const services = [
    {
      icon: <ResidentialIcon />,
      title: "RESIDENTIAL CLEANING",
      links: ["Deep", "Regular", "Move-in"],
      testId: "service-residential"
    },
    {
      icon: <CarpetIcon />,
      title: "CARPET & UPHOLSTERY",
      links: ["Steam Clean", "Car Seat"],
      testId: "service-carpet"
    },
    {
      icon: <SpecializedIcon />,
      title: "SPECIALIZED",
      links: ["Post-construction", "Vacation Rental Cleaning"],
      testId: "service-specialized"
    }
  ];

  return (
    <section id="services" className="services-section" data-testid="services-section">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card" data-testid={service.testId}>
              <div className="service-icon-wrapper">
                {service.icon}
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
      </div>
    </section>
  );
};

// Contact Footer Section
const ContactFooter = () => {
  return (
    <footer id="local" className="contact-footer" data-testid="contact-footer">
      <div className="footer-wave">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,50 Q360,0 720,50 T1440,50 L1440,100 L0,100 Z" fill="#f5f5f0"/>
        </svg>
      </div>
      
      <div className="footer-content">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            
            {/* Map Section */}
            <div className="map-section" data-testid="map-section">
              <div className="map-container">
                <div className="map-placeholder">
                  <svg viewBox="0 0 300 150" className="w-full h-full">
                    {/* Map background */}
                    <rect width="300" height="150" fill="#e8f4e8"/>
                    {/* Roads */}
                    <path d="M0,75 Q75,60 150,80 T300,70" stroke="#f5f5f0" strokeWidth="8" fill="none"/>
                    <path d="M50,0 Q60,75 40,150" stroke="#f5f5f0" strokeWidth="6" fill="none"/>
                    <path d="M200,0 Q180,50 220,100 T180,150" stroke="#f5f5f0" strokeWidth="5" fill="none"/>
                    {/* Town area */}
                    <ellipse cx="100" cy="80" rx="40" ry="30" fill="#d4e8d4"/>
                    {/* Water */}
                    <path d="M220,100 Q260,90 300,110 L300,150 L200,150 Q210,120 220,100" fill="#a8d4e8"/>
                    {/* Location marker */}
                    <circle cx="100" cy="75" r="8" fill="#2d5a3d"/>
                    <circle cx="100" cy="75" r="4" fill="white"/>
                  </svg>
                </div>
                <div className="map-pin">
                  <MapPin className="w-5 h-5 text-forest-primary" />
                  <span className="map-label">Canmore</span>
                </div>
              </div>
            </div>

            {/* Center Logo */}
            <div className="footer-logo" data-testid="footer-logo">
              <div className="maple-leaf">
                <svg viewBox="0 0 50 60" className="w-12 h-14">
                  <path d="M25,5 L28,15 L35,12 L32,20 L42,22 L35,28 L45,35 L35,35 L38,45 L25,40 L12,45 L15,35 L5,35 L15,28 L8,22 L18,20 L15,12 L22,15 Z" 
                        fill="#c41e3a"/>
                </svg>
              </div>
              <div className="footer-icon-group">
                <div className="cleaning-bottle">
                  <svg viewBox="0 0 40 80" className="w-8 h-16">
                    <rect x="12" y="10" width="16" height="8" fill="#2d5a3d" rx="2"/>
                    <rect x="8" y="18" width="24" height="50" fill="#2d5a3d" rx="4"/>
                    <circle cx="20" cy="35" r="3" fill="white"/>
                    <rect x="18" y="38" width="4" height="15" fill="white"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="contact-info" data-testid="contact-info">
              <div className="contact-item">
                <Phone className="w-5 h-5 text-forest-primary" />
                <span>+234-556-8890</span>
              </div>
              <div className="contact-item">
                <Mail className="w-5 h-5 text-forest-primary" />
                <span>mi-hogar@gmail.com</span>
              </div>
              <div className="bilingual-text">
                Proudly bilingual / Orgullosamente bilingüe.
              </div>
              <div className="flags">
                <span className="flag-spain">🇪🇸</span>
                <span className="flag-canada">🇨🇦</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
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
