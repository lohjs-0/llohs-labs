
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { getPosts, type Language } from "../data/posts";

const translations = {
  pt: {
    title: "blog",
    subtitle:
      "experimentos, descobertas e algumas coisas que aprendi pelo caminho.",
    empty: "nenhum artigo publicado ainda.",
    read: "ler artigo",
  },
  en: {
    title: "blog",
    subtitle:
      "experiments, discoveries, and a few things i've learned along the way.",
    empty: "no posts published yet.",
    read: "read article",
  },
};

export default function Blog() {
  const { i18n } = useTranslation();

  const language: Language =
    i18n.resolvedLanguage === "en" ? "en" : "pt";

  const t = translations[language];
  const posts = getPosts(language);

  function formatDate(date: string) {
    if (!date) return "";

    const parsed = new Date(`${date}T12:00:00`);

    if (Number.isNaN(parsed.getTime())) {
      return date;
    }

    return parsed.toLocaleDateString(
      language === "pt" ? "pt-BR" : "en-US",
      {
        day: "numeric",
        month: "short",
        year: "numeric",
      }
    );
  }

  return (
    <section className="blog-page">
      <header className="page-header">
        <h1>{t.title}</h1>
        <p>{t.subtitle}</p>
      </header>

      <div className="blog-list">
        {posts.length === 0 ? (
          <p>{t.empty}</p>
        ) : (
          posts.map((post) => (
            <article
              className="blog-item"
              key={`${post.slug}-${post.lang}`}
            >
              <div className="blog-item-content">

                <h2 className="blog-item-title">
                  <Link to={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>

                {post.date && (
                  <div className="blog-item-meta">
                    <time dateTime={post.date}>
                      {formatDate(post.date)}
                    </time>
                  </div>
                )}

                {post.description && (
                  <p className="blog-description">
                    {post.description}
                  </p>
                )}

                {post.tags.length > 0 && (
                  <div className="blog-tags">
                    {post.tags.map((tag) => (
                      <span key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

              </div>
            </article>
          ))
        )}
      </div>
    </section>
  );
}
