
---
title: construindo um computador z80 do zero
description: documentando o desenvolvimento de um computador de 8 bits baseado no Zilog Z80, desde o esquema eletrônico no KiCad até o planejamento da PCB.
date: 2026-11-14
tags: electronics, z80, kicad, hardware
---

Recentemente comecei a explorar eletrônica digital e arquitetura de computadores por meio de um projeto pessoal: desenvolver um computador baseado no microprocessador **Zilog Z80**.

A ideia é compreender melhor como um computador funciona em seu nível mais fundamental, desde a comunicação entre os componentes até a execução de instruções.

Por enquanto, o projeto está na fase de desenvolvimento do esquema eletrônico no KiCad.

## por que o z80?

O Zilog Z80 é um microprocessador de 8 bits lançado em 1976.

Escolhi estudar essa arquitetura porque ela permite observar conceitos que os computadores modernos frequentemente escondem atrás de várias camadas de abstração.

Embora seja uma arquitetura antiga, o Z80 oferece uma oportunidade de compreender conceitos fundamentais, como:

- Barramentos de dados e endereços.
- Comunicação entre processador e memória.
- Ciclos de leitura e escrita.
- Sinais de controle.
- Clock e sincronização.
- Decodificação de endereços.

O processador possui um barramento de dados de 8 bits e um barramento de endereços de 16 bits, permitindo endereçar diretamente até **64 KiB de memória**.

O objetivo não é apenas fazer o computador funcionar, mas entender o papel de cada componente e como eles interagem.

## desenvolvendo no kicad

Estou utilizando o KiCad para desenvolver e organizar os esquemas eletrônicos do projeto.

Nesta etapa, comecei a reunir os componentes necessários para construir um sistema baseado no Z80.

![Esquema eletrônico preliminar do computador Z80 no KiCad](/images/blog/z80/z80-kicad-schematic.png)

*figura 01 — esquema eletrônico preliminar desenvolvido no KiCad. O circuito ainda está em desenvolvimento e algumas conexões precisam ser concluídas e verificadas.*

O esquema atual inclui alguns dos principais componentes do sistema.

### microprocessador

O componente central é o **Zilog Z80**, responsável por executar instruções e coordenar a comunicação com os demais dispositivos.

Seus barramentos de dados e endereços serão utilizados para estabelecer a comunicação com as memórias.

### clock

Estou utilizando um oscilador de **1 MHz**, responsável por fornecer o sinal de clock ao processador.

Esse sinal sincroniza as operações internas da CPU e influencia a velocidade de execução das instruções.

### memórias

O projeto inclui dois tipos de memória:

- **ROM (28C256):** destinada ao armazenamento de instruções e programas.
- **RAM (CY62256):** destinada ao armazenamento temporário de dados durante a execução.

A organização do espaço de endereçamento ainda precisa ser definida e validada.

### circuitos auxiliares

Também comecei a adicionar componentes responsáveis por funções de suporte ao processador:

- Circuito de reset baseado no MCP130.
- Resistores de pull-up em sinais de controle.
- Capacitores de desacoplamento.
- Portas lógicas 74LS32.
- Inversores 74HC04.

Esses componentes participam de funções como inicialização, estabilidade elétrica e lógica de seleção de memória.

A presença deles no esquema não significa que todas as conexões já estejam corretas ou concluídas.

## o que ainda preciso resolver?

Uma das partes mais interessantes desse projeto é perceber que construir um computador envolve muito mais do que conectar um processador à memória.

Ainda preciso estudar e revisar pontos importantes:

- Conexões dos barramentos de dados e endereços.
- Lógica de seleção das memórias ROM e RAM.
- Sinais de leitura e escrita.
- Compatibilidade elétrica entre os componentes.
- Inicialização do processador.
- Organização do mapa de memória.
- Validação do esquema antes de uma possível montagem física.

Cada uma dessas etapas exige compreender o funcionamento dos componentes e consultar seus respectivos datasheets.

## como pretendo construir o computador

Além de desenvolver o esquema eletrônico no KiCad, comecei a pensar em como será a placa de circuito impresso do computador.

Minha ideia é criar uma PCB compacta, com os componentes organizados de maneira que seja possível identificar facilmente cada parte do sistema.

![Conceito da futura PCB do computador Z80](/images/blog/z80/z80-pcb-concept.png)

*figura 02 — conceito visual da futura placa do computador Z80. Imagem gerada digitalmente para representar uma possível organização dos componentes; não corresponde a um layout eletrônico validado.*

O conceito apresenta o processador Z80 como componente central, acompanhado pelas memórias ROM e RAM, conexões de alimentação, barramentos e alguns elementos de controle.

Também gostaria de incluir indicadores luminosos e botões para facilitar a observação do comportamento do sistema durante os testes.

A disposição dos componentes, as trilhas e os circuitos auxiliares ainda serão definidos no KiCad.

Por enquanto, essa imagem funciona como uma referência visual para a direção que pretendo seguir no desenvolvimento físico do projeto.

### visualizando o roteamento da pcb

Além da organização física dos componentes, também comecei a explorar como poderá ser o roteamento das trilhas na placa.

![Conceito de roteamento da PCB do computador Z80](/images/blog/z80/z80-pcb-layout.png)

*figura 03 — representação conceitual do layout da PCB, com trilhas nas camadas superior e inferior, barramentos e componentes do computador Z80. Imagem gerada digitalmente; não representa um projeto validado no KiCad.*

Na imagem, as trilhas vermelhas e azuis representam visualmente as duas camadas de cobre de uma possível PCB.

A proposta é estudar como organizar as conexões entre o processador, as memórias e os demais componentes, considerando o espaço disponível e a distribuição dos sinais.

O roteamento definitivo ainda será desenvolvido no KiCad, após a revisão e validação do esquema eletrônico.

### visualização 3d da futura placa

Para visualizar melhor como o computador poderá ficar depois da montagem, também desenvolvi uma representação tridimensional da placa.

![Conceito 3D da placa do computador Z80](/images/blog/z80/z80-pcb-3d.png)

*figura 04 — visualização conceitual em 3D da futura PCB do computador Z80. Imagem gerada digitalmente, inspirada no estilo do visualizador 3D do KiCad. Não representa uma placa fabricada ou um modelo eletrônico validado.*

A representação mostra uma possível disposição dos componentes na placa, incluindo o microprocessador Z80, as memórias ROM e RAM, os circuitos auxiliares, os conectores e os indicadores luminosos.

Minha intenção é utilizar essa visualização como referência estética enquanto desenvolvo o projeto eletrônico real.

Conforme o esquema e o layout da PCB forem concluídos no KiCad, poderei gerar uma visualização 3D baseada nos componentes e nas dimensões reais da placa.

## próximos passos

Por enquanto, esse é um projeto experimental, desenvolvido principalmente por curiosidade.

Pretendo continuar estudando a arquitetura do Z80, revisando o esquema eletrônico e documentando as decisões tomadas durante o desenvolvimento.

Também quero registrar os erros, as dificuldades e as descobertas ao longo do processo.

A intenção é avançar gradualmente, sem necessariamente estabelecer um prazo para concluir o computador.

Talvez, futuramente, ele deixe de existir apenas no KiCad e se transforme em um computador físico.
