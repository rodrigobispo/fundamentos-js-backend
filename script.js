//const -> constante, uma vez colocada, não é possível alterá-la. Ocorre erro TypeError: Assignment to constant variable
const forma = 'retangulo';
const altura = 5;
const comprimento = 7;
const area = null;

if (forma === 'retangulo') {
    area = altura * comprimento;
} else {
    area = altura * comprimento / 2;
}

console.log(area)

// var -> variável mais 'solta', onde é possível declarar após o uso da mesma, sem erros.
// var altura = 5;
// var comprimento = 7;
// area = altura * comprimento;
// console.log(area);
// var area;

// let -> com a declaração após o uso no console, é emitido ReferenceError
// let forma = 'retangulo';
// let altura = 5;
// let comprimento = 7;
// let area;

// if (forma === 'retangulo') {
//     area = altura * comprimento;
// } else {
//     area = altura * comprimento / 2;
// }

// console.log(area)
// let area;

