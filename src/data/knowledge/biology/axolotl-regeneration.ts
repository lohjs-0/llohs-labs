
import type { KnowledgePost } from "../../knowledge.types";

export const axolotlRegeneration: KnowledgePost = {
  slug: "axolotl-regeneration",

  title: {
    pt: "Axolotes: os animais capazes de reconstruir partes do próprio corpo",
    en: "Axolotls: the animals capable of rebuilding parts of their own bodies",
  },

  description: {
    pt: "Os axolotes conseguem regenerar membros completos, partes do coração e tecidos nervosos. Entenda como funciona o blastema, como as células coordenam a reconstrução e o que essa capacidade revela sobre a medicina regenerativa.",
    en: "Axolotls can regenerate entire limbs, parts of the heart, and nervous tissue. Explore how the blastema works, how cells coordinate reconstruction, and what this ability reveals about regenerative medicine.",
  },

  category: "science",
  date: "2026-11-15",
  readingMinutes: 14,

  tags: [
    "biology",
    "regeneration",
    "axolotl",
    "ambystoma-mexicanum",
    "stem-cells",
    "developmental-biology",
    "genetics",
    "regenerative-medicine",
  ],

  cover: {
    src: "/images/knowledge/axolotl-regeneration-cover.jpg",

    alt: {
      pt: "Axolote mexicano com brânquias externas ramificadas.",
      en: "Mexican axolotl with branched external gills.",
    },

    caption: {
      pt: "O axolote (Ambystoma mexicanum) é um importante organismo-modelo para o estudo da regeneração de tecidos e órgãos.",
      en: "The axolotl (Ambystoma mexicanum) is an important model organism for studying tissue and organ regeneration.",
    },

    credit: "A definir conforme a imagem escolhida",

    sourceUrl:
      "https://commons.wikimedia.org/wiki/Category:Ambystoma_mexicanum",
  },

  sections: [
    {
      id: "introduction",

      heading: {
        pt: "Um vertebrado que desafia os limites da regeneração",
        en: "A vertebrate that challenges the limits of regeneration",
      },

      paragraphs: [
        {
          pt: "Quando um ser humano perde um membro, seu organismo não consegue reconstruí-lo. A cicatrização fecha a ferida e restaura parte da integridade dos tecidos, mas não reproduz a estrutura perdida.",
          en: "When a human loses a limb, the body cannot rebuild it. Wound healing closes the injury and restores some tissue integrity, but it does not reproduce the lost structure.",
        },
        {
          pt: "O axolote, uma salamandra aquática originária do México, apresenta uma capacidade regenerativa muito mais extensa. Ele pode reconstruir membros amputados, incluindo ossos, músculos, vasos sanguíneos, nervos e pele.",
          en: "The axolotl, an aquatic salamander native to Mexico, has a much more extensive regenerative capacity. It can rebuild amputated limbs, including bones, muscles, blood vessels, nerves, and skin.",
        },
        {
          pt: "Essa capacidade também se estende a determinadas lesões em tecidos como coração, medula espinhal e estruturas do sistema nervoso central.",
          en: "This ability also extends to certain injuries in tissues such as the heart, spinal cord, and structures of the central nervous system.",
        },
        {
          pt: "A regeneração não acontece instantaneamente nem é ilimitada. Ela depende do tipo de lesão, da idade, das condições fisiológicas e de processos celulares cuidadosamente coordenados.",
          en: "Regeneration is neither instantaneous nor unlimited. It depends on injury type, age, physiological conditions, and carefully coordinated cellular processes.",
        },
      ],
    },

    {
      id: "what-is-an-axolotl",

      heading: {
        pt: "O que é um axolote?",
        en: "What is an axolotl?",
      },

      paragraphs: [
        {
          pt: "O axolote, cujo nome científico é Ambystoma mexicanum, é um anfíbio pertencente à ordem Caudata, que reúne salamandras e tritões.",
          en: "The axolotl, scientifically known as Ambystoma mexicanum, is an amphibian belonging to the order Caudata, which includes salamanders and newts.",
        },
        {
          pt: "Uma de suas características mais marcantes é a manutenção de características larvais durante a vida adulta, fenômeno conhecido como neotenia.",
          en: "One of its most distinctive characteristics is the retention of larval features into adulthood, a phenomenon known as neoteny.",
        },
        {
          pt: "Diferentemente de muitas salamandras, o axolote normalmente permanece aquático e conserva suas brânquias externas, que aparecem como estruturas ramificadas nas laterais da cabeça.",
          en: "Unlike many salamanders, the axolotl normally remains aquatic and retains its external gills, which appear as branched structures on the sides of its head.",
        },
        {
          pt: "Na natureza, sua distribuição está associada principalmente ao sistema lacustre de Xochimilco, na Cidade do México. A espécie enfrenta ameaças como degradação do habitat, poluição e espécies invasoras.",
          en: "In the wild, its distribution is primarily associated with the Xochimilco lake system in Mexico City. The species faces threats including habitat degradation, pollution, and invasive species.",
        },
      ],
    },

    {
      id: "regeneration-vs-healing",

      heading: {
        pt: "Regeneração não é a mesma coisa que cicatrização",
        en: "Regeneration is not the same as wound healing",
      },

      paragraphs: [
        {
          pt: "A cicatrização convencional costuma envolver inflamação, deposição de matriz extracelular e formação de tecido fibroso. Em muitos tecidos humanos, esse processo produz uma cicatriz.",
          en: "Conventional wound healing often involves inflammation, extracellular matrix deposition, and the formation of fibrous tissue. In many human tissues, this process produces a scar.",
        },
        {
          pt: "A regeneração envolve algo diferente: a restauração organizada de estruturas anatômicas, com tipos celulares e relações espaciais semelhantes aos existentes antes da lesão.",
          en: "Regeneration involves something different: the organized restoration of anatomical structures, with cell types and spatial relationships resembling those present before injury.",
        },
        {
          pt: "No axolote, a resposta inicial à amputação favorece a formação de um ambiente regenerativo em vez de uma cicatriz fibrosa permanente que impeça a reconstrução.",
          en: "In axolotls, the initial response to amputation favors the formation of a regenerative environment rather than a permanent fibrous scar that prevents reconstruction.",
        },
        {
          pt: "Isso não significa que inflamação e reparo estejam ausentes. Pelo contrário, componentes da resposta imune participam ativamente da regeneração.",
          en: "This does not mean that inflammation and repair are absent. On the contrary, components of the immune response actively participate in regeneration.",
        },
      ],
    },

    {
      id: "wound-epidermis",

      heading: {
        pt: "O primeiro passo: fechar a ferida",
        en: "The first step: closing the wound",
      },

      paragraphs: [
        {
          pt: "Após a amputação de um membro, células epidérmicas migram rapidamente para cobrir a superfície lesionada.",
          en: "After limb amputation, epidermal cells rapidly migrate to cover the injured surface.",
        },
        {
          pt: "Essa cobertura forma uma estrutura conhecida como epiderme da ferida, que posteriormente participa da organização dos sinais necessários à regeneração.",
          en: "This covering forms a structure known as the wound epidermis, which subsequently participates in organizing the signals required for regeneration.",
        },
        {
          pt: "A epiderme da ferida não funciona apenas como uma barreira protetora. Ela também contribui para a comunicação molecular com as células presentes abaixo da superfície.",
          en: "The wound epidermis does more than act as a protective barrier. It also contributes to molecular communication with cells beneath the surface.",
        },
        {
          pt: "A interação entre essa estrutura, os tecidos lesionados e os nervos é fundamental para o desenvolvimento das etapas seguintes.",
          en: "The interaction among this structure, injured tissues, and nerves is fundamental to the subsequent stages.",
        },
      ],
    },

    {
      id: "blastema",

      heading: {
        pt: "O blastema: o centro da reconstrução",
        en: "The blastema: the center of reconstruction",
      },

      paragraphs: [
        {
          pt: "Uma das etapas mais importantes da regeneração dos membros é a formação do blastema, uma população organizada de células progenitoras que surge na região da amputação.",
          en: "One of the most important stages of limb regeneration is the formation of the blastema, an organized population of progenitor cells that emerges at the amputation site.",
        },
        {
          pt: "Essas células proliferam e participam da reconstrução das estruturas ausentes. O blastema não é uma massa de células completamente indiferenciadas e equivalentes entre si.",
          en: "These cells proliferate and participate in rebuilding missing structures. The blastema is not a mass of completely undifferentiated, interchangeable cells.",
        },
        {
          pt: "Estudos de rastreamento celular demonstram que muitas células mantêm restrições relacionadas à sua origem tecidual. Por exemplo, células derivadas de determinados tecidos conjuntivos contribuem para estruturas específicas durante a regeneração.",
          en: "Cell lineage-tracing studies show that many cells retain restrictions related to their tissue of origin. For example, cells derived from particular connective tissues contribute to specific structures during regeneration.",
        },
        {
          pt: "O blastema coordena proliferação, diferenciação e organização espacial, permitindo que o membro reconstruído apresente uma anatomia funcional.",
          en: "The blastema coordinates proliferation, differentiation, and spatial organization, allowing the reconstructed limb to develop functional anatomy.",
        },
      ],
    },

    {
      id: "dedifferentiation",

      heading: {
        pt: "As células conseguem voltar a um estado anterior?",
        en: "Can cells return to an earlier state?",
      },

      paragraphs: [
        {
          pt: "Durante a regeneração, algumas células maduras podem sofrer desdiferenciação, um processo no qual perdem parte de suas características especializadas e adquirem maior capacidade proliferativa.",
          en: "During regeneration, some mature cells can undergo dedifferentiation, a process in which they lose some specialized characteristics and acquire greater proliferative capacity.",
        },
        {
          pt: "Entretanto, nem todas as células regenerativas surgem por esse mecanismo. Células-tronco e progenitoras já existentes também podem contribuir para a formação de novos tecidos.",
          en: "However, not all regenerative cells arise through this mechanism. Existing stem and progenitor cells can also contribute to the formation of new tissues.",
        },
        {
          pt: "O processo varia conforme o tecido. A regeneração muscular, por exemplo, envolve mecanismos celulares que não são necessariamente idênticos aos utilizados na reconstrução de cartilagem ou tecido conjuntivo.",
          en: "The process varies by tissue. Muscle regeneration, for example, involves cellular mechanisms that are not necessarily identical to those used to rebuild cartilage or connective tissue.",
        },
        {
          pt: "Assim, a regeneração do axolote não depende de um único tipo de célula milagrosa, mas da participação coordenada de diferentes populações celulares.",
          en: "Therefore, axolotl regeneration does not depend on a single miraculous cell type, but on the coordinated participation of different cell populations.",
        },
      ],
    },

    {
      id: "positional-memory",

      heading: {
        pt: "Como as células sabem o que reconstruir?",
        en: "How do cells know what to rebuild?",
      },

      paragraphs: [
        {
          pt: "Uma questão central da biologia regenerativa é compreender como o organismo determina quais estruturas estão faltando e onde elas devem ser reconstruídas.",
          en: "A central question in regenerative biology is understanding how the organism determines which structures are missing and where they must be rebuilt.",
        },
        {
          pt: "Células dos tecidos conjuntivos participam da chamada memória posicional, um conjunto de informações moleculares relacionadas à localização original dessas células no membro.",
          en: "Connective tissue cells participate in what is called positional memory, a set of molecular information related to their original location within the limb.",
        },
        {
          pt: "Essas informações ajudam a estabelecer padrões espaciais durante a regeneração, contribuindo para que estruturas sejam formadas na ordem e na posição apropriadas.",
          en: "This information helps establish spatial patterns during regeneration, contributing to the formation of structures in the appropriate order and position.",
        },
        {
          pt: "Pesquisas identificaram a participação de programas de expressão gênica e vias de sinalização do desenvolvimento, mas os mecanismos completos da memória posicional continuam sendo investigados.",
          en: "Research has identified roles for gene-expression programs and developmental signaling pathways, but the complete mechanisms of positional memory remain under investigation.",
        },
      ],
    },

    {
      id: "nerves",

      heading: {
        pt: "Por que os nervos são essenciais?",
        en: "Why are nerves essential?",
      },

      paragraphs: [
        {
          pt: "A regeneração dos membros de salamandras depende fortemente da presença de inervação adequada.",
          en: "Salamander limb regeneration strongly depends on the presence of adequate innervation.",
        },
        {
          pt: "Experimentos clássicos demonstraram que a remoção da inervação pode impedir o crescimento normal do blastema e comprometer a reconstrução do membro.",
          en: "Classic experiments demonstrated that removing nerve supply can prevent normal blastema growth and impair limb reconstruction.",
        },
        {
          pt: "Os nervos fornecem sinais que influenciam a proliferação e a sobrevivência de células regenerativas. Entre os fatores estudados estão moléculas envolvidas na comunicação entre tecidos nervosos e células do blastema.",
          en: "Nerves provide signals that influence regenerative cell proliferation and survival. Studied factors include molecules involved in communication between nervous tissue and blastema cells.",
        },
        {
          pt: "A dependência nervosa revela que a regeneração não é controlada exclusivamente pelas células presentes na superfície da lesão.",
          en: "Nerve dependence reveals that regeneration is not controlled exclusively by cells present at the injury surface.",
        },
      ],
    },

    {
      id: "signaling-pathways",

      heading: {
        pt: "Os sinais moleculares da regeneração",
        en: "The molecular signals of regeneration",
      },

      paragraphs: [
        {
          pt: "A regeneração envolve diversas vias de sinalização celular, incluindo famílias de moléculas como FGF, Wnt e BMP, que também participam do desenvolvimento embrionário.",
          en: "Regeneration involves multiple cellular signaling pathways, including molecular families such as FGF, Wnt, and BMP, which also participate in embryonic development.",
        },
        {
          pt: "Essas vias regulam processos como proliferação, diferenciação, organização dos tecidos e comunicação entre diferentes populações celulares.",
          en: "These pathways regulate processes such as proliferation, differentiation, tissue organization, and communication among different cell populations.",
        },
        {
          pt: "A atividade desses sinais precisa ser regulada no espaço e no tempo. Uma molécula que favorece o crescimento em determinada etapa pode produzir resultados diferentes quando ativada em outro contexto.",
          en: "The activity of these signals must be regulated in space and time. A molecule that promotes growth at one stage may produce different outcomes when activated in another context.",
        },
        {
          pt: "O desafio científico não consiste apenas em identificar genes envolvidos, mas em compreender como redes de sinais coordenam a reconstrução de estruturas complexas.",
          en: "The scientific challenge is not merely identifying involved genes, but understanding how signaling networks coordinate the reconstruction of complex structures.",
        },
      ],
    },

    {
      id: "immune-system",

      heading: {
        pt: "O sistema imunológico também participa",
        en: "The immune system also participates",
      },

      paragraphs: [
        {
          pt: "A resposta imunológica após uma lesão não serve apenas para combater microrganismos. Ela também influencia a remoção de tecidos danificados e a organização do ambiente de reparo.",
          en: "The immune response after injury does more than fight microorganisms. It also influences the removal of damaged tissues and the organization of the repair environment.",
        },
        {
          pt: "Nos axolotes, macrófagos desempenham funções importantes durante as etapas iniciais da regeneração.",
          en: "In axolotls, macrophages play important roles during the early stages of regeneration.",
        },
        {
          pt: "Estudos experimentais mostraram que a redução dessas células durante a fase inicial de regeneração pode favorecer fibrose e comprometer a reconstrução normal do membro.",
          en: "Experimental studies have shown that reducing these cells during the early regenerative phase can promote fibrosis and impair normal limb reconstruction.",
        },
        {
          pt: "Esses resultados sugerem que o controle da inflamação e a comunicação entre células imunes e tecidos lesionados são componentes importantes da capacidade regenerativa.",
          en: "These findings suggest that inflammation regulation and communication between immune cells and injured tissues are important components of regenerative capacity.",
        },
      ],
    },

    {
      id: "limb-regeneration",

      heading: {
        pt: "Como um membro completo é reconstruído?",
        en: "How is an entire limb rebuilt?",
      },

      paragraphs: [
        {
          pt: "Após a amputação, a superfície da ferida é coberta por células epidérmicas. Em seguida, populações celulares se reorganizam e formam o blastema.",
          en: "After amputation, the wound surface is covered by epidermal cells. Cell populations then reorganize and form the blastema.",
        },
        {
          pt: "As células proliferam e respondem a sinais posicionais, permitindo a reconstrução progressiva de estruturas como esqueleto, musculatura, vasos sanguíneos e nervos.",
          en: "Cells proliferate and respond to positional signals, allowing the progressive reconstruction of structures such as the skeleton, musculature, blood vessels, and nerves.",
        },
        {
          pt: "A regeneração envolve a restauração da arquitetura do membro, não apenas o crescimento de tecido indiferenciado.",
          en: "Regeneration involves restoring limb architecture, not merely growing undifferentiated tissue.",
        },
        {
          pt: "O tempo necessário varia conforme fatores como temperatura, tamanho do animal, nível da amputação e condições fisiológicas. A reconstrução pode levar semanas ou meses.",
          en: "The time required varies with factors such as temperature, animal size, amputation level, and physiological conditions. Reconstruction may take weeks or months.",
        },
      ],
    },

    {
      id: "heart-regeneration",

      heading: {
        pt: "Axolotes também conseguem regenerar tecido cardíaco",
        en: "Axolotls can also regenerate cardiac tissue",
      },

      paragraphs: [
        {
          pt: "A capacidade regenerativa dos axolotes não está limitada aos membros. Estudos demonstram que esses animais conseguem reparar determinadas lesões no coração com regeneração de tecido cardíaco.",
          en: "Axolotl regenerative capacity is not limited to limbs. Studies show that these animals can repair certain heart injuries through regeneration of cardiac tissue.",
        },
        {
          pt: "Em mamíferos adultos, lesões extensas do músculo cardíaco frequentemente resultam na formação de tecido cicatricial, que não possui a mesma capacidade contrátil do músculo original.",
          en: "In adult mammals, extensive cardiac muscle injuries often result in scar tissue formation, which lacks the contractile capacity of the original muscle.",
        },
        {
          pt: "Nos axolotes, processos de proliferação celular e remodelação tecidual podem contribuir para restaurar partes lesionadas do coração.",
          en: "In axolotls, cellular proliferation and tissue remodeling can contribute to restoring injured portions of the heart.",
        },
        {
          pt: "Isso não significa que qualquer lesão cardíaca seja reparada perfeitamente. A extensão da recuperação depende do modelo experimental e das características da lesão.",
          en: "This does not mean that every cardiac injury is repaired perfectly. The extent of recovery depends on the experimental model and the characteristics of the injury.",
        },
      ],
    },

    {
      id: "spinal-cord",

      heading: {
        pt: "Regeneração da medula espinhal",
        en: "Spinal cord regeneration",
      },

      paragraphs: [
        {
          pt: "Lesões da medula espinhal podem interromper circuitos nervosos responsáveis pela comunicação entre o cérebro e diferentes regiões do corpo.",
          en: "Spinal cord injuries can interrupt neural circuits responsible for communication between the brain and different regions of the body.",
        },
        {
          pt: "Nos mamíferos adultos, a regeneração de conexões nervosas após lesões graves da medula é bastante limitada.",
          en: "In adult mammals, regeneration of neural connections after severe spinal cord injuries is highly limited.",
        },
        {
          pt: "Os axolotes apresentam capacidade de regenerar tecidos da medula espinhal após determinados tipos de lesão, envolvendo proliferação de células progenitoras e reorganização do tecido nervoso.",
          en: "Axolotls can regenerate spinal cord tissues after certain types of injury, involving progenitor cell proliferation and reorganization of nervous tissue.",
        },
        {
          pt: "Essa característica torna o animal um modelo importante para investigar mecanismos celulares que favorecem a recuperação estrutural e funcional do sistema nervoso.",
          en: "This characteristic makes the animal an important model for investigating cellular mechanisms that support structural and functional recovery of the nervous system.",
        },
      ],
    },

    {
      id: "brain-regeneration",

      heading: {
        pt: "O cérebro também possui capacidade regenerativa?",
        en: "Does the brain also have regenerative capacity?",
      },

      paragraphs: [
        {
          pt: "Pesquisas com axolotes demonstraram respostas regenerativas em determinadas regiões do cérebro após lesões experimentais.",
          en: "Research on axolotls has demonstrated regenerative responses in certain brain regions following experimental injuries.",
        },
        {
          pt: "Estudos utilizando técnicas de sequenciamento de RNA de células individuais permitem identificar populações celulares e acompanhar mudanças na expressão gênica durante esses processos.",
          en: "Studies using single-cell RNA sequencing techniques allow researchers to identify cell populations and track gene-expression changes during these processes.",
        },
        {
          pt: "Essas investigações ajudam a compreender como células progenitoras neurais participam da reconstrução de tecidos e como diferentes tipos celulares são produzidos.",
          en: "These investigations help explain how neural progenitor cells participate in tissue reconstruction and how different cell types are produced.",
        },
        {
          pt: "Entretanto, regeneração de tecido cerebral não deve ser confundida com restauração garantida de todas as memórias, experiências ou funções complexas após qualquer lesão.",
          en: "However, brain tissue regeneration should not be confused with guaranteed restoration of all memories, experiences, or complex functions after any injury.",
        },
      ],
    },

    {
      id: "genome",

      heading: {
        pt: "Um genoma extraordinariamente grande",
        en: "An extraordinarily large genome",
      },

      paragraphs: [
        {
          pt: "O axolote possui um dos maiores genomas conhecidos entre os organismos utilizados frequentemente em pesquisas de laboratório.",
          en: "The axolotl has one of the largest genomes known among organisms frequently used in laboratory research.",
        },
        {
          pt: "Seu genoma haploide possui aproximadamente 32 bilhões de pares de bases, cerca de dez vezes o tamanho do genoma humano.",
          en: "Its haploid genome contains approximately 32 billion base pairs, roughly ten times the size of the human genome.",
        },
        {
          pt: "Grande parte dessa dimensão está relacionada à abundância de sequências repetitivas e elementos transponíveis, e não simplesmente a uma quantidade proporcionalmente maior de genes codificadores de proteínas.",
          en: "Much of this size is associated with abundant repetitive sequences and transposable elements, rather than simply a proportionally greater number of protein-coding genes.",
        },
        {
          pt: "O sequenciamento do genoma do axolote representou um avanço importante para a identificação de regiões regulatórias, genes e mecanismos envolvidos no desenvolvimento e na regeneração.",
          en: "Sequencing the axolotl genome represented an important advance in identifying regulatory regions, genes, and mechanisms involved in development and regeneration.",
        },
      ],
    },

    {
      id: "why-humans-cannot",

      heading: {
        pt: "Por que os humanos não regeneram membros?",
        en: "Why can't humans regenerate limbs?",
      },

      paragraphs: [
        {
          pt: "Os seres humanos possuem capacidades regenerativas importantes, mas elas variam muito entre os tecidos. A pele e o revestimento intestinal, por exemplo, apresentam renovação celular contínua.",
          en: "Humans possess important regenerative abilities, but these vary greatly between tissues. Skin and intestinal lining, for example, undergo continuous cellular renewal.",
        },
        {
          pt: "O fígado também apresenta capacidade significativa de recuperar massa e função após determinadas lesões ou remoções parciais.",
          en: "The liver also has a significant ability to recover mass and function after certain injuries or partial removal.",
        },
        {
          pt: "Entretanto, a reconstrução de um membro completo exige coordenação entre numerosos tecidos, sinais posicionais, crescimento celular e organização anatômica.",
          en: "However, rebuilding an entire limb requires coordination among numerous tissues, positional signals, cell growth, and anatomical organization.",
        },
        {
          pt: "Em humanos adultos, a resposta a uma amputação geralmente favorece a cicatrização, sem a formação de um blastema capaz de reconstruir o membro. As razões evolutivas e moleculares dessa diferença continuam sendo investigadas.",
          en: "In adult humans, the response to amputation generally favors wound healing without forming a blastema capable of rebuilding the limb. The evolutionary and molecular reasons for this difference remain under investigation.",
        },
      ],
    },

    {
      id: "regenerative-medicine",

      heading: {
        pt: "O que os axolotes podem ensinar à medicina?",
        en: "What can axolotls teach medicine?",
      },

      paragraphs: [
        {
          pt: "A medicina regenerativa busca desenvolver estratégias para reparar ou substituir células, tecidos e órgãos danificados.",
          en: "Regenerative medicine seeks to develop strategies to repair or replace damaged cells, tissues, and organs.",
        },
        {
          pt: "Os axolotes permitem estudar processos que são limitados ou ausentes em muitos tecidos humanos adultos, como a formação de blastemas e a regeneração extensa de estruturas complexas.",
          en: "Axolotls allow researchers to study processes that are limited or absent in many adult human tissues, such as blastema formation and extensive regeneration of complex structures.",
        },
        {
          pt: "O conhecimento obtido pode orientar pesquisas sobre cicatrização, fibrose, regeneração nervosa, reparo cardíaco e engenharia de tecidos.",
          en: "The knowledge gained may guide research on wound healing, fibrosis, nerve regeneration, cardiac repair, and tissue engineering.",
        },
        {
          pt: "Entretanto, compreender a regeneração em axolotes não significa que já exista uma técnica capaz de fazer seres humanos regenerarem membros completos. A aplicação clínica desses conhecimentos permanece um desafio de longo prazo.",
          en: "However, understanding regeneration in axolotls does not mean that a technique already exists to make humans regrow entire limbs. Clinical application of this knowledge remains a long-term challenge.",
        },
      ],
    },

    {
      id: "cancer",

      heading: {
        pt: "Regeneração e controle do crescimento celular",
        en: "Regeneration and control of cell growth",
      },

      paragraphs: [
        {
          pt: "A regeneração exige que células proliferem intensamente, mas esse crescimento precisa ser controlado para produzir estruturas organizadas.",
          en: "Regeneration requires intense cell proliferation, but that growth must be controlled to produce organized structures.",
        },
        {
          pt: "Essa necessidade desperta interesse científico porque o crescimento celular desregulado também é uma característica central do câncer.",
          en: "This requirement attracts scientific interest because uncontrolled cell growth is also a central feature of cancer.",
        },
        {
          pt: "Pesquisadores investigam como mecanismos de sinalização, diferenciação e organização tecidual limitam o crescimento durante a regeneração.",
          en: "Researchers investigate how signaling, differentiation, and tissue organization mechanisms constrain growth during regeneration.",
        },
        {
          pt: "Isso não significa que axolotes sejam imunes ao câncer. A relação entre regeneração e formação de tumores é complexa e não permite conclusões simples.",
          en: "This does not mean that axolotls are immune to cancer. The relationship between regeneration and tumor formation is complex and does not support simple conclusions.",
        },
      ],
    },

    {
      id: "conservation",

      heading: {
        pt: "Um animal extraordinário ameaçado de extinção",
        en: "An extraordinary animal threatened with extinction",
      },

      paragraphs: [
        {
          pt: "Apesar de sua importância científica, o axolote enfrenta uma situação crítica em seu habitat natural.",
          en: "Despite its scientific importance, the axolotl faces a critical situation in its natural habitat.",
        },
        {
          pt: "A urbanização, a poluição da água, a alteração dos canais de Xochimilco e a presença de espécies invasoras contribuíram para o declínio das populações selvagens.",
          en: "Urbanization, water pollution, changes to the Xochimilco canals, and invasive species have contributed to the decline of wild populations.",
        },
        {
          pt: "A existência de numerosos axolotes mantidos em laboratórios e criadouros não elimina a necessidade de conservar as populações naturais e seus ecossistemas.",
          en: "The existence of numerous axolotls maintained in laboratories and breeding facilities does not eliminate the need to conserve wild populations and their ecosystems.",
        },
        {
          pt: "A proteção da espécie depende de iniciativas de restauração ambiental, monitoramento e conservação de seu habitat.",
          en: "Protecting the species depends on environmental restoration, monitoring, and habitat conservation initiatives.",
        },
      ],
    },

    {
      id: "conclusion",

      heading: {
        pt: "O que a regeneração revela sobre a vida?",
        en: "What does regeneration reveal about life?",
      },

      paragraphs: [
        {
          pt: "O axolote demonstra que a capacidade de reconstruir estruturas complexas não está restrita ao desenvolvimento embrionário. Em determinadas espécies, programas celulares de crescimento e organização podem ser reativados após lesões.",
          en: "The axolotl demonstrates that the ability to rebuild complex structures is not restricted to embryonic development. In certain species, cellular programs of growth and organization can be reactivated after injury.",
        },
        {
          pt: "Essa regeneração depende de processos integrados: resposta imunológica, formação do blastema, comunicação nervosa, sinalização molecular e memória posicional.",
          en: "This regeneration depends on integrated processes: immune response, blastema formation, nerve communication, molecular signaling, and positional memory.",
        },
        {
          pt: "Compreender esses mecanismos pode transformar nossa visão sobre os limites da reparação biológica, mesmo que a regeneração completa de membros humanos ainda esteja distante.",
          en: "Understanding these mechanisms may transform our view of the limits of biological repair, even though complete human limb regeneration remains distant.",
        },
        {
          pt: "O axolote não oferece uma fórmula mágica para a medicina. Ele oferece algo mais valioso para a ciência: um exemplo real de como um organismo vertebrado consegue reconstruir partes complexas de si mesmo.",
          en: "The axolotl does not offer a magical formula for medicine. It offers something more valuable to science: a real example of how a vertebrate organism can rebuild complex parts of itself.",
        },
      ],
    },
  ],

  references: [
    {
      title:
        "The axolotl genome and the evolution of key tissue formation regulators",
      authors: "Nowoshilow, S. et al.",
      year: 2018,
      url: "https://doi.org/10.1038/nature25458",
    },
    {
      title:
        "The cellular basis of limb regeneration in axolotls",
      authors: "Kragl, M. et al.",
      year: 2009,
      url: "https://doi.org/10.1038/nature08152",
    },
    {
      title:
        "Macrophages are required for adult salamander limb regeneration",
      authors: "Godwin, J. W., Pinto, A. R. & Rosenthal, N. A.",
      year: 2013,
      url: "https://doi.org/10.1073/pnas.1300290110",
    },
    {
      title:
        "Axolotl",
      authors: "Smithsonian's National Zoo",
      url: "https://nationalzoo.si.edu/animals/axolotl",
    },
    {
      title:
        "Ambystoma mexicanum",
      authors: "IUCN Red List of Threatened Species",
      url: "https://www.iucnredlist.org/search?query=Ambystoma%20mexicanum&searchType=species",
    },
  ],
};
