const user = {
    nome: "Maria",
    email: "maria@m.com",
    telefone: "61998877778",
    nascimento: "1999/01/01",
    role: "admin",
    ativo: "true",
    exibirInfo: function() {
        console.log(this.nome, this.email)
    }
}

user.exibirInfo(); //Maria maria@m.com

const exibir = function() {
    console.log(this.nome);
}

const exibirNome = exibir.bind(user);

exibir(); //undefined
exibirNome(); //Maria