
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

// Blocos de código
export type KnowledgeCode = {
  language: string;
  filename?: string;
  code: string;
  explanation?: KnowledgeText;
};

// Fórmulas matemáticas
export type KnowledgeFormula = {
  expression: string;
  explanation?: KnowledgeText;
};

// Tabelas técnicas
export type KnowledgeTable = {
  headers: KnowledgeText[];
  rows: KnowledgeText[][];
  caption?: KnowledgeText;
};

// Observações e alertas
export type KnowledgeCallout = {
  type: "info" | "warning" | "tip" | "important";
  title?: KnowledgeText;
  content: KnowledgeText;
};

// Exercícios
export type KnowledgeExercise = {
  question: KnowledgeText;
  answer: KnowledgeText;
  difficulty?: "beginner" | "intermediate" | "advanced";
};

// Laboratórios práticos
export type KnowledgeLab = {
  title: KnowledgeText;
  objective: KnowledgeText;
  requirements: KnowledgeText[];
  steps: KnowledgeText[];
  expectedResult?: KnowledgeText;
};

// Glossário
export type KnowledgeGlossaryEntry = {
  term: string;
  definition: KnowledgeText;
};

// Seções dos artigos
export type KnowledgeSection = {
  id?: string;
  heading: KnowledgeText;
  paragraphs: KnowledgeText[];

  image?: KnowledgeImage;

  codes?: KnowledgeCode[];
  formulas?: KnowledgeFormula[];
  tables?: KnowledgeTable[];
  callouts?: KnowledgeCallout[];
  exercises?: KnowledgeExercise[];
  labs?: KnowledgeLab[];
  glossary?: KnowledgeGlossaryEntry[];
};

// Publicação
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
