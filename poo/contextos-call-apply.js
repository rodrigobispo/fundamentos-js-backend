// call

function exibeInfos() {
    console.log(this.nome, this.email)
}

const user = {
    nome: 'Mariana',
    email: 'm@m.com'
}

exibeInfos.call(user)


// apply

function exibeMensagem(nome, email) {
    console.log(`usuário: ${nome}, email ${email}`)
}
const user2 = {
    nome: 'Mariana',
    email: 'm@m.com',
    executaFuncao: function (fn) {
        fn.apply(user, [this.nome, this.email])
    }
}
user2.executaFuncao(exibeMensagem) //usuário: Mariana, email m@m.com
