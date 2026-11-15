
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../styles/CTI001Page.css";

const ASSETS = `${import.meta.env.BASE_URL}research/cti-001`;

type Lang = "pt" | "en";
type Localized = { pt: string; en: string };

const l = (pt: string, en: string): Localized => ({ pt, en });

const sections = [
  { id: "summary", number: "01", label: l("Resumo executivo", "Executive Summary"), category: l("VISÃO GERAL", "OVERVIEW") },
  { id: "background", number: "02", label: l("Contextualização", "Background"), category: l("CONTEXTO", "CONTEXT") },
  { id: "methodology", number: "03", label: l("Metodologia", "Methodology"), category: l("PROCESSO DE PESQUISA", "RESEARCH PROCESS") },
  { id: "findings", number: "04", label: l("Principais resultados", "Key Findings"), category: l("RESULTADOS ANALÍTICOS", "ANALYTICAL RESULTS") },
  { id: "financial", number: "05", label: l("Análise financeira", "Financial Analysis"), category: l("ANÁLISE DE DADOS", "DATA ANALYSIS") },
  { id: "recovery", number: "06", label: l("Análise de não recuperação", "Non-Recovery Analysis"), category: l("RESULTADOS FINANCEIROS", "FINANCIAL OUTCOMES") },
  { id: "assessment", number: "07", label: l("Avaliação de ameaças", "Threat Assessment"), category: l("AVALIAÇÃO DE INTELIGÊNCIA", "INTELLIGENCE ASSESSMENT") },
  { id: "limitations", number: "08", label: l("Limitações", "Limitations"), category: l("RESTRIÇÕES DA PESQUISA", "RESEARCH CONSTRAINTS") },
  { id: "recommendations", number: "09", label: l("Recomendações", "Recommendations"), category: l("CONSIDERAÇÕES DEFENSIVAS", "DEFENSIVE CONSIDERATIONS") },
  { id: "references", number: "10", label: l("Referências", "References"), category: l("FONTES", "SOURCES") },
];

const financialRows: [Localized, string][] = [
  [l("Valores contestados aceitos", "Accepted contested amounts"), "R$ 8,550,198,924.62"],
  [l("Devoluções integrais e parciais", "Full and partial refunds"), "R$ 1,002,358,168.37"],
  [l("Razão agregada calculada", "Calculated aggregate ratio"), "11.72%"],
  [l("Período de observação", "Observation period"), "13"],
];

const recoveryRows: [Localized, string, string][] = [
  [l("Saldo insuficiente", "Insufficient balance"), "R$ 4,271,217,699.30", "83.0%"],
  [l("Outros motivos", "Other reasons"), "R$ 678,077,066.80", "13.2%"],
  [l("Conta encerrada", "Closed account"), "R$ 198,484,080.14", "3.9%"],
];

function SectionHeading({
  id,
  lang,
}: {
  id: string;
  lang: Lang;
}) {
  const section = sections.find((s) => s.id === id)!;

  return (
    <div className="cti-section-heading" id={id}>
      <div className="cti-section-kicker">
        <span>{section.number}</span>
        <span>{section.category[lang]}</span>
      </div>
      <h2>{section.label[lang]}</h2>
    </div>
  );
}

function Figure({
  number,
  src,
  alt,
  caption,
  lang,
}: {
  number: string;
  src: string;
  alt: Localized;
  caption: Localized;
  lang: Lang;
}) {
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setImageError(false);
  }, [src]);

  return (
    <figure className="cti-report-figure">
      <div className="cti-figure-frame">
        {imageError ? (
          <div
            role="status"
            style={{
              padding: "32px 16px",
              textAlign: "center",
              color: "#999",
              overflowWrap: "anywhere",
            }}
          >
            {lang === "pt"
              ? "não foi possível carregar esta figura."
              : "unable to load this figure."}
            <p>{src}</p>
          </div>
        ) : (
          <img
            src={src}
            alt={alt[lang]}
            loading="lazy"
            decoding="async"
            onError={() => setImageError(true)}
            style={{
              display: "block",
              width: "100%",
              height: "auto",
              objectFit: "contain",
            }}
          />
        )}
      </div>

      <figcaption style={{ textTransform: "none" }}>
        <span style={{ textTransform: "lowercase" }}>
          {lang === "pt" ? "figura" : "figure"} {number}
        </span>
        <p style={{ textTransform: "lowercase" }}>
          {caption[lang]}
        </p>
        <small style={{ textTransform: "lowercase" }}>
          {lang === "pt"
            ? "fonte: banco central do brasil / análise llohs labs"
            : "source: banco central do brasil / llohs labs analysis"}
        </small>
      </figcaption>
    </figure>
  );
}

