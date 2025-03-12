/*

Requirements
Application should have the following features:

1 -  Users can create accounts.
2 -  Users should be able to edit the account name and balance, and be able to delete the account. (If deleted all transactions related to the account will be deleted too).
3 -  Users should be able to create and add transactions to the account, and the transactions should have: [id, description, amount, account, date, categories, type].
4 -  Users should be able to view, edit and delete the transactions.
5 -  Users should be able to view a summary of the transactions. (Graphs, total expenses, total incomes...)
6 -  Users should be able to transfer balance from one account to another, this will create a new transaction in each account, in one it will be a expense with 
the category of transaction out, and in the another it will be a income with the category of transaction in, both categories will only be used in this case.
The transaction will have a ID.
7 -  Users should be able to create categories and subcategories to select them when creating a transaction.
8 -  Users should be able to filter transactions by category, income, expense, transfers, name, date, amount.
9 -  Users should be able to view a summary for a specific month.
10 - Users should be able to export expenses in a JSON or CSV file.
11 - Transactions should be converted to the currency of the account.
It will use a external API to get the current value of conversion and accept a user input.
*/


function clearLocalStorage(){
    localStorage.clear();
    displayAccounts();
    console.log('LocalStorage cleared');
}



// Acessa o localStorage e se existir o Item "accounts" retorna seus dados em um array de objetos (.parse()) ou um array vazio caso não haja dados
function getAccounts() {
    const data = localStorage.getItem("accounts");
    return data ? JSON.parse(data) : [];
}

// Salva as contas passadas pelo parametro accounts como texto JSON no Item "accounts" do localStorage
function saveAccounts(accounts) {
    localStorage.setItem("accounts", JSON.stringify(accounts));
}

function createAccount(name, balance, currency){
    const newAccount = {
        id: Date.now(),
        name: name,
        balance: balance,
        allTimeExpenses: 0,
        allTimeIncome: 0,
        currency: currency,
        createdAt: new Date(),
    }

    const accounts = getAccounts();
    accounts.push(newAccount);
    saveAccounts(accounts);

}

// Tenho que me preocupar em garantir que por onde eu der a opção de editar seja possível passar o id
function editAccount(newName, newBalance, newCurrency, accountId){
    const accounts = getAccounts();
    const account = accounts.find(acc => acc.id === accountId);

    if(account){
        account.name = newName || account.name;
        account.balance = newBalance || account.balance;
        account.currency = newCurrency || account.currency;
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


/*  */
function displayAccounts() {
    const accounts = getAccounts();
    const listDiv = document.getElementById("accountsList");
    listDiv.innerHTML = "";

    accounts.forEach(account => {
        const div = document.createElement("div");
        div.innerHTML = `
            <p><strong>${account.name}</strong> - ${account.currency} ${account.balance}</p>
        `;
        
        listDiv.appendChild(div);
    });
}


document.getElementById("newAccountForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("newAccountName").value;
    const balance = parseFloat(document.getElementById("newAccountBalance").value).toFixed(2);
    const currency = document.getElementById("newAccountCurrency").value;

    createAccount(name, balance, currency);
    displayAccounts();
});

document.addEventListener("DOMContentLoaded", displayAccounts);


