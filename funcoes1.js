function cumprimentar() {
    return 'Oi gente!'
}

function cumprimentaPessoa(nomePessoa) {
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
}

cumprimentaPessoa('Marina') // “Oi gente! Meu nome é Paula”

function comParametro(param) {
    console.log(param)
}
comParametro() // undefined

// expressão de função
//console.log(soma(2, 1)) //ReferenceError: Cannot access 'soma' before initialization
const soma = function(num1, num2) { return num1 + num2 }
console.log(soma(2, 1)) // -> aqui executa ok

// uma function comum
function apresentar(nome) {
    return `meu nome é ${nome}`;
}

console.log("Resultados Arrow Functions: ")
// arrow function
const apresentarArrow = nome => `meu nome é ${nome}`;
const somaArrow = (num1, num2) => num1 + num2;

console.log(apresentarArrow("Rodrigo"));
console.log(somaArrow(1, 4));

const somaNumerosPequenos = (n1, n2) => {
    if ((n1 < 0 || n1 > 10) || (n2 < 0 || n2 > 10)) {
        return "somente números de 0 a 10"
    } else {
        return n1 + n2;
    }
}
console.log(somaNumerosPequenos(8, -2));
