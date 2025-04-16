// ## Operador Ternário
//
// 1. Reescreva o exercício 1 usando o operador ternário para classificar a nota.
// 2. Crie um programa que receba um número e exiba:
//     - “Par” se o número for divisível por 2.
//     - “Ímpar” caso contrário.
//     Use o operador ternário para resolver.

let nota = 6.5

let resultado = nota >= 7 ? 'Aprovado' : nota >= 5 ? 'Recuperação' : 'Reprovado'

console.log(resultado)

////////////////////////////////////////////////////////////

let numero = 7

let tipo = numero % 2 === 0 ? 'Par' : 'Ímpar'

console.log(tipo)
