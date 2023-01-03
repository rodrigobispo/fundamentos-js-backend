const clientes = require("./clientes.json");

function ordenar(lista, propriedade) {
    const resultado = lista.sort((a, b) => {
        if (a[propriedade] < b[propriedade]) {
            return -1;
        }
        if (a[propriedade] > b[propriedade]) {
            return 1;
        }
        return 0;
    });

    return resultado;
}

const ordenadosPorNome = ordenar(clientes, "nome");

console.log(ordenadosPorNome);

ordenadosPorNome.forEach(cliente => console.log(cliente.nome));
