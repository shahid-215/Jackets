"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronDown,
  Instagram,
  X,
  Youtube,
} from "lucide-react";

const products = [
  { name: "Badge Hoodie", price: "$87.95" },
  { name: "Moon Beanie", price: "$23.05" },
  { name: "Inverted Tape Tee", price: "$43.95" },
  { name: "Tape Tee", price: "$39.95" },
];

const reveal = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function Home() {
  const [dark, setDark] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <main className="site-shell">

      {/* NAVBAR */}
      <header className="navbar">
        <a href="#" className="brand-mark" aria-label="InfinityFX">
          <span className="brand-symbol">
            <span />
            <span />
          </span>
        </a>

        <nav className={`nav-links ${menu ? "nav-open" : ""}`}>
          <a href="#home">Home</a>

          <a href="#products" className="nav-dropdown">
            Collections
            <ChevronDown size={10} strokeWidth={2.5} />
          </a>

          <a href="#about" className="nav-dropdown">
            About
            <ChevronDown size={10} strokeWidth={2.5} />
          </a>
        </nav>

        <div className="nav-right">
          <a href="#contact" className="signin">
            Sign in
          </a>

          <button
            className="theme-button"
            onClick={() => setDark(!dark)}
            aria-label="Toggle theme"
          >
            <span className={dark ? "sun-icon" : "moon-icon"}>
              {dark ? "☼" : "✦"}
            </span>
          </button>

          <button
            className="mobile-menu"
            onClick={() => setMenu(!menu)}
            aria-label="Open menu"
          >
            {menu ? <X size={15} /> : "☰"}
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="hero" id="home">
        <motion.div
          className="hero-card"
          initial="hidden"
          animate="visible"
          variants={reveal}
        >
          <div className="hero-copy">
            <p>Sustainable clothing.</p>
            <p>Limitless design.</p>
          </div>

          <div className="hero-image">
            {/* PRODUCT IMAGE PLACEHOLDER */}
          </div>
        </motion.div>

        <motion.a
          href="#products"
          className="hero-arrow"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <ArrowUpRight size={19} strokeWidth={1.7} />
        </motion.a>
      </section>

      {/* NEW ARRIVALS */}
      <section className="arrivals-wrap">
        <div className="arrivals-track">
          <div className="arrivals-content">
            <span>New Arrivals</span>
            <span>New Arrivals</span>
            <span>New Arrivals</span>
            <span>New Arrivals</span>
            <span>New Arrivals</span>
            <span>New Arrivals</span>
          </div>

          <div className="arrivals-content" aria-hidden="true">
            <span>New Arrivals</span>
            <span>New Arrivals</span>
            <span>New Arrivals</span>
            <span>New Arrivals</span>
            <span>New Arrivals</span>
            <span>New Arrivals</span>
          </div>
        </div>

        <a href="#products" className="green-arrow">
          <ArrowUpRight size={19} strokeWidth={1.7} />
        </a>
      </section>

      {/* PRODUCTS */}
      <motion.section
        className="products-section"
        id="products"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={stagger}
      >
        <div className="section-heading">
          <motion.h2 variants={reveal}>Featured products</motion.h2>
        </div>

        <div className="products-grid">
          {products.map((product, index) => (
            <motion.article
              className="product-card"
              key={product.name}
              variants={reveal}
            >
              <div className="product-image">
                {/* PRODUCT IMAGE {index + 1} */}
              </div>

              <div className="product-info">
                <div>
                  <span className="product-label">New</span>
                  <h3>{product.name}</h3>
                </div>

                <span className="product-price">{product.price}</span>
              </div>

              <button className="product-arrow" aria-label={product.name}>
                <ArrowUpRight size={17} strokeWidth={1.7} />
              </button>
            </motion.article>
          ))}
        </div>

        <div className="slider-controls">
          <button aria-label="Previous">←</button>
          <button aria-label="Next">→</button>
        </div>
      </motion.section>

      {/* ABOUT */}
      <motion.section
        className="about-section"
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={stagger}
      >
        <motion.div className="about-spacer" variants={reveal} />

        <motion.div className="about-content" variants={reveal}>
          <p>
            We are a sustainable fashion brand from the Netherlands,
            making premium apparel our way.
          </p>

          <p>
            We blend our love for design with sustainable use and
            ethical production.
          </p>

          <a href="#footer" className="text-link">
            About us ↗
          </a>
        </motion.div>
      </motion.section>

      {/* BIG STATEMENT */}
      <motion.section
        className="statement-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1.2 }}
      >
        <div className="statement-small">production.</div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          Limitless in nature,
          <br />
          driven to explore™
        </motion.h2>

        <a href="#about" className="statement-link">
          About us ↗
        </a>
      </motion.section>

      {/* FOOTER */}
      <footer className="footer" id="footer">
        <div className="footer-top">

          <div className="footer-brand">
            <div className="footer-logo-row">
              <span className="brand-symbol">
                <span />
                <span />
              </span>

              <strong>infinityfx.dev</strong>
            </div>

            <div className="socials">
              <a href="#" aria-label="Instagram">
                <Instagram size={14} />
              </a>

              <a href="#" aria-label="X">
                <X size={14} />
              </a>

              <a href="#" aria-label="Youtube">
                <Youtube size={14} />
              </a>
            </div>

            <div className="currency">
              <span>USD</span>
              <span>⌄</span>
            </div>
          </div>

          <div className="footer-column">
            <h4>About</h4>
            <a href="#">InfinityFX, Ltd.</a>
            <a href="#">Zuid-Holland, 2266 KV</a>
            <a href="#">The Netherlands</a>
          </div>

          <div className="footer-column">
            <h4>Links</h4>
            <a href="#">FAQ ↗</a>
            <a href="#">Sustainability ↗</a>
            <a href="#">Shipping ↗</a>
            <a href="#">Cookie policy ↗</a>
          </div>

          <div className="footer-column">
            <h4>Contact</h4>
            <a href="mailto:support@infinity-fx.com">
              support@infinity-fx.com
            </a>
            <a href="mailto:sales@infinity-fx.com">
              sales@infinity-fx.com
            </a>
          </div>

        </div>

        <div className="footer-bottom">
          <div>
            Terms&nbsp;&nbsp;&nbsp;&nbsp; Privacy policy&nbsp;&nbsp;&nbsp;&nbsp; Return policy
          </div>

          <div>
            ©Copyright 2016–2026 InfinityFX. All rights reserved.
            infinityFX® is a registered trademark.
          </div>
        </div>
      </footer>

    </main>
  );
}