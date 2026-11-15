
import type { KnowledgePost } from "../../knowledge.types";

export const steganographyHiddenInformation: KnowledgePost = {
  slug: "steganography-hidden-information",

  title: {
    pt: "Esteganografia: escondendo informações à vista de todos",
    en: "Steganography: Hiding Information in Plain Sight",
  },

  description: {
    pt: "Como esconder informações em imagens, áudio e outros arquivos digitais? Uma investigação sobre esteganografia, codificação LSB, esteganálise e um experimento prático em Python.",
    en: "How can information be hidden inside images, audio, and other digital files? An investigation into steganography, LSB encoding, steganalysis, and a practical Python experiment.",
  },

  category: "cybersecurity",
  date: "2026-11-15",
  readingMinutes: 16,

  tags: [
    "cybersecurity",
    "steganography",
    "digital-forensics",
    "python",
    "lsb",
    "image-processing",
    "steganalysis",
    "information-hiding",
  ],

  sections: [
    {
      id: "introduction",
      heading: {
        pt: "A informação que ninguém deveria perceber",
        en: "Information nobody is supposed to notice",
      },
      paragraphs: [
        {
          pt: "Imagine receber uma fotografia aparentemente comum. Ela possui cores, dimensões e um formato perfeitamente reconhecível. Entretanto, determinados valores de seus pixels podem ter sido modificados para representar uma mensagem que não aparece visualmente.",
          en: "Imagine receiving an apparently ordinary photograph. It has recognizable colors, dimensions, and a familiar format. However, certain pixel values may have been modified to represent a message that is not visually apparent.",
        },
        {
          pt: "Esse é o princípio da esteganografia: ocultar a existência de uma informação dentro de outro meio. Diferentemente da criptografia, cujo objetivo principal é proteger o conteúdo de uma mensagem, a esteganografia procura tornar sua presença menos perceptível.",
          en: "This is the principle of steganography: concealing the existence of information within another medium. Unlike cryptography, whose primary goal is to protect message contents, steganography seeks to make its presence less noticeable.",
        },
        {
          pt: "Na computação, técnicas esteganográficas podem utilizar imagens, áudio, vídeo, documentos e estruturas de arquivos. Seu estudo também é relevante para forense digital, análise de arquivos e segurança da informação.",
          en: "In computing, steganographic techniques may use images, audio, video, documents, and file structures. Their study is also relevant to digital forensics, file analysis, and information security.",
        },
      ],
    },

    {
      id: "history",
      heading: {
        pt: "Antes dos computadores: uma prática antiga",
        en: "Before computers: an ancient practice",
      },
      paragraphs: [
        {
          pt: "A ideia de esconder mensagens é muito anterior à computação digital. Relatos históricos descrevem métodos como escrever informações em superfícies posteriormente cobertas ou utilizar substâncias que dificultavam a leitura imediata do conteúdo.",
          en: "The idea of hiding messages predates digital computing. Historical accounts describe methods such as writing information on surfaces that were later covered or using substances that made the content difficult to read immediately.",
        },
        {
          pt: "Com o desenvolvimento dos meios digitais, a esteganografia passou a explorar propriedades matemáticas e estruturais dos arquivos. Em vez de esconder uma mensagem fisicamente, tornou-se possível incorporá-la a dados aparentemente comuns.",
          en: "With the development of digital media, steganography began exploiting mathematical and structural properties of files. Instead of physically concealing a message, it became possible to embed it within apparently ordinary data.",
        },
      ],
    },

    {
      id: "cryptography",
      heading: {
        pt: "Esteganografia não é criptografia",
        en: "Steganography is not cryptography",
      },
      paragraphs: [
        {
          pt: "A criptografia transforma informações para impedir sua interpretação por pessoas não autorizadas, desde que os algoritmos e as chaves sejam utilizados adequadamente. A existência de uma mensagem criptografada, entretanto, pode continuar evidente.",
          en: "Cryptography transforms information to prevent unauthorized interpretation, provided that algorithms and keys are used correctly. The existence of an encrypted message, however, may remain obvious.",
        },
        {
          pt: "A esteganografia busca esconder a própria presença da comunicação. Uma imagem pode parecer normal mesmo contendo dados adicionais ou alterações deliberadas.",
          en: "Steganography seeks to conceal the presence of communication itself. An image may appear normal even while containing additional data or deliberate modifications.",
        },
        {
          pt: "Essas técnicas podem ser combinadas: uma mensagem pode ser criptografada antes de ser escondida. Porém, ocultação não garante confidencialidade, e a descoberta do método de extração pode revelar uma mensagem que não tenha sido criptografada.",
          en: "These techniques can be combined: a message may be encrypted before being hidden. However, concealment does not guarantee confidentiality, and discovering the extraction method may reveal a message that was not encrypted.",
        },
      ],
    },

    {
      id: "digital-images",
      heading: {
        pt: "Por que imagens são utilizadas?",
        en: "Why are images used?",
      },
      paragraphs: [
        {
          pt: "Imagens digitais são representadas por dados numéricos. Em uma imagem RGB de oito bits por canal, cada pixel normalmente possui três componentes: vermelho, verde e azul, com valores inteiros de 0 a 255.",
          en: "Digital images are represented by numerical data. In an RGB image with eight bits per channel, each pixel normally has three components: red, green, and blue, with integer values from 0 to 255.",
        },
        {
          pt: "Pequenas alterações nesses valores podem produzir diferenças visuais difíceis de perceber. Essa característica permite explorar parte da representação numérica para incorporar informações adicionais.",
          en: "Small changes to these values may produce visual differences that are difficult to notice. This characteristic makes it possible to use part of the numerical representation to embed additional information.",
        },
        {
          pt: "Entretanto, uma imagem visualmente semelhante à original não é necessariamente estatisticamente indistinguível. Técnicas de análise podem detectar padrões introduzidos durante a ocultação.",
          en: "However, an image that looks similar to the original is not necessarily statistically indistinguishable. Analysis techniques may detect patterns introduced during embedding.",
        },
      ],
    },

    {
      id: "lsb",
      heading: {
        pt: "LSB: modificando o bit menos significativo",
        en: "LSB: modifying the least significant bit",
      },
      paragraphs: [
        {
          pt: "LSB significa Least Significant Bit, ou bit menos significativo. Em um valor binário de oito bits, ele corresponde ao bit de menor peso, cuja alteração modifica o valor numérico em apenas uma unidade.",
          en: "LSB stands for Least Significant Bit. In an eight-bit binary value, it is the lowest-weight bit, and changing it modifies the numerical value by only one.",
        },
        {
          pt: "Considere o valor decimal 150, representado em binário por 10010110. Seu bit menos significativo é 0. Para armazenar o bit 1 nessa posição, o valor pode ser alterado para 151, representado por 10010111.",
          en: "Consider decimal value 150, represented in binary as 10010110. Its least significant bit is 0. To store the bit 1 in that position, the value can be changed to 151, represented as 10010111.",
        },
        {
          pt: "Em uma imagem RGB, podemos utilizar o LSB de cada componente de cor para armazenar bits de uma mensagem. Como a alteração máxima por canal é pequena, o resultado pode permanecer visualmente muito próximo da imagem original.",
          en: "In an RGB image, the LSB of each color component can be used to store message bits. Because the maximum change per channel is small, the result may remain visually very close to the original image.",
        },
        {
          pt: "O método LSB simples é útil para fins educacionais, mas não deve ser confundido com um mecanismo robusto de comunicação secreta. Ele pode ser detectado e é sensível a transformações realizadas sobre a imagem.",
          en: "Simple LSB embedding is useful for educational purposes but should not be confused with a robust covert communication mechanism. It can be detected and is sensitive to transformations applied to the image.",
        },
      ],
    },

    {
      id: "capacity",
      heading: {
        pt: "Quantos dados podem ser escondidos?",
        en: "How much data can be hidden?",
      },
      paragraphs: [
        {
          pt: "Se utilizarmos um bit de cada canal RGB, cada pixel poderá armazenar três bits de informação. Em uma imagem de 800 por 600 pixels, existem 480.000 pixels e 1.440.000 posições disponíveis para bits.",
          en: "If one bit from each RGB channel is used, each pixel can store three information bits. An 800-by-600 image contains 480,000 pixels and 1,440,000 available bit positions.",
        },
        {
          pt: "Dividindo esse valor por oito, obtemos uma capacidade teórica de 180.000 bytes. Na prática, parte do espaço pode ser reservada para identificar o tamanho da mensagem ou armazenar outras informações de controle.",
          en: "Dividing this value by eight gives a theoretical capacity of 180,000 bytes. In practice, some space may be reserved for identifying message length or storing other control information.",
        },
        {
          pt: "Utilizar toda a capacidade disponível não é necessariamente uma boa escolha. Quanto maior a quantidade de alterações, maior pode ser a possibilidade de detectar anomalias estatísticas.",
          en: "Using all available capacity is not necessarily a good choice. The greater the number of modifications, the greater the possibility of detecting statistical anomalies.",
        },
      ],
    },

    {
      id: "png-jpeg",
      heading: {
        pt: "PNG e JPEG: por que o formato importa?",
        en: "PNG and JPEG: why does the format matter?",
      },
      paragraphs: [
        {
          pt: "O PNG utiliza compressão sem perdas. Quando os valores dos pixels são preservados, as alterações feitas nos bits menos significativos podem ser recuperadas posteriormente.",
          en: "PNG uses lossless compression. When pixel values are preserved, modifications made to least significant bits can be recovered later.",
        },
        {
          pt: "O JPEG tradicional utiliza compressão com perdas, baseada em transformações e quantização. Por isso, salvar uma imagem modificada como JPEG pode destruir informações escondidas diretamente nos LSBs dos pixels.",
          en: "Traditional JPEG uses lossy compression based on transforms and quantization. Therefore, saving a modified image as JPEG may destroy information hidden directly in pixel LSBs.",
        },
        {
          pt: "Existem técnicas esteganográficas desenvolvidas especificamente para dados comprimidos, incluindo métodos que operam sobre coeficientes de transformações. Elas diferem da substituição direta dos bits de pixels.",
          en: "Steganographic techniques specifically designed for compressed data also exist, including methods operating on transform coefficients. They differ from direct pixel-bit substitution.",
        },
      ],
    },

    {
      id: "audio",
      heading: {
        pt: "Esteganografia em áudio",
        en: "Audio steganography",
      },
      paragraphs: [
        {
          pt: "Arquivos de áudio digital também representam informações por valores numéricos. Em áudio PCM, por exemplo, cada amostra descreve a amplitude do sinal em um determinado instante.",
          en: "Digital audio files also represent information using numerical values. In PCM audio, for example, each sample describes the signal amplitude at a particular instant.",
        },
        {
          pt: "Métodos simples podem modificar bits menos significativos das amostras. Outras abordagens exploram características perceptuais do áudio ou propriedades de representações transformadas.",
          en: "Simple methods may modify the least significant bits of samples. Other approaches exploit perceptual characteristics of audio or properties of transformed representations.",
        },
        {
          pt: "Assim como nas imagens, alterações aparentemente imperceptíveis não garantem resistência à análise. Compressão, normalização e processamento do sinal também podem comprometer a recuperação da mensagem.",
          en: "As with images, apparently imperceptible changes do not guarantee resistance to analysis. Compression, normalization, and signal processing may also compromise message recovery.",
        },
      ],
    },

    {
      id: "metadata",
      heading: {
        pt: "Metadados e dados anexados: ocultação ou apenas armazenamento?",
        en: "Metadata and appended data: concealment or simply storage?",
      },
      paragraphs: [
        {
          pt: "Arquivos podem conter metadados, comentários, campos auxiliares e estruturas que não aparecem diretamente durante sua visualização. Essas regiões podem armazenar informações adicionais sem modificar o conteúdo visual ou sonoro principal.",
          en: "Files may contain metadata, comments, auxiliary fields, and structures that are not directly displayed. These regions can store additional information without modifying the main visual or audio content.",
        },
        {
          pt: "Entretanto, inserir uma mensagem em um campo de metadados não é equivalente a escondê-la nos pixels. A informação pode ser encontrada facilmente por ferramentas que interpretam a estrutura do arquivo.",
          en: "However, inserting a message into a metadata field is not equivalent to hiding it in pixels. The information may be easily found by tools that interpret the file structure.",
        },
        {
          pt: "Também é possível encontrar arquivos com dados anexados após seu conteúdo principal. Esse comportamento exige análise do formato e não deve ser automaticamente interpretado como evidência de esteganografia sofisticada.",
          en: "Files may also contain data appended after their main content. This behavior requires format analysis and should not automatically be interpreted as evidence of sophisticated steganography.",
        },
      ],
    },

    {
      id: "steganalysis",
      heading: {
        pt: "Esteganálise: procurando o que foi escondido",
        en: "Steganalysis: searching for hidden information",
      },
      paragraphs: [
        {
          pt: "Esteganálise é o estudo de métodos para detectar ou investigar a presença de informações ocultas. Dependendo da técnica, a análise pode considerar padrões estatísticos, distribuição de valores, estruturas de arquivos e inconsistências entre dados.",
          en: "Steganalysis is the study of methods for detecting or investigating hidden information. Depending on the technique, analysis may consider statistical patterns, value distributions, file structures, and inconsistencies between data.",
        },
        {
          pt: "Uma abordagem básica consiste em examinar planos de bits da imagem. A visualização do bit menos significativo de cada canal pode revelar padrões incomuns, embora sua presença não seja prova suficiente de uma mensagem oculta.",
          en: "A basic approach is to inspect image bit planes. Visualizing the least significant bit of each channel may reveal unusual patterns, although their presence is not sufficient proof of a hidden message.",
        },
        {
          pt: "Métodos estatísticos mais avançados procuram identificar alterações incompatíveis com características esperadas do meio original. A confiabilidade da detecção depende do algoritmo, da quantidade de dados ocultos e das propriedades do arquivo analisado.",
          en: "More advanced statistical methods seek changes inconsistent with expected characteristics of the original medium. Detection reliability depends on the algorithm, the amount of hidden data, and the properties of the analyzed file.",
        },
      ],
    },

    {
      id: "tools",
      heading: {
        pt: "Ferramentas para investigação",
        en: "Tools for investigation",
      },
      paragraphs: [
        {
          pt: "Ferramentas como zsteg podem auxiliar na inspeção de padrões de bits em determinados formatos de imagem. O binwalk pode ajudar a identificar assinaturas e estruturas de dados incorporadas em arquivos.",
          en: "Tools such as zsteg can help inspect bit patterns in certain image formats. Binwalk can help identify signatures and embedded data structures within files.",
        },
        {
          pt: "Bibliotecas Python como Pillow permitem examinar pixels, canais de cor e características de imagens. Essa abordagem também facilita a construção de experimentos próprios para compreender os algoritmos.",
          en: "Python libraries such as Pillow allow inspection of pixels, color channels, and image properties. This approach also makes it easier to build experiments to understand the algorithms.",
        },
        {
          pt: "Nenhuma ferramenta identifica universalmente todas as técnicas esteganográficas. Resultados negativos não demonstram ausência de informação oculta, e resultados suspeitos precisam ser interpretados dentro de seu contexto.",
          en: "No tool universally identifies every steganographic technique. Negative results do not prove the absence of hidden information, and suspicious findings must be interpreted in context.",
        },
      ],
    },

    {
      id: "python-lab",
      heading: {
        pt: "Laboratório: escondendo uma mensagem em PNG com Python",
        en: "Lab: hiding a message in PNG with Python",
      },
      paragraphs: [
        {
          pt: "Para compreender o funcionamento do LSB, podemos construir um pequeno programa que modifica o último bit dos canais RGB de uma imagem. A mensagem será convertida em bytes UTF-8, precedida por um campo de 32 bits que informa seu tamanho e distribuída sequencialmente pelos canais.",
          en: "To understand LSB embedding, we can build a small program that modifies the last bit of an image's RGB channels. The message will be converted into UTF-8 bytes, preceded by a 32-bit field containing its length, and distributed sequentially across the channels.",
        },
        {
          pt: "A recuperação utiliza a mesma ordem de leitura. Primeiro são extraídos os 32 bits do comprimento; depois, a quantidade correspondente de bytes é reconstruída e decodificada como texto.",
          en: "Recovery uses the same reading order. First, the 32 length bits are extracted; then, the corresponding number of bytes is reconstructed and decoded as text.",
        },
        {
          pt: "Esse experimento é determinístico e não utiliza criptografia nem uma chave secreta. Seu objetivo é demonstrar o mecanismo de armazenamento, e não fornecer comunicação confidencial ou resistente à detecção.",
          en: "This experiment is deterministic and does not use encryption or a secret key. Its purpose is to demonstrate the storage mechanism, not to provide confidential or detection-resistant communication.",
        },
      ],
    },

    {
      id: "limitations",
      heading: {
        pt: "Limitações e riscos",
        en: "Limitations and risks",
      },
      paragraphs: [
        {
          pt: "A substituição sequencial de LSBs é vulnerável a modificações na imagem. Redimensionamento, conversão para formatos com perdas, filtros e certas operações de edição podem corromper os dados armazenados.",
          en: "Sequential LSB replacement is vulnerable to image modifications. Resizing, conversion to lossy formats, filters, and certain editing operations may corrupt the stored data.",
        },
        {
          pt: "Além disso, conhecer o algoritmo pode ser suficiente para recuperar uma mensagem não criptografada. A dificuldade de perceber visualmente as alterações não deve ser confundida com segurança criptográfica.",
          en: "Furthermore, knowing the algorithm may be sufficient to recover an unencrypted message. The difficulty of visually noticing changes should not be confused with cryptographic security.",
        },
        {
          pt: "Na forense digital, a presença de dados ocultos deve ser avaliada com cuidado. Um resultado estatístico incomum não demonstra, isoladamente, intenção maliciosa ou a existência de uma mensagem significativa.",
          en: "In digital forensics, the presence of hidden data should be evaluated carefully. An unusual statistical result does not, by itself, demonstrate malicious intent or the existence of a meaningful message.",
        },
      ],
    },

    {
      id: "conclusion",
      heading: {
        pt: "O invisível também deixa rastros",
        en: "The invisible also leaves traces",
      },
      paragraphs: [
        {
          pt: "A esteganografia demonstra como representações digitais podem carregar mais informações do que aparentam. Uma pequena alteração em bits de pixels pode incorporar dados sem produzir diferenças visuais evidentes.",
          en: "Steganography demonstrates how digital representations can carry more information than they appear to. A small modification to pixel bits can embed data without producing obvious visual differences.",
        },
        {
          pt: "Ao mesmo tempo, essas alterações podem produzir padrões detectáveis. Estudar tanto a ocultação quanto a esteganálise permite compreender melhor os limites entre representação digital, processamento de sinais e segurança da informação.",
          en: "At the same time, these changes can produce detectable patterns. Studying both concealment and steganalysis provides a better understanding of the boundaries between digital representation, signal processing, and information security.",
        },
      ],
    },
  ],

  references: [
    {
      title: "Information Hiding: Steganography and Watermarking—Attacks and Countermeasures",
      authors: "Neil F. Johnson, Zoran Duric & Sushil Jajodia",
      year: 2001,
      url: "https://link.springer.com/book/10.1007/978-1-4615-4375-6",
    },
    {
      title: "Information Hiding Techniques for Steganography and Digital Watermarking",
      authors: "Stefan Katzenbeisser & Fabien A. P. Petitcolas",
      year: 2000,
      url: "https://www.cl.cam.ac.uk/~fapp2/publications/",
    },
    {
      title: "Pillow Documentation",
      authors: "Pillow Contributors",
      url: "https://pillow.readthedocs.io/en/stable/",
    },
    {
      title: "zsteg",
      authors: "Michal Zalewski and contributors",
      url: "https://github.com/zed-0xff/zsteg",
    },
    {
      title: "Binwalk",
      authors: "ReFirmLabs",
      url: "https://github.com/ReFirmLabs/binwalk",
    },
  ],
};
