const mago = {
    nome: "Gandalf",
    classe: "mago"
}
const guerreiro = {
    nome: "Aragorn",
    classe: "guerreiro"
}
const ranger = {
    nome: "Legolas",
    classe: "ranger"
}

const personagens = { ...mago, ...guerreiro, ...ranger }
console.log(personagens) //{ nome: 'Legolas', classe: 'ranger' }
//o JavaScript sobrescreve as chaves com o mesmo nome a cada ocorrência, 
//fazendo com que o resultado final seja somente o último objeto declarado dentro do objeto personagens


const fichaGuerreiro = {
    nome: "Aragorn",
    classe: "guerreiro"
}

const equipoGuerreiro = {
    espada: "Andúril",
    capa: "capa élfica +2"
}

const guerreiro1 = { fichaGuerreiro, equipoGuerreiro }
console.log(guerreiro1)
/*
saída:
{
    fichaGuerreiro: { nome: 'Aragorn', classe: 'guerreiro' },
    equipoGuerreiro: { espada: 'Andúril', capa: 'capa élfica +2' }
}
*/

const guerreiro2 = { ...fichaGuerreiro, ...equipoGuerreiro }
console.log(guerreiro2)
/*
saída:
{
    nome: 'Aragorn',
    classe: 'guerreiro',
    espada: 'Andúril',
    capa: 'capa élfica +2'
}
*/
