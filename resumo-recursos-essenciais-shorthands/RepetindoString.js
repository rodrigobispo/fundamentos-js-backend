function repeatString(string, num) {
  let result = '';
  for (let i = 0; i < num; i++) {
    result += string;
  }
  return result;
}

console.log(repeatString('Hello', 5));  

// Output: "HelloHelloHelloHelloHello"

console.log('Hello'.repeat(5));  

// Output: "HelloHelloHelloHelloHello"