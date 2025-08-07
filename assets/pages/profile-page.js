export default 
`
<h1 class="page-title">Meu Perfil</h1>
        
        <!-- User Info Card -->
        <div class="card">
            <div class="card-title">Informações Pessoais</div>
            <div class="user-info">
                <div class="user-avatar">👤</div>
                <div class="user-details">
                    <div class="user-name">João da Silva</div>
                    <div class="user-email">joao.silva@example.com</div>
                    <div class="user-meta">Membro desde: 15/03/2022</div>
                </div>
            </div>
            
            <div class="form-group">
                <label class="form-label" for="userCurrency">Moeda Principal</label>
                <select class="form-control" id="userCurrency">
                    <option value="BRL" selected>Real Brasileiro (R$)</option>
                    <option value="USD">Dólar Americano ($)</option>
                    <option value="EUR">Euro (€)</option>
                </select>
            </div>
            
            <div class="form-footer">
                <button class="btn btn-primary">Salvar Alterações</button>
            </div>
        </div>
        
        <!-- Data Management Card -->
        <div class="card">
            <div class="card-title">Gerenciamento de Dados</div>
            
            <div class="data-option">
                <div class="option-info">
                    <div class="option-icon">📤</div>
                    <div>
                        <div class="option-title">Exportar Dados</div>
                        <div class="option-description">Salve um backup de todas as suas transações e contas em um arquivo JSON</div>
                    </div>
                </div>
                <button class="btn btn-outline" id="exportDataBtn">Exportar</button>
            </div>
            
            <div class="data-option">
                <div class="option-info">
                    <div class="option-icon">📥</div>
                    <div>
                        <div class="option-title">Importar Dados</div>
                        <div class="option-description">Substitua seus dados atuais por um arquivo JSON de backup</div>
                    </div>
                </div>
                <div class="import-actions">
                    <input type="file" id="importFile" accept=".json" style="display: none;">
                    <button class="btn btn-outline" id="chooseFileBtn">Escolher Arquivo</button>
                    <button class="btn btn-primary" id="importDataBtn" disabled>Importar</button>
                </div>
            </div>
            
            <div class="data-option danger-option">
                <div class="option-info">
                    <div class="option-icon">⚠️</div>
                    <div>
                        <div class="option-title">Limpar Todos os Dados</div>
                        <div class="option-description">Esta ação irá remover permanentemente todas as suas contas e transações</div>
                    </div>
                </div>
                <button class="btn btn-danger" id="deleteAllDataBtn">Limpar Tudo</button>
            </div>
        </div>
`