
import type { KnowledgePost } from "../../knowledge.types";

export const howCpusExecuteInstructions: KnowledgePost = {
  slug: "how-cpus-execute-instructions",

  title: {
    pt: "Como um processador executa instruções: da linguagem de máquina aos transistores",
    en: "How a CPU executes instructions: from machine code to transistors",
  },

  description: {
    pt: "O que realmente acontece quando um programa é executado? Entenda como instruções chegam ao processador, como registradores e circuitos digitais trabalham e como milhões ou bilhões de transistores tornam a computação possível.",
    en: "What actually happens when a program runs? Understand how instructions reach the CPU, how registers and digital circuits work, and how millions or billions of transistors make computing possible.",
  },

  category: "computer science",
  date: "2026-11-15",
  readingMinutes: 17,

  tags: [
    "computer-science",
    "cpu",
    "computer-architecture",
    "assembly",
    "machine-code",
    "digital-logic",
    "transistors",
    "memory",
    "operating-systems",
  ],

  cover: {
    src: "/images/knowledge/how-cpus-execute-instructions-cover.jpg",

    alt: {
      pt: "Fotografia aproximada de um circuito integrado de processador.",
      en: "Close-up photograph of a processor integrated circuit.",
    },

    caption: {
      pt: "Processadores modernos integram bilhões de transistores organizados em circuitos responsáveis pela execução de instruções.",
      en: "Modern processors integrate billions of transistors organized into circuits responsible for executing instructions.",
    },

    credit: "A definir conforme a imagem escolhida",

    sourceUrl:
      "https://commons.wikimedia.org/wiki/Category:Microprocessor_dies",
  },

  sections: [
    {
      id: "introduction",

      heading: {
        pt: "O que acontece quando executamos um programa?",
        en: "What happens when we run a program?",
      },

      paragraphs: [
        {
          pt: "Quando executamos um programa, o computador precisa transformar uma sequência de instruções em operações físicas realizadas por circuitos eletrônicos.",
          en: "When we run a program, the computer must turn a sequence of instructions into physical operations performed by electronic circuits.",
        },
        {
          pt: "Uma simples soma, comparação ou leitura de memória envolve diferentes componentes internos do processador trabalhando de maneira coordenada.",
          en: "A simple addition, comparison, or memory read involves different internal processor components working in a coordinated manner.",
        },
        {
          pt: "O processador, ou CPU, é responsável por executar instruções de máquina, realizar operações aritméticas e lógicas e coordenar o fluxo de execução de programas.",
          en: "The processor, or CPU, is responsible for executing machine instructions, performing arithmetic and logical operations, and coordinating program execution flow.",
        },
        {
          pt: "Para compreender esse processo, é necessário conectar diferentes níveis de abstração: linguagens de programação, arquitetura de instruções, microarquitetura e eletrônica digital.",
          en: "Understanding this process requires connecting different abstraction levels: programming languages, instruction architecture, microarchitecture, and digital electronics.",
        },
      ],
    },

    {
      id: "source-code",

      heading: {
        pt: "O código-fonte não é executado diretamente pelos circuitos",
        en: "Source code is not executed directly by the circuits",
      },

      paragraphs: [
        {
          pt: "Linguagens como C, C++, Rust e Python permitem expressar algoritmos usando estruturas compreensíveis para programadores.",
          en: "Languages such as C, C++, Rust, and Python allow algorithms to be expressed using structures understandable to programmers.",
        },
        {
          pt: "Entretanto, os circuitos de um processador convencional não interpretam diretamente essas construções de alto nível.",
          en: "However, the circuits of a conventional processor do not directly interpret these high-level constructs.",
        },
        {
          pt: "Em linguagens compiladas para código nativo, um compilador transforma o código-fonte em instruções compatíveis com a arquitetura do processador.",
          en: "In languages compiled to native code, a compiler transforms source code into instructions compatible with the processor's architecture.",
        },
        {
          pt: "Outras linguagens podem utilizar interpretadores, máquinas virtuais, bytecode ou compilação just-in-time. Mesmo nesses casos, a execução física acaba dependendo de instruções de máquina realizadas pelo hardware.",
          en: "Other languages may use interpreters, virtual machines, bytecode, or just-in-time compilation. Even in these cases, physical execution ultimately depends on machine instructions performed by hardware.",
        },
      ],
    },

    {
      id: "compilation",

      heading: {
        pt: "Do código-fonte ao executável",
        en: "From source code to executable",
      },

      paragraphs: [
        {
          pt: "Em um fluxo típico de compilação nativa, o compilador analisa o código, verifica regras da linguagem, aplica transformações e gera uma representação adequada para a arquitetura de destino.",
          en: "In a typical native compilation workflow, the compiler analyzes the code, checks language rules, applies transformations, and generates a representation suitable for the target architecture.",
        },
        {
          pt: "O processo pode envolver etapas como pré-processamento, análise sintática, análise semântica, otimização e geração de código.",
          en: "The process may involve stages such as preprocessing, syntax analysis, semantic analysis, optimization, and code generation.",
        },
        {
          pt: "Posteriormente, um montador pode converter instruções em assembly para código de máquina, enquanto o linker combina módulos e resolve referências necessárias à formação do executável.",
          en: "An assembler may subsequently convert assembly instructions into machine code, while the linker combines modules and resolves references needed to form the executable.",
        },
        {
          pt: "Essas etapas variam conforme a linguagem, o compilador e o ambiente de execução. O resultado final pode ser um executável nativo, uma biblioteca ou outra forma de código intermediário.",
          en: "These stages vary according to the language, compiler, and runtime environment. The final result may be a native executable, a library, or another form of intermediate code.",
        },
      ],
    },

    {
      id: "isa",

      heading: {
        pt: "ISA: a linguagem que o processador entende",
        en: "ISA: the language the processor understands",
      },

      paragraphs: [
        {
          pt: "A Instruction Set Architecture, ou ISA, define a interface entre o software e o processador.",
          en: "The Instruction Set Architecture, or ISA, defines the interface between software and the processor.",
        },
        {
          pt: "Ela especifica aspectos como instruções disponíveis, registradores arquiteturais, formatos de instrução, modos de endereçamento e comportamento observável das operações.",
          en: "It specifies aspects such as available instructions, architectural registers, instruction formats, addressing modes, and observable operation behavior.",
        },
        {
          pt: "Exemplos conhecidos incluem x86-64, ARM e RISC-V. Processadores que implementam a mesma ISA podem apresentar microarquiteturas internas bastante diferentes.",
          en: "Well-known examples include x86-64, ARM, and RISC-V. Processors implementing the same ISA may have very different internal microarchitectures.",
        },
        {
          pt: "A ISA descreve o que cada instrução deve fazer, mas não determina obrigatoriamente todos os detalhes de como o hardware deve executá-la.",
          en: "The ISA describes what each instruction must do, but does not necessarily determine every detail of how the hardware must execute it.",
        },
      ],
    },

    {
      id: "machine-code",

      heading: {
        pt: "Linguagem de máquina e representação binária",
        en: "Machine code and binary representation",
      },

      paragraphs: [
        {
          pt: "As instruções executadas por um processador são representadas por sequências de bits armazenadas na memória.",
          en: "Instructions executed by a processor are represented by sequences of bits stored in memory.",
        },
        {
          pt: "Esses bits codificam informações como a operação solicitada, os registradores envolvidos e, dependendo da instrução, valores imediatos ou informações de endereçamento.",
          en: "These bits encode information such as the requested operation, the registers involved, and, depending on the instruction, immediate values or addressing information.",
        },
        {
          pt: "O significado de uma sequência binária depende da ISA. O mesmo conjunto de bits pode representar instruções diferentes em arquiteturas distintas.",
          en: "The meaning of a binary sequence depends on the ISA. The same bit sequence may represent different instructions in different architectures.",
        },
        {
          pt: "O assembly oferece uma representação textual dessas instruções, usando mnemônicos como MOV, ADD, SUB e JMP, embora os nomes e a sintaxe variem conforme a arquitetura.",
          en: "Assembly provides a textual representation of these instructions, using mnemonics such as MOV, ADD, SUB, and JMP, although names and syntax vary by architecture.",
        },
      ],
    },

    {
      id: "registers",

      heading: {
        pt: "Registradores: armazenamento dentro do processador",
        en: "Registers: storage inside the processor",
      },

      paragraphs: [
        {
          pt: "Registradores são estruturas de armazenamento utilizadas pelo processador para manter valores necessários à execução das instruções.",
          en: "Registers are storage structures used by the processor to hold values needed during instruction execution.",
        },
        {
          pt: "Registradores arquiteturais podem armazenar operandos, resultados, endereços e informações relacionadas ao estado de execução.",
          en: "Architectural registers can hold operands, results, addresses, and information related to execution state.",
        },
        {
          pt: "Muitas operações aritméticas utilizam valores presentes em registradores, evitando a necessidade de acessar diretamente a memória principal a cada operação.",
          en: "Many arithmetic operations use values held in registers, avoiding the need to access main memory directly for every operation.",
        },
        {
          pt: "Em processadores modernos, também podem existir registradores físicos internos utilizados por mecanismos como renomeação de registradores e execução fora de ordem.",
          en: "Modern processors may also contain internal physical registers used by mechanisms such as register renaming and out-of-order execution.",
        },
      ],
    },

    {
      id: "program-counter",

      heading: {
        pt: "Program Counter: onde está a próxima instrução?",
        en: "Program Counter: where is the next instruction?",
      },

      paragraphs: [
        {
          pt: "O processador precisa acompanhar a posição do fluxo de instruções que está sendo executado.",
          en: "The processor must track the position of the instruction stream being executed.",
        },
        {
          pt: "Essa função é associada a um registrador arquitetural frequentemente chamado de Program Counter, ou PC. Em arquiteturas x86-64, um registrador equivalente é conhecido como RIP.",
          en: "This function is associated with an architectural register often called the Program Counter, or PC. In x86-64 architectures, an equivalent register is known as RIP.",
        },
        {
          pt: "Em uma execução sequencial simples, o endereço avança para a próxima instrução. Entretanto, desvios, chamadas de funções, retornos e exceções podem modificar o fluxo.",
          en: "In simple sequential execution, the address advances to the next instruction. However, branches, function calls, returns, and exceptions can change the flow.",
        },
        {
          pt: "Processadores modernos podem buscar e especular sobre instruções futuras antes de confirmar definitivamente o caminho de execução.",
          en: "Modern processors may fetch and speculate on future instructions before definitively confirming the execution path.",
        },
      ],
    },

    {
      id: "fetch-decode-execute",

      heading: {
        pt: "O ciclo Fetch–Decode–Execute",
        en: "The Fetch–Decode–Execute cycle",
      },

      paragraphs: [
        {
          pt: "Um modelo introdutório para compreender a execução de instruções é o ciclo Fetch–Decode–Execute: busca, decodificação e execução.",
          en: "An introductory model for understanding instruction execution is the Fetch–Decode–Execute cycle: fetch, decode, and execute.",
        },
        {
          pt: "Na etapa de busca, o processador obtém os bytes da instrução a partir do sistema de memória, frequentemente por meio da cache de instruções.",
          en: "During fetch, the processor obtains instruction bytes from the memory system, often through the instruction cache.",
        },
        {
          pt: "Na decodificação, os bits são interpretados de acordo com a ISA para determinar quais operações precisam ser realizadas.",
          en: "During decoding, the bits are interpreted according to the ISA to determine which operations must be performed.",
        },
        {
          pt: "Na execução, unidades funcionais realizam as operações necessárias, que podem envolver cálculos, acessos à memória ou alterações no fluxo de controle.",
          en: "During execution, functional units perform the required operations, which may involve calculations, memory accesses, or changes in control flow.",
        },
        {
          pt: "Esse modelo é útil para estudar processadores simples. Em CPUs modernas, diferentes instruções podem estar simultaneamente em várias etapas, com mecanismos adicionais de despacho, conclusão e aposentadoria de instruções.",
          en: "This model is useful for studying simple processors. In modern CPUs, different instructions may occupy multiple stages simultaneously, with additional dispatch, completion, and retirement mechanisms.",
        },
      ],
    },

    {
      id: "instruction-decoding",

      heading: {
        pt: "Como uma instrução é decodificada?",
        en: "How is an instruction decoded?",
      },

      paragraphs: [
        {
          pt: "A decodificação transforma a representação codificada de uma instrução em sinais ou operações internas que o processador consegue utilizar.",
          en: "Decoding transforms an instruction's encoded representation into internal signals or operations the processor can use.",
        },
        {
          pt: "Em arquiteturas com formatos de instrução relativamente regulares, os campos de operação e operandos podem ser identificados por circuitos de decodificação específicos.",
          en: "In architectures with relatively regular instruction formats, operation and operand fields can be identified by dedicated decoding circuits.",
        },
        {
          pt: "Em arquiteturas mais complexas, uma instrução pode ser traduzida em uma ou mais micro-operações internas.",
          en: "In more complex architectures, an instruction may be translated into one or more internal micro-operations.",
        },
        {
          pt: "Essas micro-operações podem ser distribuídas entre diferentes unidades funcionais, dependendo das dependências de dados e da disponibilidade de recursos.",
          en: "These micro-operations may be distributed among different functional units depending on data dependencies and resource availability.",
        },
      ],
    },

    {
      id: "alu",

      heading: {
        pt: "ALU: a unidade lógica e aritmética",
        en: "ALU: the arithmetic logic unit",
      },

      paragraphs: [
        {
          pt: "A Arithmetic Logic Unit, ou ALU, é um componente responsável por operações aritméticas e lógicas sobre dados binários.",
          en: "The Arithmetic Logic Unit, or ALU, is a component responsible for arithmetic and logical operations on binary data.",
        },
        {
          pt: "Entre as operações típicas estão adição, subtração, comparações, deslocamentos de bits e operações booleanas como AND, OR e XOR.",
          en: "Typical operations include addition, subtraction, comparisons, bit shifts, and Boolean operations such as AND, OR, and XOR.",
        },
        {
          pt: "A ALU recebe operandos, realiza a operação selecionada e produz um resultado que pode ser encaminhado a registradores ou outros componentes.",
          en: "The ALU receives operands, performs the selected operation, and produces a result that can be forwarded to registers or other components.",
        },
        {
          pt: "Processadores modernos podem conter múltiplas unidades inteiras, além de unidades especializadas em operações de ponto flutuante, vetoriais e outras tarefas.",
          en: "Modern processors may contain multiple integer units, along with specialized units for floating-point, vector, and other operations.",
        },
      ],
    },

    {
      id: "binary-addition",

      heading: {
        pt: "Como um circuito soma números binários?",
        en: "How does a circuit add binary numbers?",
      },

      paragraphs: [
        {
          pt: "Na base binária, cada dígito pode assumir apenas os valores 0 ou 1. Uma soma precisa considerar os bits dos operandos e eventuais transportes entre posições.",
          en: "In binary, each digit can take only the values 0 or 1. Addition must account for operand bits and any carries between positions.",
        },
        {
          pt: "Um circuito chamado somador completo, ou full adder, recebe dois bits de entrada e um bit de transporte, produzindo um bit de soma e um novo transporte.",
          en: "A circuit called a full adder receives two input bits and a carry-in bit, producing a sum bit and a new carry-out bit.",
        },
        {
          pt: "A combinação de vários estágios de soma permite realizar operações sobre números com múltiplos bits.",
          en: "Combining multiple addition stages allows operations on multi-bit numbers.",
        },
        {
          pt: "Arquiteturas de somadores mais avançadas, como carry-lookahead e estruturas de prefixo, podem reduzir atrasos associados à propagação de transporte.",
          en: "More advanced adder architectures, such as carry-lookahead and prefix structures, can reduce delays associated with carry propagation.",
        },
      ],
    },

    {
      id: "logic-gates",

      heading: {
        pt: "Portas lógicas: a base da computação digital",
        en: "Logic gates: the foundation of digital computing",
      },

      paragraphs: [
        {
          pt: "Portas lógicas são circuitos que implementam operações booleanas sobre sinais digitais.",
          en: "Logic gates are circuits that implement Boolean operations on digital signals.",
        },
        {
          pt: "Uma porta AND produz nível lógico 1 quando todas as entradas relevantes estão em nível lógico 1. Uma porta OR produz 1 quando pelo menos uma entrada está em nível lógico 1.",
          en: "An AND gate produces logic level 1 when all relevant inputs are at logic level 1. An OR gate produces 1 when at least one input is at logic level 1.",
        },
        {
          pt: "A porta NOT inverte o valor lógico de entrada, enquanto portas como NAND, NOR e XOR implementam outras funções booleanas.",
          en: "The NOT gate inverts the input logic value, while gates such as NAND, NOR, and XOR implement other Boolean functions.",
        },
        {
          pt: "A combinação dessas portas permite construir somadores, comparadores, multiplexadores, decodificadores e inúmeros outros circuitos digitais.",
          en: "Combining these gates makes it possible to build adders, comparators, multiplexers, decoders, and many other digital circuits.",
        },
      ],
    },

    {
      id: "transistors",

      heading: {
        pt: "Transistores: a implementação física da lógica",
        en: "Transistors: the physical implementation of logic",
      },

      paragraphs: [
        {
          pt: "Nos processadores modernos, a maior parte da lógica digital é construída com transistores de efeito de campo, especialmente tecnologias derivadas do MOSFET.",
          en: "In modern processors, most digital logic is built using field-effect transistors, especially technologies derived from MOSFETs.",
        },
        {
          pt: "Um transistor pode controlar a passagem de corrente elétrica em resposta a um sinal aplicado a seu terminal de controle.",
          en: "A transistor can control the flow of electric current in response to a signal applied to its control terminal.",
        },
        {
          pt: "Na lógica CMOS, transistores do tipo n e do tipo p são combinados para implementar funções digitais com baixo consumo estático em condições ideais.",
          en: "In CMOS logic, n-type and p-type transistors are combined to implement digital functions with low static power consumption under ideal conditions.",
        },
        {
          pt: "Os níveis lógicos 0 e 1 correspondem a faixas de tensão elétrica, não a estados físicos perfeitamente abstratos.",
          en: "Logic levels 0 and 1 correspond to voltage ranges, not perfectly abstract physical states.",
        },
        {
          pt: "Bilhões de transistores podem ser integrados em um único chip, formando circuitos que implementam processamento, armazenamento e controle.",
          en: "Billions of transistors can be integrated into a single chip, forming circuits that implement processing, storage, and control.",
        },
      ],
    },

    {
      id: "clock",

      heading: {
        pt: "Clock: sincronizando as operações",
        en: "Clock: synchronizing operations",
      },

      paragraphs: [
        {
          pt: "Grande parte dos processadores convencionais utiliza sinais de clock para coordenar mudanças de estado em circuitos sequenciais.",
          en: "Most conventional processors use clock signals to coordinate state changes in sequential circuits.",
        },
        {
          pt: "O clock estabelece instantes de referência para o armazenamento de novos valores em registradores e outros elementos sequenciais.",
          en: "The clock establishes reference instants for storing new values in registers and other sequential elements.",
        },
        {
          pt: "Uma frequência de 3 GHz corresponde a aproximadamente três bilhões de ciclos por segundo, mas isso não significa necessariamente que apenas três bilhões de instruções sejam executadas nesse intervalo.",
          en: "A frequency of 3 GHz corresponds to approximately three billion cycles per second, but this does not necessarily mean that exactly three billion instructions are executed during that interval.",
        },
        {
          pt: "O desempenho depende também de fatores como paralelismo, número de instruções concluídas por ciclo, latências, dependências de dados e comportamento da memória.",
          en: "Performance also depends on factors such as parallelism, instructions completed per cycle, latency, data dependencies, and memory behavior.",
        },
      ],
    },

    {
      id: "pipeline",

      heading: {
        pt: "Pipeline: várias instruções em andamento",
        en: "Pipeline: multiple instructions in progress",
      },

      paragraphs: [
        {
          pt: "O pipeline divide o processamento de instruções em etapas que podem ser parcialmente sobrepostas.",
          en: "Pipelining divides instruction processing into stages that can partially overlap.",
        },
        {
          pt: "Enquanto uma instrução está sendo executada, outra pode estar sendo decodificada e uma terceira pode estar sendo buscada na memória.",
          en: "While one instruction is executing, another may be decoding and a third may be fetched from memory.",
        },
        {
          pt: "Essa organização pode aumentar a taxa de processamento de instruções sem necessariamente reduzir a latência individual de cada operação.",
          en: "This organization can increase instruction throughput without necessarily reducing the individual latency of each operation.",
        },
        {
          pt: "Entretanto, dependências de dados, desvios e disputas por recursos podem provocar interrupções ou atrasos no pipeline.",
          en: "However, data dependencies, branches, and resource conflicts can cause pipeline stalls or delays.",
        },
      ],
    },

    {
      id: "branch-prediction",

      heading: {
        pt: "Predição de desvios: antecipando decisões",
        en: "Branch prediction: anticipating decisions",
      },

      paragraphs: [
        {
          pt: "Instruções condicionais podem modificar o caminho de execução de um programa.",
          en: "Conditional instructions can change a program's execution path.",
        },
        {
          pt: "Para evitar que o pipeline fique ocioso enquanto uma condição é resolvida, processadores modernos utilizam mecanismos de predição de desvios.",
          en: "To avoid leaving the pipeline idle while a condition is resolved, modern processors use branch prediction mechanisms.",
        },
        {
          pt: "Esses mecanismos estimam qual caminho provavelmente será seguido e permitem iniciar o processamento especulativo de instruções.",
          en: "These mechanisms estimate which path is likely to be taken and allow speculative instruction processing to begin.",
        },
        {
          pt: "Quando a previsão está incorreta, parte do trabalho especulativo precisa ser descartada, produzindo uma penalidade de desempenho.",
          en: "When the prediction is incorrect, some speculative work must be discarded, producing a performance penalty.",
        },
        {
          pt: "A execução especulativa também possui implicações de segurança, pois determinados efeitos microarquiteturais podem ser explorados por ataques de canal lateral.",
          en: "Speculative execution also has security implications because certain microarchitectural effects can be exploited by side-channel attacks.",
        },
      ],
    },

    {
      id: "out-of-order",

      heading: {
        pt: "Execução fora de ordem",
        en: "Out-of-order execution",
      },

      paragraphs: [
        {
          pt: "Em processadores simples, as instruções podem ser executadas em uma sequência relativamente próxima à ordem original do programa.",
          en: "In simple processors, instructions may execute in a sequence relatively close to the program's original order.",
        },
        {
          pt: "Processadores mais avançados podem executar determinadas operações fora de ordem quando seus operandos e recursos estão disponíveis.",
          en: "More advanced processors can execute certain operations out of order when their operands and resources are available.",
        },
        {
          pt: "Isso permite aproveitar unidades funcionais que poderiam permanecer ociosas enquanto outras instruções aguardam dados.",
          en: "This allows the processor to use functional units that might otherwise remain idle while other instructions wait for data.",
        },
        {
          pt: "Mecanismos como renomeação de registradores, escalonamento dinâmico e buffers de reordenação ajudam a preservar o comportamento arquitetural esperado.",
          en: "Mechanisms such as register renaming, dynamic scheduling, and reorder buffers help preserve expected architectural behavior.",
        },
        {
          pt: "A execução interna pode ocorrer fora de ordem, enquanto a confirmação dos resultados arquiteturais normalmente respeita regras que mantêm a execução observável correta.",
          en: "Internal execution may occur out of order, while architectural result retirement normally follows rules that preserve correct observable execution.",
        },
      ],
    },

    {
      id: "memory-hierarchy",

      heading: {
        pt: "A hierarquia de memória",
        en: "The memory hierarchy",
      },

      paragraphs: [
        {
          pt: "A CPU precisa acessar instruções e dados armazenados em diferentes níveis de memória.",
          en: "The CPU needs to access instructions and data stored at different levels of memory.",
        },
        {
          pt: "Registradores oferecem armazenamento diretamente associado à execução, enquanto memórias cache mantêm cópias de dados e instruções utilizados recentemente ou considerados prováveis de serem necessários.",
          en: "Registers provide storage directly associated with execution, while cache memories hold copies of data and instructions used recently or considered likely to be needed.",
        },
        {
          pt: "A memória RAM possui capacidade muito maior, mas normalmente apresenta latência de acesso superior à das caches internas.",
          en: "RAM has much greater capacity but generally exhibits higher access latency than internal caches.",
        },
        {
          pt: "Dispositivos de armazenamento, como SSDs, oferecem persistência de dados, mas operam em escalas de latência diferentes das memórias diretamente utilizadas pelo processador.",
          en: "Storage devices such as SSDs provide data persistence but operate at different latency scales from the memories directly used by the processor.",
        },
      ],
    },

    {
      id: "cache",

      heading: {
        pt: "Cache L1, L2 e L3",
        en: "L1, L2, and L3 cache",
      },

      paragraphs: [
        {
          pt: "Processadores modernos frequentemente possuem múltiplos níveis de cache, organizados para reduzir o custo médio de acesso à memória.",
          en: "Modern processors frequently have multiple cache levels organized to reduce average memory access cost.",
        },
        {
          pt: "A cache L1 costuma ser pequena e rápida, frequentemente separada entre instruções e dados.",
          en: "L1 cache is usually small and fast, often separated into instruction and data caches.",
        },
        {
          pt: "A cache L2 normalmente oferece capacidade maior, enquanto a L3 pode funcionar como um nível compartilhado entre núcleos, dependendo da arquitetura.",
          en: "L2 cache typically offers greater capacity, while L3 may function as a shared level among cores, depending on the architecture.",
        },
        {
          pt: "Quando os dados solicitados estão presentes na cache, ocorre um cache hit. Caso contrário, um cache miss exige procurar os dados em níveis inferiores da hierarquia.",
          en: "When requested data is present in the cache, a cache hit occurs. Otherwise, a cache miss requires searching lower levels of the hierarchy.",
        },
        {
          pt: "A eficiência da cache depende de padrões de acesso, localidade temporal, localidade espacial e características da aplicação.",
          en: "Cache efficiency depends on access patterns, temporal locality, spatial locality, and application characteristics.",
        },
      ],
    },

    {
      id: "virtual-memory",

      heading: {
        pt: "Endereços virtuais e memória física",
        en: "Virtual addresses and physical memory",
      },

      paragraphs: [
        {
          pt: "Em sistemas operacionais modernos, programas geralmente trabalham com endereços virtuais em vez de acessar diretamente posições físicas da RAM.",
          en: "In modern operating systems, programs generally work with virtual addresses rather than directly accessing physical RAM locations.",
        },
        {
          pt: "A unidade de gerenciamento de memória, ou MMU, participa da tradução desses endereços para endereços físicos.",
          en: "The memory management unit, or MMU, participates in translating these addresses into physical addresses.",
        },
        {
          pt: "Estruturas como tabelas de páginas e buffers de tradução, conhecidos como TLBs, ajudam a implementar esse mecanismo.",
          en: "Structures such as page tables and translation lookaside buffers, known as TLBs, help implement this mechanism.",
        },
        {
          pt: "A memória virtual permite isolamento entre processos, gerenciamento flexível de memória e mecanismos de proteção de acesso.",
          en: "Virtual memory enables process isolation, flexible memory management, and access protection mechanisms.",
        },
      ],
    },

    {
      id: "operating-system",

      heading: {
        pt: "O papel do sistema operacional",
        en: "The role of the operating system",
      },

      paragraphs: [
        {
          pt: "O sistema operacional coordena recursos de hardware e fornece serviços utilizados pelos programas.",
          en: "The operating system coordinates hardware resources and provides services used by programs.",
        },
        {
          pt: "Ele participa da criação de processos, do gerenciamento de memória, do escalonamento de tarefas e do tratamento de interrupções e exceções.",
          en: "It participates in process creation, memory management, task scheduling, and interrupt and exception handling.",
        },
        {
          pt: "Quando um programa solicita determinadas operações, como acesso a arquivos ou comunicação com dispositivos, pode ser necessário utilizar chamadas de sistema.",
          en: "When a program requests certain operations, such as file access or device communication, system calls may be required.",
        },
        {
          pt: "O processador implementa mecanismos de privilégio e proteção que ajudam a separar o código de aplicações das operações reservadas ao núcleo do sistema operacional.",
          en: "The processor implements privilege and protection mechanisms that help separate application code from operations reserved for the operating system kernel.",
        },
      ],
    },

    {
      id: "interrupts",

      heading: {
        pt: "Interrupções: quando a execução precisa mudar",
        en: "Interrupts: when execution needs to change",
      },

      paragraphs: [
        {
          pt: "Interrupções permitem que eventos sejam tratados sem exigir que o processador verifique continuamente cada dispositivo por meio de consultas explícitas.",
          en: "Interrupts allow events to be handled without requiring the processor to continuously check every device through explicit polling.",
        },
        {
          pt: "Dispositivos, temporizadores e outros componentes podem gerar eventos que exigem a execução de rotinas específicas.",
          en: "Devices, timers, and other components can generate events requiring specific routines to execute.",
        },
        {
          pt: "O processador utiliza mecanismos arquiteturais para transferir o controle a uma rotina de tratamento apropriada, preservando as informações necessárias para retomar a execução quando aplicável.",
          en: "The processor uses architectural mechanisms to transfer control to an appropriate handler, preserving the information needed to resume execution when applicable.",
        },
        {
          pt: "Exceções, como falhas de página ou operações inválidas, também podem provocar transferências controladas do fluxo de execução.",
          en: "Exceptions, such as page faults or invalid operations, can also cause controlled transfers of execution flow.",
        },
      ],
    },

    {
      id: "multicore",

      heading: {
        pt: "Núcleos e processamento paralelo",
        en: "Cores and parallel processing",
      },

      paragraphs: [
        {
          pt: "Um processador moderno pode conter múltiplos núcleos, cada um capaz de executar fluxos de instruções.",
          en: "A modern processor may contain multiple cores, each capable of executing instruction streams.",
        },
        {
          pt: "Essa organização permite executar diferentes tarefas simultaneamente, desde que existam recursos e paralelismo suficientes.",
          en: "This organization allows different tasks to run simultaneously, provided sufficient resources and parallelism are available.",
        },
        {
          pt: "Algumas arquiteturas também oferecem multithreading simultâneo, no qual um núcleo mantém múltiplos contextos de execução para aproveitar melhor seus recursos internos.",
          en: "Some architectures also provide simultaneous multithreading, in which one core maintains multiple execution contexts to better utilize internal resources.",
        },
        {
          pt: "O ganho de desempenho depende da natureza do programa. Tarefas essencialmente sequenciais não se tornam automaticamente mais rápidas apenas porque existem mais núcleos.",
          en: "Performance gains depend on the program's nature. Essentially sequential tasks do not automatically become faster merely because more cores are available.",
        },
      ],
    },

    {
      id: "performance",

      heading: {
        pt: "O que realmente determina a velocidade de uma CPU?",
        en: "What actually determines CPU speed?",
      },

      paragraphs: [
        {
          pt: "A frequência de clock é apenas um dos fatores que influenciam o desempenho de um processador.",
          en: "Clock frequency is only one of the factors influencing processor performance.",
        },
        {
          pt: "Também importam a quantidade de trabalho realizado por ciclo, a eficiência da execução paralela, as latências de memória e o comportamento das aplicações.",
          en: "Work completed per cycle, parallel execution efficiency, memory latency, and application behavior also matter.",
        },
        {
          pt: "Dois processadores com a mesma frequência podem apresentar desempenhos bastante diferentes devido às suas microarquiteturas.",
          en: "Two processors running at the same frequency may deliver very different performance because of their microarchitectures.",
        },
        {
          pt: "Consumo energético, limites térmicos e políticas de gerenciamento de frequência também influenciam o desempenho sustentado.",
          en: "Power consumption, thermal limits, and frequency-management policies also influence sustained performance.",
        },
      ],
    },

    {
      id: "example",

      heading: {
        pt: "Exemplo: o que acontece durante uma soma?",
        en: "Example: what happens during an addition?",
      },

      paragraphs: [
        {
          pt: "Considere uma operação simples, como calcular a soma de dois valores inteiros em um programa.",
          en: "Consider a simple operation, such as calculating the sum of two integer values in a program.",
        },
        {
          pt: "Dependendo da linguagem, do compilador e do contexto, a operação pode ser representada por uma instrução de adição da ISA ou por uma sequência maior de instruções.",
          en: "Depending on the language, compiler, and context, the operation may be represented by an ISA addition instruction or by a longer instruction sequence.",
        },
        {
          pt: "Durante a execução, os operandos precisam estar disponíveis em registradores ou em outras estruturas internas. A unidade funcional apropriada realiza a operação binária e produz o resultado.",
          en: "During execution, the operands must be available in registers or other internal structures. The appropriate functional unit performs the binary operation and produces the result.",
        },
        {
          pt: "Em nível eletrônico, o resultado emerge da propagação de sinais por circuitos digitais construídos com transistores.",
          en: "At the electronic level, the result emerges from signals propagating through digital circuits built from transistors.",
        },
        {
          pt: "O compilador pode inclusive eliminar a operação em tempo de compilação quando consegue determinar antecipadamente o resultado, demonstrando que nem toda expressão escrita no código precisa corresponder a uma operação executada pela CPU.",
          en: "The compiler may even eliminate the operation at compile time when it can determine the result in advance, demonstrating that not every expression written in source code must correspond to an operation executed by the CPU.",
        },
      ],
    },

    {
      id: "security",

      heading: {
        pt: "Arquitetura de processadores e segurança",
        en: "Processor architecture and security",
      },

      paragraphs: [
        {
          pt: "O comportamento interno de processadores modernos também possui consequências importantes para a segurança computacional.",
          en: "The internal behavior of modern processors also has important consequences for computer security.",
        },
        {
          pt: "Mecanismos como caches, predição de desvios e execução especulativa podem produzir efeitos observáveis relacionados ao tempo de execução ou ao uso de recursos.",
          en: "Mechanisms such as caches, branch prediction, and speculative execution can produce observable effects related to execution time or resource usage.",
        },
        {
          pt: "Determinadas vulnerabilidades de canal lateral exploram essas diferenças para inferir informações que não deveriam estar diretamente acessíveis.",
          en: "Certain side-channel vulnerabilities exploit these differences to infer information that should not be directly accessible.",
        },
        {
          pt: "Os ataques Spectre e Meltdown demonstraram que mecanismos microarquiteturais podem criar desafios de segurança mesmo quando as regras arquiteturais de acesso à memória parecem estar sendo respeitadas.",
          en: "The Spectre and Meltdown attacks demonstrated that microarchitectural mechanisms can create security challenges even when architectural memory-access rules appear to be respected.",
        },
        {
          pt: "Compreender a execução de instruções é, portanto, relevante não apenas para desempenho e desenvolvimento de sistemas, mas também para pesquisas em segurança de hardware.",
          en: "Understanding instruction execution is therefore relevant not only to performance and systems development, but also to hardware security research.",
        },
      ],
    },

    {
      id: "conclusion",

      heading: {
        pt: "Do software aos sinais elétricos",
        en: "From software to electrical signals",
      },

      paragraphs: [
        {
          pt: "Um programa de computador atravessa diferentes níveis de abstração antes que suas operações sejam realizadas fisicamente.",
          en: "A computer program passes through different abstraction levels before its operations are physically performed.",
        },
        {
          pt: "Linguagens de programação permitem expressar algoritmos, enquanto compiladores e ambientes de execução conectam essas construções às instruções de máquina.",
          en: "Programming languages allow algorithms to be expressed, while compilers and runtime environments connect those constructs to machine instructions.",
        },
        {
          pt: "A ISA define o comportamento dessas instruções, e a microarquitetura determina como diferentes unidades internas cooperam para executá-las.",
          en: "The ISA defines the behavior of these instructions, and the microarchitecture determines how different internal units cooperate to execute them.",
        },
        {
          pt: "Na camada física, transistores e circuitos digitais transformam variações de tensão elétrica em operações lógicas e aritméticas.",
          en: "At the physical layer, transistors and digital circuits transform electrical voltage variations into logical and arithmetic operations.",
        },
        {
          pt: "Compreender essa conexão entre software e hardware permite enxergar a computação não apenas como código, mas como uma sequência organizada de processos físicos.",
          en: "Understanding this connection between software and hardware allows us to see computing not merely as code, but as an organized sequence of physical processes.",
        },
      ],
    },
  ],

  references: [
    {
      title:
        "Computer Organization and Design: The Hardware/Software Interface",
      authors: "Patterson, D. A. & Hennessy, J. L.",
      year: 2020,
      url: "https://www.elsevier.com/books/computer-organization-and-design-risc-v-edition/patterson/978-0-12-820331-6",
    },
    {
      title:
        "Computer Systems: A Programmer's Perspective",
      authors: "Bryant, R. E. & O'Hallaron, D. R.",
      year: 2015,
      url: "https://csapp.cs.cmu.edu/",
    },
    {
      title: "The RISC-V Instruction Set Manual",
      authors: "RISC-V International",
      url: "https://docs.riscv.org/",
    },
    {
      title: "Intel 64 and IA-32 Architectures Software Developer's Manuals",
      authors: "Intel Corporation",
      url: "https://www.intel.com/content/www/us/en/developer/articles/technical/intel-sdm.html",
    },
    {
      title: "Spectre Attacks: Exploiting Speculative Execution",
      authors: "Kocher, P. et al.",
      year: 2019,
      url: "https://spectreattack.com/spectre.pdf",
    },
    {
      title: "Meltdown: Reading Kernel Memory from User Space",
      authors: "Lipp, M. et al.",
      year: 2018,
      url: "https://meltdownattack.com/meltdown.pdf",
    },
  ],
};
