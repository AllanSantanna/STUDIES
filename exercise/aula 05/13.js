const produtos = [
  { nome: 'Camiseta', preco: 25 },
  { nome: 'Calça', preco: 80 },
  { nome: 'Boné', preco: 15 }
]

const produtosCaros = produtos.filter(produto => produto.preco > 20)
const nomesProdutos = produtosCaros.map(produto => produto.nome)
const totalPreco = produtosCaros.reduce(
  (soma, produto) => soma + produto.preco,
  0
)

console.log('Produtos caros:', nomesProdutos)
console.log('Total dos preços:', totalPreco)
