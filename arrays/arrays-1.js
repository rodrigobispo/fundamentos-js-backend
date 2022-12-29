const notas = [10, 6.5, 8, 7.5];

notas.push(4.5);

const media = (notas[0] + notas[1] + notas[2] + notas[3] + notas[4]) / notas.length;

console.log("Média: " + media);

notas.pop(); //remoção de último elemento

console.log("Notas: " + notas)
console.log("Primeiro item par: " + notas.find(element => element % 2 === 0)) //10 -> apenas o primeiro
console.log("Pares: " + notas.filter(element => element % 2 === 0)) //[10, 8] -> lista como resultado

const alunos = [
    "João",
    "Juliana",
    "Ana",
    "Caio",
    "Lara",
    "Marjorie",
    "Guilherme",
    "Aline",
    "Fabiana",
    "Andre",
    "Carlos",
    "Paulo",
    "Bia",
    "Vivian",
    "Isabela",
    "Vinícius",
    "Renan",
    "Renata",
    "Daisy",
    "Camilo",
];
console.log("Exibindo slice(0, 4): " + alunos.slice(0, 4)); //[ 'João', 'Juliana', 'Ana', 'Caio' ]
console.log("Removendo: " + alunos.splice(alunos.length -1)) //remove o último, Camilo
console.log(alunos)
console.log("Removendo: " + alunos.splice(alunos.length -4, 2))
console.log(alunos)


animaisDoAquario = ['🐋', '🐙', '🐬', '🦈']

animaisDoAquario.splice(1,0,'🐠') //remove nenhum elemento, adicionando o peixe na posição 1 , e assim descolando o array como: [ '🐋', '🐠', '🐙', '🐬', '🦈' ]
animaisDoAquario.splice(3,2,'🐟') //remove o golfinho e tubarão com o 2 do segundo parâmetro a partir da posição 3, e adiciona o peixe na posição 3 

console.log(animaisDoAquario)
//Resultado: [ '🐋', '🐠', '🐙', '🐟' ]
//No aquário, o golfinho e o tubarão não estão presentes por conta do código animaisDoAquario.splice(3,2,'🐟'), 
// que remove dois elementos do array, a partir da posição 3.
// Sendo assim, os elementos com índice 3 e 4 e os dois peixes entraram nas posições definidas pelo splice.