
import {
  useMemo,
  type ReactNode,
  isValidElement,
} from "react";

import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";

import { getPost, type Language } from "../data/posts";
import "../styles/technical-article.css";

/* =========================================
   TRANSLATIONS
   ========================================= */

const translations = {
  pt: {
    back: "← voltar para o blog",
    missing: "artigo não encontrado.",
    contents: "NESTE ARTIGO",
    label: "ARTIGO TÉCNICO",
    imageLabel: "FIGURA",
  },
  en: {
    back: "← back to blog",
    missing: "post not found.",
    contents: "IN THIS ARTICLE",
    label: "TECHNICAL ARTICLE",
    imageLabel: "FIGURE",
  },
};

/* =========================================
   TYPES
   ========================================= */

type Heading = {
  id: string;
  title: string;
  level: number;
};

/* =========================================
   HELPERS
   ========================================= */

const slugify = (text: string) =>
  text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-") || "section";

function nodeText(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }

  if (Array.isArray(node)) {
    return node.map(nodeText).join("");
  }

  if (isValidElement<{ children?: ReactNode }>(node)) {
    return nodeText(node.props.children);
  }

  return "";
}

function extractHeadings(markdown: string): Heading[] {
  const headings: Heading[] = [];
  const seen = new Map<string, number>();

  let fenced = false;

  for (const line of markdown.split("\n")) {
    if (/^\s*(```|~~~)/.test(line)) {
      fenced = !fenced;
      continue;
    }

    if (fenced) continue;

    const match = line.match(
      /^\s{0,3}(#{2,3})\s+(.+?)\s*#*\s*$/
    );

    if (!match) continue;

    const title = match[2]
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
      .replace(/[*_`~]/g, "")
      .trim();

    const base = slugify(title);
    const next = (seen.get(base) ?? 0) + 1;

    seen.set(base, next);

    headings.push({
      id: next === 1 ? base : `${base}-${next}`,
      title,
      level: match[1].length,
    });
  }

  return headings;
}

