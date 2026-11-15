
import type { KnowledgePost } from "../../knowledge.types";

export const octopusThreeHearts: KnowledgePost = {
  slug: "octopus-three-hearts",

  title: {
    pt: "Por que os polvos têm três corações e sangue azul?",
    en: "Why do octopuses have three hearts and blue blood?",
  },

  description: {
    pt: "Os polvos possuem três corações, sangue azul e um sistema circulatório surpreendentemente complexo. Descubra como funciona sua circulação, por que utilizam hemocianina e como essas características influenciam sua sobrevivência.",
    en: "Octopuses have three hearts, blue blood, and a remarkably complex circulatory system. Discover how their circulation works, why they use hemocyanin, and how these features influence their survival.",
  },

  category: "science",
  date: "2026-11-15",
  readingMinutes: 12,

  tags: [
    "biology",
    "marine-biology",
    "octopus",
    "cephalopods",
    "hemocyanin",
    "circulatory-system",
    "evolution",
  ],

  cover: {
    src: "/images/knowledge/octopus-three-hearts-cover.jpg",

    alt: {
      pt: "Polvo em ambiente marinho, exibindo seus oito braços e a textura de sua pele.",
      en: "Octopus in a marine environment, displaying its eight arms and textured skin.",
    },

    caption: {
      pt: "Os polvos possuem um sistema circulatório fechado, três corações e hemocianina como principal pigmento respiratório.",
      en: "Octopuses have a closed circulatory system, three hearts, and hemocyanin as their main respiratory pigment.",
    },

    credit: "A definir conforme a imagem escolhida",

    sourceUrl:
      "https://ocean.si.edu/ocean-life/invertebrates/octopuses",
  },

  sections: [
    {
      id: "introduction",

      heading: {
        pt: "Um animal com três corações",
        en: "An animal with three hearts",
      },

      paragraphs: [
        {
          pt: "Os polvos estão entre os invertebrados mais complexos conhecidos. Além de sua capacidade de camuflagem, comportamento exploratório e sistema nervoso altamente desenvolvido, apresentam uma característica anatômica incomum: possuem três corações.",
          en: "Octopuses are among the most complex invertebrates known. Beyond their camouflage abilities, exploratory behavior, and highly developed nervous system, they possess an unusual anatomical feature: three hearts.",
        },
        {
          pt: "Dois desses corações estão associados à circulação pelas brânquias, enquanto o terceiro impulsiona o sangue oxigenado para o restante do corpo.",
          en: "Two of these hearts are associated with circulation through the gills, while the third pumps oxygenated blood to the rest of the body.",
        },
        {
          pt: "Outra característica marcante é a coloração azulada do sangue quando oxigenado. Diferentemente dos vertebrados, que geralmente utilizam hemoglobina, os polvos transportam oxigênio principalmente por meio de uma proteína chamada hemocianina.",
          en: "Another striking feature is the bluish color of their blood when oxygenated. Unlike vertebrates, which generally use hemoglobin, octopuses transport oxygen primarily through a protein called hemocyanin.",
        },
        {
          pt: "Essas características fazem parte de um sistema fisiológico adaptado às exigências metabólicas e ao modo de vida dos cefalópodes.",
          en: "These characteristics are part of a physiological system adapted to the metabolic demands and lifestyle of cephalopods.",
        },
      ],
    },

    {
      id: "cephalopods",

      heading: {
        pt: "O que são cefalópodes?",
        en: "What are cephalopods?",
      },

      paragraphs: [
        {
          pt: "Os polvos pertencem à classe Cephalopoda, dentro do filo Mollusca. Esse grupo também inclui lulas, sépias e náutilos.",
          en: "Octopuses belong to the class Cephalopoda within the phylum Mollusca. This group also includes squids, cuttlefish, and nautiluses.",
        },
        {
          pt: "Embora sejam parentes de outros moluscos, como caracóis e bivalves, os cefalópodes apresentam características bastante especializadas.",
          en: "Although they are related to other mollusks, such as snails and bivalves, cephalopods exhibit highly specialized characteristics.",
        },
        {
          pt: "Entre essas características estão olhos complexos, sistemas nervosos desenvolvidos, comportamento predatório ativo e mecanismos eficientes de locomoção.",
          en: "These characteristics include complex eyes, developed nervous systems, active predatory behavior, and efficient locomotion mechanisms.",
        },
        {
          pt: "O sistema circulatório fechado dos cefalópodes é uma diferença importante em relação à maioria dos outros moluscos, que possuem circulação aberta.",
          en: "The closed circulatory system of cephalopods is an important difference from most other mollusks, which have open circulation.",
        },
      ],
    },

    {
      id: "three-hearts",

      heading: {
        pt: "A função de cada um dos três corações",
        en: "The function of each of the three hearts",
      },

      paragraphs: [
        {
          pt: "O sistema circulatório dos polvos inclui um coração sistêmico e dois corações branquiais.",
          en: "The octopus circulatory system includes one systemic heart and two branchial hearts.",
        },
        {
          pt: "O coração sistêmico recebe sangue oxigenado proveniente das brânquias e o impulsiona para os tecidos do corpo, fornecendo oxigênio e nutrientes às células.",
          en: "The systemic heart receives oxygenated blood from the gills and pumps it to body tissues, supplying oxygen and nutrients to cells.",
        },
        {
          pt: "Os dois corações branquiais ajudam a impulsionar o sangue pobre em oxigênio através das brânquias, onde ocorre a troca gasosa com a água do mar.",
          en: "The two branchial hearts help pump oxygen-poor blood through the gills, where gas exchange occurs with seawater.",
        },
        {
          pt: "Essa divisão de funções permite manter a circulação através das estruturas respiratórias e do restante do organismo, atendendo às exigências fisiológicas desses animais.",
          en: "This division of functions helps maintain circulation through respiratory structures and the rest of the organism, meeting these animals' physiological demands.",
        },
      ],
    },

    {
      id: "circulatory-path",

      heading: {
        pt: "O caminho do sangue pelo corpo",
        en: "The path of blood through the body",
      },

      paragraphs: [
        {
          pt: "O sangue que retorna dos tecidos apresenta uma quantidade reduzida de oxigênio. Ele é direcionado aos corações branquiais, que auxiliam sua passagem pelas brânquias.",
          en: "Blood returning from body tissues contains a reduced amount of oxygen. It is directed toward the branchial hearts, which assist its passage through the gills.",
        },
        {
          pt: "Nas brânquias, o oxigênio dissolvido na água atravessa superfícies respiratórias e entra no sangue, enquanto o dióxido de carbono é eliminado.",
          en: "In the gills, oxygen dissolved in water crosses respiratory surfaces and enters the blood, while carbon dioxide is released.",
        },
        {
          pt: "O sangue oxigenado segue para o coração sistêmico, que o distribui pelas artérias até os diferentes órgãos.",
          en: "Oxygenated blood then travels to the systemic heart, which distributes it through arteries to different organs.",
        },
        {
          pt: "Depois de fornecer oxigênio aos tecidos, o sangue retorna pela circulação venosa, completando o circuito.",
          en: "After supplying oxygen to tissues, blood returns through the venous circulation, completing the circuit.",
        },
      ],
    },

    {
      id: "blue-blood",

      heading: {
        pt: "Por que o sangue dos polvos é azul?",
        en: "Why is octopus blood blue?",
      },

      paragraphs: [
        {
          pt: "A coloração azulada do sangue dos polvos está associada à hemocianina, uma proteína respiratória que contém cobre em seus centros de ligação ao oxigênio.",
          en: "The bluish color of octopus blood is associated with hemocyanin, a respiratory protein containing copper at its oxygen-binding sites.",
        },
        {
          pt: "Quando a hemocianina se liga ao oxigênio, ocorre uma alteração em seu estado eletrônico que produz a coloração azul característica.",
          en: "When hemocyanin binds oxygen, a change in its electronic state produces the characteristic blue coloration.",
        },
        {
          pt: "A hemocianina circula dissolvida na hemolinfa ou no sangue dos animais que a utilizam, em vez de ficar necessariamente confinada dentro de células equivalentes às hemácias dos vertebrados.",
          en: "Hemocyanin circulates dissolved in the hemolymph or blood of animals that use it, rather than necessarily being confined within cells equivalent to vertebrate red blood cells.",
        },
        {
          pt: "O sangue desoxigenado não apresenta a mesma coloração azul intensa. Sua aparência pode ser muito mais pálida.",
          en: "Deoxygenated blood does not display the same intense blue coloration. Its appearance may be much paler.",
        },
      ],
    },

    {
      id: "hemocyanin-vs-hemoglobin",

      heading: {
        pt: "Hemocianina e hemoglobina: qual é a diferença?",
        en: "Hemocyanin and hemoglobin: what is the difference?",
      },

      paragraphs: [
        {
          pt: "Hemoglobina e hemocianina possuem uma função geral semelhante: transportar oxigênio. Entretanto, diferem significativamente em sua estrutura molecular e nos metais envolvidos na ligação ao gás.",
          en: "Hemoglobin and hemocyanin share a similar general function: transporting oxygen. However, they differ significantly in molecular structure and in the metals involved in oxygen binding.",
        },
        {
          pt: "A hemoglobina dos vertebrados utiliza grupos heme contendo ferro. A hemocianina utiliza centros ativos contendo cobre.",
          en: "Vertebrate hemoglobin uses iron-containing heme groups. Hemocyanin uses copper-containing active sites.",
        },
        {
          pt: "Essas proteínas também diferem em sua organização, nas propriedades de ligação ao oxigênio e na maneira como respondem a condições como temperatura, pH e composição do meio.",
          en: "These proteins also differ in organization, oxygen-binding properties, and how they respond to conditions such as temperature, pH, and environmental composition.",
        },
        {
          pt: "Não existe uma regra universal segundo a qual uma dessas proteínas seja sempre superior à outra. Seu desempenho depende do organismo, das condições ambientais e das exigências fisiológicas.",
          en: "There is no universal rule that one of these proteins is always superior to the other. Their performance depends on the organism, environmental conditions, and physiological requirements.",
        },
      ],
    },

    {
      id: "oxygen-affinity",

      heading: {
        pt: "Como a hemocianina responde à temperatura?",
        en: "How does hemocyanin respond to temperature?",
      },

      paragraphs: [
        {
          pt: "A capacidade de uma proteína respiratória de se ligar ao oxigênio e liberá-lo nos tecidos depende de suas propriedades bioquímicas.",
          en: "A respiratory protein's ability to bind oxygen and release it in tissues depends on its biochemical properties.",
        },
        {
          pt: "Em cefalópodes, temperatura, pH e outros fatores podem alterar a afinidade da hemocianina pelo oxigênio. Diferentes espécies apresentam características adaptadas aos ambientes em que vivem.",
          en: "In cephalopods, temperature, pH, and other factors can alter hemocyanin's affinity for oxygen. Different species exhibit properties adapted to the environments they inhabit.",
        },
        {
          pt: "Em águas frias, a disponibilidade de oxigênio dissolvido pode ser relativamente elevada, mas a capacidade de transportar e liberar esse gás continua dependendo das propriedades específicas da hemocianina.",
          en: "In cold waters, dissolved oxygen availability may be relatively high, but the ability to transport and release that gas still depends on hemocyanin's specific properties.",
        },
        {
          pt: "Por isso, afirmar que o sangue azul existe simplesmente porque funciona melhor em águas frias seria uma simplificação excessiva da fisiologia desses animais.",
          en: "For this reason, claiming that blue blood exists simply because it works better in cold water would be an oversimplification of these animals' physiology.",
        },
      ],
    },

    {
      id: "swimming",

      heading: {
        pt: "O que acontece com os corações quando o polvo nada?",
        en: "What happens to the hearts when an octopus swims?",
      },

      paragraphs: [
        {
          pt: "Os polvos podem se locomover rastejando com os braços ou utilizando propulsão a jato, na qual expulsam água pela estrutura conhecida como sifão.",
          en: "Octopuses can move by crawling with their arms or by using jet propulsion, in which they expel water through a structure known as the siphon.",
        },
        {
          pt: "A propulsão a jato permite movimentos rápidos, mas pode exigir um gasto energético elevado.",
          en: "Jet propulsion allows rapid movement but can require substantial energy expenditure.",
        },
        {
          pt: "Durante a natação, mudanças na atividade cardíaca e na circulação podem ocorrer em resposta às demandas fisiológicas. Algumas descrições populares afirmam que o coração sistêmico simplesmente para de bater quando o polvo nada, mas essa afirmação não deve ser tratada como uma regra universal.",
          en: "During swimming, changes in cardiac activity and circulation may occur in response to physiological demands. Some popular descriptions claim that the systemic heart simply stops beating whenever an octopus swims, but this should not be treated as a universal rule.",
        },
        {
          pt: "O comportamento cardiovascular depende da espécie, da intensidade da atividade e das condições experimentais. A fisiologia real é mais complexa do que a ideia de que um dos corações sempre desliga durante a locomoção.",
          en: "Cardiovascular behavior depends on species, activity intensity, and experimental conditions. The actual physiology is more complex than the idea that one heart always switches off during movement.",
        },
      ],
    },

    {
      id: "closed-circulation",

      heading: {
        pt: "Um sistema circulatório fechado",
        en: "A closed circulatory system",
      },

      paragraphs: [
        {
          pt: "Na circulação fechada, o sangue permanece predominantemente dentro de vasos sanguíneos ao longo de seu percurso pelo organismo.",
          en: "In a closed circulatory system, blood remains predominantly within blood vessels as it travels through the organism.",
        },
        {
          pt: "Esse tipo de organização permite maior controle sobre a distribuição do fluxo sanguíneo e sobre as pressões necessárias para transportar substâncias aos tecidos.",
          en: "This organization allows greater control over blood flow distribution and the pressures needed to transport substances to tissues.",
        },
        {
          pt: "A maioria dos moluscos possui circulação aberta, na qual o fluido circulatório também ocupa espaços corporais fora de uma rede vascular completamente fechada.",
          en: "Most mollusks have open circulation, in which circulatory fluid also occupies body spaces outside a fully enclosed vascular network.",
        },
        {
          pt: "Os cefalópodes representam uma importante exceção dentro desse grupo, apresentando circulação fechada associada a um estilo de vida frequentemente ativo e predatório.",
          en: "Cephalopods represent an important exception within this group, exhibiting closed circulation associated with an often active, predatory lifestyle.",
        },
      ],
    },

    {
      id: "nervous-system",

      heading: {
        pt: "Circulação e um sistema nervoso extraordinário",
        en: "Circulation and an extraordinary nervous system",
      },

      paragraphs: [
        {
          pt: "Os polvos possuem um sistema nervoso altamente desenvolvido, com grande quantidade de neurônios distribuídos entre o cérebro central e os braços.",
          en: "Octopuses possess a highly developed nervous system, with large numbers of neurons distributed between the central brain and the arms.",
        },
        {
          pt: "Essa organização permite comportamentos complexos, como exploração de objetos, manipulação do ambiente e respostas flexíveis a diferentes situações.",
          en: "This organization allows complex behaviors such as object exploration, environmental manipulation, and flexible responses to different situations.",
        },
        {
          pt: "O funcionamento de tecidos nervosos e musculares depende de fornecimento contínuo de energia e oxigênio, tornando a circulação um componente essencial da fisiologia desses animais.",
          en: "The functioning of nervous and muscular tissues depends on a continuous supply of energy and oxygen, making circulation an essential component of these animals' physiology.",
        },
        {
          pt: "Entretanto, a existência de três corações não deve ser interpretada como causa direta da inteligência dos polvos. Trata-se de sistemas biológicos diferentes, que interagem para sustentar o funcionamento do organismo.",
          en: "However, the existence of three hearts should not be interpreted as the direct cause of octopus intelligence. These are different biological systems that interact to sustain the organism's functioning.",
        },
      ],
    },

    {
      id: "evolution",

      heading: {
        pt: "Por que a evolução produziu três corações?",
        en: "Why did evolution produce three hearts?",
      },

      paragraphs: [
        {
          pt: "A organização cardiovascular dos cefalópodes está relacionada à evolução de um sistema circulatório capaz de sustentar a respiração branquial e a distribuição de oxigênio pelo corpo.",
          en: "Cephalopod cardiovascular organization is related to the evolution of a circulatory system capable of supporting gill respiration and oxygen distribution throughout the body.",
        },
        {
          pt: "A presença de corações branquiais permite gerar pressão para impulsionar o sangue através das brânquias, enquanto o coração sistêmico mantém a circulação corporal.",
          en: "The presence of branchial hearts allows pressure to be generated to move blood through the gills, while the systemic heart maintains circulation throughout the body.",
        },
        {
          pt: "Essas características não surgiram porque os animais precisavam conscientemente de mais corações. Elas resultam de processos evolutivos envolvendo variação hereditária, seleção natural e mudanças acumuladas ao longo de muitas gerações.",
          en: "These characteristics did not arise because the animals consciously needed more hearts. They result from evolutionary processes involving inherited variation, natural selection, and changes accumulated over many generations.",
        },
        {
          pt: "A história evolutiva dos cefalópodes demonstra que sistemas circulatórios complexos podem surgir por caminhos diferentes daqueles observados nos vertebrados.",
          en: "Cephalopod evolutionary history demonstrates that complex circulatory systems can arise through pathways different from those observed in vertebrates.",
        },
      ],
    },

    {
      id: "environmental-challenges",

      heading: {
        pt: "O que acontece quando o oceano muda?",
        en: "What happens when the ocean changes?",
      },

      paragraphs: [
        {
          pt: "A disponibilidade de oxigênio nos oceanos depende de fatores como temperatura, circulação da água e atividade biológica.",
          en: "Oxygen availability in the oceans depends on factors such as temperature, water circulation, and biological activity.",
        },
        {
          pt: "Mudanças ambientais podem alterar a quantidade de oxigênio disponível e afetar a eficiência de processos respiratórios em animais marinhos.",
          en: "Environmental changes can alter the amount of available oxygen and affect the efficiency of respiratory processes in marine animals.",
        },
        {
          pt: "Nos cefalópodes, as propriedades da hemocianina e as exigências metabólicas tornam importante compreender como diferentes espécies respondem ao aquecimento, à redução do oxigênio e às alterações químicas da água.",
          en: "In cephalopods, hemocyanin properties and metabolic demands make it important to understand how different species respond to warming, oxygen reduction, and changes in water chemistry.",
        },
        {
          pt: "Essas respostas variam entre espécies e ambientes, e não podem ser reduzidas a uma única consequência universal para todos os polvos.",
          en: "These responses vary across species and environments and cannot be reduced to a single universal consequence for all octopuses.",
        },
      ],
    },

    {
      id: "scientific-importance",

      heading: {
        pt: "Por que estudar o sangue dos polvos?",
        en: "Why study octopus blood?",
      },

      paragraphs: [
        {
          pt: "O sistema circulatório dos polvos oferece uma oportunidade para comparar diferentes soluções evolutivas para o transporte de oxigênio.",
          en: "The octopus circulatory system provides an opportunity to compare different evolutionary solutions for oxygen transport.",
        },
        {
          pt: "O estudo da hemocianina contribui para compreender como proteínas respiratórias se ligam ao oxigênio e respondem a mudanças ambientais.",
          en: "Studying hemocyanin contributes to understanding how respiratory proteins bind oxygen and respond to environmental changes.",
        },
        {
          pt: "A comparação entre cefalópodes, vertebrados e outros invertebrados também revela diferenças importantes na organização cardiovascular.",
          en: "Comparisons among cephalopods, vertebrates, and other invertebrates also reveal important differences in cardiovascular organization.",
        },
        {
          pt: "Essas pesquisas ampliam nosso conhecimento sobre fisiologia comparada, evolução e os limites de funcionamento de sistemas biológicos.",
          en: "These studies expand our understanding of comparative physiology, evolution, and the functional limits of biological systems.",
        },
      ],
    },

    {
      id: "conclusion",

      heading: {
        pt: "Três corações, um sistema extraordinário",
        en: "Three hearts, one extraordinary system",
      },

      paragraphs: [
        {
          pt: "Os três corações dos polvos não são estruturas redundantes. Cada um desempenha uma função importante no transporte do sangue através das brânquias e do restante do corpo.",
          en: "The three hearts of octopuses are not redundant structures. Each plays an important role in transporting blood through the gills and the rest of the body.",
        },
        {
          pt: "A hemocianina, responsável pela coloração azulada do sangue oxigenado, representa uma alternativa evolutiva à hemoglobina utilizada pela maioria dos vertebrados.",
          en: "Hemocyanin, responsible for the bluish color of oxygenated blood, represents an evolutionary alternative to the hemoglobin used by most vertebrates.",
        },
        {
          pt: "Essas características estão integradas a um organismo com comportamento complexo, grande capacidade de adaptação e uma história evolutiva distinta da nossa.",
          en: "These characteristics are integrated into an organism with complex behavior, considerable adaptability, and an evolutionary history distinct from our own.",
        },
        {
          pt: "O polvo demonstra que a evolução pode produzir diferentes soluções para um mesmo problema fundamental: fornecer oxigênio às células e manter a vida.",
          en: "The octopus demonstrates that evolution can produce different solutions to the same fundamental problem: supplying oxygen to cells and sustaining life.",
        },
      ],
    },
  ],

  references: [
    {
      title: "Octopuses",
      authors: "Smithsonian Ocean",
      url: "https://ocean.si.edu/ocean-life/invertebrates/octopuses",
    },
    {
      title: "Cephalopod Biology",
      authors: "Encyclopaedia Britannica",
      url: "https://www.britannica.com/animal/cephalopod",
    },
    {
      title: "Hemocyanin",
      authors: "Encyclopaedia Britannica",
      url: "https://www.britannica.com/science/hemocyanin",
    },
    {
      title: "The Biology of Cephalopods",
      authors: "Nixon, M. & Young, J. Z.",
      year: 2003,
      url: "https://global.oup.com/",
    },
    {
      title: "Cephalopod Physiology",
      authors: "Annual Review of Physiology",
      url: "https://www.annualreviews.org/",
    },
  ],
};
