
export async function init(){
    const accFunctions = await import('./accountsFunctions.js');
    /*****************************************/
    //
    // Modal de adicionar conta
    //
    /*****************************************/
    
    // Elementos do modal
    const addAccountModal = document.getElementById('addAccountModal');
    const addAccountBtn = document.getElementById('addAccountBtn');
    const closeAddAccountModal = document.getElementById('closeAddAccountModal');
    const cancelAddAccount = document.getElementById('cancelAddAccount');
    const addAccountForm = document.getElementById('addAccountForm');

    // Abrir modal
    addAccountBtn.addEventListener('click', () => {
        addAccountModal.style.display = 'flex';
        // document.getElementById('newAccountName').focus();
    });


    // Funções que fecham o modal
    function closeModal() {
        addAccountModal.style.display = 'none';
        addAccountForm.reset();
        clearErrors();
    }

    closeAddAccountModal.addEventListener('click', closeModal);
    cancelAddAccount.addEventListener('click', closeModal);

    window.addEventListener('click', (e) => {
        if (e.target === addAccountModal) {
            closeModal();
        }
    });


    // Limpar mensagens de erro
    function clearErrors() {
        document.getElementById('nameError').textContent = '';
        document.getElementById('balanceError').textContent = '';
    }

    // Validação do formulário
    addAccountForm.addEventListener('submit', function(e) {
        e.preventDefault();
        clearErrors();

        const name = document.getElementById('newAccountName').value.trim();
        const balance = document.getElementById('newAccountBalance').value;
        const currency = document.getElementById('newAccountCurrency').value;
        const color = document.querySelector('input[name="accountColor"]:checked').value;
        let isValid = true;

        // Validação do nome
        if (!name) {
            document.getElementById('nameError').textContent = 'Por favor, insira um nome para a conta';
            isValid = false;
        } else if (name.length > 30) {
            document.getElementById('nameError').textContent = 'O nome deve ter no máximo 30 caracteres';
            isValid = false;
        }

        // Validação do saldo
        if (!balance) {
            document.getElementById('balanceError').textContent = 'Por favor, insira um saldo inicial';
            isValid = false;
        } else if (isNaN(parseFloat(balance))) {
            document.getElementById('balanceError').textContent = 'O saldo deve ser um número válido';
            isValid = false;
        }


        if (isValid) {
            
            closeModal();
            
            accFunctions.createAccount(name, parseFloat(balance), currency, color);
            location.reload();
            
        }
    });
}