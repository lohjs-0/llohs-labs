
import type { KnowledgePost } from "../../knowledge.types";

export const anatomyOfWindowsExecutable: KnowledgePost = {
  slug: "anatomy-of-a-windows-executable",

  title: {
    pt: "O que existe dentro de um arquivo .exe?",
    en: "What's inside a Windows .exe file?",
  },

  description: {
    pt: "Uma exploração técnica do formato Portable Executable: DOS Header, PE Header, seções, tabelas de importação, relocations e técnicas de análise estática utilizadas em engenharia reversa e forense digital.",
    en: "A technical exploration of the Portable Executable format: DOS Header, PE Header, sections, import tables, relocations, and static analysis techniques used in reverse engineering and digital forensics.",
  },

  category: "cybersecurity",
  date: "2026-11-15",
  readingMinutes: 17,

  tags: [
    "cybersecurity",
    "reverse-engineering",
    "digital-forensics",
    "windows",
    "portable-executable",
    "binary-analysis",
    "assembly",
    "malware-analysis",
  ],

  sections: [
    {
      id: "introduction",
      heading: {
        pt: "Um executável não é apenas código de máquina",
        en: "An executable is more than machine code",
      },
      paragraphs: [
        {
          pt: "Quando um programa é compilado para Windows, seu arquivo executável normalmente utiliza o formato Portable Executable, conhecido como PE. Esse formato define como código, dados e metadados são organizados para que o sistema operacional consiga interpretar e carregar o programa.",
          en: "When a program is compiled for Windows, its executable file typically uses the Portable Executable format, known as PE. This format defines how code, data, and metadata are organized so the operating system can interpret and load the program.",
        },
        {
          pt: "Um arquivo .exe não contém apenas instruções de processador. Ele também pode incluir informações sobre arquitetura, endereços, bibliotecas externas, recursos, tratamento de exceções e outras estruturas necessárias ao funcionamento do programa.",
          en: "An .exe file does not contain only processor instructions. It may also include information about architecture, addresses, external libraries, resources, exception handling, and other structures required for the program to function.",
        },
        {
          pt: "Compreender essa organização é importante para depuração, desenvolvimento de ferramentas, análise de malware e investigações forenses. Muitas informações podem ser examinadas sem executar o arquivo.",
          en: "Understanding this organization is important for debugging, tool development, malware analysis, and forensic investigations. Much of this information can be examined without executing the file.",
        },
      ],
    },

    {
      id: "pe-format",
      heading: {
        pt: "O formato Portable Executable",
        en: "The Portable Executable format",
      },
      paragraphs: [
        {
          pt: "Portable Executable é uma família de formatos utilizada pelo Windows para executáveis, bibliotecas DLL e outros tipos de imagem. Sua estrutura deriva de conceitos do formato COFF, Common Object File Format.",
          en: "Portable Executable is a family of formats used by Windows for executables, DLL libraries, and other image types. Its structure derives from concepts of COFF, the Common Object File Format.",
        },
        {
          pt: "O arquivo contém cabeçalhos que descrevem sua organização, uma tabela de seções e regiões destinadas a código, dados e outras informações. O carregador do Windows utiliza esses metadados para preparar a imagem executável na memória.",
          en: "The file contains headers describing its organization, a section table, and regions for code, data, and other information. The Windows loader uses this metadata to prepare the executable image in memory.",
        },
        {
          pt: "É importante distinguir o arquivo armazenado em disco da imagem carregada em memória. Os deslocamentos e alinhamentos podem ser diferentes, e nem todos os bytes presentes no arquivo precisam ser mapeados diretamente.",
          en: "It is important to distinguish the file stored on disk from the image loaded into memory. Offsets and alignments may differ, and not every byte present in the file must be mapped directly.",
        },
      ],
    },

    {
      id: "dos-header",
      heading: {
        pt: "DOS Header: por que um executável moderno começa com MZ?",
        en: "DOS Header: why does a modern executable begin with MZ?",
      },
      paragraphs: [
        {
          pt: "Um arquivo PE tradicional começa com um cabeçalho compatível com a estrutura de executáveis DOS. Seus dois primeiros bytes normalmente correspondem aos caracteres ASCII MZ, representados em hexadecimal por 4D 5A.",
          en: "A traditional PE file begins with a header compatible with the structure of DOS executables. Its first two bytes normally correspond to the ASCII characters MZ, represented in hexadecimal as 4D 5A.",
        },
        {
          pt: "O DOS Header inclui o campo e_lfanew, localizado no deslocamento 0x3C. Esse campo contém um deslocamento de arquivo que aponta para a assinatura PE e seus cabeçalhos subsequentes.",
          en: "The DOS Header includes the e_lfanew field, located at offset 0x3C. This field contains a file offset pointing to the PE signature and its subsequent headers.",
        },
        {
          pt: "Entre o DOS Header e a assinatura PE pode existir um programa DOS stub, frequentemente associado à mensagem de que o aplicativo não pode ser executado no modo DOS. Essa região é um legado de compatibilidade histórica.",
          en: "Between the DOS Header and the PE signature there may be a DOS stub program, often associated with a message stating that the application cannot run in DOS mode. This region is a legacy of historical compatibility.",
        },
      ],
    },

    {
      id: "pe-header",
      heading: {
        pt: "PE Signature e COFF File Header",
        en: "PE Signature and COFF File Header",
      },
      paragraphs: [
        {
          pt: "No deslocamento indicado por e_lfanew, espera-se encontrar a assinatura PE seguida de dois bytes nulos. Sua representação hexadecimal é 50 45 00 00.",
          en: "At the offset indicated by e_lfanew, the PE signature followed by two null bytes is expected. Its hexadecimal representation is 50 45 00 00.",
        },
        {
          pt: "Em seguida aparece o COFF File Header, que contém campos como Machine, NumberOfSections, TimeDateStamp, SizeOfOptionalHeader e Characteristics.",
          en: "Next comes the COFF File Header, containing fields such as Machine, NumberOfSections, TimeDateStamp, SizeOfOptionalHeader, and Characteristics.",
        },
        {
          pt: "O campo Machine identifica a arquitetura de destino, como x86 ou x86-64. NumberOfSections informa quantas entradas existem na tabela de seções, enquanto Characteristics descreve propriedades da imagem.",
          en: "The Machine field identifies the target architecture, such as x86 or x86-64. NumberOfSections indicates how many entries exist in the section table, while Characteristics describes image properties.",
        },
        {
          pt: "O campo TimeDateStamp pode conter um valor associado à construção do arquivo, mas não deve ser tratado isoladamente como prova confiável de sua data de compilação. Ele pode ser alterado, reproduzido ou utilizado de maneiras específicas por diferentes ferramentas.",
          en: "The TimeDateStamp field may contain a value associated with the file's build, but it should not be treated alone as reliable proof of compilation time. It may be modified, reproduced, or used in tool-specific ways.",
        },
      ],
    },

    {
      id: "optional-header",
      heading: {
        pt: "Optional Header: um nome enganoso",
        en: "Optional Header: a misleading name",
      },
      paragraphs: [
        {
          pt: "Apesar do nome, o Optional Header é necessário para imagens executáveis PE. Ele reúne informações fundamentais para o carregamento, incluindo o endereço de entrada, o endereço-base preferencial e parâmetros de alinhamento.",
          en: "Despite its name, the Optional Header is required for PE executable images. It contains essential loading information, including the entry point, preferred image base, and alignment parameters.",
        },
        {
          pt: "As variantes PE32 e PE32+ possuem diferenças estruturais. PE32+ é utilizada principalmente para imagens de 64 bits e não significa simplesmente que todos os campos foram ampliados para 64 bits.",
          en: "The PE32 and PE32+ variants have structural differences. PE32+ is primarily used for 64-bit images and does not simply mean that every field has been expanded to 64 bits.",
        },
        {
          pt: "O AddressOfEntryPoint representa um endereço virtual relativo à base da imagem, conhecido como RVA. Ele indica o ponto de entrada especificado no cabeçalho, que não necessariamente corresponde diretamente à função main escrita pelo programador.",
          en: "AddressOfEntryPoint represents a relative virtual address, known as an RVA. It indicates the entry point specified in the header, which does not necessarily correspond directly to the main function written by the programmer.",
        },
      ],
    },

    {
      id: "sections",
      heading: {
        pt: "Seções: .text, .data, .rdata e .rsrc",
        en: "Sections: .text, .data, .rdata, and .rsrc",
      },
      paragraphs: [
        {
          pt: "A tabela de seções descreve regiões da imagem, incluindo suas posições no arquivo, endereços virtuais, tamanhos e características. Os nomes das seções são convenções e podem variar entre compiladores, linkers e programas.",
          en: "The section table describes image regions, including their file positions, virtual addresses, sizes, and characteristics. Section names are conventions and may vary between compilers, linkers, and programs.",
        },
        {
          pt: "A seção .text costuma conter instruções executáveis. A seção .data geralmente armazena dados inicializados que podem ser modificados, enquanto .rdata frequentemente contém dados somente de leitura, como constantes.",
          en: "The .text section commonly contains executable instructions. The .data section generally stores initialized data that can be modified, while .rdata frequently contains read-only data such as constants.",
        },
        {
          pt: "A seção .rsrc costuma armazenar recursos do Windows, como ícones, caixas de diálogo, manifestos e informações de versão. Outras seções podem conter dados de relocação, tratamento de exceções ou estruturas específicas.",
          en: "The .rsrc section commonly stores Windows resources such as icons, dialogs, manifests, and version information. Other sections may contain relocation data, exception-handling information, or specialized structures.",
        },
        {
          pt: "O nome de uma seção não garante seu conteúdo ou suas permissões. Uma análise confiável precisa considerar os campos estruturais, as características declaradas e os dados efetivamente presentes.",
          en: "A section name does not guarantee its contents or permissions. Reliable analysis must consider structural fields, declared characteristics, and the actual data present.",
        },
      ],
    },

    {
      id: "rva",
      heading: {
        pt: "File Offset, RVA e VA: três formas de localizar dados",
        en: "File Offset, RVA, and VA: three ways to locate data",
      },
      paragraphs: [
        {
          pt: "File Offset representa uma posição em bytes dentro do arquivo armazenado em disco. RVA, Relative Virtual Address, representa um deslocamento relativo à base da imagem quando carregada em memória.",
          en: "File Offset represents a byte position within the file stored on disk. RVA, Relative Virtual Address, represents an offset relative to the image base when loaded into memory.",
        },
        {
          pt: "VA, Virtual Address, representa um endereço virtual no espaço de endereçamento do processo. Em um mapeamento convencional, a relação básica é VA = ImageBase + RVA.",
          en: "VA, Virtual Address, represents a virtual address in the process address space. In conventional mapping, the basic relationship is VA = ImageBase + RVA.",
        },
        {
          pt: "Para converter um RVA em deslocamento de arquivo, normalmente é necessário identificar a seção correspondente e considerar seu VirtualAddress e PointerToRawData. A conversão exige cuidados com alinhamento, limites e regiões que não possuem correspondência direta em disco.",
          en: "To convert an RVA into a file offset, it is normally necessary to identify the corresponding section and consider its VirtualAddress and PointerToRawData. Conversion requires care with alignment, boundaries, and regions without a direct on-disk counterpart.",
        },
      ],
    },

    {
      id: "imports",
      heading: {
        pt: "Import Table: como um executável utiliza DLLs",
        en: "Import Table: how an executable uses DLLs",
      },
      paragraphs: [
        {
          pt: "Programas Windows frequentemente utilizam funções disponibilizadas por bibliotecas dinâmicas, como kernel32.dll e user32.dll. O formato PE possui estruturas que descrevem dependências e funções importadas.",
          en: "Windows programs frequently use functions provided by dynamic libraries, such as kernel32.dll and user32.dll. The PE format contains structures describing dependencies and imported functions.",
        },
        {
          pt: "A Import Directory pode conter descritores associados a DLLs, nomes ou ordinais de funções e estruturas utilizadas para resolver endereços durante o carregamento.",
          en: "The Import Directory may contain descriptors associated with DLLs, function names or ordinals, and structures used to resolve addresses during loading.",
        },
        {
          pt: "A Import Address Table, conhecida como IAT, participa do mecanismo que permite ao programa chamar funções externas após a resolução de seus endereços.",
          en: "The Import Address Table, known as the IAT, participates in the mechanism that allows the program to call external functions after their addresses have been resolved.",
        },
        {
          pt: "Examinar imports pode revelar dependências e sugerir funcionalidades. Entretanto, uma função importada não comprova que determinada ação será executada, e programas também podem resolver funções dinamicamente sem listá-las diretamente na tabela convencional.",
          en: "Examining imports can reveal dependencies and suggest functionality. However, an imported function does not prove that a particular action will occur, and programs may also resolve functions dynamically without listing them directly in the conventional import table.",
        },
      ],
    },

    {
      id: "exports",
      heading: {
        pt: "Export Table: disponibilizando funções para outros módulos",
        en: "Export Table: exposing functions to other modules",
      },
      paragraphs: [
        {
          pt: "Bibliotecas DLL podem disponibilizar funções ou dados por meio de uma Export Directory. Essa estrutura permite que outros módulos encontrem símbolos exportados por nome ou ordinal.",
          en: "DLL libraries can expose functions or data through an Export Directory. This structure allows other modules to locate exported symbols by name or ordinal.",
        },
        {
          pt: "Nem toda função interna de uma biblioteca aparece na tabela de exportação. A presença de símbolos exportados depende das decisões de implementação e construção do módulo.",
          en: "Not every internal function in a library appears in the export table. The presence of exported symbols depends on the module's implementation and build decisions.",
        },
      ],
    },

    {
      id: "relocations",
      heading: {
        pt: "Relocations e ASLR",
        en: "Relocations and ASLR",
      },
      paragraphs: [
        {
          pt: "Um executável PE possui um endereço-base preferencial. Entretanto, a imagem pode precisar ser carregada em outro endereço virtual. Quando isso ocorre, determinadas referências internas podem exigir ajustes.",
          en: "A PE executable has a preferred image base. However, the image may need to be loaded at a different virtual address. When this happens, certain internal references may require adjustments.",
        },
        {
          pt: "A Base Relocation Table descreve posições que podem precisar de correção quando a base de carregamento muda. O carregador utiliza essas informações quando a realocação é necessária e suportada.",
          en: "The Base Relocation Table describes locations that may need adjustment when the load base changes. The loader uses this information when relocation is necessary and supported.",
        },
        {
          pt: "ASLR, Address Space Layout Randomization, é uma técnica de mitigação que introduz variabilidade em endereços de memória. Seu funcionamento depende de suporte do sistema operacional e das propriedades do executável.",
          en: "ASLR, Address Space Layout Randomization, is a mitigation technique that introduces variability into memory addresses. Its operation depends on operating system support and executable properties.",
        },
        {
          pt: "A presença de relocations, por si só, não demonstra que todas as proteções de segurança estão habilitadas. É necessário examinar também os campos relevantes do cabeçalho e o ambiente de execução.",
          en: "The presence of relocations alone does not demonstrate that all security protections are enabled. Relevant header fields and the execution environment must also be examined.",
        },
      ],
    },

    {
      id: "static-analysis",
      heading: {
        pt: "Análise estática: investigando sem executar",
        en: "Static analysis: investigating without execution",
      },
      paragraphs: [
        {
          pt: "A análise estática examina um arquivo sem executar suas instruções. Ela pode incluir identificação do formato, cálculo de hashes, inspeção de cabeçalhos, extração de strings, análise de imports e desassemblagem.",
          en: "Static analysis examines a file without executing its instructions. It may include format identification, hash calculation, header inspection, string extraction, import analysis, and disassembly.",
        },
        {
          pt: "Ferramentas como PE-bear, Detect It Easy, Ghidra e ferramentas baseadas na biblioteca pefile podem ajudar a interpretar diferentes partes de um executável PE.",
          en: "Tools such as PE-bear, Detect It Easy, Ghidra, and utilities based on the pefile library can help interpret different parts of a PE executable.",
        },
        {
          pt: "O resultado deve ser interpretado com cautela. Arquivos compactados, ofuscados ou deliberadamente modificados podem apresentar informações incompletas ou enganosas. A análise estática também não revela necessariamente todos os comportamentos que surgem durante a execução.",
          en: "Results must be interpreted carefully. Packed, obfuscated, or deliberately modified files may present incomplete or misleading information. Static analysis also does not necessarily reveal every behavior that occurs during execution.",
        },
      ],
    },

    {
      id: "forensics",
      heading: {
        pt: "Aplicações em forense digital",
        en: "Applications in digital forensics",
      },
      paragraphs: [
        {
          pt: "Em uma investigação forense, examinar a estrutura de um executável pode ajudar a identificar arquitetura, dependências, recursos incorporados e características de construção. Essas informações podem contribuir para a compreensão de um artefato digital.",
          en: "In a forensic investigation, examining an executable's structure can help identify architecture, dependencies, embedded resources, and build characteristics. This information may contribute to understanding a digital artifact.",
        },
        {
          pt: "Hashes criptográficos permitem identificar arquivos e comparar cópias. Metadados podem fornecer pistas, mas precisam ser correlacionados com outras evidências antes de sustentar conclusões sobre origem, autoria ou cronologia.",
          en: "Cryptographic hashes allow files to be identified and copies compared. Metadata may provide clues, but it must be correlated with other evidence before supporting conclusions about origin, authorship, or chronology.",
        },
        {
          pt: "Quando um arquivo é desconhecido ou potencialmente malicioso, sua execução direta no computador principal não é recomendada. O exame inicial deve priorizar métodos não executáveis e ambientes de análise adequadamente isolados quando a execução for necessária.",
          en: "When a file is unknown or potentially malicious, directly executing it on the primary computer is not recommended. Initial examination should prioritize non-executing methods and appropriately isolated analysis environments when execution is necessary.",
        },
      ],
    },

    {
      id: "conclusion",
      heading: {
        pt: "O executável como estrutura de dados",
        en: "The executable as a data structure",
      },
      paragraphs: [
        {
          pt: "Um arquivo .exe é uma estrutura organizada que conecta o código produzido por compiladores e linkers aos mecanismos de carregamento do Windows. Seus cabeçalhos, seções e diretórios descrevem como a imagem deve ser interpretada.",
          en: "An .exe file is an organized structure connecting code produced by compilers and linkers to Windows loading mechanisms. Its headers, sections, and directories describe how the image should be interpreted.",
        },
        {
          pt: "Entender o formato PE permite observar detalhes que normalmente permanecem invisíveis durante a execução de um programa. Esse conhecimento constitui uma base importante para engenharia reversa, segurança de software e análise forense.",
          en: "Understanding the PE format makes it possible to observe details that normally remain invisible while a program runs. This knowledge provides an important foundation for reverse engineering, software security, and forensic analysis.",
        },
      ],
    },
  ],

  references: [
    {
      title: "PE Format",
      authors: "Microsoft Learn",
      url: "https://learn.microsoft.com/en-us/windows/win32/debug/pe-format",
    },
    {
      title: "Ghidra Documentation",
      authors: "National Security Agency",
      url: "https://ghidra-sre.org/",
    },
    {
      title: "pefile: Python module to read and work with PE files",
      authors: "Ero Carrera",
      url: "https://github.com/erocarrera/pefile",
    },
    {
      title: "Windows Internals, Part 1",
      authors: "Pavel Yosifovich, Alex Ionescu, Mark E. Russinovich & David A. Solomon",
      year: 2017,
      url: "https://learn.microsoft.com/en-us/sysinternals/resources/windows-internals",
    },
  ],
};
