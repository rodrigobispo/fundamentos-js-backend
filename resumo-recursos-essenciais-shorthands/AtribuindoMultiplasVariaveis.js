let x = 1;
let y = 2;
let z = 3;

console.log(x, y, z)

let a = 1;
let b;
let c = "xyz";
[a, b, c] = [4, 5, 6]

console.log(a, b, c)

const obj = { d: "Rodrigo", e: "Augusto", f: 100 };
let d, e, f;
({ d, e, f } = obj);
console.log(d, e, f);


console.log("Pessoa: ")
const pessoa = {
  nome: "rodrigo",
  email: "rodrigo@email.com",
  telefone: '131313',
  idade: 42,
  sexo: 'M',
  endereco: {
    rua: "al xpto",
    cep: "71000000",
    cidade: "Brasilia"
  }
}
const dados = {...pessoa};
const { nome, email, sexo, idade } = {...pessoa};
console.log(dados);
console.log("Alguns dados da pessoa:", nome, email, sexo, idade); //rodrigo rodrigo@email.com M 42

const { rua, cep, cidade } = {...pessoa};
console.log("Dados do endereço:", cep, rua, cidade); //undefined undefined undefined

const { endereco } = {...pessoa};
console.log("Dados do endereço:", endereco); //{ rua: 'al xpto', cep: '71000000', cidade: 'Brasilia' }



console.log("Espalhamento: ")
function myFunction(v, w, x, y, z) {
  console.log("Soma: ", v+ w+ x+ y+ z) //5 = -1+0+1+2+3
}
var args = [0, 1];
myFunction(-1, ...args, 2, ...[3]);



const produto = {
  "nome": "Cena do Crime",
  "valor": 89.0,
  "quantidade": 1200,
  "descricao": "A primeira colaboração de Ed Brubaker e Michael Lark - antes de seus trabalhos aclamadíssimos.",
  "caracteristicas": [{"nome": "Característica do Livro", "descricao": "Descrição"}],
  "imagens": [{"url": "url", "descricao": "Descrição teste."}],
  "categoria": "Livros/HQs",
  "usuario_id": "1"
}
const data = {...produto}
const { caracteristicas }= {...produto}
const { imagens } = {...produto}
console.log("Dados produto:", data);
console.log("Dados caracteristicas:", caracteristicas);
console.log("Dados imagens:", imagens);
const produto2 = {
  "nome": "Cena do Crime",
  "valor": 89.0,
  "quantidade": 1200,
  "descricao": "A primeira colaboração de Ed Brubaker e Michael Lark - antes de seus trabalhos aclamadíssimos.",
  "caracteristicas": [],
  "imagens": [{"url": "url", "descricao": "Descrição teste."}],
  "categoria": "Livros/HQs",
  "usuario_id": "1"
}
const data2 = {...produto2}
console.log("Dados produto2:", data2);
console.log("Dados caracteristicas:", data2.caracteristicas);
const objCaract = data2.caracteristicas
console.log(...objCaract)
