// objeto

const Livro = {
    nome: "React Native",
    editora: "Casa do Código",
    paginas: 185,
    anunciar: function() {
        console.log("O livro " + this.nome + " é indicado.");
    }
}

Livro.anunciar();

{
    // estrutura de objeto

    const LivroObjeto = function(nome, editora, paginas) {
        gNome = nome,
        gEditora = editora,
        gPaginas = paginas
        
        this.getNome = function() {
            return gNome
        }
        
        this.getEditora = function() {
            return gEditora
        }
        
        this.getPaginas = function() {
            return gPaginas
        }
    }
    
    // estrutura de classe

    class Livro {
        constructor(nome, editora, paginas) {
            this.nome = nome
            this.editora = editora
            this.paginas = paginas
        }
        anunciarTitulo() {
            console.log(`Título: ${this.nome}`);
        }
        descreverTitulo() {
            console.log(`${this.nome} é um livro da editora ${this.editora} e possui ${this.paginas} páginas`);
        }
    }

    class LivroColecao extends Livro {
        constructor(nome, nomeColecao) {
            super(nome)
            this.nomeColecao = nomeColecao
        }
        descreverColecao() {
            console.log(`O livro ${this.nome} faz parte da coleção ${this.nomeColecao}`)
        }
    }

    const livro = new LivroObjeto("Java", "Editora X", 400);
    console.log(livro.getNome());
    console.log(livro.getEditora());
    console.log(livro.getPaginas());
    
    const livroJava = new Livro("Java", "Editora X", 400);
    livroJava.anunciarTitulo();
    livroJava.descreverTitulo();

    const livroCol = new LivroColecao("Java", "Javeiros");
    livroCol.descreverColecao();
}
