const numeros = [3, 5, 7, 2, 8]
let maior = numeros[0]
for (const numero of numeros) {
  if (numero > maior) maior = numero
}
console.log('Maior número:', maior)

const n = 5
for (let i = 0; i < n; i++) {
  console.log('*'.repeat(n))
}
