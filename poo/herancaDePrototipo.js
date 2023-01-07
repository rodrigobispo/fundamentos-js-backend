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

const admin = {
    nome: "Juliano",
    email: "juliano@m.com",
    telefone: "6188556658",
    role: "admin",
    criarCurso() {
        console.log("Curso criado.")
    }
}

Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.exibirInfo()
