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

const pessoa = {
  nome: "rodrigo",
  email: "rodrigo@email.com",
  telefone: '131313',
  idade: 42,
  sexo: 'M'
}
const dados = {...pessoa};
console.log(dados);

console.log("Espalhamento: ")
function myFunction(v, w, x, y, z) {
  console.log("Soma: ", v+ w+ x+ y+ z) //5 = -1+0+1+2+3
}
var args = [0, 1];
myFunction(-1, ...args, 2, ...[3]);
