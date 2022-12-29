const numero = 13;
const numeroString = "13"

console.log(numero === numeroString) //false -> tipos diferentes (não só valor, como também o tipo)
console.log(numero == numeroString) //true -> valores iguais (só que está dentro)

// Number() e String()
console.log(numero + Number(numeroString)) //26
console.log(String(numero) + Number(numeroString)) //1313

