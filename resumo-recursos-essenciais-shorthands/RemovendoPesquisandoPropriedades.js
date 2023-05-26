console.log("Exemplo 1: ")
let obj = {
  prop1: 'value1',
  prop2: 'value2',
  prop3: 'value3',
  prop4: 'value4'
};

delete obj.prop1;
delete obj.prop3;
console.log(obj);  //Outputs { prop2: 'value2', prop4: 'value4' }

//----------------------------------------------
console.log("Exemplo 2: ")
let object = {
  prop1: 'value1',
  prop2: 'value2',
  prop3: 'value3',
  prop4: 'value4'
};

let newObj = Object.assign({}, object);
delete newObj.prop1;
console.log(newObj);  //Outputs { prop2: 'value2', prop3: 'value3', prop4: 'value4' }


console.log("Exemplo 3: ")
let newObj2 = Object.fromEntries(
  Object.entries(object).filter(
    ([key]) => key !== 'prop3' && key !== 'prop4'
  )
);
console.log(newObj2); //{ prop1: 'value1', prop2: 'value2' }


console.log("Mesmos passos exemplo 3 acima: ")

let newObj3 = Object.entries(object).filter(
  ([key]) => key !== 'prop3' && key !== 'prop4'
);
console.log(newObj3); //[ [ 'prop1', 'value1' ], [ 'prop2', 'value2' ] ]


let object2 = Object.fromEntries(newObj3);
console.log(object2);
