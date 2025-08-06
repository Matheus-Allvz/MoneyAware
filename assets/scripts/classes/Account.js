import { ID } from '../utils/ID.js';
import { exchangeRates } from '../utils/exchangeRates.js';
import { Money } from './Money.js';
import { Name } from './Name.js';

/*
const account = new Account(
    {
        name: new Name("Banco Principal"),
        money: new Money(124500),
        currency: "BRL",
        color: "#4a6fa5"
    }
);
*/
export class Account {
    /**
     * Cria uma conta.
     * 
     * @param {Name} name - Nome da conta.
     * @param {Money} money - Valor em centavos da transação.
     * @param {string} currency - Moeda da transação: "BRL", "USD", "EUR".
     * @param {string} color - String do hexadecimal da cor da conta.
     */
    constructor({name, money, currency, color}) {

        this.#validadeAccount(name, money, currency, color);

        this.id = ID.uuid();
        this.name = name;
        this.balance = money;
        this.currency = currency;
        this.color = color;
        this.createdAt = new Date();
        this.updatedAt = undefined;
    }

    #validadeAccount(name, money, currency, color) {
        if (!(name instanceof Name)) {
            throw new Error("Nome deve ser um objeto da classe Name");
        }

        if (!(money instanceof Money)) {
            throw new Error("Valor deve ser um objeto da classe Money");
        }

        if (!Object.keys(exchangeRates).includes(currency)) {
            throw new Error("Moeda inválida");
        }

        if (typeof color !== "string") {
            throw new Error("Cor inválida");
        }

        if(/^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/.test(color) === false) {
            throw new Error("Cor inválida");
        }
    }

    // Getters

    getName() {
        return this.name.toString();
    }

    getCurrency() {
        return this.currency;
    }

    getColor() {
        return this.color;
    }

    getbalanceInCents() {
        return this.balance.getCents();
    }

    /**
     * @returns {string} Balanço convertido de centavos pra moeda "normal".
     */
    getFormatedBalance() {
        return this.balance.formatedValue();
    }

    /**
     * @param {number} value valor a ser incrementado ao balanço da conta
     */
    updateBalance(value) {
        this.balance = new Money(value + this.getbalanceInCents());
        this.updatedAt = new Date();
    }

    /**
     * @param {string} newName 
     */
    updateName(newName) {
        this.name = new Name(newName);
        this.updatedAt = new Date();
    }

    /**
     * @param {string} newCurrency KEY da nova moeda (exchangeRates.js)
     */
    updateCurrency(newCurrency) {
        if(!Object.keys(exchangeRates).includes(newCurrency)) {
            throw new Error("Nova moeda inválida");
        }

        this.currency = newCurrency;
        this.updatedAt = new Date();
    }
}
