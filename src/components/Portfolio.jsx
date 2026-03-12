import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import { useScrollReveal } from "../hooks/useScrollReveal";
import styles from "./Portfolio.module.css";

export default function Portfolio() {
  const [ref, visible] = useScrollReveal();

  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className={styles.inner}>
        <div ref={ref} className={`${styles.header} ${visible ? styles.visible : ""}`}>
          <span className={styles.sectionTag}>Portfolio</span>
          <h2 className={styles.heading}>
            My <em>Projects</em>
          </h2>
          <p className={styles.sub}>
            Here are some of the projects I have built.
          </p>
        </div>

        <div className={`${styles.grid} ${visible ? styles.gridVisible : ""}`}>
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
