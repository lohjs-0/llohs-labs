
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import {
  projects,
  type Language,
  type Project,
} from "../data/projects";

import "../styles/technical-article.css";

/* =========================================
   TYPES
========================================= */

type Section = {
  id: string;
  title: string;
  paragraphs: string[];
};

/* =========================================
   IMAGE PATH RESOLVER
   GitHub Pages / Vite
========================================= */

function resolveImagePath(src: string): string {
  if (!src) return "";

  const path = src.trim();

  // Preserve external URLs and special sources.
  if (
    /^(https?:)?\/\//i.test(path) ||
    /^(data:|blob:)/i.test(path)
  ) {
    return path;
  }

  const base = import.meta.env.BASE_URL;

  // Preserve anchors and other non-file references.
  if (path.startsWith("#")) {
    return path;
  }

  // Separate query parameters and fragments.
  const match = path.match(/^([^?#]*)(.*)$/);

  if (!match) return path;

  let pathname = match[1];
  const suffix = match[2];

  pathname = pathname
    .replace(/^\/+/, "")
    .replace(/^\.\/+/, "")
    .replace(/^public\//, "");

  const normalizedBase = base
    .replace(/^\/+/, "")
    .replace(/\/+$/, "");

  if (
    normalizedBase &&
    pathname.startsWith(`${normalizedBase}/`)
  ) {
    pathname = pathname.slice(
      normalizedBase.length + 1
    );
  }

  return `${base}${pathname}${suffix}`;
}

/* =========================================
   TRANSLATIONS
========================================= */

const copy = {
  pt: {
    back: "← voltar para projetos",
    missing: "projeto não encontrado.",
    toc: "NESTA PÁGINA",
    overview: "visão geral",
    technologies: "tecnologias",
    evidence: "evidências",
    github: "código no github ↗",
    article: "ler artigo relacionado →",
    events: "eventos",
    categories: "categorias",
    findings: "achados",
    notice:
      "Este estudo usa eventos fictícios e não comprova comprometimento ou exfiltração.",
    status: {
      development: "em desenvolvimento",
      completed: "concluído",
      experimental: "experimental",
    },
  },

  en: {
    back: "← back to projects",
    missing: "project not found.",
    toc: "ON THIS PAGE",
    overview: "overview",
    technologies: "technologies",
    evidence: "evidence",
    github: "source on github ↗",
    article: "read related article →",
    events: "events",
    categories: "categories",
    findings: "findings",
    notice:
      "This study uses fictional events and does not establish compromise or exfiltration.",
    status: {
      development: "in development",
      completed: "completed",
      experimental: "experimental",
    },
  },
};

/* =========================================
   NIGHTJAR
========================================= */

const nightjar: Record<Language, Section[]> = {
  pt: [
    {
      id: "overview",
      title: "01 / visão geral",
      paragraphs: [
        "NIGHTJAR é um projeto educacional de investigação forense digital. O Case File 001 — The Stolen Session explora a análise de eventos de segurança em um ambiente inteiramente simulado.",
        "O objetivo é reconstruir uma sequência de acontecimentos a partir de registros de endpoint, correlacionar eventos e documentar hipóteses com clareza.",
      ],
    },
    {
      id: "scenario",
      title: "02 / contexto da investigação",
      paragraphs: [
        "O cenário envolve a organização fictícia Aster Tecnologia e a abertura de um anexo suspeito. Os registros incluem a execução de InvoiceViewer.exe, acessos a arquivos e uma conexão de saída.",
        "Esses eventos são indícios para investigação; não são, isoladamente, prova de uma invasão.",
      ],
    },
    {
      id: "methodology",
      title: "03 / metodologia",
      paragraphs: [
        "O analisador, desenvolvido em Python e executado no Kali Linux, interpreta logs simulados, valida timestamps, organiza os eventos cronologicamente e identifica padrões definidos para o estudo.",
        "O resultado é um relatório JSON com eventos processados, categorias, linhas inválidas e achados.",
      ],
    },
    {
      id: "findings",
      title: "04 / resultados",
      paragraphs: [
        "Na execução documentada, foram processados sete eventos de cinco categorias, sem linhas inválidas. O analisador registrou dois achados de severidade média.",
      ],
    },
    {
      id: "evidence",
      title: "05 / evidências e execução",
      paragraphs: [
        "A captura a seguir documenta a execução do caso simulado no Kali Linux.",
      ],
    },
    {
      id: "limitations",
      title: "06 / limitações",
      paragraphs: [
        "O caso é fictício. Nenhum malware real foi executado, e o analisador não capturou tráfego de rede. Os resultados não comprovam roubo de credenciais ou exfiltração.",
      ],
    },
    {
      id: "conclusion",
      title: "07 / considerações finais",
      paragraphs: [
        "O projeto explora correlação temporal, análise de logs e documentação de evidências, distinguindo observações, hipóteses e conclusões fundamentadas.",
      ],
    },
  ],

  en: [
    {
      id: "overview",
      title: "01 / overview",
      paragraphs: [
        "NIGHTJAR is an educational digital forensics project. Case File 001 — The Stolen Session explores security event analysis in an entirely simulated environment.",
        "The goal is to reconstruct a sequence of events from endpoint records, correlate activity and document hypotheses clearly.",
      ],
    },
    {
      id: "scenario",
      title: "02 / investigation context",
      paragraphs: [
        "The scenario involves the fictional organization Aster Tecnologia and a suspicious attachment. Records include InvoiceViewer.exe execution, file access and an outbound connection.",
        "These events are investigative leads; individually, they do not prove an intrusion.",
      ],
    },
    {
      id: "methodology",
      title: "03 / methodology",
      paragraphs: [
        "The Python analyzer, executed on Kali Linux, parses simulated logs, validates timestamps, orders events chronologically and identifies predefined patterns.",
        "It generates a JSON report with processed events, categories, invalid lines and findings.",
      ],
    },
    {
      id: "findings",
      title: "04 / findings",
      paragraphs: [
        "The documented run processed seven events across five categories, with no invalid lines. Two medium-severity findings were recorded.",
      ],
    },
    {
      id: "evidence",
      title: "05 / evidence and execution",
      paragraphs: [
        "The following screenshot documents the simulated case running on Kali Linux.",
      ],
    },
    {
      id: "limitations",
      title: "06 / limitations",
      paragraphs: [
        "The case is fictional. No real malware was executed and the analyzer did not capture network traffic. The findings do not prove credential theft or exfiltration.",
      ],
    },
    {
      id: "conclusion",
      title: "07 / final thoughts",
      paragraphs: [
        "The project explores temporal correlation, log analysis and evidence documentation, distinguishing observations, hypotheses and supported conclusions.",
      ],
    },
  ],
};

/* =========================================
   CERBERUS
========================================= */

const cerberus: Record<Language, Section[]> = {
  pt: [
    {
      id: "overview",
      title: "01 / visão geral",
      paragraphs: [
        "CERBERUS é uma ferramenta modular de OSINT, reconhecimento e análise de segurança desenvolvida em Python. O projeto busca transformar dados coletados sobre a exposição digital de um alvo em informações organizadas para investigação.",
        "Inspirado no guardião de três cabeças da mitologia grega, o sistema divide sua análise em três frentes: OSINT, RECON e SECURITY.",
      ],
    },
    {
      id: "architecture",
      title: "02 / arquitetura",
      paragraphs: [
        "A arquitetura separa as funcionalidades em três módulos principais. HEAD I concentra a coleta OSINT; HEAD II realiza reconhecimento de infraestrutura; HEAD III reúne verificações de segurança.",
        "Essa divisão permite executar funcionalidades individualmente ou reunir os resultados em um fluxo de análise.",
      ],
    },
    {
      id: "osint",
      title: "03 / coleta de informações",
      paragraphs: [
        "A camada OSINT inclui pesquisa de nomes de usuário em plataformas sociais, consultas a domínios, registros DNS, identificação de subdomínios e pesquisa de informações publicamente disponíveis.",
        "O objetivo é organizar informações que ajudem a compreender a presença digital do alvo.",
      ],
    },
    {
      id: "recon",
      title: "04 / reconhecimento",
      paragraphs: [
        "O módulo de reconhecimento reúne verificações de portas e serviços, certificados SSL/TLS, cabeçalhos HTTP e identificação de tecnologias utilizadas por aplicações web.",
        "A descoberta de subdomínios também pode enriquecer os resultados com endereço IP, status HTTP, tecnologias e informações de ASN.",
      ],
    },
    {
      id: "security",
      title: "05 / análise de segurança",
      paragraphs: [
        "O CERBERUS documenta verificações de cabeçalhos de segurança, caminhos administrativos, redirecionamentos, possíveis problemas em aplicações web e consultas de CVEs pela base NVD.",
        "Essas verificações servem como indicadores para análise posterior. Um resultado automatizado não confirma, por si só, uma vulnerabilidade explorável.",
      ],
    },
    {
      id: "chain",
      title: "06 / chain ritual",
      paragraphs: [
        "CHAIN RITUAL é o fluxo de automação que reúne as três frentes de análise e produz uma avaliação consolidada.",
        "O sistema apresenta pontuações para OSINT, RECON e SECURITY, além de uma pontuação geral de risco e um veredito baseado nos achados.",
      ],
    },
    {
      id: "visualization",
      title: "07 / inteligência e visualização",
      paragraphs: [
        "O módulo VISUALIZE organiza as descobertas em relatórios interpretativos, árvores de descoberta, linhas do tempo e grafos interativos exportados em HTML.",
        "O GRIMOIRE gerencia relatórios salvos, enquanto o DASHBOARD apresenta um resumo das informações coletadas sobre os alvos analisados.",
      ],
    },
    {
      id: "limitations",
      title: "08 / limitações e uso autorizado",
      paragraphs: [
        "O CERBERUS é destinado a estudos e avaliações de segurança autorizadas. As verificações ativas devem ser realizadas somente em sistemas próprios ou com permissão explícita.",
        "A pontuação de risco é uma estimativa produzida pela ferramenta e não substitui validação manual, análise contextual ou uma auditoria profissional.",
      ],
    },
  ],

  en: [
    {
      id: "overview",
      title: "01 / overview",
      paragraphs: [
        "CERBERUS is a modular Python-based OSINT, reconnaissance, and security analysis tool. The project aims to turn collected information about a target's digital exposure into structured investigative intelligence.",
        "Inspired by the three-headed guardian of Greek mythology, the system divides its analysis into three areas: OSINT, RECON, and SECURITY.",
      ],
    },
    {
      id: "architecture",
      title: "02 / architecture",
      paragraphs: [
        "The architecture separates functionality into three main modules. HEAD I focuses on OSINT collection, HEAD II handles infrastructure reconnaissance, and HEAD III performs security checks.",
        "This structure allows individual modules to run independently or as part of a combined analysis pipeline.",
      ],
    },
    {
      id: "osint",
      title: "03 / information gathering",
      paragraphs: [
        "The OSINT layer includes username searches across social platforms, domain queries, DNS records, subdomain discovery, and publicly available information gathering.",
        "Its purpose is to organize information that helps describe a target's digital footprint.",
      ],
    },
    {
      id: "recon",
      title: "04 / reconnaissance",
      paragraphs: [
        "The reconnaissance module covers ports and services, SSL/TLS certificates, HTTP headers, and web technology fingerprinting.",
        "Subdomain discovery can also enrich results with IP addresses, HTTP status codes, technologies, and ASN information.",
      ],
    },
    {
      id: "security",
      title: "05 / security analysis",
      paragraphs: [
        "CERBERUS documents checks for security headers, administrative paths, redirects, potential web application issues, and CVE lookups using the NVD database.",
        "Automated findings are indicators for further investigation and do not independently establish an exploitable vulnerability.",
      ],
    },
    {
      id: "chain",
      title: "06 / chain ritual",
      paragraphs: [
        "CHAIN RITUAL combines the three analysis areas into an automated pipeline and produces a consolidated assessment.",
        "The system presents individual OSINT, RECON, and SECURITY scores, an overall risk score, and a verdict based on its findings.",
      ],
    },
    {
      id: "visualization",
      title: "07 / intelligence and visualization",
      paragraphs: [
        "VISUALIZE organizes findings into interpreted reports, discovery trees, exposure timelines, and interactive HTML graphs.",
        "GRIMOIRE manages saved reports, while DASHBOARD provides a summary of collected intelligence across analyzed targets.",
      ],
    },
    {
      id: "limitations",
      title: "08 / limitations and authorized use",
      paragraphs: [
        "CERBERUS is intended for educational research and authorized security assessments. Active checks should only be performed against owned systems or systems with explicit permission.",
        "Its risk score is a tool-generated estimate and does not replace manual validation, contextual analysis, or a professional security audit.",
      ],
    },
  ],
};

/* =========================================
   PIPOCA
========================================= */

const pipoca: Record<Language, Section[]> = {
  pt: [
    {
      id: "overview",
      title: "01 / visão geral",
      paragraphs: [
        "PIPOCA é um projeto experimental de robô expressivo construído com ESP32. Em vez de uma interface tradicional, ele utiliza um display OLED para representar estados e reagir ao ambiente físico.",
        "O objetivo é estudar a integração entre sensores, animações, áudio e lógica de estados em um sistema embarcado de recursos limitados.",
      ],
    },
    {
      id: "hardware",
      title: "02 / hardware",
      paragraphs: [
        "O protótipo utiliza um ESP32 DevKit, um display OLED SSD1306 de 128 × 64 pixels, um módulo MPU6050 para leitura de movimento e um buzzer passivo para reprodução de melodias.",
        "Uma contribuição recente acrescentou suporte ao sensor DHT22, conectado ao GPIO 4 na configuração documentada, para leitura de temperatura e umidade. A pinagem deve ser conferida na montagem física.",
      ],
    },
    {
      id: "firmware",
      title: "03 / arquitetura do firmware",
      paragraphs: [
        "O firmware é desenvolvido em C++ no ambiente Arduino para ESP32 e distribuído entre arquivos .ino. O arquivo principal inicializa os componentes e coordena o loop; os módulos de display e estados organizam a apresentação visual e as transições de comportamento.",
        "A biblioteca FluxGarage RoboEyes controla as expressões no OLED. A separação das responsabilidades facilita a evolução do protótipo, embora as transições e prioridades de renderização ainda exijam testes integrados.",
      ],
    },
    {
      id: "motion",
      title: "04 / detecção de movimento",
      paragraphs: [
        "O MPU6050 fornece leituras de aceleração que o firmware utiliza para reconhecer mudanças de movimento e selecionar reações do Pipoca.",
        "Os limiares e intervalos podem ser ajustados no bloco de configurações do sketch. O comportamento depende da calibração e das condições reais de uso.",
      ],
    },
    {
      id: "behavior",
      title: "05 / expressões e comportamento",
      paragraphs: [
        "O Pipoca apresenta expressões animadas e estados associados ao movimento e à inatividade. O projeto prevê reações a movimentos suaves, tédio após um período parado e uma animação de sono com Zzz.",
        "A lógica de estados permite tratar o robô como uma interface expressiva: sensores produzem eventos, e esses eventos influenciam a apresentação visual e sonora.",
      ],
    },
    {
      id: "climate",
      title: "06 / temperatura e umidade",
      paragraphs: [
        "A integração do DHT22 foi adicionada por uma contribuição ao repositório. A proposta é mostrar temperatura e umidade no OLED após aproximadamente 15 segundos sem movimento e retornar às expressões quando o dispositivo for movimentado.",
        "A implementação atual precisa de validação em hardware, especialmente na interação entre a tela climática e a animação de sono. A presença do código no repositório não equivale a um teste concluído.",
      ],
    },
    {
      id: "challenges",
      title: "07 / desafios técnicos",
      paragraphs: [
        "Um desafio importante é coordenar leituras de sensores, reprodução de áudio e animações sem comprometer a fluidez do OLED.",
        "Também é necessário manter consistentes as dimensões dos olhos, o estado interno do robô e a prioridade de cada tela. A integração climática tornou essas decisões mais visíveis.",
      ],
    },
    {
      id: "limitations",
      title: "08 / limitações e validação",
      paragraphs: [
        "O Pipoca permanece em desenvolvimento. Ainda é necessário confirmar a compilação com as versões das bibliotecas utilizadas, a pinagem da montagem e o comportamento completo no ESP32 físico.",
        "Entre os testes prioritários estão a transição entre inatividade, clima e sono, a legibilidade dos textos na tela de 128 × 64 pixels e a atualização das leituras do DHT22.",
      ],
    },
    {
      id: "next-steps",
      title: "09 / próximos passos",
      paragraphs: [
        "As próximas etapas incluem validar os estados em hardware, refinar as transições de animação, documentar as conexões e registrar fotografias ou capturas reais do protótipo.",
        "A evolução do projeto também pode servir como estudo prático de arquitetura de firmware, temporização não bloqueante e interfaces embarcadas.",
      ],
    },
  ],

  en: [
    {
      id: "overview",
      title: "01 / overview",
      paragraphs: [
        "PIPOCA is an experimental expressive robot built around an ESP32. Instead of a conventional interface, it uses an OLED display to represent internal states and respond to physical interaction.",
        "The project explores the integration of sensors, animation, audio, and state-driven logic in a resource-constrained embedded system.",
      ],
    },
    {
      id: "hardware",
      title: "02 / hardware",
      paragraphs: [
        "The prototype uses an ESP32 DevKit, a 128 × 64 SSD1306 OLED display, an MPU6050 motion sensor, and a passive buzzer for melodies.",
        "A recent contribution introduced support for a DHT22 temperature and humidity sensor, documented on GPIO 4. Actual wiring should be checked against the physical build.",
      ],
    },
    {
      id: "firmware",
      title: "03 / firmware architecture",
      paragraphs: [
        "The firmware is written in C++ using the Arduino environment for ESP32 and organized across .ino files. The main sketch initializes components and coordinates the loop, while display and state modules manage visual output and behavior transitions.",
        "FluxGarage RoboEyes provides the animated OLED expressions. Separating these responsibilities supports further development, although transitions and rendering priorities still require integrated testing.",
      ],
    },
    {
      id: "motion",
      title: "04 / motion detection",
      paragraphs: [
        "The MPU6050 provides acceleration readings used by the firmware to detect movement changes and select Pipoca's reactions.",
        "Thresholds and timing intervals can be adjusted in the sketch configuration. Actual behavior depends on calibration and physical conditions.",
      ],
    },
    {
      id: "behavior",
      title: "05 / expressions and behavior",
      paragraphs: [
        "Pipoca displays animated expressions and states linked to motion and inactivity. Planned behaviors include reactions to gentle movement, boredom after a period of inactivity, and a sleeping animation with Zzz.",
        "Its state logic turns the robot into an expressive interface: sensor events influence visual and audio output.",
      ],
    },
    {
      id: "climate",
      title: "06 / temperature and humidity",
      paragraphs: [
        "DHT22 integration was introduced through a repository contribution. The intended behavior is to display temperature and humidity after roughly 15 seconds without movement, then return to expressions when movement is detected.",
        "The current implementation still needs hardware validation, particularly where the climate screen interacts with the sleep animation. Merged code should not be mistaken for a fully tested feature.",
      ],
    },
    {
      id: "challenges",
      title: "07 / technical challenges",
      paragraphs: [
        "An important challenge is coordinating sensor reads, audio playback, and animation without compromising OLED responsiveness.",
        "Eye dimensions, internal state, and display priorities must also remain consistent. Adding the climate screen makes these design decisions especially important.",
      ],
    },
    {
      id: "limitations",
      title: "08 / limitations and validation",
      paragraphs: [
        "Pipoca remains in development. Compilation with specific library versions, physical wiring, and end-to-end behavior on the ESP32 still need to be verified.",
        "Priority tests include inactivity-to-climate-to-sleep transitions, text legibility on the 128 × 64 display, and DHT22 update intervals.",
      ],
    },
    {
      id: "next-steps",
      title: "09 / next steps",
      paragraphs: [
        "Next steps include validating states on hardware, refining animation transitions, documenting wiring, and capturing real photographs or screenshots of the prototype.",
        "Further work can also serve as a practical study of firmware architecture, non-blocking timing, and embedded interfaces.",
      ],
    },
  ],
};

/* =========================================
   PROJECT IMAGES
========================================= */

function Images({
  project,
  language,
}: {
  project: Project;
  language: Language;
}) {
  return (
    <>
      {project.images?.map((image) => (
        <figure
          className="technical-article-figure"
          key={image.src}
        >
          <img
            src={resolveImagePath(image.src)}
            alt={image.alt[language]}
            loading="lazy"
            decoding="async"
          />

          {image.caption && (
            <figcaption>
              {image.caption[language]}
            </figcaption>
          )}
        </figure>
      ))}
    </>
  );
}

/* =========================================
   PROJECT DETAIL
========================================= */

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { i18n } = useTranslation();

  const language: Language =
    i18n.resolvedLanguage === "en" ? "en" : "pt";

  const t = copy[language];

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    return (
      <section className="project-detail-page">
        <Link
          to="/projects"
          className="back-link"
        >
          {t.back}
        </Link>

        <p>{t.missing}</p>
      </section>
    );
  }

  const isNightjar =
    project.slug === "nightjar";

  const isCerberus =
    project.slug === "cerberus-scanner" ||
    project.slug === "cerberus-osint";

  const isPipoca =
    project.slug === "pipoca";

  const sections: Section[] = isNightjar
    ? nightjar[language]
    : isCerberus
      ? cerberus[language]
      : isPipoca
        ? pipoca[language]
        : [
            {
              id: "overview",
              title: `01 / ${t.overview}`,
              paragraphs: [
                project.description[language],
                project.content[language],
              ],
            },
            {
              id: "technologies",
              title: `02 / ${t.technologies}`,
              paragraphs: [],
            },
            ...(project.images?.length
              ? [
                  {
                    id: "evidence",
                    title: `03 / ${t.evidence}`,
                    paragraphs: [],
                  },
                ]
              : []),
          ];

  const allSections: Section[] =
    isNightjar || isCerberus || isPipoca
      ? [
          ...sections,

          ...(isPipoca && project.images?.length
            ? [
                {
                  id: "evidence",
                  title: `10 / ${t.evidence}`,
                  paragraphs: [
                    language === "pt"
                      ? "Registros visuais da montagem e da interface do protótipo."
                      : "Visual documentation of the prototype and its interface.",
                  ],
                },
              ]
            : []),

          {
            id: "technologies",
            title: isNightjar
              ? `08 / ${t.technologies}`
              : isCerberus
                ? `09 / ${t.technologies}`
                : `${
                    isPipoca && project.images?.length
                      ? "11"
                      : "10"
                  } / ${t.technologies}`,
            paragraphs: [],
          },
        ]
      : sections;

  const title = isNightjar
    ? "NIGHTJAR: The Stolen Session"
    : isCerberus
      ? "CERBERUS: The Three-Headed Recon"
      : isPipoca
        ? "PIPOCA: An Expressive ESP32 Robot"
        : project.name;

  const description = isNightjar
    ? language === "pt"
      ? "Investigação digital simulada, correlação de eventos e análise de evidências."
      : "Simulated digital investigation, event correlation and evidence analysis."
    : isCerberus
      ? language === "pt"
        ? "OSINT, reconhecimento de infraestrutura e análise de exposição digital."
        : "OSINT, infrastructure reconnaissance and digital exposure analysis."
      : isPipoca
        ? language === "pt"
          ? "Um robô expressivo que combina ESP32, sensores, animações e interação física."
          : "An expressive robot combining ESP32, sensors, animation, and physical interaction."
        : project.description[language];

  const kicker = isNightjar
    ? "DIGITAL FORENSICS / CASE FILE 001"
    : isCerberus
      ? "CYBERSECURITY / OSINT & RECON"
      : isPipoca
        ? "EMBEDDED SYSTEMS / INTERACTIVE HARDWARE"
        : "PROJECT ARCHIVE";

  return (
    <article className="project-detail-page technical-article-page">

      {/* TOP NAVIGATION */}

      <div className="technical-article-top">
        <Link
          to="/"
          className="technical-article-brand"
        >
          llohs
        </Link>

        <Link
          to="/projects"
          className="technical-article-back"
        >
          {t.back}
        </Link>
      </div>

      {/* BACKGROUND */}

      <div
        className={`technical-article-background${
          project.cover ? " has-cover" : ""
        }`}
        style={
          project.cover
            ? {
                backgroundImage: `url(${JSON.stringify(
                  resolveImagePath(project.cover)
                )})`,
              }
            : undefined
        }
        aria-hidden="true"
      />

      {/* MAIN CONTAINER */}

      <div className="technical-article-container">

        {/* HEADER */}

        <header className="technical-article-header">
          <span className="technical-article-kicker">
            {kicker}
          </span>

          <h1>{title}</h1>

          <div className="technical-article-meta">
            <span>
              {t.status[project.status]}
            </span>

            <span>·</span>

            <span>
              {project.technologies
                .slice(0, 3)
                .join(" / ")}
            </span>
          </div>

          <p className="technical-article-description">
            {description}
          </p>
        </header>

        {/* ARTICLE LAYOUT */}

        <div className="technical-article-layout">

          {/* CONTENT */}

          <div className="technical-article-content">
            {allSections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="technical-project-section"
              >
                <h2>{section.title}</h2>

                {section.paragraphs.map(
                  (paragraph, index) => (
                    <p key={index}>
                      {paragraph}
                    </p>
                  )
                )}

                {/* NIGHTJAR FINDINGS */}

                {isNightjar &&
                  section.id === "findings" && (
                    <>
                      <div className="technical-project-stats">
                        <div>
                          <strong>07</strong>
                          <span>{t.events}</span>
                        </div>

                        <div>
                          <strong>05</strong>
                          <span>{t.categories}</span>
                        </div>

                        <div>
                          <strong>02</strong>
                          <span>{t.findings}</span>
                        </div>
                      </div>

                      <div className="technical-project-finding">
                        <small>
                          MEDIUM / NJ-001
                        </small>

                        <h3>
                          {language === "pt"
                            ? "Execução de processo"
                            : "Process execution"}
                        </h3>

                        <p>
                          {language === "pt"
                            ? "InvoiceViewer.exe foi registrado na linha 3. O nome do processo não comprova atividade maliciosa."
                            : "InvoiceViewer.exe was recorded on line 3. The process name does not prove malicious activity."}
                        </p>
                      </div>

                      <div className="technical-project-finding">
                        <small>
                          MEDIUM / NJ-002
                        </small>

                        <h3>
                          {language === "pt"
                            ? "Acesso a arquivos e conexão de saída"
                            : "File access and outbound connection"}
                        </h3>

                        <p>
                          {language === "pt"
                            ? "Eventos nas linhas 4, 5 e 6 justificam análise adicional, mas não comprovam exfiltração."
                            : "Events on lines 4, 5 and 6 warrant further investigation but do not prove exfiltration."}
                        </p>
                      </div>
                    </>
                  )}

                {/* PROJECT IMAGES */}

                {section.id === "evidence" && (
                  <Images
                    project={project}
                    language={language}
                  />
                )}

                {/* TECHNOLOGIES */}

                {section.id === "technologies" && (
                  <div className="technical-article-tags">
                    {project.technologies.map(
                      (tech) => (
                        <span key={tech}>
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                )}
              </section>
            ))}

            {/* NIGHTJAR NOTICE */}

            {isNightjar && (
              <p className="technical-project-notice">
                {t.notice}
              </p>
            )}

            {/* PROJECT LINKS */}

            {(project.github || project.article) && (
              <div className="technical-article-footer">

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.github}
                  </a>
                )}

                {project.article && (
                  <Link
                    to={`/blog/${project.article}`}
                  >
                    {t.article}
                  </Link>
                )}
              </div>
            )}
          </div>

          {/* TABLE OF CONTENTS */}

          <aside className="technical-article-sidebar">
            <nav aria-label={t.toc}>
              <span className="technical-article-toc-title">
                {t.toc}
              </span>

              {allSections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                >
                  {section.title}
                </a>
              ))}
            </nav>
          </aside>

        </div>
      </div>
    </article>
  );
}
