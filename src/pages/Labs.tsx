
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../styles/Labs.css";

type Category =
  | "all"
  | "cybersecurity"
  | "electronics"
  | "computer science"
  | "programming"
  | "digital forensics"
  | "networking";

type Lab = {
  id: string;
  title: string;
  category: Exclude<Category, "all">;
  description: {
    pt: string;
    en: string;
  };
  path?: string;
};

const labs: Lab[] = [
  {
    id: "LSB-01",
    title: "Steganography",
    category: "cybersecurity",
    description: {
      pt: "Ocultação e recuperação de mensagens em imagens PNG utilizando a técnica Least Significant Bit (LSB).",
      en: "Hiding and recovering messages in PNG images using Least Significant Bit (LSB).",
    },
    path: "/labs/steganography",
  },
  {
    id: "CRY-02",
    title: "Cryptography Playground",
    category: "cybersecurity",
    description: {
      pt: "Experimentos com cifras, funções hash e conceitos fundamentais de criptografia.",
      en: "Experiments with ciphers, hash functions and fundamental cryptography concepts.",
    },
  },
  {
    id: "BIN-03",
    title: "Binary Inspector",
    category: "digital forensics",
    description: {
      pt: "Inspeção de arquivos binários, visualização hexadecimal e interpretação de bytes.",
      en: "Binary file inspection, hexadecimal visualization and byte interpretation.",
    },
  },
  {
    id: "PE-04",
    title: "PE Analyzer",
    category: "digital forensics",
    description: {
      pt: "Exploração da estrutura interna de executáveis Windows, incluindo cabeçalhos e seções.",
      en: "Exploring the internal structure of Windows executables, including headers and sections.",
    },
  },
  {
    id: "CPU-05",
    title: "8-bit CPU Simulator",
    category: "computer science",
    description: {
      pt: "Simulação de registradores, instruções e ciclos de execução de uma CPU didática de 8 bits.",
      en: "Simulation of registers, instructions and execution cycles of an educational 8-bit CPU.",
    },
  },
  {
    id: "LOG-06",
    title: "Logic Gate Simulator",
    category: "electronics",
    description: {
      pt: "Simulação de portas lógicas e construção de circuitos digitais simples.",
      en: "Logic gate simulation and construction of simple digital circuits.",
    },
  },
  {
    id: "MEM-07",
    title: "Memory Visualizer",
    category: "computer science",
    description: {
      pt: "Visualização de células de memória, endereçamento e operações de leitura e escrita.",
      en: "Visualization of memory cells, addressing and read/write operations.",
    },
  },
  {
    id: "NET-08",
    title: "Packet Inspector",
    category: "networking",
    description: {
      pt: "Análise didática de pacotes, cabeçalhos e protocolos de comunicação em rede.",
      en: "Educational analysis of packets, headers and network communication protocols.",
    },
  },
  {
    id: "AST-09",
    title: "Compiler Explorer",
    category: "programming",
    description: {
      pt: "Exploração das etapas de análise léxica, parsing e construção de árvores sintáticas.",
      en: "Exploration of lexical analysis, parsing and abstract syntax trees.",
    },
  },
  {
    id: "ENT-10",
    title: "Entropy Analyzer",
    category: "digital forensics",
    description: {
      pt: "Análise da distribuição de bytes e cálculo de entropia em arquivos digitais.",
      en: "Byte distribution analysis and entropy calculation in digital files.",
    },
  },
];

const categories: Category[] = [
  "all",
  "cybersecurity",
  "electronics",
  "computer science",
  "programming",
  "digital forensics",
  "networking",
];

const categoryNames: Record<Category, { pt: string; en: string }> = {
  all: { pt: "todos", en: "all" },
  cybersecurity: { pt: "cibersegurança", en: "cybersecurity" },
  electronics: { pt: "eletrônica", en: "electronics" },
  "computer science": { pt: "computação", en: "computer science" },
  programming: { pt: "programação", en: "programming" },
  "digital forensics": { pt: "forense digital", en: "digital forensics" },
  networking: { pt: "redes", en: "networking" },
};

export default function Labs() {
  const { i18n } = useTranslation();
  const lang = i18n.resolvedLanguage === "en" ? "en" : "pt";

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<Category>("all");

  const filteredLabs = useMemo(() => {
    const term = search.trim().toLocaleLowerCase();

    return labs.filter((lab) => {
      const matchesCategory =
        category === "all" || lab.category === category;

      const content = [
        lab.id,
        lab.title,
        lab.description.pt,
        lab.description.en,
        categoryNames[lab.category].pt,
        categoryNames[lab.category].en,
      ]
        .join(" ")
        .toLocaleLowerCase();

      return matchesCategory && content.includes(term);
    });
  }, [search, category]);

  return (
    <div className="labs-page">
      <div className="labs-container">
        <div className="labs-breadcrumb">
          LLOHS / ARCHIVE / LABS
        </div>

        <header className="labs-header">
          <h1>labs<span>.</span></h1>

          <p>
            {lang === "pt"
              ? "Um arquivo de experimentos interativos sobre computação, eletrônica, segurança e sistemas."
              : "An archive of interactive experiments in computing, electronics, security and systems."}
          </p>
        </header>

        <div className="labs-search">
          <span aria-hidden="true">⌕</span>

          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder={
              lang === "pt"
                ? "buscar nos laboratórios..."
                : "search labs..."
            }
            aria-label={
              lang === "pt"
                ? "Buscar laboratórios"
                : "Search laboratories"
            }
          />
        </div>

        <div className="labs-filters">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              className={
                category === item
                  ? "labs-filter active"
                  : "labs-filter"
              }
              onClick={() => setCategory(item)}
            >
              {categoryNames[item][lang]}
            </button>
          ))}
        </div>

        <div className="labs-list-header">
          <span>
            {lang === "pt"
              ? "EXPERIMENTOS"
              : "EXPERIMENTS"}
          </span>

          <span>
            {filteredLabs.length}{" "}
            {lang === "pt" ? "REGISTROS" : "RECORDS"}
          </span>
        </div>

        <div className="labs-list">
          {filteredLabs.map((lab) => {
            const available = Boolean(lab.path);

            const content = (
              <>
                <div className="labs-entry-top">
                  <span>
                    {lab.id} / {lab.category.toUpperCase()}
                  </span>

                  <span>
                    {available
                      ? lang === "pt"
                        ? "DISPONÍVEL"
                        : "AVAILABLE"
                      : lang === "pt"
                        ? "EM BREVE"
                        : "COMING SOON"}
                  </span>
                </div>

                <h2>{lab.title}</h2>

                <p>{lab.description[lang]}</p>

                <div className="labs-entry-bottom">
                  <span>
                    {available
                      ? lang === "pt"
                        ? "EXPERIMENTO INTERATIVO"
                        : "INTERACTIVE EXPERIMENT"
                      : lang === "pt"
                        ? "EM DESENVOLVIMENTO"
                        : "IN DEVELOPMENT"}
                  </span>

                  {available && (
                    <span className="labs-entry-arrow">↗</span>
                  )}
                </div>
              </>
            );

            return available && lab.path ? (
              <Link
                key={lab.id}
                to={lab.path}
                className="labs-entry labs-entry-link"
              >
                {content}
              </Link>
            ) : (
              <article
                key={lab.id}
                className="labs-entry labs-entry-pending"
              >
                {content}
              </article>
            );
          })}

          {filteredLabs.length === 0 && (
            <p className="labs-empty">
              {lang === "pt"
                ? "Nenhum experimento encontrado."
                : "No experiments found."}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
