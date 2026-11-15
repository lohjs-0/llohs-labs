
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getNote } from "../data/notes";

export default function NoteDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { i18n } = useTranslation();

  const language =
    i18n.resolvedLanguage === "en" ? "en" : "pt";

  const note = getNote(slug || "", language);

  const backText =
    language === "pt"
      ? "← voltar às notas"
      : "← back to notes";

  if (!note) {
    return (
      <section className="page-header">
        <h1>
          404 — {language === "pt"
            ? "nota não encontrada"
            : "note not found"}
        </h1>

        <Link className="back-link" to="/notes">
          {backText}
        </Link>
      </section>
    );
  }

  const date = new Date(`${note.date}T12:00:00`);

  const formattedDate = Number.isNaN(date.getTime())
    ? note.date
    : date.toLocaleDateString(
        language === "pt" ? "pt-BR" : "en-US",
        {
          day: "numeric",
          month: "long",
          year: "numeric",
        }
      );

  return (
    <article className="blog-article">
      <Link className="back-link" to="/notes">
        {backText}
      </Link>

      <header className="article-header">
        <h1>{note.title}</h1>

        <p>{note.description}</p>

        <div className="article-meta">
          <time dateTime={note.date}>
            {formattedDate}
          </time>
        </div>
      </header>

      <div className="markdown-body">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {note.content}
        </ReactMarkdown>
      </div>
    </article>
  );
}
