import { useState, useEffect } from "react";
import { profile } from "../data/profile";
import styles from "./Navbar.module.css";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <a href="#home" className={styles.logo}>
        <span className={styles.logoAccent}>F</span>arhan
      </a>

      <ul className={`${styles.links} ${menuOpen ? styles.open : ""}`}>
        {navLinks.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className={active === l.href.slice(1) ? styles.activeLink : ""}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <button
        className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ""}`}
        onClick={() => setMenuOpen((v) => !v)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>
    </nav>
  );
}
