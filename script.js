// Configuração principal
const CONFIG = {
    webhookUrl: LANDING_PAGE_CONFIG.webhookUrl,
    validation: LANDING_PAGE_CONFIG.validation
};

// Elementos do DOM
const elements = {
    form: document.getElementById('postForm'),
    submitBtn: document.querySelector('.submit-btn'),
    loadingSpinner: document.getElementById('loadingSpinner'),
    emptyState: document.getElementById('emptyState'),
    generatedPost: document.getElementById('generatedPost'),
    notificationContainer: document.getElementById('notificationContainer')
};

// Mapeamento de valores para labels
const valueLabels = Object.fromEntries(
    Object.entries(LANDING_PAGE_CONFIG.options).map(([key, options]) => [
        key,
        options.reduce((acc, option) => {
            acc[option] = option;
            return acc;
        }, {})
    ])
);

// Inicialização da aplicação
function initializeApp() {
    populateDropdowns();
    setupEventListeners();
    setDynamicTexts();
    setPlaceholders();
}

// Popular dropdowns com opções
function populateDropdowns() {
    Object.entries(LANDING_PAGE_CONFIG.options).forEach(([fieldName, options]) => {
        const select = document.getElementById(fieldName);
        if (select) {
            options.forEach(option => {
                const optionElement = document.createElement('option');
                optionElement.value = option;
                optionElement.textContent = option;
                select.appendChild(optionElement);
            });
        }
    });
}

// Configurar event listeners
function setupEventListeners() {
    if (elements.form) {
        elements.form.addEventListener('submit', handleFormSubmit);
    }
}

// Definir textos dinâmicos
function setDynamicTexts() {
    const loadingMessage = document.getElementById('loadingMessage');
    const submitButtonText = document.getElementById('submitButtonText');
    
    if (loadingMessage) {
        loadingMessage.textContent = LANDING_PAGE_CONFIG.texts.messages.loading;
    }
    
    if (submitButtonText) {
        submitButtonText.textContent = LANDING_PAGE_CONFIG.texts.buttons.submit;
    }
}

// Definir placeholders dinâmicos
function setPlaceholders() {
    const executiveName = document.getElementById('executiveName');
    const contextTrigger = document.getElementById('contextTrigger');
    
    if (executiveName) {
        executiveName.placeholder = LANDING_PAGE_CONFIG.texts.placeholders.executiveName;
    }
    
    if (contextTrigger) {
        contextTrigger.placeholder = LANDING_PAGE_CONFIG.texts.placeholders.contextTrigger;
    }
}

// Manipular envio do formulário
async function handleFormSubmit(event) {
    event.preventDefault();
    
    console.log('🚀 Iniciando envio do formulário...');
    
    const formData = new FormData(elements.form);
    const data = Object.fromEntries(formData.entries());
    
    console.log('📋 Dados do formulário:', data);
    
    // Validar campos obrigatórios
    if (!validateForm(data)) {
        showNotification(LANDING_PAGE_CONFIG.texts.messages.validationError, 'error');
        return;
    }
    
    // Mostrar loading
    showLoading(true);
    
    try {
        console.log('📤 Enviando dados para o webhook...');
        const response = await sendToWebhook(data);
        
        console.log('✅ Resposta do webhook recebida:', response);
        
        if (response.success) {
            processAgentResponse(response.data);
        } else {
            throw new Error(response.error || 'Erro desconhecido');
        }
        
    } catch (error) {
        console.error('❌ Erro no envio:', error);
        showNotification(LANDING_PAGE_CONFIG.texts.messages.error, 'error');
    } finally {
        showLoading(false);
    }
}

// Validar formulário
function validateForm(data) {
    const requiredFields = CONFIG.validation.required;
    
    for (const field of requiredFields) {
        if (!data[field] || data[field].trim() === '') {
            console.log(`❌ Campo obrigatório não preenchido: ${field}`);
            return false;
        }
    }
    
    console.log('✅ Validação do formulário aprovada');
    return true;
}

