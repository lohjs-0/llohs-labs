
import type { KnowledgePost } from "../../knowledge.types";

export const whaleEvolution: KnowledgePost = {
  slug: "whale-evolution-land",

  title: {
    pt: "As baleias descendem de mamíferos terrestres",
    en: "Whales descended from land mammals",
  },

  description: {
    pt: "A história evolutiva das baleias começou em terra firme. Fósseis revelam uma das transições mais extraordinárias da evolução dos mamíferos.",
    en: "Whale evolution began on land. Fossils reveal one of the most extraordinary transitions in mammalian evolution.",
  },

  category: "miscellaneous",
  date: "2026-11-02",
  readingMinutes: 9,

  tags: [
    "paleontology",
    "evolution",
    "whales",
    "mammals",
    "fossils",
  ],

  cover: {
    src: "/images/knowledge/whale-evolution-cover.jpg",

    alt: {
      pt: "Reconstrução científica de Ambulocetus, um antigo parente das baleias.",
      en: "Scientific reconstruction of Ambulocetus, an ancient relative of whales.",
    },

   
    caption: {
      pt: "Ambulocetus natans representa uma etapa importante da evolução dos cetáceos.",
      en: "Ambulocetus natans represents an important stage in cetacean evolution.",
    },
  },

  sections: [

    {
      id: "introduction",
      heading: {
        pt: "Quando os ancestrais das baleias caminhavam",
        en: "When the ancestors of whales walked",
      },
      paragraphs: [
        {
          pt: "As baleias modernas estão entre os animais mais especializados para a vida aquática. Seus corpos hidrodinâmicos, membros anteriores transformados em nadadeiras e sistemas respiratórios adaptados permitem que vivam inteiramente no ambiente marinho.",
          en: "Modern whales are among the animals most specialized for aquatic life. Their streamlined bodies, forelimbs transformed into flippers, and adapted respiratory systems allow them to live entirely in marine environments.",
        },
        {
          pt: "Entretanto, seus ancestrais distantes eram mamíferos terrestres. Ao longo de milhões de anos, essa linhagem passou por transformações anatômicas que permitiram a transição gradual para a vida na água.",
          en: "However, their distant ancestors were terrestrial mammals. Over millions of years, this lineage underwent anatomical transformations that enabled a gradual transition to aquatic life.",
        },
      ],
    },

    {
      id: "pakicetus",
      heading: {
        pt: "Pakicetus: um cetáceo primitivo terrestre",
        en: "Pakicetus: an early terrestrial cetacean",
      },
      paragraphs: [
        {
          pt: "Pakicetus viveu há aproximadamente 50 milhões de anos, durante o Eoceno. Seus fósseis foram encontrados em regiões que atualmente pertencem ao Paquistão.",
          en: "Pakicetus lived approximately 50 million years ago during the Eocene. Its fossils were discovered in regions that are now part of Pakistan.",
        },
        {
          pt: "Diferentemente das baleias modernas, Pakicetus possuía membros capazes de sustentar seu corpo em terra firme. Sua anatomia incluía características do ouvido que ajudam a estabelecer sua relação com os primeiros cetáceos.",
          en: "Unlike modern whales, Pakicetus had limbs capable of supporting its body on land. Its anatomy included ear characteristics that help establish its relationship with early cetaceans.",
        },
        {
          pt: "Esse animal demonstra que a história evolutiva das baleias começou muito antes de seus ancestrais adquirirem a aparência totalmente aquática que conhecemos atualmente.",
          en: "This animal demonstrates that whale evolutionary history began long before their ancestors acquired the fully aquatic appearance we recognize today.",
        },
      ],
    },

    {
      id: "ambulocetus",
      heading: {
        pt: "Ambulocetus: entre a terra e a água",
        en: "Ambulocetus: between land and water",
      },
      paragraphs: [
        {
          pt: "Ambulocetus natans viveu há aproximadamente 48 milhões de anos. Seu nome significa aproximadamente baleia que caminha e nada.",
          en: "Ambulocetus natans lived approximately 48 million years ago. Its name roughly means walking and swimming whale.",
        },
        {
          pt: "Esse animal possuía membros robustos e adaptações que indicam uma vida associada tanto à terra quanto à água. Sua locomoção provavelmente envolvia movimentos dos membros e do corpo.",
          en: "This animal possessed robust limbs and adaptations indicating a lifestyle associated with both land and water. Its locomotion probably involved movements of its limbs and body.",
        },
        {
          pt: "Ambulocetus é importante porque documenta uma combinação de características terrestres e aquáticas, demonstrando como a especialização para a vida marinha ocorreu gradualmente.",
          en: "Ambulocetus is important because it documents a combination of terrestrial and aquatic characteristics, demonstrating how specialization for marine life occurred gradually.",
        },
      ],
    },

    {
      id: "basilosaurus",
      heading: {
        pt: "Basilosaurus: uma baleia totalmente aquática",
        en: "Basilosaurus: a fully aquatic whale",
      },
      paragraphs: [
        {
          pt: "Milhões de anos depois, cetáceos como Basilosaurus já apresentavam corpos alongados e adaptações que indicam uma existência inteiramente aquática.",
          en: "Millions of years later, cetaceans such as Basilosaurus already possessed elongated bodies and adaptations indicating a fully aquatic existence.",
        },
        {
          pt: "Embora seus membros posteriores fossem extremamente reduzidos, eles ainda estavam presentes. Essas estruturas não eram capazes de sustentar o animal em terra firme.",
          en: "Although its hind limbs were extremely reduced, they were still present. These structures were incapable of supporting the animal on land.",
        },
        {
          pt: "A presença desses membros vestigiais constitui uma evidência anatômica importante da ancestralidade terrestre dos cetáceos.",
          en: "The presence of these vestigial limbs provides important anatomical evidence of the terrestrial ancestry of cetaceans.",
        },
      ],
    },

    {
      id: "modern-whales",
      heading: {
        pt: "Como surgiram as baleias modernas?",
        en: "How did modern whales emerge?",
      },
      paragraphs: [
        {
          pt: "As baleias modernas pertencem a dois grandes grupos: os misticetos, que incluem baleias com barbatanas filtradoras, e os odontocetos, que incluem golfinhos, cachalotes e outras baleias com dentes.",
          en: "Modern whales belong to two major groups: mysticetes, which include filter-feeding baleen whales, and odontocetes, which include dolphins, sperm whales, and other toothed whales.",
        },
        {
          pt: "Ao longo de sua evolução, os cetáceos desenvolveram modificações importantes na audição, na respiração, na locomoção e na posição das aberturas nasais.",
          en: "Throughout their evolution, cetaceans developed important modifications in hearing, respiration, locomotion, and the position of their nasal openings.",
        },
        {
          pt: "Evidências moleculares também demonstram que os parentes vivos mais próximos dos cetáceos são os hipopótamos. Isso não significa que baleias descendam de hipopótamos modernos, mas que ambos compartilham um ancestral comum.",
          en: "Molecular evidence also shows that the closest living relatives of cetaceans are hippopotamuses. This does not mean whales descended from modern hippos, but that both share a common ancestor.",
        },
      ],
    },

    {
      id: "conclusion",
      heading: {
        pt: "Uma das grandes transformações da evolução",
        en: "One of evolution's great transformations",
      },
      paragraphs: [
        {
          pt: "A evolução das baleias é um dos exemplos mais bem documentados de uma grande transição evolutiva. Fósseis de diferentes períodos mostram mudanças progressivas na anatomia dos membros, na coluna vertebral, no crânio e nos sistemas sensoriais.",
          en: "Whale evolution is one of the best-documented examples of a major evolutionary transition. Fossils from different periods show progressive changes in limb anatomy, the vertebral column, the skull, and sensory systems.",
        },
        {
          pt: "Esses registros demonstram como uma linhagem de mamíferos terrestres deu origem a animais que hoje passam toda a vida nos oceanos.",
          en: "These records demonstrate how a lineage of terrestrial mammals gave rise to animals that now spend their entire lives in the oceans.",
        },
      ],
    },
  ],

  references: [
    {
      title: "The origin of whales and the power of independent evidence",
      authors: "Thewissen, J. G. M. et al.",
      year: 2007,
      url: "https://doi.org/10.1038/nature06343",
    },
    {
      title: "Whale Evolution",
      authors: "Smithsonian National Museum of Natural History",
      url: "https://naturalhistory.si.edu/",
    },
    {
      title: "The emergence of whales: evolutionary patterns in the origin of Cetacea",
      authors: "Thewissen, J. G. M. & Williams, E. M.",
      year: 2002,
      url: "https://doi.org/10.1146/annurev.ecolsys.33.020602.095426",
    },
  ],
};
