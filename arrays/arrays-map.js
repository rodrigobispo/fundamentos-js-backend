//map: útil para reescrever arrays, por exemplo alterando os valores dos elementos

const notas = [10, 9.5, 8, 7, 6];

//sintaxe 1 -> se valor +1 ultrapassar 10, deixa 10, senão adiciona +1 ao conteúdo
{
    const notasAtualizadas = notas.map((nota) => {
        return nota + 1 >= 10 ? 10 : nota + 1;
    });
    console.log(notasAtualizadas); //[10, 10, 9, 8, 7]
}

//sintaxe 2
{
    const notasAtualizadas = notas.map((nota) => nota + 1 >= 10 ? 10 : nota + 1);
    console.log(notasAtualizadas); //[10, 10, 9, 8, 7]
}

//exemplo 2: ajustar array com todo conteúdo em caixa alta
const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];

const nomesPadronizados = nomes.map((nome) => nome.toUpperCase());

console.log(nomesPadronizados);
