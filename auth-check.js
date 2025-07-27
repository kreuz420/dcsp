// Script de verificação de autenticação
(function() {
    'use strict';
    
    // Verificar autenticação
    function checkAuthentication() {
        const isAuthenticated = sessionStorage.getItem('dcspAuthenticated');
        const authTimestamp = sessionStorage.getItem('authTimestamp');
        
        // Se não está autenticado, redirecionar para login
        if (isAuthenticated !== 'true') {
            redirectToAuth();
            return false;
        }
        
        // Verificar se a sessão não expirou (24 horas)
        if (authTimestamp) {
            const now = Date.now();
            const sessionTime = now - parseInt(authTimestamp);
            const maxSessionTime = 24 * 60 * 60 * 1000; // 24 horas em milissegundos
            
            if (sessionTime > maxSessionTime) {
                // Sessão expirada
                sessionStorage.removeItem('dcspAuthenticated');
                sessionStorage.removeItem('authTimestamp');
                redirectToAuth();
                return false;
            }
        }
        
        return true;
    }
    
    // Redirecionar para página de autenticação
    function redirectToAuth() {
        // Verificar se não estamos já na página de auth
        if (!window.location.pathname.includes('auth.html')) {
            window.location.href = 'auth.html';
        }
    }
    
    // Adicionar botão de logout no sidebar
    function addLogoutButton() {
        const sidebar = document.querySelector('.sidebar');
        if (sidebar) {
            const logoutBtn = document.createElement('div');
            logoutBtn.className = 'sidebar-footer';
            logoutBtn.innerHTML = `
                <button onclick="logout()" style="
                    background: none;
                    border: none;
                    color: #696969;
                    cursor: pointer;
                    padding: 0.5rem;
                    width: 100%;
                    text-align: left;
                    font-size: 0.9rem;
                    transition: color 0.3s ease;
                " onmouseover="this.style.color='#BF4C4A'" onmouseout="this.style.color='#696969'">
                    <i class="fas fa-sign-out-alt"></i>
                    Sair
                </button>
            `;
            
            // Remover footer existente se houver
            const existingFooter = sidebar.querySelector('.sidebar-footer');
            if (existingFooter) {
                existingFooter.remove();
            }
            
            sidebar.appendChild(logoutBtn);
        }
    }
    
    // Função de logout
    window.logout = function() {
        sessionStorage.removeItem('dcspAuthenticated');
        sessionStorage.removeItem('authTimestamp');
        window.location.href = 'auth.html';
    };
    
    // Verificar autenticação quando a página carregar
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            if (checkAuthentication()) {
                addLogoutButton();
            }
        });
    } else {
        if (checkAuthentication()) {
            addLogoutButton();
        }
    }
    
    // Verificar autenticação periodicamente (a cada 5 minutos)
    setInterval(function() {
        checkAuthentication();
    }, 5 * 60 * 1000);
    
})(); 