const pessoa = {
    nome: "Luma",
    profissao: "Engenheira",
};

console.log(pessoa.nome); //Luma

console.log(pessoa.telefone); //undefined

pessoa.telefone = "11 2223333444";

console.log(pessoa.telefone); //11 2223333444

pessoa.nome = "Luma Silva";

console.log(pessoa);

const novaPessoa = {
    nome: "Pedro",
};

// pessoa = novaPessoa; //não é possível, porém o objeto pode ser manipulado/modificado
