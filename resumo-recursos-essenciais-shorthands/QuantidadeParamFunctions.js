function myFunction(a, b, c) {
  // function body
}
console.log(myFunction.length);  // Output: 3


function myFunction2(a, b, c) {
  console.log(arguments.length);  // Output: 3
}
myFunction2(1, 2, 3);