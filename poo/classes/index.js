import Administrador from "./Administrador.js";
import Usuario from "./Usuario.js";

const usuario = new Usuario("Rodrigo", "r@r.com", "2000-01-01")
console.log(usuario.nome);
usuario.nome = 'Rodrigo A.'
console.log(usuario.nome);
console.log(usuario.exibeInfos());

const admin = new Administrador("Pedro", "r@r.com", "1998-03-13")
console.log(admin.criaCurso('JS', 20));
