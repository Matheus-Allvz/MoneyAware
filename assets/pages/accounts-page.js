export default
`<div class="page-header">
    <h1 class="page-title">Minhas Contas</h1>
    <button class="btn btn-primary" id="addAccountBtn">+ Adicionar Conta</button>
</div>

<!-- Accounts List -->
<div class="card">
    <div class="card-title">Todas as Contas</div>
    <div class="accounts-list">
        <!-- Account 1 -->
        <div class="account-item" style="background: linear-gradient(135deg, #4a6fa5, #166088);">
            <div class="account-info">
                <div class="account-name">Banco Principal</div>
                <div class="account-balance">R$ 12.450,00</div>
                <div class="account-meta">15 transações</div>
            </div>
            <div class="account-actions">
                <button class="btn-icon edit-account" title="Editar">
                    <i>✏️</i>
                </button>
                <button class="btn-icon delete-account" title="Excluir">
                    <i>🗑️</i>
                </button>
            </div>
        </div>
        
        <!-- Account 2 -->
        <div class="account-item" style="background: linear-gradient(135deg, #dc3545, #a71d2a);">
            <div class="account-info">
                <div class="account-name">Cartão de Crédito</div>
                <div class="account-balance">-R$ 1.245,00</div>
                <div class="account-meta">8 transações</div>
            </div>
            <div class="account-actions">
                <button class="btn-icon edit-account" title="Editar">
                    <i>✏️</i>
                </button>
                <button class="btn-icon delete-account" title="Excluir">
                    <i>🗑️</i>
                </button>
            </div>
        </div>
        
        <!-- Account 3 -->
        <div class="account-item" style="background: linear-gradient(135deg, #28a745, #1e7e34);">
            <div class="account-info">
                <div class="account-name">Investimentos</div>
                <div class="account-balance">R$ 25.000,00</div>
                <div class="account-meta">3 transações</div>
            </div>
            <div class="account-actions">
                <button class="btn-icon edit-account" title="Editar">
                    <i>✏️</i>
                </button>
                <button class="btn-icon delete-account" title="Excluir">
                    <i>🗑️</i>
                </button>
            </div>
        </div>
        
        <!-- Account 4 -->
        <div class="account-item" style="background: linear-gradient(135deg, #6f42c1, #4a1d96);">
            <div class="account-info">
                <div class="account-name">Carteira</div>
                <div class="account-balance">R$ 350,00</div>
                <div class="account-meta">5 transações</div>
            </div>
            <div class="account-actions">
                <button class="btn-icon edit-account" title="Editar">
                    <i>✏️</i>
                </button>
                <button class="btn-icon delete-account" title="Excluir">
                    <i>🗑️</i>
                </button>
            </div>
        </div>
    </div>
</div>`;