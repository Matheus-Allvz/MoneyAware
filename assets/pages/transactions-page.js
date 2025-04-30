export default
`
<h1 class="page-title">Minhas Transações</h1>
        
        <!-- Filtros -->
        <div class="card">
            <div class="card-title">Filtrar Transações</div>
            <div class="filters-container">
                <div class="form-row">
                    <div class="form-group">
                        <label class="form-label" for="searchTerm">Buscar</label>
                        <input type="text" class="form-control" id="searchTerm" placeholder="Nome, descrição...">
                    </div>
                    <div class="form-group">
                        <label class="form-label" for="transactionType">Tipo</label>
                        <select class="form-control" id="transactionType">
                            <option value="all">Todos</option>
                            <option value="income">Entradas</option>
                            <option value="expense">Saídas</option>
                        </select>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label class="form-label" for="transactionAccount">Conta</label>
                        <select class="form-control" id="transactionAccount">
                            <option value="all">Todas</option>
                            <option value="bank">Banco Principal</option>
                            <option value="credit">Cartão de Crédito</option>
                            <option value="investment">Investimentos</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="form-label" for="transactionCategory">Categoria</label>
                        <select class="form-control" id="transactionCategory">
                            <option value="all">Todas</option>
                            <option value="food">Alimentação</option>
                            <option value="housing">Moradia</option>
                            <option value="transport">Transporte</option>
                            <option value="shopping">Compras</option>
                        </select>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label class="form-label" for="dateFrom">De</label>
                        <input type="date" class="form-control" id="dateFrom">
                    </div>
                    <div class="form-group">
                        <label class="form-label" for="dateTo">Até</label>
                        <input type="date" class="form-control" id="dateTo">
                    </div>
                    <div class="form-group">
                        <label class="form-label" for="amountFrom">Valor Mín.</label>
                        <input type="number" class="form-control" id="amountFrom" step="0.01" placeholder="R$ 0,00">
                    </div>
                    <div class="form-group">
                        <label class="form-label" for="amountTo">Valor Máx.</label>
                        <input type="number" class="form-control" id="amountTo" step="0.01" placeholder="R$ 0,00">
                    </div>
                </div>
                <div class="filter-actions">
                    <button class="btn btn-outline" id="resetFilters">Limpar Filtros</button>
                    <button class="btn btn-primary" id="applyFilters">Aplicar Filtros</button>
                </div>
            </div>
        </div>
        
        <!-- Content -->
        <div class="transactions-content">
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
            
            <!-- Transações -->
            <div class="transactions-section">
                <div class="card">
                    <div class="card-title">Lista de Transações</div>
                    <div class="transactions-header">
                        <div class="transactions-count">15 transações encontradas</div>
                        <button class="btn btn-primary" id="addTransactionBtn">+ Nova Transação</button>
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
            </div>
        </div>
`