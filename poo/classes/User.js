class User {
    constructor(nome, email, nascimento, role, ativo = true) {
        this.nome = nome
        this.email = email
        this.nascimento = nascimento
        this.role = role || 'estudante'
        this.ativo = ativo
    }

    exibirInfos() {
        return `${this.nome}, ${this.email}`
    }
}

const user = new User('Juliana', 'j@j.com', '2015-05-01')
console.log(user);
console.log(user.exibirInfos());

console.log(User.prototype.isPrototypeOf(user)); //true
