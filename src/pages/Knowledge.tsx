
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import {
  knowledgePosts,
  type KnowledgeCategory,
  type KnowledgeLanguage,
} from "../data/knowledge";

import "../styles/knowledge.css";

const categories: Array<KnowledgeCategory | "all"> = [
  "all",
  "computer science",
  "cybersecurity",
  "electronics",
  "programming",
  "science",
  "miscellaneous",
];

const categoryLabels: Record<
  KnowledgeCategory | "all",
  { pt: string; en: string }
> = {
  all: { pt: "todos", en: "all" },
  "computer science": {
    pt: "computação",
    en: "computer science",
  },
  cybersecurity: {
    pt: "cibersegurança",
    en: "cybersecurity",
  },
  electronics: {
    pt: "eletrônica",
    en: "electronics",
  },
  programming: {
    pt: "programação",
    en: "programming",
  },
  science: {
    pt: "ciência",
    en: "science",
  },
  miscellaneous: {
    pt: "diversos",
    en: "miscellaneous",
  },
};

export default function Knowledge() {
  const { i18n } = useTranslation();

  const language: KnowledgeLanguage =
    i18n.resolvedLanguage === "en" ? "en" : "pt";

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<
    KnowledgeCategory | "all"
  >("all");

  const posts = useMemo(() => {
    const query = search.trim().toLocaleLowerCase();

    return [...knowledgePosts]
      .filter((post) => {
        const matchesCategory =
          category === "all" ||
          post.category === category;

        const searchableText = [
          post.title[language],
          post.description[language],
          post.category,
          ...post.tags,
        ]
          .join(" ")
          .toLocaleLowerCase();

        return (
          matchesCategory &&
          searchableText.includes(query)
        );
      })
      .sort((a, b) => b.date.localeCompare(a.date));
  }, [search, category, language]);

  const formatDate = (date: string) =>
    new Intl.DateTimeFormat(
      language === "pt" ? "pt-BR" : "en-US",
      {
        year: "numeric",
        month: "short",
        day: "2-digit",
        timeZone: "UTC",
      }
    ).format(new Date(`${date}T12:00:00Z`));

  return (
    <div className="knowledge-page">
      <header className="knowledge-header">
        <div className="knowledge-eyebrow">
          LLOHS / ARCHIVE / KNOWLEDGE
        </div>

        <h1>
          knowledge
          <span className="knowledge-dot">.</span>
        </h1>

        <p>
          {language === "pt"
            ? "Uma coleção aberta de ideias, conceitos, descobertas e assuntos que valem a pena explorar."
            : "An open collection of ideas, concepts, discoveries and subjects worth exploring."}
        </p>
      </header>

      <div className="knowledge-toolbar">
        <label className="knowledge-search">
          <span className="knowledge-search-symbol">
            ⌕
          </span>

          <input
            type="search"
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
            placeholder={
              language === "pt"
                ? "buscar no arquivo..."
                : "search the archive..."
            }
            aria-label={
              language === "pt"
                ? "Buscar publicações"
                : "Search publications"
            }
          />
        </label>

        <div className="knowledge-filters">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              className={
                category === item ? "active" : ""
              }
              onClick={() => setCategory(item)}
            >
              {categoryLabels[item][language]}
            </button>
          ))}
        </div>
      </div>

      <div className="knowledge-feed-heading">
        <span>
          {language === "pt"
            ? "PUBLICAÇÕES RECENTES"
            : "LATEST ENTRIES"}
        </span>

        <span>
          {String(posts.length).padStart(2, "0")}{" "}
          {language === "pt"
            ? "REGISTROS"
            : "ENTRIES"}
        </span>
      </div>

      <div className="knowledge-feed">
        {posts.map((post, index) => (
          <Link
            key={post.slug}
            to={`/knowledge/${post.slug}`}
            className="knowledge-entry"
          >

            <div className="knowledge-entry-content">
              <div className="knowledge-entry-top">
                <span>
                  {String(index + 1).padStart(
                    2,
                    "0"
                  )}{" "}
                  / {post.category.toUpperCase()}
                </span>

                <time dateTime={post.date}>
                  {formatDate(post.date)}
                </time>
              </div>

              <h2>{post.title[language]}</h2>

              <p>{post.description[language]}</p>

              <div className="knowledge-entry-bottom">
                <span>
                  {post.readingMinutes} MIN{" "}
                  {language === "pt"
                    ? "DE LEITURA"
                    : "READ"}
                </span>

                <span aria-hidden="true">↗</span>
              </div>
            </div>
          </Link>
        ))}

        {posts.length === 0 && (
          <p className="knowledge-empty">
            {language === "pt"
              ? "Nenhuma publicação encontrada."
              : "No entries found."}
          </p>
        )}
      </div>
    </div>
  );
}
