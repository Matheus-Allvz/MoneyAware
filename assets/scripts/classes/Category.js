import { ID } from '../utils/ID.js';
import { Name } from './Name.js';

export class Category {
    /**
     * Cria uma categoria.
     * 
     * @param {string} name - Nome da categoria.
     * @param {string} emoji - Emoji da categoria.
     */
    constructor(name, emoji) {
        this.#validadeEmoji(emoji);

        this.id = ID.uuid();
        this.name = new Name(name);
        this.emoji = emoji;
        this.createdAt = new Date();
        this.updatedAt = undefined;
    }

    /**
     * Realiza todas as validações necessárias no emoji, caso seja invalido throw um erro.
     * @param {string} emoji 
     */
    #validadeEmoji(emoji) {
        if(/\p{Emoji}/u.test(emoji) === false) {
            throw new Error("Emoji inválido");
        }
    }

    /**
     * @returns {string} String com o nome da categoria.
    */
    getName() {
        return this.name.toString();
    }

    /**
     * @returns {string} String com o emoji da categoria.
    */
    getEmoji() {
        return this.emoji;
    }

    /**
     * @returns {string} String com o id da categoria
     */
    getID() {
        return this.id;
    }

    /**
     * Recebe uma instancia de Category e compara com a categoria. (igualdade de objetos)
     * @param {Category} otherCategory
     * @returns {boolean}
     */
    equals(otherCategory) {
        return (otherCategory instanceof Category && this.id === otherCategory.id);
    }

    /**
     * Recebe uma string com o novo nome e atualiza a categoria.
     * @param {string} newName 
     */
    updateName(newName) {
        this.name = new Name(newName);
        this.updatedAt = new Date();

        return true;
    }
    
    /**
     * Recebe uma string com o novo emoji e atualiza a categoria.
     * @param {string} newEmoji 
     */
    updateEmoji(newEmoji) {
        this.#validadeEmoji(newEmoji);
        this.emoji = this.emoji = newEmoji.trim();
        this.updatedAt = new Date();
        
        return true;
    }

}
