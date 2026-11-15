
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const translations = {
  pt: {
    title: "research",
    subtitle:
      "investigações independentes, inteligência de ameaças e análises técnicas sobre segurança e sistemas.",
    read: "ler investigação",
    status: "pesquisa preliminar",
    description:
      "Uma investigação sobre a cadeia de fraudes do Pix no Brasil, com análise de contestações, devoluções pelo MED e indicadores financeiros a partir de dados públicos do Banco Central.",
  },
  en: {
    title: "research",
    subtitle:
      "independent investigations, threat intelligence and technical analysis of security and systems.",
    read: "read investigation",
    status: "preliminary research",
    description:
      "An investigation into the Brazilian Pix fraud supply chain, examining contestations, MED refunds and financial indicators using public Central Bank data.",
  },
};

export default function Research() {
  const { i18n } = useTranslation();

  const language = i18n.resolvedLanguage === "en" ? "en" : "pt";
  const t = translations[language];

  return (
    <section className="projects-page research-page">
      <header className="page-header">
        <h1>{t.title}</h1>
        <p>{t.subtitle}</p>
      </header>

      <div className="projects-list">
        <article className="project-item">
          <div className="project-heading">
            <Link to="/research/cti-001">
              CTI-001 — The Brazilian Pix Fraud Supply Chain
            </Link>

            <span className="project-status">
              {t.status}
            </span>
          </div>

          <p className="project-description">
            {t.description}
          </p>

          <div className="project-technologies">
            Threat Intelligence · Financial Fraud · OSINT ·
            Data Analysis · Pix / MED
          </div>

          <Link
            to="/research/cti-001"
            className="research-read-link"
          >
            {t.read} ↗
          </Link>
        </article>
      </div>
    </section>
  );
}
