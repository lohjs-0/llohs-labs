
import type { KnowledgePost } from "../../knowledge.types";

export const coelacanth: KnowledgePost = {
  slug: "living-fossils-coelacanth",

  title: {
    pt: "O celacanto: um peixe considerado extinto por milhões de anos",
    en: "The coelacanth: a fish thought extinct for millions of years",
  },

  description: {
    pt: "Em 1938, a descoberta de um celacanto vivo surpreendeu cientistas e revelou a sobrevivência de uma antiga linhagem de peixes.",
    en: "In 1938, the discovery of a living coelacanth surprised scientists and revealed the survival of an ancient fish lineage.",
  },

  category: "miscellaneous",
  date: "2026-10-29",
  readingMinutes: 8,

  tags: [
    "paleontology",
    "evolution",
    "marine-biology",
    "coelacanth",
  ],

  cover: {
    src: "/images/knowledge/coelacanth-cover.jpg",

    alt: {
      pt: "Celacanto nadando em águas profundas.",
      en: "Coelacanth swimming in deep water.",
    },

    caption: {
      pt: "Os celacantos modernos pertencem ao gênero Latimeria.",
      en: "Modern coelacanths belong to the genus Latimeria.",
    },

  sections: [
    {
      id: "introduction",
      heading: {
        pt: "Um peixe que parecia existir apenas nos fósseis",
        en: "A fish that seemed to exist only in fossils",
      },
      paragraphs: [
        {
          pt: "Durante muito tempo, acreditou-se que os celacantos haviam desaparecido do planeta há aproximadamente 66 milhões de anos, no final do período Cretáceo.",
          en: "For a long time, coelacanths were believed to have disappeared from Earth approximately 66 million years ago, at the end of the Cretaceous period.",
        },
        {
          pt: "Essa interpretação mudou dramaticamente em 1938, quando um exemplar vivo foi encontrado próximo à costa da África do Sul.",
          en: "That interpretation changed dramatically in 1938, when a living specimen was found near the coast of South Africa.",
        },
        {
          pt: "A descoberta revelou que uma linhagem conhecida principalmente pelo registro fóssil havia sobrevivido até os tempos modernos.",
          en: "The discovery revealed that a lineage known primarily from the fossil record had survived into modern times.",
        },
      ],
    },

    {
      id: "discovery",
      heading: {
        pt: "A descoberta de 1938",
        en: "The discovery of 1938",
      },
      paragraphs: [
        {
          pt: "Em dezembro de 1938, pescadores capturaram um peixe incomum próximo à África do Sul. O exemplar chamou a atenção de Marjorie Courtenay-Latimer, curadora de um museu em East London.",
          en: "In December 1938, fishermen caught an unusual fish near South Africa. The specimen attracted the attention of Marjorie Courtenay-Latimer, a museum curator in East London.",
        },
        {
          pt: "Ela procurou a ajuda do ictiólogo James Leonard Brierley Smith, que reconheceu o animal como representante de uma linhagem de peixes até então conhecida apenas por fósseis antigos.",
          en: "She sought the assistance of ichthyologist James Leonard Brierley Smith, who recognized the animal as a representative of a fish lineage previously known only from ancient fossils.",
        },
        {
          pt: "A espécie recebeu o nome Latimeria chalumnae, em homenagem a Courtenay-Latimer e ao rio Chalumna, próximo à região onde foi capturada.",
          en: "The species was named Latimeria chalumnae, honoring Courtenay-Latimer and the Chalumna River near the area where it was caught.",
        },
      ],
    },

    {
      id: "anatomy",
      heading: {
        pt: "Uma anatomia diferente da maioria dos peixes",
        en: "An anatomy unlike most fish",
      },
      paragraphs: [
        {
          pt: "Os celacantos apresentam nadadeiras lobadas, sustentadas por estruturas internas que possuem semelhanças evolutivas com os elementos ósseos encontrados nos membros dos vertebrados terrestres.",
          en: "Coelacanths possess lobed fins supported by internal structures that share evolutionary similarities with skeletal elements found in the limbs of terrestrial vertebrates.",
        },
        {
          pt: "Essas características fazem dos celacantos membros dos sarcopterígios, grupo que também inclui os peixes pulmonados e os tetrápodes.",
          en: "These characteristics make coelacanths members of the sarcopterygians, a group that also includes lungfish and tetrapods.",
        },
        {
          pt: "Eles também possuem uma articulação intracraniana característica e um órgão rostral associado à percepção de sinais elétricos.",
          en: "They also possess a distinctive intracranial joint and a rostral organ associated with the detection of electrical signals.",
        },
      ],
    },

    {
      id: "living-fossil",
      heading: {
        pt: "O problema da expressão fóssil vivo",
        en: "The problem with the term living fossil",
      },
      paragraphs: [
        {
          pt: "Celacantos são frequentemente chamados de fósseis vivos. Entretanto, essa expressão pode produzir uma impressão equivocada de que esses animais permaneceram completamente inalterados durante milhões de anos.",
          en: "Coelacanths are frequently called living fossils. However, this expression can create the misleading impression that these animals remained completely unchanged for millions of years.",
        },
        {
          pt: "Os celacantos modernos não são idênticos às espécies encontradas em fósseis antigos. Eles pertencem a uma linhagem evolutiva antiga, mas continuaram sujeitos a processos de evolução e diversificação.",
          en: "Modern coelacanths are not identical to species found in ancient fossils. They belong to an ancient evolutionary lineage but continued to undergo evolutionary change and diversification.",
        },
        {
          pt: "Atualmente são reconhecidas duas espécies viventes do gênero Latimeria: Latimeria chalumnae, encontrada no Oceano Índico ocidental, e Latimeria menadoensis, identificada na Indonésia.",
          en: "Two living species of the genus Latimeria are currently recognized: Latimeria chalumnae, found in the western Indian Ocean, and Latimeria menadoensis, identified in Indonesia.",
        },
      ],
    },

    {
      id: "conclusion",
      heading: {
        pt: "O que ainda podemos descobrir?",
        en: "What else might we discover?",
      },
      paragraphs: [
        {
          pt: "A descoberta dos celacantos modernos demonstra que o registro fóssil não oferece uma representação completa de todas as linhagens que existiram na Terra.",
          en: "The discovery of modern coelacanths demonstrates that the fossil record does not provide a complete representation of every lineage that has existed on Earth.",
        },
        {
          pt: "Mesmo organismos considerados extintos podem surpreender pesquisadores quando ambientes pouco explorados revelam espécies desconhecidas ou linhagens sobreviventes.",
          en: "Even organisms considered extinct can surprise researchers when poorly explored environments reveal unknown species or surviving lineages.",
        },
      ],
    },
  ],

  references: [
    {
      title: "Coelacanth",
      authors: "Smithsonian Ocean",
      url: "https://ocean.si.edu/ocean-life/fish/coelacanth",
    },
    {
      title: "Coelacanths",
      authors: "Australian Museum",
      url: "https://australian.museum/learn/animals/fishes/coelacanth/",
    },
    {
      title: "The African coelacanth genome provides insights into tetrapod evolution",
      authors: "Amemiya, C. T. et al.",
      year: 2013,
      url: "https://doi.org/10.1038/nature12027",
    },
  ],
};
