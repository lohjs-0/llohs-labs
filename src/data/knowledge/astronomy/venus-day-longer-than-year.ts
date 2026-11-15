
import type { KnowledgePost } from "../../knowledge.types";

export const venusDayLongerThanYear: KnowledgePost = {
  slug: "venus-day-longer-than-year",

  title: {
    pt: "Vênus: o planeta onde um dia dura mais que um ano",
    en: "Venus: the planet where a day lasts longer than a year",
  },

  description: {
    pt: "Vênus leva aproximadamente 243 dias terrestres para completar uma rotação, mas apenas 225 dias para orbitar o Sol. Entenda sua rotação retrógrada, sua atmosfera extrema e o verdadeiro significado de um dia venusiano.",
    en: "Venus takes approximately 243 Earth days to complete one rotation, but only 225 days to orbit the Sun. Explore its retrograde rotation, extreme atmosphere, and the true meaning of a Venusian day.",
  },

  category: "science",
  date: "2026-11-15",
  readingMinutes: 10,

  tags: [
    "astronomy",
    "venus",
    "solar-system",
    "planetary-science",
    "rotation",
    "atmosphere",
  ],

  cover: {
    src: "/images/knowledge/venus-day-longer-than-year-cover.jpg",

    alt: {
      pt: "Representação global da superfície de Vênus construída com dados de radar da missão Magellan.",
      en: "Global representation of Venus's surface constructed from Magellan mission radar data.",
    },

    caption: {
      pt: "Visualização de Vênus produzida a partir de dados de radar da missão Magellan. As cores são utilizadas para representar características da superfície.",
      en: "Visualization of Venus produced from Magellan radar data. Colors are used to represent surface characteristics.",
    },

    credit: "NASA/JPL/USGS",
    sourceUrl:
      "https://science.nasa.gov/resource/hemispheric-view-of-venus/",
  },

  sections: [
    {
      id: "introduction",
      heading: {
        pt: "Um planeta onde o tempo funciona de outra maneira",
        en: "A planet where time works differently",
      },
      paragraphs: [
        {
          pt: "Na Terra, estamos acostumados a uma relação simples entre dias e anos. Nosso planeta completa uma rotação em aproximadamente 24 horas e uma volta ao redor do Sol em cerca de 365 dias. Em Vênus, essa relação é radicalmente diferente.",
          en: "On Earth, we are accustomed to a simple relationship between days and years. Our planet completes one rotation in approximately 24 hours and one orbit around the Sun in about 365 days. On Venus, this relationship is radically different.",
        },
        {
          pt: "Vênus leva aproximadamente 243 dias terrestres para completar uma rotação em relação às estrelas distantes. Entretanto, sua órbita ao redor do Sol dura apenas 224,7 dias terrestres.",
          en: "Venus takes approximately 243 Earth days to complete one rotation relative to distant stars. However, its orbit around the Sun lasts only 224.7 Earth days.",
        },
        {
          pt: "Isso significa que o período de rotação sideral de Vênus é maior que seu ano. Mas há um detalhe importante: um dia medido pelo movimento aparente do Sol não tem a mesma duração que uma rotação completa em relação às estrelas.",
          en: "This means Venus's sidereal rotation period is longer than its year. But there is an important detail: a day measured by the apparent motion of the Sun does not have the same duration as a complete rotation relative to the stars.",
        },
      ],
    },

    {
      id: "sidereal-day",
      heading: {
        pt: "O que é um dia sideral?",
        en: "What is a sidereal day?",
      },
      paragraphs: [
        {
          pt: "Um dia sideral é o intervalo necessário para um planeta completar uma rotação em relação a uma referência distante, como as estrelas. Essa medida descreve o movimento do próprio planeta em torno de seu eixo.",
          en: "A sidereal day is the interval required for a planet to complete one rotation relative to a distant reference, such as the stars. This measurement describes the planet's rotation around its own axis.",
        },
        {
          pt: "Em Vênus, esse intervalo é de aproximadamente 243 dias terrestres. Sua rotação é excepcionalmente lenta quando comparada à dos outros planetas do Sistema Solar.",
          en: "On Venus, this interval is approximately 243 Earth days. Its rotation is exceptionally slow compared with that of other planets in the Solar System.",
        },
        {
          pt: "Na Terra, o dia sideral dura aproximadamente 23 horas e 56 minutos. A diferença em relação às 24 horas do dia solar ocorre porque nosso planeta também se desloca em sua órbita enquanto gira.",
          en: "On Earth, a sidereal day lasts approximately 23 hours and 56 minutes. The difference from the 24-hour solar day occurs because our planet also moves along its orbit while rotating.",
        },
      ],
    },

    {
      id: "solar-day",
      heading: {
        pt: "Por que o dia solar de Vênus dura apenas 117 dias?",
        en: "Why does Venus's solar day last only 117 days?",
      },
      paragraphs: [
        {
          pt: "O dia solar corresponde ao intervalo entre duas passagens consecutivas do Sol pela mesma posição no céu, como dois meios-dias locais sucessivos.",
          en: "A solar day is the interval between two consecutive passages of the Sun through the same position in the sky, such as two successive local noons.",
        },
        {
          pt: "Como Vênus gira no sentido oposto ao seu movimento orbital, sua rotação retrógrada faz com que o movimento aparente do Sol complete um ciclo em aproximadamente 116,75 dias terrestres.",
          en: "Because Venus rotates in the opposite direction to its orbital motion, its retrograde rotation causes the Sun's apparent motion to complete one cycle in approximately 116.75 Earth days.",
        },
        {
          pt: "Assim, a famosa afirmação de que um dia em Vênus dura mais que um ano refere-se especificamente ao dia sideral. Quando consideramos o dia solar, o intervalo é menor que o ano venusiano.",
          en: "Therefore, the famous statement that a day on Venus lasts longer than a year refers specifically to the sidereal day. When considering the solar day, the interval is shorter than the Venusian year.",
        },
      ],
    },

    {
      id: "retrograde-rotation",
      heading: {
        pt: "Um planeta que gira ao contrário",
        en: "A planet that rotates backward",
      },
      paragraphs: [
        {
          pt: "A maioria dos planetas gira no mesmo sentido geral em que orbita o Sol. Vênus é uma exceção: sua rotação é retrógrada, isto é, ocorre no sentido oposto ao movimento orbital.",
          en: "Most planets rotate in the same general direction in which they orbit the Sun. Venus is an exception: its rotation is retrograde, meaning it occurs in the opposite direction to its orbital motion.",
        },
        {
          pt: "Por causa disso, para um observador hipotético na superfície, o Sol se deslocaria lentamente de oeste para leste. Ele nasceria no oeste e se poria no leste, ao contrário do que observamos na Terra.",
          en: "Because of this, for a hypothetical observer on the surface, the Sun would move slowly from west to east. It would rise in the west and set in the east, unlike what we observe on Earth.",
        },
        {
          pt: "Entretanto, a espessa atmosfera venusiana impede que a superfície tenha uma visão nítida do Sol como a que experimentamos em um céu terrestre limpo.",
          en: "However, Venus's thick atmosphere prevents the surface from having a clear view of the Sun like the one we experience under a cloudless sky on Earth.",
        },
      ],
    },

    {
      id: "origin-of-rotation",
      heading: {
        pt: "Por que Vênus gira tão lentamente?",
        en: "Why does Venus rotate so slowly?",
      },
      paragraphs: [
        {
          pt: "A origem da rotação lenta e retrógrada de Vênus ainda é investigada. Uma hipótese envolve grandes impactos ocorridos durante a formação do Sistema Solar, capazes de alterar o momento angular de um planeta jovem.",
          en: "The origin of Venus's slow, retrograde rotation remains under investigation. One hypothesis involves major impacts during the formation of the Solar System, capable of altering the angular momentum of a young planet.",
        },
        {
          pt: "Outros modelos consideram a atuação prolongada de torques gravitacionais e atmosféricos. A interação entre o aquecimento solar, a atmosfera densa e a resposta gravitacional do planeta pode influenciar sua evolução rotacional.",
          en: "Other models consider the long-term action of gravitational and atmospheric torques. Interactions among solar heating, the dense atmosphere, and the planet's gravitational response may influence its rotational evolution.",
        },
        {
          pt: "Não existe consenso de que um único grande impacto seja responsável pelo comportamento atual. A explicação pode envolver múltiplos processos atuando durante bilhões de anos.",
          en: "There is no consensus that a single giant impact is responsible for the present behavior. The explanation may involve multiple processes acting over billions of years.",
        },
      ],
    },

    {
      id: "atmosphere",
      heading: {
        pt: "Uma atmosfera extremamente densa",
        en: "An extremely dense atmosphere",
      },
      paragraphs: [
        {
          pt: "A atmosfera de Vênus é composta principalmente por dióxido de carbono, com aproximadamente 96,5% de CO2 e cerca de 3,5% de nitrogênio. O planeta também possui nuvens que contêm gotículas de ácido sulfúrico.",
          en: "Venus's atmosphere consists primarily of carbon dioxide, with approximately 96.5% CO2 and about 3.5% nitrogen. The planet also has clouds containing sulfuric acid droplets.",
        },
        {
          pt: "Na superfície, a pressão atmosférica média é de aproximadamente 92 bar, equivalente a cerca de 90 vezes a pressão ao nível do mar na Terra.",
          en: "At the surface, the average atmospheric pressure is approximately 92 bar, equivalent to about 90 times the pressure at sea level on Earth.",
        },
        {
          pt: "Essa atmosfera produz um efeito estufa extremamente intenso, mantendo temperaturas superficiais médias próximas de 465 graus Celsius.",
          en: "This atmosphere produces an extremely intense greenhouse effect, maintaining average surface temperatures near 465 degrees Celsius.",
        },
        {
          pt: "Embora Mercúrio esteja mais próximo do Sol, Vênus é o planeta com a superfície mais quente do Sistema Solar.",
          en: "Although Mercury is closer to the Sun, Venus is the planet with the hottest surface in the Solar System.",
        },
      ],
    },

    {
      id: "atmospheric-superrotation",
      heading: {
        pt: "Uma atmosfera que gira muito mais rápido que o planeta",
        en: "An atmosphere that rotates much faster than the planet",
      },
      paragraphs: [
        {
          pt: "Um dos fenômenos mais surpreendentes de Vênus é a super-rotação atmosférica. Enquanto a superfície leva cerca de 243 dias terrestres para completar uma rotação sideral, os ventos nas camadas superiores das nuvens podem circundar o planeta em aproximadamente quatro dias terrestres.",
          en: "One of Venus's most surprising phenomena is atmospheric superrotation. While the surface takes about 243 Earth days to complete a sidereal rotation, winds in the upper cloud layers can circle the planet in approximately four Earth days.",
        },
        {
          pt: "Essa diferença revela uma circulação atmosférica extremamente dinâmica. Ondas atmosféricas, transporte de momento angular e interações entre diferentes camadas contribuem para o fenômeno.",
          en: "This difference reveals an extremely dynamic atmospheric circulation. Atmospheric waves, angular momentum transport, and interactions between different layers contribute to the phenomenon.",
        },
        {
          pt: "A compreensão da super-rotação é importante para modelos climáticos planetários e para o estudo de atmosferas em outros mundos, incluindo exoplanetas.",
          en: "Understanding superrotation is important for planetary climate models and for studying atmospheres on other worlds, including exoplanets.",
        },
      ],
    },

    {
      id: "surface",
      heading: {
        pt: "O que existe abaixo das nuvens?",
        en: "What lies beneath the clouds?",
      },
      paragraphs: [
        {
          pt: "As nuvens de Vênus impedem observações convencionais detalhadas de sua superfície em luz visível. Por isso, missões espaciais utilizaram radar para investigar o relevo escondido abaixo da atmosfera.",
          en: "Venus's clouds prevent detailed conventional observations of its surface in visible light. For this reason, space missions have used radar to investigate the terrain hidden beneath the atmosphere.",
        },
        {
          pt: "A missão Magellan, da NASA, realizou um mapeamento extenso do planeta durante a década de 1990, revelando planícies vulcânicas, grandes montanhas, estruturas tectônicas e milhares de formações vulcânicas.",
          en: "NASA's Magellan mission carried out extensive mapping of the planet during the 1990s, revealing volcanic plains, large mountains, tectonic structures, and thousands of volcanic formations.",
        },
        {
          pt: "Esses dados ajudaram a estabelecer que Vênus possui uma história geológica complexa. Evidências analisadas mais recentemente também fortaleceram a interpretação de atividade vulcânica relativamente recente ou atual.",
          en: "These data helped establish that Venus has a complex geological history. Evidence analyzed more recently has also strengthened the interpretation of relatively recent or ongoing volcanic activity.",
        },
      ],
    },

    {
      id: "earth-comparison",
      heading: {
        pt: "Por que Vênus e a Terra são tão diferentes?",
        en: "Why are Venus and Earth so different?",
      },
      paragraphs: [
        {
          pt: "Vênus e Terra apresentam tamanhos, massas e composições gerais relativamente semelhantes. Por isso, Vênus é frequentemente descrito como um planeta irmão da Terra.",
          en: "Venus and Earth have relatively similar sizes, masses, and broad compositions. For this reason, Venus is frequently described as Earth's sister planet.",
        },
        {
          pt: "Apesar dessas semelhanças, suas condições superficiais são radicalmente distintas. A Terra possui oceanos de água líquida, enquanto Vênus apresenta uma superfície extremamente quente e uma atmosfera dominada por dióxido de carbono.",
          en: "Despite these similarities, their surface conditions are radically different. Earth has oceans of liquid water, while Venus has an extremely hot surface and a carbon-dioxide-dominated atmosphere.",
        },
        {
          pt: "Estudar como esses planetas seguiram trajetórias climáticas tão diferentes ajuda pesquisadores a investigar a evolução de atmosferas, a estabilidade da água líquida e os limites da habitabilidade planetária.",
          en: "Studying how these planets followed such different climate trajectories helps researchers investigate atmospheric evolution, the stability of liquid water, and the limits of planetary habitability.",
        },
      ],
    },

    {
      id: "conclusion",
      heading: {
        pt: "Um mundo onde até o tempo surpreende",
        en: "A world where even time is surprising",
      },
      paragraphs: [
        {
          pt: "Vênus demonstra como dois planetas rochosos relativamente semelhantes podem desenvolver características completamente diferentes. Sua rotação lenta, seu movimento retrógrado e sua atmosfera extrema fazem dele um laboratório natural para a ciência planetária.",
          en: "Venus demonstrates how two relatively similar rocky planets can develop completely different characteristics. Its slow rotation, retrograde motion, and extreme atmosphere make it a natural laboratory for planetary science.",
        },
        {
          pt: "A afirmação de que um dia em Vênus dura mais que um ano é verdadeira quando falamos de rotação sideral. Mas compreender a diferença entre dias siderais e solares revela uma realidade ainda mais interessante.",
          en: "The statement that a day on Venus lasts longer than a year is true when discussing sidereal rotation. But understanding the difference between sidereal and solar days reveals an even more interesting reality.",
        },
        {
          pt: "Vênus continua sendo essencial para investigar não apenas a evolução do Sistema Solar, mas também a diversidade de planetas rochosos encontrados ao redor de outras estrelas.",
          en: "Venus remains essential for investigating not only the evolution of the Solar System but also the diversity of rocky planets found around other stars.",
        },
      ],
    },
  ],

  references: [
    {
      title: "Venus: Facts",
      authors: "NASA Science",
      url: "https://science.nasa.gov/venus/venus-facts/",
    },
    {
      title: "Venus Fact Sheet",
      authors: "NASA Goddard Space Flight Center",
      url: "https://nssdc.gsfc.nasa.gov/planetary/factsheet/venusfact.html",
    },
    {
      title: "Hemispheric View of Venus",
      authors: "NASA/JPL/USGS",
      year: 1998,
      url: "https://science.nasa.gov/resource/hemispheric-view-of-venus/",
    },
    {
      title: "Spin State and Moment of Inertia of Venus",
      authors: "Margot, J.-L. et al.",
      year: 2021,
      url: "https://ntrs.nasa.gov/citations/20220003058",
    },
    {
      title: "Venus Hemispherical Globes",
      authors: "NASA/JPL/USGS",
      year: 2001,
      url: "https://www.jpl.nasa.gov/images/pia03151-venus-hemispherical-globes/",
    },
  ],
};
