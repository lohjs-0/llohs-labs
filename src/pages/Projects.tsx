
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import {
  projects,
  type Language,
  type ProjectStatus,
} from "../data/projects";

const translations = {
  pt: {
    title: "projetos",
    subtitle:
      "uma coleção de coisas que construí, experimentei e continuo desenvolvendo.",
    empty: "nenhum projeto disponível no momento.",
    status: {
      development: "em desenvolvimento",
      completed: "concluído",
      experimental: "experimental",
    },
  },
  en: {
    title: "projects",
    subtitle:
      "a collection of things i've built, experimented with and continue to develop.",
    empty: "no projects available yet.",
    status: {
      development: "in development",
      completed: "completed",
      experimental: "experimental",
    },
  },
};

export default function Projects() {
  const { i18n } = useTranslation();

  const language: Language =
    i18n.resolvedLanguage === "en" ? "en" : "pt";

  const t = translations[language];

  const getStatus = (status: ProjectStatus) =>
    t.status[status];

  return (
    <section className="projects-page">
      <header className="page-header">
        <h1>{t.title}</h1>
        <p>{t.subtitle}</p>
      </header>

      <div className="projects-list">
        {projects.length === 0 ? (
          <p>{t.empty}</p>
        ) : (
          projects.map((project) => (
            <article
              className="project-item"
              key={project.slug}
            >
              {project.cover && (
                <Link
                  to={`/projects/${project.slug}`}
                  className="project-cover-link"
                >
                  <img
                    className="project-thumbnail"
                    src={project.cover}
                    alt={project.name}
                    loading="lazy"
                  />
                </Link>
              )}

              <div className="project-heading">
                <Link to={`/projects/${project.slug}`}>
                  {project.name}
                </Link>

                <span className="project-status">
                  {getStatus(project.status)}
                </span>
              </div>

              <p className="project-description">
                {project.description[language]}
              </p>

              <div className="project-technologies">
                {project.technologies.join(" · ")}
              </div>
            </article>
          ))
        )}
      </div>
    </section>
  );
}
