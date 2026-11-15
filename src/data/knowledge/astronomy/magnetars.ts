
import type { KnowledgePost } from "../../knowledge.types";

export const magnetars: KnowledgePost = {
  slug: "magnetars",

  title: {
    pt: "Magnetares: as estrelas com os campos magnéticos mais extremos",
    en: "Magnetars: stars with the most extreme magnetic fields",
  },

  description: {
    pt: "Magnetares são estrelas de nêutrons com campos magnéticos extraordinários, capazes de produzir explosões de alta energia. Descubra sua formação, seus fenômenos extremos e sua possível ligação com rajadas rápidas de rádio.",
    en: "Magnetars are neutron stars with extraordinary magnetic fields capable of producing high-energy outbursts. Explore their formation, extreme phenomena, and possible connection to fast radio bursts.",
  },

  category: "science",
  date: "2026-11-15",
  readingMinutes: 12,

  tags: [
    "astronomy",
    "astrophysics",
    "magnetars",
    "neutron-stars",
    "magnetic-fields",
    "gamma-rays",
    "fast-radio-bursts",
  ],

  cover: {
    src: "/images/knowledge/magnetars-cover.jpg",

    alt: {
      pt: "Ilustração artística de um magnetar, uma estrela de nêutrons cercada por um campo magnético extremamente intenso.",
      en: "Artist's illustration of a magnetar, a neutron star surrounded by an extremely intense magnetic field.",
    },

    caption: {
      pt: "Representação artística de um magnetar. As linhas de campo magnético são ilustrativas e não correspondem a estruturas diretamente visíveis.",
      en: "Artist's representation of a magnetar. The magnetic field lines are illustrative and do not correspond to directly visible structures.",
    },

    credit: "NASA",

    sourceUrl:
      "https://science.nasa.gov/universe/stars/neutron-stars/",
  },

  sections: [
    {
      id: "introduction",

      heading: {
        pt: "As estrelas mais magnéticas conhecidas",
        en: "The most magnetic stars known",
      },

      paragraphs: [
        {
          pt: "Entre os objetos mais extremos do Universo estão os magnetares, uma classe de estrelas de nêutrons caracterizada por campos magnéticos extraordinariamente intensos. Esses campos podem alcançar valores da ordem de 10¹⁴ a 10¹⁵ gauss na superfície, muito superiores aos campos magnéticos encontrados em ambientes terrestres.",
          en: "Among the most extreme objects in the Universe are magnetars, a class of neutron stars characterized by extraordinarily intense magnetic fields. These fields can reach values on the order of 10¹⁴ to 10¹⁵ gauss at the surface, far exceeding magnetic fields found in terrestrial environments.",
        },
        {
          pt: "Assim como outras estrelas de nêutrons, os magnetares concentram uma massa comparável à do Sol em uma esfera com apenas algumas dezenas de quilômetros de diâmetro.",
          en: "Like other neutron stars, magnetars concentrate a mass comparable to that of the Sun into a sphere only a few tens of kilometers across.",
        },
        {
          pt: "A combinação entre densidade extrema, gravidade intensa e campos magnéticos poderosos produz fenômenos que incluem explosões de raios X, emissões de raios gama e alterações na estrutura externa da estrela.",
          en: "The combination of extreme density, intense gravity, and powerful magnetic fields produces phenomena including X-ray bursts, gamma-ray emission, and changes in the star's outer structure.",
        },
        {
          pt: "Estudar magnetares permite investigar regimes físicos que não podem ser reproduzidos integralmente em laboratórios terrestres.",
          en: "Studying magnetars allows researchers to investigate physical regimes that cannot be fully reproduced in terrestrial laboratories.",
        },
      ],
    },

    {
      id: "neutron-stars",

      heading: {
        pt: "O que existe dentro de uma estrela de nêutrons?",
        en: "What exists inside a neutron star?",
      },

      paragraphs: [
        {
          pt: "Uma estrela de nêutrons pode se formar quando o núcleo de uma estrela massiva entra em colapso gravitacional. Em determinadas condições, esse processo acompanha uma explosão de supernova e deixa para trás um remanescente extremamente compacto.",
          en: "A neutron star can form when the core of a massive star undergoes gravitational collapse. Under certain conditions, this process accompanies a supernova explosion and leaves behind an extremely compact remnant.",
        },
        {
          pt: "Durante o colapso, a matéria é comprimida a densidades comparáveis às encontradas em núcleos atômicos. Prótons e elétrons podem participar de reações que produzem nêutrons e neutrinos.",
          en: "During collapse, matter is compressed to densities comparable to those found in atomic nuclei. Protons and electrons can participate in reactions that produce neutrons and neutrinos.",
        },
        {
          pt: "A estrutura interna exata permanece incerta. Modelos descrevem uma crosta sólida e regiões internas com matéria altamente comprimida, mas a composição do núcleo profundo ainda é objeto de investigação.",
          en: "The exact internal structure remains uncertain. Models describe a solid crust and inner regions containing highly compressed matter, but the composition of the deep core remains under investigation.",
        },
        {
          pt: "Os magnetares compartilham essas características gerais com outras estrelas de nêutrons, mas apresentam uma evolução fortemente influenciada pela energia armazenada em seus campos magnéticos.",
          en: "Magnetars share these general characteristics with other neutron stars, but their evolution is strongly influenced by energy stored in their magnetic fields.",
        },
      ],
    },

    {
      id: "magnetic-fields",

      heading: {
        pt: "Quão intenso é o campo magnético de um magnetar?",
        en: "How strong is a magnetar's magnetic field?",
      },

      paragraphs: [
        {
          pt: "O campo magnético terrestre possui intensidade típica de algumas dezenas de microteslas na superfície. Em comparação, campos superficiais de magnetares podem atingir aproximadamente 10¹⁰ a 10¹¹ teslas.",
          en: "Earth's magnetic field typically has a strength of a few tens of microteslas at the surface. In comparison, magnetar surface fields can reach approximately 10¹⁰ to 10¹¹ teslas.",
        },
        {
          pt: "Esses valores são tão elevados que influenciam profundamente o comportamento de partículas carregadas, da radiação e do plasma nas proximidades da estrela.",
          en: "These values are so high that they profoundly influence the behavior of charged particles, radiation, and plasma near the star.",
        },
        {
          pt: "É importante distinguir a intensidade do campo magnético de seus efeitos sobre objetos distantes. O campo diminui com a distância, e um magnetar localizado a milhares de anos-luz não exerce sobre a Terra os efeitos que produziria em sua vizinhança imediata.",
          en: "It is important to distinguish magnetic field strength from its effects on distant objects. The field decreases with distance, and a magnetar thousands of light-years away does not produce on Earth the effects it would cause in its immediate surroundings.",
        },
        {
          pt: "Em regiões muito próximas à superfície, o campo pode alterar a propagação da luz e favorecer fenômenos associados à eletrodinâmica quântica.",
          en: "In regions very close to the surface, the field can alter how light propagates and favor phenomena associated with quantum electrodynamics.",
        },
      ],
    },

    {
      id: "formation",

      heading: {
        pt: "Como um magnetar se forma?",
        en: "How does a magnetar form?",
      },

      paragraphs: [
        {
          pt: "A formação de campos magnéticos tão intensos ainda não é completamente compreendida. Uma das hipóteses envolve a amplificação de campos durante o colapso do núcleo de uma estrela massiva.",
          en: "The formation of such intense magnetic fields is not yet fully understood. One hypothesis involves magnetic field amplification during the collapse of a massive star's core.",
        },
        {
          pt: "A conservação aproximada do fluxo magnético pode aumentar a intensidade do campo quando a matéria é comprimida em uma região muito menor.",
          en: "Approximate conservation of magnetic flux can increase field strength when matter is compressed into a much smaller region.",
        },
        {
          pt: "Outro mecanismo proposto envolve processos de dínamo em uma protoestrela de nêutrons, nos quais movimentos internos e rotação rápida podem amplificar campos magnéticos.",
          en: "Another proposed mechanism involves dynamo processes in a protoneutron star, where internal motions and rapid rotation may amplify magnetic fields.",
        },
        {
          pt: "A importância relativa desses mecanismos depende das condições iniciais da estrela, da rotação, da estrutura interna e da evolução magnética. Diferentes caminhos de formação podem contribuir para a população observada.",
          en: "The relative importance of these mechanisms depends on the star's initial conditions, rotation, internal structure, and magnetic evolution. Different formation pathways may contribute to the observed population.",
        },
      ],
    },

    {
      id: "magnetic-energy",

      heading: {
        pt: "Uma estrela alimentada por energia magnética",
        en: "A star powered by magnetic energy",
      },

      paragraphs: [
        {
          pt: "Muitos pulsares convencionais obtêm a maior parte da energia de sua emissão observável a partir da perda gradual de energia rotacional. Nos magnetares, a evolução e a dissipação do campo magnético desempenham um papel central.",
          en: "Many conventional pulsars obtain most of their observable emission energy from the gradual loss of rotational energy. In magnetars, the evolution and dissipation of the magnetic field play a central role.",
        },
        {
          pt: "A energia armazenada no campo magnético pode ser transferida para a crosta e para a magnetosfera, produzindo aquecimento, emissão persistente de raios X e episódios de atividade intensa.",
          en: "Energy stored in the magnetic field can be transferred to the crust and magnetosphere, producing heating, persistent X-ray emission, and episodes of intense activity.",
        },
        {
          pt: "Com o tempo, o campo magnético pode evoluir e perder parte de sua energia. Esse processo influencia a temperatura, a atividade e o comportamento rotacional da estrela.",
          en: "Over time, the magnetic field can evolve and lose part of its energy. This process influences the star's temperature, activity, and rotational behavior.",
        },
        {
          pt: "Os magnetares demonstram que a rotação não é a única grande reserva energética capaz de alimentar emissões de uma estrela de nêutrons.",
          en: "Magnetars demonstrate that rotation is not the only major energy reservoir capable of powering neutron star emission.",
        },
      ],
    },

    {
      id: "starquakes",

      heading: {
        pt: "Terremotos estelares",
        en: "Starquakes",
      },

      paragraphs: [
        {
          pt: "A crosta de uma estrela de nêutrons é submetida a condições de pressão e densidade extraordinárias. Em magnetares, tensões associadas à evolução do campo magnético podem deformar essa estrutura.",
          en: "A neutron star's crust is subjected to extraordinary pressure and density conditions. In magnetars, stresses associated with magnetic field evolution can deform this structure.",
        },
        {
          pt: "Quando essas tensões ultrapassam determinados limites, podem ocorrer rearranjos da crosta, frequentemente descritos como terremotos estelares, ou starquakes.",
          en: "When these stresses exceed certain limits, crustal rearrangements may occur, often described as starquakes.",
        },
        {
          pt: "Esses eventos podem estar associados a alterações na magnetosfera e à liberação de energia na forma de radiação de alta energia.",
          en: "These events may be associated with magnetospheric changes and the release of energy as high-energy radiation.",
        },
        {
          pt: "Entretanto, nem toda explosão observada em um magnetar exige necessariamente uma fratura da crosta. Instabilidades e reconexão magnética também são investigadas como mecanismos capazes de produzir atividade explosiva.",
          en: "However, not every observed magnetar burst necessarily requires a crustal fracture. Instabilities and magnetic reconnection are also investigated as mechanisms capable of producing explosive activity.",
        },
      ],
    },

    {
      id: "giant-flares",

      heading: {
        pt: "Explosões gigantes de raios gama",
        en: "Giant gamma-ray flares",
      },

      paragraphs: [
        {
          pt: "Alguns magnetares produzem eventos extremamente energéticos conhecidos como giant flares, ou explosões gigantes. Esses episódios podem liberar enormes quantidades de energia eletromagnética em intervalos muito curtos.",
          en: "Some magnetars produce extremely energetic events known as giant flares. These episodes can release enormous amounts of electromagnetic energy in very short intervals.",
        },
        {
          pt: "Um dos exemplos mais conhecidos ocorreu em 27 de dezembro de 2004, associado ao magnetar SGR 1806-20, localizado na Via Láctea.",
          en: "One of the best-known examples occurred on December 27, 2004, associated with the magnetar SGR 1806-20, located in the Milky Way.",
        },
        {
          pt: "A explosão produziu um pulso inicial extremamente intenso de radiação de alta energia, seguido por uma emissão mais prolongada com modulação associada à rotação da estrela.",
          en: "The flare produced an extremely intense initial pulse of high-energy radiation, followed by a longer-lasting emission modulated by the star's rotation.",
        },
        {
          pt: "Eventos desse tipo são raros e fornecem informações sobre a estrutura magnética, a magnetosfera e a física de objetos compactos.",
          en: "Events of this kind are rare and provide information about magnetic structure, magnetospheres, and the physics of compact objects.",
        },
      ],
    },

    {
      id: "quantum-effects",

      heading: {
        pt: "Quando o magnetismo encontra a física quântica",
        en: "When magnetism meets quantum physics",
      },

      paragraphs: [
        {
          pt: "Em campos magnéticos suficientemente intensos, efeitos previstos pela eletrodinâmica quântica tornam-se importantes para a propagação da radiação.",
          en: "In sufficiently intense magnetic fields, effects predicted by quantum electrodynamics become important for radiation propagation.",
        },
        {
          pt: "Um conceito relevante é o campo magnético crítico quântico, aproximadamente 4,4 × 10¹³ gauss. Nessa escala, efeitos quânticos associados ao comportamento de elétrons e fótons podem se tornar especialmente significativos.",
          en: "A relevant concept is the quantum critical magnetic field, approximately 4.4 × 10¹³ gauss. At this scale, quantum effects associated with electrons and photons can become especially significant.",
        },
        {
          pt: "Entre os fenômenos investigados está a birrefringência do vácuo, na qual a propagação de diferentes estados de polarização da luz pode ser afetada por campos magnéticos intensos.",
          en: "Among the phenomena investigated is vacuum birefringence, in which the propagation of different polarization states of light can be affected by intense magnetic fields.",
        },
        {
          pt: "Observações polarimétricas de estrelas de nêutrons oferecem oportunidades para investigar esses efeitos, embora a interpretação dos dados dependa de modelos detalhados da atmosfera e da magnetosfera.",
          en: "Polarimetric observations of neutron stars offer opportunities to investigate these effects, although interpreting the data depends on detailed atmospheric and magnetospheric models.",
        },
      ],
    },

    {
      id: "fast-radio-bursts",

      heading: {
        pt: "Magnetares e as misteriosas rajadas rápidas de rádio",
        en: "Magnetars and mysterious fast radio bursts",
      },

      paragraphs: [
        {
          pt: "Rajadas rápidas de rádio, conhecidas pela sigla FRB, são pulsos intensos de ondas de rádio que normalmente duram apenas milissegundos.",
          en: "Fast radio bursts, known as FRBs, are intense pulses of radio waves that typically last only milliseconds.",
        },
        {
          pt: "Durante anos, a origem desses sinais permaneceu incerta. Diversos modelos foram propostos, incluindo mecanismos associados a estrelas de nêutrons altamente magnetizadas.",
          en: "For years, the origin of these signals remained uncertain. Several models were proposed, including mechanisms associated with highly magnetized neutron stars.",
        },
        {
          pt: "Em abril de 2020, o magnetar galáctico SGR 1935+2154 produziu uma rajada de rádio extraordinariamente intensa, detectada por instrumentos como CHIME e STARE2, acompanhada de atividade em raios X.",
          en: "In April 2020, the Galactic magnetar SGR 1935+2154 produced an extraordinarily intense radio burst, detected by instruments including CHIME and STARE2, accompanied by X-ray activity.",
        },
        {
          pt: "A observação forneceu evidências importantes de que magnetares podem produzir pelo menos alguns fenômenos semelhantes às rajadas rápidas de rádio extragalácticas.",
          en: "The observation provided important evidence that magnetars can produce at least some phenomena resembling extragalactic fast radio bursts.",
        },
        {
          pt: "Entretanto, ainda não está estabelecido que todos os FRBs sejam produzidos por magnetares, nem que todos compartilhem exatamente o mesmo mecanismo físico.",
          en: "However, it has not been established that all FRBs are produced by magnetars or that all share exactly the same physical mechanism.",
        },
      ],
    },

    {
      id: "magnetars-vs-pulsars",

      heading: {
        pt: "Qual é a diferença entre um magnetar e um pulsar?",
        en: "What is the difference between a magnetar and a pulsar?",
      },

      paragraphs: [
        {
          pt: "Magnetares e pulsares pertencem à família das estrelas de nêutrons, mas esses termos descrevem propriedades diferentes.",
          en: "Magnetars and pulsars belong to the neutron star family, but these terms describe different properties.",
        },
        {
          pt: "Um pulsar é identificado principalmente pela emissão de pulsos periódicos observáveis, geralmente associados à rotação de uma estrela de nêutrons.",
          en: "A pulsar is primarily identified by observable periodic pulses, generally associated with the rotation of a neutron star.",
        },
        {
          pt: "Um magnetar é caracterizado principalmente pela importância de seu campo magnético extremamente intenso na produção de sua atividade e emissão energética.",
          en: "A magnetar is primarily characterized by the importance of its extremely intense magnetic field in producing its activity and energetic emission.",
        },
        {
          pt: "Essas categorias não são mutuamente exclusivas. Alguns magnetares apresentam pulsações observáveis, e existem estrelas de nêutrons cujas propriedades aproximam características tradicionalmente associadas aos dois grupos.",
          en: "These categories are not mutually exclusive. Some magnetars exhibit observable pulsations, and some neutron stars have properties bridging characteristics traditionally associated with both groups.",
        },
      ],
    },

    {
      id: "observations",

      heading: {
        pt: "Como os cientistas estudam magnetares?",
        en: "How do scientists study magnetars?",
      },

      paragraphs: [
        {
          pt: "Como os magnetares estão muito distantes, pesquisadores dependem principalmente de observações eletromagnéticas para investigar suas propriedades.",
          en: "Because magnetars are very distant, researchers depend primarily on electromagnetic observations to investigate their properties.",
        },
        {
          pt: "Telescópios de raios X e raios gama permitem registrar explosões, acompanhar variações de luminosidade e medir períodos de rotação.",
          en: "X-ray and gamma-ray telescopes can record bursts, track luminosity variations, and measure rotation periods.",
        },
        {
          pt: "A evolução do período de rotação também pode fornecer estimativas do campo magnético dipolar sob determinadas hipóteses físicas. Essas estimativas não descrevem necessariamente toda a complexidade do campo interno ou multipolar.",
          en: "Changes in the rotation period can also provide estimates of the dipolar magnetic field under certain physical assumptions. These estimates do not necessarily describe the full complexity of the internal or multipolar field.",
        },
        {
          pt: "Instrumentos como Chandra, XMM-Newton, Swift, Fermi e NICER contribuíram para ampliar o conhecimento sobre a atividade dessas estrelas.",
          en: "Instruments such as Chandra, XMM-Newton, Swift, Fermi, and NICER have contributed to expanding our knowledge of these stars' activity.",
        },
      ],
    },

    {
      id: "future",

      heading: {
        pt: "O que ainda não sabemos?",
        en: "What do we still not know?",
      },

      paragraphs: [
        {
          pt: "Apesar de décadas de observações, a origem exata dos campos magnéticos dos magnetares continua sendo investigada. Ainda existem dúvidas sobre a importância dos mecanismos de amplificação durante a formação e sobre a evolução posterior desses campos.",
          en: "Despite decades of observations, the exact origin of magnetar magnetic fields remains under investigation. Questions remain about the importance of amplification mechanisms during formation and the subsequent evolution of these fields.",
        },
        {
          pt: "Também não compreendemos completamente os mecanismos que desencadeiam suas explosões mais intensas ou a relação entre instabilidades magnéticas, deformações da crosta e emissão de radiação.",
          en: "We also do not fully understand the mechanisms that trigger their most intense outbursts or the relationship among magnetic instabilities, crustal deformation, and radiation emission.",
        },
        {
          pt: "Outro desafio é determinar até que ponto magnetares explicam a diversidade de rajadas rápidas de rádio observadas em outras galáxias.",
          en: "Another challenge is determining the extent to which magnetars explain the diversity of fast radio bursts observed in other galaxies.",
        },
        {
          pt: "Observações futuras em múltiplas faixas do espectro eletromagnético poderão ajudar a distinguir diferentes modelos físicos e revelar novas propriedades desses objetos.",
          en: "Future observations across multiple electromagnetic wavelengths may help distinguish different physical models and reveal new properties of these objects.",
        },
      ],
    },

    {
      id: "conclusion",

      heading: {
        pt: "Pequenas estrelas, fenômenos gigantescos",
        en: "Small stars, enormous phenomena",
      },

      paragraphs: [
        {
          pt: "Magnetares concentram condições físicas extraordinárias em volumes relativamente pequenos. Seus campos magnéticos podem influenciar a matéria, a radiação e a estrutura externa da estrela de maneiras raramente encontradas no Universo observável.",
          en: "Magnetars concentrate extraordinary physical conditions into relatively small volumes. Their magnetic fields can influence matter, radiation, and the star's outer structure in ways rarely encountered in the observable Universe.",
        },
        {
          pt: "Esses objetos ajudam a investigar a física de altas energias, a estrutura das estrelas de nêutrons, os efeitos quânticos de campos intensos e a origem de algumas das emissões mais rápidas e energéticas detectadas pelos telescópios.",
          en: "These objects help investigate high-energy physics, neutron star structure, quantum effects in intense fields, and the origins of some of the fastest and most energetic emissions detected by telescopes.",
        },
        {
          pt: "Embora sejam frequentemente chamados de estrelas mortas, os magnetares continuam extremamente ativos, transformando a energia de seus campos magnéticos em sinais que atravessam enormes distâncias pelo espaço.",
          en: "Although they are often called dead stars, magnetars remain extremely active, transforming energy stored in their magnetic fields into signals that travel enormous distances through space.",
        },
        {
          pt: "Estudar um magnetar é observar o que acontece quando a matéria e o magnetismo são levados a alguns dos limites mais extremos conhecidos pela física.",
          en: "Studying a magnetar means observing what happens when matter and magnetism are pushed toward some of the most extreme limits known to physics.",
        },
      ],
    },
  ],

  references: [
    {
      title: "Neutron Stars",
      authors: "NASA Science",
      url: "https://science.nasa.gov/universe/stars/neutron-stars/",
    },
    {
      title: "The strongest magnetic fields in the universe: how strong can they become?",
      authors: "Turolla, R., Zane, S. & Watts, A. L.",
      year: 2015,
      url: "https://doi.org/10.1088/0034-4885/78/11/116901",
    },
    {
      title: "Magnetars",
      authors: "Kaspi, V. M. & Beloborodov, A. M.",
      year: 2017,
      url: "https://doi.org/10.1146/annurev-astro-081915-023329",
    },
    {
      title: "A bright millisecond-duration radio burst from a Galactic magnetar",
      authors: "The CHIME/FRB Collaboration",
      year: 2020,
      url: "https://doi.org/10.1038/s41586-020-2863-y",
    },
    {
      title: "A fast radio burst associated with a Galactic magnetar",
      authors: "Bochenek, C. D. et al.",
      year: 2020,
      url: "https://doi.org/10.1038/s41586-020-2872-x",
    },
    {
      title: "Magnetars",
      authors: "McGill Online Magnetar Catalog",
      url: "https://www.physics.mcgill.ca/~pulsar/magnetar/main.html",
    },
  ],
};
