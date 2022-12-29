const txt1 = "Hello World!";
const txt2 = "Hello World!";
const citacao = 'Fulano disse "oi"';
const citacao2 = "Fulano disse 'oi'";
console.log(citacao)
console.log(citacao2)

// concatenação (+)

const meuNome = "Rodrigo";
const citacao3 = "Meu nome é ";

console.log(citacao3 + meuNome)

// outros...  transformação/conversão do código Unicode UTF-16 em caractere

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

// comparações

const cidade1 = "belo horizonte";
const input1 = "Belo Horizonte";

console.log(cidade1 === input1); // false

const cidade = "belo horizonte";
const input = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true

// outras funções

const senha = "minhaSenha123"
console.log(senha.length) // 13 caracteres

console.log(2 + "12"); // imprime 212
