
import type { KnowledgePost } from "../../knowledge.types";

export const transistorsDigitalLogic: KnowledgePost = {
  slug: "transistors-digital-logic",

  title: {
    pt: "Como transistores representam 0 e 1?",
    en: "How do transistors represent 0 and 1?",
  },

  description: {
    pt: "Como um componente semicondutor pode representar informação? Uma exploração dos transistores MOSFET, níveis lógicos, portas CMOS e dos fundamentos físicos da computação digital.",
    en: "How can a semiconductor component represent information? An exploration of MOSFET transistors, logic levels, CMOS gates, and the physical foundations of digital computing.",
  },

  category: "electronics",
  date: "2026-11-15",
  readingMinutes: 13,

  tags: [
    "electronics",
    "transistors",
    "digital-logic",
    "mosfet",
    "cmos",
    "logic-gates",
    "computer-architecture",
    "semiconductors",
  ],

  cover: {
    src: "/images/knowledge/transistors-digital-logic-cover.jpg",

    alt: {
      pt: "Circuito integrado com transistores e conexões microscópicas.",
      en: "Integrated circuit with transistors and microscopic interconnections.",
    },

    caption: {
      pt: "A lógica digital é implementada por circuitos eletrônicos que distinguem diferentes faixas de tensão.",
      en: "Digital logic is implemented by electronic circuits that distinguish different voltage ranges.",
    },
  },

  sections: [
    {
      id: "introduction",

      heading: {
        pt: "Como a eletricidade se transforma em informação?",
        en: "How does electricity become information?",
      },

      paragraphs: [
        {
          pt: "Computadores executam operações matemáticas, armazenam informações e processam instruções utilizando circuitos eletrônicos. Entretanto, em seu nível físico, esses sistemas não manipulam números abstratos diretamente: eles operam sobre tensões, correntes e estados elétricos.",
          en: "Computers perform mathematical operations, store information, and process instructions using electronic circuits. At the physical level, however, these systems do not manipulate abstract numbers directly: they operate through voltages, currents, and electrical states.",
        },
        {
          pt: "A computação digital utiliza convenções para associar determinados estados físicos aos valores binários 0 e 1. Esses valores representam informações lógicas, e não necessariamente a ausência ou presença absoluta de eletricidade.",
          en: "Digital computing uses conventions to associate certain physical states with the binary values 0 and 1. These values represent logical information rather than necessarily indicating the absolute absence or presence of electricity.",
        },
        {
          pt: "Um dos principais componentes responsáveis por implementar essas operações é o transistor. Milhões ou bilhões deles podem ser integrados em um único chip, formando estruturas capazes de realizar operações lógicas, armazenar estados e executar instruções.",
          en: "One of the main components responsible for implementing these operations is the transistor. Millions or billions of them can be integrated into a single chip, forming structures capable of performing logical operations, storing states, and executing instructions.",
        },
      ],
    },

    {
      id: "semiconductors",

      heading: {
        pt: "O que torna um semicondutor especial?",
        en: "What makes a semiconductor special?",
      },

      paragraphs: [
        {
          pt: "Materiais semicondutores, como o silício, possuem propriedades elétricas que podem ser modificadas por dopagem, temperatura e campos elétricos. Isso permite construir dispositivos capazes de controlar a condução de corrente.",
          en: "Semiconductor materials, such as silicon, have electrical properties that can be modified through doping, temperature, and electric fields. This makes it possible to build devices capable of controlling current conduction.",
        },
        {
          pt: "A dopagem consiste na introdução controlada de impurezas no material semicondutor. Dependendo dos elementos utilizados, podem ser criadas regiões do tipo N, nas quais elétrons são os portadores majoritários, ou do tipo P, nas quais lacunas desempenham esse papel.",
          en: "Doping involves the controlled introduction of impurities into semiconductor material. Depending on the elements used, N-type regions can be created, where electrons are the majority carriers, or P-type regions, where holes play that role.",
        },
        {
          pt: "A combinação dessas propriedades permite fabricar diodos, transistores e circuitos integrados. O comportamento desses dispositivos depende de princípios físicos, mas pode ser abstraído em modelos elétricos adequados ao projeto de circuitos.",
          en: "Combining these properties makes it possible to manufacture diodes, transistors, and integrated circuits. Their behavior depends on physical principles but can be abstracted into electrical models suitable for circuit design.",
        },
      ],
    },

    {
      id: "mosfet",

      heading: {
        pt: "MOSFET: controlando corrente com um campo elétrico",
        en: "MOSFET: controlling current with an electric field",
      },

      paragraphs: [
        {
          pt: "O MOSFET, sigla para Metal-Oxide-Semiconductor Field-Effect Transistor, é um dos dispositivos fundamentais da eletrônica digital moderna. Ele possui três terminais principais: gate, source e drain, além de uma conexão de corpo ou substrato que também influencia seu comportamento.",
          en: "The MOSFET, short for Metal-Oxide-Semiconductor Field-Effect Transistor, is one of the fundamental devices of modern digital electronics. It has three main terminals: gate, source, and drain, as well as a body or substrate connection that also influences its behavior.",
        },
        {
          pt: "A tensão aplicada ao gate modifica o campo elétrico na região do canal, controlando a condução entre source e drain. Em um MOSFET de enriquecimento do tipo N, uma tensão gate-source suficientemente positiva pode formar um canal condutor.",
          en: "The voltage applied to the gate changes the electric field in the channel region, controlling conduction between source and drain. In an enhancement-mode N-channel MOSFET, a sufficiently positive gate-to-source voltage can form a conductive channel.",
        },
        {
          pt: "Em modelos simplificados de circuitos digitais, o transistor pode ser tratado como uma chave eletrônica. Entretanto, dispositivos reais possuem resistência quando conduzem, correntes de fuga, capacitâncias parasitas e limites de tensão e corrente.",
          en: "In simplified digital circuit models, the transistor can be treated as an electronic switch. Real devices, however, have resistance while conducting, leakage currents, parasitic capacitances, and voltage and current limits.",
        },
      ],
    },

    {
      id: "binary",

      heading: {
        pt: "O que realmente significa 0 e 1?",
        en: "What do 0 and 1 actually mean?",
      },

      paragraphs: [
        {
          pt: "Em um circuito digital convencional de lógica positiva, o nível lógico 0 corresponde a uma faixa de tensões baixas, enquanto o nível lógico 1 corresponde a uma faixa de tensões altas. Os limites exatos dependem da família lógica e das especificações do componente.",
          en: "In a conventional positive-logic digital circuit, logic level 0 corresponds to a range of low voltages, while logic level 1 corresponds to a range of high voltages. The exact limits depend on the logic family and component specifications.",
        },
        {
          pt: "Em um sistema alimentado por 5 V, por exemplo, é comum associar valores próximos de 0 V ao nível baixo e valores próximos da alimentação ao nível alto. Isso não significa que qualquer tensão intermediária possa ser interpretada de maneira confiável.",
          en: "In a system powered by 5 V, for example, values near 0 V are commonly associated with a low level and values near the supply voltage with a high level. This does not mean that every intermediate voltage can be interpreted reliably.",
        },
        {
          pt: "Os datasheets especificam limites como VIL, a maior tensão garantida como entrada baixa, e VIH, a menor tensão garantida como entrada alta. A região entre esses limites pode não possuir uma interpretação lógica garantida.",
          en: "Datasheets specify limits such as VIL, the maximum voltage guaranteed to be recognized as a low input, and VIH, the minimum voltage guaranteed to be recognized as a high input. The region between these limits may have no guaranteed logical interpretation.",
        },
        {
          pt: "Portanto, um bit não é uma pequena quantidade de eletricidade armazenada dentro de um transistor. Ele é uma unidade abstrata de informação representada por um estado físico distinguível segundo as regras do circuito.",
          en: "Therefore, a bit is not a small quantity of electricity stored inside a transistor. It is an abstract unit of information represented by a distinguishable physical state according to the circuit's rules.",
        },
      ],
    },

    {
      id: "cmos",

      heading: {
        pt: "CMOS: combinando transistores NMOS e PMOS",
        en: "CMOS: combining NMOS and PMOS transistors",
      },

      paragraphs: [
        {
          pt: "A tecnologia CMOS, Complementary Metal-Oxide-Semiconductor, utiliza redes complementares de transistores NMOS e PMOS. Essa combinação permite construir portas lógicas com baixo consumo estático em condições ideais.",
          en: "CMOS technology, Complementary Metal-Oxide-Semiconductor, uses complementary networks of NMOS and PMOS transistors. This combination makes it possible to build logic gates with low static power consumption under ideal conditions.",
        },
        {
          pt: "Um exemplo fundamental é o inversor CMOS, formado por um transistor PMOS conectado à alimentação e um NMOS conectado ao terra. Os gates recebem o mesmo sinal de entrada, enquanto seus drains são conectados ao nó de saída.",
          en: "A fundamental example is the CMOS inverter, formed by a PMOS transistor connected to the supply and an NMOS transistor connected to ground. Their gates receive the same input signal, while their drains are connected to the output node.",
        },
        {
          pt: "Quando a entrada está em nível baixo, o PMOS conduz e o NMOS permanece desligado, levando a saída para próximo da alimentação. Quando a entrada está em nível alto, o NMOS conduz e o PMOS permanece desligado, levando a saída para próximo do terra.",
          en: "When the input is low, the PMOS conducts and the NMOS remains off, pulling the output near the supply voltage. When the input is high, the NMOS conducts and the PMOS remains off, pulling the output near ground.",
        },
        {
          pt: "Durante transições, ambos os transistores podem conduzir por um breve intervalo. Além disso, as capacitâncias dos nós precisam ser carregadas e descarregadas, produzindo consumo dinâmico de energia.",
          en: "During transitions, both transistors may conduct briefly. In addition, node capacitances must be charged and discharged, producing dynamic power consumption.",
        },
      ],
    },

    {
      id: "logic-gates",

      heading: {
        pt: "Como surgem as portas lógicas?",
        en: "How are logic gates built?",
      },

      paragraphs: [
        {
          pt: "Portas lógicas são circuitos que implementam operações booleanas. Uma porta NOT inverte um valor lógico, uma porta AND produz 1 quando todas as entradas são 1, e uma porta OR produz 1 quando pelo menos uma entrada é 1.",
          en: "Logic gates are circuits that implement Boolean operations. A NOT gate inverts a logical value, an AND gate produces 1 when all inputs are 1, and an OR gate produces 1 when at least one input is 1.",
        },
        {
          pt: "Na tecnologia CMOS estática, portas NAND e NOR podem ser construídas diretamente com redes de transistores complementares. Uma NAND de duas entradas utiliza, em sua implementação básica, dois PMOS em paralelo e dois NMOS em série.",
          en: "In static CMOS technology, NAND and NOR gates can be built directly using complementary transistor networks. A two-input NAND uses, in its basic implementation, two PMOS transistors in parallel and two NMOS transistors in series.",
        },
        {
          pt: "A NAND produz saída baixa somente quando ambas as entradas estão altas. Em qualquer outra combinação, existe um caminho de condução na rede de pull-up que mantém a saída em nível alto, considerando entradas lógicas válidas.",
          en: "A NAND produces a low output only when both inputs are high. In every other combination, a conducting path exists through the pull-up network, keeping the output high, assuming valid logic inputs.",
        },
        {
          pt: "As portas NAND e NOR são chamadas de universais porque qualquer função booleana pode ser construída utilizando apenas portas de um desses tipos, em quantidade e organização adequadas.",
          en: "NAND and NOR gates are called universal gates because any Boolean function can be built using only gates of either type, in an appropriate number and arrangement.",
        },
      ],
    },

    {
      id: "boolean-algebra",

      heading: {
        pt: "Da eletrônica à álgebra booleana",
        en: "From electronics to Boolean algebra",
      },

      paragraphs: [
        {
          pt: "A álgebra booleana descreve operações sobre valores lógicos. Ela permite analisar circuitos sem precisar acompanhar individualmente cada elétron ou resolver todas as equações físicas dos transistores.",
          en: "Boolean algebra describes operations on logical values. It allows circuits to be analyzed without individually tracking electrons or solving every physical transistor equation.",
        },
        {
          pt: "Considere a expressão Y = A AND B. O resultado será 1 somente quando A e B forem iguais a 1. Já a expressão Y = NOT(A AND B) representa uma porta NAND, cuja saída será 0 apenas quando ambas as entradas forem 1.",
          en: "Consider the expression Y = A AND B. The result is 1 only when A and B are both 1. The expression Y = NOT(A AND B) represents a NAND gate, whose output is 0 only when both inputs are 1.",
        },
        {
          pt: "Essa abstração é fundamental para o projeto de circuitos combinacionais, como somadores, comparadores, multiplexadores e decodificadores. Cada bloco pode ser descrito por relações lógicas e depois implementado fisicamente.",
          en: "This abstraction is fundamental to the design of combinational circuits such as adders, comparators, multiplexers, and decoders. Each block can be described through logical relationships and then implemented physically.",
        },
      ],
    },

    {
      id: "memory",

      heading: {
        pt: "Como circuitos digitais armazenam um bit?",
        en: "How do digital circuits store a bit?",
      },

      paragraphs: [
        {
          pt: "Portas combinacionais produzem saídas determinadas pelas entradas atuais. Para armazenar informação, é necessário utilizar estruturas cujo estado também dependa de condições anteriores.",
          en: "Combinational gates produce outputs determined by their current inputs. To store information, structures are needed whose state also depends on previous conditions.",
        },
        {
          pt: "Um latch pode utilizar realimentação entre portas lógicas para manter um estado estável. Flip-flops acrescentam mecanismos de controle temporal, permitindo atualizar valores em eventos definidos, como uma borda de clock.",
          en: "A latch can use feedback between logic gates to maintain a stable state. Flip-flops add timing-control mechanisms, allowing values to be updated on defined events such as a clock edge.",
        },
        {
          pt: "Esses elementos formam registradores, contadores e máquinas de estados. Memórias SRAM também utilizam circuitos biestáveis para armazenar bits, enquanto memórias DRAM empregam cargas elétricas em capacitores que precisam ser periodicamente restauradas.",
          en: "These elements form registers, counters, and state machines. SRAM also uses bistable circuits to store bits, while DRAM uses electrical charges in capacitors that must be periodically refreshed.",
        },
      ],
    },

    {
      id: "timing",

      heading: {
        pt: "Por que os sinais digitais não mudam instantaneamente?",
        en: "Why don't digital signals change instantly?",
      },

      paragraphs: [
        {
          pt: "Embora a lógica booleana trate os estados como valores discretos, os sinais elétricos reais variam continuamente no tempo. Uma transição entre 0 e 1 possui duração finita e depende das características dos transistores, das capacitâncias e das interconexões.",
          en: "Although Boolean logic treats states as discrete values, real electrical signals change continuously over time. A transition between 0 and 1 takes finite time and depends on transistor characteristics, capacitances, and interconnections.",
        },
        {
          pt: "O atraso de propagação representa o intervalo entre uma alteração na entrada e a resposta correspondente na saída de uma porta lógica. Ao combinar várias portas, esses atrasos influenciam a velocidade máxima de operação do circuito.",
          en: "Propagation delay represents the interval between an input change and the corresponding response at a logic gate's output. When multiple gates are combined, these delays influence the circuit's maximum operating speed.",
        },
        {
          pt: "Em sistemas síncronos, os caminhos de dados precisam respeitar requisitos de setup e hold dos elementos de armazenamento. Violações desses requisitos podem provocar comportamento incorreto ou metastabilidade.",
          en: "In synchronous systems, data paths must meet the setup and hold requirements of storage elements. Violating these requirements can cause incorrect behavior or metastability.",
        },
      ],
    },

    {
      id: "cpu",

      heading: {
        pt: "De portas lógicas a um processador",
        en: "From logic gates to a processor",
      },

      paragraphs: [
        {
          pt: "Um processador combina circuitos responsáveis por operações aritméticas, armazenamento temporário, seleção de dados e controle da execução. A unidade lógica e aritmética, conhecida como ALU, realiza operações como adição, subtração e operações booleanas.",
          en: "A processor combines circuits responsible for arithmetic operations, temporary storage, data selection, and execution control. The arithmetic logic unit, known as the ALU, performs operations such as addition, subtraction, and Boolean operations.",
        },
        {
          pt: "Registradores armazenam operandos e resultados, multiplexadores selecionam caminhos de dados e circuitos de controle coordenam a sequência de operações necessária para executar instruções.",
          en: "Registers store operands and results, multiplexers select data paths, and control circuits coordinate the sequence of operations required to execute instructions.",
        },
        {
          pt: "O princípio fundamental permanece o mesmo: estados físicos representam valores lógicos, e redes de transistores implementam operações sobre esses valores. A complexidade surge da organização de enormes quantidades de elementos simples.",
          en: "The fundamental principle remains the same: physical states represent logical values, and transistor networks implement operations on those values. Complexity emerges from organizing enormous numbers of simple elements.",
        },
      ],
    },

    {
      id: "z80-connection",

      heading: {
        pt: "Relacionando esses conceitos ao projeto Z80",
        en: "Connecting these concepts to the Z80 project",
      },

      paragraphs: [
        {
          pt: "No laboratório de construção de um computador baseado no Z80, os conceitos de lógica digital aparecem em diferentes partes do projeto. Decodificadores de endereços, circuitos de reset, sinais de habilitação e interfaces de memória dependem de relações lógicas bem definidas.",
          en: "In the Z80 computer-building laboratory, digital logic concepts appear throughout the design. Address decoders, reset circuits, enable signals, and memory interfaces depend on well-defined logical relationships.",
        },
        {
          pt: "Por exemplo, a seleção de um chip de memória pode depender simultaneamente de determinadas linhas de endereço e de sinais de controle. Uma combinação de portas lógicas pode produzir o sinal necessário para habilitar o dispositivo correto.",
          en: "For example, selecting a memory chip may depend simultaneously on particular address lines and control signals. A combination of logic gates can generate the signal needed to enable the correct device.",
        },
        {
          pt: "O KiCad permite representar essas conexões no esquemático. Entretanto, a escolha de circuitos integrados exige verificar os níveis lógicos, os tempos de propagação e a compatibilidade elétrica descritos nos datasheets.",
          en: "KiCad allows these connections to be represented in the schematic. However, choosing integrated circuits requires checking logic levels, propagation delays, and electrical compatibility described in datasheets.",
        },
      ],
    },

    {
      id: "conclusion",

      heading: {
        pt: "A computação começa na física",
        en: "Computing begins with physics",
      },

      paragraphs: [
        {
          pt: "O transistor não compreende números binários. Ele responde a condições elétricas determinadas pelas propriedades dos materiais e pela estrutura do dispositivo. A interpretação desses estados como 0 e 1 pertence ao projeto lógico do circuito.",
          en: "A transistor does not understand binary numbers. It responds to electrical conditions determined by material properties and device structure. Interpreting these states as 0 and 1 belongs to the circuit's logical design.",
        },
        {
          pt: "A combinação de transistores permite construir portas lógicas, que por sua vez formam somadores, registradores, memórias e processadores. Entre o comportamento de um semicondutor e a execução de um programa existe uma sequência de abstrações cuidadosamente organizadas.",
          en: "Combining transistors makes it possible to build logic gates, which in turn form adders, registers, memories, and processors. Between semiconductor behavior and program execution lies a sequence of carefully organized abstractions.",
        },
        {
          pt: "Compreender essas camadas é uma maneira de conectar eletrônica, arquitetura de computadores e programação, revelando como operações aparentemente abstratas dependem de fenômenos físicos concretos.",
          en: "Understanding these layers connects electronics, computer architecture, and programming, revealing how seemingly abstract operations depend on concrete physical phenomena.",
        },
      ],
    },
  ],

  references: [
    {
      title: "Digital Design and Computer Architecture",
      authors: "David Money Harris & Sarah L. Harris",
      year: 2012,
      url: "https://www.elsevier.com/books/digital-design-and-computer-architecture/harris/978-0-12-394424-5",
    },
    {
      title: "CMOS VLSI Design: A Circuits and Systems Perspective",
      authors: "Neil H. E. Weste & David Money Harris",
      year: 2010,
      url: "https://www.pearson.com/en-us/subject-catalog/p/cmos-vlsi-design-a-circuits-and-systems-perspective/P200000003395",
    },
    {
      title: "The Feynman Lectures on Physics, Volume III, Chapter 14: Semiconductors",
      authors: "Richard P. Feynman, Robert B. Leighton & Matthew Sands",
      url: "https://www.feynmanlectures.caltech.edu/III_14.html",
    },
    {
      title: "CMOS Logic",
      authors: "All About Circuits",
      url: "https://www.allaboutcircuits.com/textbook/digital/chpt-3/cmos-gate-circuitry/",
    },
    {
      title: "KiCad Documentation",
      authors: "KiCad",
      url: "https://docs.kicad.org/",
    },
  ],
};
