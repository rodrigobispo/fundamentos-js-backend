// espalhamento/spread operator -> com reticências passados como parâmetro

let cliente = instanciaCliente();

// ligaParaCliente(cliente.telefone[0], cliente.telefone[1]);
ligaParaCliente(...cliente.telefone);

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0],
};

console.log(encomenda);

function instanciaCliente() {

    var cliente = {
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

function ligaParaCliente(telefoneComercial, telefoneResidencial) {
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefoneResidencial}`);
}
