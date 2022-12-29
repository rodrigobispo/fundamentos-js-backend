//template strings
let nome = "André"
let poema = `
    E agora, ${nome}?
    A festa acabou,
    a luz apagou,
    o povo sumiu,
    a noite esfriou,
    e agora, ${nome}?
    e agora, você?
    você que é sem nome,
    que zomba dos outros,
    você que faz versos,
    que ama, protesta?
    e agora, ${nome}?
`
console.log(poema)

const palavra = "rodrigo";
console.log(palavra.length) //7

console.log("rodrigo".charAt(3)) //r
console.log(palavra[1]) //o
console.log(palavra.indexOf("d")) //2
console.log(palavra.indexOf("o")) //1

{
    const palavra = "Divertidamente"
    console.log(palavra.indexOf("e")) //3       
}

{
    const palavra = "RodriGo";
    console.log(palavra.toUpperCase()) //RODRIGO
    console.log(palavra.toLowerCase()) //rodrigo
}

let frase = "Mergulhando em tecnologia."
console.log(frase.substr(0, 11)) // Mergulhando -> substr is deprecated
{
    let frase = "Mergulhando em tecnologia."
    console.log(frase.slice(0, 11)) // Mergulhando
}

{
    let nome = "André";
    let comunicacao = "Olá, sr. nomeusurario, informamos que a partir da presente data o senhor tem 50% de desconto em nossa loja.";
    console.log(comunicacao.replace("nomeusurario", nome));
}

{
    let novaString = "Explore linguagens como ";
    console.log(novaString.concat("JavaScript,").concat(" Python,").concat(" e C#."))
}

{
    let linguagens = "JavaScript;Java;C#;PHP;Python;Go;Vb;SQL;C;C++";
    let arrayLinguagens = linguagens.split(";"); // joga num array de string
    console.log(arrayLinguagens)
}

{
    let login = "   andre@emailteste.com      ";
    let loginSemEspaco = login.trim(); // espaços só dos extremos, do início e fim, não remove do meio; existem também trimEnd(),trimStart()
    console.log(loginSemEspaco); //andre@emailteste.com
}

{
    let login = "   andre@emailteste.com      ";
    let loginSemEspaco = login.trimEnd();
    console.log(loginSemEspaco); //andre@emailteste.com
}
