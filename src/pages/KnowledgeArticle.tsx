
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import {
  knowledgePosts,
  type KnowledgeLanguage,
} from "../data/knowledge";

import type { KnowledgeImage } from "../data/knowledge.types";

import "../styles/knowledge.css";

/* =========================================
   TYPES
========================================= */

type ImageViewer = {
  src: string;
  alt: string;
  caption?: string;
};

/* =========================================
   IMAGE PATH RESOLVER
========================================= */

function resolveImagePath(src: string): string {
  const path = src.trim();

  if (!path) return "";

  // Mantém URLs externas e imagens incorporadas.
  if (
    /^(https?:)?\/\//i.test(path) ||
    /^(data|blob):/i.test(path)
  ) {
    return path;
  }

  const base = import.meta.env.BASE_URL || "/";

  // Evita duplicar o prefixo do GitHub Pages.
  if (path.startsWith(base)) {
    return path;
  }

  // Remove barras iniciais.
  const normalized = path.replace(/^\/+/, "");

  // A pasta public é servida na raiz do site.
  const withoutPublic = normalized.replace(
    /^public\//,
    ""
  );

  return `${base}${withoutPublic}`;
}

/* =========================================
   ARTICLE IMAGE
========================================= */

function ArticleImage({
  image,
  language,
  onOpen,
  priority = false,
}: {
  image: KnowledgeImage;
  language: KnowledgeLanguage;
  onOpen: (image: ImageViewer) => void;
  priority?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  const imageSrc = resolveImagePath(image.src);

  useEffect(() => {
    setFailed(false);
  }, [imageSrc]);

  const alt = image.alt[language];
  const caption = image.caption?.[language];

  return (
    <figure className="knowledge-article-figure">
      {!failed ? (
        <button
          type="button"
          className="knowledge-article-image-button"
          onClick={() =>
            onOpen({
              src: imageSrc,
              alt,
              caption,
            })
          }
          aria-label={
            language === "pt"
              ? `Ampliar imagem: ${alt}`
              : `Enlarge image: ${alt}`
          }
        >
          <img
            src={imageSrc}
            alt={alt}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            onError={() => setFailed(true)}
          />

          <span
            className="knowledge-image-zoom"
            aria-hidden="true"
          >
            ⤢
          </span>
        </button>
      ) : (
        <div className="knowledge-image-error">
          <span>
            {language === "pt"
              ? "Imagem indisponível"
              : "Image unavailable"}
          </span>

          <small>{alt}</small>
        </div>
      )}

      {caption && (
        <figcaption className="knowledge-image-caption">
          <span>{caption}</span>
        </figcaption>
      )}
    </figure>
  );
}

/* =========================================
   KNOWLEDGE ARTICLE
========================================= */

export default function KnowledgeArticle() {
  const { slug } = useParams<{ slug: string }>();
  const { i18n } = useTranslation();

  const language: KnowledgeLanguage =
    i18n.resolvedLanguage === "en" ? "en" : "pt";

  const [viewer, setViewer] =
    useState<ImageViewer | null>(null);

  const post = knowledgePosts.find(
    (item) => item.slug === slug
  );

  /* =========================================
     LIGHTBOX EFFECTS
  ========================================= */

  useEffect(() => {
    setViewer(null);
  }, [slug]);

  useEffect(() => {
    if (!viewer) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setViewer(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [viewer]);

  /* =========================================
     DATE FORMAT
  ========================================= */

  const formatDate = (date: string) =>
    new Intl.DateTimeFormat(
      language === "pt" ? "pt-BR" : "en-US",
      {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC",
      }
    ).format(new Date(`${date}T12:00:00Z`));

  /* =========================================
     NOT FOUND
  ========================================= */

  if (!post) {
    return (
      <div className="knowledge-page">
        <Link
          to="/knowledge"
          className="knowledge-back"
        >
          ← {language === "pt" ? "voltar" : "back"}
        </Link>

        <p>
          {language === "pt"
            ? "publicação não encontrada."
            : "entry not found."}
        </p>
      </div>
    );
  }

  /* =========================================
     RENDER
  ========================================= */

  return (
    <article className="knowledge-article-page">

      {/* TOP NAVIGATION */}

      <div className="knowledge-article-top">
        <Link to="/" className="knowledge-brand">
          llohs
        </Link>

        <Link
          to="/knowledge"
          className="knowledge-back"
        >
          ←{" "}
          {language === "pt"
            ? "voltar para knowledge"
            : "back to knowledge"}
        </Link>
      </div>

      <div className="knowledge-article-container">

        {/* HEADER */}

        <header className="knowledge-article-header">
          <span className="knowledge-eyebrow">
            KNOWLEDGE /{" "}
            {post.category.toUpperCase()}
          </span>

          <h1>{post.title[language]}</h1>

          <p>{post.description[language]}</p>

          <div className="knowledge-article-meta">
            <time dateTime={post.date}>
              {formatDate(post.date)}
            </time>

            <span>·</span>

            <span>
              {post.readingMinutes} MIN{" "}
              {language === "pt"
                ? "DE LEITURA"
                : "READ"}
            </span>
          </div>
        </header>

        {/* COVER IMAGE */}

        {post.cover && (
          <div className="knowledge-article-cover">
            <ArticleImage
              image={post.cover}
              language={language}
              onOpen={setViewer}
              priority
            />
          </div>
        )}

        {/* ARTICLE LAYOUT */}

        <div className="knowledge-article-layout">

          {/* MAIN CONTENT */}

          <div className="knowledge-article-content">
            {post.sections.map((section, index) => (
              <section
                key={section.id ?? index}
                id={`section-${index + 1}`}
                className="knowledge-article-section"
              >
                <h2>
                  {String(index + 1).padStart(
                    2,
                    "0"
                  )}{" "}
                  / {section.heading[language]}
                </h2>

                {section.paragraphs.map(
                  (paragraph, paragraphIndex) => (
                    <p key={paragraphIndex}>
                      {paragraph[language]}
                    </p>
                  )
                )}

                {/* SECTION IMAGE */}

                {section.image && (
                  <ArticleImage
                    image={section.image}
                    language={language}
                    onOpen={setViewer}
                  />
                )}
              </section>
            ))}

            {/* REFERENCES */}

            {post.references &&
              post.references.length > 0 && (
                <section className="knowledge-references">
                  <h2>
                    {language === "pt"
                      ? "Referências"
                      : "References"}
                  </h2>

                  <ol>
                    {post.references.map(
                      (reference, index) => (
                        <li
                          key={`${reference.url}-${index}`}
                        >
                          <a
                            href={reference.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {reference.title}
                          </a>

                          {reference.authors && (
                            <span>
                              {reference.authors}
                            </span>
                          )}

                          {reference.year && (
                            <span>
                              {reference.year}
                            </span>
                          )}
                        </li>
                      )
                    )}
                  </ol>
                </section>
              )}

            {/* TAGS */}

            <div className="knowledge-article-tags">
              {post.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <Link
              to="/knowledge"
              className="knowledge-back knowledge-bottom-back"
            >
              ←{" "}
              {language === "pt"
                ? "voltar ao arquivo"
                : "back to archive"}
            </Link>
          </div>

          {/* COLLAPSIBLE TABLE OF CONTENTS */}

          <aside className="knowledge-article-sidebar">
            <details className="knowledge-article-toc">
              <summary className="knowledge-article-toc-toggle">
                <span>
                  {language === "pt"
                    ? "NESTA PÁGINA"
                    : "ON THIS PAGE"}
                </span>

                <span
                  className="knowledge-article-toc-chevron"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>

              <nav
                aria-label={
                  language === "pt"
                    ? "Nesta página"
                    : "On this page"
                }
              >
                {post.sections.map(
                  (section, index) => (
                    <a
                      key={section.id ?? index}
                      href={`#section-${index + 1}`}
                    >
                      {String(index + 1).padStart(
                        2,
                        "0"
                      )}{" "}
                      / {section.heading[language]}
                    </a>
                  )
                )}
              </nav>
            </details>
          </aside>

        </div>
      </div>

     
        {/* IMAGE LIGHTBOX */}

        {viewer && (
          <div
            className="knowledge-lightbox"
            role="presentation"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setViewer(null);
              }
            }}
          >
            <div
              className="knowledge-lightbox-dialog"
              role="dialog"
              aria-modal="true"
              aria-label={
                language === "pt"
                  ? "Visualização ampliada"
                  : "Expanded image view"
              }
            >
              <button
                type="button"
                className="knowledge-lightbox-close"
                onClick={() => setViewer(null)}
                aria-label={
                  language === "pt"
                    ? "Fechar imagem"
                    : "Close image"
                }
                autoFocus
              >
                ×
              </button>

              <img
                src={viewer.src}
                alt={viewer.alt}
              />

              {viewer.caption && (
                <div className="knowledge-lightbox-caption">
                  <p>{viewer.caption}</p>
                </div>
              )}
            </div>
          </div>
        )}
      </article>
  );
}
