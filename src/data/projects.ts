
export type Language = "pt" | "en";

export type ProjectStatus =
  | "development"
  | "completed"
  | "experimental";

export interface LocalizedText {
  pt: string;
  en: string;
}

export interface ProjectImage {
  src: string;
  alt: LocalizedText;
  caption?: LocalizedText;
}

export interface Project {
  slug: string;
  name: string;
  description: LocalizedText;
  content: LocalizedText;
  technologies: string[];
  status: ProjectStatus;
  github?: string;
  article?: string;

  // Imagem principal, caso queira usar futuramente
  cover?: string;

  // Galeria exibida dentro da página individual
  images?: ProjectImage[];
}

export const projects: Project[] = [
  {
    slug: "nightjar",
    name: "nightjar",

    description: {
      pt: "ferramenta experimental de análise de eventos e investigação forense digital.",
      en: "an experimental tool for event analysis and digital forensic investigation.",
    },

    content: {
      pt: "projeto educacional de investigação digital desenvolvido em python e kali linux. o nightjar analisa logs simulados, organiza eventos cronologicamente, identifica possíveis indicadores de segurança e gera relatórios estruturados em json. o projeto explora correlação de eventos, análise de evidências e documentação técnica.",
      en: "an educational digital investigation project developed with python and kali linux. nightjar analyzes simulated logs, organizes events chronologically, identifies potential security indicators and generates structured json reports. the project explores event correlation, evidence analysis and technical documentation.",
    },

    technologies: [
      "python",
      "kali linux",
      "digital forensics",
      "log analysis",
      "cybersecurity",
    ],

    status: "experimental",

    images: [
      {
        src: "/images/projects/nightjar/nightjar-analysis.png",

        alt: {
          pt: "NIGHTJAR executando análise forense no Kali Linux",
          en: "NIGHTJAR running forensic analysis on Kali Linux",
        },

        caption: {
          pt: "Case File 001 — análise de 7 eventos simulados e identificação de 2 achados.",
          en: "Case File 001 — analysis of 7 simulated events and identification of 2 findings.",
        },
      },
    ],
  },

  {
    slug: "cerberus-scanner",
    name: "cerberus scanner",

    description: {
      pt: "experimentos com desenvolvimento de ferramentas de análise e segurança.",
      en: "experiments with the development of analysis and security tools.",
    },

    content: {
      pt: "um projeto para estudar ferramentas, automação e conceitos de segurança.",
      en: "a project to study tooling, automation and security concepts.",
    },

    technologies: ["node.js", "cybersecurity"],

    status: "experimental",
  },

  {
    slug: "z80-computer",
    name: "z80 computer",

    description: {
      pt: "explorando arquitetura de computadores através da eletrônica.",
      en: "exploring computer architecture through electronics.",
    },

    content: {
      pt: "um experimento pessoal para compreender como computadores funcionam no nível de hardware, utilizando o z80 e o kicad.",
      en: "a personal experiment to understand computers at the hardware level using the z80 and kicad.",
    },

    technologies: [
      "z80",
      "kicad",
      "electronics",
    ],

    status: "development",

    article: "building-a-z80-computer",
  },

  {
    slug: "pipoca",
    name: "pipoca",

    description: {
      pt: "robô expressivo com esp32, display oled e sensores de movimento e ambiente.",
      en: "an expressive esp32-based robot with an oled display, motion and environmental sensors.",
    },

    content: {
      pt: "projeto experimental de sistemas embarcados desenvolvido com esp32 e c++ no ambiente arduino. o pipoca utiliza um display oled para apresentar expressões animadas, um acelerômetro mpu6050 para detectar movimentos e um buzzer para reproduzir sons. o firmware organiza diferentes comportamentos, incluindo reações ao movimento, tédio e sono. o projeto também explora a integração de um sensor dht22 para exibir temperatura e umidade, conectando eletrônica, programação e interação física.",
      en: "an experimental embedded systems project developed with an esp32 and c++ using the arduino framework. pipoca uses an oled display to show animated expressions, an mpu6050 accelerometer to detect movement, and a buzzer to produce sounds. its firmware organizes different behaviors, including motion responses, boredom, and sleep. the project also explores integrating a dht22 sensor to display temperature and humidity, connecting electronics, programming, and physical interaction.",
    },

    technologies: [
      "esp32",
      "c++",
      "arduino",
      "oled ssd1306",
      "mpu6050",
      "dht22",
      "i2c",
      "embedded systems",
    ],

    status: "development",

    github: "https://github.com/lohjs-0/pipoca",

    // Adicionaremos imagens reais do protótipo futuramente.
  },
];
