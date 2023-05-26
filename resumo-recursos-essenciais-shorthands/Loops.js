for (let i = 1; i <= 5; i++) {
  console.log(i);
}

//for-in loop
let object = {a: 1, b: 2, c: 3};
for (let property in object) {
  console.log(property + ": " + object[property]);
}
//output: a: 1 b: 2 c: 3


//for-of loop
let array = [1, 2, 3];
for (let element of array) {
  console.log(element);
}
//output: 1 2 3

