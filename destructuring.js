const person = {
    _name: "Rodrigo",
    _age: 41
}
const { _name } = person;
console.log(_name);

function showData({ _name, _age }) {
    console.log(_name, _age)
}
showData(person);
