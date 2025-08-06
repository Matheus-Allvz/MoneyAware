export class Money {

    /**
     * Um objeto Money representa um valor em centavos.
     * 
     * @param {integer} cents 
     */
    constructor(cents){
        this.#validateCents(cents);

        this._cents = cents;
    }

    /**
     * Realiza todas as validações necessárias no o valor em centavos, caso seja invalido throw um erro.
     * @param {integer} cents 
     */
    #validateCents(cents){
        if(!Number.isInteger(cents)){
            throw new Error("Money deve ser representado em centavos com um número inteiro");
        }
    }

    /**
     * @returns {integer} Inteiro representando o valor em centavos
     */
    getCents(){
        return this._cents;
    }

    /**
     * @returns {string} String com o valor formatado (Duas casas decimais)
     */
    formatedValue(){
        return (this._cents / 100).toFixed(2);
    }

    /**
     * @param {Money} otherMoney Objeto do tipo Money
     * @returns {Money} Objeto do tipo Money com o valor somado
     */
    add(otherMoney){
        if(!(otherMoney instanceof Money)){
            throw new Error("add espera um objeto do tipo Money");
        }

        return new Money(this._cents + otherMoney.getCents());
    }
    
    /**
     * @param {Money} otherMoney Objeto do tipo Money
     * @returns {Money} Objeto do tipo Money com o valor subtraido
     */
    sub(otherMoney){
        if(!(otherMoney instanceof Money)){
            throw new Error("sub espera um objeto do tipo Money");
        }
    
        return new Money(this._cents - otherMoney.getCents());    
    }

    /**
     * @returns {boolean} Verdadeiro se o valor for negativo (Útil para parte de saídas da UI)
     */
    isNegative(){
        return this._cents < 0;
    }
}
