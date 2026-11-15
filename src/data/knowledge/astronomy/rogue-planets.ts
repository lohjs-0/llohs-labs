
import type { KnowledgePost } from "../../knowledge.types";

export const roguePlanets: KnowledgePost = {
  slug: "rogue-planets",

  title: {
    pt: "Planetas errantes: mundos que vagam pela galáxia sem uma estrela",
    en: "Rogue planets: worlds wandering the galaxy without a star",
  },

  description: {
    pt: "Existem mundos que não orbitam nenhuma estrela. Descubra como planetas errantes se formam, como são detectados e por que alguns poderiam preservar água líquida mesmo na escuridão interestelar.",
    en: "Some worlds orbit no star at all. Discover how rogue planets form, how they are detected, and why some might preserve liquid water even in interstellar darkness.",
  },

  category: "science",
  date: "2026-11-15",
  readingMinutes: 11,

  tags: [
    "astronomy",
    "astrophysics",
    "rogue-planets",
    "exoplanets",
    "microlensing",
    "planetary-science",
  ],

  cover: {
    src: "/images/knowledge/rogue-planets-cover.jpg",

    alt: {
      pt: "Ilustração artística de um planeta errante gelado viajando pelo espaço interestelar.",
      en: "Artist's illustration of an icy rogue planet traveling through interstellar space.",
    },

    caption: {
      pt: "Concepção artística de um planeta errante isolado. A imagem é ilustrativa e não representa uma fotografia direta de um planeta específico.",
      en: "Artist's concept of an isolated rogue planet. This illustration is not a direct photograph of a specific planet.",
    },

    credit: "NASA's Goddard Space Flight Center",

    sourceUrl:
      "https://www.nasa.gov/missions/roman-space-telescope/new-study-reveals-nasas-roman-could-find-400-earth-mass-rogue-planets/",
  },

  sections: [
    {
      id: "introduction",

      heading: {
        pt: "Mundos sem um Sol",
        en: "Worlds without a sun",
      },

      paragraphs: [
        {
          pt: "Quando imaginamos um planeta, normalmente pensamos em um corpo celeste orbitando uma estrela. A Terra gira ao redor do Sol, assim como os outros planetas do Sistema Solar. Entretanto, a galáxia também abriga objetos de massa planetária que não estão gravitacionalmente ligados a nenhuma estrela.",
          en: "When we imagine a planet, we usually think of a celestial body orbiting a star. Earth revolves around the Sun, as do the other planets in our Solar System. However, the galaxy also contains planetary-mass objects that are not gravitationally bound to any star.",
        },
        {
          pt: "Esses objetos são chamados de planetas errantes, planetas órfãos ou planetas de flutuação livre. Em vez de seguir uma órbita ao redor de uma estrela hospedeira, deslocam-se pelo espaço sob a influência do campo gravitacional da galáxia e de encontros com outros corpos.",
          en: "These objects are called rogue planets, orphan planets, or free-floating planets. Instead of following an orbit around a host star, they travel through space under the influence of the galaxy's gravitational field and encounters with other bodies.",
        },
        {
          pt: "Sua existência desafia a imagem tradicional dos sistemas planetários e levanta questões sobre a formação, a estabilidade e a evolução dos mundos espalhados pelo Universo.",
          en: "Their existence challenges the traditional picture of planetary systems and raises questions about the formation, stability, and evolution of worlds throughout the Universe.",
        },
      ],
    },

    {
      id: "formation",

      heading: {
        pt: "Como um planeta pode ficar sem estrela?",
        en: "How can a planet end up without a star?",
      },

      paragraphs: [
        {
          pt: "Uma das explicações envolve a expulsão gravitacional. Durante a formação de um sistema planetário, diversos corpos podem interagir de maneira intensa, especialmente quando planetas gigantes estão presentes.",
          en: "One explanation involves gravitational ejection. During the formation of a planetary system, multiple bodies can interact intensely, especially when giant planets are present.",
        },
        {
          pt: "Encontros gravitacionais podem transferir energia orbital entre os planetas. Em determinadas condições, um corpo recebe energia suficiente para escapar da influência gravitacional dominante de sua estrela.",
          en: "Gravitational encounters can transfer orbital energy between planets. Under certain conditions, a body gains enough energy to escape the dominant gravitational influence of its star.",
        },
        {
          pt: "Esse processo pode ocorrer em sistemas jovens e dinamicamente instáveis, mas também pode acontecer mais tarde, após perturbações provocadas por estrelas que passam nas proximidades.",
          en: "This process can occur in young, dynamically unstable systems, but it can also happen later following disturbances caused by nearby passing stars.",
        },
        {
          pt: "Depois de escapar, o planeta não deixa de sentir a gravidade de outros objetos. Ele simplesmente deixa de possuir uma estrela hospedeira à qual esteja ligado em uma órbita estável.",
          en: "After escaping, the planet does not stop experiencing the gravity of other objects. It simply no longer has a host star to which it is bound in a stable orbit.",
        },
      ],
    },

    {
      id: "isolated-formation",

      heading: {
        pt: "Alguns podem nascer isolados",
        en: "Some may be born in isolation",
      },

      paragraphs: [
        {
          pt: "Nem todos os objetos de massa planetária isolados precisam ter sido expulsos de um sistema. Alguns podem surgir diretamente do colapso gravitacional de pequenas regiões de nuvens de gás e poeira, por mecanismos semelhantes aos envolvidos na formação de estrelas.",
          en: "Not all isolated planetary-mass objects need to have been ejected from a system. Some may arise directly from the gravitational collapse of small regions within clouds of gas and dust, through mechanisms similar to those involved in star formation.",
        },
        {
          pt: "Isso cria uma dificuldade de classificação. Um objeto com massa comparável à de um planeta pode ter se formado como uma estrela de massa extremamente baixa, sem jamais ter orbitado outra estrela.",
          en: "This creates a classification challenge. An object with a mass comparable to that of a planet may have formed like an extremely low-mass star, without ever orbiting another star.",
        },
        {
          pt: "Por esse motivo, astrônomos frequentemente utilizam a expressão 'objetos isolados de massa planetária'. A distinção entre planeta, objeto subestelar e anã marrom pode depender tanto da massa quanto do mecanismo de formação considerado.",
          en: "For this reason, astronomers frequently use the term 'isolated planetary-mass objects'. The distinction between a planet, a substellar object, and a brown dwarf may depend on both mass and the formation mechanism being considered.",
        },
        {
          pt: "Compreender quantos objetos se formam por cada processo é uma das questões importantes da astronomia planetária contemporânea.",
          en: "Understanding how many objects form through each process is an important question in contemporary planetary astronomy.",
        },
      ],
    },

    {
      id: "darkness",

      heading: {
        pt: "Como seria viver em um mundo sem nascer do Sol?",
        en: "What would a world without sunrise be like?",
      },

      paragraphs: [
        {
          pt: "Um planeta errante não recebe iluminação intensa e contínua de uma estrela próxima. Para um observador hipotético em sua superfície, não existiria o ciclo convencional de nascer e pôr do Sol.",
          en: "A rogue planet receives no intense, continuous illumination from a nearby star. For a hypothetical observer on its surface, there would be no conventional cycle of sunrise and sunset.",
        },
        {
          pt: "Isso não significa necessariamente escuridão absoluta. Estrelas distantes ainda poderiam ser visíveis, dependendo das condições atmosféricas, e o próprio planeta poderia emitir radiação térmica, principalmente no infravermelho.",
          en: "This does not necessarily mean absolute darkness. Distant stars could still be visible, depending on atmospheric conditions, and the planet itself could emit thermal radiation, primarily in the infrared.",
        },
        {
          pt: "A temperatura de sua superfície dependeria de fatores como massa, composição, idade, atmosfera e quantidade de calor interno. Mundos rochosos sem isolamento térmico eficiente tenderiam a apresentar superfícies extremamente frias.",
          en: "Its surface temperature would depend on factors such as mass, composition, age, atmosphere, and internal heat. Rocky worlds without effective thermal insulation would tend to have extremely cold surfaces.",
        },
        {
          pt: "Gigantes gasosos jovens, por outro lado, podem permanecer relativamente luminosos no infravermelho durante parte de sua evolução, devido ao calor residual de sua formação.",
          en: "Young gas giants, on the other hand, can remain relatively bright in the infrared during part of their evolution because of residual heat from their formation.",
        },
      ],
    },

    {
      id: "detection",

      heading: {
        pt: "Como detectar algo que quase não emite luz?",
        en: "How do we detect something that barely emits light?",
      },

      paragraphs: [
        {
          pt: "A ausência de uma estrela hospedeira torna a detecção desses mundos especialmente difícil. Métodos comuns de descoberta de exoplanetas, como a observação de trânsitos periódicos diante de uma estrela, não podem ser aplicados da mesma maneira.",
          en: "The absence of a host star makes detecting these worlds especially difficult. Common exoplanet discovery methods, such as observing periodic transits in front of a star, cannot be applied in the same way.",
        },
        {
          pt: "Uma técnica importante é a microlente gravitacional. Quando um objeto passa quase alinhado com uma estrela mais distante, sua gravidade pode desviar e ampliar temporariamente a luz dessa estrela.",
          en: "An important technique is gravitational microlensing. When an object passes nearly in alignment with a more distant star, its gravity can temporarily bend and magnify the star's light.",
        },
        {
          pt: "Mesmo que o objeto intermediário seja escuro demais para ser observado diretamente, a alteração no brilho da estrela de fundo pode revelar sua presença.",
          en: "Even if the intervening object is too dark to observe directly, the change in the background star's brightness can reveal its presence.",
        },
        {
          pt: "Para objetos de massa planetária, esses eventos podem durar de algumas horas a poucos dias. A interpretação exige modelos cuidadosos, pois o evento normalmente não se repete.",
          en: "For planetary-mass objects, these events can last from a few hours to a few days. Interpretation requires careful modeling because the event generally does not repeat.",
        },
      ],
    },

    {
      id: "direct-imaging",

      heading: {
        pt: "Fotografando mundos isolados",
        en: "Imaging isolated worlds",
      },

      paragraphs: [
        {
          pt: "Alguns objetos isolados de massa planetária podem ser detectados diretamente, especialmente quando são jovens e ainda conservam parte do calor de sua formação.",
          en: "Some isolated planetary-mass objects can be detected directly, especially when they are young and still retain some of the heat from their formation.",
        },
        {
          pt: "Telescópios sensíveis à radiação infravermelha conseguem identificar fontes relativamente frias que seriam difíceis de observar apenas em luz visível.",
          en: "Telescopes sensitive to infrared radiation can identify relatively cool sources that would be difficult to observe using visible light alone.",
        },
        {
          pt: "A análise espectral permite investigar características atmosféricas, temperaturas e propriedades físicas. Entretanto, determinar massas e idades com precisão pode ser difícil, pois essas estimativas frequentemente dependem de modelos de evolução térmica.",
          en: "Spectral analysis allows researchers to investigate atmospheric characteristics, temperatures, and physical properties. However, determining masses and ages precisely can be difficult because these estimates often depend on thermal evolution models.",
        },
        {
          pt: "A observação direta e a microlente gravitacional são técnicas complementares: cada uma revela populações diferentes de objetos isolados.",
          en: "Direct imaging and gravitational microlensing are complementary techniques: each reveals different populations of isolated objects.",
        },
      ],
    },

    {
      id: "population",

      heading: {
        pt: "Quantos planetas errantes existem?",
        en: "How many rogue planets exist?",
      },

      paragraphs: [
        {
          pt: "Ainda não conhecemos a quantidade exata de planetas errantes na Via Láctea. A dificuldade de detectá-los faz com que as estimativas dependam fortemente dos métodos observacionais e dos modelos utilizados.",
          en: "We still do not know the exact number of rogue planets in the Milky Way. Their detection difficulty means estimates depend strongly on observational methods and the models used.",
        },
        {
          pt: "Um estudo divulgado em 2023, baseado em observações de microlentes gravitacionais, sugeriu que objetos errantes de massa planetária poderiam ser extremamente numerosos, possivelmente superando a quantidade de estrelas da galáxia.",
          en: "A study reported in 2023, based on gravitational microlensing observations, suggested that free-floating planetary-mass objects could be extremely numerous, possibly outnumbering the galaxy's stars.",
        },
        {
          pt: "Os resultados apontaram para uma população potencial de trilhões de objetos, mas essa ordem de grandeza ainda possui incertezas consideráveis. Não se trata de uma contagem direta de todos os planetas errantes.",
          en: "The results pointed to a potential population of trillions of objects, but this order of magnitude still carries considerable uncertainties. It is not a direct count of all rogue planets.",
        },
        {
          pt: "Pesquisas futuras poderão restringir melhor essas estimativas e ajudar a determinar como a abundância varia com a massa dos objetos.",
          en: "Future surveys may better constrain these estimates and help determine how abundance varies with object mass.",
        },
      ],
    },

    {
      id: "internal-heat",

      heading: {
        pt: "O calor que vem de dentro",
        en: "Heat from within",
      },

      paragraphs: [
        {
          pt: "Mesmo sem receber energia significativa de uma estrela, um planeta pode possuir fontes internas de calor. Entre elas estão o decaimento radioativo de elementos presentes nas rochas e a energia térmica remanescente de sua formação.",
          en: "Even without receiving significant energy from a star, a planet may possess internal heat sources. These include radioactive decay of elements within rocks and residual thermal energy from its formation.",
        },
        {
          pt: "Em determinadas circunstâncias, interações gravitacionais com satélites naturais também poderiam produzir aquecimento por marés, embora sua intensidade e duração dependam da configuração orbital.",
          en: "Under certain circumstances, gravitational interactions with natural satellites could also produce tidal heating, although its intensity and duration depend on the orbital configuration.",
        },
        {
          pt: "O desafio é conservar essa energia. Sem uma atmosfera isolante ou camadas espessas de gelo, a superfície de um planeta isolado tende a perder calor para o espaço.",
          en: "The challenge is retaining that energy. Without an insulating atmosphere or thick ice layers, the surface of an isolated planet tends to lose heat to space.",
        },
      ],
    },

    {
      id: "hidden-oceans",

      heading: {
        pt: "Oceanos escondidos sob quilômetros de gelo",
        en: "Oceans hidden beneath kilometers of ice",
      },

      paragraphs: [
        {
          pt: "Uma possibilidade teórica é que determinados planetas errantes rochosos preservem água líquida abaixo de uma crosta espessa de gelo. Nesse cenário, o gelo funcionaria como isolamento térmico, reduzindo a perda de calor proveniente do interior.",
          en: "One theoretical possibility is that certain rocky rogue planets preserve liquid water beneath a thick ice crust. In this scenario, the ice would act as thermal insulation, reducing the loss of heat from the interior.",
        },
        {
          pt: "Modelos publicados em 2011 investigaram as condições necessárias para que planetas isolados mantivessem oceanos subterrâneos utilizando apenas fontes internas de energia.",
          en: "Models published in 2011 investigated the conditions required for isolated planets to maintain subsurface oceans using only internal energy sources.",
        },
        {
          pt: "A viabilidade depende de fatores como massa planetária, disponibilidade de água, produção de calor interno e espessura da camada congelada.",
          en: "Feasibility depends on factors such as planetary mass, water availability, internal heat production, and the thickness of the frozen layer.",
        },
        {
          pt: "Até o momento, não existe confirmação observacional de um oceano subterrâneo em um planeta errante. Trata-se de uma possibilidade prevista por modelos físicos, não de uma descoberta estabelecida.",
          en: "So far, there is no observational confirmation of a subsurface ocean on a rogue planet. This is a possibility predicted by physical models, not an established discovery.",
        },
      ],
    },

    {
      id: "hydrogen-atmosphere",

      heading: {
        pt: "Uma atmosfera capaz de manter um planeta aquecido",
        en: "An atmosphere capable of keeping a planet warm",
      },

      paragraphs: [
        {
          pt: "Em 1999, o cientista David J. Stevenson investigou um cenário ainda mais surpreendente: planetas isolados com atmosferas muito espessas e ricas em hidrogênio molecular.",
          en: "In 1999, scientist David J. Stevenson investigated an even more surprising scenario: isolated planets with extremely thick atmospheres rich in molecular hydrogen.",
        },
        {
          pt: "Sob pressões elevadas, o hidrogênio pode absorver radiação infravermelha por processos associados a colisões moleculares. Isso permitiria reduzir a perda de calor interno e, em certas condições, manter temperaturas compatíveis com água líquida.",
          en: "Under high pressures, hydrogen can absorb infrared radiation through processes associated with molecular collisions. This could reduce internal heat loss and, under certain conditions, maintain temperatures compatible with liquid water.",
        },
        {
          pt: "O modelo sugere que alguns mundos poderiam sustentar condições relativamente quentes abaixo de atmosferas densas, mesmo quando suas temperaturas efetivas observadas do espaço fossem extremamente baixas.",
          en: "The model suggests that some worlds could sustain relatively warm conditions beneath dense atmospheres, even when their effective temperatures observed from space were extremely low.",
        },
        {
          pt: "Entretanto, a existência de planetas errantes com essas características ainda não foi demonstrada. A estabilidade da atmosfera e as condições de formação permanecem questões fundamentais.",
          en: "However, the existence of rogue planets with these characteristics has not been demonstrated. Atmospheric stability and formation conditions remain fundamental questions.",
        },
      ],
    },

    {
      id: "habitability",

      heading: {
        pt: "A vida poderia existir sem uma estrela?",
        en: "Could life exist without a star?",
      },

      paragraphs: [
        {
          pt: "Na Terra, a maior parte dos ecossistemas depende direta ou indiretamente da energia solar. Entretanto, alguns organismos obtêm energia por reações químicas, como ocorre em ecossistemas associados a fontes hidrotermais no fundo dos oceanos.",
          en: "On Earth, most ecosystems depend directly or indirectly on solar energy. However, some organisms obtain energy through chemical reactions, as occurs in ecosystems associated with hydrothermal vents on the ocean floor.",
        },
        {
          pt: "Isso demonstra que a luz solar não é uma exigência universal para todos os metabolismos conhecidos. Em princípio, ambientes subterrâneos com água líquida e fontes químicas de energia poderiam oferecer condições relevantes para a habitabilidade.",
          en: "This demonstrates that sunlight is not a universal requirement for all known metabolisms. In principle, subsurface environments with liquid water and chemical energy sources could offer conditions relevant to habitability.",
        },
        {
          pt: "Contudo, possuir água líquida não significa necessariamente possuir vida. Também seriam necessárias condições químicas, disponibilidade de nutrientes e estabilidade ambiental adequadas.",
          en: "However, possessing liquid water does not necessarily mean possessing life. Suitable chemical conditions, nutrient availability, and environmental stability would also be necessary.",
        },
        {
          pt: "Não há evidências de vida em planetas errantes. A hipótese permanece especulativa, embora seja cientificamente interessante para ampliar o estudo da habitabilidade além das zonas habitáveis tradicionais.",
          en: "There is no evidence of life on rogue planets. The hypothesis remains speculative, although it is scientifically interesting for expanding the study of habitability beyond traditional habitable zones.",
        },
      ],
    },

    {
      id: "roman-telescope",

      heading: {
        pt: "A próxima geração de descobertas",
        en: "The next generation of discoveries",
      },

      paragraphs: [
        {
          pt: "O Telescópio Espacial Nancy Grace Roman, da NASA, foi projetado para realizar levantamentos de grandes regiões do céu com elevada sensibilidade. Entre seus objetivos científicos está a investigação de planetas por microlente gravitacional.",
          en: "NASA's Nancy Grace Roman Space Telescope was designed to survey large regions of the sky with high sensitivity. One of its scientific goals is to investigate planets through gravitational microlensing.",
        },
        {
          pt: "Sua capacidade de acompanhar o brilho de milhões de estrelas poderá revelar eventos raros provocados por objetos de massa planetária que não orbitam estrelas.",
          en: "Its ability to monitor the brightness of millions of stars could reveal rare events caused by planetary-mass objects that do not orbit stars.",
        },
        {
          pt: "Estudos de previsão sugerem que a missão poderá identificar centenas de candidatos a planetas errantes, incluindo objetos com massas próximas à da Terra.",
          en: "Forecast studies suggest the mission could identify hundreds of rogue planet candidates, including objects with masses close to Earth's.",
        },
        {
          pt: "Essas observações ajudarão a investigar a distribuição de massas dos objetos isolados e a testar modelos de formação e expulsão planetária.",
          en: "These observations will help investigate the mass distribution of isolated objects and test models of planetary formation and ejection.",
        },
      ],
    },

    {
      id: "conclusion",

      heading: {
        pt: "A galáxia pode estar cheia de mundos invisíveis",
        en: "The galaxy may be filled with invisible worlds",
      },

      paragraphs: [
        {
          pt: "Planetas errantes revelam que a formação planetária não produz apenas sistemas organizados ao redor de estrelas. Interações gravitacionais podem transformar mundos inteiros em viajantes interestelares.",
          en: "Rogue planets reveal that planetary formation does not produce only organized systems around stars. Gravitational interactions can turn entire worlds into interstellar travelers.",
        },
        {
          pt: "Alguns desses objetos podem conservar atmosferas, calor interno e, teoricamente, reservatórios de água líquida protegidos da escuridão do espaço.",
          en: "Some of these objects may retain atmospheres, internal heat, and, theoretically, reservoirs of liquid water protected from the darkness of space.",
        },
        {
          pt: "Ainda desconhecemos quantos existem, quais são suas propriedades mais comuns e até que ponto podem preservar ambientes potencialmente habitáveis.",
          en: "We still do not know how many exist, what their most common properties are, or to what extent they can preserve potentially habitable environments.",
        },
        {
          pt: "Estudar esses mundos é investigar uma população de objetos que, apesar de quase invisível, pode representar uma parcela significativa dos corpos planetários da Via Láctea.",
          en: "Studying these worlds means investigating a population of objects that, despite being nearly invisible, may represent a significant fraction of the Milky Way's planetary bodies.",
        },
      ],
    },
  ],

  references: [
    {
      title: "Unveiling Rogue Planets With NASA's Roman Space Telescope",
      authors: "NASA",
      year: 2020,
      url: "https://www.nasa.gov/universe/unveiling-rogue-planets-with-nasas-roman-space-telescope/",
    },
    {
      title: "New Study Reveals NASA's Roman Could Find 400 Earth-Mass Rogue Planets",
      authors: "NASA Goddard Space Flight Center",
      year: 2023,
      url: "https://www.nasa.gov/missions/roman-space-telescope/new-study-reveals-nasas-roman-could-find-400-earth-mass-rogue-planets/",
    },
    {
      title: "Galactic Bulge Time-Domain Survey",
      authors: "NASA Science",
      url: "https://science.nasa.gov/mission/roman-space-telescope/galactic-bulge-time-domain-survey/",
    },
    {
      title: "Life-sustaining planets in interstellar space?",
      authors: "Stevenson, D. J.",
      year: 1999,
      url: "https://doi.org/10.1038/21811",
    },
    {
      title: "The Steppenwolf: A Proposal for a Habitable Planet in Interstellar Space",
      authors: "Abbot, D. S. & Switzer, E. R.",
      year: 2011,
      url: "https://doi.org/10.1088/2041-8205/735/2/L27",
    },
    {
      title: "Is Life Possible on Rogue Planets and Moons?",
      authors: "The Planetary Society",
      year: 2022,
      url: "https://www.planetary.org/articles/is-life-possible-on-worlds-without-stars",
    },
  ],
};
