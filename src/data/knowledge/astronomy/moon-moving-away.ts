
import type { KnowledgePost } from "../../knowledge.types";

export const moonMovingAway: KnowledgePost = {
  slug: "moon-moving-away",

  title: {
    pt: "A Lua está se afastando da Terra",
    en: "The Moon is moving away from Earth",
  },

  description: {
    pt: "A Lua se afasta da Terra aproximadamente 3,8 centímetros por ano. Entenda como cientistas medem esse movimento, o papel das marés e o que acontecerá com nosso planeta no futuro.",
    en: "The Moon is moving away from Earth by approximately 3.8 centimeters per year. Discover how scientists measure this motion, the role of tides, and what it means for Earth's future.",
  },

  category: "science",
  date: "2026-11-15",
  readingMinutes: 11,

  tags: [
    "astronomy",
    "moon",
    "earth",
    "orbital-mechanics",
    "tidal-forces",
    "lunar-laser-ranging",
  ],

  cover: {
    src: "/images/knowledge/moon-moving-away-cover.jpg",

    alt: {
      pt: "Fotografia da Lua mostrando sua superfície coberta por crateras e regiões escuras.",
      en: "Photograph of the Moon showing its cratered surface and dark regions.",
    },

    caption: {
      pt: "A Lua está se afastando gradualmente da Terra devido às interações gravitacionais e à transferência de momento angular associada às marés.",
      en: "The Moon is gradually moving away from Earth because of gravitational interactions and angular momentum transfer associated with tides.",
    },

    credit: "NASA",

    sourceUrl:
      "https://science.nasa.gov/moon/",
  },

  sections: [
    {
      id: "introduction",

      heading: {
        pt: "Uma separação quase imperceptível",
        en: "An almost imperceptible separation",
      },

      paragraphs: [
        {
          pt: "A Lua acompanha a Terra há bilhões de anos. Sua presença influencia as marés, estabiliza parcialmente a orientação do eixo terrestre e participa de uma complexa interação gravitacional com nosso planeta.",
          en: "The Moon has accompanied Earth for billions of years. Its presence influences the tides, partially stabilizes Earth's axial orientation, and participates in a complex gravitational interaction with our planet.",
        },
        {
          pt: "Apesar de parecer ocupar sempre a mesma região do espaço, a órbita lunar está mudando lentamente. Medições modernas indicam que a distância média entre a Terra e a Lua aumenta aproximadamente 3,8 centímetros por ano.",
          en: "Although it appears to occupy the same region of space, the Moon's orbit is slowly changing. Modern measurements indicate that the average Earth-Moon distance increases by approximately 3.8 centimeters per year.",
        },
        {
          pt: "Essa mudança é pequena na escala humana, mas representa um processo importante quando consideramos milhões ou bilhões de anos.",
          en: "This change is small on a human timescale, but it represents an important process when considering millions or billions of years.",
        },
        {
          pt: "O afastamento lunar não significa que a gravidade da Terra esteja desaparecendo. O fenômeno resulta principalmente da transferência de momento angular entre a rotação terrestre e a órbita da Lua.",
          en: "The Moon's recession does not mean Earth's gravity is disappearing. The phenomenon primarily results from the transfer of angular momentum between Earth's rotation and the Moon's orbit.",
        },
      ],
    },

    {
      id: "distance",

      heading: {
        pt: "Qual é a distância atual da Lua?",
        en: "How far away is the Moon?",
      },

      paragraphs: [
        {
          pt: "A distância média entre os centros da Terra e da Lua é de aproximadamente 384.400 quilômetros. Entretanto, a órbita lunar não é perfeitamente circular.",
          en: "The average distance between the centers of Earth and the Moon is approximately 384,400 kilometers. However, the Moon's orbit is not perfectly circular.",
        },
        {
          pt: "Durante sua trajetória, a Lua passa pelo perigeu, ponto de maior proximidade com a Terra, e pelo apogeu, ponto de maior distância.",
          en: "During its journey, the Moon passes through perigee, the point closest to Earth, and apogee, the point farthest away.",
        },
        {
          pt: "Essa variação orbital é muito maior que o afastamento anual de alguns centímetros. Por isso, os cientistas precisam analisar medições ao longo de grandes intervalos para identificar a tendência de longo prazo.",
          en: "This orbital variation is much greater than the annual recession of a few centimeters. Scientists therefore need to analyze measurements over long periods to identify the long-term trend.",
        },
        {
          pt: "O valor de 3,8 centímetros por ano descreve uma taxa média atual, não uma velocidade constante válida para toda a história da Terra.",
          en: "The value of 3.8 centimeters per year describes a present-day average rate, not a constant speed valid throughout Earth's history.",
        },
      ],
    },

    {
      id: "laser-ranging",

      heading: {
        pt: "Como medir centímetros a quase 400 mil quilômetros?",
        en: "How can centimeters be measured across nearly 400,000 kilometers?",
      },

      paragraphs: [
        {
          pt: "Uma das técnicas mais precisas para estudar a distância lunar é o Lunar Laser Ranging, ou medição lunar por laser. O método utiliza pulsos de luz enviados de observatórios terrestres em direção a refletores instalados na superfície da Lua.",
          en: "One of the most precise techniques for studying lunar distance is Lunar Laser Ranging. The method uses light pulses sent from Earth-based observatories toward reflectors installed on the Moon's surface.",
        },
        {
          pt: "Os primeiros conjuntos de retrorefletores foram deixados pelas missões Apollo. Esses dispositivos possuem elementos ópticos projetados para devolver parte da luz incidente aproximadamente na direção de sua origem.",
          en: "The first retroreflector arrays were left by the Apollo missions. These devices contain optical elements designed to return part of the incoming light approximately toward its source.",
        },
        {
          pt: "Ao medir o intervalo entre a emissão do pulso e a chegada dos poucos fótons que retornam, os pesquisadores calculam a distância percorrida pela luz. O tempo de ida e volta é de aproximadamente 2,5 segundos, variando conforme a distância instantânea.",
          en: "By measuring the interval between sending the pulse and receiving the few returning photons, researchers calculate the distance traveled by light. The round-trip time is approximately 2.5 seconds, varying with the instantaneous distance.",
        },
        {
          pt: "Após considerar efeitos atmosféricos, relativísticos e orbitais, séries históricas dessas observações permitem determinar com grande precisão o movimento da Lua.",
          en: "After accounting for atmospheric, relativistic, and orbital effects, historical series of these observations allow researchers to determine the Moon's motion with great precision.",
        },
      ],
    },

    {
      id: "retroreflectors",

      heading: {
        pt: "Os espelhos deixados na Lua",
        en: "The mirrors left on the Moon",
      },

      paragraphs: [
        {
          pt: "As missões Apollo 11, Apollo 14 e Apollo 15 instalaram conjuntos de retrorefletores na superfície lunar. Missões soviéticas Lunokhod também transportaram dispositivos semelhantes.",
          en: "Apollo 11, Apollo 14, and Apollo 15 installed retroreflector arrays on the lunar surface. Soviet Lunokhod missions also carried similar devices.",
        },
        {
          pt: "Esses instrumentos não precisam de baterias nem de sistemas eletrônicos ativos. Sua função é óptica: refletir a luz recebida de volta em direção à fonte.",
          en: "These instruments require neither batteries nor active electronic systems. Their function is optical: reflecting received light back toward its source.",
        },
        {
          pt: "Experimentos realizados ao longo de décadas utilizaram esses refletores para estudar a órbita lunar, a rotação da Lua e propriedades gravitacionais do sistema Terra-Lua.",
          en: "Experiments conducted over decades have used these reflectors to study the lunar orbit, the Moon's rotation, and gravitational properties of the Earth-Moon system.",
        },
        {
          pt: "O experimento também fornece testes importantes da relatividade geral e de princípios fundamentais da gravitação.",
          en: "The experiment also provides important tests of general relativity and fundamental principles of gravitation.",
        },
      ],
    },

    {
      id: "tidal-forces",

      heading: {
        pt: "A verdadeira responsável: a força das marés",
        en: "The real cause: tidal forces",
      },

      paragraphs: [
        {
          pt: "A gravidade lunar atua de maneira ligeiramente diferente sobre as diversas regiões da Terra. Essa diferença de atração contribui para a formação das marés oceânicas.",
          en: "The Moon's gravity acts slightly differently on different regions of Earth. This variation in gravitational attraction contributes to the formation of ocean tides.",
        },
        {
          pt: "A rotação terrestre faz com que a resposta dos oceanos e da Terra sólida não permaneça perfeitamente alinhada à direção da Lua. O atrito e outros processos dissipativos produzem um deslocamento de fase na resposta das marés.",
          en: "Earth's rotation causes the response of its oceans and solid body not to remain perfectly aligned with the direction of the Moon. Friction and other dissipative processes produce a phase shift in the tidal response.",
        },
        {
          pt: "Essa configuração cria torques gravitacionais que transferem momento angular da rotação terrestre para a órbita lunar.",
          en: "This configuration creates gravitational torques that transfer angular momentum from Earth's rotation to the lunar orbit.",
        },
        {
          pt: "Como consequência, a Terra perde lentamente parte de sua velocidade de rotação, enquanto a Lua ganha momento angular orbital e passa a ocupar, em média, uma órbita mais distante.",
          en: "As a consequence, Earth slowly loses some of its rotational speed, while the Moon gains orbital angular momentum and gradually occupies a more distant orbit on average.",
        },
      ],
    },

    {
      id: "angular-momentum",

      heading: {
        pt: "A conservação do momento angular",
        en: "Conservation of angular momentum",
      },

      paragraphs: [
        {
          pt: "O momento angular é uma grandeza física associada ao movimento de rotação e ao movimento orbital. Em um sistema isolado, seu valor total é conservado.",
          en: "Angular momentum is a physical quantity associated with rotational and orbital motion. In an isolated system, its total value is conserved.",
        },
        {
          pt: "No sistema Terra-Lua, as interações de maré permitem que parte do momento angular associado à rotação terrestre seja transferida para o movimento orbital da Lua.",
          en: "In the Earth-Moon system, tidal interactions allow some of the angular momentum associated with Earth's rotation to be transferred to the Moon's orbital motion.",
        },
        {
          pt: "Para uma órbita aproximadamente circular, o momento angular orbital aumenta quando o raio orbital aumenta. Assim, a transferência de momento angular pode levar ao afastamento gradual do satélite.",
          en: "For an approximately circular orbit, orbital angular momentum increases as orbital radius increases. Therefore, angular momentum transfer can lead to the satellite's gradual recession.",
        },
        {
          pt: "Parte da energia mecânica do sistema é dissipada em forma de calor, principalmente devido à dinâmica das marés. A conservação do momento angular não significa conservação da energia mecânica durante esse processo.",
          en: "Part of the system's mechanical energy is dissipated as heat, mainly because of tidal dynamics. Conservation of angular momentum does not imply conservation of mechanical energy during this process.",
        },
      ],
    },

    {
      id: "earth-rotation",

      heading: {
        pt: "Os dias na Terra estão ficando mais longos",
        en: "Days on Earth are getting longer",
      },

      paragraphs: [
        {
          pt: "Como a Terra perde gradualmente momento angular rotacional para a órbita lunar, sua rotação tende a desacelerar. Isso significa que a duração média do dia aumenta em escalas geológicas.",
          en: "As Earth gradually transfers rotational angular momentum to the Moon's orbit, its rotation tends to slow down. This means the average length of a day increases over geological timescales.",
        },
        {
          pt: "A contribuição das marés lunares para essa desaceleração é frequentemente expressa em milissegundos por século. Entretanto, a duração real do dia também é influenciada por processos atmosféricos, oceânicos, movimentos internos da Terra e redistribuição de massa.",
          en: "The contribution of lunar tides to this slowdown is often expressed in milliseconds per century. However, the actual length of the day is also influenced by atmospheric and oceanic processes, Earth's internal motions, and mass redistribution.",
        },
        {
          pt: "Por isso, o comportamento da rotação terrestre não é perfeitamente uniforme. Existem variações de curto prazo que podem temporariamente acelerar ou desacelerar o planeta.",
          en: "For this reason, Earth's rotational behavior is not perfectly uniform. Short-term variations can temporarily speed up or slow down the planet.",
        },
        {
          pt: "Em escalas de centenas de milhões de anos, entretanto, a evolução das marés fornece uma explicação importante para a diferença entre a duração dos dias antigos e atuais.",
          en: "Over hundreds of millions of years, however, tidal evolution provides an important explanation for the difference between the length of ancient and modern days.",
        },
      ],
    },

    {
      id: "ancient-earth",

      heading: {
        pt: "Quando a Terra tinha dias mais curtos",
        en: "When Earth had shorter days",
      },

      paragraphs: [
        {
          pt: "Registros geológicos e paleontológicos permitem investigar a duração do dia em períodos antigos. Certos organismos produzem estruturas de crescimento que podem preservar ciclos associados a variações diárias e sazonais.",
          en: "Geological and paleontological records allow researchers to investigate day length in ancient periods. Certain organisms produce growth structures that may preserve cycles associated with daily and seasonal variations.",
        },
        {
          pt: "Estudos de corais fósseis e de depósitos sedimentares indicam que a Terra completava mais rotações por ano em determinados períodos do passado, o que corresponde a dias mais curtos.",
          en: "Studies of fossil corals and sedimentary deposits indicate that Earth completed more rotations per year during certain periods in the past, corresponding to shorter days.",
        },
        {
          pt: "Para partes do Paleozoico, evidências sugerem dias com duração próxima de 22 horas, embora as estimativas variem conforme a idade, o registro utilizado e o modelo de interpretação.",
          en: "For parts of the Paleozoic, evidence suggests days lasting around 22 hours, although estimates vary depending on age, the record used, and the interpretation model.",
        },
        {
          pt: "Essas observações mostram que o sistema Terra-Lua evoluiu de maneira significativa e que a duração atual do dia não é uma característica permanente de nosso planeta.",
          en: "These observations show that the Earth-Moon system has evolved significantly and that the current length of the day is not a permanent feature of our planet.",
        },
      ],
    },

    {
      id: "early-moon",

      heading: {
        pt: "A Lua já esteve muito mais próxima",
        en: "The Moon was once much closer",
      },

      paragraphs: [
        {
          pt: "A hipótese mais amplamente estudada para a origem da Lua envolve um grande impacto ocorrido durante os estágios iniciais da formação da Terra. Material lançado ao espaço teria contribuído para a formação do satélite.",
          en: "The most widely studied hypothesis for the Moon's origin involves a giant impact during Earth's early formation. Material ejected into space would have contributed to the satellite's formation.",
        },
        {
          pt: "Após sua formação, a Lua provavelmente orbitava muito mais perto da Terra do que atualmente. A interação de maré modificou gradualmente a distância orbital e a rotação dos dois corpos.",
          en: "After its formation, the Moon probably orbited much closer to Earth than it does today. Tidal interactions gradually changed the orbital distance and rotation of both bodies.",
        },
        {
          pt: "Entretanto, não é correto multiplicar a taxa atual de 3,8 centímetros por ano por bilhões de anos para reconstruir a órbita antiga. A intensidade das marés e a eficiência da dissipação de energia variaram ao longo da história terrestre.",
          en: "However, multiplying the current rate of 3.8 centimeters per year by billions of years is not a valid way to reconstruct the ancient orbit. Tidal strength and energy dissipation efficiency have varied throughout Earth's history.",
        },
        {
          pt: "A evolução orbital da Lua depende de fatores como a configuração dos oceanos, a distribuição dos continentes e as propriedades físicas da Terra em diferentes épocas.",
          en: "The Moon's orbital evolution depends on factors such as ocean configuration, continental distribution, and Earth's physical properties during different eras.",
        },
      ],
    },

    {
      id: "eclipses",

      heading: {
        pt: "Os eclipses solares totais vão desaparecer?",
        en: "Will total solar eclipses disappear?",
      },

      paragraphs: [
        {
          pt: "Uma das consequências de longo prazo do afastamento lunar envolve os eclipses solares. Atualmente, a Lua e o Sol apresentam tamanhos angulares semelhantes quando observados da Terra.",
          en: "One long-term consequence of lunar recession involves solar eclipses. Today, the Moon and Sun have similar apparent angular sizes when viewed from Earth.",
        },
        {
          pt: "Essa coincidência permite que a Lua cubra completamente o disco solar em determinadas condições, produzindo um eclipse solar total.",
          en: "This coincidence allows the Moon to completely cover the solar disk under certain conditions, producing a total solar eclipse.",
        },
        {
          pt: "À medida que a Lua se afasta, seu tamanho angular médio diminui. Em um futuro distante, ela poderá deixar de ser grande o suficiente para encobrir completamente o Sol.",
          en: "As the Moon moves away, its average apparent angular size decreases. In the distant future, it may no longer be large enough to completely cover the Sun.",
        },
        {
          pt: "O próprio Sol também evolui e aumenta lentamente de tamanho. Considerando esses fatores, os eclipses solares totais deixarão de ocorrer em algum momento daqui a centenas de milhões de anos, embora a época exata dependa dos modelos adotados.",
          en: "The Sun itself also evolves and slowly increases in size. Considering these factors, total solar eclipses will cease at some point hundreds of millions of years from now, although the exact timing depends on the models used.",
        },
      ],
    },

    {
      id: "tidal-locking",

      heading: {
        pt: "A Terra e a Lua poderiam ficar sincronizadas?",
        en: "Could Earth and Moon become synchronized?",
      },

      paragraphs: [
        {
          pt: "Atualmente, a Lua apresenta rotação síncrona: ela leva aproximadamente o mesmo tempo para girar em torno de seu eixo e completar uma órbita ao redor da Terra. Por isso, observamos aproximadamente o mesmo hemisfério lunar.",
          en: "Today, the Moon exhibits synchronous rotation: it takes approximately the same amount of time to rotate around its axis and complete one orbit around Earth. This is why we observe approximately the same lunar hemisphere.",
        },
        {
          pt: "Em um modelo idealizado de evolução de marés, a Terra também poderia desacelerar até atingir uma configuração de sincronização mútua, na qual os períodos de rotação e orbital estariam relacionados de maneira estável.",
          en: "In an idealized tidal evolution model, Earth could also slow down until reaching a state of mutual synchronization, in which rotational and orbital periods would be related in a stable configuration.",
        },
        {
          pt: "Entretanto, esse cenário exigiria intervalos extremamente longos e depende de hipóteses simplificadoras. A evolução do Sol e outras influências tornam improvável que o sistema Terra-Lua alcance esse estado antes de grandes mudanças no Sistema Solar.",
          en: "However, this scenario would require extremely long timescales and depends on simplifying assumptions. Solar evolution and other influences make it unlikely that the Earth-Moon system will reach this state before major changes occur in the Solar System.",
        },
      ],
    },

    {
      id: "moon-escape",

      heading: {
        pt: "A Lua vai escapar da Terra?",
        en: "Will the Moon escape from Earth?",
      },

      paragraphs: [
        {
          pt: "O afastamento gradual da Lua não significa que ela esteja prestes a escapar da gravidade terrestre. Sua órbita continua gravitacionalmente ligada à Terra.",
          en: "The Moon's gradual recession does not mean it is about to escape Earth's gravity. Its orbit remains gravitationally bound to Earth.",
        },
        {
          pt: "Para escapar, seria necessário atingir condições orbitais que permitissem superar o vínculo gravitacional com nosso planeta. A taxa atual de afastamento não indica que isso acontecerá em um futuro próximo.",
          en: "To escape, it would need to reach orbital conditions sufficient to overcome its gravitational binding to our planet. The current recession rate does not indicate that this will happen in the near future.",
        },
        {
          pt: "Além disso, o sistema Terra-Lua não evolui isoladamente. A gravidade solar, as mudanças na rotação terrestre e a evolução futura do Sol precisam ser consideradas em qualquer previsão de longo prazo.",
          en: "Furthermore, the Earth-Moon system does not evolve in isolation. Solar gravity, changes in Earth's rotation, and the Sun's future evolution must be considered in any long-term prediction.",
        },
        {
          pt: "Portanto, não existe evidência de que a Lua esteja simplesmente seguindo uma trajetória de fuga inevitável.",
          en: "Therefore, there is no evidence that the Moon is simply following an inevitable escape trajectory.",
        },
      ],
    },

    {
      id: "scientific-importance",

      heading: {
        pt: "Por que esse afastamento é importante para a ciência?",
        en: "Why is this recession important to science?",
      },

      paragraphs: [
        {
          pt: "O afastamento lunar fornece informações sobre a dissipação de energia das marés, a evolução orbital e a dinâmica rotacional da Terra.",
          en: "Lunar recession provides information about tidal energy dissipation, orbital evolution, and Earth's rotational dynamics.",
        },
        {
          pt: "As medições por laser também permitem estudar oscilações da Lua, conhecidas como librações, que fornecem pistas sobre a estrutura interna do satélite.",
          en: "Laser measurements also allow scientists to study oscillations of the Moon, known as librations, which provide clues about the satellite's internal structure.",
        },
        {
          pt: "Além disso, séries de observações extremamente precisas ajudam a testar previsões da relatividade geral e investigar possíveis desvios de modelos gravitacionais.",
          en: "Furthermore, extremely precise observational records help test predictions of general relativity and investigate possible deviations from gravitational models.",
        },
        {
          pt: "Um deslocamento de apenas alguns centímetros por ano torna-se, assim, uma ferramenta poderosa para compreender processos que operam em escalas planetárias.",
          en: "A displacement of only a few centimeters per year thus becomes a powerful tool for understanding processes operating on planetary scales.",
        },
      ],
    },

    {
      id: "conclusion",

      heading: {
        pt: "Uma dança gravitacional de bilhões de anos",
        en: "A gravitational dance lasting billions of years",
      },

      paragraphs: [
        {
          pt: "A Lua não ocupa uma órbita permanentemente fixa. Sua trajetória evolui lentamente em resposta às interações gravitacionais com a Terra e à dissipação de energia associada às marés.",
          en: "The Moon does not occupy a permanently fixed orbit. Its trajectory evolves slowly in response to gravitational interactions with Earth and energy dissipation associated with tides.",
        },
        {
          pt: "A taxa atual de afastamento, próxima de 3,8 centímetros por ano, é pequena, mas representa um processo que já modificou profundamente a história do sistema Terra-Lua.",
          en: "The current recession rate, close to 3.8 centimeters per year, is small but represents a process that has already profoundly changed the history of the Earth-Moon system.",
        },
        {
          pt: "Esse movimento também nos lembra que características aparentemente permanentes, como a duração do dia e a distância entre a Terra e seu satélite, podem mudar ao longo do tempo geológico.",
          en: "This motion also reminds us that seemingly permanent characteristics, such as day length and the distance between Earth and its satellite, can change over geological time.",
        },
        {
          pt: "A cada ano, a Lua se afasta apenas alguns centímetros. Mas essa pequena mudança revela bilhões de anos de evolução gravitacional.",
          en: "Each year, the Moon moves away by only a few centimeters. Yet this tiny change reveals billions of years of gravitational evolution.",
        },
      ],
    },
  ],

  references: [
    {
      title: "Moon Facts",
      authors: "NASA Science",
      url: "https://science.nasa.gov/moon/facts/",
    },
    {
      title: "Lunar Laser Ranging",
      authors: "NASA Goddard Space Flight Center",
      url: "https://science.nasa.gov/moon/",
    },
    {
      title: "Apollo 11 Laser Ranging Retroreflector",
      authors: "NASA",
      url: "https://science.nasa.gov/resource/apollo-11-laser-ranging-retroreflector/",
    },
    {
      title: "Lunar Laser Ranging: The Millimeter Challenge",
      authors: "Murphy, T. W.",
      year: 2013,
      url: "https://doi.org/10.1088/0034-4885/76/7/076901",
    },
    {
      title: "A review of the tidal evolution of the Earth-Moon system",
      authors: "Bills, B. G. & Ray, R. D.",
      year: 1999,
      url: "https://doi.org/10.1029/1999GL900394",
    },
  ],
};
