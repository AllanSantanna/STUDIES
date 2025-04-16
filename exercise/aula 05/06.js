const livro = {
  titulo: 'O Senhor dos Anéis',
  autor: 'J.R.R. Tolkien',
  ano: 1954
}
for (const propriedade in livro) {
  console.log(`${propriedade}: ${livro[propriedade]}`)
}
