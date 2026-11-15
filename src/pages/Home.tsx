
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getPosts, type Language } from "../data/posts";

export default function Home() {
  const { t, i18n } = useTranslation();

  const language: Language =
  i18n.resolvedLanguage === "en" ? "en" : "pt";

const recentPosts = getPosts(language).slice(0, 3);

  const currentLanguage = i18n.resolvedLanguage === "en"
    ? "en-US"
    : "pt-BR";

  const formatDate = (date: string) => {
    const parsedDate = new Date(`${date}T12:00:00`);

    if (Number.isNaN(parsedDate.getTime())) {
      return date;
    }

    return parsedDate.toLocaleDateString(currentLanguage, {
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="home">
      <header className="intro">
        <h1>llohs</h1>

        <p className="subtitle">
          {t("home.subtitle")}
        </p>

        <p className="description">
          {t("home.description")}
        </p>

        <div className="social-links">
          <a
            href="https://github.com/lohjs-0"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin
          </a>
        </div>
      </header>

      <section className="writing">
        <div className="section-heading">
          <h2>{t("home.writing")}</h2>

          <Link to="/blog">
            {t("home.allPosts")}
          </Link>
        </div>

        <div className="post-list">
          {recentPosts.length > 0 ? (
            recentPosts.map((post) => (
              <article className="post" key={post.slug}>
                <div className="post-content">
                  <Link to={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>

                  <p>{post.description}</p>
                </div>

                <time dateTime={post.date}>
                  {formatDate(post.date)}
                </time>
              </article>
            ))
          ) : (
            <p className="empty-posts">
              {i18n.resolvedLanguage === "en"
                ? "no posts yet."
                : "nenhuma publicação ainda."}
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
