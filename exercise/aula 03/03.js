// ## Funções
//
// ### 3.1 Declaração de Funções
//
// 1. Escreva uma função chamada `saudacao` que receba um nome como parâmetro e exiba no console:
//
//     ```
//     Olá, [nome]!
//     ```
//
//     Chame a função passando diferentes nomes como argumento.
//
// 2. Crie uma função chamada `dobrar` que receba um número como parâmetro e retorne o dobro do número.
//
// ### 3.2 Parâmetros
//
// 1. Escreva uma função chamada `calcularIMC` que receba dois parâmetros: peso (kg) e altura (m). A função deve calcular e retornar o IMC usando a fórmula:
//
//     ```
//     IMC = peso / (altura * altura)
//     ```
//
//     Exiba o resultado no console.
//
// 2. Adapte a função acima para que o parâmetro `altura` seja opcional, com valor padrão de `1.70`.
//
// ### 3.3 Retornos
//
// 1. Escreva uma função chamada `somaArray` que receba um array de números como parâmetro e retorne a soma de todos os elementos.
// 2. Crie uma função chamada `maiorNumero` que receba dois números como parâmetros e retorne o maior entre eles.
//
// ### 3.4 Funções Anônimas e Arrow Functions
//
// 1. Crie uma função anônima e armazene-a em uma variável chamada `subtrair`. A função deve receber dois números como parâmetros e retornar o resultado da subtração.
// 2. Converta a função abaixo para o formato arrow function:
//
//     ```jsx
//     function multiplicar(a, b) {
//       return a * b;
//      }
//     ```
//
//
// ### 3.5 Desafios
//
// 1. Escreva uma função chamada `processarArray` que receba dois parâmetros:
//     - Um array de números.
//     - Uma função que será aplicada a cada número do array.
//
//     Exemplo de uso:
//
//     ```jsx
//     let dobrar = (x) => x * 2;
//     console.log(processarArray([1, 2, 3], dobrar)); // [2, 4, 6]
//     ```
//
// 2. Crie uma função de ordem superior chamada `criarSaudacao` que retorne outra função. A função retornada deve receber um nome e exibir uma saudação personalizada:
//
// Dica:  uma **função de alta ordem (Higher-Order Function)** é uma função que:Recebe uma ou mais funções como argumento(s), e/ou Retorna uma função como resultado. Essas funções são um dos pilares da programação funcional e são amplamente usadas em JavaScript para manipulação de dados e programação **assíncrona**.
//
// ```jsx
// let ola = criarSaudacao("Olá");
// console.log(ola("João")); // "Olá, João!"
// ```

function saudacao(nome) {
  console.log(`Olá, ${nome}!`)
}

saudacao('João')
saudacao('Maria')

function dobrar(numero) {
  return numero * 2
}

console.log(dobrar(5))

/////////////////////////////////////////////////////////////////////////

function calcularIMC(peso, altura = 1.7) {
  return peso / altura ** 2
}

console.log(calcularIMC(80, 1.71))
console.log(calcularIMC(70))

////////////////////////////////////////////////////////////////////////

function somaArray(arr) {
  return arr.reduce((soma, num) => soma + num, 0)
}

console.log(somaArray([1, 2, 3, 4]))

function maiorNumero(a, b) {
  return a > b ? a : b
}

console.log(maiorNumero(10, 20))

////////////////////////////////////////////////////////////////////////
