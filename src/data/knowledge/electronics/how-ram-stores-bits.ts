
import type { KnowledgePost } from "../../knowledge.types";

export const howRamStoresBits: KnowledgePost = {
  slug: "how-ram-stores-bits",

  title: {
    pt: "Como a memória RAM armazena bits?",
    en: "How does RAM store bits?",
  },

  description: {
    pt: "Uma investigação sobre como SRAM e DRAM armazenam informações fisicamente, desde transistores e capacitores até endereçamento, refresh, temporização e comunicação com o processador.",
    en: "An investigation into how SRAM and DRAM physically store information, from transistors and capacitors to addressing, refresh, timing, and communication with the processor.",
  },

  category: "electronics",
  date: "2026-11-15",
  readingMinutes: 14,

  tags: [
    "electronics",
    "computer-architecture",
    "ram",
    "sram",
    "dram",
    "memory",
    "semiconductors",
    "digital-logic",
    "z80",
  ],

  cover: {
    src: "/images/knowledge/how-ram-stores-bits-cover.jpg",
    alt: {
      pt: "Circuitos integrados de memória RAM em uma placa eletrônica.",
      en: "RAM integrated circuits on an electronic board.",
    },
    caption: {
      pt: "Memórias semicondutoras armazenam informações utilizando diferentes estruturas elétricas.",
      en: "Semiconductor memories store information using different electrical structures.",
    },
  },

  sections: [
    {
      id: "introduction",
      heading: {
        pt: "Onde um computador guarda seus bits?",
        en: "Where does a computer keep its bits?",
      },
      paragraphs: [
        {
          pt: "Quando um programa é executado, o processador precisa acessar instruções, variáveis, endereços e resultados intermediários. Parte dessas informações permanece temporariamente na memória RAM, um sistema eletrônico projetado para armazenar e recuperar dados.",
          en: "When a program runs, the processor needs to access instructions, variables, addresses, and intermediate results. Some of this information is temporarily held in RAM, an electronic system designed to store and retrieve data.",
        },
        {
          pt: "Entretanto, a RAM não armazena números como símbolos abstratos. Cada bit corresponde a um estado físico mantido por um circuito. Dependendo da tecnologia utilizada, esse estado pode ser sustentado por realimentação entre transistores ou representado pela carga elétrica de um capacitor.",
          en: "RAM does not store numbers as abstract symbols. Each bit corresponds to a physical state maintained by a circuit. Depending on the technology, that state may be sustained by transistor feedback or represented by the electrical charge of a capacitor.",
        },
        {
          pt: "As duas tecnologias mais conhecidas são SRAM, Static Random Access Memory, e DRAM, Dynamic Random Access Memory. Ambas permitem acesso aleatório aos dados, mas diferem em estrutura, densidade, consumo e requisitos de operação.",
          en: "The two best-known technologies are SRAM, Static Random Access Memory, and DRAM, Dynamic Random Access Memory. Both provide random access to data, but differ in structure, density, power consumption, and operating requirements.",
        },
      ],
    },

    {
      id: "memory-cells",
      heading: {
        pt: "O que é uma célula de memória?",
        en: "What is a memory cell?",
      },
      paragraphs: [
        {
          pt: "Uma célula de memória é a menor estrutura de armazenamento de um circuito de memória. Em dispositivos binários convencionais, cada célula representa um bit, que pode assumir os valores lógicos 0 ou 1.",
          en: "A memory cell is the smallest storage structure in a memory circuit. In conventional binary devices, each cell represents one bit, which may take the logical value 0 or 1.",
        },
        {
          pt: "As células são organizadas em matrizes de linhas e colunas. Circuitos decodificadores selecionam as regiões apropriadas, enquanto amplificadores e circuitos de escrita permitem recuperar ou modificar os valores armazenados.",
          en: "Cells are organized into arrays of rows and columns. Decoder circuits select the appropriate regions, while amplifiers and write circuits allow stored values to be retrieved or modified.",
        },
        {
          pt: "O acesso a uma célula não depende apenas de seu estado interno. Também envolve sinais de seleção, linhas de palavra, linhas de bit e circuitos periféricos responsáveis por coordenar a operação.",
          en: "Accessing a cell depends on more than its internal state. It also involves selection signals, word lines, bit lines, and peripheral circuits responsible for coordinating the operation.",
        },
      ],
    },

    {
      id: "sram",
      heading: {
        pt: "SRAM: armazenando bits com transistores",
        en: "SRAM: storing bits with transistors",
      },
      paragraphs: [
        {
          pt: "Uma célula SRAM CMOS convencional de seis transistores, conhecida como 6T SRAM, utiliza dois inversores conectados por realimentação cruzada e dois transistores de acesso. Os inversores formam uma estrutura biestável capaz de manter um dos dois estados lógicos.",
          en: "A conventional six-transistor CMOS SRAM cell, known as 6T SRAM, uses two cross-coupled inverters and two access transistors. The inverters form a bistable structure capable of maintaining either of two logical states.",
        },
        {
          pt: "Enquanto a alimentação estiver presente e as condições de operação forem respeitadas, a célula pode preservar seu estado sem precisar de ciclos periódicos de refresh. É essa característica que justifica o termo static.",
          en: "As long as power is supplied and operating conditions are maintained, the cell can preserve its state without periodic refresh cycles. This characteristic explains the term static.",
        },
        {
          pt: "Durante a leitura, os transistores de acesso conectam os nós internos às linhas de bit, permitindo que circuitos de detecção identifiquem o estado armazenado. Na escrita, os circuitos externos forçam valores adequados nas linhas de bit para alterar o estado da célula.",
          en: "During a read, access transistors connect the internal nodes to bit lines, allowing sensing circuits to identify the stored state. During a write, external circuits drive appropriate values onto the bit lines to change the cell state.",
        },
        {
          pt: "A SRAM geralmente oferece acesso rápido e não exige refresh, mas sua célula convencional utiliza vários transistores por bit. Isso contribui para uma densidade menor e um custo por bit maior quando comparada à DRAM.",
          en: "SRAM generally provides fast access and does not require refresh, but its conventional cell uses several transistors per bit. This contributes to lower density and higher cost per bit compared with DRAM.",
        },
      ],
    },

    {
      id: "dram",
      heading: {
        pt: "DRAM: armazenando informação em capacitores",
        en: "DRAM: storing information in capacitors",
      },
      paragraphs: [
        {
          pt: "Uma célula DRAM convencional utiliza um transistor de acesso e um capacitor, estrutura conhecida como 1T1C. A informação é representada pelo estado de carga elétrica do capacitor, interpretado pelos circuitos de leitura como um valor lógico.",
          en: "A conventional DRAM cell uses one access transistor and one capacitor, a structure known as 1T1C. Information is represented by the capacitor's electrical charge state, which read circuits interpret as a logical value.",
        },
        {
          pt: "O transistor de acesso controla a conexão entre o capacitor e a linha de bit. Quando a linha de palavra é ativada, a célula pode participar de uma operação de leitura ou escrita.",
          en: "The access transistor controls the connection between the capacitor and the bit line. When the word line is activated, the cell can participate in a read or write operation.",
        },
        {
          pt: "Como a carga elétrica não permanece armazenada indefinidamente, devido a correntes de fuga, a DRAM precisa de operações periódicas de refresh. Sem elas, os estados armazenados deixam de ser confiáveis.",
          en: "Because electrical charge does not remain stored indefinitely due to leakage currents, DRAM requires periodic refresh operations. Without them, the stored states become unreliable.",
        },
        {
          pt: "A estrutura compacta da célula permite alta densidade de armazenamento. Por isso, a DRAM é amplamente utilizada como memória principal em computadores, servidores e outros sistemas digitais.",
          en: "The compact cell structure enables high storage density. For this reason, DRAM is widely used as main memory in computers, servers, and other digital systems.",
        },
      ],
    },

    {
      id: "destructive-read",
      heading: {
        pt: "Por que a leitura da DRAM exige restauração?",
        en: "Why does DRAM reading require restoration?",
      },
      paragraphs: [
        {
          pt: "Na DRAM convencional, a leitura envolve compartilhar a carga do capacitor da célula com a capacitância da linha de bit. Isso produz uma pequena variação de tensão, que precisa ser amplificada por um circuito chamado sense amplifier.",
          en: "In conventional DRAM, reading involves sharing charge between the cell capacitor and the bit-line capacitance. This produces a small voltage change that must be amplified by a circuit called a sense amplifier.",
        },
        {
          pt: "Como a operação perturba a carga original, o valor precisa ser restaurado. Por isso, a leitura da DRAM é frequentemente descrita como destrutiva: o conteúdo lógico é detectado e regravado durante o processo de acesso.",
          en: "Because the operation disturbs the original charge, the value must be restored. For this reason, DRAM reading is often described as destructive: the logical content is detected and rewritten during the access process.",
        },
        {
          pt: "O refresh periódico também utiliza mecanismos internos para preservar as informações. Esses processos são normalmente gerenciados pelo controlador de memória e pela lógica interna do dispositivo.",
          en: "Periodic refresh also uses internal mechanisms to preserve information. These processes are normally managed by the memory controller and the device's internal logic.",
        },
      ],
    },

    {
      id: "addressing",
      heading: {
        pt: "Como o processador encontra um byte na memória?",
        en: "How does a processor find a byte in memory?",
      },
      paragraphs: [
        {
          pt: "Memórias são organizadas para que diferentes conjuntos de bits possam ser acessados por endereços. Em uma memória organizada em bytes, cada endereço identifica uma posição contendo oito bits.",
          en: "Memories are organized so that different groups of bits can be accessed through addresses. In byte-addressable memory, each address identifies a location containing eight bits.",
        },
        {
          pt: "Circuitos de decodificação interpretam os sinais de endereço e selecionam a região apropriada da matriz de memória. Outros sinais determinam se a operação será uma leitura ou escrita.",
          en: "Decoding circuits interpret address signals and select the appropriate region of the memory array. Other signals determine whether the operation will be a read or a write.",
        },
        {
          pt: "Um chip SRAM paralelo pode disponibilizar linhas de endereço, barramento de dados e sinais como chip enable, output enable e write enable. A combinação desses sinais controla quando o dispositivo responde e quando seus pinos de dados devem permanecer em alta impedância.",
          en: "A parallel SRAM chip may provide address lines, a data bus, and signals such as chip enable, output enable, and write enable. Their combination controls when the device responds and when its data pins must remain in a high-impedance state.",
        },
      ],
    },

    {
      id: "timing",
      heading: {
        pt: "Temporização: memória não responde instantaneamente",
        en: "Timing: memory does not respond instantly",
      },
      paragraphs: [
        {
          pt: "O acesso à memória envolve atrasos elétricos. Após receber um endereço e os sinais de controle apropriados, o dispositivo precisa de tempo para selecionar as células e disponibilizar dados válidos.",
          en: "Memory access involves electrical delays. After receiving an address and the appropriate control signals, the device needs time to select cells and make valid data available.",
        },
        {
          pt: "Em uma SRAM assíncrona, o datasheet pode especificar tempos como address access time, chip enable access time e output enable access time. Esses parâmetros precisam ser considerados em conjunto com a temporização do processador.",
          en: "For asynchronous SRAM, the datasheet may specify parameters such as address access time, chip enable access time, and output enable access time. These parameters must be considered alongside processor timing.",
        },
        {
          pt: "Se os dados não estiverem estáveis no momento exigido pelo processador, a leitura poderá produzir resultados incorretos. Alguns sistemas utilizam estados de espera, conhecidos como wait states, para permitir o funcionamento com dispositivos mais lentos.",
          en: "If data is not stable when required by the processor, a read may produce incorrect results. Some systems use wait states to accommodate slower devices.",
        },
      ],
    },

    {
      id: "sram-vs-dram",
      heading: {
        pt: "SRAM ou DRAM: qual é melhor?",
        en: "SRAM or DRAM: which is better?",
      },
      paragraphs: [
        {
          pt: "Não existe uma tecnologia universalmente superior. A SRAM costuma ser escolhida quando a velocidade de acesso e a simplicidade do controle são prioritárias. A DRAM é especialmente vantajosa quando o objetivo é armazenar grandes quantidades de dados com alta densidade.",
          en: "Neither technology is universally superior. SRAM is commonly chosen when access speed and control simplicity are priorities. DRAM is especially advantageous when the goal is to store large amounts of data at high density.",
        },
        {
          pt: "Em processadores modernos, memórias cache geralmente utilizam SRAM, enquanto a memória principal costuma utilizar DRAM. Essa organização equilibra velocidade, capacidade, consumo de energia e custo.",
          en: "In modern processors, cache memories generally use SRAM, while main memory typically uses DRAM. This organization balances speed, capacity, power consumption, and cost.",
        },
        {
          pt: "Em projetos educacionais com microprocessadores clássicos, chips SRAM paralelos podem simplificar a implementação, pois normalmente dispensam o controlador de refresh exigido por DRAM convencional.",
          en: "In educational projects with classic microprocessors, parallel SRAM chips can simplify implementation because they typically do not require the refresh controller needed by conventional DRAM.",
        },
      ],
    },

    {
      id: "z80",
      heading: {
        pt: "Aplicando esses conceitos ao computador Z80",
        en: "Applying these concepts to the Z80 computer",
      },
      paragraphs: [
        {
          pt: "O Z80 possui um barramento de endereços de 16 bits e um barramento de dados de 8 bits. Isso permite endereçar diretamente até 64 KiB de memória, considerando seu espaço de endereçamento principal.",
          en: "The Z80 has a 16-bit address bus and an 8-bit data bus. This allows it to directly address up to 64 KiB of memory within its main address space.",
        },
        {
          pt: "Ao projetar um computador com esse microprocessador, é necessário decidir quais regiões de endereço serão ocupadas pela ROM e pela RAM. A lógica de decodificação deve selecionar o componente apropriado para cada acesso.",
          en: "When designing a computer with this microprocessor, it is necessary to decide which address regions will be occupied by ROM and RAM. Address-decoding logic must select the appropriate component for each access.",
        },
        {
          pt: "Os sinais MREQ, RD e WR participam do controle das operações de memória. As conexões precisam respeitar a polaridade desses sinais, os requisitos dos chips escolhidos e os tempos especificados em seus datasheets.",
          en: "The MREQ, RD, and WR signals participate in controlling memory operations. Connections must respect signal polarity, the requirements of the selected chips, and the timing specified in their datasheets.",
        },
        {
          pt: "Uma etapa importante do laboratório no KiCad é definir o mapa de memória e conferir a compatibilidade entre os dispositivos. O esquemático deve ser revisado antes da fabricação e dos testes físicos.",
          en: "An important stage of the KiCad laboratory is defining the memory map and checking compatibility between devices. The schematic should be reviewed before fabrication and physical testing.",
        },
      ],
    },

    {
      id: "conclusion",
      heading: {
        pt: "Um bit é um estado físico",
        en: "A bit is a physical state",
      },
      paragraphs: [
        {
          pt: "A memória RAM demonstra como informações abstratas dependem de estruturas físicas concretas. Em SRAM, circuitos biestáveis mantêm estados lógicos. Em DRAM, capacitores armazenam cargas que precisam ser detectadas e periodicamente restauradas.",
          en: "RAM demonstrates how abstract information depends on concrete physical structures. In SRAM, bistable circuits maintain logical states. In DRAM, capacitors store charges that must be detected and periodically restored.",
        },
        {
          pt: "Entre uma célula de memória e uma variável utilizada por um programa existem circuitos de seleção, barramentos, protocolos de acesso e mecanismos de controle. Compreender essas camadas ajuda a conectar eletrônica digital, arquitetura de computadores e desenvolvimento de software.",
          en: "Between a memory cell and a variable used by a program are selection circuits, buses, access protocols, and control mechanisms. Understanding these layers helps connect digital electronics, computer architecture, and software development.",
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
      title: "Memory Systems: Cache, DRAM, Disk",
      authors: "Bruce Jacob, Spencer W. Ng & David T. Wang",
      year: 2008,
      url: "https://www.elsevier.com/books/memory-systems/jacob/978-0-12-379751-3",
    },
    {
      title: "Z80 CPU User Manual",
      authors: "Zilog",
      url: "https://www.zilog.com/docs/z80/um0080.pdf",
    },
    {
      title: "KiCad Documentation",
      authors: "KiCad",
      url: "https://docs.kicad.org/",
    },
  ],
};
