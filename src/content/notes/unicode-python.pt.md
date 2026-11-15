
---
title: sobre identificadores unicode em python
description: explorando caracteres unicode, normalização de identificadores, ofuscação e os limites da sintaxe do python.
date: 2026-11-14
tags: [python, unicode, obfuscation, security]
---

## identificadores unicode em python

Uma característica interessante do Python é que nomes de variáveis, funções e classes não precisam ser formados exclusivamente por caracteres ASCII.

Desde o Python 3, determinados caracteres Unicode podem ser utilizados como identificadores, permitindo que símbolos de diferentes sistemas de escrita façam parte do código-fonte.

Por exemplo:

```python
変数 = 42
print(変数)
```

O código acima é válido e imprime `42`.

Isso acontece porque o Python utiliza regras específicas para determinar quais caracteres podem compor identificadores.

Entretanto, aceitar Unicode não significa aceitar qualquer símbolo.

## como o python interpreta identificadores

O Python utiliza propriedades Unicode relacionadas às categorias `XID_Start` e `XID_Continue`.

De forma simplificada:

- `XID_Start` determina quais caracteres podem iniciar um identificador.
- `XID_Continue` determina quais caracteres podem aparecer depois do primeiro.
- O caractere `_` também pode ser utilizado.
- Números podem aparecer após o primeiro caractere, mas não no início de um identificador comum.

Por exemplo:

```python
名前 = "cerberus"
contador_数字 = 3

print(名前)
print(contador_数字)
```

Ambos os identificadores são válidos, apesar de utilizarem caracteres de sistemas de escrita diferentes.

Por outro lado:

```python
𓂀 = 10
```

Esse exemplo não é válido em Python.

O hieróglifo egípcio apresentado não pertence às categorias permitidas para identificadores.

Portanto, o fato de um caractere existir na tabela Unicode não significa que ele possa ser utilizado como nome de variável.

## normalização unicode: nfkc

Outro detalhe importante é que o Python aplica normalização Unicode NFKC aos identificadores durante a análise léxica.

Isso significa que caracteres visualmente diferentes podem ser interpretados como o mesmo identificador.

Considere:

```python
K = 10

print(K)
```

O símbolo `K` (Kelvin sign) é normalizado para a letra latina `K`.

Consequentemente, o código imprime `10`.

Esse comportamento pode gerar situações inesperadas quando diferentes caracteres Unicode são utilizados em nomes de variáveis.

A normalização não significa, porém, que todos os caracteres parecidos sejam equivalentes.

## caracteres visualmente semelhantes

Alguns caracteres pertencentes a sistemas de escrita diferentes apresentam formas quase idênticas.

Por exemplo:

```python
a = 10
а = 20

print(a)
print(а)
```

A primeira variável utiliza a letra latina `a`.

A segunda utiliza a letra cirílica `а`.

Embora sejam visualmente semelhantes, são caracteres Unicode diferentes e permanecem identificadores distintos após a normalização NFKC.

O programa imprime:

```text
10
20
```

Esse fenômeno está relacionado ao conceito de *homoglyphs*: caracteres que possuem aparências semelhantes, mas identidades diferentes.

Em segurança de software, diferenças desse tipo merecem atenção durante revisões de código.

## unicode e ofuscação

A ofuscação de código consiste em dificultar sua compreensão sem necessariamente alterar seu comportamento.

Embora Unicode não seja uma técnica de ofuscação por si só, o uso deliberado de identificadores incomuns pode tornar o código menos legível.

Compare:

```python
def calcular_total(valor, taxa):
    return valor + valor * taxa

print(calcular_total(100, 0.1))
```

Com:

```python
def 計算(値, 率):
    return 値 + 値 * 率

print(計算(100, 0.1))
```

Ambos produzem o mesmo resultado:

```text
110.0
```

A diferença está na legibilidade para quem não conhece os caracteres utilizados.

Isso não representa criptografia e tampouco impede análise estática ou engenharia reversa.

O interpretador continua processando estruturas comuns da linguagem, como funções, operações aritméticas e chamadas.

## misturando sistemas de escrita

Também é possível utilizar identificadores compostos por caracteres de diferentes sistemas de escrita.

```python
def 処理_α(データ):
    結果 = データ * 2
    return 結果

print(処理_α(21))
```

Resultado:

```text
42
```

Nesse exemplo, há caracteres japoneses, uma letra grega e sintaxe convencional do Python.

Embora o código seja válido, a mistura pode dificultar buscas, revisões e manutenção.

## implicações para segurança

O uso de identificadores Unicode pode introduzir desafios específicos em projetos de software.

### revisão de código

Caracteres visualmente semelhantes podem dificultar a identificação de diferenças entre variáveis.

### análise estática

Ferramentas de análise precisam interpretar corretamente os identificadores Unicode e suas regras de normalização.

### manutenção

Nomes excessivamente incomuns podem dificultar buscas, colaboração e compreensão do código.

### engenharia reversa

