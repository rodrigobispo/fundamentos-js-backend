const cliente = {
    nome: "Jose",
    idade: 33,
    email: "jose@email.com",
    telefones: ["+550033338888", "+550033334444"]
}
cliente.animalEstimacao = [{
    nome: "Kripto",
    raca: "Cão",
    vacinado: true
}]
cliente.animalEstimacao.push({
    nome: "Lex",
    raca: "Gato",
    vacinado: false
})
cliente.animalEstimacao.push({
    nome: "Mel",
    raca: "Cão",
    vacinado: true
})

const animaisVacinados = cliente.animalEstimacao.filter(animal => animal.vacinado === true);

for (let indice in animaisVacinados) {
    console.log(animaisVacinados[indice].nome);
}

console.log(animaisVacinados)

