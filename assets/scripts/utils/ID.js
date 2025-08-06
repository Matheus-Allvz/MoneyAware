
/**
 * Gera um id unico sequencial com ID.next() e um uuid com ID.uuid().
 */
export class ID {
    static #counter = localStorage.getItem("MoneyAware:idCounter") ? Number(localStorage.getItem("idCounter")) : 0;
    
    static next() {
        localStorage.setItem("MoneyAware:idCounter", this.#counter);
        return `id_${++this.#counter}`;
    }

    static uuid() {
        return crypto.randomUUID();
    }
}