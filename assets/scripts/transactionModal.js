export function init(){
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
};