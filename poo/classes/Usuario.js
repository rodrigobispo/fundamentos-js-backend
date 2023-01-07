export default class Usuario {
    #nome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, email, nascimento, role, ativo = true) {
        this.#nome = nome
        this.#email = email
        this.#nascimento = nascimento
        this.#role = role || 'estudante'
        this.#ativo = ativo
    }

    exibeInfos() {
        console.log(this.#montaObjUser())
        return `${this.nome}, ${this.email}, ${this.role}`
    }

    #montaObjUser() {
        return ({
            nome: this.#nome,
            email: this.#email,
            nascimento: this.#nascimento,
            role: this.#role,
            ativo: this.#ativo
        })
    }

    get nome() {
        return this.#nome
    }
    get email() {
        return this.#email
    }
    get nascimento() {
        return this.#nascimento
    }
    get role() {
        return this.#role
    }
    get ativo() {
        return this.#ativo
    }

    set nome(nome) {
        this.#nome = nome
    }
}
