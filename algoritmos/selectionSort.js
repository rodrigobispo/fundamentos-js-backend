import { precosLivros as livros } from "./listaLivros.js";
import menorValor from "./livroMaisBarato.js";

console.log('Lista de livros ORIGINAL: ', livros)

function ordena(livros) {
  for (let atual = 0; atual < livros.length; atual++) {
    let menor = menorValor(livros, atual)
  
    let livroAtual = livros[atual]
    let livroMenorPreco = livros[menor]
  
    livros[atual] = livroMenorPreco
    livros[menor] = livroAtual
  }
  return livros
}

function ordenaComForEach(livros) {
  livros.forEach((_, indice) => {
    let menor = menorValor(livros, indice)
  
    let livroAtual = livros[indice]
    let livroMenorPreco = livros[menor]
  
    livros[indice] = livroMenorPreco
    livros[menor] = livroAtual
  })
  return livros
}

console.log('Lista de livros DEPOIS: ', ordena(livros))
console.log('Lista de livros DEPOIS (com forEach): ', ordenaComForEach(livros))
