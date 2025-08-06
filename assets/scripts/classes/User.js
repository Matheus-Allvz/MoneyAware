import { ID } from '../utils/ID.js';
import { exchangeRates } from '../utils/exchangeRates.js';
import { Account } from './Account.js';
import { Name } from './Name.js';
import { Transaction, TransactionType } from './Transaction.js';
import { Category } from './Category.js';

/**
 * Representa um usuário.
 */
export class User {
    /**
     * 
     * Cria um usuário.
     * 
     * @param {string} name - Nome do usuário.
     * @param {string} currency - Moeda padrão do usuário. (exchangeRates.js)
     */
    constructor(name, currency) {

        validateUser(name, currency);

        this.id = ID.uuid();
        this.name = name;
        this.currency = currency;
        this.accounts = [];
        this.sysCategories = initialCategories();
        this.userCategories = [];
        this.transactions = [];
        this.createdAt = new Date();
        this.updatedAt = undefined;
    }

    validadeUser(name, currency) {
        if (!(name instanceof Name)) {
            throw new Error("O nome do usuário precisa ser uma instancia de Name.");
        }
        if (!currency || !Object.keys(exchangeRates).includes(currency)) {
            throw new Error("A moeda do usuário precisa ser informada e ser uma das moedas disponíveis.");
        }

        return true;
    }

    /**
     * @returns {Array} Array com as categorias iniciais fixas.
     */
    static initialCategories() {
        return [
            new Category("Entrada", "💰"),
            new Category("Saída", "🧾"),
            new Category("Correção de balanço", "📊"),
            new Category("Tranferência", "🔁")
        ];
    }

    /**
     * Insere uma conta no usuário.
     * 
     * @param {Account} account 
     */
    pushAccount(account) {
        this.accounts.push(account);
    }
    
    /**
     * Insere uma categoria no usuário.
     * 
     * @param {Category} category
     */
    pushCategory(category) {
        if(!category instanceof Category) throw new Error("A categoria precisa ser uma instancia de Category.");
       
        this.userCategories.push(category);
    }

    /**
     * Insere uma transação no array de transações.
     * 
     * @param {Transaction} transaction 
     */
    pushTransaction(transaction) {
        if(!transaction instanceof Transaction) throw new Error("A transação precisa ser uma instancia de Transaction.");   
        
        const transacionAccount = this.accounts.find(acc => acc.id === transaction.accountId);
        transacionAccount.updateBalance(transaction.type === TransactionType.INCOME ? transaction.amountInCents : -transaction.amountInCents);
        this.transactions.push(transaction);
    }

    /**
     * Altera as informações do usuário.
     * 
     * @param {string} newName String do novo nome
     * @param {string} newCurrency String com a KEY da nova moeda padrão
     */
    editUser(newName, newCurrency) {
        this.name = new Name(newName);
        this.currency = (Object.keys(exchangeRates).includes(newCurrency) ? newCurrency  : this.currency);
        this.updatedAt = new Date();
    }

    
    // createTransaction({ name, amountInCents, type, category, sourceAccount, destinationAccount }) {
    //     if (type === TransactionType.TRANSFER) {
    //     if (!sourceAccount || !destinationAccount) {
    //         throw new Error("Transferência precisa de contas fonte e destino");
    //     }
    //     const transaction = new Transaction(name, amountInCents, type, category, sourceAccount, destinationAccount);
    //     sourceAccount.applyTransfer(transaction, destinationAccount);
    //     return transaction;
    //     } else {
    //     if (!sourceAccount) {
    //         throw new Error("Entrada ou saída precisam da conta");
    //     }
    //     const transaction = new Transaction(name, amountInCents, type, category, sourceAccount, null);
    //     sourceAccount.applyTransaction(transaction);
    //     return transaction;
    //     }
    // }

    /**
     * Edita as informações da conta com o id passado como parametro.
     * 
     * @param {number} accountId 
     * @param {string} newName 
     * @param {number} newBalanceInCents 
     * @param {string} newCurrency 
     * @param {string} newColor 
     */
    editAccount(accountId, newName, newBalanceInCents, newCurrency, newColor) {
        const account = this.accounts.find(account => account.id === accountId);

        if(account) {
            account.name = newName || account.name;
            account.balanceInCents = newBalanceInCents || account.balanceInCents;
            account.currency = newCurrency || account.currency;
            account.color = newColor || account.color;
            account.updatedAt = new Date();
        }else{
            console.warn(`Account: ${accountId} não foi encontrada e não pode ser editada. (editAccount)`);
        }
    }
    
