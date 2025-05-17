
// Acessa o localStorage e se existir o Item "accounts" retorna seus dados em um array de objetos (.parse()) ou um array vazio caso não haja dados
function getAccounts() {
    const data = localStorage.getItem("accounts");
    return data ? JSON.parse(data) : [];
}

// Salva as contas passadas pelo parametro accounts como texto JSON no Item "accounts" do localStorage
function saveAccounts(accounts) {
    localStorage.setItem("accounts", JSON.stringify(accounts));
}

function createAccount(name, balance, currency, color){
    const newAccount = {
        id: Date.now(),
        name: String(name),
        balance: parseFloat(balance),
        currency: currency || 'BRL',
        color: color || '#4a6fa5',
        transactions: [],
        createdAt: new Date(),
        updatedAt: new Date()
    }

    const accounts = getAccounts();
    accounts.push(newAccount);
    saveAccounts(accounts);

}

// Tenho que me preocupar em garantir que por onde eu der a opção de editar seja possível passar o id
function editAccount(newName, newBalance, newCurrency, newColor, accountId){
    const accounts = getAccounts();
    const account = accounts.find(acc => acc.id === accountId);

    if(account){
        account.name = newName || account.name;
        account.balance = newBalance || account.balance;
        account.currency = newCurrency || account.currency;
        account.color = newColor || account.color;
        account.updatedAt = new Date();
        saveAccounts(accounts);
    }
}


function deleteAccount(accountId){
    const accounts = getAccounts();
    const accountIndex = accounts.findIndex(acc => acc.id === accountId);
    if(accountIndex !== -1){
        accounts.splice(accountIndex, 1);
        saveAccounts(accounts);
    }
}




export {getAccounts, saveAccounts, createAccount, editAccount, deleteAccount}