import { profile } from "../data/profile";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      {/* Background grid */}
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.inner}>
        {/* Left: Text */}
        <div className={styles.text}>
          <div className={styles.pill}>
            <span className={styles.dot} />
            Available for opportunities
          </div>

          <h1 className={styles.name}>
            {profile.name.split(" ").map((word, i) => (
              <span key={i} className={styles.nameWord} style={{ animationDelay: `${0.1 + i * 0.08}s` }}>
                {word}{" "}
              </span>
            ))}
          </h1>

          <p className={styles.role}>
            <span className={styles.roleAccent}>&lt;</span>
            {profile.role}
            <span className={styles.roleAccent}> /&gt;</span>
          </p>

          <p className={styles.tagline}>
            {profile.tagline}
          </p>

          <div className={styles.ctas}>
            <a href="#portfolio" className={styles.btnPrimary}>View My Work</a>
            <a href="#contact" className={styles.btnGhost}>Get In Touch</a>
          </div>
        </div>

        {/* Right: Avatar */}
        <div className={styles.avatarWrap}>
          <div className={styles.avatarRing} />
          <img
            src={profile.avatar}
            alt={profile.name}
            className={styles.avatar}
          />
          <div className={styles.avatarBadge}>
            <span>Data</span>
            <span className={styles.badgeSub}>Enthusiast</span>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <a href="#about" className={styles.scrollHint} aria-label="Scroll down">
        <span className={styles.scrollLine} />
      </a>
    </section>
  );
}
