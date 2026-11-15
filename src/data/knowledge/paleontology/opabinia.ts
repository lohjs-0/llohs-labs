
import type { KnowledgePost } from "../../knowledge.types";

export const opabinia: KnowledgePost = {
    slug: "opabinia-five-eyes",

    title: {
        pt: "Opabinia: o animal pré-histórico com cinco olhos",
        en: "Opabinia: the prehistoric animal with five eyes",
    },

    description: {
        pt: "Cinco olhos, uma tromba com pinças e uma anatomia que desafiou a classificação dos animais. Conheça uma das criaturas mais extraordinárias do Cambriano.",
        en: "Five eyes, a claw-tipped proboscis, and an anatomy that challenged animal classification. Meet one of the Cambrian's most extraordinary creatures.",
    },

    category: "miscellaneous",
    date: "2026-11-15",
    readingMinutes: 9,

    tags: [
        "paleontology",
        "cambrian",
        "evolution",
        "fossils",
        "arthropods",
    ],

    // Salve uma imagem com licença adequada neste caminho.

    cover: {
        src: "/images/knowledge/opabinia-cover.jpg",

        alt: {
            pt: "Reconstrução de Opabinia regalis, animal do Cambriano com cinco olhos e uma probóscide.",
            en: "Reconstruction of Opabinia regalis, a Cambrian animal with five eyes and a proboscis.",
        },

        caption: {
            pt: "Opabinia regalis viveu há aproximadamente 508 milhões de anos.",
            en: "Opabinia regalis lived approximately 508 million years ago.",
        },

        credit: "Autor da imagem — licença",
    },


    sections: [
        {
            id: "introduction",

            heading: {
                pt: "Uma criatura que parece ter vindo de outro planeta",
                en: "A creature that looks like it came from another planet",
            },

            paragraphs: [
                {
                    pt: "Imagine um oceano de aproximadamente 508 milhões de anos atrás. Não existem baleias, tubarões modernos ou recifes de coral como os conhecemos. A vida animal já apresenta uma diversidade impressionante, mas muitos dos organismos possuem formas que seriam difíceis de reconhecer atualmente.",
                    en: "Imagine an ocean approximately 508 million years ago. There are no whales, modern sharks, or coral reefs like those we know today. Animal life already displays remarkable diversity, but many organisms have body forms that would be difficult to recognize today.",
                },

                {
                    pt: "Entre esses animais estava Opabinia regalis, uma pequena criatura marinha com cinco olhos, uma estrutura frontal flexível terminada em pinças, um corpo segmentado e estruturas laterais utilizadas provavelmente na natação.",
                    en: "Among these animals was Opabinia regalis, a small marine creature with five eyes, a flexible frontal appendage ending in claws, a segmented body, and lateral structures probably used for swimming.",
                },

                {
                    pt: "Apesar de sua aparência incomum, Opabinia não é uma criatura fictícia. Sua existência é documentada por fósseis encontrados no Burgess Shale, um dos depósitos paleontológicos mais importantes para compreender a evolução dos primeiros animais complexos.",
                    en: "Despite its unusual appearance, Opabinia is not a fictional creature. Its existence is documented by fossils found in the Burgess Shale, one of the most important paleontological deposits for understanding the evolution of early complex animals.",
                },
            ],
        },

        {
            id: "discovery",

            heading: {
                pt: "A descoberta no Burgess Shale",
                en: "The discovery in the Burgess Shale",
            },

            paragraphs: [
                {
                    pt: "O Burgess Shale está localizado nas Montanhas Rochosas canadenses, na Colúmbia Britânica. Seus depósitos preservaram organismos marinhos do Cambriano com um nível extraordinário de detalhe, incluindo estruturas corporais que raramente sobrevivem ao processo de fossilização.",
                    en: "The Burgess Shale is located in the Canadian Rocky Mountains of British Columbia. Its deposits preserved Cambrian marine organisms in extraordinary detail, including body structures that rarely survive fossilization.",
                },

                {
                    pt: "Opabinia regalis foi descrita inicialmente por Charles Doolittle Walcott em 1912. Décadas depois, o paleontólogo Harry Whittington realizou uma investigação detalhada de seus fósseis e publicou uma reconstrução anatômica em 1975.",
                    en: "Opabinia regalis was first described by Charles Doolittle Walcott in 1912. Decades later, paleontologist Harry Whittington conducted a detailed investigation of its fossils and published an anatomical reconstruction in 1975.",
                },

                {
                    pt: "A reconstrução revelou uma combinação tão incomum de características que se tornou um dos exemplos mais conhecidos da diversidade anatômica encontrada nos mares cambrianos. Segundo relatos históricos, uma apresentação preliminar do animal em 1972 chegou a provocar risadas entre pesquisadores.",
                    en: "The reconstruction revealed such an unusual combination of features that it became one of the best-known examples of anatomical diversity in Cambrian seas. According to historical accounts, an early presentation of the animal in 1972 even provoked laughter among researchers.",
                },
            ],
        },

        {
            id: "anatomy",

            heading: {
                pt: "Cinco olhos, uma probóscide e um corpo segmentado",
                en: "Five eyes, a proboscis, and a segmented body",
            },

            paragraphs: [
                {
                    pt: "A característica mais famosa de Opabinia é a presença de cinco olhos. Quatro estavam posicionados em pequenas estruturas elevadas, enquanto um quinto ocupava uma posição mais central e dorsal na cabeça.",
                    en: "Opabinia's most famous feature is its five eyes. Four were positioned on small raised structures, while a fifth occupied a more central and dorsal position on the head.",
                },

                {
                    pt: "Na parte frontal havia uma probóscide alongada, flexível e segmentada em anéis. Sua extremidade apresentava duas estruturas opostas semelhantes a garras, equipadas com pequenos espinhos.",
                    en: "At the front was an elongated, flexible, ringed proboscis. Its tip featured two opposing claw-like structures equipped with small spines.",
                },

                {
                    pt: "O corpo principal possuía aproximadamente quinze segmentos, com lobos laterais associados a estruturas interpretadas como brânquias. Na região posterior, um conjunto de abas formava uma espécie de leque caudal.",
                    en: "The main body had approximately fifteen segments, with lateral lobes associated with structures interpreted as gills. At the rear, a set of flaps formed a tail fan.",
                },

                {
                    pt: "O comprimento corporal geralmente variava de cerca de 4,3 a 7 centímetros, sem considerar a probóscide. Alguns exemplares alcançavam aproximadamente 10 centímetros de comprimento total.",
                    en: "Body length generally ranged from about 4.3 to 7 centimeters, excluding the proboscis. Some specimens reached approximately 10 centimeters in total length.",
                },
            ],
        },

        {
            id: "feeding",

            heading: {
                pt: "Como Opabinia se alimentava?",
                en: "How did Opabinia feed?",
            },

            paragraphs: [
                {
                    pt: "Uma das hipóteses mais aceitas é que Opabinia utilizava a extremidade de sua probóscide para capturar pequenos organismos ou manipular alimento próximo ao fundo marinho.",
                    en: "One widely supported hypothesis is that Opabinia used the tip of its proboscis to capture small organisms or manipulate food near the seafloor.",
                },

                {
                    pt: "Sua boca estava localizada na parte inferior da cabeça e orientada para trás. A probóscide provavelmente transportava o alimento até essa abertura, funcionando como uma estrutura especializada de captura.",
                    en: "Its mouth was located underneath the head and faced backward. The proboscis probably transported food toward this opening, functioning as a specialized feeding structure.",
                },

                {
                    pt: "A presença de garras com espinhos, olhos relativamente grandes e estruturas digestivas desenvolvidas sustenta a interpretação de que Opabinia poderia atuar como predadora. Entretanto, os detalhes exatos de seu comportamento não podem ser observados diretamente no registro fóssil.",
                    en: "The presence of spiny claws, relatively large eyes, and developed digestive structures supports the interpretation that Opabinia may have been a predator. However, the exact details of its behavior cannot be observed directly in the fossil record.",
                },
            ],
        },

        {
            id: "locomotion",

            heading: {
                pt: "Um nadador dos mares cambrianos",
                en: "A swimmer of the Cambrian seas",
            },

            paragraphs: [
                {
                    pt: "Os lobos laterais de Opabinia provavelmente participavam de sua locomoção. Movimentos coordenados dessas estruturas poderiam produzir ondas ao longo do corpo, permitindo que o animal se deslocasse na água.",
                    en: "Opabinia's lateral lobes probably contributed to locomotion. Coordinated movements of these structures could generate waves along the body, allowing the animal to move through water.",
                },

                {
                    pt: "O leque caudal poderia ajudar na estabilidade e no direcionamento durante a natação. Essa reconstrução se baseia na anatomia preservada e em comparações biomecânicas, e não em observações de um animal vivo.",
                    en: "The tail fan may have helped with stability and steering during swimming. This reconstruction is based on preserved anatomy and biomechanical comparisons rather than observations of a living animal.",
                },
            ],
        },

        {
            id: "evolution",

            heading: {
                pt: "O que Opabinia revela sobre a evolução?",
                en: "What does Opabinia reveal about evolution?",
            },

            paragraphs: [
                {
                    pt: "Opabinia é especialmente importante para o estudo da origem dos artrópodes, grupo que atualmente inclui insetos, crustáceos, aracnídeos e muitos outros animais.",
                    en: "Opabinia is especially important for studying the origin of arthropods, the group that today includes insects, crustaceans, arachnids, and many other animals.",
                },

                {
                    pt: "Ela é geralmente interpretada como parte da linhagem-tronco dos artrópodes. Isso significa que pertence a uma ramificação extinta relacionada à história evolutiva do grupo, mas não apresenta todas as características dos artrópodes modernos.",
                    en: "It is generally interpreted as part of the arthropod stem group. This means it belongs to an extinct branch related to the group's evolutionary history but does not possess all the characteristics of modern arthropods.",
                },

                {
                    pt: "O estudo de seus segmentos, lobos laterais e estruturas frontais ajuda os pesquisadores a investigar a origem de características corporais que mais tarde se tornaram fundamentais na evolução dos artrópodes.",
                    en: "The study of its segments, lateral lobes, and frontal structures helps researchers investigate the origins of body features that later became fundamental in arthropod evolution.",
                },

                {
                    pt: "Seu caso também demonstra por que a evolução não deve ser imaginada como uma sequência linear de organismos cada vez mais modernos. A história da vida é uma árvore ramificada, repleta de linhagens extintas e experimentações evolutivas.",
                    en: "Its case also demonstrates why evolution should not be imagined as a linear sequence of increasingly modern organisms. The history of life is a branching tree filled with extinct lineages and evolutionary experimentation.",
                },
            ],
        },

        {
            id: "new-discoveries",

            heading: {
                pt: "Opabinia não estava tão sozinha quanto imaginávamos",
                en: "Opabinia was not as alone as we once thought",
            },

            paragraphs: [
                {
                    pt: "Durante mais de um século, Opabinia foi considerada um organismo excepcionalmente isolado. Sua combinação de características parecia não ter equivalentes próximos conhecidos no registro fóssil.",
                    en: "For more than a century, Opabinia was considered an exceptionally isolated organism. Its combination of features appeared to have no known close equivalents in the fossil record.",
                },

                {
                    pt: "Em 2022, pesquisadores apresentaram evidências de que Utaurora comosa, um animal fóssil anteriormente interpretado de outra maneira, também pertencia ao grupo dos opabiniídeos.",
                    en: "In 2022, researchers presented evidence that Utaurora comosa, a fossil animal previously interpreted differently, also belonged to the opabiniid group.",
                },

                {
                    pt: "A descoberta reforça a ideia de que a diversidade desses organismos era maior do que os poucos fósseis conhecidos inicialmente sugeriam. Ela também mostra como novas análises podem modificar interpretações de espécimes descobertos décadas antes.",
                    en: "The discovery reinforces the idea that the diversity of these organisms was greater than the few initially known fossils suggested. It also shows how new analyses can change interpretations of specimens discovered decades earlier.",
                },
            ],
        },

        {
            id: "conclusion",

            heading: {
                pt: "Uma pequena criatura, uma enorme descoberta",
                en: "A small creature, an enormous discovery",
            },

            paragraphs: [
                {
                    pt: "Opabinia não impressiona pelo tamanho, mas pela quantidade de perguntas que sua anatomia levanta. Como seus olhos funcionavam? Quão eficiente era sua probóscide? Como exatamente seus lobos se movimentavam? E quantas outras formas semelhantes ainda aguardam descoberta?",
                    en: "Opabinia is impressive not because of its size, but because of the questions its anatomy raises. How did its eyes function? How efficient was its proboscis? How exactly did its lobes move? And how many similar forms remain undiscovered?",
                },

                {
                    pt: "Mais de meio bilhão de anos depois, esse pequeno animal continua contribuindo para a compreensão de como a diversidade da vida se desenvolveu na Terra.",
                    en: "More than half a billion years later, this small animal continues to contribute to our understanding of how life's diversity developed on Earth.",
                },
            ],
        },
    ],

    references: [
        {
            title: "Opabinia regalis — The Burgess Shale",
            authors: "Royal Ontario Museum",
            url: "https://burgess-shale.rom.on.ca/fossils/opabinia-regalis/",
        },
        {
            title: "The Burgess Shale",
            authors: "Smithsonian Ocean",
            url: "https://ocean.si.edu/through-time/burgess-shale",
        },
        {
            title:
                "The morphology of Opabinia regalis and the reconstruction of the arthropod stem-group",
            authors: "Graham E. Budd",
            year: 1996,
            url: "https://doi.org/10.1111/j.1502-3931.1996.tb01831.x",
        },
        {
            title: "The origin and evolution of arthropods",
            authors: "Graham E. Budd & Maximilian J. Telford",
            year: 2009,
            url: "https://doi.org/10.1038/nature07890",
        },
        {
            title:
                "A century later, researchers describe the second opabiniid",
            authors: "Harvard University",
            year: 2022,
            url: "https://www.oeb.harvard.edu/news/century-later-international-team-researchers-describe-second-opabiniid-ever-discovered",
        },
    ],
};
