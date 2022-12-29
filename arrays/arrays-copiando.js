const notas = [7, 7, 8, 9];

const novasNotas = [...notas]; //uso de spread operator -> referências distintas
// const novasNotas = [1, 2, ...notas, 4]; //caso queira adicionar elementos antes, depois...
// const novasNotas = notas; //mesmas referências, então imprime mesmos conteúdos

novasNotas.push(10);

console.log(`As novas notas são ${novasNotas}`);
console.log(`As notas originais são ${notas}`);
