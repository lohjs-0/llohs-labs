
export type KnowledgeLanguage = "pt" | "en";

export type KnowledgeCategory =
  | "computer science"
  | "cybersecurity"
  | "electronics"
  | "programming"
  | "science"
  | "miscellaneous";

export type KnowledgeText = {
  pt: string;
  en: string;
};

export type KnowledgeImage = {
  src: string;
  alt: KnowledgeText;
  caption?: KnowledgeText;
  credit?: string;
  sourceUrl?: string;
};

export type KnowledgeReference = {
  title: string;
  authors?: string;
  year?: number;
  url: string;
};

export type KnowledgeSection = {
  id?: string;
  heading: KnowledgeText;
  paragraphs: KnowledgeText[];
  image?: KnowledgeImage;
};

export type KnowledgePost = {
  slug: string;
  title: KnowledgeText;
  description: KnowledgeText;
  category: KnowledgeCategory;
  date: string;
  readingMinutes: number;
  tags: string[];
  cover?: KnowledgeImage;
  sections: KnowledgeSection[];
  references?: KnowledgeReference[];
};