export default function CTI001Page() {
  const { i18n } = useTranslation();

  const lang: Lang = i18n.resolvedLanguage
    ?.toLowerCase()
    .startsWith("en")
    ? "en"
    : "pt";

  const tr = (pt: string, en: string) =>
    lang === "pt" ? pt : en;

  const [activeSection, setActiveSection] = useState("summary");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;

      setProgress(
        scrollable > 0
          ? Math.min(100, Math.max(0, (window.scrollY / scrollable) * 100))
          : 0
      );

      let current = "summary";

      for (const section of sections) {
        const element = document.getElementById(section.id);

        if (element && element.getBoundingClientRect().top <= 180) {
          current = section.id;
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className="cti-report">
      <div
        className="cti-reading-progress"
        style={{ width: `${progress}%` }}
      />

      <div className="cti-report-shell">
        <header className="cti-report-header">
          <Link to="/research" className="cti-back-link">
            <span aria-hidden="true">←</span>
            {tr("Voltar para pesquisas", "Back to Research")}
          </Link>

          <div className="cti-breadcrumb">
            <Link to="/">LLOHS</Link>
            <span>/</span>
            <Link to="/research">RESEARCH</Link>
            <span>/</span>
            <strong>CTI-001</strong>
          </div>

          <div className="cti-report-type">
            <span className="cti-red-square" />
            {tr(
              "INTELIGÊNCIA DE AMEAÇAS CIBERNÉTICAS / RELATÓRIO DE PESQUISA",
              "CYBER THREAT INTELLIGENCE / RESEARCH REPORT"
            )}
          </div>

          <h1>
            {tr("A cadeia de fraudes", "The Brazilian Pix")}
            <br />
            <em>{tr("do Pix no Brasil", "Fraud Supply Chain")}</em>
          </h1>

          <p className="cti-report-description">
            {tr(
              "Da comunicação inicial da suspeita de fraude à recuperação de recursos: uma análise fundamentada em evidências sobre contestações financeiras, resultados de devolução e indicadores de não recuperação no ecossistema brasileiro de pagamentos instantâneos.",
              "From the initial fraud report to the recovery of funds: an evidence-based examination of financial contestations, refund outcomes, and non-recovery indicators in Brazil's instant payment ecosystem."
            )}
          </p>

          <div className="cti-report-byline">
            <div>
              <span>{tr("AUTORIA", "AUTHOR")}</span>
              <strong>LLOHS LABS</strong>
            </div>

            <div>
              <span>{tr("PERÍODO ANALISADO", "RESEARCH PERIOD")}</span>
              <strong>
                {tr("SET 2025 — SET 2026", "SEP 2025 — SEP 2026")}
              </strong>
            </div>

            <div>
              <span>{tr("IDENTIFICADOR", "REPORT ID")}</span>
              <strong>CTI-001</strong>
            </div>

            <div>
              <span>{tr("STATUS", "STATUS")}</span>
              <strong className="cti-preliminary">
                {tr("PRELIMINAR", "PRELIMINARY")}
              </strong>
            </div>
          </div>
        </header>

        <div className="cti-report-layout">
          <aside className="cti-report-sidebar">
            <div className="cti-sidebar-inner">
              <div className="cti-sidebar-heading">
                <span>{tr("CONTEÚDO", "CONTENTS")}</span>
                <span>{tr("10 SEÇÕES", "10 SECTIONS")}</span>
              </div>

              <nav aria-label={tr("Sumário", "Table of contents")}>
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className={
                      activeSection === section.id
                        ? "cti-nav-active"
                        : ""
                    }
                  >
                    <span>{section.number}</span>
                    {section.label[lang]}
                  </a>
                ))}
              </nav>

              <div className="cti-sidebar-bottom">
                <span>{tr("STATUS DO DOCUMENTO", "DOCUMENT STATUS")}</span>
                <strong>{tr("PESQUISA PÚBLICA", "PUBLIC RESEARCH")}</strong>
                <small>
                  {tr(
                    "VERSÃO 0.1 / EM REVISÃO",
                    "VERSION 0.1 / UNDER REVIEW"
                  )}
                </small>
              </div>
            </div>
          </aside>

          <article className="cti-report-content">
            <section className="cti-content-section">
              <SectionHeading id="summary" lang={lang} />

              <p>
                {tr(
                  "O Pix tornou-se um componente central da infraestrutura financeira brasileira. Sua ampla adoção também torna a prevenção de fraudes, a contestação de transações e a recuperação de recursos áreas relevantes para a pesquisa em segurança.",
                  "Brazil's Pix instant payment system has become a central component of the country's financial infrastructure. Its widespread adoption also makes fraud prevention, transaction contestation, and fund recovery important areas of security research."
                )}
              </p>

              <p>
                {tr(
                  "Este relatório examina estatísticas públicas do Banco Central do Brasil relacionadas a suspeitas de fraude e ao Mecanismo Especial de Devolução (MED).",
                  "This report examines publicly available statistics from Banco Central do Brasil associated with suspected fraud and the Special Refund Mechanism (MED)."
                )}
              </p>

              <p>
                {tr(
                  "A investigação abrange 13 registros mensais consecutivos, de setembro de 2025 a setembro de 2026, com atenção especial às contestações aceitas, aos recursos devolvidos e aos motivos registrados para a não recuperação de valores.",
                  "The investigation covers 13 consecutive monthly records, from September 2025 to September 2026, with particular attention to accepted contestations, returned funds, and reported reasons for non-recovery."
                )}
              </p>

              <div className="cti-summary-highlight">
                <span>{tr("OBSERVAÇÃO PRINCIPAL", "KEY OBSERVATION")}</span>
                <p>
                  {tr(
                    "O conjunto de dados analisado registra aproximadamente R$ 8,55 bilhões em valores de contestações aceitas e R$ 1,00 bilhão em devoluções integrais e parciais.",
                    "Approximately R$ 8.55 billion in accepted contested amounts and R$ 1.00 billion in full and partial refunds were recorded in the analyzed dataset."
                  )}
                </p>
              </div>

              <p>
                {tr(
                  "Esses números não equivalem ao total de ocorrências de fraude nem ao prejuízo total decorrente de fraudes no Brasil. Eles descrevem indicadores específicos presentes no conjunto de dados do MED.",
                  "These figures are not equivalent to the total number of fraud incidents or total fraud-related losses in Brazil. They describe specific indicators within the available MED dataset."
                )}
              </p>
            </section>

            <section className="cti-content-section">
              <SectionHeading id="background" lang={lang} />

              <h3>{tr("2.1 — O ecossistema Pix", "2.1 — The Pix ecosystem")}</h3>

              <p>
                {tr(
                  "O Pix é a infraestrutura brasileira de pagamentos instantâneos, operada sob o arcabouço estabelecido pelo Banco Central do Brasil. Permite transferências eletrônicas e pagamentos entre instituições participantes.",
                  "Pix is Brazil's instant payment infrastructure, operated under the framework established by Banco Central do Brasil. It enables electronic transfers and payments between participating institutions."
                )}
              </p>

              <p>
                {tr(
                  "Como as transações são processadas rapidamente, casos de suspeita de fraude levantam questões operacionais sobre comunicação de ocorrências, saldos disponíveis, rastreamento de transações e possibilidade de recuperação dos recursos.",
                  "Because transactions are processed rapidly, suspected fraud cases raise operational questions about reporting, account balances, transaction tracing, and the possibility of recovering funds."
                )}
              </p>

              <h3>
                {tr(
                  "2.2 — O Mecanismo Especial de Devolução",
                  "2.2 — The Special Refund Mechanism"
                )}
              </h3>

              <p>
                {tr(
                  "O MED estabelece um procedimento para o tratamento de casos elegíveis envolvendo suspeitas de fraude e determinadas falhas operacionais.",
                  "The MED provides a framework for handling eligible cases involving suspected fraud and certain operational failures."
                )}
              </p>

              <p>
                {tr(
                  "Nesta investigação, as estatísticas do MED são tratadas como indicadores administrativos e financeiros, e não como evidência direta de uma operação criminosa específica.",
                  "For this investigation, MED statistics are treated as administrative and financial indicators rather than direct evidence of a specific criminal operation."
                )}
              </p>
            </section>

            <section className="cti-content-section">
              <SectionHeading id="methodology" lang={lang} />

              <p>
                {tr(
                  "A pesquisa utiliza informações publicamente acessíveis disponibilizadas pela infraestrutura de dados abertos do Banco Central do Brasil.",
                  "The research uses publicly accessible information obtained from the Banco Central do Brasil open data infrastructure."
                )}
              </p>

              <div className="cti-method-box">
                <div>
                  <span>{tr("PROVEDOR DOS DADOS", "DATA PROVIDER")}</span>
                  <strong>Banco Central do Brasil</strong>
                </div>
                <div>
                  <span>{tr("RECURSO DE DADOS", "DATA RESOURCE")}</span>
                  <code>EstatisticasFraudesPix</code>
                </div>
                <div>
                  <span>{tr("MÉTODO DE COLETA", "COLLECTION METHOD")}</span>
                  <strong>Public OData API / Python</strong>
                </div>
                <div>
                  <span>{tr("OBSERVAÇÕES", "OBSERVATIONS")}</span>
                  <strong>{tr("13 registros mensais", "13 monthly records")}</strong>
                </div>
              </div>

              <h3>
                {tr("3.1 — Aquisição de dados", "3.1 — Data acquisition")}
              </h3>

              <p>
                {tr(
                  "O processo de coleta envolveu a inspeção dos metadados da API, a identificação do recurso relevante, a recuperação dos registros disponíveis e a preservação local da resposta original.",
                  "The collection process involved inspecting API metadata, identifying the relevant resource, retrieving available records, and preserving the original response locally."
                )}
              </p>

              <h3>
                {tr("3.2 — Processamento dos dados", "3.2 — Data processing")}
              </h3>

              <p>
                {tr(
                  "Python e pandas foram utilizados para validação, agregação e cálculos financeiros. Matplotlib foi utilizado para gerar as figuras apresentadas neste relatório.",
                  "Python and pandas were used for data validation, aggregation, and financial calculations. Matplotlib was used to generate the figures presented throughout this report."
                )}
              </p>

              <h3>
                {tr("3.3 — Qualidade dos dados", "3.3 — Data quality")}
              </h3>

              <p>
                {tr(
                  "Três registros apresentam pequenas divergências entre o total de contestações e a soma das contestações aceitas e rejeitadas.",
                  "Three records contain minor discrepancies between the total number of contestations and the sum of accepted and rejected contestations."
                )}
              </p>

              <div className="cti-table-scroll">
                <table className="cti-data-table">
                  <thead>
                    <tr>
                      <th>{tr("MÊS", "MONTH")}</th>
                      <th>{tr("DIFERENÇA", "DIFFERENCE")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{tr("Fevereiro de 2026", "February 2026")}</td>
                      <td>-1</td>
                    </tr>
                    <tr>
                      <td>{tr("Abril de 2026", "April 2026")}</td>
                      <td>-4</td>
                    </tr>
                    <tr>
                      <td>{tr("Maio de 2026", "May 2026")}</td>
                      <td>-2</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                {tr(
                  "Os valores originais foram preservados sem modificações manuais. A causa dessas divergências ainda não foi estabelecida.",
                  "Original values were retained without manual modification. The cause of these discrepancies has not been established."
                )}
              </p>
            </section>

            <section className="cti-content-section">
              <SectionHeading id="findings" lang={lang} />

              <div className="cti-finding-header">
                <span>CTI-001-F01</span>
                <span>
                  {tr("RESULTADO PRELIMINAR", "PRELIMINARY FINDING")}
                </span>
              </div>

              <h3>
                {tr(
                  "Saldo insuficiente predomina entre os motivos registrados de não devolução",
                  "Insufficient balance dominates recorded non-refund reasons"
                )}
              </h3>

              <p>
                {tr(
                  "O conjunto de dados registra aproximadamente R$ 4,27 bilhões em valores associados à não devolução por insuficiência de saldo.",
                  "The dataset records approximately R$ 4.27 billion in amounts associated with non-refund due to insufficient balance."
                )}
              </p>

              <p>
                {tr(
                  "Esse valor representa aproximadamente 83,0% da soma das três categorias examinadas: saldo insuficiente, conta encerrada e outros motivos.",
                  "This accounts for approximately 83.0% of the combined amounts in three examined categories: insufficient balance, closed account, and other reasons."
                )}
              </p>

              <div className="cti-analysis-note">
                <strong>
                  {tr("RESSALVA ANALÍTICA", "ANALYTICAL CAUTION")}
                </strong>
                <p>
                  {tr(
                    "A predominância de saldo insuficiente não permite determinar como os recursos foram movimentados, se algum titular de conta agiu de forma maliciosa ou quais métodos criminosos foram empregados.",
                    "The predominance of insufficient balance does not establish how funds were moved, whether any specific account holder acted maliciously, or which criminal methods were involved."
                  )}
                </p>
              </div>
            </section>

            <section className="cti-content-section">
              <SectionHeading id="financial" lang={lang} />

              <p>
                {tr(
                  "Os registros disponíveis mostram variações mensais expressivas tanto nos valores de contestações aceitas quanto nos montantes devolvidos.",
                  "The available records show substantial monthly variation in both accepted contested amounts and the value of refunds."
                )}
              </p>

              <Figure
                number="01"
                src={`${ASSETS}/med_contestacoes_mensais.png`}
                alt={l(
                  "Contestações mensais do Pix entre setembro de 2025 e setembro de 2026",
                  "Monthly Pix contestations from September 2025 to September 2026"
                )}
                caption={l(
                  "Volume mensal de contestações do Pix no conjunto de dados analisado.",
                  "Monthly volume of Pix contestations in the analyzed dataset."
                )}
                lang={lang}
              />

              <h3>
                {tr("5.1 — Agregados financeiros", "5.1 — Financial aggregates")}
              </h3>

              <div className="cti-table-scroll">
                <table className="cti-data-table">
                  <thead>
                    <tr>
                      <th>{tr("INDICADOR", "INDICATOR")}</th>
                      <th>{tr("VALOR", "VALUE")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {financialRows.map(([label, value]) => (
                      <tr key={label.en}>
                        <td>{label[lang]}</td>
                        <td>
                          {label.en === "Observation period"
                            ? tr("13 registros mensais", "13 monthly records")
                            : label.en === "Calculated aggregate ratio"
                              ? tr("11,72%", "11.72%")
                              : value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <Figure
                number="02"
                src={`${ASSETS}/med_financial_analysis.png`}
                alt={l(
                  "Comparação entre valores contestados aceitos e valores devolvidos",
                  "Accepted contested amounts compared with refund values"
                )}
                caption={l(
                  "Comparação entre valores de contestações aceitas e a soma das devoluções integrais e parciais, em milhões de reais.",
                  "Comparison of accepted contested amounts and combined full and partial refunds, expressed in millions of Brazilian reais."
                )}
                lang={lang}
              />

              <p>
                {tr(
                  "A razão agregada calculada entre os valores devolvidos e os valores das contestações aceitas é de 11,72%.",
                  "The calculated aggregate ratio between returned values and accepted contested amounts is 11.72%."
                )}
              </p>

              <p>
                {tr(
                  "Esse indicador foi calculado nesta pesquisa e não deve ser interpretado automaticamente como uma taxa oficial consolidada de recuperação do MED.",
                  "This is a research-derived calculation. It should not automatically be interpreted as an official consolidated MED recovery rate."
                )}
              </p>
            </section>

            <section className="cti-content-section">
              <SectionHeading id="recovery" lang={lang} />

              <p>
                {tr(
                  "Três categorias registradas foram examinadas para compreender a distribuição dos valores associados às devoluções não realizadas.",
                  "Three reported categories were examined to understand the distribution of values associated with unsuccessful refunds."
                )}
              </p>

              <Figure
                number="03"
                src={`${ASSETS}/med_non_recovery.png`}
                alt={l(
                  "Valores de não devolução por motivo registrado",
                  "Reported non-refund values by reason"
                )}
                caption={l(
                  "Valores agregados associados a saldo insuficiente, contas encerradas e outros motivos de não devolução.",
                  "Aggregated values associated with insufficient balance, closed accounts, and other non-refund reasons."
                )}
                lang={lang}
              />

              <div className="cti-table-scroll">
                <table className="cti-data-table">
                  <thead>
                    <tr>
                      <th>{tr("MOTIVO REGISTRADO", "REPORTED REASON")}</th>
                      <th>{tr("VALOR", "VALUE")}</th>
                      <th>{tr("PARTICIPAÇÃO", "SHARE")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recoveryRows.map(([reason, value, share]) => (
                      <tr key={reason.en}>
                        <td>{reason[lang]}</td>
                        <td>{value}</td>
                        <td>
                          {lang === "pt"
                            ? share.replace(".", ",")
                            : share}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p>
                {tr(
                  "A soma dessas três categorias corresponde a aproximadamente R$ 5,15 bilhões. Um campo separado registra cerca de R$ 2,40 bilhões em valores residuais não devolvidos.",
                  "The sum of these three categories is approximately R$ 5.15 billion. A separate field reports approximately R$ 2.40 billion in residual non-refunded amounts."
                )}
              </p>

              <p>
                {tr(
                  "O valor residual não foi somado às três categorias porque a relação contábil entre esses indicadores ainda não foi verificada.",
                  "The residual field is not added to the three categories because their accounting relationship has not yet been verified."
                )}
              </p>
            </section>

            <section className="cti-content-section">
              <SectionHeading id="assessment" lang={lang} />

              <p>
                {tr(
                  "As estatísticas observadas demonstram a dimensão de indicadores específicos de contestação e devolução, mas não revelam, isoladamente, a estrutura do ecossistema criminoso associado às suspeitas de fraude.",
                  "The observed statistics establish the scale of specific contestation and refund indicators, but do not independently reveal the structure of the criminal ecosystem behind suspected fraud."
                )}
              </p>

              <p>
                {tr(
                  "A compreensão de uma cadeia de fraudes exigiria evidências adicionais capazes de relacionar métodos de contato inicial, engenharia social, infraestrutura de contas, fluxos transacionais e destinos dos recursos.",
                  "Understanding a fraud supply chain would require additional evidence connecting initial contact methods, social engineering, account infrastructure, transaction flows, and fund destinations."
                )}
              </p>

              <div className="cti-analysis-note">
                <strong>
                  {tr("STATUS DE ATRIBUIÇÃO", "ATTRIBUTION STATUS")}
                </strong>
                <p>
                  {tr(
                    "Este relatório não atribui atividades a agentes de ameaça, organizações criminosas ou indivíduos específicos. Não foi estabelecida atribuição em nível de infraestrutura.",
                    "No threat actor, criminal organization, or individual is attributed in this report. No infrastructure-level attribution has been established."
                  )}
                </p>
              </div>

              <p>
                {tr(
                  "Pesquisas futuras de OSINT poderão examinar técnicas de fraude documentadas publicamente e respostas defensivas, mantendo esses resultados claramente separados das estatísticas agregadas aqui analisadas.",
                  "Further OSINT research may examine publicly documented fraud techniques and defensive responses, with findings clearly separated from the aggregate statistics analyzed here."
                )}
              </p>
            </section>

            <section className="cti-content-section">
              <SectionHeading id="limitations" lang={lang} />

              <ul className="cti-report-list">
                {[
                  l(
                    "As contestações do MED não representam todas as ocorrências de fraude envolvendo Pix.",
                    "MED contestations do not represent all Pix fraud incidents."
                  ),
                  l(
                    "Contestações aceitas não constituem uma medida completa de atividades criminosas comprovadas.",
                    "Accepted contestations are not a complete measure of proven criminal activity."
                  ),
                  l(
                    "Estatísticas agregadas não permitem identificar autores individuais.",
                    "Aggregate statistics cannot identify individual perpetrators."
                  ),
                  l(
                    "As definições dos dados e possíveis revisões exigem verificação contínua.",
                    "Data definitions and potential revisions require continued verification."
                  ),
                  l(
                    "A relação entre os valores residuais e as categorias de não devolução permanece sem verificação.",
                    "The relationship between residual values and non-refund categories remains unverified."
                  ),
                  l(
                    "Não foram estabelecidas explicações causais para os padrões financeiros observados.",
                    "Causal explanations for the observed financial patterns have not been established."
                  ),
                ].map((item) => (
                  <li key={item.en}>{item[lang]}</li>
                ))}
              </ul>
            </section>

            <section className="cti-content-section">
              <SectionHeading id="recommendations" lang={lang} />

              <p>
                {tr(
                  "As considerações a seguir são recomendações defensivas gerais. Não são apresentadas como intervenções cuja eficácia tenha sido demonstrada pelo conjunto de dados analisado.",
                  "The following are general defensive considerations. They are not presented as interventions proven effective by this dataset."
                )}
              </p>

              <ul className="cti-report-list">
                {[
                  l(
                    "Incentivar a comunicação imediata de transações suspeitas pelos canais oficiais das instituições financeiras.",
                    "Encourage prompt reporting of suspected fraudulent transactions through official financial institution channels."
                  ),
                  l(
                    "Ampliar a conscientização pública sobre técnicas de falsificação de identidade e engenharia social.",
                    "Improve public awareness of impersonation and social engineering techniques."
                  ),
                  l(
                    "Apoiar o monitoramento consistente de indicadores de fraude e resultados de devolução.",
                    "Support consistent monitoring of fraud indicators and refund outcomes."
                  ),
                  l(
                    "Preservar evidências e manter documentação clara das ocorrências comunicadas.",
                    "Preserve evidence and maintain clear documentation of reported incidents."
                  ),
                  l(
                    "Evitar o compartilhamento de informações financeiras ou pessoais sensíveis em interações não solicitadas.",
                    "Avoid sharing sensitive financial or personal information during unsolicited interactions."
                  ),
                ].map((item) => (
                  <li key={item.en}>{item[lang]}</li>
                ))}
              </ul>
            </section>

            <section className="cti-content-section">
              <SectionHeading id="references" lang={lang} />

              <div className="cti-source">
                <span>[01]</span>
                <div>
                  <strong>Banco Central do Brasil</strong>
                  <p>
                    {tr(
                      "Pix — Portal de Dados Abertos",
                      "Pix — Open Data Portal"
                    )}
                  </p>
                  <a
                    href="https://dadosabertos.bcb.gov.br/dataset/pix"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    dadosabertos.bcb.gov.br ↗
                  </a>
                </div>
              </div>

              <div className="cti-source">
                <span>[02]</span>
                <div>
                  <strong>Banco Central do Brasil</strong>
                  <p>
                    {tr(
                      "Serviço OData do Pix",
                      "Pix OData Service"
                    )}
                  </p>
                  <a
                    href="https://olinda.bcb.gov.br/olinda/servico/Pix_DadosAbertos/versao/v1/odata/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    olinda.bcb.gov.br ↗
                  </a>
                </div>
              </div>

              <div className="cti-report-end">
                <span>{tr("FIM DO RELATÓRIO", "END OF REPORT")}</span>
                <strong>CTI-001</strong>
                <p>
                  {tr(
                    "LLOHS LABS — PESQUISA TÉCNICA INDEPENDENTE",
                    "LLOHS LABS — INDEPENDENT TECHNICAL RESEARCH"
                  )}
                </p>
              </div>
            </section>
          </article>
        </div>
      </div>
    </div>
  );
}
