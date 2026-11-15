
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../styles/Labs.css";

const labs = [
  {
    id: "01",
    name: "steganography",
    description: {
      pt: "ocultação de mensagens em imagens PNG.",
      en: "hiding messages inside PNG images.",
    },
    path: "/labs/steganography",
  },
  {
    id: "02",
    name: "cryptography playground",
    description: {
      pt: "cifras, hashes e conceitos de criptografia.",
      en: "ciphers, hashes and cryptography concepts.",
    },
  },
  {
    id: "03",
    name: "binary inspector",
    description: {
      pt: "inspeção de arquivos binários e hexadecimal.",
      en: "binary file inspection and hexadecimal.",
    },
  },
  {
    id: "04",
    name: "PE analyzer",
    description: {
      pt: "estrutura de executáveis windows.",
      en: "windows executable structure.",
    },
  },
  {
    id: "05",
    name: "8-bit CPU simulator",
    description: {
      pt: "registradores e instruções de uma CPU de 8 bits.",
      en: "registers and instructions of an 8-bit CPU.",
    },
  },
  {
    id: "06",
    name: "logic gate simulator",
    description: {
      pt: "portas lógicas e circuitos digitais.",
      en: "logic gates and digital circuits.",
    },
  },
  {
    id: "07",
    name: "memory visualizer",
    description: {
      pt: "bits, endereços e operações de memória.",
      en: "bits, addresses and memory operations.",
    },
  },
  {
    id: "08",
    name: "packet inspector",
    description: {
      pt: "estrutura de pacotes e protocolos de rede.",
      en: "network packet and protocol structures.",
    },
  },
  {
    id: "09",
    name: "compiler explorer",
    description: {
      pt: "tokens, parsing e árvores sintáticas.",
      en: "tokens, parsing and syntax trees.",
    },
  },
  {
    id: "10",
    name: "entropy analyzer",
    description: {
      pt: "distribuição de bytes e entropia de arquivos.",
      en: "byte distribution and file entropy.",
    },
  },
];

export default function Labs() {
  const { i18n } = useTranslation();
  const lang = i18n.resolvedLanguage === "en" ? "en" : "pt";

  return (
    <div className="labs-page">
      <div className="labs-container">
        <p className="labs-path">LLOHS LABS / LABS</p>

        <h1>labs</h1>

        <p className="labs-intro">
          {lang === "pt"
            ? "experimentos sobre computação, eletrônica e segurança."
            : "experiments in computing, electronics and security."}
        </p>

        <div className="labs-list">
          {labs.map((lab) => {
            const content = (
              <>
                <span className="labs-number">{lab.id}</span>

                <div className="labs-info">
                  <h2>{lab.name}</h2>
                  <p>{lab.description[lang]}</p>
                </div>

                <span className="labs-state">
                  {lab.path
                    ? "↗"
                    : lang === "pt"
                      ? "em breve"
                      : "soon"}
                </span>
              </>
            );

            return lab.path ? (
              <Link
                key={lab.id}
                to={lab.path}
                className="labs-item labs-item-link"
              >
                {content}
              </Link>
            ) : (
              <div
                key={lab.id}
                className="labs-item labs-item-pending"
              >
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
