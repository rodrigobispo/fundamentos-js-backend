import Usuario from "./Usuario.js";

export default class Administrador extends Usuario {
  constructor(nome, email, nascimento, role = 'admin', ativo = true) {
    super(nome, email, nascimento, role, ativo)
  }

  criaCurso(nomeDoCurso, vagas) {
    return `Curso ${nomeDoCurso} criado com ${vagas} vagas por ${this.nome}.`
  }
}
