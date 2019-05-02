# Conversor de algarismos romanos para arábicos (e vice-versa)

![Lib version](https://img.shields.io/badge/lib-v1.0.0-blue.svg) 
![JavaScript](https://img.shields.io/badge/-JavaScript-yellow.svg) 
![mocha](https://img.shields.io/badge/-mocha-yellowgreen.svg)
![nyc](https://img.shields.io/badge/-nyc-brightgreen.svg)
![chai](https://img.shields.io/badge/-chai-orange.svg)

Esta biblioteca se destina a converter algarismos romanos para números inteiros e vice e versa.

## Como instalar:

```
$  npm install lab-roman-int-converter
```

## Como utilizar:

### Converter algarismos romanos

```
> const romanToInt = require('lab-roman-int-converter');

> console.log(romanToInt('algarismo'));
```
*Formato de entrada da função: string.*

Exemplo:

```
> const romanToInt = require('lab-roman-int-converter.romanToInt');

> romanToInt('Xx');
> // return 20
```

### Converter números inteiros para romanos
*Formato de entrada da função: números (em string ou number).*

Exemplo:

```
> const intToRoman = require('lab-roman-int-converter.intToRoman');
> intToRoman(20);
> // return XX
```

## Roadmap oficial do projeto

### versão 1.0.0 (released)
* converte romanos para inteiros
* converte inteiros para romanos
* aceita strings maiúsculas e minúsculas para converter romanos para números inteiros
* aceita strings e números para converter inteiros para romanos