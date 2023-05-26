
//Longhand:
function greet1(name) {
  name = name || 'Anonymous';
  console.log(`Hello, ${name}!`);
}

//Shorthand:
function greet2(name = 'Anonymous') {
  console.log(`Hello, ${name}!`);
}

greet1("Rodrigo"); //Hello, Rodrigo!
greet2(); //Hello, Anonymous!
