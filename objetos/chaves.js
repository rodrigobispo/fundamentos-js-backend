validaImprime(cliente1());
validaImprime(cliente2());

function cliente1() {

    const cliente = {
        nome: "Joao",
        idade: 24,
        email: "joao@firma.com",
        telefone: ["1155555550", "1144444440"],
    };
    cliente.enderecos = [
        {
            rua: "R. Joseph Climber",
            numero: 1337,
            apartamento: true,
            complemento: "ap 934",
        },
    ];
    return cliente;
}

function cliente2() {

    const cliente = {
        nome: "Maria",
        idade: 21,
        email: "maria@firma.com",
        telefone: ["444242222", "11122223333"],
    };
    return cliente;
}

function validaImprime(cliente) {

    const chavesDoObjeto = Object.keys(cliente);
    
    console.log(`Chaves do(a) ${cliente.nome}:`);
    console.log(chavesDoObjeto);
    
    if (!chavesDoObjeto.includes("enderecos")) {
        console.error("Erro. É necessário ter um endereço cadastrado.");
        return;
    }
    console.log("Ok! Tem endereço.");
}