Identificadores pouco familiares podem aumentar o esforço de leitura humana, mas não oferecem proteção confiável contra ferramentas automatizadas.

O Unicode, isoladamente, não transforma um programa em algo impossível de analisar.

## um pequeno experimento

O módulo `unicodedata` permite examinar propriedades de caracteres Unicode.

```python
import unicodedata

caracteres = ["a", "а", "K", "𓂀"]

for caractere in caracteres:
    print("caractere:", caractere)
    print("nome:", unicodedata.name(caractere))
    print("categoria:", unicodedata.category(caractere))
    print("identificador:", caractere.isidentifier())
    print("NFKC:", unicodedata.normalize("NFKC", caractere))
    print("-" * 30)
```

Esse experimento permite observar diferenças entre caracteres visualmente semelhantes, suas categorias Unicode e a normalização aplicada.

O método `isidentifier()` também permite verificar se uma string pode formar um identificador sintaticamente válido.

## hieróglifos egípcios e python

Um dos experimentos que fiz com Unicode envolveu hieróglifos egípcios.

A aparência incomum desses símbolos os torna interessantes para explorar ofuscação de código. Um arquivo contendo dezenas de hieróglifos pode parecer muito mais complexo do que o algoritmo que realmente executa.

Entretanto, existe uma diferença importante entre caracteres Unicode que o Python consegue processar e caracteres que podem ser utilizados como identificadores.

### por que hieróglifos não podem ser variáveis

Hieróglifos egípcios fazem parte do padrão Unicode, mas não são identificadores válidos em Python.

Por exemplo:

```python
𓂀 = 42
```

Esse código produz um `SyntaxError`.

Isso acontece porque os hieróglifos não satisfazem as regras de identificação baseadas em `XID_Start` e `XID_Continue`.

Por outro lado, podem ser utilizados normalmente como texto:

```python
simbolos = {
    "𓂀": 42,
    "𓆣": 13,
    "𓋹": 7,
}

print(simbolos["𓂀"])
```

Resultado:

```text
42
```

Nesse caso, os hieróglifos são chaves de um dicionário, não nomes de variáveis.

Um programa pode conter centenas de hieróglifos e continuar sendo um código Python perfeitamente válido, desde que esses caracteres sejam utilizados em contextos permitidos pela linguagem.

## combinando hieróglifos e identificadores unicode

Para explorar esse comportamento, montei um pequeno experimento combinando hieróglifos egípcios, identificadores japoneses, letras gregas e operações matemáticas.

O objetivo era produzir um código visualmente incomum, mas sintaticamente válido.

```python
# -*- coding: utf-8 -*-

象徴 = "𓂀𓆣𓋹"

記号 = {
    "𓂀": 7,
    "𓆣": 3,
    "𓋹": 2,
}

def 処理_α(値):
    結果 = 値["𓂀"] * 値["𓆣"]
    return 結果 + 値["𓋹"]

def 復号(入力):
    return "".join(chr(文字 ^ 0x17) for 文字 in 入力)

暗号 = [71, 78, 67, 95, 88, 89]

print(象徴)
print(処理_α(記号))
print(復号(暗号))
```

Resultado:

```text
𓂀𓆣𓋹
23
PYTHON
```

Apesar da aparência, o programa executa apenas três operações:

1. Exibe uma string contendo hieróglifos.
2. Calcula um valor utilizando entradas de um dicionário.
3. Decodifica uma pequena sequência utilizando XOR.

A operação XOR utiliza a chave hexadecimal `0x17` para recuperar os caracteres da mensagem.

O uso de identificadores japoneses e gregos não modifica a lógica do algoritmo.

### aparência não é complexidade

O experimento demonstra uma limitação importante da ofuscação visual.

Caracteres pouco familiares podem dificultar a leitura humana, mas não alteram fundamentalmente o comportamento do programa.

O Python continua executando expressões, funções, laços e operações comuns.

A ofuscação baseada em Unicode pode gerar confusão, mas não deve ser confundida com criptografia ou proteção efetiva contra engenharia reversa.

Às vezes, a parte mais intimidadora de um programa é simplesmente sua aparência.

## considerações finais

A possibilidade de utilizar Unicode em identificadores é uma característica interessante da linguagem Python.

Ela amplia as opções de representação textual, mas também introduz questões relacionadas à normalização, legibilidade e segurança.

Durante meus experimentos com ofuscação, percebi que a aparência de um código pode ser muito diferente de sua complexidade real.

Um programa visualmente confuso não é necessariamente difícil de interpretar.

Às vezes, o maior obstáculo não está no algoritmo, mas na forma como ele é apresentado.

---

**referências**

- [Python — Lexical analysis](https://docs.python.org/3/reference/lexical_analysis.html#identifiers)
- [PEP 3131 — Supporting Non-ASCII Identifiers](https://peps.python.org/pep-3131/)
- [Python — unicodedata](https://docs.python.org/3/library/unicodedata.html)
- [Unicode Standard Annex #15 — Normalization Forms](https://unicode.org/reports/tr15/)
