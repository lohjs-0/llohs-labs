
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../styles/Labs.css";

type LabStatus = "available" | "planned";

type Lab = {
  id: string;
  title: string;
  category: string;
  description: {
    pt: string;
    en: string;
  };
  status: LabStatus;
  path?: string;
};

const labs: Lab[] = [
  {
    id: "LSB-01",
    title: "Steganography",
    category: "CYBERSECURITY",
    description: {
      pt: "Oculte e recupere mensagens em imagens PNG utilizando o bit menos significativo.",
      en: "Hide and recover messages in PNG images using the least significant bit.",
    },
    status: "available",
    path: "/labs/steganography",
  },
  {
    id: "CRY-02",
    title: "Cryptography Playground",
    category: "CYBERSECURITY",
    description: {
      pt: "Explore cifras, funções hash e conceitos fundamentais de criptografia.",
      en: "Explore ciphers, hash functions, and fundamental cryptography concepts.",
    },
    status: "planned",
  },
  {
    id: "BIN-03",
    title: "Binary Inspector",
    category: "REVERSE ENGINEERING",
    description: {
      pt: "Inspecione arquivos binários, visualize bytes e explore representações hexadecimais.",
      en: "Inspect binary files, visualize bytes, and explore hexadecimal representations.",
    },
    status: "planned",
  },
  {
    id: "PE-04",
    title: "PE Analyzer",
    category: "DIGITAL FORENSICS",
    description: {
      pt: "Investigue cabeçalhos, seções e metadados de executáveis Windows.",
      en: "Investigate headers, sections, and metadata of Windows executables.",
    },
    status: "planned",
  },
  {
    id: "CPU-05",
    title: "8-bit CPU Simulator",
    category: "COMPUTER ARCHITECTURE",
    description: {
      pt: "Explore registradores, instruções e ciclos de execução de uma CPU didática de 8 bits.",
      en: "Explore registers, instructions, and execution cycles of an educational 8-bit CPU.",
    },
    status: "planned",
  },
  {
    id: "LOG-06",
    title: "Logic Gate Simulator",
    category: "ELECTRONICS",
    description: {
      pt: "Experimente portas lógicas e construa circuitos digitais simples.",
      en: "Experiment with logic gates and build simple digital circuits.",
    },
    status: "planned",
  },
  {
    id: "MEM-07",
    title: "Memory Visualizer",
    category: "COMPUTER ARCHITECTURE",
    description: {
      pt: "Visualize bits, endereços, células de memória e operações de leitura e escrita.",
      en: "Visualize bits, addresses, memory cells, and read/write operations.",
    },
    status: "planned",
  },
  {
    id: "NET-08",
    title: "Packet Inspector",
    category: "NETWORKING",
    description: {
      pt: "Explore a estrutura de pacotes e protocolos utilizando exemplos didáticos.",
      en: "Explore packet structures and protocols using educational examples.",
    },
    status: "planned",
  },
  {
    id: "AST-09",
    title: "Compiler Explorer",
    category: "PROGRAMMING",
    description: {
      pt: "Entenda tokens, análise sintática e árvores de sintaxe abstrata.",
      en: "Understand tokens, parsing, and abstract syntax trees.",
    },
    status: "planned",
  },
  {
    id: "ENT-10",
    title: "Entropy Analyzer",
    category: "DIGITAL FORENSICS",
    description: {
      pt: "Analise a distribuição de bytes e calcule a entropia de arquivos.",
      en: "Analyze byte distributions and calculate file entropy.",
    },
    status: "planned",
  },
];

export default function Labs() {
  const { i18n } = useTranslation();
  const language = i18n.resolvedLanguage === "en" ? "en" : "pt";

  const available = labs.filter(
    (lab) => lab.status === "available"
  ).length;

  return (
    <div className="labs-page">
      <div className="labs-container">
        <div className="labs-path">
          <span>LLOHS LABS</span>
          <span>/</span>
          <strong>EXPERIMENTS</strong>
        </div>

        <header className="labs-header">
          <div className="labs-kicker">
            <span className="labs-kicker-dot" />
            INTERACTIVE RESEARCH ENVIRONMENT
          </div>

          <h1>
            Interactive Labs<span>.</span>
          </h1>

          <p>
            {language === "pt"
              ? "Um espaço dedicado à experimentação prática em computação, eletrônica, segurança e sistemas. Explore conceitos técnicos diretamente no navegador."
              : "A space dedicated to practical experimentation in computing, electronics, security, and systems. Explore technical concepts directly in your browser."}
          </p>
        </header>

        <section className="labs-overview">
          <div>
            <span>EXPERIMENTS</span>
            <strong>{String(labs.length).padStart(2, "0")}</strong>
          </div>

          <div>
            <span>AVAILABLE</span>
            <strong>{String(available).padStart(2, "0")}</strong>
          </div>

          <div>
            <span>IN DEVELOPMENT</span>
            <strong>
              {String(labs.length - available).padStart(2, "0")}
            </strong>
          </div>

          <div>
            <span>ENVIRONMENT</span>
            <strong className="labs-environment">BROWSER</strong>
          </div>
        </section>

        <div className="labs-section-heading">
          <div>
            <span>INDEX / 001—010</span>
            <h2>
              {language === "pt"
                ? "Catálogo de experimentos"
                : "Experiment catalog"}
            </h2>
          </div>

          <span>
            {String(labs.length).padStart(2, "0")} ENTRIES
          </span>
        </div>

        <div className="labs-grid">
          {labs.map((lab) => {
            const isAvailable = lab.status === "available";

            const content = (
              <>
                <div className="labs-card-top">
                  <span className="labs-card-id">{lab.id}</span>

                  <span
                    className={
                      isAvailable
                        ? "labs-status available"
                        : "labs-status planned"
                    }
                  >
                    <span className="labs-status-dot" />
                    {isAvailable
                      ? language === "pt"
                        ? "Disponível"
                        : "Available"
                      : language === "pt"
                        ? "Planejado"
                        : "Planned"}
                  </span>
                </div>

                <div className="labs-card-content">
                  <span className="labs-card-category">
                    {lab.category}
                  </span>

                  <h3>{lab.title}</h3>

                  <p>{lab.description[language]}</p>
                </div>

                <div className="labs-card-bottom">
                  <span>
                    {isAvailable
                      ? language === "pt"
                        ? "ABRIR EXPERIMENTO"
                        : "OPEN EXPERIMENT"
                      : language === "pt"
                        ? "EM BREVE"
                        : "COMING SOON"}
                  </span>

                  <span aria-hidden="true">
                    {isAvailable ? "↗" : "—"}
                  </span>
                </div>
              </>
            );

            return isAvailable && lab.path ? (
              <Link
                key={lab.id}
                to={lab.path}
                className="labs-card labs-card-link"
              >
                {content}
              </Link>
            ) : (
              <article
                key={lab.id}
                className="labs-card labs-card-disabled"
              >
                {content}
              </article>
            );
          })}
        </div>

        <div className="labs-bottom-note">
          <span>LABORATORY NOTES / 001</span>
          <p>
            {language === "pt"
              ? "Os experimentos são desenvolvidos para fins educacionais. Novos módulos serão disponibilizados progressivamente."
              : "Experiments are developed for educational purposes. New modules will be released progressively."}
          </p>
        </div>

        <footer className="labs-footer">
          <span>LLOHS LABS / INTERACTIVE EXPERIMENTS</span>
          <span>RESEARCH · SYSTEMS · SECURITY</span>
        </footer>
      </div>
    </div>
  );
}
