import styles from "./ProjectCard.module.css";

const stackColors = {
  Pandas: "orange", Tableau: "blue", JavaScript: "yellow",
  "Scikit-learn": "purple", Matplotlib: "cyan", Python: "yellow",
  Seaborn: "cyan", Excel: "green", TensorFlow: "orange", Streamlit: "red",
};

export default function ProjectCard({ project, index }) {
  const { title, category, year, description, image, stack, github, demo, featured } = project;

  return (
    <article
      className={styles.card}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {featured && <span className={styles.badgeFeatured}>★ Featured</span>}

      <div className={styles.thumb}>
        <img src={image} alt={title} loading="lazy" />
        <span className={styles.category}>{category}</span>
      </div>

      <div className={styles.body}>
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          <span className={styles.year}>{year}</span>
        </div>

        <p className={styles.desc}>{description}</p>

        <div className={styles.divider} />

        <p className={styles.stackLabel}>Tech Stack</p>
        <div className={styles.stack}>
          {stack.map((tech) => (
            <span
              key={tech}
              className={`${styles.tag} ${styles[stackColors[tech] || "default"]}`}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className={styles.actions}>
          {demo && (
            <a href={demo} target="_blank" rel="noopener noreferrer" className={styles.btnDemo}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
              Live Demo
            </a>
          )}
          <a href={github} target="_blank" rel="noopener noreferrer" className={styles.btnGithub}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013-.4c1.02.005 2.04.14 3 .4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}
