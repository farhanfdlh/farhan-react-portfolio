import { profile } from "../data/profile";
import { useScrollReveal } from "../hooks/useScrollReveal";
import styles from "./About.module.css";

export default function About() {
  const [ref, visible] = useScrollReveal();

  return (
    <section id="about" className={styles.about}>
      <div ref={ref} className={`${styles.inner} ${visible ? styles.visible : ""}`}>
        <div className={styles.labelRow}>
          <span className={styles.sectionTag}>About Me</span>
        </div>

        <div className={styles.grid}>
          {/* Left */}
          <div className={styles.left}>
            <h2 className={styles.heading}>
              From raw data<br />
              <em>to real insight.</em>
            </h2>
            <p className={styles.bio}>{profile.bio}</p>

            <div className={styles.statsRow}>
              <div className={styles.stat}>
                <span className={styles.statNum}>4</span>
                <span className={styles.statLabel}>Projects Completed</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statNum}>6+</span>
                <span className={styles.statLabel}>Data Tools Used</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statNum}>10</span>
                <span className={styles.statLabel}> Github Repositories</span>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className={styles.right}>
            <div className={styles.infoCard}>
              <div className={styles.infoRow}>
                <span className={styles.infoIcon}>🎓</span>
                <div>
                  <span className={styles.infoTitle}>UIN Syarif Hidayatullah Jakarta</span>
                  <span className={styles.infoSub}>Information Systems Graduate</span>
                </div>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.infoIcon}>📍</span>
                <div>
                  <span className={styles.infoTitle}>Jakarta, Indonesia</span>
                  <span className={styles.infoSub}>Open to work</span>
                </div>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.infoIcon}>💡</span>
                <div>
                  <span className={styles.infoTitle}>Interests</span>
                  <span className={styles.infoSub}>Data Science · Data Analysis · Machine Learning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
