const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno) {

    if (listaDeAlunosEMedias[0].includes(aluno)) {

        const [alunos, medias] = listaDeAlunosEMedias; //desestruturação de lista

        const indice = alunos.indexOf(aluno);

        const mediaDoAluno = medias[indice];

        console.log(`${aluno} tem a média ${mediaDoAluno}.`);

    } else {
        console.log("Aluno não encontrado!");
    }
}

exibeNomeENota("João");

//repetição

const numeros = [100, 200, 300, 400, 500, 600];

// Primeira expressão: é executada apenas uma única vez
// Segunda expressão: condição de execução
// Terceira expressão: é executada sempre ao final do bloco

for (let indice = 0; indice < numeros.length; indice++) {
    console.log(numeros[indice]);
}

const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

for (let i = 0; i < notas.length; i++) {
    somaDasNotas += notas[i];
}

const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}.`);


{
    const notas1 = [10, 6.5, 8, 7.5]
    const notas2 = [9, 6, 6]
    const notas3 = [8.5, 9.5]

    const notasGerais = [notas1, notas2, notas3]

    let media = 0

    for (let i = 0; i < notasGerais.length; i++) {
        for (let j = 0; j < notasGerais[i].length; j++) {
            media += notasGerais[i][j] / notasGerais[i].length;
        }
    }

    media = media / notasGerais.length

    console.log(media)
}