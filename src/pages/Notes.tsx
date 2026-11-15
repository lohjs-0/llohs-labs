
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getNotes } from "../data/notes";
import "../styles/notes.css";

export default function Notes() {
  const { i18n } = useTranslation();

  const language =
    i18n.resolvedLanguage === "en" ? "en" : "pt";

  const notes = getNotes(language);

  const formatDate = (date?: string) => {
    if (!date) return "";

    const parsed = new Date(`${date}T12:00:00`);

    if (Number.isNaN(parsed.getTime())) return date;

    return parsed.toLocaleDateString(
      language === "pt" ? "pt-BR" : "en-US",
      {
        day: "numeric",
        month: "short",
        year: "numeric",
      }
    );
  };

  return (
    <section className="notes-page">
      <header className="page-header notes-header">
        <h1>{language === "pt" ? "notas" : "notes"}</h1>

        <p>
          {language === "pt"
            ? "fragmentos de código, experimentos e descobertas que não precisam virar um artigo completo."
            : "code fragments, experiments and discoveries that don't need to become full articles."}
        </p>
      </header>

      <div className="notes-list">
        {notes.length > 0 ? (
          notes.map((note) => {
            const tags =
              "tags" in note && Array.isArray(note.tags)
                ? note.tags.filter(
                    (tag): tag is string =>
                      typeof tag === "string"
                  )
                : [];

            return (
              <article
                className="note-item"
                key={`${language}-${note.slug}`}
              >
                <div className="note-item-top">
                  <h2 className="note-item-title">
                    <Link to={`/notes/${note.slug}`}>
                      {note.title}
                    </Link>
                  </h2>

                  {note.date && (
                    <time
                      className="note-item-date"
                      dateTime={note.date}
                    >
                      {formatDate(note.date)}
                    </time>
                  )}
                </div>

                {note.description && (
                  <p className="note-item-description">
                    {note.description}
                  </p>
                )}

                {tags.length > 0 && (
                  <div className="note-item-tags">
                    {tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                )}
              </article>
            );
          })
        ) : (
          <p className="notes-empty">
            {language === "pt"
              ? "nenhuma nota publicada ainda."
              : "no notes published yet."}
          </p>
        )}
      </div>
    </section>
  );
}
