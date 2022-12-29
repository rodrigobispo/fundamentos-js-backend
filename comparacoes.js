const numero = 5;
const texto = "5";

console.log(numero == texto) //true -> valores iguais
console.log(numero === texto) //false -> melhor prática, usando conversão explícita das variáveis antes

// == só compara valor
// === compara valor e tipo de dado

console.log(null == undefined) //true, mesmos valores
console.log(null === undefined) //false, valores iguais (sem valor), porém tipos

console.log(typeof numero)
console.log(typeof texto)
