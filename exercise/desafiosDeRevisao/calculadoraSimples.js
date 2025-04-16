function calculadora(num1, num2, operacao) {
  if (operacao === '+') {
    return num1 + num2
  } else if (operacao === '-') {
    return num1 - num2
  } else if (operacao === '*') {
    return num1 * num2
  } else if (operacao === '/') {
    if (num2 === 0) {
      return 'Erro: divisão por zero!'
    }
    return num1 / num2
  } else {
    return 'Erro: operação inválida!'
  }
}

console.log(calculadora(10, 5, '-'))
