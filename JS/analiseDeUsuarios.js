function cadastroUsuarios(usuarios, cidadeAlvo) {
  let maisVelho = usuarios[0]
  let maisJovem = usuarios[0]
  let quantidadeMesmaCidade = 0

  for (const usuario of usuarios) {
    if (usuario.idade > maisVelho.idade) {
      maisVelho = usuario
    }

    if (usuario.idade < maisJovem.idade) {
      maisJovem = usuario
    }

    if (usuario.cidade === cidadeAlvo) {
      quantidadeMesmaCidade++
    }
  }

  return {
    maisVelho,
    maisJovem,
    quantidadeMesmaCidade
  }
}

const usuarios = [
  { nome: 'Ana', idade: 25, cidade: 'São Paulo' },
  { nome: 'João', idade: 30, cidade: 'Rio de Janeiro' },
  { nome: 'Maria', idade: 20, cidade: 'São Paulo' }
]
console.log(cadastroUsuarios(usuarios, 'São Paulo'))
