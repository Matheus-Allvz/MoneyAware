const accFunctions = await import('./accounts.js');

const addAccountBtn = document.getElementById('addAccountBtn');

async function displayAccounts() {
    const accounts = accFunctions.getAccounts();
    const accountsListElement = document.querySelector(".accounts-container");
    // accountsListElement.innerHTML = "";

    accounts.forEach(account => {
        const newElement = document.createElement('div');
        newElement.classList.add('account-card');
        // account.color must be: 135deg, #dc3545, #a71d2a
        // or something like that
        newElement.style.background = `linear-gradient(${account.color})`;
        newElement.innerHTML = `
                <div class="account-card-name">${account.name}</div>
                <div class="account-card-balance">${account.currency} ${account.balance}</div>
                <div class="account-card-transactions">${account.transactions.length} transações</div>
        `;

        accountsListElement.insertBefore(newElement, addAccountBtn);
        
    });
}

document.addEventListener('DOMContentLoaded', displayAccounts());
export {displayAccounts}

