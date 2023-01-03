const dados = require("./cliente.json");

console.log(dados);
console.log(typeof dados); // object

const clienteEmString = JSON.stringify(dados);

console.log(clienteEmString);
console.log(typeof clienteEmString); // string

console.log(clienteEmString.nome); //undefined

const objetoCliente = JSON.parse(clienteEmString);

console.log(objetoCliente);
console.log(objetoCliente.nome); // Joao