/* =========================================
   BLOG POST
   ========================================= */

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const { i18n } = useTranslation();

  const language: Language =
    i18n.resolvedLanguage === "en" ? "en" : "pt";

  const t = translations[language];

  const post = slug
    ? getPost(slug, language)
    : undefined;

  const markdown = post?.content ?? "";

  const headings = useMemo(
    () => extractHeadings(markdown),
    [markdown]
  );

  /* =========================================
     MARKDOWN COMPONENTS
     ========================================= */

  const components = useMemo<Components>(() => {
    const seen = new Map<string, number>();

    const headingId = (children: ReactNode) => {
      const base = slugify(nodeText(children));
      const next = (seen.get(base) ?? 0) + 1;

      seen.set(base, next);

      return next === 1
        ? base
        : `${base}-${next}`;
    };

    return {
      /* -------------------------------------
         PARAGRAPHS
         Avoid invalid <figure> inside <p>
         ------------------------------------- */

      p: ({ children, node }) => {
        const isImageParagraph =
          node?.children.length === 1 &&
          node.children[0].type === "element" &&
          node.children[0].tagName === "img";

        if (isImageParagraph) {
          return <>{children}</>;
        }

        return <p>{children}</p>;
      },

      /* -------------------------------------
         HEADINGS
         ------------------------------------- */

      h2: ({ children }) => (
        <h2 id={headingId(children)}>
          {children}
        </h2>
      ),

      h3: ({ children }) => (
        <h3 id={headingId(children)}>
          {children}
        </h3>
      ),

      /* -------------------------------------
         IMAGES WITH INTERACTIVE CAPTIONS
         ------------------------------------- */

      img: ({ src, alt, node }) => {
        const images = Array.from(
          node?.position
            ? [node.position.start.offset]
            : []
        );

        // Use the Markdown source position to
        // determine the figure number.
        const currentOffset = images[0];

        const imageMatches = [
          ...markdown.matchAll(/!\[[^\]]*\]\([^)]+\)/g),
        ];

        const imageIndex = imageMatches.findIndex(
          (match) => match.index === currentOffset
        );

        const figureNumber = String(
          imageIndex >= 0 ? imageIndex + 1 : 1
        ).padStart(2, "0");

        return (
          <figure
            className="technical-article-figure"
            tabIndex={0}
          >
            <img
              src={src}
              alt={alt ?? ""}
              loading="lazy"
              decoding="async"
            />

            {alt && (
              <figcaption className="technical-article-image-caption">
                <span className="technical-article-image-index">
                  {t.imageLabel} {figureNumber}
                </span>

                <span className="technical-article-image-description">
                  {alt}
                </span>
              </figcaption>
            )}
          </figure>
        );
      },
    };
  }, [markdown, t.imageLabel]);

  /* =========================================
     NOT FOUND
     ========================================= */

  if (!post) {
    return (
      <section className="blog-post-page">
        <Link to="/blog" className="back-link">
          {t.back}
        </Link>

        <p>{t.missing}</p>
      </section>
    );
  }

  /* =========================================
     POST METADATA
     ========================================= */

  const parsed = new Date(
    `${post.date}T12:00:00`
  );

  const date = Number.isNaN(parsed.getTime())
    ? post.date
    : parsed.toLocaleDateString(
      language === "pt" ? "pt-BR" : "en-US",
      {
        day: "numeric",
        month: "long",
        year: "numeric",
      }
    );

  const readingTime = Math.max(
    1,
    Math.ceil(
      markdown
        .trim()
        .split(/\s+/)
        .filter(Boolean).length / 200
    )
  );

  /* =========================================
     RENDER
     ========================================= */

  return (
    <article className="blog-post-page technical-article-page">

      {/* TOP NAVIGATION */}

      <div className="technical-article-top">
        <Link
          to="/"
          className="technical-article-brand"
        >
          llohs
        </Link>

        <Link
          to="/blog"
          className="technical-article-back"
        >
          {t.back}
        </Link>
      </div>

      {/* BACKGROUND */}

      <div
        className={`technical-article-background${post.cover ? " has-cover" : ""
          }`}
        style={
          post.cover
            ? {
              backgroundImage: `url(${JSON.stringify(
                post.cover
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
            {t.label}
          </span>

          <h1>{post.title}</h1>

          <div className="technical-article-meta">
            <time dateTime={post.date}>
              {date}
            </time>

            <span>·</span>

            <span>
              {readingTime} min
            </span>
          </div>

          {post.description && (
            <p className="technical-article-description">
              {post.description}
            </p>
          )}
        </header>

        {/* ARTICLE LAYOUT */}

        <div className="technical-article-layout">

          {/* MARKDOWN CONTENT */}

          <div className="technical-article-content markdown-content">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={components}
            >
              {markdown}
            </ReactMarkdown>

            {/* TAGS */}

            {post.tags.length > 0 && (
              <div className="technical-article-tags">
                {post.tags.map((tag) => (
                  <span key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* FOOTER */}

            <div className="technical-article-footer">
              <Link to="/blog">
                {t.back}
              </Link>
            </div>
          </div>

          {/* TABLE OF CONTENTS */}


          {headings.length > 0 && (
            <aside className="technical-article-sidebar">
              <details className="technical-article-toc">
                <summary className="technical-article-toc-toggle">
                  <span>{t.contents}</span>
                  <span
                    className="technical-article-toc-chevron"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>

                <nav aria-label={t.contents}>
                  {headings.map((heading) => (
                    <a
                      key={heading.id}
                      href={`#${heading.id}`}
                      className={
                        heading.level === 3
                          ? "technical-article-toc-sub"
                          : ""
                      }
                    >
                      {heading.title}
                    </a>
                  ))}
                </nav>
              </details>
            </aside>
          )}

        </div>
      </div>
    </article>
  );
}
