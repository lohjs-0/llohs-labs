
import type { KnowledgePost } from "../../knowledge.types";

export const dinosaurFeathers: KnowledgePost = {
  slug: "dinosaur-feathers",

  title: {
    pt: "Dinossauros tinham penas muito antes das aves modernas",
    en: "Dinosaurs had feathers long before modern birds",
  },

  description: {
    pt: "Fósseis extraordinários revelam que penas e estruturas filamentosas surgiram em dinossauros que não eram capazes de voar.",
    en: "Extraordinary fossils reveal that feathers and filamentous structures appeared in dinosaurs that could not fly.",
  },

  category: "miscellaneous",
  date: "2026-11-07",
  readingMinutes: 8,

  tags: [
    "paleontology",
    "dinosaurs",
    "evolution",
    "feathers",
    "fossils",
  ],

  cover: {
    src: "/images/knowledge/dinosaur-feathers-cover.jpg",

    alt: {
      pt: "Reconstrução científica de um dinossauro terópode com penas.",
      en: "Scientific reconstruction of a feathered theropod dinosaur.",
    },

    caption: {
      pt: "Diversos dinossauros não avianos apresentavam penas ou estruturas semelhantes.",
      en: "Several non-avian dinosaurs possessed feathers or similar structures.",
    },

  sections: [
    {
      id: "introduction",
      heading: {
        pt: "Dinossauros não eram todos cobertos por escamas",
        en: "Not all dinosaurs were covered in scales",
      },
      paragraphs: [
        {
          pt: "Durante muito tempo, dinossauros foram representados como grandes répteis de pele escamosa. Essa imagem começou a mudar profundamente quando descobertas paleontológicas revelaram que diversas espécies possuíam penas ou estruturas filamentosas.",
          en: "For a long time, dinosaurs were portrayed as large reptiles with scaly skin. This image began to change dramatically when paleontological discoveries revealed that several species possessed feathers or filamentous structures.",
        },
        {
          pt: "Essas descobertas transformaram nossa compreensão da aparência, da fisiologia e do comportamento de muitos dinossauros. Também forneceram evidências importantes sobre a origem evolutiva das aves.",
          en: "These discoveries transformed our understanding of the appearance, physiology, and behavior of many dinosaurs. They also provided important evidence about the evolutionary origins of birds.",
        },
      ],
    },

    {
      id: "discovery",
      heading: {
        pt: "Os fósseis que mudaram a paleontologia",
        en: "The fossils that changed paleontology",
      },
      paragraphs: [
        {
          pt: "Em 1996, a descrição de Sinosauropteryx, um pequeno dinossauro terópode encontrado na China, revelou estruturas filamentosas preservadas ao redor de seu corpo.",
          en: "In 1996, the description of Sinosauropteryx, a small theropod dinosaur discovered in China, revealed filamentous structures preserved around its body.",
        },
        {
          pt: "Outros fósseis encontrados posteriormente, como Caudipteryx, Microraptor e Anchiornis, forneceram evidências adicionais de penas em dinossauros não avianos.",
          en: "Other fossils discovered later, such as Caudipteryx, Microraptor, and Anchiornis, provided additional evidence of feathers in non-avian dinosaurs.",
        },
        {
          pt: "A preservação excepcional de alguns desses animais permitiu identificar detalhes das penas, incluindo sua distribuição pelo corpo e, em determinados casos, pistas sobre a coloração original.",
          en: "The exceptional preservation of some of these animals made it possible to identify details of their feathers, including their distribution across the body and, in certain cases, clues about their original coloration.",
        },
      ],
    },

    {
      id: "functions",
      heading: {
        pt: "Por que desenvolver penas antes de voar?",
        en: "Why develop feathers before flight?",
      },
      paragraphs: [
        {
          pt: "As penas não precisam ter surgido originalmente como estruturas destinadas ao voo. Em diversas linhagens, elas podem ter desempenhado funções relacionadas ao isolamento térmico, à comunicação visual e à proteção.",
          en: "Feathers did not necessarily originate as structures intended for flight. In several lineages, they may have served functions related to thermal insulation, visual communication, and protection.",
        },
        {
          pt: "Estruturas filamentosas simples poderiam ajudar a conservar calor corporal. Penas mais elaboradas também poderiam ser utilizadas em exibições visuais durante interações sociais ou reprodutivas.",
          en: "Simple filamentous structures could help conserve body heat. More elaborate feathers might also have been used in visual displays during social or reproductive interactions.",
        },
        {
          pt: "Posteriormente, determinadas características das penas foram aproveitadas e modificadas em linhagens que desenvolveram capacidades aerodinâmicas mais avançadas.",
          en: "Later, certain feather characteristics were adapted and modified in lineages that developed more advanced aerodynamic capabilities.",
        },
      ],
    },

    {
      id: "birds",
      heading: {
        pt: "As aves são dinossauros?",
        en: "Are birds dinosaurs?",
      },
      paragraphs: [
        {
          pt: "Sim. Na classificação evolutiva moderna, as aves pertencem ao grupo dos dinossauros terópodes. Elas representam a linhagem de dinossauros que sobreviveu à extinção em massa do final do Cretáceo.",
          en: "Yes. In modern evolutionary classification, birds belong to the theropod dinosaur group. They represent the dinosaur lineage that survived the mass extinction at the end of the Cretaceous.",
        },
        {
          pt: "Características como ossos pneumáticos, determinadas estruturas do punho, penas e semelhanças no esqueleto sustentam essa relação evolutiva.",
          en: "Characteristics such as pneumatic bones, certain wrist structures, feathers, and skeletal similarities support this evolutionary relationship.",
        },
        {
          pt: "Isso significa que os dinossauros não desapareceram completamente. Uma parte de sua diversidade continua presente nas milhares de espécies de aves existentes atualmente.",
          en: "This means dinosaurs did not disappear completely. Part of their diversity remains present in the thousands of bird species living today.",
        },
      ],
    },

    {
      id: "conclusion",
      heading: {
        pt: "Uma nova imagem dos dinossauros",
        en: "A new image of dinosaurs",
      },
      paragraphs: [
        {
          pt: "A descoberta de dinossauros com penas demonstra como novas evidências podem transformar interpretações científicas estabelecidas.",
          en: "The discovery of feathered dinosaurs demonstrates how new evidence can transform established scientific interpretations.",
        },
        {
          pt: "Hoje sabemos que o mundo dos dinossauros era visualmente muito mais diversificado do que as reconstruções tradicionais sugeriam. Alguns possuíam escamas, outros penas, e determinadas espécies apresentavam combinações dessas estruturas.",
          en: "Today we know the dinosaur world was visually far more diverse than traditional reconstructions suggested. Some had scales, others feathers, and certain species displayed combinations of these structures.",
        },
      ],
    },
  ],

  references: [
    {
      title: "Feathered dinosaurs and the origin of birds",
      authors: "Xu, X. et al.",
      year: 2014,
      url: "https://doi.org/10.1038/nature13689",
    },
    {
      title: "The origin and early evolution of feathers: insights from recent paleontological and neontological data",
      authors: "Prum, R. O. & Brush, A. H.",
      year: 2002,
      url: "https://doi.org/10.1086/341993",
    },
    {
      title: "Dinosauria",
      authors: "University of California Museum of Paleontology",
      url: "https://ucmp.berkeley.edu/diapsids/dinosaur.html",
    },
  ],
};
