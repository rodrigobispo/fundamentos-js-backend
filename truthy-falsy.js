// boolean
const usuarioLogado = true
const contaPaga = false

// truthy ou falsy: 0 -> false; 1 -> true
console.log(0 == false)
console.log("" == false)
console.log(1 == false)

console.log(null == undefined) //true, mesmos valores
console.log(null === undefined) //false, valores iguais (sem valor), porém tipos

let minhaVar;
console.log("Minha variável é undefined? ");
console.log(minhaVar == undefined);

let numero = 2;
let texto = "Teste";
let nulo = null;

console.log(typeof numero); //number
console.log(typeof texto); //string
console.log(typeof minhaVar); //undefined
console.log(typeof nulo); //object
