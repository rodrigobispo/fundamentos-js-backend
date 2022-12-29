//filtro de alunos com média menor do que 6

const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const medias = [7, 4.5, 8, 7.5];

// conversão com '_' no parâmetro, já que não está sendo usado o que seria o 'aluno'
const reprovados = alunos.filter((_, indice) => {
    return medias[indice] < 6;
});

const reprovados2 = alunos.filter((_, indice) => medias[indice] < 6);

console.log(reprovados); //[ 'Marcos' ]
console.log(reprovados2); //[ 'Marcos' ]

