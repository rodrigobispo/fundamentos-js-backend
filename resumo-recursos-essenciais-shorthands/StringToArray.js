let string = "apple,banana,orange";
let array = string.split(",");
console.log(array);  // prints ["apple", "banana", "orange"]

let string2 = "apple,banana,orange";
let array2 = [...string2.split(',')];
console.log(array2);  // prints ["apple", "banana", "orange"]

let string3 = "apple,banana,orange";
let array3 = [];
for (let i = 0; i < string3.length; i++) {
  array3.push(string[i]);
}
console.log(array3);  // prints ["a", "p", "p", "l", "e", ",", "b", "a", "n", "a", "n", "a", ",", "o", "r", "a", "n", "g", "e"]
