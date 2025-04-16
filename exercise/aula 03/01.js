// # Exercícios: Aula 3 - JavaScript (JS)
//
// ## 1. Identificando Tipos
//
// 1. Crie variáveis contendo os seguintes tipos de dados:
//     - Uma string com seu nome.
//     - Um número representando sua idade.
//     - Um booleano representando se você gosta de programar.
//     - Um array com suas três comidas favoritas.
//     - Um objeto contendo informações sobre seu computador (marca, modelo e ano).
//
//     Use `typeof` para exibir o tipo de cada variável no console.
//
// 2. Dada a lista abaixo:
//
//     ```jsx
//     let itens = [42, "texto", true, null, { nome: "João" }, [1, 2, 3]];
//     ```
//
//     Escreva um programa que identifique o tipo de cada elemento da lista.

let nome = 'allan'
let idade = 30
let gostaDeProgramar = true
let comidasFavoritas = ['tortaDeFrango', 'salpicao', 'churrasco']
let computador = { marca: 'intel', modelo: 'i310105f', ano: 2022 }

console.log(typeof nome)
console.log(typeof idade)
console.log(typeof gostaDeProgramar)
console.log(typeof comidasFavoritas)
console.log(typeof computador)

//////////////////////////////////////////////////////////////////////////////////////

let itens = [42, 'texto', true, null, { nome: 'João' }, [1, 2, 3]]

itens.forEach(item => {
  console.log(`${item}: ${typeof item}`)
})
