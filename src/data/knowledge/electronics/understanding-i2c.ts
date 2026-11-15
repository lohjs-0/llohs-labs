
import type { KnowledgePost } from "../../knowledge.types";

export const understandingI2c: KnowledgePost = {
  slug: "understanding-i2c",

  title: {
    pt: "Entendendo o I²C: comunicação digital usando apenas dois fios",
    en: "Understanding I²C: digital communication using just two wires",
  },

  description: {
    pt: "Descubra como o protocolo I²C permite a comunicação entre microcontroladores, sensores e circuitos integrados. Entenda SDA, SCL, endereçamento, ACK/NACK, pull-ups, temporização, arbitragem e aplicações práticas.",
    en: "Discover how the I²C protocol enables communication between microcontrollers, sensors, and integrated circuits. Understand SDA, SCL, addressing, ACK/NACK, pull-ups, timing, arbitration, and practical applications.",
  },

  category: "electronics",
  date: "2026-11-15",
  readingMinutes: 17,

  tags: [
    "electronics",
    "embedded-systems",
    "i2c",
    "microcontrollers",
    "digital-communication",
    "sensors",
    "hardware",
    "esp32",
    "arduino",
  ],

  cover: {
    src: "/images/knowledge/understanding-i2c-cover.jpg",

    alt: {
      pt: "Circuito eletrônico com microcontrolador e módulos conectados por um barramento I²C.",
      en: "Electronic circuit with a microcontroller and modules connected through an I²C bus.",
    },

    caption: {
      pt: "O I²C permite conectar múltiplos dispositivos por meio de duas linhas de sinal compartilhadas: SDA e SCL.",
      en: "I²C allows multiple devices to connect through two shared signal lines: SDA and SCL.",
    },

    credit: "A definir conforme a imagem escolhida",

    sourceUrl:
      "https://www.nxp.com/docs/en/user-guide/UM10204.pdf",
  },

  sections: [
    {
      id: "introduction",

      heading: {
        pt: "Por que precisamos de protocolos de comunicação?",
        en: "Why do we need communication protocols?",
      },

      paragraphs: [
        {
          pt: "Sistemas eletrônicos modernos frequentemente utilizam diversos circuitos integrados especializados. Um microcontrolador pode precisar receber informações de sensores, controlar displays, consultar relógios de tempo real e acessar memórias externas.",
          en: "Modern electronic systems frequently use several specialized integrated circuits. A microcontroller may need to receive sensor data, control displays, query real-time clocks, and access external memories.",
        },
        {
          pt: "Conectar cada dispositivo utilizando muitas linhas independentes aumentaria a complexidade do circuito, o número de pinos necessários e a dificuldade de expansão do sistema.",
          en: "Connecting each device using many independent lines would increase circuit complexity, the number of required pins, and the difficulty of expanding the system.",
        },
        {
          pt: "O protocolo I²C foi desenvolvido para permitir que diferentes componentes eletrônicos compartilhem um meio de comunicação relativamente simples.",
          en: "The I²C protocol was developed to allow different electronic components to share a relatively simple communication medium.",
        },
        {
          pt: "Seu funcionamento combina regras elétricas, temporização, endereçamento e controle de acesso ao barramento.",
          en: "Its operation combines electrical rules, timing, addressing, and bus access control.",
        },
      ],
    },

    {
      id: "history",

      heading: {
        pt: "A origem do protocolo I²C",
        en: "The origin of the I²C protocol",
      },

      paragraphs: [
        {
          pt: "O I²C foi desenvolvido pela Philips Semiconductors, posteriormente integrada à NXP Semiconductors, no início da década de 1980.",
          en: "I²C was developed by Philips Semiconductors, later incorporated into NXP Semiconductors, in the early 1980s.",
        },
        {
          pt: "O objetivo era simplificar a comunicação entre circuitos integrados presentes em equipamentos eletrônicos.",
          en: "The goal was to simplify communication among integrated circuits used in electronic equipment.",
        },
        {
          pt: "Ao longo do tempo, o protocolo foi ampliado para oferecer diferentes velocidades, recursos adicionais e maior flexibilidade.",
          en: "Over time, the protocol was expanded to provide different speeds, additional features, and greater flexibility.",
        },
        {
          pt: "Atualmente, o I²C é amplamente utilizado em sistemas embarcados, placas de desenvolvimento, sensores e dispositivos eletrônicos de consumo.",
          en: "Today, I²C is widely used in embedded systems, development boards, sensors, and consumer electronic devices.",
        },
      ],
    },

    {
      id: "two-wires",

      heading: {
        pt: "SDA e SCL: as duas linhas do barramento",
        en: "SDA and SCL: the two bus lines",
      },

      paragraphs: [
        {
          pt: "O barramento I²C utiliza duas linhas de sinal: SDA, de Serial Data, e SCL, de Serial Clock.",
          en: "The I²C bus uses two signal lines: SDA, for Serial Data, and SCL, for Serial Clock.",
        },
        {
          pt: "A linha SDA transporta os bits de dados e informações de controle, enquanto a linha SCL fornece a referência de temporização para a transferência.",
          en: "The SDA line carries data bits and control information, while the SCL line provides the timing reference for transfers.",
        },
        {
          pt: "As duas linhas são compartilhadas entre os dispositivos conectados ao mesmo barramento.",
          en: "Both lines are shared among devices connected to the same bus.",
        },
        {
          pt: "Além dessas duas linhas de sinal, os dispositivos precisam de alimentação apropriada e de uma referência elétrica comum, normalmente GND. Portanto, dois fios se refere às linhas de comunicação, não necessariamente ao número total de conexões físicas.",
          en: "In addition to these two signal lines, devices require suitable power and a common electrical reference, normally GND. Therefore, two wires refers to the communication lines, not necessarily the total number of physical connections.",
        },
      ],
    },

    {
      id: "bus-architecture",

      heading: {
        pt: "Como vários dispositivos compartilham o mesmo barramento?",
        en: "How do multiple devices share the same bus?",
      },

      paragraphs: [
        {
          pt: "Em uma configuração comum, um controlador inicia a comunicação e seleciona um dispositivo de destino por meio de seu endereço.",
          en: "In a common configuration, a controller initiates communication and selects a target device through its address.",
        },
        {
          pt: "Todos os dispositivos conectados ao barramento observam os sinais, mas apenas o dispositivo endereçado deve responder à transação, salvo situações específicas previstas pelo protocolo.",
          en: "All devices connected to the bus observe the signals, but only the addressed device should respond to the transaction, except for specific situations defined by the protocol.",
        },
        {
          pt: "Um mesmo controlador pode conversar com diferentes sensores sem precisar de um par exclusivo de linhas SDA e SCL para cada um.",
          en: "A single controller can communicate with different sensors without needing a dedicated pair of SDA and SCL lines for each one.",
        },
        {
          pt: "O protocolo também admite configurações com múltiplos controladores, embora sistemas embarcados simples frequentemente utilizem apenas um.",
          en: "The protocol also supports configurations with multiple controllers, although simple embedded systems frequently use only one.",
        },
      ],
    },

    {
      id: "open-drain",

      heading: {
        pt: "Open-drain: por que os dispositivos não forçam o nível alto?",
        en: "Open-drain: why don't devices actively drive the line high?",
      },

      paragraphs: [
        {
          pt: "Uma característica fundamental do I²C é o uso de saídas do tipo open-drain, ou equivalentes open-collector.",
          en: "A fundamental characteristic of I²C is the use of open-drain outputs, or equivalent open-collector outputs.",
        },
        {
          pt: "Nessa configuração, os dispositivos normalmente conseguem puxar a linha para o nível lógico baixo ou liberar a linha, mas não a forçam diretamente para o nível alto durante a operação convencional.",
          en: "In this configuration, devices can normally pull the line to logic low or release it, but do not actively drive it high during conventional operation.",
        },
        {
          pt: "Quando nenhum dispositivo está puxando a linha para baixo, um resistor de pull-up faz com que a tensão retorne ao nível alto.",
          en: "When no device is pulling the line low, a pull-up resistor causes the voltage to return to the high level.",
        },
        {
          pt: "Esse comportamento permite que múltiplos dispositivos compartilhem as linhas sem que um deles precise forçar nível alto enquanto outro força nível baixo.",
          en: "This behavior allows multiple devices to share the lines without one needing to drive high while another drives low.",
        },
      ],
    },

    {
      id: "pull-up-resistors",

      heading: {
        pt: "A importância dos resistores de pull-up",
        en: "The importance of pull-up resistors",
      },

      paragraphs: [
        {
          pt: "Os resistores de pull-up conectam SDA e SCL a uma tensão de referência apropriada para os dispositivos do barramento.",
          en: "Pull-up resistors connect SDA and SCL to a reference voltage appropriate for the devices on the bus.",
        },
        {
          pt: "Sem esses resistores ou outro mecanismo de elevação de nível compatível, as linhas convencionais open-drain não conseguem retornar adequadamente ao estado alto.",
          en: "Without these resistors or another compatible pull-up mechanism, conventional open-drain lines cannot properly return to the high state.",
        },
        {
          pt: "A escolha da resistência depende de fatores como tensão de alimentação, capacitância do barramento, corrente máxima de nível baixo e tempo de subida permitido.",
          en: "Choosing the resistance depends on factors such as supply voltage, bus capacitance, maximum low-level current, and permitted rise time.",
        },
        {
          pt: "Valores como 4,7 kΩ são comuns em montagens didáticas, mas não são universais. Resistências inadequadas podem provocar bordas lentas, consumo excessivo ou falhas de comunicação.",
          en: "Values such as 4.7 kΩ are common in educational setups, but they are not universal. Unsuitable resistances can cause slow edges, excessive current consumption, or communication failures.",
        },
      ],
    },

    {
      id: "idle-state",

      heading: {
        pt: "O estado de repouso do barramento",
        en: "The bus idle state",
      },

      paragraphs: [
        {
          pt: "Quando o barramento I²C está livre e nenhum dispositivo mantém as linhas em nível baixo, SDA e SCL permanecem em nível alto devido aos pull-ups.",
          en: "When the I²C bus is free and no device holds the lines low, SDA and SCL remain high because of the pull-ups.",
        },
        {
          pt: "Esse estado é importante porque as condições de início e parada são reconhecidas a partir de transições específicas dos sinais.",
          en: "This state is important because start and stop conditions are recognized from specific signal transitions.",
        },
        {
          pt: "Uma linha permanentemente baixa pode indicar uma transação incompleta, um dispositivo travado, um curto-circuito ou outro problema elétrico.",
          en: "A permanently low line may indicate an incomplete transaction, a stuck device, a short circuit, or another electrical problem.",
        },
        {
          pt: "Por isso, verificar os níveis de repouso de SDA e SCL costuma ser uma das primeiras etapas de diagnóstico de falhas no I²C.",
          en: "For this reason, checking the idle levels of SDA and SCL is often one of the first steps when diagnosing I²C failures.",
        },
      ],
    },

    {
      id: "start-condition",

      heading: {
        pt: "START: como uma comunicação começa?",
        en: "START: how does communication begin?",
      },

      paragraphs: [
        {
          pt: "Uma transação I²C normalmente começa com uma condição START, gerada pelo controlador.",
          en: "An I²C transaction normally begins with a START condition generated by the controller.",
        },
        {
          pt: "Essa condição ocorre quando SDA passa de nível alto para baixo enquanto SCL permanece em nível alto.",
          en: "This condition occurs when SDA transitions from high to low while SCL remains high.",
        },
        {
          pt: "A transição informa aos dispositivos conectados que uma comunicação está sendo iniciada.",
          en: "The transition informs connected devices that a communication is being initiated.",
        },
        {
          pt: "Após o START, o controlador transmite as informações necessárias para selecionar o dispositivo e definir o tipo de operação.",
          en: "After START, the controller transmits the information needed to select the device and define the operation type.",
        },
      ],
    },

    {
      id: "addressing",

      heading: {
        pt: "Endereçamento: como selecionar um dispositivo?",
        en: "Addressing: how is a device selected?",
      },

      paragraphs: [
        {
          pt: "O I²C utiliza endereços para identificar os dispositivos de destino conectados ao barramento.",
          en: "I²C uses addresses to identify target devices connected to the bus.",
        },
        {
          pt: "O formato mais comum utiliza endereços de 7 bits. Também existe um formato de endereçamento de 10 bits previsto pelo protocolo.",
          en: "The most common format uses 7-bit addresses. The protocol also defines a 10-bit addressing format.",
        },
        {
          pt: "Em uma transferência convencional com endereço de 7 bits, o controlador envia os sete bits de endereço seguidos por um bit que indica leitura ou escrita.",
          en: "In a conventional transfer using 7-bit addressing, the controller sends the seven address bits followed by a bit indicating read or write.",
        },
        {
          pt: "Nem todos os valores de endereço estão disponíveis para dispositivos comuns, pois determinados padrões são reservados para funções especiais do protocolo.",
          en: "Not every address value is available for ordinary devices because certain patterns are reserved for special protocol functions.",
        },
        {
          pt: "Quando dois dispositivos possuem o mesmo endereço e não oferecem mecanismos de configuração, podem ocorrer conflitos de comunicação.",
          en: "When two devices have the same address and provide no configuration mechanism, communication conflicts may occur.",
        },
      ],
    },

    {
      id: "read-write",

      heading: {
        pt: "O bit R/W: leitura ou escrita",
        en: "The R/W bit: read or write",
      },

      paragraphs: [
        {
          pt: "No endereçamento convencional de 7 bits, o oitavo bit do primeiro byte transmitido indica a direção da transferência.",
          en: "In conventional 7-bit addressing, the eighth bit of the first transmitted byte indicates the transfer direction.",
        },
        {
          pt: "Quando o bit R/W é 0, o controlador solicita uma operação de escrita no dispositivo de destino.",
          en: "When the R/W bit is 0, the controller requests a write operation to the target device.",
        },
        {
          pt: "Quando o bit R/W é 1, o controlador solicita uma operação de leitura.",
          en: "When the R/W bit is 1, the controller requests a read operation.",
        },
        {
          pt: "É importante distinguir o endereço de 7 bits do byte de endereço completo. Algumas documentações apresentam valores já deslocados com o bit R/W, o que pode causar confusão durante a programação.",
          en: "It is important to distinguish the 7-bit address from the complete address byte. Some documentation presents values already shifted to include the R/W bit, which can cause confusion during programming.",
        },
      ],
    },

    {
      id: "ack-nack",

      heading: {
        pt: "ACK e NACK: confirmando a comunicação",
        en: "ACK and NACK: acknowledging communication",
      },

      paragraphs: [
        {
          pt: "Após cada grupo de oito bits transmitidos, existe um nono pulso de clock destinado à confirmação da transferência.",
          en: "After each group of eight transmitted bits, a ninth clock pulse is used for transfer acknowledgment.",
        },
        {
          pt: "Durante esse pulso, o transmissor libera SDA para que o receptor possa sinalizar sua resposta.",
          en: "During this pulse, the transmitter releases SDA so the receiver can signal its response.",
        },
        {
          pt: "Um ACK, ou acknowledge, é representado por SDA em nível baixo durante o pulso de confirmação.",
          en: "An ACK, or acknowledge, is represented by SDA being low during the acknowledgment clock pulse.",
        },
        {
          pt: "Um NACK, ou not acknowledge, corresponde a SDA permanecendo em nível alto.",
          en: "A NACK, or not acknowledge, corresponds to SDA remaining high.",
        },
        {
          pt: "O NACK pode indicar ausência de resposta, indisponibilidade do dispositivo ou o encerramento intencional de uma leitura pelo controlador. Portanto, nem todo NACK representa necessariamente uma falha.",
          en: "A NACK may indicate no response, device unavailability, or intentional termination of a read by the controller. Therefore, not every NACK necessarily represents an error.",
        },
      ],
    },

    {
      id: "data-transfer",

      heading: {
        pt: "Como os dados são transmitidos?",
        en: "How is data transmitted?",
      },

      paragraphs: [
        {
          pt: "Em uma transferência I²C convencional, os dados são enviados em grupos de oito bits, normalmente começando pelo bit mais significativo.",
          en: "In a conventional I²C transfer, data is sent in groups of eight bits, normally beginning with the most significant bit.",
        },
        {
          pt: "Em geral, o valor de SDA deve permanecer estável enquanto SCL está em nível alto, exceto durante condições START e STOP.",
          en: "In general, SDA must remain stable while SCL is high, except during START and STOP conditions.",
        },
        {
          pt: "As alterações dos bits de dados normalmente ocorrem enquanto SCL está em nível baixo.",
          en: "Data-bit transitions normally occur while SCL is low.",
        },
        {
          pt: "Cada byte é seguido por uma etapa de ACK ou NACK, permitindo que o receptor participe do controle da transferência.",
          en: "Each byte is followed by an ACK or NACK phase, allowing the receiver to participate in transfer control.",
        },
      ],
    },

    {
      id: "stop-condition",

      heading: {
        pt: "STOP: encerrando a comunicação",
        en: "STOP: ending communication",
      },

      paragraphs: [
        {
          pt: "Uma condição STOP sinaliza o encerramento da transação e a liberação do barramento pelo controlador.",
          en: "A STOP condition signals the end of the transaction and the controller's release of the bus.",
        },
        {
          pt: "Ela ocorre quando SDA passa de nível baixo para alto enquanto SCL permanece em nível alto.",
          en: "It occurs when SDA transitions from low to high while SCL remains high.",
        },
        {
          pt: "Após o STOP, o barramento pode retornar ao estado livre, permitindo que uma nova transação seja iniciada.",
          en: "After STOP, the bus can return to the idle state, allowing a new transaction to begin.",
        },
        {
          pt: "Nem toda sequência de operações exige um STOP entre etapas. O protocolo também permite condições de START repetido.",
          en: "Not every sequence of operations requires a STOP between stages. The protocol also permits repeated START conditions.",
        },
      ],
    },

    {
      id: "repeated-start",

      heading: {
        pt: "Repeated START: continuando uma transação",
        en: "Repeated START: continuing a transaction",
      },

      paragraphs: [
        {
          pt: "O repeated START permite iniciar uma nova fase de comunicação sem liberar o barramento por meio de uma condição STOP intermediária.",
          en: "A repeated START allows a new communication phase to begin without releasing the bus through an intermediate STOP condition.",
        },
        {
          pt: "Esse recurso é particularmente útil quando o controlador precisa escrever um endereço de registrador interno e, em seguida, ler o conteúdo desse registrador.",
          en: "This feature is particularly useful when a controller needs to write an internal register address and then read that register's contents.",
        },
        {
          pt: "Por exemplo, um sensor pode exigir que o controlador informe qual registrador deseja consultar antes de iniciar a leitura.",
          en: "For example, a sensor may require the controller to specify which register it wants to access before beginning the read.",
        },
        {
          pt: "O repeated START mantém a continuidade lógica da operação e evita que outro controlador assuma o barramento entre essas fases, quando o protocolo e a implementação oferecem esse controle.",
          en: "Repeated START maintains the logical continuity of the operation and prevents another controller from taking over the bus between these phases when the protocol and implementation provide this control.",
        },
      ],
    },

    {
      id: "register-reading",

      heading: {
        pt: "Exemplo: lendo um registrador de um sensor",
        en: "Example: reading a sensor register",
      },

      paragraphs: [
        {
          pt: "Considere um sensor hipotético com endereço I²C de 7 bits igual a 0x48 e um registrador de dados localizado em 0x01.",
          en: "Consider a hypothetical sensor with a 7-bit I²C address of 0x48 and a data register located at 0x01.",
        },
        {
          pt: "O controlador pode iniciar a comunicação, enviar o endereço 0x48 com o bit de escrita e transmitir o valor 0x01 para selecionar o registrador.",
          en: "The controller may start communication, send address 0x48 with the write bit, and transmit 0x01 to select the register.",
        },
        {
          pt: "Em seguida, pode gerar um repeated START, enviar novamente o endereço 0x48 com o bit de leitura e receber o conteúdo do registrador.",
          en: "It may then generate a repeated START, send address 0x48 again with the read bit, and receive the register contents.",
        },
        {
          pt: "Se apenas um byte for lido, o controlador normalmente responde com NACK ao final desse byte e então gera STOP.",
          en: "If only one byte is read, the controller normally responds with NACK after that byte and then generates STOP.",
        },
        {
          pt: "Essa sequência é apenas um exemplo. A organização de registradores e as regras específicas de leitura dependem do datasheet de cada dispositivo.",
          en: "This sequence is only an example. Register organization and specific reading rules depend on each device's datasheet.",
        },
      ],
    },

    {
      id: "clock-stretching",

      heading: {
        pt: "Clock stretching: quando um dispositivo precisa de mais tempo",
        en: "Clock stretching: when a device needs more time",
      },

      paragraphs: [
        {
          pt: "Alguns dispositivos I²C podem precisar de tempo adicional para preparar dados ou concluir operações internas.",
          en: "Some I²C devices may need additional time to prepare data or complete internal operations.",
        },
        {
          pt: "O clock stretching permite que um dispositivo compatível mantenha SCL em nível baixo, atrasando a continuação da transferência.",
          en: "Clock stretching allows a compatible device to hold SCL low, delaying the continuation of the transfer.",
        },
        {
          pt: "O controlador precisa considerar o estado real da linha SCL para reconhecer quando o barramento pode continuar.",
          en: "The controller must consider the actual state of the SCL line to recognize when the bus can continue.",
        },
        {
          pt: "Entretanto, nem todos os controladores, bibliotecas e modos de operação oferecem o mesmo suporte a clock stretching. A compatibilidade deve ser verificada na documentação dos componentes.",
          en: "However, not all controllers, libraries, and operating modes provide the same support for clock stretching. Compatibility must be checked in component documentation.",
        },
      ],
    },

    {
      id: "multi-controller",

      heading: {
        pt: "O I²C pode ter mais de um controlador?",
        en: "Can I²C have more than one controller?",
      },

      paragraphs: [
        {
          pt: "Embora muitas aplicações utilizem apenas um controlador, o I²C também prevê a possibilidade de múltiplos controladores conectados ao mesmo barramento.",
          en: "Although many applications use only one controller, I²C also supports the possibility of multiple controllers connected to the same bus.",
        },
        {
          pt: "Nessa configuração, diferentes controladores podem tentar iniciar uma comunicação.",
          en: "In this configuration, different controllers may attempt to initiate communication.",
        },
        {
          pt: "Para evitar conflitos destrutivos, o protocolo define mecanismos de sincronização e arbitragem baseados no comportamento compartilhado das linhas.",
          en: "To avoid destructive conflicts, the protocol defines synchronization and arbitration mechanisms based on the shared behavior of the lines.",
        },
        {
          pt: "A implementação correta desses mecanismos depende de controladores com suporte apropriado à operação multi-controller.",
          en: "Correct implementation of these mechanisms depends on controllers with appropriate multi-controller support.",
        },
      ],
    },

    {
      id: "arbitration",

      heading: {
        pt: "Arbitragem: o que acontece quando dois controladores transmitem?",
        en: "Arbitration: what happens when two controllers transmit?",
      },

      paragraphs: [
        {
          pt: "A arbitragem I²C aproveita a característica open-drain das linhas, na qual o nível baixo prevalece quando qualquer dispositivo puxa o sinal para baixo.",
          en: "I²C arbitration takes advantage of the open-drain characteristic of the lines, where the low level prevails whenever any device pulls the signal low.",
        },
        {
          pt: "Durante a transmissão, um controlador pode comparar o nível que pretende enviar com o nível efetivamente observado em SDA.",
          en: "During transmission, a controller can compare the level it intends to send with the level actually observed on SDA.",
        },
        {
          pt: "Se um controlador tenta transmitir nível alto, mas observa nível baixo enquanto SCL está alto, ele reconhece que perdeu a arbitragem.",
          en: "If a controller attempts to transmit high but observes low while SCL is high, it recognizes that it has lost arbitration.",
        },
        {
          pt: "O controlador que perde a arbitragem deve interromper sua participação como transmissor, permitindo que a outra comunicação prossiga.",
          en: "The controller that loses arbitration must stop participating as a transmitter, allowing the other communication to proceed.",
        },
        {
          pt: "Esse mecanismo permite resolver determinadas disputas sem necessariamente corromper os bits já transmitidos.",
          en: "This mechanism allows certain conflicts to be resolved without necessarily corrupting the bits already transmitted.",
        },
      ],
    },

    {
      id: "speed-modes",

      heading: {
        pt: "Quais são as velocidades do I²C?",
        en: "What are the I²C speed modes?",
      },

      paragraphs: [
        {
          pt: "O I²C possui diferentes modos de velocidade definidos por suas especificações.",
          en: "I²C has different speed modes defined by its specifications.",
        },
        {
          pt: "O Standard-mode opera até 100 kbit/s, enquanto o Fast-mode alcança até 400 kbit/s.",
          en: "Standard-mode operates at up to 100 kbit/s, while Fast-mode reaches up to 400 kbit/s.",
        },
        {
          pt: "O Fast-mode Plus permite até 1 Mbit/s, e o High-speed mode pode alcançar até 3,4 Mbit/s em condições compatíveis.",
          en: "Fast-mode Plus supports up to 1 Mbit/s, and High-speed mode can reach up to 3.4 Mbit/s under compatible conditions.",
        },
        {
          pt: "A especificação também contempla Ultra Fast-mode, de até 5 Mbit/s, que apresenta características próprias e não deve ser tratado como simplesmente mais uma configuração intercambiável do barramento bidirecional convencional.",
          en: "The specification also includes Ultra Fast-mode, up to 5 Mbit/s, which has distinct characteristics and should not be treated as merely another interchangeable configuration of the conventional bidirectional bus.",
        },
        {
          pt: "A velocidade utilizável depende das capacidades dos dispositivos, da configuração elétrica, da capacitância e da qualidade dos sinais.",
          en: "Usable speed depends on device capabilities, electrical configuration, capacitance, and signal quality.",
        },
      ],
    },

    {
      id: "capacitance",

      heading: {
        pt: "Capacitância e limitações físicas do barramento",
        en: "Capacitance and physical bus limitations",
      },

      paragraphs: [
        {
          pt: "As linhas SDA e SCL apresentam capacitância associada a trilhas de circuito impresso, fios, conectores e entradas dos dispositivos.",
          en: "SDA and SCL have capacitance associated with printed circuit board traces, wires, connectors, and device inputs.",
        },
        {
          pt: "Quando a linha é liberada, o resistor de pull-up precisa carregar essa capacitância para elevar a tensão.",
          en: "When the line is released, the pull-up resistor must charge this capacitance to raise the voltage.",
        },
        {
          pt: "Quanto maior a resistência ou a capacitância, mais lenta tende a ser a subida do sinal.",
          en: "The greater the resistance or capacitance, the slower the signal rise tends to be.",
        },
        {
          pt: "Tempos de subida excessivos podem violar requisitos de temporização e provocar falhas de comunicação, especialmente em velocidades mais altas.",
          en: "Excessive rise times can violate timing requirements and cause communication failures, especially at higher speeds.",
        },
        {
          pt: "Por isso, comprimento de fios, quantidade de dispositivos, resistores e layout da placa precisam ser considerados no projeto do barramento.",
          en: "For this reason, wire length, device count, resistors, and board layout must be considered when designing the bus.",
        },
      ],
    },

    {
      id: "voltage-levels",

      heading: {
        pt: "Compatibilidade entre 3,3 V e 5 V",
        en: "Compatibility between 3.3 V and 5 V",
      },

      paragraphs: [
        {
          pt: "Dispositivos I²C podem operar com diferentes tensões de alimentação e diferentes limites elétricos de entrada e saída.",
          en: "I²C devices may operate at different supply voltages and have different electrical input and output limits.",
        },
        {
          pt: "Um microcontrolador de 3,3 V não deve ser considerado automaticamente tolerante a sinais de 5 V.",
          en: "A 3.3 V microcontroller should not automatically be considered tolerant of 5 V signals.",
        },
        {
          pt: "A tensão aplicada pelos pull-ups precisa ser compatível com todos os dispositivos diretamente conectados ao barramento.",
          en: "The voltage applied by pull-ups must be compatible with every device directly connected to the bus.",
        },
        {
          pt: "Quando componentes utilizam níveis incompatíveis, pode ser necessário empregar conversores de nível lógico apropriados para I²C.",
          en: "When components use incompatible levels, it may be necessary to use logic-level translators suitable for I²C.",
        },
        {
          pt: "A verificação dos limites de tensão nos datasheets é essencial para evitar danos aos componentes.",
          en: "Checking voltage limits in datasheets is essential to avoid damaging components.",
        },
      ],
    },

    {
      id: "i2c-vs-spi",

      heading: {
        pt: "I²C ou SPI: qual é a diferença?",
        en: "I²C or SPI: what is the difference?",
      },

      paragraphs: [
        {
          pt: "I²C e SPI são protocolos amplamente utilizados para comunicação entre circuitos integrados, mas apresentam características diferentes.",
          en: "I²C and SPI are widely used protocols for communication among integrated circuits, but they have different characteristics.",
        },
        {
          pt: "O I²C utiliza duas linhas compartilhadas de sinal e um mecanismo de endereçamento, facilitando a conexão de múltiplos dispositivos compatíveis.",
          en: "I²C uses two shared signal lines and an addressing mechanism, making it convenient to connect multiple compatible devices.",
        },
        {
          pt: "O SPI convencional costuma utilizar linhas separadas para dados de entrada, dados de saída e clock, além de sinais de seleção dos dispositivos.",
          en: "Conventional SPI usually uses separate lines for incoming data, outgoing data, and clock, along with device selection signals.",
        },
        {
          pt: "O SPI frequentemente permite taxas de transferência maiores e comunicação full-duplex, dependendo dos dispositivos e da implementação.",
          en: "SPI often supports higher transfer rates and full-duplex communication, depending on the devices and implementation.",
        },
        {
          pt: "A escolha depende de requisitos como velocidade, número de pinos, quantidade de dispositivos, consumo, complexidade e compatibilidade elétrica.",
          en: "The choice depends on requirements such as speed, pin count, number of devices, power consumption, complexity, and electrical compatibility.",
        },
      ],
    },

    {
      id: "i2c-vs-uart",

      heading: {
        pt: "I²C ou UART?",
        en: "I²C or UART?",
      },

      paragraphs: [
        {
          pt: "UART é uma interface de comunicação serial assíncrona, frequentemente utilizada para comunicação entre dois dispositivos ou para acesso a consoles de depuração.",
          en: "UART is an asynchronous serial communication interface, frequently used for communication between two devices or for access to debugging consoles.",
        },
        {
          pt: "Diferentemente do I²C, a UART convencional não utiliza uma linha de clock compartilhada para sincronizar cada bit.",
          en: "Unlike I²C, conventional UART does not use a shared clock line to synchronize each bit.",
        },
        {
          pt: "As extremidades precisam concordar sobre parâmetros como baud rate, quantidade de bits, paridade e bits de parada.",
          en: "The endpoints must agree on parameters such as baud rate, number of data bits, parity, and stop bits.",
        },
        {
          pt: "O I²C oferece endereçamento de dispositivos dentro de um barramento compartilhado, enquanto a UART convencional não define esse mecanismo de endereçamento por si só.",
          en: "I²C provides device addressing within a shared bus, while conventional UART does not define that addressing mechanism by itself.",
        },
      ],
    },

    {
      id: "applications",

      heading: {
        pt: "Onde o I²C é utilizado?",
        en: "Where is I²C used?",
      },

      paragraphs: [
        {
          pt: "O I²C aparece em inúmeros dispositivos eletrônicos, especialmente quando é necessário conectar componentes periféricos de baixa ou moderada taxa de transferência.",
          en: "I²C appears in numerous electronic devices, especially when connecting peripheral components with low or moderate data-rate requirements.",
        },
        {
          pt: "Aplicações comuns incluem sensores de temperatura, pressão, umidade, acelerômetros, giroscópios e magnetômetros.",
          en: "Common applications include temperature, pressure, and humidity sensors, accelerometers, gyroscopes, and magnetometers.",
        },
        {
          pt: "O protocolo também é utilizado por relógios de tempo real, memórias EEPROM, expansores de portas digitais e determinados controladores de display.",
          en: "The protocol is also used by real-time clocks, EEPROM memories, digital I/O expanders, and certain display controllers.",
        },
        {
          pt: "Placas como Arduino, ESP32 e Raspberry Pi oferecem interfaces I²C que podem ser utilizadas por bibliotecas de software ou APIs específicas.",
          en: "Boards such as Arduino, ESP32, and Raspberry Pi provide I²C interfaces that can be used through software libraries or platform-specific APIs.",
        },
      ],
    },

    {
      id: "debugging",

      heading: {
        pt: "Como diagnosticar problemas de comunicação?",
        en: "How can communication problems be diagnosed?",
      },

      paragraphs: [
        {
          pt: "Falhas no I²C podem resultar de problemas elétricos, configuração incorreta de software ou incompatibilidades entre dispositivos.",
          en: "I²C failures can result from electrical problems, incorrect software configuration, or device incompatibilities.",
        },
        {
          pt: "Uma verificação inicial deve confirmar a alimentação, o GND compartilhado, a conexão correta de SDA e SCL e a compatibilidade dos níveis de tensão.",
          en: "An initial check should confirm power supply, shared GND, correct SDA and SCL connections, and voltage-level compatibility.",
        },
        {
          pt: "Também é importante verificar os resistores de pull-up, o endereço de 7 bits utilizado pelo dispositivo e a velocidade configurada.",
          en: "It is also important to check pull-up resistors, the device's 7-bit address, and the configured speed.",
        },
        {
          pt: "Ferramentas como analisadores lógicos e osciloscópios permitem observar START, STOP, bytes transmitidos, ACK/NACK e características elétricas dos sinais.",
          en: "Tools such as logic analyzers and oscilloscopes allow observation of START, STOP, transmitted bytes, ACK/NACK, and electrical signal characteristics.",
        },
        {
          pt: "Um scanner I²C pode ajudar a identificar endereços que respondem no barramento, mas não substitui a análise do datasheet nem garante que todas as funções do dispositivo estejam operando corretamente.",
          en: "An I²C scanner can help identify responding addresses on the bus, but it does not replace datasheet analysis or guarantee that every device function is operating correctly.",
        },
      ],
    },

    {
      id: "limitations",

      heading: {
        pt: "Quais são as limitações do I²C?",
        en: "What are I²C's limitations?",
      },

      paragraphs: [
        {
          pt: "Apesar da simplicidade, o I²C apresenta limitações relacionadas à velocidade, à capacitância do barramento e à compatibilidade elétrica.",
          en: "Despite its simplicity, I²C has limitations related to speed, bus capacitance, and electrical compatibility.",
        },
        {
          pt: "O protocolo foi projetado principalmente para comunicação entre circuitos relativamente próximos, e não para substituir interfaces destinadas a longas distâncias.",
          en: "The protocol was designed primarily for communication among relatively nearby circuits, not to replace interfaces intended for long distances.",
        },
        {
          pt: "Conflitos de endereço podem dificultar a conexão de dispositivos idênticos quando não existem opções de configuração ou multiplexação.",
          en: "Address conflicts can complicate connecting identical devices when no configuration or multiplexing options are available.",
        },
        {
          pt: "Dispositivos que mantêm SDA ou SCL permanentemente em nível baixo também podem impedir o funcionamento normal do barramento.",
          en: "Devices that hold SDA or SCL permanently low can also prevent normal bus operation.",
        },
        {
          pt: "A adequação do I²C depende das necessidades do projeto. Aplicações que exigem taxas de dados muito elevadas ou maiores distâncias podem precisar de outras interfaces.",
          en: "I²C suitability depends on project requirements. Applications requiring very high data rates or longer distances may need other interfaces.",
        },
      ],
    },

    {
      id: "conclusion",

      heading: {
        pt: "Dois sinais, múltiplos dispositivos",
        en: "Two signals, multiple devices",
      },

      paragraphs: [
        {
          pt: "O I²C demonstra como um conjunto relativamente pequeno de conexões elétricas pode sustentar uma comunicação digital organizada entre diversos circuitos integrados.",
          en: "I²C demonstrates how a relatively small set of electrical connections can support organized digital communication among multiple integrated circuits.",
        },
        {
          pt: "Seu funcionamento depende de regras bem definidas para sinais elétricos, temporização, endereçamento, confirmação e controle de acesso ao barramento.",
          en: "Its operation depends on well-defined rules for electrical signals, timing, addressing, acknowledgment, and bus access control.",
        },
        {
          pt: "Compreender SDA, SCL, pull-ups, START, STOP e ACK/NACK permite interpretar datasheets, desenvolver firmware e diagnosticar problemas reais de hardware.",
          en: "Understanding SDA, SCL, pull-ups, START, STOP, and ACK/NACK makes it possible to interpret datasheets, develop firmware, and diagnose real hardware problems.",
        },
        {
          pt: "Mais do que conectar sensores, estudar o I²C é uma forma de compreender como software, lógica digital e fenômenos elétricos trabalham juntos em sistemas embarcados.",
          en: "More than connecting sensors, studying I²C is a way to understand how software, digital logic, and electrical phenomena work together in embedded systems.",
        },
      ],
    },
  ],

  references: [
    {
      title:
        "UM10204: I²C-bus specification and user manual",
      authors: "NXP Semiconductors",
      url: "https://www.nxp.com/docs/en/user-guide/UM10204.pdf",
    },
    {
      title: "I2C",
      authors: "Espressif Systems",
      url: "https://docs.espressif.com/projects/esp-idf/en/stable/esp32/api-reference/peripherals/i2c.html",
    },
    {
      title: "Wire",
      authors: "Arduino",
      url: "https://docs.arduino.cc/language-reference/en/functions/communication/wire/",
    },
    {
      title: "I2C Bus Pull-Up Resistor Calculation",
      authors: "Texas Instruments",
      url: "https://www.ti.com/lit/an/slva689/slva689.pdf",
    },
  ],
};
