
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import {
  knowledgePosts,
  type KnowledgeLanguage,
} from "../data/knowledge";

import type { KnowledgeImage } from "../data/knowledge.types";

import "../styles/knowledge.css";

type ImageViewer = {
  src: string;
  alt: string;
  caption?: string;
  credit?: string;
};

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

  useEffect(() => {
    setFailed(false);
  }, [image.src]);

  if (failed) return null;

  const alt = image.alt[language];
  const caption = image.caption?.[language];

  return (
    <figure className="knowledge-article-figure">
      <button
        type="button"
        className="knowledge-article-image-button"
        onClick={() =>
          onOpen({
            src: image.src,
            alt,
            caption,
            credit: image.credit,
          })
        }
        aria-label={
          language === "pt"
            ? `Ampliar imagem: ${alt}`
            : `Enlarge image: ${alt}`
        }
      >
        <img
          src={image.src}
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

      {(caption || image.credit) && (
        <figcaption className="knowledge-image-caption">
          {caption && <span>{caption}</span>}

          {image.credit && (
            <small>
              {language === "pt"
                ? "Crédito: "
                : "Credit: "}
              {image.sourceUrl ? (
                <a
                  href={image.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {image.credit}
                </a>
              ) : (
                image.credit
              )}
            </small>
          )}
        </figcaption>
      )}
    </figure>
  );
}

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

  return (
    <article className="knowledge-article-page">
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

        <div className="knowledge-article-layout">
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

                {section.image && (
                  <ArticleImage
                    image={section.image}
                    language={language}
                    onOpen={setViewer}
                  />
                )}
              </section>
            ))}

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

          <aside className="knowledge-article-sidebar">
            <nav
              aria-label={
                language === "pt"
                  ? "Nesta página"
                  : "On this page"
              }
            >
              <span className="knowledge-toc-title">
                {language === "pt"
                  ? "NESTA PÁGINA"
                  : "ON THIS PAGE"}
              </span>

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
          </aside>
        </div>
      </div>

      {viewer && (
        <div
          className="knowledge-lightbox"
          role="presentation"
          onMouseDown={(event) => {
            if (
              event.target === event.currentTarget
            ) {
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

            {(viewer.caption ||
              viewer.credit) && (
              <div className="knowledge-lightbox-caption">
                {viewer.caption && (
                  <p>{viewer.caption}</p>
                )}

                {viewer.credit && (
                  <small>
                    {language === "pt"
                      ? "Crédito: "
                      : "Credit: "}
                    {viewer.credit}
                  </small>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </article>
  );
}
