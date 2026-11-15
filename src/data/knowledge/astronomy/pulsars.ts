
import type { KnowledgePost } from "../../knowledge.types";

export const pulsars: KnowledgePost = {
  slug: "pulsars-cosmic-clocks",

  title: {
    pt: "Pulsares: estrelas mortas que funcionam como relógios cósmicos",
    en: "Pulsars: dead stars that act as cosmic clocks",
  },

  description: {
    pt: "Estrelas de nêutrons capazes de emitir pulsos de radiação com precisão extraordinária. Descubra sua formação, a história de Jocelyn Bell Burnell e como esses objetos podem ajudar na navegação espacial.",
    en: "Neutron stars capable of emitting extraordinarily precise radiation pulses. Discover how they form, Jocelyn Bell Burnell's discovery, and how these objects could support space navigation.",
  },

  category: "science",
  date: "2026-11-15",
  readingMinutes: 11,

  tags: [
    "astronomy",
    "astrophysics",
    "pulsars",
    "neutron-stars",
    "supernovae",
    "space-navigation",
  ],

  cover: {
    src: "/images/knowledge/pulsars-cover.jpg",

    alt: {
      pt: "Imagem composta da Nebulosa do Caranguejo, que abriga um pulsar em seu centro.",
      en: "Composite image of the Crab Nebula, which contains a pulsar at its center.",
    },

    caption: {
      pt: "A Nebulosa do Caranguejo abriga uma estrela de nêutrons que gira aproximadamente 30 vezes por segundo. Imagem composta com dados dos telescópios Chandra, Hubble e Spitzer.",
      en: "The Crab Nebula contains a neutron star rotating approximately 30 times per second. Composite image using data from the Chandra, Hubble, and Spitzer telescopes.",
    },

    credit:
      "X-ray: NASA/CXC/SAO; Optical: NASA/STScI; Infrared: NASA/JPL-Caltech",

    sourceUrl:
      "https://science.nasa.gov/image-detail/a-new-composite-image-of-the-crab-nebula-features-x-rays-from-chandra-optical-data-from-hubble-and-infrared-data-from-spitzer-3/",
  },

  sections: [
    {
      id: "introduction",

      heading: {
        pt: "Relógios espalhados pela galáxia",
        en: "Clocks scattered across the galaxy",
      },

      paragraphs: [
        {
          pt: "Em diferentes regiões da Via Láctea, existem objetos compactos que emitem sinais eletromagnéticos extremamente regulares. Alguns produzem dezenas ou centenas de pulsos por segundo, enquanto outros apresentam intervalos muito maiores entre suas emissões detectáveis.",
          en: "Across different regions of the Milky Way, compact objects emit remarkably regular electromagnetic signals. Some produce dozens or hundreds of pulses per second, while others have much longer intervals between detectable emissions.",
        },
        {
          pt: "Esses objetos são conhecidos como pulsares. A maioria corresponde a estrelas de nêutrons altamente magnetizadas, cuja rotação faz com que feixes de radiação atravessem periodicamente a linha de visão de um observador.",
          en: "These objects are known as pulsars. Most are highly magnetized neutron stars whose rotation causes radiation beams to periodically sweep across an observer's line of sight.",
        },
        {
          pt: "Sua regularidade permite que astrônomos investiguem fenômenos extremos, incluindo gravidade intensa, matéria ultradensa e o comportamento de campos magnéticos muito superiores aos encontrados na Terra.",
          en: "Their regularity allows astronomers to investigate extreme phenomena, including intense gravity, ultradense matter, and magnetic fields far stronger than those found on Earth.",
        },
      ],
    },

    {
      id: "formation",

      heading: {
        pt: "Como nasce uma estrela de nêutrons?",
        en: "How is a neutron star born?",
      },

      paragraphs: [
        {
          pt: "Estrelas suficientemente massivas podem terminar suas vidas com o colapso gravitacional de seus núcleos. Quando as reações de fusão deixam de sustentar o núcleo contra a gravidade, a matéria é comprimida a densidades extraordinárias.",
          en: "Sufficiently massive stars may end their lives through the gravitational collapse of their cores. When fusion reactions can no longer support the core against gravity, matter is compressed to extraordinary densities.",
        },
        {
          pt: "Em muitos casos, esse processo está associado a uma supernova de colapso do núcleo. Dependendo da massa e das condições físicas, o remanescente compacto pode formar uma estrela de nêutrons ou um buraco negro.",
          en: "In many cases, this process is associated with a core-collapse supernova. Depending on mass and physical conditions, the compact remnant may form a neutron star or a black hole.",
        },
        {
          pt: "Uma estrela de nêutrons pode concentrar uma massa maior que a do Sol em uma esfera com apenas algumas dezenas de quilômetros de diâmetro. A matéria em seu interior apresenta condições que não podem ser reproduzidas integralmente em laboratórios terrestres.",
          en: "A neutron star can concentrate more mass than the Sun into a sphere only a few tens of kilometers across. Matter inside it experiences conditions that cannot be fully reproduced in terrestrial laboratories.",
        },
      ],
    },

    {
      id: "rotation",

      heading: {
        pt: "Por que os pulsares giram tão rapidamente?",
        en: "Why do pulsars rotate so rapidly?",
      },

      paragraphs: [
        {
          pt: "Durante o colapso de uma estrela, a conservação do momento angular pode provocar um aumento extraordinário da velocidade de rotação do núcleo remanescente.",
          en: "During stellar collapse, conservation of angular momentum can cause an extraordinary increase in the rotation rate of the remaining core.",
        },
        {
          pt: "Uma analogia é a de uma patinadora que aproxima os braços do corpo e passa a girar mais rapidamente. No caso estelar, a redução de tamanho ocorre em uma escala muito maior e envolve processos físicos extremamente energéticos.",
          en: "An analogy is an ice skater who pulls their arms inward and begins spinning faster. In a star, the reduction in size occurs on a much larger scale and involves extremely energetic physical processes.",
        },
        {
          pt: "Algumas estrelas de nêutrons recém-formadas podem apresentar períodos de rotação de frações de segundo. Outras, especialmente pulsares de milissegundos, giram centenas de vezes por segundo.",
          en: "Some newly formed neutron stars may have rotation periods of fractions of a second. Others, especially millisecond pulsars, rotate hundreds of times per second.",
        },
      ],
    },

    {
      id: "lighthouse",

      heading: {
        pt: "O efeito farol",
        en: "The lighthouse effect",
      },

      paragraphs: [
        {
          pt: "Um pulsar não precisa emitir radiação em explosões separadas a cada rotação. Em muitos casos, a emissão está concentrada em regiões direcionais associadas à magnetosfera da estrela.",
          en: "A pulsar does not necessarily emit radiation in separate explosions during each rotation. In many cases, emission is concentrated in directional regions associated with the star's magnetosphere.",
        },
        {
          pt: "Quando o eixo magnético não está alinhado ao eixo de rotação, os feixes de radiação percorrem diferentes direções no espaço enquanto a estrela gira.",
          en: "When the magnetic axis is not aligned with the rotation axis, radiation beams sweep through different directions in space as the star rotates.",
        },
        {
          pt: "Se um desses feixes cruza a Terra, nossos instrumentos detectam um pulso. O fenômeno lembra a luz de um farol marítimo que aparece periodicamente para um observador distante.",
          en: "If one of these beams crosses Earth, our instruments detect a pulse. The phenomenon resembles the light of a lighthouse appearing periodically to a distant observer.",
        },
        {
          pt: "Isso também significa que nem toda estrela de nêutrons será observada como pulsar a partir da Terra. A geometria dos feixes, a sensibilidade dos instrumentos e a atividade da estrela influenciam sua detecção.",
          en: "This also means that not every neutron star will be observed as a pulsar from Earth. Beam geometry, instrument sensitivity, and the star's activity influence its detection.",
        },
      ],
    },

    {
      id: "discovery",

      heading: {
        pt: "Jocelyn Bell Burnell e a descoberta de 1967",
        en: "Jocelyn Bell Burnell and the 1967 discovery",
      },

      paragraphs: [
        {
          pt: "Em 1967, Jocelyn Bell Burnell era estudante de doutorado na Universidade de Cambridge. Enquanto analisava registros de um radiotelescópio que havia ajudado a construir, identificou um sinal incomum que aparecia repetidamente na mesma região do céu.",
          en: "In 1967, Jocelyn Bell Burnell was a doctoral student at the University of Cambridge. While examining recordings from a radio telescope she had helped build, she identified an unusual signal repeatedly appearing in the same region of the sky.",
        },
        {
          pt: "Em 28 de novembro daquele ano, observações revelaram pulsos separados por aproximadamente 1,337 segundo. A regularidade surpreendeu os pesquisadores, que precisaram descartar interferências terrestres e problemas instrumentais.",
          en: "On November 28 of that year, observations revealed pulses separated by approximately 1.337 seconds. Their regularity surprised researchers, who had to rule out terrestrial interference and instrumental problems.",
        },
        {
          pt: "O sinal recebeu informalmente a designação LGM-1, uma referência bem-humorada a 'Little Green Men'. A descoberta de outros sinais semelhantes demonstrou que se tratava de uma nova classe de objetos astronômicos, não de evidências de comunicação extraterrestre.",
          en: "The signal was informally designated LGM-1, a humorous reference to 'Little Green Men'. The discovery of other similar signals demonstrated that these were a new class of astronomical objects, not evidence of extraterrestrial communication.",
        },
        {
          pt: "Em 1974, o Prêmio Nobel de Física reconheceu trabalhos em radioastronomia, incluindo a descoberta dos pulsares, premiando Antony Hewish e Martin Ryle. Bell Burnell não foi incluída entre os laureados, uma decisão que permanece amplamente discutida na história da ciência.",
          en: "In 1974, the Nobel Prize in Physics recognized work in radio astronomy, including the discovery of pulsars, awarding Antony Hewish and Martin Ryle. Bell Burnell was not included among the laureates, a decision that remains widely discussed in the history of science.",
        },
      ],
    },

    {
      id: "millisecond",

      heading: {
        pt: "Pulsares de milissegundos",
        en: "Millisecond pulsars",
      },

      paragraphs: [
        {
          pt: "Alguns pulsares apresentam períodos de rotação de apenas alguns milissegundos. Isso significa que podem completar centenas de rotações por segundo.",
          en: "Some pulsars have rotation periods of only a few milliseconds. This means they can complete hundreds of rotations per second.",
        },
        {
          pt: "Uma explicação importante para sua formação envolve sistemas binários. Uma estrela de nêutrons pode receber matéria de uma companheira e adquirir momento angular, acelerando sua rotação.",
          en: "An important explanation for their formation involves binary systems. A neutron star may accrete matter from a companion and gain angular momentum, accelerating its rotation.",
        },
        {
          pt: "Esse processo é conhecido como reciclagem de pulsares. Depois da fase de transferência de matéria, o objeto pode permanecer girando rapidamente e emitir pulsos extremamente estáveis.",
          en: "This process is known as pulsar recycling. After the mass-transfer phase, the object may continue rotating rapidly and emitting extremely stable pulses.",
        },
      ],
    },

    {
      id: "cosmic-clocks",

      heading: {
        pt: "Por que são chamados de relógios cósmicos?",
        en: "Why are they called cosmic clocks?",
      },

      paragraphs: [
        {
          pt: "O intervalo entre pulsos pode ser medido com grande precisão. Alguns pulsares de milissegundos apresentam estabilidade rotacional excepcional quando suas emissões são acompanhadas durante longos períodos.",
          en: "The interval between pulses can be measured with great precision. Some millisecond pulsars exhibit exceptional rotational stability when their emissions are monitored over long periods.",
        },
        {
          pt: "Entretanto, pulsares não são relógios perfeitos. Eles perdem energia rotacional gradualmente, e alguns apresentam irregularidades, ruído temporal ou mudanças súbitas de frequência conhecidas como glitches.",
          en: "However, pulsars are not perfect clocks. They gradually lose rotational energy, and some exhibit irregularities, timing noise, or sudden frequency changes known as glitches.",
        },
        {
          pt: "Ao modelar esses efeitos, pesquisadores conseguem prever a chegada dos pulsos e procurar desvios extremamente pequenos, capazes de revelar fenômenos físicos que seriam difíceis de observar por outros métodos.",
          en: "By modeling these effects, researchers can predict pulse arrival times and search for extremely small deviations that may reveal physical phenomena difficult to observe by other methods.",
        },
      ],
    },

    {
      id: "relativity",

      heading: {
        pt: "Laboratórios naturais para testar a relatividade",
        en: "Natural laboratories for testing relativity",
      },

      paragraphs: [
        {
          pt: "Pulsares em sistemas binários são especialmente valiosos para testar a teoria da relatividade geral de Einstein. O movimento orbital desses objetos pode ser acompanhado por meio de pequenas mudanças nos tempos de chegada dos pulsos.",
          en: "Pulsars in binary systems are especially valuable for testing Einstein's theory of general relativity. Their orbital motion can be tracked through small changes in pulse arrival times.",
        },
        {
          pt: "O sistema binário PSR B1913+16 forneceu evidências indiretas importantes da emissão de ondas gravitacionais. A redução gradual de seu período orbital concordava com previsões da relatividade geral.",
          en: "The binary system PSR B1913+16 provided important indirect evidence for gravitational-wave emission. The gradual decrease in its orbital period agreed with predictions of general relativity.",
        },
        {
          pt: "Essas observações demonstraram que pulsares podem funcionar como instrumentos naturais de precisão para investigar gravidade intensa e dinâmica orbital.",
          en: "These observations demonstrated that pulsars can function as natural precision instruments for investigating strong gravity and orbital dynamics.",
        },
      ],
    },

    {
      id: "gravitational-waves",

      heading: {
        pt: "Uma rede galáctica para detectar ondas gravitacionais",
        en: "A galactic network for detecting gravitational waves",
      },

      paragraphs: [
        {
          pt: "Conjuntos de pulsares de milissegundos podem ser monitorados como uma rede de relógios distribuídos pela galáxia. Essa técnica é conhecida como Pulsar Timing Array, ou PTA.",
          en: "Groups of millisecond pulsars can be monitored as a network of clocks distributed across the galaxy. This technique is known as a Pulsar Timing Array, or PTA.",
        },
        {
          pt: "Ondas gravitacionais de frequências extremamente baixas podem alterar de maneira sutil os intervalos de chegada dos pulsos observados na Terra.",
          en: "Extremely low-frequency gravitational waves can subtly alter the arrival times of pulses observed on Earth.",
        },
        {
          pt: "Ao procurar padrões correlacionados entre diferentes pulsares, os pesquisadores podem investigar um fundo de ondas gravitacionais associado, entre outras possibilidades, a populações de sistemas binários de buracos negros supermassivos.",
          en: "By searching for correlated patterns among different pulsars, researchers can investigate a gravitational-wave background associated, among other possibilities, with populations of supermassive black-hole binaries.",
        },
      ],
    },

    {
      id: "navigation",

      heading: {
        pt: "É possível navegar pelo espaço usando pulsares?",
        en: "Can spacecraft navigate using pulsars?",
      },

      paragraphs: [
        {
          pt: "A regularidade de determinados pulsares permite utilizá-los como referências naturais para estimar posição e tempo. A ideia é semelhante, em princípio, ao uso de sinais periódicos em sistemas de navegação.",
          en: "The regularity of certain pulsars allows them to serve as natural references for estimating position and time. The concept is similar in principle to using periodic signals in navigation systems.",
        },
        {
          pt: "Em 2017, o experimento SEXTANT, associado ao instrumento NICER da NASA na Estação Espacial Internacional, demonstrou a viabilidade da navegação autônoma utilizando sinais de raios X provenientes de pulsares.",
          en: "In 2017, the SEXTANT experiment, associated with NASA's NICER instrument aboard the International Space Station, demonstrated the feasibility of autonomous navigation using X-ray signals from pulsars.",
        },
        {
          pt: "Uma espaçonave equipada com detectores apropriados poderia comparar os tempos de chegada observados com modelos previstos e estimar sua posição. Essa tecnologia é promissora para futuras missões de exploração espacial profunda.",
          en: "A spacecraft equipped with suitable detectors could compare observed arrival times with predicted models and estimate its position. This technology is promising for future deep-space exploration missions.",
        },
        {
          pt: "Apesar da demonstração bem-sucedida, sistemas de navegação por pulsares ainda enfrentam desafios relacionados ao tamanho dos detectores, à intensidade dos sinais e ao tempo necessário para obter medições precisas.",
          en: "Despite the successful demonstration, pulsar navigation systems still face challenges involving detector size, signal strength, and the time required to obtain precise measurements.",
        },
      ],
    },

    {
      id: "crab-pulsar",

      heading: {
        pt: "O pulsar da Nebulosa do Caranguejo",
        en: "The Crab Nebula pulsar",
      },

      paragraphs: [
        {
          pt: "Um dos pulsares mais estudados está localizado no centro da Nebulosa do Caranguejo, remanescente de uma supernova observada na Terra em 1054.",
          en: "One of the most studied pulsars lies at the center of the Crab Nebula, the remnant of a supernova observed from Earth in 1054.",
        },
        {
          pt: "O pulsar gira aproximadamente 30 vezes por segundo e fornece energia a uma nebulosa complexa, com partículas relativísticas, estruturas em forma de anéis e jatos.",
          en: "The pulsar rotates approximately 30 times per second and powers a complex nebula containing relativistic particles, ring-like structures, and jets.",
        },
        {
          pt: "Observações dos telescópios Chandra, Hubble e Spitzer revelaram diferentes componentes desse ambiente em raios X, luz visível e infravermelho.",
          en: "Observations from the Chandra, Hubble, and Spitzer telescopes revealed different components of this environment in X-rays, visible light, and infrared radiation.",
        },
      ],
    },

    {
      id: "conclusion",

      heading: {
        pt: "Estrelas mortas que continuam revelando o Universo",
        en: "Dead stars that continue revealing the Universe",
      },

      paragraphs: [
        {
          pt: "Pulsares são remanescentes estelares capazes de transformar sua rotação e seus campos magnéticos em sinais observáveis a enormes distâncias. Sua descoberta abriu uma nova maneira de investigar a física em condições extremas.",
          en: "Pulsars are stellar remnants capable of turning their rotation and magnetic fields into observable signals across enormous distances. Their discovery opened a new way to investigate physics under extreme conditions.",
        },
        {
          pt: "Além de revelar propriedades das estrelas de nêutrons, esses objetos permitem testar a relatividade, investigar ondas gravitacionais e desenvolver tecnologias de navegação espacial.",
          en: "Beyond revealing the properties of neutron stars, these objects allow scientists to test relativity, investigate gravitational waves, and develop space navigation technologies.",
        },
        {
          pt: "O que começou com um sinal estranho registrado em papel, em 1967, tornou-se uma das ferramentas mais precisas da astronomia moderna.",
          en: "What began as a strange signal recorded on paper in 1967 became one of the most precise tools in modern astronomy.",
        },
      ],
    },
  ],

  references: [
    {
      title: "Journeys of discovery: Jocelyn Bell Burnell and pulsars",
      authors: "University of Cambridge",
      url: "https://www.cam.ac.uk/stories/journeysofdiscovery-pulsars",
    },
    {
      title: "Handbook of Pulsar Astronomy",
      authors: "Lorimer, D. R. & Kramer, M.",
      year: 2005,
      url: "https://assets.cambridge.org/97805218/28239/excerpt/9780521828239_excerpt.pdf",
    },
    {
      title: "NASA Team First to Demonstrate X-ray Navigation in Space",
      authors: "NASA Goddard Space Flight Center",
      year: 2018,
      url: "https://www.nasa.gov/centers-and-facilities/goddard/nasa-team-first-to-demonstrate-x-ray-navigation-in-space/",
    },
    {
      title: "Crab Nebula — Multiwavelength Image",
      authors: "NASA/CXC/SAO, NASA/STScI, NASA/JPL-Caltech",
      url: "https://science.nasa.gov/image-detail/a-new-composite-image-of-the-crab-nebula-features-x-rays-from-chandra-optical-data-from-hubble-and-infrared-data-from-spitzer-3/",
    },
    {
      title: "NICER Mission",
      authors: "NASA HEASARC",
      url: "https://heasarc.gsfc.nasa.gov/docs/heasarc/missions/nicer.html",
    },
  ],
};
