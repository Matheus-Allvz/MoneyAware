export default
`<h1 class="page-title">Visão Geral</h1>
        
        <!-- Accounts Cards -->
        <div class="card">
            <div class="card-title">
                <span>Minhas Contas</span>
                <button class="btn btn-primary" id="addTransactionBtn">+ Adicionar Transação</button>
            </div>
            <div class="accounts-container">
                <div class="account-card" style="background: linear-gradient(135deg, #dc3545, #a71d2a);">
                    <div class="account-card-name">Banco Principal</div>
                    <div class="account-card-balance">R$ 12.450,00</div>
                    <div class="account-card-transactions">15 transações</div>
                </div>
                <div class="account-card" style="background: linear-gradient(135deg, #28a745, #1e7e34);">
                    <div class="account-card-name">Cartão de Crédito</div>
                    <div class="account-card-balance">-R$ 1.245,00</div>
                    <div class="account-card-transactions">8 transações</div>
                </div>
                <div class="account-card" style="background: linear-gradient(135deg, #6f42c1, #4a1d96);">
                    <div class="account-card-name">Investimentos</div>
                    <div class="account-card-balance">R$ 25.000,00</div>
                    <div class="account-card-transactions">3 transações</div>
                </div>
                <div class="add-account-card" id="addAccountBtn">
                    + Adicionar Conta
                </div>
            </div>
        </div>
        
        <!-- Summary Cards -->
        <div class="summary-container">
            <div class="summary-card income">
                <div class="summary-card-title">Entradas</div>
                <div class="summary-card-value">R$ 5.200,00</div>
                <div class="summary-card-period">Maio 2023</div>
            </div>
            <div class="summary-card expense">
                <div class="summary-card-title">Saídas</div>
                <div class="summary-card-value">R$ 3.450,00</div>
                <div class="summary-card-period">Maio 2023</div>
            </div>
            <div class="summary-card balance">
                <div class="summary-card-title">Patrimônio Líquido</div>
                <div class="summary-card-value">R$ 36.205,00</div>
                <div class="summary-card-period">Atualizado agora</div>
            </div>
        </div>
        
        <!-- Chart -->
        <div class="card">
            <div class="card-title">Patrimônio Líquido</div>
            <div class="chart-container" id="balanceChart">
                <!-- Chart will be rendered here -->
                <div style="display: flex; align-items: flex-end; height: 100%; gap: 20px; padding-top: 20px;">
                    <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
                        <div style="background-color: #17a2b8; width: 30px; height: 20%; border-radius: 5px 5px 0 0;"></div>
                        <div style="font-size: 0.8rem; margin-top: 5px;">Jan</div>
                    </div>
                    <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
                        <div style="background-color: #17a2b8; width: 30px; height: 35%; border-radius: 5px 5px 0 0;"></div>
                        <div style="font-size: 0.8rem; margin-top: 5px;">Fev</div>
                    </div>
                    <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
                        <div style="background-color: #17a2b8; width: 30px; height: 50%; border-radius: 5px 5px 0 0;"></div>
                        <div style="font-size: 0.8rem; margin-top: 5px;">Mar</div>
                    </div>
                    <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
                        <div style="background-color: #17a2b8; width: 30px; height: 70%; border-radius: 5px 5px 0 0;"></div>
                        <div style="font-size: 0.8rem; margin-top: 5px;">Abr</div>
                    </div>
                    <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
                        <div style="background-color: #17a2b8; width: 30px; height: 100%; border-radius: 5px 5px 0 0;"></div>
                        <div style="font-size: 0.8rem; margin-top: 5px;">Mai</div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Categorias -->
        <div class="categories-section">
            <div class="card">
                <div class="card-title">Gastos por Categoria</div>
                <div class="categories-summary">
                    <div class="category-item" data-category="food">
                        <div class="category-header">
                            <div class="category-emoji">🍔</div>
                            <div class="category-name">Alimentação</div>
                        </div>
                        <div class="category-details">
                            <div class="category-amount">R$ 1.200,00</div>
                            <div class="category-percentage">25%</div>
                        </div>
                        <div class="category-progress">
                            <div class="progress-bar" style="width: 25%; background-color: #FF6384;"></div>
                        </div>
                    </div>
                    <div class="category-item" data-category="housing">
                        <div class="category-header">
                            <div class="category-emoji">🏠</div>
                            <div class="category-name">Moradia</div>
                        </div>
                        <div class="category-details">
                            <div class="category-amount">R$ 1.500,00</div>
                            <div class="category-percentage">31%</div>
                        </div>
                        <div class="category-progress">
                            <div class="progress-bar" style="width: 31%; background-color: #36A2EB;"></div>
                        </div>
                    </div>
                    <div class="category-item" data-category="transport">
                        <div class="category-header">
                            <div class="category-emoji">🚗</div>
                            <div class="category-name">Transporte</div>
                        </div>
                        <div class="category-details">
                            <div class="category-amount">R$ 400,00</div>
                            <div class="category-percentage">8%</div>
                        </div>
                        <div class="category-progress">
                            <div class="progress-bar" style="width: 8%; background-color: #FFCE56;"></div>
                        </div>
                    </div>
                    <div class="category-item" data-category="shopping">
                        <div class="category-header">
                            <div class="category-emoji">🛍️</div>
                            <div class="category-name">Compras</div>
                        </div>
                        <div class="category-details">
                            <div class="category-amount">R$ 350,00</div>
                            <div class="category-percentage">7%</div>
                        </div>
                        <div class="category-progress">
                            <div class="progress-bar" style="width: 7%; background-color: #4BC0C0;"></div>
                        </div>
                    </div>
                    <div class="category-item" data-category="other">
                        <div class="category-header">
                            <div class="category-emoji">📦</div>
                            <div class="category-name">Outros</div>
                        </div>
                        <div class="category-details">
                            <div class="category-amount">R$ 1.350,00</div>
                            <div class="category-percentage">29%</div>
                        </div>
                        <div class="category-progress">
                            <div class="progress-bar" style="width: 29%; background-color: #9966FF;"></div>
                        </div>
                    </div>

                    
                </div>
                <div class="categories-total">
                    <div>Total de Gastos:</div>
                    <div class="total-amount">R$ 4.800,00</div>
                </div>
            </div>
        </div>
        
        <!-- Transactions -->
        <div class="transactions-section">
            <div class="card">
                <div class="card-title">Lista de Transações</div>
                <div class="transactions-header">
                    <div class="transactions-count">15 transações encontradas</div>
                </div>
                <div class="transactions-list">
                    <div class="transaction-item">
                        <div class="transaction-icon">
                            <div class="transaction-emoji">🍔</div>
                        </div>
                        <div class="transaction-details">
                            <div class="transaction-name">Restaurante</div>
                            <div class="transaction-info">
                                <span class="transaction-date">15/05/2023</span>
                                <span class="transaction-account">Banco Principal</span>
                                <span class="transaction-category">Alimentação</span>
                            </div>
                        </div>
                        <div class="transaction-amount expense">- R$ 85,90</div>
                    </div>
                    <div class="transaction-item">
                        <div class="transaction-icon">
                            <div class="transaction-emoji">💰</div>
                        </div>
                        <div class="transaction-details">
                            <div class="transaction-name">Salário</div>
                            <div class="transaction-info">
                                <span class="transaction-date">10/05/2023</span>
                                <span class="transaction-account">Banco Principal</span>
                                <span class="transaction-category">Renda</span>
                            </div>
                        </div>
                        <div class="transaction-amount income">+ R$ 5.000,00</div>
                    </div>
                    <div class="transaction-item">
                        <div class="transaction-icon">
                            <div class="transaction-emoji">🏠</div>
                        </div>
                        <div class="transaction-details">
                            <div class="transaction-name">Aluguel</div>
                            <div class="transaction-info">
                                <span class="transaction-date">05/05/2023</span>
                                <span class="transaction-account">Banco Principal</span>
                                <span class="transaction-category">Moradia</span>
                            </div>
                        </div>
                        <div class="transaction-amount expense">- R$ 1.200,00</div>
                    </div>
                    <div class="transaction-item">
                        <div class="transaction-icon">
                            <div class="transaction-emoji">🚗</div>
                        </div>
                        <div class="transaction-details">
                            <div class="transaction-name">Combustível</div>
                            <div class="transaction-info">
                                <span class="transaction-date">03/05/2023</span>
                                <span class="transaction-account">Cartão de Crédito</span>
                                <span class="transaction-category">Transporte</span>
                            </div>
                        </div>
                        <div class="transaction-amount expense">- R$ 150,00</div>
                    </div>
                    <div class="transaction-item">
                        <div class="transaction-icon">
                            <div class="transaction-emoji">🛍️</div>
                        </div>
                        <div class="transaction-details">
                            <div class="transaction-name">Compras</div>
                            <div class="transaction-info">
                                <span class="transaction-date">01/05/2023</span>
                                <span class="transaction-account">Cartão de Crédito</span>
                                <span class="transaction-category">Compras</span>
                            </div>
                        </div>
                        <div class="transaction-amount expense">- R$ 350,00</div>
                    </div>
                </div>
                <div class="transactions-pagination">
                    <button class="btn btn-outline" disabled>Anterior</button>
                    <span class="pagination-info">Página 1 de 3</span>
                    <button class="btn btn-outline">Próxima</button>
                </div>
            </div>
        </div>`