
---
title: about unicode identifiers in python
description: exploring unicode characters, identifier normalization, code obfuscation, and the boundaries of python syntax.
date: 2026-11-14
tags: [python, unicode, obfuscation, security]
---

## unicode identifiers in python

One interesting feature of Python is that variable, function, and class names are not limited to ASCII characters.

Since Python 3, certain Unicode characters can be used as identifiers, allowing letters from different writing systems to become part of the source code.

For example:

```python
変数 = 42
print(変数)
```

The code above is valid and prints `42`.

This is possible because Python follows specific rules to determine which Unicode characters can be used in identifiers.

However, Unicode support does not mean that every Unicode symbol is accepted.

## how python interprets identifiers

Python uses Unicode properties associated with the `XID_Start` and `XID_Continue` categories.

In simplified terms:

- `XID_Start` determines which characters may begin an identifier.
- `XID_Continue` determines which characters may appear after the first character.
- The underscore character `_` is also permitted.
- Digits may appear after the first character, but cannot begin a regular identifier.

For example:

```python
名前 = "cerberus"
contador_数字 = 3

print(名前)
print(contador_数字)
```

Both identifiers are valid, despite containing characters from different writing systems.

On the other hand:

```python
𓂀 = 10
```

This example is not valid in Python.

The Egyptian hieroglyph shown above does not belong to the Unicode categories permitted for Python identifiers.

Therefore, the existence of a character in Unicode does not automatically make it a valid variable name.

## unicode normalization: nfkc

Another important detail is that Python applies Unicode NFKC normalization to identifiers during lexical analysis.

This means that characters with different visual representations can sometimes be interpreted as the same identifier.

Consider:

```python
K = 10

print(K)
```

The symbol `K` (Kelvin sign) is normalized to the Latin letter `K`.

As a result, the code prints `10`.

This behavior can produce unexpected results when different Unicode characters are used in variable names.

However, normalization does not mean that every visually similar character becomes equivalent.

## visually similar characters

Some characters from different writing systems look almost identical.

For example:

```python
a = 10
а = 20

print(a)
print(а)
```

The first variable uses the Latin letter `a`.

The second uses the Cyrillic letter `а`.

Although they look similar, they are different Unicode characters and remain distinct identifiers after NFKC normalization.

The program prints:

```text
10
20
```

This phenomenon is related to *homoglyphs*: characters that have similar appearances but different identities.

In software security, such differences deserve attention during code reviews.

## unicode and code obfuscation

Code obfuscation is the practice of making source code harder to understand without necessarily changing its behavior.

Although Unicode is not an obfuscation technique by itself, deliberately using unfamiliar identifiers can reduce code readability.

Compare:

```python
def calculate_total(value, rate):
    return value + value * rate

print(calculate_total(100, 0.1))
```

With:

```python
def 計算(値, 率):
    return 値 + 値 * 率

print(計算(100, 0.1))
```

Both programs produce the same result:

```text
110.0
```

The difference lies in readability for someone unfamiliar with the characters being used.

This is not encryption, nor does it prevent static analysis or reverse engineering.

The interpreter still processes ordinary language structures, including functions, arithmetic operations, and function calls.

## mixing writing systems

Python also allows identifiers composed of characters from different writing systems.

```python
def 処理_α(データ):
    結果 = データ * 2
    return 結果

print(処理_α(21))
```

Output:

```text
42
```

This example combines Japanese characters, a Greek letter, and conventional Python syntax.

Although valid, mixing writing systems can make searching, reviewing, and maintaining code more difficult.

## security implications

Unicode identifiers can introduce specific challenges in software projects.

### code review

Visually similar characters can make it difficult to identify differences between variable names.

### static analysis

Analysis tools must correctly interpret Unicode identifiers and their normalization rules.

### maintenance

Unusual identifiers may complicate searching, collaboration, and code comprehension.

### reverse engineering

Unfamiliar identifiers can increase the effort required for manual inspection, but they do not provide reliable protection against automated analysis tools.

Unicode alone does not make a program impossible to analyze.

## a small experiment

Python's `unicodedata` module allows us to inspect Unicode character properties.

```python
import unicodedata

characters = ["a", "а", "K", "𓂀"]

for character in characters:
    print("character:", character)
    print("name:", unicodedata.name(character))
    print("category:", unicodedata.category(character))
    print("identifier:", character.isidentifier())
    print("NFKC:", unicodedata.normalize("NFKC", character))
    print("-" * 30)
```

This experiment illustrates the differences between visually similar characters, their Unicode categories, and their normalized representations.

The `isidentifier()` method also allows us to check whether a string is syntactically valid as a Python identifier.

## egyptian hieroglyphs and python

One of my experiments with Unicode involved Egyptian hieroglyphs.

Their unusual appearance makes them particularly interesting when exploring code obfuscation. A source file containing dozens of hieroglyphs can look far more complicated than the algorithm it actually implements.

However, there is an important distinction between Unicode characters that Python can process and characters that Python accepts as identifiers.

### why hieroglyphs cannot be variable names

Egyptian hieroglyphs are part of the Unicode standard, but they are not valid Python identifiers.

For example:

```python
𓂀 = 42
```

This produces a `SyntaxError`.

Python uses Unicode identifier rules based on `XID_Start` and `XID_Continue`. Egyptian hieroglyphs do not satisfy these requirements.

However, Python can still process them as ordinary text.

```python
symbols = {
    "𓂀": 42,
    "𓆣": 13,
    "𓋹": 7,
}

print(symbols["𓂀"])
```

Output:

```text
42
```

Here, the hieroglyphs are dictionary keys rather than variable names.

A program can contain hundreds of hieroglyphs and still be valid Python, provided those characters appear in contexts permitted by the language.

## combining hieroglyphs and unicode identifiers

To explore this further, I created a small experiment combining Egyptian hieroglyphs, Japanese identifiers, Greek letters, and mathematical operations.

The goal was to make the code visually unusual while preserving valid Python syntax.

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

Output:

```text
𓂀𓆣𓋹
23
PYTHON
```

Despite its appearance, the program performs only three simple operations:

1. Prints a string containing hieroglyphs.
2. Calculates a value using dictionary entries.
3. Decodes a short sequence using XOR.

The XOR operation uses the hexadecimal key `0x17` to recover the characters of the message.

Using Japanese and Greek identifiers does not change the algorithm's underlying logic.

### appearance is not complexity

The experiment illustrates an important limitation of visual obfuscation.

Unfamiliar characters can make code harder for a human reader to interpret, but they do not fundamentally change the program's behavior.

Python still executes ordinary expressions, functions, loops, and dictionary operations.

Unicode-based obfuscation can create confusion, but it should not be mistaken for encryption or meaningful protection against reverse engineering.

Sometimes, the most intimidating part of a program is simply the way it looks.

## final thoughts

The ability to use Unicode characters in identifiers is an interesting feature of Python.

It expands the possibilities for textual representation while introducing considerations related to normalization, readability, and security.

During my experiments with code obfuscation, I noticed that the appearance of source code can be very different from its actual complexity.

Visually confusing code is not necessarily difficult to interpret.

Sometimes, the greatest obstacle is not the algorithm itself, but the way it is presented.

---

**references**

- [Python — Lexical analysis](https://docs.python.org/3/reference/lexical_analysis.html#identifiers)
- [PEP 3131 — Supporting Non-ASCII Identifiers](https://peps.python.org/pep-3131/)
- [Python — unicodedata](https://docs.python.org/3/library/unicodedata.html)
- [Unicode Standard Annex #15 — Normalization Forms](https://unicode.org/reports/tr15/)
