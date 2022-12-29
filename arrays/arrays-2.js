const salaJS = ["Evaldo", "Camis", "Mari"];
const salaPython = ["Ju", "Leo", "Raquel"];

const salasUnificadas = salaPython.concat(salaJS);

console.log(salasUnificadas); //[ 'Ju', 'Leo', 'Raquel', 'Evaldo', 'Camis', 'Mari' ]


//matriz, duas dimensões

const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

//posição array     [0]    [1]
const listaDeAlunosEMedias = [alunos, medias];

console.log(listaDeAlunosEMedias)
console.log(
    `A aluna da posição 1 da lista de alunos é: ${listaDeAlunosEMedias[0][2]}.
    A nota dessa aluna é ${listaDeAlunosEMedias[1][2]}.
    `
);

const funcionarios = [
    ["Ana", "Juliana", "Leonardo"],
    [30, 35, 28]
];
console.log(`${funcionarios[0][2]} tem idade ${funcionarios[1][2]}`)
