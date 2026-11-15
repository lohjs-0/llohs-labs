
export type Language = "pt" | "en";

export interface Post {
  slug: string;
  lang: Language;
  title: string;
  description: string;
  date: string;
  tags: string[];
  cover?: string;
  content: string;
}

const markdownFiles = import.meta.glob(
  "../content/posts/*.md",
  {
    query: "?raw",
    import: "default",
    eager: true,
  }
) as Record<string, string>;

function parseFrontmatter(source: string): {
  metadata: Record<string, string>;
  content: string;
} {
  // Remove BOM e espaços em branco antes do frontmatter
  const normalized = source
    .replace(/^\uFEFF/, "")
    .trimStart();

  const match = normalized.match(
    /^(?:---|\*\*---\*\*)[ \t]*\r?\n([\s\S]*?)\r?\n(?:---|\*\*---\*\*)[ \t]*(?:\r?\n|$)/
  );

  if (!match) {
    return {
      metadata: {},
      content: normalized,
    };
  }

  const metadata: Record<string, string> = {};

  for (const line of match[1].split(/\r?\n/)) {
    const separator = line.indexOf(":");

    if (separator === -1) continue;

    const key = line.slice(0, separator).trim();
    const value = line.slice(separator + 1).trim();

    if (!key) continue;

    metadata[key] = value.replace(
      /^["']|["']$/g,
      ""
    );
  }

  return {
    metadata,
    content: normalized
      .slice(match[0].length)
      .trim(),
  };
}

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

function loadPosts(): Post[] {
  const result: Post[] = [];

  for (const [path, source] of Object.entries(markdownFiles)) {
    const filename = path.split("/").pop() ?? "";

    const match = filename.match(
      /^(.+)\.(pt|en)\.md$/
    );

    if (!match) continue;

    const slug = match[1];
    const lang = match[2] as Language;

    const { metadata, content } =
      parseFrontmatter(source);

    const post: Post = {
      slug,
      lang,
      title: metadata.title || slug,
      description: metadata.description || "",
      date: metadata.date || "",
      tags: parseTags(metadata.tags),
      content,
    };

    if (metadata.cover) {
      post.cover = metadata.cover;
    }

    result.push(post);
  }

  return result;
}

const posts: Post[] = loadPosts();

export function getPosts(
  language: Language
): Post[] {
  return posts
    .filter((post) => post.lang === language)
    .sort((a, b) =>
      b.date.localeCompare(a.date)
    );
}

export function getPost(
  slug: string,
  language: Language
): Post | undefined {
  return posts.find(
    (post) =>
      post.slug === slug &&
      post.lang === language
  );
}
