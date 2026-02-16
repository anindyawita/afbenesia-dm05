import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import "../styles/landing.css";
import heroImage from "../assets/hero.png";

const LandingPage: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const statsRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const animateCounter = (
    element: HTMLElement,
    target: number,
    suffix: string = "",
  ) => {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        element.textContent = target + suffix;
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(current) + suffix;
      }
    }, 30);
  };

  useEffect(() => {
    // Scroll to top on initial load and clear any hash
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
    // Force scroll to top with multiple methods for compatibility
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    } as ScrollToOptions);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0; // For Safari
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector(".hero-section");
      if (heroSection) {
        const heroRect = heroSection.getBoundingClientRect();
        setIsScrolled(heroRect.bottom <= 100);
      }

      // Stats counter animation
      if (statsRef.current && !hasAnimated) {
        const statsRect = statsRef.current.getBoundingClientRect();
        if (statsRect.top < window.innerHeight * 0.8) {
          setHasAnimated(true);
          const statNumbers = statsRef.current.querySelectorAll(".stat-number");
          animateCounter(statNumbers[0] as HTMLElement, 15, "+");
          animateCounter(statNumbers[1] as HTMLElement, 1.5, "K+");
          animateCounter(statNumbers[2] as HTMLElement, 3, "+");
        }
      }

      // Scroll spy - detect active section
      const sections = [
        { id: "home", selector: ".hero-section" },
        { id: "about", selector: "#about" },
        { id: "event", selector: "#event" },
        { id: "testimonial", selector: "#testimonial" },
        { id: "contact", selector: "#contact" },
      ];

      // Check if we're at the bottom of the page
      const isBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;

      if (isBottom) {
        setActiveSection("contact");
      } else {
        const scrollPosition = window.scrollY + 150;

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = document.querySelector(sections[i].selector);
          if (section) {
            const sectionTop = (section as HTMLElement).offsetTop;
            if (scrollPosition >= sectionTop) {
              setActiveSection(sections[i].id);
              break;
            }
          }
        }
      }
    };

    // Intersection Observer untuk animasi scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe semua section
    const sections = document.querySelectorAll(
      ".stats-container, .about-section, .mentors-section, .timeline-section",
    );
    sections.forEach((section) => observer.observe(section));

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [hasAnimated]);

  // Gooey Button Effect
  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const moveBg = (e: PointerEvent) => {
      const rect = button.getBoundingClientRect();
      button.style.setProperty(
        "--x",
        String(((e.clientX - rect.x) / rect.width) * 100),
      );
      button.style.setProperty(
        "--y",
        String(((e.clientY - rect.y) / rect.height) * 100),
      );
    };

    const intro = () => {
      let i = 4;
      button.style.setProperty("--a", "100%");
      const x = setInterval(() => {
        button.style.setProperty(
          "--x",
          String(((Math.cos(i) + 2) / 3.6) * 100),
        );
        button.style.setProperty(
          "--y",
          String(((Math.sin(i) + 2) / 3.6) * 100),
        );
        i += 0.03;
        if (i > 11.5) {
          clearInterval(x);
          button.style.setProperty("--a", "");
        }
      }, 16);
      return x;
    };

    const intervalId = intro();

    const handlePointerOver = (e: Event) => {
      clearInterval(intervalId);
      (e.target as HTMLElement).style.setProperty("--a", "");
    };

    button.addEventListener("pointermove", moveBg as EventListener);
    button.addEventListener("pointerover", handlePointerOver);

    return () => {
      button.removeEventListener("pointermove", moveBg as EventListener);
      button.removeEventListener("pointerover", handlePointerOver);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="landing-page">
      {/* SVG Filter for Gooey Effect */}
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          <button
            className="hamburger-btn"
            onClick={() => setIsDrawerOpen(true)}
            aria-label="Open menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className="nav-links">
            <a
              href="#home"
              className={`nav-link ${activeSection === "home" ? "active" : ""}`}
            >
              Home
            </a>
            <a
              href="#about"
              className={`nav-link ${activeSection === "about" ? "active" : ""}`}
            >
              About
            </a>
            <a
              href="#event"
              className={`nav-link ${activeSection === "event" ? "active" : ""}`}
            >
              Event
            </a>
            <a
              href="#testimonial"
              className={`nav-link ${activeSection === "testimonial" ? "active" : ""}`}
            >
              Testimonial
            </a>
            <a
              href="#contact"
              className={`nav-link ${activeSection === "contact" ? "active" : ""}`}
            >
              Contact Us
            </a>
          </div>
          <Link to="/login" className="sign-in-btn">
            SIGN IN
          </Link>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {isDrawerOpen && (
        <>
          <div
            className="drawer-overlay"
            onClick={() => setIsDrawerOpen(false)}
          />
          <div className="drawer">
            <button
              className="drawer-close"
              onClick={() => setIsDrawerOpen(false)}
              aria-label="Close menu"
            >
              <Icon icon="mdi:close" />
            </button>
            <div className="drawer-links">
              <a
                href="#home"
                className={`drawer-link ${activeSection === "home" ? "active" : ""}`}
                onClick={() => setIsDrawerOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className={`drawer-link ${activeSection === "about" ? "active" : ""}`}
                onClick={() => setIsDrawerOpen(false)}
              >
                About
              </a>
              <a
                href="#event"
                className={`drawer-link ${activeSection === "event" ? "active" : ""}`}
                onClick={() => setIsDrawerOpen(false)}
              >
                Event
              </a>
              <a
                href="#testimonial"
                className={`drawer-link ${activeSection === "testimonial" ? "active" : ""}`}
                onClick={() => setIsDrawerOpen(false)}
              >
                Testimonial
              </a>
              <a
                href="#contact"
                className={`drawer-link ${activeSection === "contact" ? "active" : ""}`}
                onClick={() => setIsDrawerOpen(false)}
              >
                Contact Us
              </a>
              <Link
                to="/login"
                className="drawer-sign-in-btn"
                onClick={() => setIsDrawerOpen(false)}
              >
                SIGN IN
              </Link>
            </div>
          </div>
        </>
      )}

      {/* Hero Section */}
      <section className="hero-section" id="home">
        <div className="hero-container">
          <div className="hero-content">
            <p className="hero-subtitle">Now Open</p>
            <h1 className="hero-title">
              Kelas Kilat Digital
              <br />
              Marketing Batch 5
            </h1>
            <button ref={buttonRef} className="gooey-button">
              Book Now
            </button>
          </div>
          <div className="hero-image">
            <div className="hero-orbit-large">
              <div className="orbit-dot">
                <Icon icon="mdi:trending-up" className="orbit-icon" />
              </div>
            </div>
            <div className="hero-orbit-small">
              <div className="orbit-dot">
                <Icon icon="mdi:currency-usd" className="orbit-icon" />
              </div>
            </div>
            <img
              src={heroImage}
              alt="Professional businessman"
              className="hero-person"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="stats-container" ref={statsRef}>
        <div className="stat-item">
          <h3 className="stat-number">0+</h3>
          <p>Perusahaan & UMKM Terdampak</p>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <h3 className="stat-number">0K+</h3>
          <p>Perusahaan & UMKM Terdampak</p>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <h3 className="stat-number">0+</h3>
          <p>Perusahaan & UMKM Terdampak</p>
        </div>
      </div>

      {/* About Section */}
      <section className="about-section" id="about">
        <h2 className="section-title">
          About the <span className="highlight">Event</span>
        </h2>
        <p className="about-description">
          Kelas Kilat Digital Marketing - Batch 05 adalah pelatihan intensif
          yang
          <br />
          diselenggarakan oleh <span className="bold">AFBENESIA</span> dengan
          materi digital marketing yang disusun
          <br />
          untuk pemula maupun non-latar belakang digital.
        </p>

        <div className="features-container ag-courses_box">
          <div className="feature-card ag-courses_item">
            <div className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>
              <div className="ag-courses-item_title">Practical Skills</div>
              <div className="ag-courses-item_date-box">
                Dapatkan keterampilan{" "}
                <span className="ag-courses-item_date">praktis</span> yang
                langsung bisa diterapkan dalam dunia kerja dan bisnis digital.
              </div>
            </div>
          </div>

          <div className="feature-card ag-courses_item">
            <div className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>
              <div className="ag-courses-item_title">Expert Mentors</div>
              <div className="ag-courses-item_date-box">
                Belajar langsung dari{" "}
                <span className="ag-courses-item_date">
                  mentor berpengalaman
                </span>{" "}
                yang ahli di bidang digital marketing.
              </div>
            </div>
          </div>

          <div className="feature-card ag-courses_item">
            <div className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>
              <div className="ag-courses-item_title">Career Growth</div>
              <div className="ag-courses-item_date-box">
                Bangun network dan{" "}
                <span className="ag-courses-item_date">tingkatkan karir</span>{" "}
                Anda di industri digital marketing yang terus berkembang.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mentors Section */}
      <section className="mentors-section">
        <h2 className="section-title">
          Meet the <span className="highlight">Mentors</span>
        </h2>

        <div className="mentors-container">
          <div className="mentor-card">
            <img
              src={new URL("../assets/dennysantoso.png", import.meta.url).href}
              alt="Denny Santoso"
              className="mentor-image"
            />
            <section>
              <h2>Denny Santoso</h2>
              <p>
                Founder Greatmind Indonesia, pakar digital marketing dengan
                pengalaman 15+ tahun di branding dan business development.
              </p>
            </section>
          </div>

          <div className="mentor-card">
            <img
              src={new URL("../assets/feliciaputri.jpeg", import.meta.url).href}
              alt="Felicia Putri"
              className="mentor-image"
            />
            <section>
              <h2>Felicia Putri</h2>
              <p>
                Beauty & lifestyle content creator profesional, expert dalam
                influencer marketing dan brand collaboration strategies.
              </p>
            </section>
          </div>

          <div className="mentor-card">
            <img
              src={new URL("../assets/raymondchin.jpg", import.meta.url).href}
              alt="Raymond Chin"
              className="mentor-image"
            />
            <section>
              <h2>Raymond Chin</h2>
              <p>
                Founder & CEO Ternak Uang, business strategist dan digital
                marketing expert dengan fokus di financial education.
              </p>
            </section>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section" id="event">
        <h2 className="section-title">
          Our <span className="highlight">Timeline</span>
        </h2>

        <div className="timeline">
          <div className="timeline__event">
            <div className="timeline__event__icon">
              <Icon icon="mdi:book-open-page-variant" />
            </div>
            <div className="timeline__event__date">16 Oktober 2025</div>
            <div className="timeline__event__content">
              <div className="timeline__event__title">Pre Event</div>
              <div className="timeline__event__description">
                <p>Fundamental & Orientation - Senin</p>
              </div>
            </div>
          </div>

          <div className="timeline__event timeline__event--type2">
            <div className="timeline__event__icon">
              <Icon icon="mdi:laptop" />
            </div>
            <div className="timeline__event__date">18 Oktober 2025</div>
            <div className="timeline__event__content">
              <div className="timeline__event__title">Main Event</div>
              <div className="timeline__event__description">
                <p>Digital Marketing Session - Rabu</p>
              </div>
            </div>
          </div>

          <div className="timeline__event timeline__event--type3">
            <div className="timeline__event__icon">
              <Icon icon="mdi:presentation" />
            </div>
            <div className="timeline__event__date">20 Oktober 2025</div>
            <div className="timeline__event__content">
              <div className="timeline__event__title">Final Project</div>
              <div className="timeline__event__description">
                <p>Final Project & Presentation - Minggu</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section" id="testimonial">
        <h2 className="section-title-white">
          What People <span className="highlight-yellow">Said</span>
        </h2>

        <div className="testimonials-wrapper">
          <div className="testimonials-container">
            <div className="testimonial-card">
              <p className="testimonial-text">
                "Pengalaman yang luar biasa! Strategi digital marketing yang
                diajarkan di sini benar-benar membantu bisnis saya berkembang
                pesat."
              </p>
              <p className="testimonial-name">- Siti Nurhaliza</p>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">
                "Investasi terbaik tahun ini. Mentornya sangat berpengalaman dan
                supportif banget sepanjang program."
              </p>
              <p className="testimonial-name">- Budi Santoso</p>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">
                "Saya belajar skill praktis yang langsung bisa diterapkan ke
                campaign saya. Highly recommended!"
              </p>
              <p className="testimonial-name">- Dewi Lestari</p>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">
                "Pendekatan hands-on dan studi kasus nyata bikin semua jadi
                lebih mudah dipahami. Terima kasih banyak!"
              </p>
              <p className="testimonial-name">- Andi Wijaya</p>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">
                "Dari nol sampai jago digital marketing! Kurikulumnya
                terstruktur dengan baik dan mudah diikuti."
              </p>
              <p className="testimonial-name">- Rina Susanti</p>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">
                "Melebihi ekspektasi saya. Networking opportunities-nya aja udah
                worth it, plus ilmu yang didapat sangat berharga."
              </p>
              <p className="testimonial-name">- Agus Prasetyo</p>
            </div>
            {/* Duplicate for seamless loop */}
            <div className="testimonial-card">
              <p className="testimonial-text">
                "Pengalaman yang luar biasa! Strategi digital marketing yang
                diajarkan di sini benar-benar membantu bisnis saya berkembang
                pesat."
              </p>
              <p className="testimonial-name">- Siti Nurhaliza</p>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">
                "Investasi terbaik tahun ini. Mentornya sangat berpengalaman dan
                supportif banget sepanjang program."
              </p>
              <p className="testimonial-name">- Budi Santoso</p>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">
                "Saya belajar skill praktis yang langsung bisa diterapkan ke
                campaign saya. Highly recommended!"
              </p>
              <p className="testimonial-name">- Dewi Lestari</p>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">
                "Pendekatan hands-on dan studi kasus nyata bikin semua jadi
                lebih mudah dipahami. Terima kasih banyak!"
              </p>
              <p className="testimonial-name">- Andi Wijaya</p>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">
                "Dari nol sampai jago digital marketing! Kurikulumnya
                terstruktur dengan baik dan mudah diikuti."
              </p>
              <p className="testimonial-name">- Rina Susanti</p>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">
                "Melebihi ekspektasi saya. Networking opportunities-nya aja udah
                worth it, plus ilmu yang didapat sangat berharga."
              </p>
              <p className="testimonial-name">- Agus Prasetyo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" id="contact">
        <div className="footer-content">
          <div className="footer-column">
            <h3>AFBENESIA</h3>
            <p>
              Humanized AI for Everlasting Business Growth. Mitra terpercaya
              Anda untuk transformasi digital dan pertumbuhan bisnis yang
              berkelanjutan.
            </p>
            <div className="footer-social">
              <a
                href="https://www.instagram.com/afbenesia/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Icon icon="mdi:instagram" width="20" />
              </a>
              <a
                href="https://www.linkedin.com/company/afbenesia/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Icon icon="mdi:linkedin" width="20" />
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#features">Programs</a>
              </li>
              <li>
                <a href="#testimonial">Testimonials</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Programs</h3>
            <ul>
              <li>
                <a href="#">Social Media Marketing</a>
              </li>
              <li>
                <a href="#">SEO Optimization</a>
              </li>
              <li>
                <a href="#">Content Strategy</a>
              </li>
              <li>
                <a href="#">Email Marketing</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Contact</h3>
            <ul>
              <li>Email: info@kelaskilat.com</li>
              <li>Phone: +62 812 3456 7890</li>
              <li>Jombang, Indonesia</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Kelas Kilat Digital Marketing. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
