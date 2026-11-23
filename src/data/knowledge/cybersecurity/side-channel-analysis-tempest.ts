import type { KnowledgePost } from "../../knowledge.types";

export const sideChannelAnalysisTempest: KnowledgePost = {
  "slug": "side-channel-analysis-tempest",
  "title": {
    "pt": "Ataques de canal lateral e TEMPEST: guia completo de estudos",
    "en": "Side-Channel Analysis and TEMPEST: Complete Study Guide"
  },
  "description": {
    "pt": "Material de estudo aprofundado sobre vazamentos físicos, CMOS, modelos HW/HD, SPA, DPA, CPA, acústica, emanações eletromagnéticas, análise estatística, três laboratórios sintéticos, exercícios e contramedidas.",
    "en": "In-depth study material on physical leakage, CMOS, HW/HD models, SPA, DPA, CPA, acoustics, electromagnetic emanations, statistical analysis, three synthetic labs, exercises, and countermeasures."
  },
  "category": "cybersecurity",
  "date": "2026-11-23",
  "readingMinutes": 48,
  "tags": [
    "cybersecurity",
    "side-channel",
    "tempest",
    "hardware-security",
    "cryptography",
    "power-analysis",
    "electromagnetic",
    "study-guide",
    "signal-processing",
    "python"
  ],
  "sections": [
    {
      "id": "learning-objectives",
      "heading": {
        "pt": "Objetivos de aprendizagem",
        "en": "Learning objectives"
      },
      "paragraphs": [
        {
          "pt": "Ao final, você deverá distinguir segurança de algoritmos e de implementações, reconhecer modelos de vazamento, interpretar traços e compreender as limitações de experimentos de canal lateral.",
          "en": "By the end, you should distinguish algorithm security from implementation security, recognize leakage models, interpret traces, and understand the limitations of side-channel experiments."
        },
        {
          "pt": "Você também deverá explicar as diferenças entre SPA, DPA, CPA e TEMPEST; identificar contramedidas; e elaborar um relatório reproduzível a partir de medições sintéticas.",
          "en": "You should also explain the differences among SPA, DPA, CPA, and TEMPEST; identify countermeasures; and produce a reproducible report from synthetic measurements."
        }
      ]
    },
    {
      "id": "prerequisites",
      "heading": {
        "pt": "Pré-requisitos e trilha de estudo",
        "en": "Prerequisites and study path"
      },
      "paragraphs": [
        {
          "pt": "Conhecimentos recomendados: bits e bytes, portas lógicas, operações XOR, noções de corrente e tensão, média e desvio-padrão, arrays e gráficos em Python. Não é necessário conhecer ataques criptográficos previamente.",
          "en": "Recommended background: bits and bytes, logic gates, XOR, basic current and voltage, mean and standard deviation, arrays, and plotting in Python. Prior knowledge of cryptographic attacks is not required."
        },
        {
          "pt": "Estude na ordem: modelo de ameaça → física do vazamento → aquisição de sinais → estatística → análise de potência → emanações → defesas → laboratório. Refaça os exercícios antes de consultar as respostas.",
          "en": "Study in this order: threat model → leakage physics → signal acquisition → statistics → power analysis → emanations → defenses → laboratory. Retry exercises before consulting the answers."
        }
      ]
    },
    {
      "id": "threat-model",
      "heading": {
        "pt": "O que é um canal lateral?",
        "en": "What is a side channel?"
      },
      "paragraphs": [
        {
          "pt": "Um canal lateral é uma observação indireta da execução de um sistema: duração, energia, radiação eletromagnética, som ou comportamento de cache. O adversário tenta inferir um estado interno a partir dessas observações, sem necessariamente violar a matemática do algoritmo.",
          "en": "A side channel is an indirect observation of system execution: duration, energy, electromagnetic radiation, sound, or cache behavior. An adversary tries to infer internal state from these observations without necessarily breaking the algorithm mathematically."
        },
        {
          "pt": "Todo estudo precisa declarar o modelo de ameaça: quais sinais são acessíveis, a que distância, com que precisão, quantas execuções podem ser observadas e se o atacante controla entradas. Resultados obtidos com sondas conectadas à placa não devem ser generalizados para observação remota.",
          "en": "Every study must state its threat model: which signals are accessible, from what distance, with what precision, how many executions can be observed, and whether an attacker controls inputs. Results from probes attached to a board must not be generalized to remote observation."
        },
        {
          "pt": "Vazamento observável não equivale a recuperação de segredo. A exploração exige uma relação suficientemente estável entre o sinal e uma hipótese sobre o dado secreto, além de controle sobre ruído e fatores de confusão.",
          "en": "Observable leakage does not equal secret recovery. Exploitation requires a sufficiently stable relationship between the signal and a hypothesis about secret data, as well as control of noise and confounding factors."
        }
      ]
    },
    {
      "id": "cmos",
      "heading": {
        "pt": "Fundamentos físicos: CMOS e potência dinâmica",
        "en": "Physical foundations: CMOS and dynamic power"
      },
      "paragraphs": [
        {
          "pt": "Circuitos CMOS carregam e descarregam capacitâncias quando nós lógicos mudam de estado. Uma aproximação para a potência dinâmica média é P ≈ α·C·V²·f, em que α é a atividade de comutação, C a capacitância efetiva, V a tensão e f a frequência.",
          "en": "CMOS circuits charge and discharge capacitances as logic nodes switch state. A common approximation for average dynamic power is P ≈ α·C·V²·f, where α is switching activity, C effective capacitance, V voltage, and f frequency."
        },
        {
          "pt": "A fórmula não descreve toda a potência: há consumo estático, correntes de curto-circuito durante transições, reguladores e outros componentes. Em medições reais, o sinal é a combinação dessas contribuições.",
          "en": "The formula does not describe all power: static consumption, short-circuit currents during transitions, regulators, and other components also matter. In real measurements, the signal combines these contributions."
        },
        {
          "pt": "Dois cálculos com a mesma duração podem produzir diferentes padrões de comutação. Por isso, execução em tempo constante é uma defesa importante, mas não garante resistência a vazamentos de potência ou eletromagnéticos.",
          "en": "Two computations with identical duration may produce different switching patterns. Thus constant-time execution is important, but it does not guarantee resistance to power or electromagnetic leakage."
        }
      ]
    },
    {
      "id": "leakage-models",
      "heading": {
        "pt": "Modelos de vazamento: Hamming Weight e Hamming Distance",
        "en": "Leakage models: Hamming Weight and Hamming Distance"
      },
      "paragraphs": [
        {
          "pt": "Hamming Weight (HW) é a quantidade de bits iguais a 1 em uma palavra. Por exemplo, HW(10110100₂) = 4. Esse modelo aproxima situações nas quais o consumo se relaciona ao estado armazenado.",
          "en": "Hamming Weight (HW) counts the number of 1 bits in a word. For example, HW(10110100₂) = 4. This model approximates situations where consumption relates to the stored state."
        },
        {
          "pt": "Hamming Distance (HD) conta os bits que mudam entre dois estados: HD(a,b) = HW(a XOR b). Exemplo: 00001111₂ → 00111100₂ altera quatro bits. HD pode ser mais apropriado quando a comutação domina o sinal.",
          "en": "Hamming Distance (HD) counts bits that change between two states: HD(a,b) = HW(a XOR b). Example: 00001111₂ → 00111100₂ changes four bits. HD may be more suitable when switching dominates the signal."
        },
        {
          "pt": "HW e HD são aproximações, não leis universais. Arquitetura, codificação interna, glitches lógicos, pipeline e circuito de alimentação podem alterar a relação entre dados e consumo.",
          "en": "HW and HD are approximations, not universal laws. Architecture, internal encoding, logic glitches, pipelines, and power delivery can change the relationship between data and consumption."
        }
      ]
    },
    {
      "id": "signals",
      "heading": {
        "pt": "Aquisição de sinais e instrumentação",
        "en": "Signal acquisition and instrumentation"
      },
      "paragraphs": [
        {
          "pt": "Um traço é uma sequência de amostras registradas durante uma execução. Pode representar tensão em um resistor de medição, corrente estimada ou intensidade de campo captada por uma sonda. Metadados como taxa de amostragem, gatilho e configuração são essenciais para reproduzir resultados.",
          "en": "A trace is a sequence of samples recorded during an execution. It may represent voltage across a sensing resistor, estimated current, or field intensity captured by a probe. Metadata such as sampling rate, trigger, and configuration are essential for reproducibility."
        },
        {
          "pt": "A largura de banda do instrumento limita quais variações podem ser observadas. A taxa de amostragem deve ser escolhida considerando o conteúdo espectral de interesse e filtros analógicos; uma taxa alta não corrige uma sonda inadequada.",
          "en": "Instrument bandwidth limits which variations can be observed. Sampling rate must account for the spectral content of interest and analog filters; a high sampling rate does not fix an unsuitable probe."
        },
        {
          "pt": "Em laboratórios físicos, comece com dispositivos de baixa tensão e documentação elétrica conhecida. Nunca conecte diretamente equipamentos de medição a redes elétricas ou circuitos de potência sem treinamento e isolamento apropriados.",
          "en": "In physical labs, begin with documented low-voltage devices. Never connect measurement equipment directly to mains or power circuits without training and appropriate isolation."
        }
      ]
    },
    {
      "id": "noise",
      "heading": {
        "pt": "Ruído, alinhamento e repetibilidade",
        "en": "Noise, alignment, and repeatability"
      },
      "paragraphs": [
        {
          "pt": "Ruído térmico, fontes chaveadas, atividade concorrente e jitter temporal podem esconder padrões. Repetições e médias ajudam a visualizar componentes estáveis, mas não eliminam vieses de coleta.",
          "en": "Thermal noise, switching power supplies, concurrent activity, and timing jitter can hide patterns. Repetition and averaging help reveal stable components but do not eliminate collection bias."
        },
        {
          "pt": "Alinhamento significa comparar eventos equivalentes no mesmo índice temporal. Se o evento de interesse ocorre em instantes diferentes, a correlação pode diminuir mesmo quando há vazamento. Registre como os traços foram sincronizados.",
          "en": "Alignment means comparing equivalent events at the same time index. If the event of interest occurs at different times, correlation can decrease even when leakage exists. Document how traces were synchronized."
        },
        {
          "pt": "Separar dados de exploração e validação reduz conclusões enganosas. Uma hipótese escolhida após examinar todos os traços precisa ser testada em um conjunto independente.",
          "en": "Separating exploratory and validation data reduces misleading conclusions. A hypothesis selected after inspecting all traces should be tested on an independent dataset."
        }
      ]
    },
    {
      "id": "spa",
      "heading": {
        "pt": "Simple Power Analysis (SPA)",
        "en": "Simple Power Analysis (SPA)"
      },
      "paragraphs": [
        {
          "pt": "SPA procura padrões visualmente discerníveis em um ou poucos traços, como operações com durações ou formas de onda diferentes. Ela é útil para entender a estrutura temporal de uma execução, mas padrões visuais isolados não demonstram recuperação de chave.",
          "en": "SPA looks for visually discernible patterns in one or a few traces, such as operations with different durations or waveforms. It helps explain execution timing, but isolated visual patterns do not prove key recovery."
        },
        {
          "pt": "Exemplo didático: uma rotina de teste executa duas operações diferentes dependendo de um bit público. Se o consumo apresenta dois formatos distintos, o traço demonstra dependência da execução; não implica que um bit secreto real possa ser inferido nas mesmas condições.",
          "en": "Teaching example: a test routine executes two different operations depending on a public bit. If power shows two distinct shapes, the trace demonstrates execution dependence; it does not imply that a real secret bit can be inferred under the same conditions."
        }
      ]
    },
    {
      "id": "dpa",
      "heading": {
        "pt": "Differential Power Analysis (DPA)",
        "en": "Differential Power Analysis (DPA)"
      },
      "paragraphs": [
        {
          "pt": "DPA usa conjuntos de traços e diferenças estatísticas para detectar dependências pequenas demais para inspeção visual. Em termos conceituais, compara médias de grupos definidos por uma hipótese sobre um valor intermediário.",
          "en": "DPA uses sets of traces and statistical differences to detect dependencies too small for visual inspection. Conceptually, it compares group means defined by a hypothesis about an intermediate value."
        },
        {
          "pt": "Uma diferença de médias pode refletir vazamento, mas também diferenças de entrada, temperatura, relógio ou ordem de coleta. É importante controlar variáveis, declarar a hipótese e quantificar a incerteza.",
          "en": "A difference of means may reflect leakage, but also differences in input, temperature, clock, or collection order. Control variables, state the hypothesis, and quantify uncertainty."
        }
      ]
    },
    {
      "id": "cpa",
      "heading": {
        "pt": "Correlation Power Analysis (CPA)",
        "en": "Correlation Power Analysis (CPA)"
      },
      "paragraphs": [
        {
          "pt": "CPA avalia a relação entre um modelo numérico de vazamento e os valores medidos em cada instante. O coeficiente de correlação de Pearson varia entre −1 e +1: valores próximos de zero indicam ausência de relação linear detectável, não necessariamente ausência de vazamento.",
          "en": "CPA evaluates the relationship between a numerical leakage model and measured values at each time point. Pearson correlation ranges from −1 to +1: values near zero indicate no detectable linear relationship, not necessarily no leakage."
        },
        {
          "pt": "A correlação é r = Σ[(xᵢ−x̄)(yᵢ−ȳ)] / √(Σ(xᵢ−x̄)² · Σ(yᵢ−ȳ)²). Antes de interpretar um pico, confira tamanho da amostra, múltiplas comparações e estabilidade em uma coleta independente.",
          "en": "Correlation is r = Σ[(xᵢ−x̄)(yᵢ−ȳ)] / √(Σ(xᵢ−x̄)² · Σ(yᵢ−ȳ)²). Before interpreting a peak, check sample size, multiple comparisons, and stability on an independent collection."
        },
        {
          "pt": "Em pesquisas criptográficas, hipóteses podem envolver valores intermediários calculados a partir de entradas conhecidas. Este material usa apenas sinais sintéticos e valores públicos para ensinar a estatística, sem orientar extração de segredos de terceiros.",
          "en": "In cryptographic research, hypotheses may involve intermediate values calculated from known inputs. This material uses only synthetic signals and public values to teach statistics, without directing extraction of third-party secrets."
        }
      ]
    },
    {
      "id": "timing",
      "heading": {
        "pt": "Canais temporais e microarquitetura",
        "en": "Timing channels and microarchitecture"
      },
      "paragraphs": [
        {
          "pt": "Tempo de execução pode depender de desvios condicionais, acessos à memória, cache, previsão de desvios e otimizações do compilador. Uma comparação que termina no primeiro byte diferente pode revelar diferenças de duração entre entradas.",
          "en": "Execution time can depend on branches, memory accesses, caches, branch prediction, and compiler optimizations. A comparison that stops at the first mismatched byte can reveal timing differences across inputs."
        },
        {
          "pt": "Programação constant-time procura evitar que decisões ou endereços de memória dependam de segredos. Entretanto, a verificação deve considerar compilador, biblioteca, processador e contexto de execução; código-fonte aparentemente constante pode não permanecer assim no binário.",
          "en": "Constant-time programming aims to prevent secret-dependent decisions or memory addresses. Verification must consider the compiler, library, processor, and execution context; source code that appears constant-time may not remain so in the binary."
        }
      ]
    },
    {
      "id": "acoustic",
      "heading": {
        "pt": "Vazamentos acústicos",
        "en": "Acoustic leakage"
      },
      "paragraphs": [
        {
          "pt": "Componentes eletrônicos podem produzir vibrações por efeitos eletromecânicos, como magnetostrição e forças em indutores ou capacitores. Em condições específicas, sons podem se correlacionar com a atividade do dispositivo.",
          "en": "Electronic components can vibrate due to electromechanical effects, including magnetostriction and forces in inductors or capacitors. Under specific conditions, sound may correlate with device activity."
        },
        {
          "pt": "A possibilidade de inferir informações depende da frequência, distância, ruído ambiente, microfone e arquitetura. Não se deve concluir que qualquer computador revela chaves criptográficas pelo som.",
          "en": "The possibility of inferring information depends on frequency, distance, ambient noise, microphone, and architecture. One should not conclude that every computer reveals cryptographic keys through sound."
        }
      ]
    },
    {
      "id": "emissions",
      "heading": {
        "pt": "Emanações eletromagnéticas e TEMPEST",
        "en": "Electromagnetic emanations and TEMPEST"
      },
      "paragraphs": [
        {
          "pt": "Correntes variáveis produzem campos eletromagnéticos. Cabos, trilhas, conectores e gabinetes podem atuar como caminhos de acoplamento e, em certas condições, emitir sinais correlacionados com dados processados ou exibidos.",
          "en": "Changing currents generate electromagnetic fields. Cables, traces, connectors, and enclosures can provide coupling paths and, under some conditions, emit signals correlated with processed or displayed data."
        },
        {
          "pt": "TEMPEST é um termo associado à segurança contra emanações comprometedoras e a práticas de avaliação e proteção. Van Eck phreaking descreve pesquisas sobre reconstrução de informação de vídeo a partir de emissões; a viabilidade depende fortemente do equipamento e do ambiente.",
          "en": "TEMPEST is associated with security against compromising emanations and related evaluation and protection practices. Van Eck phreaking refers to research on reconstructing video information from emissions; feasibility strongly depends on equipment and environment."
        },
        {
          "pt": "Não confunda interferência eletromagnética comum com vazamento inteligível. Para sustentar uma afirmação, o pesquisador precisa demonstrar associação entre emissão e informação, condições de captura e taxa de erro.",
          "en": "Do not confuse ordinary electromagnetic interference with intelligible leakage. To support a claim, researchers must demonstrate a link between emissions and information, capture conditions, and error rate."
        }
      ]
    },
    {
      "id": "spectral",
      "heading": {
        "pt": "Frequência, FFT e espectrogramas",
        "en": "Frequency, FFT, and spectrograms"
      },
      "paragraphs": [
        {
          "pt": "A Transformada Rápida de Fourier (FFT) é um algoritmo para calcular a transformada discreta de Fourier e identificar componentes de frequência em amostras. Um pico espectral não identifica sozinho sua fonte ou o conteúdo de dados.",
          "en": "The Fast Fourier Transform (FFT) is an algorithm for computing the discrete Fourier transform and identifying frequency components in samples. A spectral peak alone does not identify its source or data content."
        },
        {
          "pt": "Espectrogramas representam como a energia em diferentes frequências muda no tempo. Janela, duração da observação, resolução e vazamento espectral influenciam o resultado; registre esses parâmetros ao comparar sinais.",
          "en": "Spectrograms show how energy at different frequencies changes over time. Windowing, observation duration, resolution, and spectral leakage affect results; record these parameters when comparing signals."
        }
      ]
    },
    {
      "id": "lab1",
      "heading": {
        "pt": "Laboratório 1 — consumo sintético e Hamming Weight",
        "en": "Lab 1 — synthetic power and Hamming Weight"
      },
      "paragraphs": [
        {
          "pt": "Objetivo: verificar se um modelo simples de comutação aparece em dados artificiais. Requisitos: Python 3, NumPy e Matplotlib. Gere 300 valores públicos de 0 a 255, calcule a quantidade de bits 1 e construa uma medição sintética igual a 0,4 × HW + ruído gaussiano. Use uma semente fixa para reproduzir o resultado.",
          "en": "Goal: check whether a simple switching model appears in artificial data. Requirements: Python 3, NumPy, and Matplotlib. Generate 300 public values from 0 to 255, count their 1 bits, and construct a synthetic measurement equal to 0.4 × HW + Gaussian noise. Use a fixed random seed for reproducibility."
        },
        {
          "pt": "Código Python: import numpy as np; rng=np.random.default_rng(42); values=rng.integers(0,256,300); hw=np.array([int(v).bit_count() for v in values]); measured=0.4*hw+rng.normal(0,1,300); print(np.corrcoef(hw,measured)[0,1]). O resultado varia conforme o modelo de ruído; repita com desvios-padrão 0,5, 1 e 3.",
          "en": "Python code: import numpy as np; rng=np.random.default_rng(42); values=rng.integers(0,256,300); hw=np.array([int(v).bit_count() for v in values]); measured=0.4*hw+rng.normal(0,1,300); print(np.corrcoef(hw,measured)[0,1]). Results vary with the noise model; repeat with standard deviations 0.5, 1, and 3."
        },
        {
          "pt": "Registre hipótese, semente, quantidade de amostras, coeficiente obtido e interpretação. Pergunta central: como o aumento do ruído modifica a confiança na relação observada? Esse exercício não simula todos os efeitos físicos de uma placa real.",
          "en": "Record hypothesis, seed, sample count, observed coefficient, and interpretation. Central question: how does increased noise change confidence in the observed relationship? This exercise does not simulate every physical effect of a real board."
        }
      ]
    },
    {
      "id": "lab2",
      "heading": {
        "pt": "Laboratório 2 — traços sintéticos e alinhamento",
        "en": "Lab 2 — synthetic traces and alignment"
      },
      "paragraphs": [
        {
          "pt": "Crie 200 traços de 100 pontos, inicialmente compostos por ruído gaussiano. Adicione a cada traço um pequeno pulso em torno do índice 50, com amplitude proporcional a um valor público de HW. Compare a média de traços de HW baixo e alto.",
          "en": "Create 200 traces of 100 points, initially containing Gaussian noise. Add a small pulse near index 50 to each trace, with amplitude proportional to a public HW value. Compare mean traces for low and high HW."
        },
        {
          "pt": "Depois, desloque aleatoriamente o pulso em até cinco amostras e repita a comparação. Observe como o jitter dispersa a diferença temporal. Como extensão, compare a correlação em cada amostra antes e depois do deslocamento.",
          "en": "Then randomly shift the pulse by up to five samples and repeat the comparison. Observe how jitter spreads the timing difference. As an extension, compare per-sample correlation before and after shifting."
        },
        {
          "pt": "Use apenas dados gerados localmente. Inclua gráficos com eixos identificados, semente aleatória, parâmetros de ruído e conclusão sobre o efeito do alinhamento.",
          "en": "Use only locally generated data. Include plots with labeled axes, random seed, noise parameters, and a conclusion about alignment effects."
        }
      ]
    },
    {
      "id": "lab3",
      "heading": {
        "pt": "Laboratório 3 — análise espectral segura",
        "en": "Lab 3 — safe spectral analysis"
      },
      "paragraphs": [
        {
          "pt": "Gere dois sinais artificiais: uma senoide de 1 kHz e outra de 3 kHz, amostradas a 20 kHz durante um segundo. Some ruído, calcule a FFT e compare os picos espectrais. Não é necessário transmitir ou interceptar radiofrequência.",
          "en": "Generate two artificial signals: a 1 kHz sine wave and a 3 kHz sine wave, sampled at 20 kHz for one second. Add noise, compute the FFT, and compare spectral peaks. No radio transmission or interception is needed."
        },
        {
          "pt": "Investigue o que muda ao reduzir a duração do sinal ou aplicar uma janela de Hann. Explique a diferença entre resolução de frequência, vazamento espectral e amplitude aparente.",
          "en": "Investigate what changes when reducing signal duration or applying a Hann window. Explain the difference between frequency resolution, spectral leakage, and apparent amplitude."
        }
      ]
    },
    {
      "id": "countermeasures",
      "heading": {
        "pt": "Contramedidas: do código à placa",
        "en": "Countermeasures: from code to board"
      },
      "paragraphs": [
        {
          "pt": "Em software, reduza dependências de tempo e de acesso à memória em dados secretos; use bibliotecas criptográficas auditadas e evite implementar primitivas próprias sem necessidade. Testes estatísticos e revisão do binário complementam a inspeção do código-fonte.",
          "en": "In software, reduce secret-dependent timing and memory access; use audited cryptographic libraries and avoid implementing your own primitives unnecessarily. Statistical tests and binary review complement source inspection."
        },
        {
          "pt": "Em hardware, masking, hiding, balanceamento, filtragem, layout cuidadoso e blindagem podem reduzir classes específicas de vazamento. Cada medida tem custo e limitações; nenhuma deve ser considerada proteção universal sem avaliação.",
          "en": "In hardware, masking, hiding, balancing, filtering, careful layout, and shielding can reduce specific leakage classes. Each measure has costs and limitations; none should be considered universally protective without evaluation."
        },
        {
          "pt": "Masking procura tornar estados intermediários estatisticamente independentes do segredo por meio de aleatorização; hiding procura reduzir a relação observável entre atividade e sinal. Implementações imperfeitas podem continuar vazando, inclusive por efeitos de ordem superior.",
          "en": "Masking seeks to make intermediate states statistically independent of secrets through randomization; hiding seeks to reduce the observable relationship between activity and signal. Imperfect implementations may still leak, including through higher-order effects."
        }
      ]
    },
    {
      "id": "evaluation",
      "heading": {
        "pt": "Como avaliar evidências sem exagerar conclusões",
        "en": "How to evaluate evidence without overstating claims"
      },
      "paragraphs": [
        {
          "pt": "Uma avaliação rigorosa descreve equipamento, firmware, entradas, temperatura, quantidade de traços, filtros, critérios estatísticos e limitações. Resultados positivos devem ser reproduzidos; resultados negativos não provam ausência absoluta de vazamento.",
          "en": "A rigorous evaluation describes equipment, firmware, inputs, temperature, trace count, filters, statistical criteria, and limitations. Positive results should be reproduced; negative results do not prove absolute absence of leakage."
        },
        {
          "pt": "Testes como TVLA, frequentemente baseados em estatísticas t entre grupos de entradas, são ferramentas de detecção de vazamento sob condições definidas. Detectar vazamento não é o mesmo que demonstrar uma exploração bem-sucedida.",
          "en": "Tests such as TVLA, often based on t-statistics between input groups, are tools for detecting leakage under defined conditions. Detecting leakage is not the same as demonstrating successful exploitation."
        }
      ]
    },
    {
      "id": "ethics",
      "heading": {
        "pt": "Escopo autorizado e segurança do laboratório",
        "en": "Authorized scope and laboratory safety"
      },
      "paragraphs": [
        {
          "pt": "Experimentos devem usar dados sintéticos, dispositivos próprios ou ambientes com autorização explícita. Não tente captar comunicações privadas, reconstruir telas de terceiros ou medir sistemas que não estejam sob seu controle.",
          "en": "Experiments should use synthetic data, owned devices, or environments with explicit authorization. Do not attempt to capture private communications, reconstruct third-party displays, or measure systems outside your control."
        },
        {
          "pt": "Em testes com instrumentação, respeite limites de tensão, aterramento, isolamento e segurança eletromagnética. Para estudos iniciais, simulações oferecem aprendizado sólido sem riscos de montagem ou interferência.",
          "en": "When using instrumentation, respect voltage limits, grounding, isolation, and electromagnetic safety. For initial study, simulations provide substantial learning without assembly or interference risks."
        }
      ]
    },
    {
      "id": "exercises",
      "heading": {
        "pt": "Exercícios de fixação",
        "en": "Review exercises"
      },
      "paragraphs": [
        {
          "pt": "1. Explique por que AES pode ser matematicamente seguro e ainda assim apresentar vazamento na implementação. 2. Calcule HW(11001010₂). 3. Calcule HD(00110011₂, 01110101₂).",
          "en": "1. Explain why AES can be mathematically secure yet leak through its implementation. 2. Compute HW(11001010₂). 3. Compute HD(00110011₂, 01110101₂)."
        },
        {
          "pt": "4. Diferencie SPA, DPA e CPA em termos de observação e estatística. 5. Por que um pico de correlação não comprova por si só recuperação de segredo? 6. Como jitter afeta o alinhamento?",
          "en": "4. Distinguish SPA, DPA, and CPA in terms of observation and statistics. 5. Why does a correlation peak not by itself prove secret recovery? 6. How does jitter affect alignment?"
        },
        {
          "pt": "7. Compare masking e hiding. 8. Explique por que a emissão de RF de um dispositivo não implica automaticamente um vazamento decodificável. 9. Proponha um controle experimental para separar vazamento de variação de temperatura.",
          "en": "7. Compare masking and hiding. 8. Explain why a device emitting RF does not automatically imply decodable leakage. 9. Propose an experimental control to separate leakage from temperature variation."
        }
      ]
    },
    {
      "id": "answers",
      "heading": {
        "pt": "Respostas comentadas",
        "en": "Annotated answers"
      },
      "paragraphs": [
        {
          "pt": "1. A segurança matemática considera propriedades do algoritmo; a implementação pode revelar estados por sinais físicos. 2. HW = 4. 3. XOR = 01000110₂; HD = 3.",
          "en": "1. Mathematical security concerns algorithm properties; implementations can reveal state through physical signals. 2. HW = 4. 3. XOR = 01000110₂; HD = 3."
        },
        {
          "pt": "4. SPA examina padrões em poucos traços; DPA compara grupos estatisticamente; CPA correlaciona modelos numéricos e medições. 5. Correlação pode surgir por confundimento, acaso ou múltiplas comparações. 6. Jitter espalha eventos entre índices e pode reduzir correlação pontual.",
          "en": "4. SPA inspects patterns in few traces; DPA statistically compares groups; CPA correlates numerical models and measurements. 5. Correlation may arise from confounding, chance, or multiple comparisons. 6. Jitter spreads events across indices and may reduce pointwise correlation."
        },
        {
          "pt": "7. Masking aleatoriza representações internas; hiding reduz observabilidade. 8. É preciso demonstrar associação estável com dados e recuperação confiável sob condições declaradas. 9. Alterne entradas em ordem aleatória, monitore temperatura e repita medições em sessões independentes.",
          "en": "7. Masking randomizes internal representations; hiding reduces observability. 8. A stable data relationship and reliable recovery under stated conditions must be shown. 9. Randomize input order, monitor temperature, and repeat measurements in independent sessions."
        }
      ]
    },
    {
      "id": "glossary",
      "heading": {
        "pt": "Glossário essencial",
        "en": "Essential glossary"
      },
      "paragraphs": [
        {
          "pt": "Canal lateral: observável indireto da execução. Traço: série temporal de medições. SNR: relação sinal-ruído. Jitter: variação temporal entre execuções. HW: número de bits 1. HD: número de bits alterados.",
          "en": "Side channel: indirect observable of execution. Trace: measurement time series. SNR: signal-to-noise ratio. Jitter: timing variation between runs. HW: number of 1 bits. HD: number of changed bits."
        },
        {
          "pt": "SPA: análise visual de potência. DPA: análise diferencial de potência. CPA: análise de correlação de potência. FFT: algoritmo de transformada rápida de Fourier. TEMPEST: campo de proteção contra emanações comprometedoras. TVLA: abordagem de teste de vazamento.",
          "en": "SPA: simple power analysis. DPA: differential power analysis. CPA: correlation power analysis. FFT: fast Fourier transform algorithm. TEMPEST: field of protection against compromising emanations. TVLA: leakage assessment approach."
        }
      ]
    },
    {
      "id": "study-plan",
      "heading": {
        "pt": "Plano de estudo e entregáveis",
        "en": "Study plan and deliverables"
      },
      "paragraphs": [
        {
          "pt": "Sessão 1 (60 min): modelo de ameaça, CMOS, HW e HD; resolva exercícios 1–3. Sessão 2 (60 min): sinais, ruído, SPA/DPA/CPA; execute o laboratório 1. Sessão 3 (60 min): alinhamento, timing e laboratório 2.",
          "en": "Session 1 (60 min): threat model, CMOS, HW, and HD; solve exercises 1–3. Session 2 (60 min): signals, noise, SPA/DPA/CPA; run lab 1. Session 3 (60 min): alignment, timing, and lab 2."
        },
        {
          "pt": "Sessão 4 (60 min): acústica, emanações e FFT; execute o laboratório 3. Sessão 5 (60 min): defesas, avaliação e exercícios restantes. Entregável: um relatório com objetivo, hipótese, método, gráficos, limitações e referências.",
          "en": "Session 4 (60 min): acoustics, emanations, and FFT; run lab 3. Session 5 (60 min): defenses, evaluation, and remaining exercises. Deliverable: a report with objective, hypothesis, method, plots, limitations, and references."
        }
      ]
    },
    {
      "id": "conclusion",
      "heading": {
        "pt": "Conclusão: da curiosidade à pesquisa reproduzível",
        "en": "Conclusion: from curiosity to reproducible research"
      },
      "paragraphs": [
        {
          "pt": "Ataques de canal lateral mostram que segurança depende de como um cálculo acontece no mundo físico, não apenas de sua definição matemática. A disciplina exige eletrônica, estatística, arquitetura de computadores e cuidado com inferências.",
          "en": "Side-channel attacks show that security depends on how a computation happens in the physical world, not only on its mathematical definition. The field requires electronics, statistics, computer architecture, and careful inference."
        },
        {
          "pt": "O próximo passo recomendado é documentar os três laboratórios sintéticos e comparar resultados com pesquisas revisadas por pares, sempre separando observação, hipótese e conclusão.",
          "en": "The recommended next step is to document the three synthetic labs and compare results with peer-reviewed research, always separating observation, hypothesis, and conclusion."
        }
      ]
    }
  ],
  "references": [
    {
      "title": "Differential Power Analysis",
      "authors": "Paul Kocher, Joshua Jaffe & Benjamin Jun",
      "year": 1999,
      "url": "https://www.cryptography.com/public/pdf/DPA.pdf"
    },
    {
      "title": "Correlation Power Analysis with a Leakage Model",
      "authors": "Eric Brier, Christophe Clavier & Francis Olivier",
      "year": 2004,
      "url": "https://doi.org/10.1007/978-3-540-28632-5_2"
    },
    {
      "title": "Electromagnetic Analysis: Concrete Results",
      "authors": "Karine Gandolfi, Christophe Mourtel & Francis Olivier",
      "year": 2001,
      "url": "https://doi.org/10.1007/3-540-44709-1_21"
    },
    {
      "title": "Electromagnetic Eavesdropping Risks of Flat-Panel Displays",
      "authors": "Markus G. Kuhn",
      "year": 2004,
      "url": "https://www.cl.cam.ac.uk/~mgk25/pet2004-fpd.pdf"
    },
    {
      "title": "ChipWhisperer Documentation",
      "authors": "NewAE Technology",
      "url": "https://chipwhisperer.readthedocs.io/"
    },
    {
      "title": "Test Vector Leakage Assessment (TVLA) methodology",
      "authors": "Cryptographic Engineering Research",
      "url": "https://csrc.nist.gov/projects/cryptographic-module-validation-program"
    }
  ]
};
