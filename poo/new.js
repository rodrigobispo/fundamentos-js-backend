function User(nome, email) {
    this.nome = nome;
    this.email = email;

    this.exibirInfos = function() {
        return `${this.nome}, ${this.email}`
    }
}

function Admin(role) {
    User.call(this, 'Juliana', 'j@j.com');
    this.role = role || 'estudante';
}

Admin.prototype = Object.create(User.prototype); //apenas um entendimento, pois modelos de classes no js foi feito em cima de protótipos
const novoUser = new Admin('admin');
console.log(novoUser.exibirInfos());
console.log(novoUser.role);


const user = {
    exibirInfos: function(nome) {
        return nome;
    }
}

const outroUser = Object.create(user); //mais usual do que prototype
console.log(outroUser.exibirInfos('Lis'));
console.log(user.isPrototypeOf(outroUser));


const user2 = {
    init: function(nome, email) {
        this.nome = nome
        this.email = email
    },

    exibirInfos: function() {
        return this.nome;
    }
}

const outroUser2 = Object.create(user2); //mais usual do que prototype
outroUser2.init('Marcos', 'm@m.com'); //com uso de construtor init
console.log(outroUser2.exibirInfos());