    /**
     * Edita as informações da categoria com o id passado como parametro.
     * 
     * @param {number} categoryId 
     * @param {string} newName 
     * @param {string} newEmoji 
     */
    editCategory(categoryId, newName, newEmoji) {
        const category = this.categories.find(category => category.id === categoryId);
        
        if(category) {
            category.name = newName || category.name;
            category.emoji = newEmoji || category.emoji;
            category.updatedAt = new Date();
        }else{
            console.warn(`Category: ${categoryId} não foi encontrada e não pode ser editada.`);
        }
    }

    editTransaction() {

    }


    
    /**
     * Deleta a conta com o id passado como parametro do usuário. 
     * 
     * @param {number} accountId 
     */
    deleteAccount(accountId) {
        const index = this.accounts.findIndex(account => account.id === accountId);
        
        if(index !== -1) {
            this.accounts.splice(index, 1);
        }else{
            console.warn(`Account: ${accountId} não foi encontrada e não pode ser deletada. (deleteAccount)`);
        }
    }
    
    /**
     * Deleta a categoria com o id passado como parametro do usuário.
     * 
     * @param {number} categoryId 
    */
   deleteCategory(categoryId) {
       const index = this.categories.findIndex(category => category.id === categoryId);
       
       if(index !== -1) {
           this.categories.splice(index, 1);
        }else{
            console.warn(`Category: ${categoryId} não foi encontrada e não pode ser deleteada. (deleteCategory)`);
        }
    }
    
    deleteTransaction(accountId, transactionId) {
        const account = this.accounts.find(account => account.id === accountId);
        if(account === -1) {
            console.warn(`Account: ${accountId} não foi encontrada e não pode ter uma transação deletada. (deleteTransaction)`);
            return;
        }

        account.updatedAt = new Date();
        
        const transaction = account.transactions.find(transaction => transaction.id === transactionId);
        const transactionIndex = account.transactions.findIndex(transaction => transaction.id === transactionId);
        
        if(transactionIndex !== -1) {
            account.balanceInCents -= transaction.type === "INCOME" ? transaction.amountInCents : -transaction.amountInCents; 
            account.transactions.splice(transactionIndex, 1);
        }else{
            console.warn(`Transaction: ${transactionId} não foi encontrada e não pode ser deletada. (deleteTransaction)`);
        }
        
    }



    /**
     * Cria e insere uma conta no usuário.
     * 
     * @param {string} name 
     * @param {number} balanceInCents 
     * @param {string} currency 
     * @param {string} color 
     */
    createAccount(name, balanceInCents, currency, color) {
        const account = new Account(name, balanceInCents, currency, color);
        this.pushAccount(account);
    }

    /**
     * Cria e insere uma categoria no usuário.
     * 
     * @param {string} name 
     * @param {string} emoji 
     */
    createCategory(name, emoji) {
        const category = new Category(name, emoji);
        this.pushCategory(category);
    }

    _createTransferTransaction(name, amountInCents, categoryId, source, destination) {
        
        const sentTransaction = new Transaction(name, amountInCents, "EXPENSE", categoryId, source.id, destination.id);
        const receivedTransaction = new Transaction(name, amountInCents, "INCOME", categoryId, source.id, destination.id);

        this.pushTransaction(source, sentTransaction);
        this.pushTransaction(destination, receivedTransaction);

        source.updatedAt = new Date();
        destination.updatedAt = new Date();
    }

    /**
     * Cria e insere uma transação na conta passada como parametro.
     * 
     * @param {number} accountId 
     * @param {string} name 
     * @param {number} amountInCents 
     * @param {string} type 
     * @param {number} categoryId 
     * @param {number} destinationAccountId 
     */
    createTransaction(accountId, name, amountInCents, type, categoryId, destinationAccountId) {
        
        const account = this.accounts.find(acc => acc.id === accountId);
        account.updatedAt = new Date();
        
        if(type === "TRANSFER") {
            const destination = this.accounts.find(acc => acc.id === destinationAccountId);
            this._createTransferTransaction(name, amountInCents, categoryId, account, destination);
            return;
        }

        const transaction = new Transaction(name, amountInCents, type, categoryId);

        this.pushTransaction(account, transaction);
    }

}

/*
*/


