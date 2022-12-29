//função callback

const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

notas.forEach(function (elemento, indice) {
    somaDasNotas += elemento;
    console.log(indice);
});

notas.forEach(function (elemento) {
    console.log("Nota: ".concat(elemento));
});

const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}.`);

//com arrow function
{
    const nomes = ["Evaldo", "Mari", "Camis"];
    
    nomes.forEach(function (nome) {
        console.log("For 1: ".concat(nome));
    });
    
    nomes.forEach((nome) => {
        console.log("For 2: " + nome);
    });
    
    
    function imprimeNome(nome) {
        console.log("From function: " + nome);
    }
    nomes.forEach(imprimeNome);
}

