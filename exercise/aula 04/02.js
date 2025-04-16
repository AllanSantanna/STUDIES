// ## Switch
//
// 1. Crie um programa que receba um número de 1 a 7 e imprima o dia da semana correspondente:
//     - 1 para “Domingo”
//     - 2 para “Segunda-feira”
//     - E assim por diante.
// 2. Implemente um programa que receba uma nota de conceito (`A`, `B`, `C`, `D`, `F`) e exiba a mensagem correspondente:
//     - `A`: “Excelente”
//     - `B`: “Bom”
//     - `C`: “Regular”
//     - `D`: “Ruim”
//     - `F`: “Reprovado”
//     Caso o conceito não seja válido, exiba “Nota inválida”.

const dia = 3

switch (dia) {
  case 1:
    console.log('Domingo')
    break
  case 2:
    console.log('Segunda-feira')
    break
  case 3:
    console.log('Terça-feira')
    break
  case 4:
    console.log('Quarta-feira')
    break
  case 5:
    console.log('Quinta-feira')
    break
  case 6:
    console.log('Sexta-feira')
    break
  case 7:
    console.log('Sábado')
    break
  default:
    console.log('Número inválido')
}

////////////////////////////////////////////////////////////

let conceito = 'B'

switch (conceito) {
  case 'A':
    console.log('Excelente')
    break
  case 'B':
    console.log('Bom')
    break
  case 'C':
    console.log('Regular')
    break
  case 'D':
    console.log('Ruim')
    break
  case 'F':
    console.log('Reprovado')
    break
  default:
    console.log('Nota inválida')
}
