function analiseIdades(idades) {
  const maior = Math.max(...idades)
  const menor = Math.min(...idades)
  const soma = idades.reduce((acum, idade) => acum + idade, 0)
  const media = soma / idades.length

  return { maior, menor, media, soma }
}

const resultado = analiseIdades([25, 30, 18, 40])
console.log(resultado)
