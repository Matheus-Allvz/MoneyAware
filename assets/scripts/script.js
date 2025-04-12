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

// Navegação
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('.nav-item').forEach(navItem => {
            navItem.classList.remove('active');
        });
        this.classList.add('active');
        
        // Carregar o conteúdo da página aqui :                                         <- TODO ->
        if (this.querySelector('span').textContent === 'Home') {
            document.querySelector('.page-title').textContent = 'Visão Geral';
        } else {
            document.querySelector('.page-title').textContent = this.querySelector('span').textContent;
        }
    });
});

// Modal de transações
const modal = document.getElementById('transactionModal');
const addBtn = document.getElementById('addTransactionBtn');
const closeBtn = document.getElementById('closeModal');
const cancelBtn = document.getElementById('cancelTransaction');
const currencySelect = document.getElementById('transactionCurrency');
const currencyFields = document.getElementById('currencyFields');
const transactionValue = document.getElementById('transactionValue');
const exchangeRate = document.getElementById('exchangeRate');
const convertedValue = document.getElementById('convertedValue');

addBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

cancelBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// TODO: Isso deve aparecer de se a moeda selecionada for != da moeda padrão da conta selecionada
currencySelect.addEventListener('change', (e) => {
    if (e.target.value !== 'BRL') {
        currencyFields.style.display = 'block';
    } else {
        currencyFields.style.display = 'none';
    }
});

// Conversão de moeda
transactionValue.addEventListener('input', updateConvertedValue);
exchangeRate.addEventListener('input', updateConvertedValue);

function updateConvertedValue() {
    if (transactionValue.value && exchangeRate.value) {
        const value = parseFloat(transactionValue.value);
        const rate = parseFloat(exchangeRate.value);
        convertedValue.value = (value * rate).toFixed(2);
    }
}

// Salvamento das informações (Envio do form)
document.getElementById('transactionForm').addEventListener('submit', (e) => {
    e.preventDefault();
    // TODO: Lidar com o salvamento da informações
    alert('Transação adicionada com sucesso!');
    modal.style.display = 'none';
    // Reinicia os dados do formulario
    e.target.reset();
    currencyFields.style.display = 'none';
});

// Tabs 
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', function() {
        document.querySelectorAll('.tab').forEach(t => {
            t.classList.remove('active');
        });
        this.classList.add('active');
        // TODO: Filtrar as transações e exibir
    });
});

// Define a data de hoje como padrão
document.getElementById('transactionDate').valueAsDate = new Date();



//  Debug
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


