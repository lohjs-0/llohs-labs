
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  pt: {
    translation: {
      nav: {
        home: "início",
        blog: "blog",
        projects: "projetos",
        notes: "notas",
        about: "sobre",
      },
      home: {
        subtitle: "desenvolvimento de software & cibersegurança",
        description:
          "um pequeno espaço na internet onde compartilho projetos, experimentos, ideias e coisas que aprendo pelo caminho.",
        writing: "publicações",
        allPosts: "ver todas as publicações",
      },
      blog: {
        subtitle: "ideias, experimentos e anotações sobre assuntos que me interessam.",
        back: "← voltar às publicações",
        notFound: "publicação não encontrada",
      },
    },
  },
  en: {
    translation: {
      nav: {
        home: "home",
        blog: "blog",
        projects: "projects",
        notes: "notes",
        about: "about",
      },
      home: {
        subtitle: "software development & cybersecurity",
        description:
          "a little corner of the internet where i share projects, experiments, thoughts and things learned along the way.",
        writing: "writing",
        allPosts: "view all posts",
      },
      blog: {
        subtitle: "thoughts, experiments and notes on things i find interesting.",
        back: "← back to writing",
        notFound: "post not found",
      },
    },
  },
};

const savedLanguage = localStorage.getItem("llohs-language");

const initialLanguage =
  savedLanguage === "en" ? "en" : "pt";

i18n.use(initReactI18next).init({
  resources,
  lng: initialLanguage,
  fallbackLng: "pt",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
