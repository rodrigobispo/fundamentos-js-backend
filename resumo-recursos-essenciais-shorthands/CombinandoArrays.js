// concat()
let array_a1 = [10, 20, 30];
let array_a2 = [40, 50, 60];
let mergedArray_a = array_a1.concat(array_a2);

console.log(mergedArray_a);  // Output: [10, 20, 30, 40, 50, 60]


// ...
let array1 = [10, 20, 30];
let array2 = [40, 50, 60];
let mergedArray = [...array1, ...array2];

console.log(mergedArray);  // Output: [10, 20, 30, 40, 50, 60]


// reduce()
let array1c = [10, 20, 30];
let array2c = [40, 50, 60];
let mergedArrayc = array1c.reduce(
  (acc, val) => acc.concat(val), array2c
);

console.log(mergedArrayc);  // Output: [40, 50, 60, 10, 20, 30]