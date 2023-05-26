let obj = {
  prop1: 'value1',
  prop2: 'value2',
  prop3: 'value3',
  prop4: 'value4'
};

let newObj = Object.assign({}, obj);

console.log(newObj);
// Outputs { prop2: 'value2', prop4: 'value4' }