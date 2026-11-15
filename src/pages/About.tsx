
import { useTranslation } from "react-i18next";

const translations = {
  pt: {
    title: "sobre",
    intro: "oi, sou a lohane.",
    paragraphs: [
      "sou estudante de análise e desenvolvimento de sistemas, interessada em entender como as coisas funcionam — especialmente quando isso envolve software, segurança e sistemas de baixo nível.",

      "gosto de construir projetos, experimentar tecnologias e explorar o que existe por trás das interfaces. meu interesse vai do desenvolvimento de aplicações à análise de sistemas, engenharia reversa e forense digital.",

      "este espaço é uma coleção de projetos, experimentos, anotações e coisas que aprendo pelo caminho. algumas funcionam, outras quebram. faz parte.",
    ],
    interestsTitle: "interesses",
    interests: [
      "software development",
      "cybersecurity & digital forensics",
      "linux & systems",
      "electronics & embedded systems",
      "reverse engineering",
    ],
    currentlyTitle: "atualmente",
    currently:
      "explorando C++, eletrônica digital, arquitetura de computadores e desenvolvimento de software. também tentando entender melhor o que acontece nas camadas mais baixas dos sistemas.",
    elsewhereTitle: "outros lugares",
    github: "github",
    linkedin: "linkedin",
    closing: "still learning, still building.",
  },
  en: {
    title: "about",
    intro: "hi, i'm lohane.",
    paragraphs: [
      "i'm a software development student interested in understanding how things work — especially when it comes to software, security, and low-level systems.",

      "i enjoy building projects, experimenting with technologies, and exploring what exists beneath interfaces. my interests range from application development to systems analysis, reverse engineering, and digital forensics.",

      "this space is a collection of projects, experiments, notes, and things i learn along the way. some work, others break. that's part of it.",
    ],
    interestsTitle: "interests",
    interests: [
      "software development",
      "cybersecurity & digital forensics",
      "linux & systems",
      "electronics & embedded systems",
      "reverse engineering",
    ],
    currentlyTitle: "currently",
    currently:
      "exploring C++, digital electronics, computer architecture, and software development. also trying to better understand what happens at the lower layers of systems.",
    elsewhereTitle: "elsewhere",
    github: "github",
    linkedin: "linkedin",
    closing: "still learning, still building.",
  },
};

export default function About() {
  const { i18n } = useTranslation();

  const language =
    i18n.resolvedLanguage === "en" ? "en" : "pt";

  const t = translations[language];

  return (
    <section className="about-page">
      <header className="page-header">
        <h1>{t.title}</h1>
      </header>

      <div className="about-intro">
        <p className="about-greeting">{t.intro}</p>

        {t.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <section className="about-section">
        <h2>{t.interestsTitle}</h2>

        <ul className="about-interests">
          {t.interests.map((interest) => (
            <li key={interest}>{interest}</li>
          ))}
        </ul>
      </section>

      <section className="about-section">
        <h2>{t.currentlyTitle}</h2>
        <p>{t.currently}</p>
      </section>

      <section className="about-section">
        <h2>{t.elsewhereTitle}</h2>

        <div className="about-links">
          <a
            href="https://github.com/lohjs-0"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.github} ↗
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.linkedin} ↗
          </a>
        </div>
      </section>

      <p className="about-closing">{t.closing}</p>
    </section>
  );
}
