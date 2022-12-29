// Uma higher order function é uma função que recebe uma outra como argumento, 
// ou uma função que retorna outra função.

// Ex.: Como as duas funções estão no mesmo escopo global, a função usuarioLogin() 
// consegue acessar a função acesso(). Assim, funções com responsabilidades diferentes 
// são geradas dentro de outras funções e o valor de retorno da função usuarioLogin() é outra função, acesso().

const acesso = (nome) => {
    return `${nome} logou com sucesso no sistema!`
}

const usuarioLogin = (nome) => {
    let array = []
    for (i = 0; i < 90000; i++) {
        array.push(i)
    }
    return acesso(nome)
}

let print = usuarioLogin("Luke")
console.log(print);

// autor: Felipe Nascimento, https://www.alura.com.br/artigos/high-order-functions