// Enviar dados para o webhook
async function sendToWebhook(data) {
    console.log('📤 Dados sendo enviados:', data);
    
    try {
        const response = await fetch(CONFIG.webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        
        console.log('📥 Status da resposta:', response.status);
        
        // CORREÇÃO: Ler o corpo da resposta apenas UMA vez
        let responseData;
        const responseText = await response.text();
        
        try {
            responseData = JSON.parse(responseText);
            console.log('📥 Resposta JSON:', responseData);
        } catch (parseError) {
            console.log('📥 Resposta não é JSON, tratando como texto');
            responseData = { content: responseText };
        }
        
        if (response.ok) {
            return {
                success: true,
                data: responseData
            };
        } else {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
    } catch (error) {
        console.error('❌ Erro na requisição:', error);
        throw error;
    }
}

// Processar resposta do agente
function processAgentResponse(responseData) {
    console.log('🔄 Processando resposta do agente:', responseData);
    
    let content, metadata;
    
    // Detectar formato da resposta
    if (responseData.post) {
        console.log('📝 Formato detectado: objeto post completo');
        content = responseData.post.content || responseData.post;
        metadata = responseData.post.metadata || {};
    } else if (responseData.success) {
        console.log('📝 Formato detectado: objeto success');
        content = responseData.success.content || responseData.success;
        metadata = responseData.success.metadata || {};
    } else if (typeof responseData === 'string') {
        console.log('📝 Formato detectado: string simples');
        content = responseData;
        metadata = {};
    } else if (responseData.content) {
        console.log('📝 Formato detectado: objeto com content');
        content = responseData.content;
        metadata = responseData.metadata || {};
    } else {
        console.log('📝 Formato detectado: objeto direto');
        content = JSON.stringify(responseData);
        metadata = {};
    }
    
    console.log('📄 Conteúdo extraído:', content);
    console.log('📊 Metadados extraídos:', metadata);
    
    displayGeneratedPost(content, metadata);
    showNotification(LANDING_PAGE_CONFIG.texts.messages.success, 'success');
}

// Exibir post gerado
function displayGeneratedPost(content, metadata = {}) {
    const postContainer = elements.generatedPost;
    
    if (!postContainer) {
        console.error('❌ Container do post não encontrado');
        return;
    }
    
    // Determinar título
    const title = metadata.title || 'Post Gerado';
    
    // Determinar conteúdo do post
    const postContent = typeof content === 'string' ? content : JSON.stringify(content);
    
    // Determinar hashtags
    const hashtags = metadata.hashtags || metadata.tags || [];
    const hashtagsText = Array.isArray(hashtags) ? hashtags.join(' ') : hashtags;
    
    // Determinar metadados
    const readingTime = metadata.estimatedReadingTime || metadata.readingTime;
    const wordCount = metadata.wordCount || metadata.words;
    
    // Construir HTML
    let html = `
        <div class="post-content">
            <h3>${title}</h3>
            <p>${postContent}</p>
    `;
    
    // Adicionar hashtags se existirem
    if (hashtagsText) {
        html += `<div class="post-metadata">
            <div class="metadata-item">
                <strong>Hashtags:</strong> ${hashtagsText}
            </div>
        </div>`;
    }
    
    // Adicionar metadados se existirem
    if (readingTime || wordCount) {
        html += `<div class="post-metadata">`;
        if (readingTime) {
            html += `<div class="metadata-item">⏱️ ${readingTime} min de leitura</div>`;
        }
        if (wordCount) {
            html += `<div class="metadata-item">📝 ${wordCount} palavras</div>`;
        }
        html += `</div>`;
    }
    
    // Adicionar botões de ação
    html += `
        <div class="post-actions">
            <button class="action-btn copy-btn" onclick="copyPost()">
                Copiar Post
            </button>
            <button class="action-btn download-btn" onclick="downloadPost()">
                Baixar
            </button>
            <button class="action-btn regenerate-btn" onclick="regeneratePost()">
                Regenerar
            </button>
        </div>
    </div>`;
    
    // Exibir o post
    postContainer.innerHTML = html;
    
    if (elements.emptyState) {
        elements.emptyState.style.display = 'none';
    }
    
    postContainer.style.display = 'block';
    
    console.log('✅ Post exibido com sucesso');
}

// Mostrar/ocultar loading
function showLoading(show) {
    if (show) {
        if (elements.loadingSpinner) {
            elements.loadingSpinner.style.display = 'block';
        }
        if (elements.emptyState) {
            elements.emptyState.style.display = 'none';
        }
        if (elements.generatedPost) {
            elements.generatedPost.style.display = 'none';
        }
        if (elements.submitBtn) {
            elements.submitBtn.disabled = true;
        }
    } else {
        if (elements.loadingSpinner) {
            elements.loadingSpinner.style.display = 'none';
        }
        if (elements.submitBtn) {
            elements.submitBtn.disabled = false;
        }
    }
}

// Mostrar notificação
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    if (elements.notificationContainer) {
        elements.notificationContainer.appendChild(notification);
        
        // Remover notificação após 5 segundos
        setTimeout(() => {
            notification.remove();
        }, 5000);
    }
}

// Copiar post
function copyPost() {
    const postContent = document.querySelector('.post-content p');
    if (postContent) {
        navigator.clipboard.writeText(postContent.textContent).then(() => {
            showNotification(LANDING_PAGE_CONFIG.texts.messages.copied, 'success');
        }).catch(() => {
            showNotification('Erro ao copiar o post', 'error');
        });
    }
}

// Baixar post
function downloadPost() {
    const postContent = document.querySelector('.post-content p');
    if (postContent) {
        const content = postContent.textContent;
        const blob = new Blob([content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'post-gerado.txt';
        a.click();
        URL.revokeObjectURL(url);
        showNotification(LANDING_PAGE_CONFIG.texts.messages.downloaded, 'success');
    }
}

// Regenerar post
function regeneratePost() {
    console.log('🔄 Regenerando post...');
    
    // Limpar post atual
    if (elements.generatedPost) {
        elements.generatedPost.style.display = 'none';
    }
    if (elements.emptyState) {
        elements.emptyState.style.display = 'block';
    }
    
    // Re-enviar formulário
    if (elements.form) {
        handleFormSubmit(new Event('submit'));
    }
}

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', initializeApp); 