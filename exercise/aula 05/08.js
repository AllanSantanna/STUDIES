const prompt = require('prompt-sync')()
let numero
do {
  numero = parseInt(prompt('Digite um número entre 1 e 10: '))
} while (numero < 1 || numero > 10)
console.log('Número válido:', numero)
