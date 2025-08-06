import { ID } from '../utils/ID.js';
import { exchangeRates } from '../utils/exchangeRates.js';
import { Name } from './Name.js';
import { Category } from './Category.js';
import { Money } from './Money.js';

export const TransactionType = Object.freeze({
  INCOME: "INCOME",
  EXPENSE: "EXPENSE"
});


/*
const transaction = new Transaction(
    {
        name: new Name("Salário"),
        money: new Money(5000),
        type: TransactionType.INCOME,
        accountId: "1",
        categoryId: "1",
        convertionRate: 1
    }
);
*/
export class Transaction {
    /**
     * 
     * @param {Name} name - Objeto do tipo Name válido
     * @param {Money} money - Objeto do tipo Money válido
     * @param {TransactionType} type - Uma das Keys de TransactionType 
     * @param {string} accountId - Id da conta
     * @param {string} categoryId - Id da categoria || undefined
     * @param {string} currency -  KEY da moeda da transação (exchangeRates.js) 
     */
    constructor({name, money, type, accountId, categoryId, currency}) {
    
        this.#validateTransaction(name, money, type, accountId, categoryId, currency);
        
        this.id = ID.next();
        this.name = name;
        this.money = money; 
        this.accountId = accountId;
        this.categoryId = categoryId;
        this.type = type;
        this.currency = currency;
        this.createdAt = new Date();
        this.updatedAt = undefined;
    }

    /**
     * Realiza as validações necessárias nos inputs do construtor, caso algum seja invalido throw um erro.
     * @param {Name} name Object do tipo Name
     * @param {Money} money Object do tipo Money
     * @param {TransactionType} type "INCOME", "EXPENSE"
     * @param {string} accountId String com o Id da conta relacionada
     * @param {String} category String com o Id da categoria relacionada
     */
    #validateTransaction(name, money, type, accountId, categoryId, currency) {
        if (!(name instanceof Name)) {
            throw new Error("Nome deve ser um objeto da classe Name");
        }

        if (!(money instanceof Money)) {
            throw new Error("Valor deve ser um objeto da classe Money");
        }

        if (!Object.values(TransactionType).includes(type)) {
            throw new Error("Tipo de transação inválido");
        }

        if(!accountId) {
            throw new Error("Uma transação precisa estar relacionada a uma conta");
        }

        if(typeof(categoryId) !== "undefined" && typeof(categoryId) !== "string") {
            throw new Error("Uma transação precisa estar relacionada a uma categoria");
        }

        if(!Object.keys(exchangeRates).includes(currency)) {
            throw new Error("Uma transação precisa estar relacionada a uma moeda");
        }

        return true;
    }
    
    /**
     * @returns {string} String com o nome.
     */
    getName() {
        return this.name.toString();
    }

    /**
     * @returns {integer} Inteiro representando o valor em centavos
     */
    getValueInCents() {
        return this.money.getCents();
    }

    /**
     * @returns {Category} Objeto do tipo Category
     */
    getCategory() {
        return this.categoryId;
    }

    /**
     * @param {string} newName String com o valor do novo nome
     */
    updateName(newName) {
        this.name = new Name(newName);
        this.updatedAt = new Date();

        return true;
    }
    
    /**
     * @param {integer} newValueInCents Novo valor em centavos da transação
     */
    updateValue(newValueInCents) {
        this.money = new Money(newValueInCents);
        this.updatedAt = new Date();

        return true;
    }

    /**
     * @param {string} newCategoryId Id da nova categoria
     */
    updateCategory(newCategoryId) {
        if (typeof(newCategoryId) !== "undefined" && !newCategoryId) {
            throw new Error("É preciso escolher uma categoria");
        }
        this.categoryId = newCategoryId;
        this.updatedAt = new Date();

        return true;
    }
}