// Refatore, dá pra ficar mais redondo
function reconstructUser(data) {
    const user = new User(data.name, data.currency);

    user.id = data.id;
    user.createdAt = new Date(data.createdAt);
    user.updatedAt = data.updatedAt ? new Date(data.updatedAt) : undefined;   

    data.categories.forEach(cat => {
        const category = new Category(cat.name, cat.emoji);
        category.id = cat.id;
        category.createdAt = new Date(cat.createdAt);
        category.updatedAt = cat.updatedAt ? new Date(cat.updatedAt) : undefined;

        user.pushCategory(category);
    });

    data.accounts.forEach(acc => {
        const account = new Account(acc.name, acc.balanceInCents, acc.currency, acc.color);
        account.id = acc.id;
        account.createdAt = new Date(acc.createdAt);
        account.updatedAt = acc.updatedAt ? new Date(acc.updatedAt) : undefined;
        
        acc.transactions.forEach(tran => {
            const transaction = new Transaction(tran.name, tran.amountInCents, tran.type, tran.categoryId, tran.sourceAccountId, tran.destinationAccountId);
            transaction.id = tran.id;
            transaction.createdAt = new Date(tran.createdAt);
            transaction.updatedAt = tran.updatedAt ? new Date(tran.updatedAt) : undefined;
            account.transactions.push(transaction);
        });

        user.pushAccount(account);

    });

    return user;
}


// Acessa o localStorage e se existir o objeto "user" reconstroi seus dados e retorna esse novo objeto.
function getUser() {
    const data = localStorage.getItem("user");

    if(!data) {
        const defaultUser = new User("User", "BRL");

        defaultUser.createCategory("Entrada", "💰");
        defaultUser.categories[0].id = 0;
                
        defaultUser.createCategory("Saída", "🧾");
        defaultUser.categories[1].id = 1;
        
        defaultUser.createCategory("Transferência", "🔁");
        defaultUser.categories[2].id = 2;

        localStorage.setItem("user", JSON.stringify(defaultUser));
        return defaultUser;
    }

    return reconstructUser(JSON.parse(data));
}


// Salva o user passado como parametro como texto JSON no Item "user" do localStorage
function saveUser(user) {
    localStorage.setItem("user", JSON.stringify(user));
    console.log("User saved in local storage");
}

function deleteUser() {
    localStorage.removeItem("user");
}






// // DEBUG

// criar, editar, salvar e apagar usuario [x] [x] [x] [x]
// const user = getUser();

// user.editUser("Joaninha", "USD");

// Comentar o save user lá em baixo antes de usar o deleteuser
// deleteUser();



// criar, editar e apagar categoria [x] [x] [x]

// user.createCategory("Transferencia dos alugueis", "🏚️");
// user.createCategory("Alimentação", "🍕");

// const categoria_a_ser_editada = user.categories.find(cat => cat.name === "Transferencia dos alugueis");
// user.editCategory(categoria_a_ser_editada.id, "Alugueis");

// const categoria_a_ser_deletada = user.categories.find(cat => cat.name === "Alimentação");
// user.deleteCategory(categoria_a_ser_deletada.id);



// criar, editar e apagar conta [x] [x] [x]

// user.createAccount("Conta 1", 10000, "BRL", "#FFFFFF");
// user.createAccount("Conta 2", 0, "BRL", "#DDDDDD");
// user.createAccount("Conta 3", 5000, "BRL", "#EEEEEE");

// const contaASerEditada = user.accounts.find(account => account.name === "Conta 2");
// user.editAccount(contaASerEditada.id, "Conta 2 Editada", 1000, "USD", "#AAAAAA");


// const contaASerDeletada = user.accounts.find(account => account.name === "Conta 3");
// user.deleteAccount(contaASerDeletada.id);



// criar, editar e apagar transação [X] [] [x]


// // Math.round(account[1] * 100);


// const conta1 = user.accounts.find(account => account.name === "Conta 1");
// user.createTransaction(conta1.id, "Almoço", 1000, "EXPENSE", user.categories[1].id);
// user.createTransaction(conta1.id, "Ganho de alugueis", 5000, "INCOME", user.categories[3].id);

// const conta2 = user.accounts.find(account => account.name === "Conta 2 Editada");
// user.createTransaction(conta1.id, "Transferencia Bancaria", 14000, "TRANSFER", user.categories[2].id, conta2.id);

// user.deleteTransaction(conta1.id, conta1.transactions[2].id);
// user.deleteTransaction(conta2.id, conta2.transactions[0].id);



// saveUser(user);

// console.log(user);