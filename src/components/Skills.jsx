import { useScrollReveal } from "../hooks/useScrollReveal";
import styles from "./Skills.module.css";

const skills = [
  // Languages & Query
  {
    name: "Python",
    category: "Language",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    color: "#3b82f6",
  },
  {
    name: "SQL",
    category: "Language",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    color: "#00618A",
  },

  // Data & ML Libraries
  {
    name: "Pandas",
    category: "Library",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
    color: "#a78bfa",
  },
  {
    name: "NumPy",
    category: "Library",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
    color: "#60a5fa",
  },
  {
    name: "Scikit-learn",
    category: "Library",
    icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
    color: "#fb923c",
  },
  {
    name: "Streamlit",
    category: "Tools",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/streamlit/streamlit-original.svg",
    color: "#bd4043",
  },
  {
    name: "TensorFlow",
    category: "Library",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
    color: "#ff6f00",
  },

  // Visualization
  {
    name: "Matplotlib",
    category: "Visualization",
    icon: "https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg",
    color: "#34d399",
  },
  {
    name: "Seaborn",
    category: "Visualization",
    icon: "https://seaborn.pydata.org/_images/logo-mark-lightbg.svg",
    color: "#38bdf8",
  },
  {
    name: "Tableau",
    category: "Visualization",
    icon: "https://cdn.worldvectorlogo.com/logos/tableau-software.svg",
    color: "#60a5fa",
  },

  // Tools
  {
    name: "Excel",
    category: "Tools",
    icon: "https://upload.wikimedia.org/wikipedia/commons/6/60/Microsoft_Office_Excel_%282025%E2%80%93present%29.svg",
    color: "#4ade80",
  },
  {
    name: "RapidMiner",
    category: "Tools",
    icon: "https://avatars.githubusercontent.com/u/4490278?s=200&v=4",
    color: "#fbbf24",
  },
  {
    name: "Google Colab",
    category: "Tools",
    icon: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Colaboratory_SVG_Logo.svg",
    color: "#fb923c",
  },

  //Others
  {
    name: "JavaScript",
    category: "Language",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    color: "#fbbf24",
  },
  {
    name: "HTML",
    category: "Language",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    color: "#E44D26",
  },
  {
    name: "CSS",
    category: "Language",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    color: "#3b82f6",
  },
  {
    name: "React",
    category: "Language",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    color: "#61dafb",
  },
  {
    name: "Tailwind CSS",
    category: "Library",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    color: "#06b6d4",
  },
  {
    name: "Diagram.net",
    category: "Tools",
    icon: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Diagrams.net_Logo.svg",
    color: "#fbbf24",
  },
];

// const categories = ["Language", "Library", "Visualization", "Tools"];

export default function Skills() {
  const [ref, visible] = useScrollReveal();

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.inner}>
        <div ref={ref} className={`${styles.header} ${visible ? styles.visible : ""}`}>
          <span className={styles.sectionTag}>Skills</span>
          <h2 className={styles.heading}>
            Tech I <em>Work With</em>
          </h2>
          <p className={styles.sub}>
            Languages, libraries, and tools I've used throughout my data journey.
          </p>
        </div>

        <div className={`${styles.grid} ${visible ? styles.visible : ""}`}>
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              className={styles.card}
              style={{ "--accent-color": skill.color, animationDelay: `${i * 0.06}s` }}
            >
              <div className={styles.iconWrap}>
                <img src={skill.icon} alt={skill.name} className={styles.icon} />
              </div>
              <span className={styles.name}>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
