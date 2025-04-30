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

//  Debug
function clearLocalStorage(){
    localStorage.clear();
    displayAccounts();
    console.log('LocalStorage cleared');
}



const pages = {
    home: async () => {
        import(`../pages/home-page.js`).then(module => {
            document.querySelector('.main-content').innerHTML = module.default;
        });

        const transactionModal = await import('./transactionModal.js');
        const addAccountModal = await import('./addAccountModal.js');
        
        transactionModal.init();
        addAccountModal.init();
    },

    transactions: async () => {
        import(`../pages/transactions-page.js`).then(module => {
            document.querySelector('.main-content').innerHTML = module.default;
        });

        const transactionModal = await import('./transactionModal.js');
        
        transactionModal.init();
    },
    
    accounts: async () => {
        import(`../pages/accounts-page.js`).then(module => {
            document.querySelector('.main-content').innerHTML = module.default;
        });

        const addAccountModal = await import('./addAccountModal.js');
        addAccountModal.init();
    },

    profile: async () => {
        import(`../pages/profile-page.js`).then(module => {
            document.querySelector('.main-content').innerHTML = module.default;
        });
    },

    exit: async () => {
        window.location.href = "https://www.google.com";
    }
}

async function loadPageContent(){
    const pageName = document.querySelector('.active')?.dataset.page;

    if(pages[pageName]){
        try{
            await pages[pageName]();

        }catch(err){
            console.error(`Error Loading the page ${pageName}`, err);
        }
    }else{
        console.warn(`Page ${pageName} does not have a script`);
    }
}

loadPageContent();

// Navegação e carregamento da página
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', async function() {
        document.querySelectorAll('.nav-item').forEach(navItem => {
            navItem.classList.remove('active');
        });
        this.classList.add('active');
        loadPageContent();
    });
});





