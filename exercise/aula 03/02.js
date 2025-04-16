// ## Desestruturação e Rest
//
// ### 2.1 Desestruturação de Arrays
//
// 1. Dado o array:
//
//     ```jsx
//     let numeros = [10, 20, 30, 40];
//     ```
//
//     Escreva um programa que:
//
//     - Extraia o primeiro e o segundo número em variáveis chamadas `primeiro` e `segundo`.
//     - Armazene o restante dos números em uma variável chamada `resto`.
// 2. Use a desestruturação para trocar os valores das variáveis `a` e `b` sem criar uma variável temporária:
//
//     ```jsx
//     let a = 5;
//     let b = 10;
//     ```
//
//
// ### 2.2 Desestruturação de Objetos
//
// 1. Dado o objeto:
//
//     ```jsx
//     let pessoa = { nome: "Ana", idade: 28, cidade: "Rio" };
//     ```
//
//     Escreva um programa que:
//
//     - Extraia as propriedades `nome` e `idade` em variáveis.
//     - Extraia a propriedade `cidade` com um nome diferente (`local`).

let numeros = [10, 20, 30, 40]

let [primeiro, segundo, ...resto] = numeros
console.log(primeiro, segundo, resto)

let a = 5,
  b = 10
;[a, b] = [b, a]
console.log(a, b)

/////////////////////////////////////////////////////////////////

let pessoa = { nome: 'Ana', idade: 28, cidade: 'Rio' }

let { nome, idade, cidade: local } = pessoa
console.log(nome, idade, local)
