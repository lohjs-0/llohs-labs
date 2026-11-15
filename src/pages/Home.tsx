
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getPosts, type Language } from "../data/posts";

import "../styles/home.css";

export default function Home() {
  const { t, i18n } = useTranslation();

  const language: Language =
    i18n.resolvedLanguage === "en" ? "en" : "pt";

  const recentPosts = getPosts(language).slice(0, 3);

  const locale =
    language === "en" ? "en-US" : "pt-BR";

  const formatDate = (date: string) => {
    const parsedDate = new Date(`${date}T12:00:00`);

    if (Number.isNaN(parsedDate.getTime())) {
      return date;
    }

    return parsedDate.toLocaleDateString(locale, {
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="home">

      {/* =====================================
          HERO / PROFILE
      ===================================== */}

      <header className="home-hero">
        <div className="home-avatar">
          <img
            src={`${import.meta.env.BASE_URL}images/file_0000000028a8820eac59aa5288be3048.png`}
            alt="LLOHS profile"
            loading="eager"
            decoding="async"
          />
        </div>

        <h1 className="home-name">llohs</h1>

        <p className="home-quote">
          Understanding what lies beneath.
        </p>

        {/* =====================================
            SOCIAL LINKS
        ===================================== */}

        <div className="home-socials">

          {/* GITHUB */}

          <a
            href="https://github.com/lohjs-0"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.76-.24.76-.54v-2.08c-3.1.67-3.75-1.32-3.75-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.24.93.1-.72.39-1.21.71-1.49-2.48-.28-5.09-1.24-5.09-5.53 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.08 1.15a10.7 10.7 0 0 1 5.6 0c2.14-1.45 3.08-1.15 3.08-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3.01 0 4.3-2.61 5.24-5.1 5.52.4.35.76 1.03.76 2.08v3.08c0 .3.2.65.77.54A11.2 11.2 0 0 0 12 .8Z" />
            </svg>
          </a>

          {/* LINKEDIN */}

          <a
            href="https://www.linkedin.com/in/lohane-massao"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.75H4.98V9.2h2.95v9.55ZM6.46 7.89a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.29 10.86H15.8V14.1c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.73H9.51V9.2h2.83v1.3h.04c.39-.74 1.36-1.52 2.79-1.52 2.98 0 3.58 1.96 3.58 4.51v5.26Z" />
            </svg>
          </a>

          {/* EMAIL */}

          <a
            href="mailto:lohane.mdev@gmail.com"
            aria-label="Email"
            title="Email"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm1.6 2L12 12.4 19.4 7H4.6ZM20 9l-7.4 5.4a1 1 0 0 1-1.2 0L4 9v8h16V9Z" />
            </svg>
          </a>

          {/* INSTAGRAM */}

          <a
            href="https://www.instagram.com/llohh_kkjs"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            title="Instagram"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              fill="currentColor"
            >
              <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.5-3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
            </svg>
          </a>

        </div>
      </header>

      {/* =====================================
          RECENT POSTS
      ===================================== */}

      <section className="home-recent">
        <div className="home-section-heading">
          <h2>
            {language === "pt"
              ? "Recentes"
              : "Recent"}
          </h2>

          <Link to="/blog">
            {t("home.allPosts")} ↗
          </Link>
        </div>

        <div className="home-post-list">
          {recentPosts.length > 0 ? (
            recentPosts.map((post) => (
              <article
                className="home-post-card"
                key={post.slug}
              >
                <div className="home-post-content">
                  <time dateTime={post.date}>
                    {formatDate(post.date)}
                  </time>

                  <h3>
                    <Link to={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>

                  <p>{post.description}</p>

                  <Link
                    className="home-post-read"
                    to={`/blog/${post.slug}`}
                  >
                    {language === "pt"
                      ? "Ler publicação"
                      : "Read article"}{" "}
                    ↗
                  </Link>
                </div>
              </article>
            ))
          ) : (
            <p className="empty-posts">
              {language === "pt"
                ? "nenhuma publicação ainda."
                : "no posts yet."}
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
