function relatorioVendas(produtos) {
  let totalArrecadado = 0
  let maisVendido = produtos[0]
  let maisCaro = produtos[0]

  for (const produto of produtos) {
    totalArrecadado += produto.preco * produto.quantidade

    if (produto.quantidade > maisVendido.quantidade) {
      maisVendido = produto
    }

    if (produto.preco > maisCaro.preco) {
      maisCaro = produto
    }
  }

  return {
    totalArrecadado,
    maisVendido: maisVendido.nome,
    maisCaro: maisCaro.nome
  }
}

const vendas = [
  { nome: 'Camiseta', preco: 50, quantidade: 10 },
  { nome: 'Calça', preco: 100, quantidade: 5 },
  { nome: 'Boné', preco: 30, quantidade: 20 }
]
console.log(relatorioVendas(vendas))
