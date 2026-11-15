
import type { KnowledgePost } from "../../knowledge.types";

export const antarcticIcefish: KnowledgePost = {
  slug: "antarctic-icefish",

  title: {
    pt: "Peixes-gelo da Antártida: os vertebrados sem hemoglobina",
    en: "Antarctic icefish: vertebrates without hemoglobin",
  },

  description: {
    pt: "Nas águas congelantes da Antártida vivem peixes que não possuem hemoglobina funcional no sangue. Descubra como transportam oxigênio, por que perderam essa proteína e os limites dessa evolução.",
    en: "In Antarctica's freezing waters live fish that lack functional hemoglobin in their blood. Discover how they transport oxygen, why they lost this protein, and the limits of their evolution.",
  },

  category: "science",
  date: "2026-11-15",
  readingMinutes: 12,

  tags: [
    "biology",
    "evolution",
    "antarctica",
    "icefish",
    "hemoglobin",
    "physiology",
    "marine-biology",
  ],

  cover: {
    src: "/images/knowledge/antarctic-icefish-cover.jpg",

    alt: {
      pt: "Peixe-gelo antártico com corpo alongado e cabeça larga.",
      en: "Antarctic icefish with an elongated body and broad head.",
    },

    caption: {
      pt: "Peixes da família Channichthyidae são os únicos vertebrados conhecidos que não expressam hemoglobina funcional na fase adulta.",
      en: "Fish of the family Channichthyidae are the only known vertebrates that do not express functional hemoglobin as adults.",
    },

    credit: "A definir conforme a fotografia escolhida",

    sourceUrl:
      "https://en.wikipedia.org/wiki/Channichthyidae",
  },

  sections: [
    {
      id: "introduction",

      heading: {
        pt: "Um peixe com sangue quase transparente",
        en: "A fish with almost transparent blood",
      },

      paragraphs: [
        {
          pt: "Na maioria dos vertebrados, o sangue possui coloração vermelha devido à hemoglobina, uma proteína especializada no transporte de oxigênio. Entretanto, nas águas geladas que cercam a Antártida existe um grupo de peixes que rompe essa regra.",
          en: "In most vertebrates, blood is red because of hemoglobin, a protein specialized in oxygen transport. However, in the freezing waters surrounding Antarctica, a group of fish breaks this rule.",
        },
        {
          pt: "Os peixes-gelo da família Channichthyidae não produzem hemoglobina funcional durante a fase adulta. Seu sangue apresenta uma aparência pálida ou esbranquiçada, em vez da coloração vermelha típica de outros peixes.",
          en: "Icefish of the family Channichthyidae do not produce functional hemoglobin during adulthood. Their blood has a pale or whitish appearance instead of the typical red color of other fish.",
        },
        {
          pt: "Essa característica é excepcional entre os vertebrados conhecidos. A ausência de hemoglobina reduz drasticamente a capacidade de transporte de oxigênio do sangue, criando desafios fisiológicos importantes.",
          en: "This characteristic is exceptional among known vertebrates. The absence of hemoglobin drastically reduces the blood's oxygen-carrying capacity, creating significant physiological challenges.",
        },
        {
          pt: "Mesmo assim, esses animais conseguem sobreviver graças a uma combinação de condições ambientais e modificações em seu sistema circulatório.",
          en: "Even so, these animals survive through a combination of environmental conditions and modifications to their circulatory system.",
        },
      ],
    },

    {
      id: "where-they-live",

      heading: {
        pt: "A vida nas águas próximas do congelamento",
        en: "Life in near-freezing waters",
      },

      paragraphs: [
        {
          pt: "Os peixes-gelo habitam principalmente o Oceano Austral, em regiões onde a temperatura da água pode permanecer próxima de -1,8 °C.",
          en: "Icefish primarily inhabit the Southern Ocean, in regions where water temperatures may remain close to -1.8 °C.",
        },
        {
          pt: "A água salgada congela a temperaturas inferiores às da água doce. Por isso, o ambiente marinho antártico pode permanecer líquido mesmo abaixo de zero grau Celsius.",
          en: "Saltwater freezes at lower temperatures than freshwater. Therefore, Antarctic marine environments can remain liquid even below zero degrees Celsius.",
        },
        {
          pt: "Uma propriedade importante desse ambiente é que a solubilidade do oxigênio na água tende a aumentar conforme a temperatura diminui, embora a concentração efetiva também dependa de outros fatores oceanográficos.",
          en: "An important property of this environment is that oxygen solubility in water generally increases as temperature decreases, although actual oxygen concentration also depends on other oceanographic factors.",
        },
        {
          pt: "A combinação de águas frias, relativamente ricas em oxigênio, e demandas metabólicas influenciadas pela temperatura ajuda a explicar como esses animais conseguem viver sem um dos principais mecanismos de transporte de oxigênio dos vertebrados.",
          en: "The combination of cold, relatively oxygen-rich waters and temperature-dependent metabolic demands helps explain how these animals survive without one of the major oxygen transport mechanisms used by vertebrates.",
        },
      ],
    },

    {
      id: "hemoglobin",

      heading: {
        pt: "Para que serve a hemoglobina?",
        en: "What is hemoglobin for?",
      },

      paragraphs: [
        {
          pt: "A hemoglobina é uma proteína que se liga reversivelmente ao oxigênio. Na maioria dos vertebrados, ela está presente dentro das hemácias, também chamadas de glóbulos vermelhos.",
          en: "Hemoglobin is a protein that binds oxygen reversibly. In most vertebrates, it is found inside red blood cells, also called erythrocytes.",
        },
        {
          pt: "Sua função permite que o sangue transporte muito mais oxigênio do que seria possível apenas pela dissolução física desse gás no plasma.",
          en: "Its function allows blood to transport much more oxygen than would be possible through physical dissolution of the gas in plasma alone.",
        },
        {
          pt: "Nos tecidos, o oxigênio é utilizado pelas células em processos metabólicos, especialmente na respiração celular aeróbica, que participa da produção de ATP.",
          en: "In tissues, oxygen is used by cells in metabolic processes, especially aerobic cellular respiration, which contributes to ATP production.",
        },
        {
          pt: "A perda de hemoglobina representa, portanto, uma alteração profunda no funcionamento do sistema circulatório de um vertebrado.",
          en: "The loss of hemoglobin therefore represents a profound change in the functioning of a vertebrate circulatory system.",
        },
      ],
    },

    {
      id: "oxygen-transport",

      heading: {
        pt: "Como transportar oxigênio sem hemoglobina?",
        en: "How can oxygen be transported without hemoglobin?",
      },

      paragraphs: [
        {
          pt: "Nos peixes-gelo, o oxigênio é transportado principalmente dissolvido no plasma sanguíneo, sem depender da ligação com a hemoglobina.",
          en: "In icefish, oxygen is transported primarily dissolved in blood plasma, without relying on binding to hemoglobin.",
        },
        {
          pt: "Esse mecanismo possui uma capacidade muito menor do que o transporte realizado por sangue rico em hemoglobina. Estudos fisiológicos indicam que a capacidade de transporte de oxigênio desses peixes pode ser inferior a 10% da observada em parentes antárticos de sangue vermelho.",
          en: "This mechanism has a much lower capacity than transport by hemoglobin-rich blood. Physiological studies indicate that these fish may have less than 10% of the oxygen-carrying capacity observed in red-blooded Antarctic relatives.",
        },
        {
          pt: "Para compensar essa limitação, os peixes-gelo apresentam características cardiovasculares que favorecem o deslocamento de grandes volumes de sangue.",
          en: "To compensate for this limitation, icefish exhibit cardiovascular characteristics that favor the movement of large blood volumes.",
        },
        {
          pt: "A sobrevivência desses animais demonstra que a ausência de uma proteína importante pode ser parcialmente compensada por mudanças em diferentes componentes do organismo.",
          en: "Their survival demonstrates that the absence of an important protein can be partially compensated for by changes in different components of the organism.",
        },
      ],
    },

    {
      id: "large-heart",

      heading: {
        pt: "Um coração proporcionalmente enorme",
        en: "A proportionally enormous heart",
      },

      paragraphs: [
        {
          pt: "Uma das características mais marcantes dos peixes-gelo é o tamanho relativamente grande do coração quando comparado ao de peixes de sangue vermelho com dimensões corporais semelhantes.",
          en: "One of the most striking characteristics of icefish is the relatively large size of their hearts compared with red-blooded fish of similar body size.",
        },
        {
          pt: "Um coração maior pode contribuir para um volume de ejeção elevado, permitindo que uma quantidade maior de sangue circule a cada batimento.",
          en: "A larger heart can contribute to a high stroke volume, allowing more blood to circulate with each heartbeat.",
        },
        {
          pt: "Esses animais também apresentam volumes sanguíneos elevados e características vasculares que favorecem a distribuição de oxigênio aos tecidos.",
          en: "These animals also exhibit high blood volumes and vascular characteristics that favor oxygen distribution to tissues.",
        },
        {
          pt: "Essas modificações ajudam a compensar a pequena quantidade de oxigênio transportada por unidade de volume de sangue.",
          en: "These modifications help compensate for the small amount of oxygen carried per unit volume of blood.",
        },
      ],
    },

    {
      id: "blood-viscosity",

      heading: {
        pt: "Sangue menos viscoso",
        en: "Less viscous blood",
      },

      paragraphs: [
        {
          pt: "A ausência de hemácias em circulação em quantidades significativas reduz a viscosidade do sangue dos peixes-gelo.",
          en: "The absence of significant numbers of circulating red blood cells reduces icefish blood viscosity.",
        },
        {
          pt: "A viscosidade representa a resistência de um fluido ao escoamento. Em sistemas circulatórios, ela influencia a energia necessária para movimentar o sangue pelos vasos.",
          en: "Viscosity represents a fluid's resistance to flow. In circulatory systems, it influences the energy required to move blood through vessels.",
        },
        {
          pt: "O sangue menos viscoso pode facilitar a circulação de volumes elevados. Entretanto, isso não elimina os custos associados ao transporte de oxigênio sem hemoglobina.",
          en: "Less viscous blood can facilitate the circulation of large volumes. However, this does not eliminate the costs associated with oxygen transport without hemoglobin.",
        },
        {
          pt: "O sistema cardiovascular dos peixes-gelo representa um conjunto de compensações fisiológicas, e não uma solução necessariamente superior à circulação de outros vertebrados.",
          en: "The icefish cardiovascular system represents a set of physiological compensations rather than a solution necessarily superior to the circulation of other vertebrates.",
        },
      ],
    },

    {
      id: "evolution",

      heading: {
        pt: "Como a evolução permitiu a perda da hemoglobina?",
        en: "How did evolution allow hemoglobin loss?",
      },

      paragraphs: [
        {
          pt: "A ausência de hemoglobina nos peixes-gelo está associada a alterações evolutivas em genes responsáveis pela produção das cadeias dessa proteína.",
          en: "The absence of hemoglobin in icefish is associated with evolutionary changes in genes responsible for producing the protein's chains.",
        },
        {
          pt: "Estudos genéticos identificaram vestígios de sequências relacionadas a genes de globina, oferecendo pistas sobre a perda dessa função ao longo da história evolutiva do grupo.",
          en: "Genetic studies have identified remnants of sequences related to globin genes, providing clues about the loss of this function during the group's evolutionary history.",
        },
        {
          pt: "É importante destacar que a perda de hemoglobina não precisa ter surgido inicialmente como uma vantagem. Uma hipótese é que as condições frias e ricas em oxigênio tenham permitido a persistência de alterações que seriam muito prejudiciais em outros ambientes.",
          en: "It is important to emphasize that hemoglobin loss did not necessarily arise as an initial advantage. One hypothesis is that cold, oxygen-rich conditions allowed changes to persist that would be highly detrimental in other environments.",
        },
        {
          pt: "Posteriormente, características compensatórias do sistema cardiovascular contribuíram para a sobrevivência dessas linhagens.",
          en: "Subsequently, compensatory cardiovascular characteristics contributed to the survival of these lineages.",
        },
      ],
    },

    {
      id: "myoglobin",

      heading: {
        pt: "Alguns peixes-gelo também perderam a mioglobina",
        en: "Some icefish also lost myoglobin",
      },

      paragraphs: [
        {
          pt: "A mioglobina é outra proteína capaz de se ligar ao oxigênio. Ela está presente em tecidos musculares de muitos vertebrados e participa da disponibilidade intracelular desse gás.",
          en: "Myoglobin is another oxygen-binding protein. It is present in muscle tissues of many vertebrates and contributes to intracellular oxygen availability.",
        },
        {
          pt: "Além da ausência de hemoglobina, algumas espécies de peixes-gelo também deixaram de expressar mioglobina no músculo cardíaco.",
          en: "In addition to lacking hemoglobin, some icefish species have also lost myoglobin expression in cardiac muscle.",
        },
        {
          pt: "Essa perda não ocorreu necessariamente da mesma forma em todas as espécies. Estudos evolutivos sugerem eventos distintos de perda da expressão de mioglobina em diferentes linhagens.",
          en: "This loss did not necessarily occur in the same way across all species. Evolutionary studies suggest separate losses of myoglobin expression in different lineages.",
        },
        {
          pt: "A comparação entre espécies com e sem mioglobina cardíaca permite investigar como diferentes sistemas fisiológicos respondem à redução da disponibilidade de proteínas transportadoras de oxigênio.",
          en: "Comparing species with and without cardiac myoglobin allows researchers to investigate how different physiological systems respond to reduced availability of oxygen-binding proteins.",
        },
      ],
    },

    {
      id: "antifreeze",

      heading: {
        pt: "Como não congelam na água antártica?",
        en: "How do they avoid freezing in Antarctic water?",
      },

      paragraphs: [
        {
          pt: "Além das particularidades circulatórias, muitos peixes antárticos possuem proteínas anticongelantes que ajudam a impedir o crescimento de cristais de gelo em seus fluidos corporais.",
          en: "Beyond their circulatory peculiarities, many Antarctic fish possess antifreeze proteins that help prevent ice crystal growth in their body fluids.",
        },
        {
          pt: "Essas proteínas podem se associar a pequenas superfícies de gelo, interferindo no crescimento dos cristais e reduzindo o risco de congelamento.",
          en: "These proteins can associate with small ice surfaces, interfering with crystal growth and reducing the risk of freezing.",
        },
        {
          pt: "Essa característica é distinta da ausência de hemoglobina. São fenômenos fisiológicos diferentes, embora ambos estejam relacionados à evolução em ambientes extremamente frios.",
          en: "This characteristic is distinct from hemoglobin absence. They are different physiological phenomena, although both relate to evolution in extremely cold environments.",
        },
        {
          pt: "A presença de mecanismos anticongelantes foi fundamental para a diversificação de diversas linhagens de peixes no Oceano Austral.",
          en: "The presence of antifreeze mechanisms was fundamental to the diversification of several fish lineages in the Southern Ocean.",
        },
      ],
    },

    {
      id: "climate-change",

      heading: {
        pt: "O aquecimento dos oceanos representa um risco?",
        en: "Does ocean warming pose a risk?",
      },

      paragraphs: [
        {
          pt: "A fisiologia dos peixes-gelo está fortemente associada às condições frias do Oceano Austral. Mudanças na temperatura da água podem alterar tanto a demanda metabólica quanto a disponibilidade de oxigênio.",
          en: "Icefish physiology is strongly associated with the cold conditions of the Southern Ocean. Changes in water temperature can affect both metabolic demand and oxygen availability.",
        },
        {
          pt: "Em geral, águas mais quentes apresentam menor capacidade de dissolver oxigênio. Ao mesmo tempo, o aumento da temperatura pode elevar as necessidades metabólicas de animais ectotérmicos.",
          en: "In general, warmer waters have a lower capacity to dissolve oxygen. At the same time, increasing temperature can raise the metabolic requirements of ectothermic animals.",
        },
        {
          pt: "Essa combinação pode ser particularmente desafiadora para organismos que dependem do oxigênio dissolvido no plasma e de sistemas cardiovasculares altamente especializados.",
          en: "This combination may be particularly challenging for organisms that depend on oxygen dissolved in plasma and highly specialized cardiovascular systems.",
        },
        {
          pt: "Pesquisas experimentais indicam diferenças na tolerância ao aquecimento entre espécies antárticas. Entretanto, a resposta futura dos peixes-gelo dependerá também de mudanças ecológicas, comportamentais e ambientais.",
          en: "Experimental research indicates differences in warming tolerance among Antarctic species. However, the future response of icefish will also depend on ecological, behavioral, and environmental changes.",
        },
      ],
    },

    {
      id: "scientific-importance",

      heading: {
        pt: "Por que esses peixes interessam tanto aos cientistas?",
        en: "Why are these fish so interesting to scientists?",
      },

      paragraphs: [
        {
          pt: "Os peixes-gelo oferecem uma oportunidade rara para investigar a evolução da fisiologia cardiovascular e os efeitos da perda de proteínas importantes.",
          en: "Icefish offer a rare opportunity to investigate the evolution of cardiovascular physiology and the effects of losing important proteins.",
        },
        {
          pt: "A comparação com espécies aparentadas que mantiveram a hemoglobina ajuda a identificar mudanças genéticas, anatômicas e metabólicas associadas à ausência dessa proteína.",
          en: "Comparisons with related species that retained hemoglobin help identify genetic, anatomical, and metabolic changes associated with its absence.",
        },
        {
          pt: "Esses estudos também contribuem para compreender os limites do transporte de oxigênio e a interação entre ambiente, metabolismo e circulação.",
          en: "These studies also contribute to understanding the limits of oxygen transport and the interaction between environment, metabolism, and circulation.",
        },
        {
          pt: "O valor científico desses animais não está em representar uma fisiologia ideal, mas em revelar como a evolução pode produzir organismos viáveis mesmo após mudanças funcionais profundas.",
          en: "The scientific value of these animals lies not in representing ideal physiology, but in revealing how evolution can produce viable organisms even after profound functional changes.",
        },
      ],
    },

    {
      id: "conclusion",

      heading: {
        pt: "A evolução nem sempre segue o caminho esperado",
        en: "Evolution does not always follow the expected path",
      },

      paragraphs: [
        {
          pt: "Os peixes-gelo antárticos desafiam uma expectativa comum sobre os vertebrados: a de que a hemoglobina seria indispensável para a sobrevivência de todos eles.",
          en: "Antarctic icefish challenge a common expectation about vertebrates: that hemoglobin would be indispensable for the survival of all of them.",
        },
        {
          pt: "Sua existência foi possível em um ambiente muito particular, com águas frias e relativamente ricas em oxigênio, combinado a modificações importantes no sistema cardiovascular.",
          en: "Their existence became possible in a very particular environment, with cold, relatively oxygen-rich waters, combined with important modifications to the cardiovascular system.",
        },
        {
          pt: "A perda de hemoglobina também demonstra que a evolução não consiste apenas no surgimento de novas estruturas. A perda de funções pode fazer parte da história de uma linhagem, acompanhada por compensações e limitações.",
          en: "Hemoglobin loss also demonstrates that evolution is not only about the emergence of new structures. Loss of function can be part of a lineage's history, accompanied by compensations and limitations.",
        },
        {
          pt: "Em um dos ambientes mais frios do planeta, esses peixes revelam até onde a diversidade fisiológica dos vertebrados pode chegar.",
          en: "In one of the coldest environments on the planet, these fish reveal how far vertebrate physiological diversity can extend.",
        },
      ],
    },
  ],

  references: [
    {
      title:
        "When bad things happen to good fish: the loss of hemoglobin and myoglobin expression in Antarctic icefishes",
      authors: "Sidell, B. D. & O'Brien, K. M.",
      year: 2006,
      url: "https://doi.org/10.1242/jeb.02091",
    },
    {
      title:
        "Tracking the evolutionary loss of hemoglobin expression by the white-blooded Antarctic icefishes",
      authors: "di Prisco, G. et al.",
      year: 2002,
      url: "https://pubmed.ncbi.nlm.nih.gov/12354652/",
    },
    {
      title:
        "The unique mitochondrial form and function of Antarctic channichthyid icefishes",
      authors: "O'Brien, K. M. & Mueller, I. A.",
      year: 2010,
      url: "https://pubmed.ncbi.nlm.nih.gov/21558255/",
    },
    {
      title:
        "Gene loss in Antarctic icefish: evolutionary adaptations mimicking Fanconi Anemia?",
      authors: "BMC Genomics",
      year: 2024,
      url: "https://doi.org/10.1186/s12864-024-11028-0",
    },
    {
      title:
        "Antarctic teleosts with and without hemoglobin behaviorally mitigate deleterious effects of acute environmental warming",
      authors: "Scientific Reports",
      year: 2021,
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8612528/",
    },
  ],
};
