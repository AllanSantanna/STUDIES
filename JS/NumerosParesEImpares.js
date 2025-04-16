function analiseNumeros(numeros) {
  let quantidadePares = 0
  let quantidadeImpares = 0

  for (const numero of numeros) {
    if (numero % 2 === 0) {
      quantidadePares++
    } else {
      quantidadeImpares++
    }
  }

  return { quantidadePares, quantidadeImpares }
}

const resultado = analiseNumeros([3, 7, 2, 8, 1])
console.log(resultado)
