import { precosLivros as livros } from "./listaLivros.js";

export default function menorValor(arrProdutos, posicaoInicial) {
  
  let indexMaisBarato = posicaoInicial;
  
  for (let atual = posicaoInicial; atual < arrProdutos.length; atual++) {
    if (arrProdutos[atual].preco < arrProdutos[indexMaisBarato].preco) {
      indexMaisBarato = atual
    }
  }

  return indexMaisBarato
}

console.log(`O livro mais barato custa R$${livros[menorValor(livros, 0)].preco}, ${livros[menorValor(livros, 0)].titulo}`)