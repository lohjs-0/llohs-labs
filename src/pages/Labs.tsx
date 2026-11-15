
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../styles/Labs.css";

const labs = [
  {
    id: "01",
    name: "Steganography",
    description: {
      pt: "Ocultação de mensagens em imagens PNG.",
      en: "Hiding messages inside PNG images.",
    },
    path: "/labs/steganography",
  },
  {
    id: "02",
    name: "Cryptography Playground",
    description: {
      pt: "Cifras, hashes e conceitos de criptografia.",
      en: "Ciphers, hashes and cryptography concepts.",
    },
  },
  {
    id: "03",
    name: "Binary Inspector",
    description: {
      pt: "Inspeção de arquivos binários e hexadecimal.",
      en: "Binary file inspection and hexadecimal.",
    },
  },
  {
    id: "04",
    name: "PE Analyzer",
    description: {
      pt: "Estrutura de executáveis Windows.",
      en: "Windows executable structure.",
    },
  },
  {
    id: "05",
    name: "8-bit CPU Simulator",
    description: {
      pt: "Registradores e instruções de uma CPU de 8 bits.",
      en: "Registers and instructions of an 8-bit CPU.",
    },
  },
  {
    id: "06",
    name: "Logic Gate Simulator",
    description: {
      pt: "Portas lógicas e circuitos digitais.",
      en: "Logic gates and digital circuits.",
    },
  },
  {
    id: "07",
    name: "Memory Visualizer",
    description: {
      pt: "Bits, endereços e operações de memória.",
      en: "Bits, addresses and memory operations.",
    },
  },
  {
    id: "08",
    name: "Packet Inspector",
    description: {
      pt: "Estrutura de pacotes e protocolos de rede.",
      en: "Network packet and protocol structures.",
    },
  },
  {
    id: "09",
    name: "Compiler Explorer",
    description: {
      pt: "Tokens, parsing e árvores sintáticas.",
      en: "Tokens, parsing and syntax trees.",
    },
  },
  {
    id: "10",
    name: "Entropy Analyzer",
    description: {
      pt: "Distribuição de bytes e entropia de arquivos.",
      en: "Byte distribution and file entropy.",
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

        <h1>Labs</h1>

        <p className="labs-intro">
          {lang === "pt"
            ? "Experimentos sobre computação, eletrônica e segurança."
            : "Experiments in computing, electronics and security."}
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
