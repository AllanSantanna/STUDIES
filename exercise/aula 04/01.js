// ## 1. If, Else If e Else
//
// 1. Crie um programa que receba a nota de um aluno e imprima:
//     - “Aprovado” se a nota for maior ou igual a 7.
//     - “Recuperação” se a nota for maior ou igual a 5, mas menor que 7.
//     - “Reprovado” caso contrário.
// 2. Escreva um programa que receba a idade de uma pessoa e classifique-a como:
//     - “Criança” para menos de 12 anos.
//     - “Adolescente” para entre 12 e 17 anos.
//     - “Adulto” para 18 anos ou mais.
// 3. Implemente um sistema de controle de tráfego que:
//     - Exiba “Siga em frente” se o sinal for verde.
//     - Exiba “Atenção” se o sinal for amarelo.
//     - Exiba “Pare” se o sinal for vermelho.

const nota = 6

if (nota >= 7) {
  console.log('Aprovado')
} else if (nota >= 5) {
  console.log('Recuperação')
} else {
  console.log('Reprovado')
}

////////////////////////////////////////////////////////////

const idade = 14

if (idade < 12) {
  console.log('Criança')
} else if (idade >= 12 && idade <= 17) {
  console.log('Adolescente')
} else {
  console.log('Adulto')
}

////////////////////////////////////////////////////////////

const sinal = 'vermelho'

if (sinal === 'verde') {
  console.log('Siga em frente')
} else if (sinal === 'amarelo') {
  console.log('Atenção')
} else if (sinal === 'vermelho') {
  console.log('Pare')
} else {
  console.log('Sinal inválido')
}

////////////////////////////////////////////////////////////
