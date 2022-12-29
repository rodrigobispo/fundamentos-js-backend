const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

const meuSet = new Set(nomes); //set -> removendo repetidos

const nomesAtualizados = [...meuSet]; //uso de spread operator para cópia

console.log(nomesAtualizados); //[ 'Ana', 'Clara', 'Maria', 'João' ]

{
    // ou...
    const nomesAtualizados = [...new Set(nomes)];

    console.log(nomesAtualizados); //[ 'Ana', 'Clara', 'Maria', 'João' ]
}