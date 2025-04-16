const precos = [19.99, 49.99, 25.5, 10]
const total = precos.reduce((soma, preco) => soma + preco, 0)
console.log('Total:', total)
