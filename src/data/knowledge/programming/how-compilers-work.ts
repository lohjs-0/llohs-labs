
import type { KnowledgePost } from "../../knowledge.types";

export const howCompilersWork: KnowledgePost = {
  slug: "how-compilers-work",

  title: {
    pt: "Do código-fonte ao código de máquina: como funciona um compilador?",
    en: "From source code to machine code: how does a compiler work?",
  },

  description: {
    pt: "Uma investigação sobre o caminho percorrido por um programa: análise léxica, parsing, árvores sintáticas, análise semântica, otimização, geração de código e linking.",
    en: "An investigation into the journey of a program: lexical analysis, parsing, syntax trees, semantic analysis, optimization, code generation, and linking.",
  },

  category: "programming",
  date: "2026-11-15",
  readingMinutes: 16,

  tags: [
    "programming",
    "compilers",
    "computer-science",
    "c",
    "assembly",
    "machine-code",
    "llvm",
    "linkers",
    "computer-architecture",
  ],

  sections: [
    {
      id: "introduction",
      heading: {
        pt: "O computador não entende código-fonte",
        en: "Computers do not understand source code",
      },
      paragraphs: [
        {
          pt: "Quando escrevemos um programa em C, C++ ou outra linguagem compilada, utilizamos palavras, expressões e estruturas criadas para serem compreendidas por pessoas. Entretanto, o processador não executa diretamente essas construções: ele interpreta instruções definidas por sua arquitetura.",
          en: "When writing a program in C, C++, or another compiled language, we use words, expressions, and structures designed to be understood by humans. However, the processor does not directly execute these constructs: it interprets instructions defined by its architecture.",
        },
        {
          pt: "O compilador é um programa responsável por transformar uma representação de código em outra, preservando o comportamento exigido pela linguagem. Em um compilador nativo, o resultado costuma contribuir para a geração de código de máquina executável por uma arquitetura específica.",
          en: "A compiler is a program responsible for transforming one representation of code into another while preserving the behavior required by the language. In a native compiler, the result typically contributes to generating machine code executable by a specific architecture.",
        },
        {
          pt: "Esse processo envolve várias etapas. O compilador precisa reconhecer símbolos, compreender a estrutura gramatical, verificar regras semânticas, construir representações internas e gerar instruções adequadas ao processador de destino.",
          en: "This process involves several stages. The compiler must recognize tokens, understand grammatical structure, verify semantic rules, build internal representations, and generate instructions suitable for the target processor.",
        },
      ],
    },

    {
      id: "source-code",
      heading: {
        pt: "Tudo começa com o código-fonte",
        en: "Everything begins with source code",
      },
      paragraphs: [
        {
          pt: "Considere um programa simples em C: int main(void) { int a = 5; int b = 3; return a + b; }. Para uma pessoa familiarizada com a linguagem, sua intenção é evidente: declarar duas variáveis, somá-las e retornar o resultado.",
          en: "Consider a simple C program: int main(void) { int a = 5; int b = 3; return a + b; }. For someone familiar with the language, its purpose is clear: declare two variables, add them, and return the result.",
        },
        {
          pt: "Para o compilador, esse texto precisa primeiro ser interpretado segundo regras formais. Caracteres são agrupados em unidades significativas, expressões são organizadas e as operações são verificadas antes da geração de código.",
          en: "For the compiler, this text must first be interpreted according to formal rules. Characters are grouped into meaningful units, expressions are organized, and operations are checked before code generation.",
        },
        {
          pt: "Em C e C++, o pré-processamento também pode expandir macros, processar diretivas como #include e selecionar trechos condicionais do código. As etapas exatas dependem da linguagem e da implementação do compilador.",
          en: "In C and C++, preprocessing can also expand macros, process directives such as #include, and select conditional portions of code. The exact stages depend on the language and compiler implementation.",
        },
      ],
    },

    {
      id: "lexical-analysis",
      heading: {
        pt: "Análise léxica: transformando caracteres em tokens",
        en: "Lexical analysis: turning characters into tokens",
      },
      paragraphs: [
        {
          pt: "A análise léxica identifica unidades da linguagem chamadas tokens. Na expressão int resultado = a + b;, por exemplo, aparecem uma palavra-chave de tipo, um identificador, um operador de atribuição, dois identificadores, um operador de adição e um delimitador.",
          en: "Lexical analysis identifies language units called tokens. In the expression int result = a + b;, for example, there are a type keyword, an identifier, an assignment operator, two identifiers, an addition operator, and a delimiter.",
        },
        {
          pt: "O analisador léxico, frequentemente chamado de lexer ou scanner, utiliza regras para reconhecer padrões válidos. Ele não precisa determinar sozinho o significado completo de uma expressão; sua função principal é identificar seus componentes.",
          en: "The lexical analyzer, often called a lexer or scanner, uses rules to recognize valid patterns. It does not need to determine the complete meaning of an expression by itself; its main purpose is to identify its components.",
        },
        {
          pt: "Essa separação facilita o trabalho das etapas seguintes, que passam a operar sobre tokens em vez de analisar cada caractere individualmente.",
          en: "This separation simplifies later stages, which can operate on tokens instead of analyzing each character individually.",
        },
      ],
    },

    {
      id: "parsing",
      heading: {
        pt: "Parsing: descobrindo a estrutura do programa",
        en: "Parsing: discovering program structure",
      },
      paragraphs: [
        {
          pt: "Depois da identificação dos tokens, o parser verifica como eles se relacionam de acordo com a gramática da linguagem. Ele determina, por exemplo, quais elementos formam uma expressão, uma declaração, uma função ou uma estrutura de controle.",
          en: "After tokens are identified, the parser checks how they relate according to the language grammar. It determines, for example, which elements form an expression, declaration, function, or control structure.",
        },
        {
          pt: "Uma expressão como 2 + 3 * 4 não deve ser interpretada simplesmente da esquerda para a direita. As regras de precedência determinam que a multiplicação seja agrupada antes da adição, produzindo o resultado 14.",
          en: "An expression such as 2 + 3 * 4 should not simply be interpreted from left to right. Precedence rules determine that multiplication is grouped before addition, producing the result 14.",
        },
        {
          pt: "Erros de sintaxe, como delimitadores ausentes ou construções incompatíveis com a gramática, podem ser detectados nessa fase.",
          en: "Syntax errors, such as missing delimiters or constructs incompatible with the grammar, can be detected during this stage.",
        },
      ],
    },

    {
      id: "ast",
      heading: {
        pt: "AST: representando código como uma árvore",
        en: "AST: representing code as a tree",
      },
      paragraphs: [
        {
          pt: "Uma Abstract Syntax Tree, ou árvore sintática abstrata, representa a estrutura essencial de um programa. Em vez de preservar todos os caracteres originais, ela organiza operações e construções em nós relacionados.",
          en: "An Abstract Syntax Tree represents the essential structure of a program. Instead of preserving every original character, it organizes operations and constructs into related nodes.",
        },
        {
          pt: "Na expressão 2 + 3 * 4, o nó principal pode representar a adição. Um de seus filhos contém o número 2, enquanto o outro representa a multiplicação entre 3 e 4.",
          en: "In the expression 2 + 3 * 4, the root node can represent addition. One child contains the number 2, while the other represents multiplication between 3 and 4.",
        },
        {
          pt: "Essa estrutura facilita análises posteriores, pois permite percorrer o programa de maneira organizada e identificar funções, variáveis, operadores e relações entre expressões.",
          en: "This structure facilitates later analysis because it allows the program to be traversed systematically and functions, variables, operators, and relationships between expressions to be identified.",
        },
      ],
    },

    {
      id: "semantic-analysis",
      heading: {
        pt: "Análise semântica: código válido precisa fazer sentido",
        en: "Semantic analysis: valid syntax must also make sense",
      },
      paragraphs: [
        {
          pt: "Um programa pode respeitar a gramática da linguagem e ainda apresentar erros. Utilizar uma variável fora de seu escopo, chamar uma função com argumentos incompatíveis ou realizar uma operação proibida pelo sistema de tipos são exemplos de problemas semânticos.",
          en: "A program can follow the language grammar and still contain errors. Using a variable outside its scope, calling a function with incompatible arguments, or performing an operation forbidden by the type system are examples of semantic problems.",
        },
        {
          pt: "Durante a análise semântica, o compilador pode verificar tipos, resolver identificadores, analisar escopos e aplicar regras específicas da linguagem.",
          en: "During semantic analysis, the compiler may check types, resolve identifiers, analyze scopes, and apply language-specific rules.",
        },
        {
          pt: "Tabelas de símbolos ajudam a organizar informações sobre declarações e referências. Elas permitem associar nomes presentes no código às entidades correspondentes.",
          en: "Symbol tables help organize information about declarations and references. They allow names appearing in the code to be associated with their corresponding entities.",
        },
      ],
    },

    {
      id: "intermediate-representation",
      heading: {
        pt: "Representação intermediária: uma linguagem dentro do compilador",
        en: "Intermediate representation: a language inside the compiler",
      },
      paragraphs: [
        {
          pt: "Muitos compiladores modernos transformam o código analisado em uma representação intermediária, conhecida como IR. Ela permite executar análises e otimizações sem depender diretamente da sintaxe original ou de uma arquitetura específica.",
          en: "Many modern compilers transform analyzed code into an intermediate representation, known as IR. It allows analyses and optimizations to be performed without depending directly on the original syntax or a specific architecture.",
        },
        {
          pt: "O LLVM IR é um exemplo conhecido. Ele representa operações, fluxos de controle e valores em uma forma apropriada para transformações realizadas pelo compilador.",
          en: "LLVM IR is a well-known example. It represents operations, control flow, and values in a form suitable for compiler transformations.",
        },
        {
          pt: "A utilização de uma IR também facilita o suporte a diferentes processadores. Uma parte das análises pode ser compartilhada, enquanto etapas específicas produzem instruções para x86-64, ARM, RISC-V ou outras arquiteturas.",
          en: "Using an IR also makes it easier to support different processors. Some analyses can be shared, while target-specific stages produce instructions for x86-64, ARM, RISC-V, or other architectures.",
        },
      ],
    },

    {
      id: "optimization",
      heading: {
        pt: "Otimização: quando o compilador transforma o programa",
        en: "Optimization: when the compiler transforms the program",
      },
      paragraphs: [
        {
          pt: "Compiladores podem aplicar transformações para reduzir o número de instruções, melhorar o uso de registradores, diminuir acessos à memória ou favorecer a execução no processador de destino.",
          en: "Compilers may apply transformations to reduce instruction count, improve register usage, decrease memory accesses, or favor execution on the target processor.",
        },
        {
          pt: "Uma técnica chamada constant folding calcula expressões constantes durante a compilação. Por exemplo, a expressão 10 * 4 pode ser substituída pelo valor 40 quando as regras da linguagem permitirem essa transformação.",
          en: "A technique called constant folding evaluates constant expressions during compilation. For example, the expression 10 * 4 may be replaced with the value 40 when the language rules permit that transformation.",
        },
        {
          pt: "Outras técnicas incluem eliminação de código morto, propagação de constantes, simplificação de expressões e otimizações de loops. A escolha das transformações depende do nível de otimização e das restrições semânticas.",
          en: "Other techniques include dead-code elimination, constant propagation, expression simplification, and loop optimizations. The chosen transformations depend on the optimization level and semantic constraints.",
        },
        {
          pt: "O compilador não pode simplesmente alterar qualquer operação para tornar o programa mais rápido. Ele precisa respeitar o comportamento observável exigido pela linguagem, considerando situações como efeitos colaterais e regras de aritmética.",
          en: "A compiler cannot simply change any operation to make a program faster. It must respect the observable behavior required by the language, considering situations such as side effects and arithmetic rules.",
        },
      ],
    },

    {
      id: "code-generation",
      heading: {
        pt: "Geração de código: aproximando o programa do processador",
        en: "Code generation: bringing the program closer to the processor",
      },
      paragraphs: [
        {
          pt: "Após as análises e transformações, o compilador precisa produzir instruções compatíveis com a arquitetura de destino. Essa etapa envolve seleção de instruções, alocação de registradores e organização das operações.",
          en: "After analysis and transformations, the compiler must produce instructions compatible with the target architecture. This stage involves instruction selection, register allocation, and operation scheduling.",
        },
        {
          pt: "Uma operação de adição pode ser implementada de maneiras diferentes dependendo do processador, dos tipos envolvidos e das otimizações aplicadas. Não existe uma correspondência universal de uma linha de código-fonte para uma instrução de máquina.",
          en: "An addition operation may be implemented differently depending on the processor, the types involved, and the optimizations applied. There is no universal one-to-one correspondence between a source-code line and a machine instruction.",
        },
        {
          pt: "Algumas ferramentas produzem assembly como uma representação textual intermediária. Um assembler pode então transformar essas instruções em código de máquina, representado por bytes que seguem a codificação definida pela arquitetura.",
          en: "Some toolchains produce assembly as an intermediate textual representation. An assembler can then transform those instructions into machine code, represented by bytes following the encoding defined by the architecture.",
        },
      ],
    },

    {
      id: "assembly",
      heading: {
        pt: "Assembly não é a mesma coisa que código de máquina",
        en: "Assembly is not the same as machine code",
      },
      paragraphs: [
        {
          pt: "Assembly é uma representação textual de instruções de uma arquitetura. Mnemônicos como MOV, ADD ou LD tornam as operações mais legíveis para pessoas, mas suas formas e significados dependem do conjunto de instruções do processador.",
          en: "Assembly is a textual representation of instructions for an architecture. Mnemonics such as MOV, ADD, or LD make operations easier for humans to read, but their forms and meanings depend on the processor's instruction set.",
        },
        {
          pt: "Código de máquina é a representação codificada dessas instruções. O processador busca os bytes de instrução na memória e os interpreta conforme sua arquitetura e seu estado de execução.",
          en: "Machine code is the encoded representation of those instructions. The processor fetches instruction bytes from memory and interprets them according to its architecture and execution state.",
        },
        {
          pt: "Um disassembler realiza o processo de interpretação inversa dos bytes de instrução, apresentando uma representação em assembly. Isso é especialmente útil em depuração, análise de executáveis e engenharia reversa.",
          en: "A disassembler performs the reverse interpretation of instruction bytes, presenting an assembly representation. This is particularly useful in debugging, executable analysis, and reverse engineering.",
        },
      ],
    },

    {
      id: "linking",
      heading: {
        pt: "Linking: reunindo as partes de um programa",
        en: "Linking: assembling the pieces of a program",
      },
      paragraphs: [
        {
          pt: "Em muitos projetos, o código-fonte está distribuído entre diversos arquivos e bibliotecas. A compilação pode gerar arquivos objeto que contêm código, dados e informações sobre símbolos e referências.",
          en: "In many projects, source code is distributed across multiple files and libraries. Compilation may generate object files containing code, data, and information about symbols and references.",
        },
        {
          pt: "O linker combina essas unidades, resolve referências entre símbolos e aplica realocações necessárias. Dependendo do sistema, o resultado pode ser um executável, uma biblioteca compartilhada ou outro artefato.",
          en: "The linker combines these units, resolves references between symbols, and applies necessary relocations. Depending on the system, the result may be an executable, a shared library, or another artifact.",
        },
        {
          pt: "A vinculação pode envolver bibliotecas estáticas ou dinâmicas. No caso de bibliotecas dinâmicas, parte da resolução e do carregamento pode ocorrer posteriormente, durante a inicialização ou execução do programa.",
          en: "Linking may involve static or dynamic libraries. With dynamic libraries, some resolution and loading may occur later, during program startup or execution.",
        },
      ],
    },

    {
      id: "execution",
      heading: {
        pt: "O que acontece quando executamos o programa?",
        en: "What happens when we execute the program?",
      },
      paragraphs: [
        {
          pt: "Em um sistema operacional convencional, a execução de um arquivo envolve mecanismos de carregamento que preparam o espaço de endereçamento do processo, mapeiam código e dados e configuram o estado inicial necessário.",
          en: "In a conventional operating system, executing a file involves loading mechanisms that prepare the process address space, map code and data, and configure the required initial state.",
        },
        {
          pt: "Depois que o controle chega ao código do programa, o processador executa instruções conforme o conjunto de instruções de sua arquitetura. A execução pode envolver registradores, caches, memória, desvios e operações de entrada e saída.",
          en: "Once control reaches the program code, the processor executes instructions according to its architecture's instruction set. Execution may involve registers, caches, memory, branches, and input/output operations.",
        },
        {
          pt: "Nem toda linguagem segue esse caminho diretamente. Java e C#, por exemplo, normalmente utilizam representações intermediárias e ambientes de execução que podem empregar compilação JIT ou outras estratégias.",
          en: "Not every language follows this path directly. Java and C#, for example, commonly use intermediate representations and runtime environments that may employ JIT compilation or other strategies.",
        },
      ],
    },

    {
      id: "z80",
      heading: {
        pt: "Conectando compiladores ao computador Z80",
        en: "Connecting compilers to the Z80 computer",
      },
      paragraphs: [
        {
          pt: "No projeto de um computador de 8 bits baseado no Z80, o software precisa utilizar instruções compatíveis com esse microprocessador. Um programa escrito para x86-64 não pode ser executado diretamente pelo Z80, pois os conjuntos de instruções são diferentes.",
          en: "In an 8-bit computer project based on the Z80, software must use instructions compatible with that microprocessor. A program written for x86-64 cannot run directly on the Z80 because their instruction sets differ.",
        },
        {
          pt: "Uma possibilidade é desenvolver programas em assembly do Z80. Outra é utilizar ferramentas de compilação cruzada, capazes de gerar código para o Z80 em um computador de desenvolvimento com outra arquitetura.",
          en: "One possibility is to develop programs in Z80 assembly. Another is to use cross-compilation tools capable of generating Z80 code on a development computer with a different architecture.",
        },
        {
          pt: "O resultado precisa ser organizado conforme o mapa de memória e o mecanismo de inicialização do sistema. Isso conecta o desenvolvimento de software às decisões tomadas no esquemático eletrônico.",
          en: "The result must be organized according to the system's memory map and boot mechanism. This connects software development to decisions made in the electronic schematic.",
        },
      ],
    },

    {
      id: "conclusion",
      heading: {
        pt: "Entre o código e o silício",
        en: "Between code and silicon",
      },
      paragraphs: [
        {
          pt: "Compilar um programa não significa apenas substituir palavras por números binários. É um processo de análise, transformação e geração de representações que conectam a intenção do programador às regras de uma arquitetura computacional.",
          en: "Compiling a program does not simply mean replacing words with binary numbers. It is a process of analysis, transformation, and representation generation that connects the programmer's intent to the rules of a computer architecture.",
        },
        {
          pt: "Compreender compiladores ajuda a explicar por que programas apresentam comportamentos diferentes entre arquiteturas, como surgem determinadas otimizações e de que maneira código-fonte se relaciona com instruções executadas fisicamente.",
          en: "Understanding compilers helps explain why programs behave differently across architectures, how certain optimizations arise, and how source code relates to physically executed instructions.",
        },
      ],
    },
  ],

  references: [
    {
      title: "Compilers: Principles, Techniques, and Tools",
      authors: "Alfred V. Aho, Monica S. Lam, Ravi Sethi & Jeffrey D. Ullman",
      year: 2006,
      url: "https://www.pearson.com/en-us/subject-catalog/p/compilers-principles-techniques-and-tools/P200000003390",
    },
    {
      title: "LLVM Language Reference Manual",
      authors: "LLVM Project",
      url: "https://llvm.org/docs/LangRef.html",
    },
    {
      title: "GCC Documentation",
      authors: "GNU Project",
      url: "https://gcc.gnu.org/onlinedocs/",
    },
    {
      title: "The GNU Linker",
      authors: "GNU Binutils",
      url: "https://sourceware.org/binutils/docs/ld/",
    },
    {
      title: "Z80 CPU User Manual",
      authors: "Zilog",
      url: "https://www.zilog.com/docs/z80/um0080.pdf",
    },
  ],
};
