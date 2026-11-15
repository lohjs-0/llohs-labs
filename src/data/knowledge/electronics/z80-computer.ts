
import type { KnowledgePost } from "../../knowledge.types";

export const z80Computer: KnowledgePost = {
  slug: "building-an-8-bit-z80-computer",

  title: {
    pt: "Construindo um computador de 8 bits com o Z80",
    en: "Building an 8-bit computer with the Z80",
  },

  description: {
    pt: "Uma exploração da arquitetura do microprocessador Z80, seus barramentos, memória e sinais de controle, acompanhando o desenvolvimento de um computador de 8 bits no KiCad.",
    en: "An exploration of the Z80 microprocessor architecture, its buses, memory, and control signals, following the development of an 8-bit computer in KiCad.",
  },

  category: "electronics",
  date: "2026-11-15",
  readingMinutes: 12,

  tags: [
    "electronics",
    "z80",
    "microprocessors",
    "computer-architecture",
    "kicad",
    "embedded-systems",
    "8-bit",
  ],

  cover: {
    src: "/images/knowledge/z80-computer-cover.jpg",
    alt: {
      pt: "Microprocessador Z80 utilizado em um projeto de computador de 8 bits.",
      en: "Z80 microprocessor used in an 8-bit computer project.",
    },
    caption: {
      pt: "O Z80 é um microprocessador de 8 bits lançado em 1976.",
      en: "The Z80 is an 8-bit microprocessor introduced in 1976.",
    },
  },

  sections: [
    {
      id: "introduction",
      heading: {
        pt: "Por que construir um computador de 8 bits?",
        en: "Why build an 8-bit computer?",
      },
      paragraphs: [
        {
          pt: "Computadores modernos escondem grande parte de sua complexidade atrás de múltiplas camadas de abstração. Processadores, controladores de memória e periféricos trabalham de maneira integrada, tornando difícil observar diretamente os mecanismos responsáveis pela execução de instruções.",
          en: "Modern computers hide much of their complexity behind multiple layers of abstraction. Processors, memory controllers, and peripherals work together, making it difficult to directly observe the mechanisms responsible for instruction execution.",
        },
        {
          pt: "Construir um computador baseado em um microprocessador clássico oferece uma perspectiva diferente. Cada conexão possui uma função identificável, desde o barramento de endereços até os sinais que determinam quando a memória pode fornecer ou receber dados.",
          en: "Building a computer around a classic microprocessor offers a different perspective. Each connection has an identifiable purpose, from the address bus to the signals determining when memory can provide or receive data.",
        },
        {
          pt: "Este laboratório acompanha o desenvolvimento de um computador de 8 bits baseado no Z80, utilizando o KiCad para organizar o esquemático eletrônico e estudar a interação entre processador, memória e circuitos auxiliares.",
          en: "This laboratory follows the development of an 8-bit computer based on the Z80, using KiCad to organize the electronic schematic and study the interaction between the processor, memory, and supporting circuits.",
        },
      ],
    },

    {
      id: "history",
      heading: {
        pt: "O microprocessador Z80",
        en: "The Z80 microprocessor",
      },
      paragraphs: [
        {
          pt: "O Zilog Z80 foi apresentado em 1976 e tornou-se um dos microprocessadores de 8 bits mais conhecidos da história da computação. Foi utilizado em computadores domésticos, sistemas embarcados, equipamentos industriais e consoles de videogame.",
          en: "The Zilog Z80 was introduced in 1976 and became one of the best-known 8-bit microprocessors in computing history. It was used in home computers, embedded systems, industrial equipment, and video game consoles.",
        },
        {
          pt: "Sua arquitetura oferece um conjunto de instruções relativamente acessível para estudo, registradores internos, mecanismos de interrupção e interfaces externas que permitem compreender conceitos fundamentais da organização de computadores.",
          en: "Its architecture provides a relatively accessible instruction set for study, internal registers, interrupt mechanisms, and external interfaces that help explain fundamental concepts of computer organization.",
        },
      ],
    },

    {
      id: "architecture",
      heading: {
        pt: "Arquitetura de 8 bits e espaço de endereçamento",
        en: "8-bit architecture and address space",
      },
      paragraphs: [
        {
          pt: "O Z80 possui um barramento de dados externo de 8 bits e um barramento de endereços de 16 bits. Isso permite selecionar até 65.536 posições de memória, correspondentes a 64 KiB de espaço de endereçamento.",
          en: "The Z80 has an external 8-bit data bus and a 16-bit address bus. This allows it to select up to 65,536 memory locations, corresponding to a 64 KiB address space.",
        },
        {
          pt: "Os registradores internos armazenam valores temporários, endereços e informações necessárias à execução das instruções. Entre eles estão o acumulador, registradores de propósito geral, o contador de programa e o ponteiro de pilha.",
          en: "Internal registers store temporary values, addresses, and information needed to execute instructions. These include the accumulator, general-purpose registers, program counter, and stack pointer.",
        },
        {
          pt: "Embora seja um processador de 8 bits, o Z80 também realiza operações envolvendo pares de registradores de 16 bits, especialmente para manipulação de endereços.",
          en: "Although it is an 8-bit processor, the Z80 also performs operations involving 16-bit register pairs, particularly for address manipulation.",
        },
      ],
    },

    {
      id: "buses",
      heading: {
        pt: "Barramentos: como os componentes se comunicam",
        en: "Buses: how components communicate",
      },
      paragraphs: [
        {
          pt: "O barramento de endereços transporta a identificação da posição de memória ou do dispositivo que será acessado. O barramento de dados transporta os valores transferidos entre processador, memória e periféricos.",
          en: "The address bus carries the identification of the memory location or device being accessed. The data bus carries values transferred between the processor, memory, and peripherals.",
        },
        {
          pt: "O barramento de endereços do Z80 é normalmente utilizado como saída, enquanto o barramento de dados é bidirecional. Isso significa que o processador pode tanto receber informações quanto enviar valores para outros componentes.",
          en: "The Z80 address bus is normally used as an output, while its data bus is bidirectional. This means the processor can both receive information and send values to other components.",
        },
        {
          pt: "Para que a comunicação ocorra corretamente, os circuitos precisam selecionar o dispositivo apropriado e controlar o momento em que os dados podem ser colocados no barramento.",
          en: "For communication to occur correctly, circuits must select the appropriate device and control when data can be placed on the bus.",
        },
      ],
    },

    {
      id: "memory",
      heading: {
        pt: "ROM, RAM e o mapa de memória",
        en: "ROM, RAM, and the memory map",
      },
      paragraphs: [
        {
          pt: "Um computador baseado no Z80 normalmente precisa de memória não volátil para armazenar seu programa inicial e de memória RAM para guardar dados temporários durante a execução.",
          en: "A Z80-based computer typically needs non-volatile memory to store its initial program and RAM to hold temporary data during execution.",
        },
        {
          pt: "Após um reset, o Z80 inicia a execução no endereço 0000h. Por isso, o projeto precisa disponibilizar uma instrução válida nessa região, normalmente por meio de uma ROM ou de outro mecanismo de inicialização.",
          en: "After a reset, the Z80 begins execution at address 0000h. Therefore, the design must provide a valid instruction in that region, typically through ROM or another boot mechanism.",
        },
        {
          pt: "O mapa de memória define quais intervalos de endereços correspondem a cada componente. Circuitos de decodificação utilizam sinais de endereço e controle para habilitar a memória correta, evitando que dois dispositivos tentem dirigir o barramento de dados simultaneamente.",
          en: "The memory map defines which address ranges correspond to each component. Decoding circuits use address and control signals to enable the correct memory, preventing two devices from driving the data bus simultaneously.",
        },
      ],
    },

    {
      id: "control-signals",
      heading: {
        pt: "Sinais de controle do Z80",
        en: "Z80 control signals",
      },
      paragraphs: [
        {
          pt: "Além dos barramentos, o Z80 disponibiliza sinais como MREQ, IORQ, RD, WR e M1. Eles indicam, entre outras operações, acessos à memória, operações de entrada e saída, leituras, escritas e ciclos de busca de instruções.",
          en: "In addition to its buses, the Z80 provides signals such as MREQ, IORQ, RD, WR, and M1. These indicate memory accesses, input/output operations, reads, writes, and instruction-fetch cycles, among other operations.",
        },
        {
          pt: "Diversos sinais são ativos em nível baixo. Isso significa que uma tensão lógica baixa representa sua condição ativa, característica frequentemente indicada por uma barra sobre o nome do sinal em diagramas técnicos.",
          en: "Several signals are active-low. This means a logic-low voltage represents their asserted state, often indicated by a bar over the signal name in technical diagrams.",
        },
        {
          pt: "Compreender esses sinais é essencial para conectar corretamente memórias e periféricos, especialmente ao desenvolver a lógica de seleção e habilitação dos componentes.",
          en: "Understanding these signals is essential for connecting memory and peripherals correctly, especially when designing component-selection and enable logic.",
        },
      ],
    },

    {
      id: "clock-reset",
      heading: {
        pt: "Clock e reset",
        en: "Clock and reset",
      },
      paragraphs: [
        {
          pt: "O clock fornece a referência temporal para a operação do processador. Os ciclos de máquina e os estados de temporização organizam a execução de instruções e a comunicação com componentes externos.",
          en: "The clock provides the timing reference for processor operation. Machine cycles and timing states organize instruction execution and communication with external components.",
        },
        {
          pt: "O circuito de reset coloca o processador em um estado inicial definido. O sinal precisa respeitar as condições elétricas e temporais especificadas na documentação da variante do Z80 utilizada.",
          en: "The reset circuit places the processor into a defined initial state. The signal must meet the electrical and timing requirements specified for the particular Z80 variant being used.",
        },
        {
          pt: "O projeto também precisa considerar alimentação, desacoplamento, integridade dos sinais e compatibilidade elétrica entre os componentes escolhidos.",
          en: "The design must also consider power supply, decoupling, signal integrity, and electrical compatibility between the selected components.",
        },
      ],
    },

    {
      id: "kicad",
      heading: {
        pt: "Desenvolvendo o esquemático no KiCad",
        en: "Developing the schematic in KiCad",
      },
      paragraphs: [
        {
          pt: "O KiCad permite representar o circuito por meio de símbolos, conexões elétricas e identificadores de sinais. Para um projeto baseado no Z80, isso facilita a organização dos barramentos, das memórias e dos circuitos auxiliares.",
          en: "KiCad allows a circuit to be represented using symbols, electrical connections, and signal identifiers. For a Z80-based project, this makes it easier to organize buses, memory devices, and supporting circuits.",
        },
        {
          pt: "A elaboração do esquemático é uma etapa de projeto, não uma confirmação de funcionamento físico. As conexões ainda precisam ser verificadas, os componentes selecionados e os requisitos elétricos confrontados com seus respectivos datasheets.",
          en: "Creating the schematic is a design stage, not confirmation of physical operation. Connections must still be checked, components selected, and electrical requirements compared against their respective datasheets.",
        },
        {
          pt: "O próximo objetivo é consolidar a arquitetura do sistema, definir o mapa de memória e revisar os sinais necessários antes de avançar para o layout da placa de circuito impresso.",
          en: "The next goal is to consolidate the system architecture, define the memory map, and review the required signals before moving on to printed circuit board layout.",
        },
      ],
    },

    {
      id: "conclusion",
      heading: {
        pt: "Um computador construído a partir dos fundamentos",
        en: "A computer built from the fundamentals",
      },
      paragraphs: [
        {
          pt: "Projetar um computador de 8 bits permite estudar a computação em um nível próximo ao hardware. Conceitos como endereçamento, transferência de dados e execução de instruções deixam de ser apenas abstrações e passam a corresponder a sinais e conexões concretas.",
          en: "Designing an 8-bit computer makes it possible to study computing close to the hardware. Concepts such as addressing, data transfer, and instruction execution become more than abstractions: they correspond to concrete signals and connections.",
        },
        {
          pt: "Este artigo representa a primeira etapa do laboratório. As próximas partes poderão documentar a escolha dos componentes, o desenvolvimento do esquemático, as verificações elétricas e os testes realizados conforme o projeto avançar.",
          en: "This article represents the first stage of the laboratory. Future parts may document component selection, schematic development, electrical checks, and tests as the project progresses.",
        },
      ],
    },
  ],

  references: [
    {
      title: "Z80 CPU User Manual",
      authors: "Zilog",
      url: "https://www.zilog.com/docs/z80/um0080.pdf",
    },
    {
      title: "Z80 CPU Product Specification",
      authors: "Zilog",
      url: "https://www.zilog.com/docs/z80/ps0178.pdf",
    },
    {
      title: "KiCad Documentation",
      authors: "KiCad",
      url: "https://docs.kicad.org/",
    },
  ],
};
