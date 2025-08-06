
export class Name {

  /**
   * Cria um nome.
   * 
   * @param {string} value String
   */
  constructor(value) {
    this.#validadeName(value);

    this.value = value.trim();
  }
  
  /**
   * Realiza todas as validações necessárias no o nome, caso seja invalido throw um erro.
   * @param {string} value 
   */
  #validadeName(value){
    if (!value || typeof value !== "string" || value.trim().length < 3) {
      throw new Error("Nome inválido");
    }
  }

  /**
   * @returns {string} String com o nome.
   */
  toString() {
    return this.value;
  }

  /**
   * Compara o nome passado como parametro e retorna um boolean com o resultado.
   * @param {Name} otherName 
   * @returns {boolean}
   */
  equals(otherName) {
    if (!(otherName instanceof Name)) return false;
    return this.value === otherName.value;
  }

}
