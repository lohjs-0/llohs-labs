
export type Language = "pt" | "en";

export interface Note {
  slug: string;
  lang: Language;
  title: string;
  description: string;
  date: string;
  tags: string[];
  content: string;
}

const files = import.meta.glob("../content/notes/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

function parseTags(value?: string): string[] {
  if (!value) return [];

  return value
    .replace(/^\[/, "")
    .replace(/\]$/, "")
    .split(",")
    .map((tag) =>
      tag.trim().replace(/^["']|["']$/g, "")
    )
    .filter(Boolean);
}

function parseNote(
  path: string,
  raw: string
): Note | null {
  const filename = path.split("/").pop() ?? "";

  const match = filename.match(
    /^(.+)\.(pt|en)\.md$/
  );

  if (!match) return null;

  const slug = match[1];
  const lang = match[2] as Language;

  const source = raw.replace(/^\uFEFF/, "").trimStart();

  const frontmatter = source.match(
    /^(?:---|\*\*---\*\*)\r?\n([\s\S]*?)\r?\n(?:---|\*\*---\*\*)\r?\n?/
  );

  const metadata: Record<string, string> = {};

  if (frontmatter) {
    for (const line of frontmatter[1].split(/\r?\n/)) {
      const separator = line.indexOf(":");

      if (separator === -1) continue;

      const key = line.slice(0, separator).trim();
      const value = line.slice(separator + 1).trim();

      metadata[key] = value.replace(
        /^["']|["']$/g,
        ""
      );
    }
  }

  return {
    slug,
    lang,
    title: metadata.title || slug,
    description: metadata.description || "",
    date: metadata.date || "",
    tags: parseTags(metadata.tags),
    content: frontmatter
      ? source.slice(frontmatter[0].length).trim()
      : source.trim(),
  };
}

export const notes: Note[] = Object.entries(files)
  .map(([path, raw]) => parseNote(path, raw))
  .filter((note): note is Note => note !== null)
  .sort((a, b) => b.date.localeCompare(a.date));

export function getNotes(language: string): Note[] {
  const lang = language === "en" ? "en" : "pt";

  return notes.filter((note) => note.lang === lang);
}

export function getNote(
  slug: string,
  language: string
): Note | undefined {
  const lang = language === "en" ? "en" : "pt";

  return notes.find(
    (note) =>
      note.slug === slug && note.lang === lang
  );
}
