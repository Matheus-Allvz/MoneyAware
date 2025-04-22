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

// Navegação e carregamento da página
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('.nav-item').forEach(navItem => {
            navItem.classList.remove('active');
        });
        this.classList.add('active');
        
        // TODO: Carregar o conteúdo da página aqui
        // if (this.querySelector('span').textContent === 'Visão Geral') {
        //     document.querySelector('.page-title').textContent = 'Visão Geral';
        // } else {
        //     document.querySelector('.page-title').textContent = this.querySelector('span').textContent;
        // }
    });
});



/*****************************************/
//
// Modal de transações
//
/*****************************************/

// Elementos do Modal
const addTransactionModal = document.getElementById('transactionModal');
const addTransactionForm = document.getElementById('transactionForm');
const addTransactionBtn = document.getElementById('addTransactionBtn');
const closeBtnAddTransactionModal = document.getElementById('closeModal');
const cancelBtnAddTransaction = document.getElementById('cancelTransaction');
const transactionTypeSelectAddTransaction = document.getElementById('transactionTypeModal');
const transferFieldsAddTransaction = document.getElementById('transferFields');
const currencySelectAddTransaction = document.getElementById('transactionCurrency');
const currencyFieldsAddTransaction = document.getElementById('currencyFields');
const transactionValueAddTransaction = document.getElementById('transactionValue');
const exchangeRateAddTransaction = document.getElementById('exchangeRate');
const convertedValueAddTransaction = document.getElementById('convertedValue');
const hiddenModalElementsAddTransaction = document.getElementsByClassName('initially-hidden');

/*
    Fecha o modal, apaga os dados deixados no formulário e esconde os campos relacionados a transferência e conversão de moeda.
*/
function closeAddTransactionModal() {
    addTransactionModal.style.display = 'none';
    addTransactionForm.reset();
    transferFieldsAddTransaction.style.display = 'none';
    currencyFieldsAddTransaction.style.display = 'none';
    
}

/*
    Ao clicar no botão de adicionar transações o formulário do modal é resetado, o modal recebe display: flex; e os elementos que precisam ficar escondidos recebem display none;
*/
addTransactionBtn.addEventListener('click', () => {
    addTransactionModal.style.display = 'flex';
    document.getElementById('transactionDate').valueAsDate = new Date();
});


/* 
    Eventos de 'click' no botão de fechar, cancelar ou fora do modal fecham ele.
*/
closeBtnAddTransactionModal.addEventListener('click', () => {
    closeAddTransactionModal();
});

cancelBtnAddTransaction.addEventListener('click', () => {
    closeAddTransactionModal();
});

window.addEventListener('click', (e) => {
    if (e.target === addTransactionModal) {
        closeAddTransactionModal();
    }
});



/*
Eventos para exibir os campos escondidos caso as condições para isso sejam atendidas
*/

// TODO: Isso deve aparecer de se a moeda selecionada for != da moeda padrão da conta selecionada
currencySelectAddTransaction.addEventListener('change', (e) => {
    if (e.target.value !== 'BRL') {
        currencyFieldsAddTransaction.style.display = 'block';
    } else {
        currencyFieldsAddTransaction.style.display = 'none';
    }
});

transactionTypeSelectAddTransaction.addEventListener('change', (e) => {
    if (e.target.value === 'transfer') {
        transferFieldsAddTransaction.style.display = 'block';
    } else {
        transferFieldsAddTransaction.style.display = 'none';
    }
});



/*
    Conversão de moeda
*/
transactionValueAddTransaction.addEventListener('input', updateConvertedValue);
exchangeRateAddTransaction.addEventListener('input', updateConvertedValue);

function updateConvertedValue() {
    if (transactionValueAddTransaction.value && exchangeRateAddTransaction.value) {
        const value = parseFloat(transactionValueAddTransaction.value);
        const rate = parseFloat(exchangeRateAddTransaction.value);
        convertedValueAddTransaction.value = (value * rate).toFixed(2);
    }
}

// Salvamento das informações (Envio do form)
document.getElementById('transactionForm').addEventListener('submit', (e) => {
    e.preventDefault();
    // TODO: Lidar com o salvamento da informações
    alert('Transação adicionada com sucesso!');
    addTransactionModal.style.display = 'none';
    // Reinicia os dados do formulario
    e.target.reset();
    currencyFieldsAddTransaction.style.display = 'none';
});






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


