# AULA-12

## [JavaScript](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps)

### Nomenclatura de variáveis:
 * devem começar com letra, $ ou _
 * Não podem começar com números
 * é possível utilizar letras e numeros
 * é possível utilizar símbolos e acentos, mas não é recomendado por padroes
 * Não pode conter espaço
 * Não pode ser [palavras reservadas](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Lexical_grammar#palavras-chave)

## Tipo de variáveis
 * number
 * string
 * boolean
 * null / undefined 
 * object
 * function

### Operadores
>#### Atribuição (binário)
> * `=` atribuição
> * `+=` incremento de x 
> * `-=` decremento de x
> * `*=` multiplicar a própria variável por x
> * `\=` dividir a própria variável por x
> * `**=` potência onde a própria variável é a base na potência x
> * `%=` Utilizar o resto dadivisão entre a própria variável e x
> * `x++` pós incremento de 1
> * `x--` pós decremento de 1
> * `--x` pré decremento de 1
> * `--x` pré decremento de 1

>#### Aritiméticos (binário)
> * `+` soma 
> * `-` subtração
> * `*` multiplicação
> * `**` potência
> * `/` divisão
> * `%` resto da divisãoa

>#### Precedencia
> * `()`
> *  `**`
> * `*`, `/`, `%`
> * `+`, `-`
> * aritiméticos, relacionais e lógicos (!, &&, ||), ternário

>#### Relacionais
> * `==` igualdade de conteúdo
> * `<` menor que
> * `>` maior que
> * `<=` menor ou igual
> * `>=` maior ou igual
> * `!=` diferente
> * `!=` diferente
> * `===` idêntico
> * `!==` não idêntico

>#### lógicos
> * `!` negação
> * `&&` conjunção lógica ou E lógico
> * `||` disconjunção ou OU lógico

>#### ternário
> * teste `?` valorVerdaded `:` valorFalso 

`${x}` placeholder
`const salarioFormatado = salario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });`

### [Node](https://nodejs.org/en/download/)

### [DOM](https://www.w3schools.com/js/js_htmldom.asp)
> _Document Object Model_, Modelo de objeto de documentação, pode ser descrito como árvore HTML\
> #### [Seletores](https://developer.mozilla.org/pt-BR/docs/Web/API/Document)
> * window.document.querySelectorAll('footer div p')[0];
> * window.document.querySelector('footer div p');
> * window.document.getElementByTagName('id')[0];
> * window.document.getElementById('id');
> * window.document.getElementByName('name');
> * window.document.getElementsByClass('name')[0];
> #### [events](https://developer.mozilla.org/pt-BR/docs/Web/Events)
> * mouseenter
> * mousemove
> * mousedown
> * mouseup
> * click
> * mouseout
> 
html on<nomeDoEvento> = 'meuMetodo()'

addEventListner('nomeDoEvento','meuMetodo' )
