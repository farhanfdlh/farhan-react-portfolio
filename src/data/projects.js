// ============================================================
//  PROJECTS DATA
//  Untuk menambah project baru, cukup tambahkan objek baru
//  di dalam array ini. Ikuti format yang sudah ada.
// ============================================================

export const projects = [
  {
    title: "Sentiment Analysis — Chatbot Reviews",
    category: "Machine Learning",
    year: "2025",
    description:
      "Sentiment analysis on user reviews of an AI chatbot (DeepSeek) using a Support Vector Machine classifier, with class imbalance handled with SMOTE.",
    image: "/img/ai-chatbot-sentiment-analysis.png",
    stack: ["Python", "Pandas", "Matplotlib", "Scikit-learn", "Streamlit"],
    github: "https://github.com/farhanfdlh/sentiment-analysis-model",
    demo: "https://ai-chatbot-sentiment-analysis-app.streamlit.app/", // ganti dengan URL jika ada live demo
    featured: true,
  },
  {
    title: "Udemy Course — Exploratory Data Analysis (EDA)",
    category: "Data Analysis",
    year: "2024",
    description:
      "Exploratory analysis of Udemy course trends, pricing, and revenue insights — visualized with Python and Tableau.",
    image: "/img/dashboard-udemy-course.png",
    stack: ["Python", "Tableau", "Matplotlib", "Seaborn"],
    github: "https://github.com/farhanfdlh/udemy-course-eda",
    demo: null,
    featured: false, // tampil badge "Featured"
  },
  {
    title: "Customer Segmentation",
    category: "Data Analysis",
    year: "2024",
    description:
      "Segmented hotel customers into Loyal, New, and Inactive groups using RFM analysis & K-Means — enabling data-driven marketing decisions.",
    image: "/img/customer-segmentation.jpg",
    stack: ["Python", "Excel", "Scikit-learn", "Matplotlib"],
    github: "https://github.com/farhanfdlh/customer-segmentation-rfm-kmeans",
    demo: null,
    featured: false,
  },
  {
    title: "JagaMakan",
    category: "Machine Learning",
    year: "2023",
    description:
      "Developed food image classification model for JagaMakan — a Bangkit 2023 Capstone Android app that scans food via camera to detect calories and support daily nutrition tracking.",
    image: "/img/logo-jagamakan.png",
    stack: ["Python", "TensorFlow"],
    github: "https://github.com/JagaMakan/JagaMakan-Apps",
    demo: null,
    featured: false,
  },

  // ── TAMBAH PROJECT BARU DI BAWAH INI ──────────────────────
  // {
  //   title: "Nama Project",
  //   category: "Web App",       // Web App | Landing Page | Website | Web Tool | dll
  //   year: "2025",
  //   description: "Deskripsi singkat project kamu.",
  //   image: "/img/nama-gambar.png",  // taruh gambar di folder public/img/
  //   stack: ["React", "Tailwind"],
  //   github: "https://github.com/...",
  //   demo: "https://...",        // null jika tidak ada
  //   featured: false,
  // },
];
