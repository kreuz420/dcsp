# 🔧 Guia de Solução de Problemas - Landing Page Agente I.A

## 🚨 Problemas Comuns e Soluções

### 1. **Erro de CORS (Cross-Origin Resource Sharing)**

**Sintomas:**
- Erro no console: `Access to fetch at '...' from origin '...' has been blocked by CORS policy`
- Teste do webhook falha com erro de CORS

**Soluções:**

#### Opção A: Configurar CORS no Make.com
1. No seu cenário do Make.com, adicione um módulo "Set up webhook"
2. Configure os headers CORS:
   ```
   Access-Control-Allow-Origin: *
   Access-Control-Allow-Methods: POST, OPTIONS
   Access-Control-Allow-Headers: Content-Type
   ```

#### Opção B: Usar Proxy CORS
Se não conseguir configurar CORS no Make.com, use um proxy:

```javascript
// No config.js, altere a URL do webhook para:
webhookUrl: 'https://cors-anywhere.herokuapp.com/https://hook.us2.make.com/tyg6dmg588t2afk9qsofxgeruutr5drr',
```

#### Opção C: Servidor Local
Execute a landing page em um servidor local:
```bash
# Python 3
python -m http.server 8000

# Node.js
npx http-server

# PHP
php -S localhost:8000
```

### 2. **Webhook não responde**

**Sintomas:**
- Timeout na requisição
- Erro 404 ou 500
- Nenhuma resposta do webhook

**Soluções:**

1. **Verificar se o webhook está ativo no Make.com**
   - Acesse seu cenário no Make.com
   - Verifique se o webhook está "Ativo"
   - Teste o webhook diretamente no Make.com

2. **Verificar a URL do webhook**
   - Confirme se a URL está correta no `config.js`
   - Teste a URL em um navegador (deve retornar uma página de teste)

3. **Verificar logs do Make.com**
   - No Make.com, vá em "Execuções"
   - Verifique se há erros nas execuções recentes

### 3. **Erro de Configuração**

**Sintomas:**
- "Configuração não carregada"
- Campos não aparecem
- JavaScript não funciona

**Soluções:**

1. **Verificar ordem dos scripts**
   ```html
   <!-- Deve estar nesta ordem -->
   <script src="config.js"></script>
   <script src="script.js"></script>
   ```

2. **Verificar se o config.js está sendo carregado**
   - Abra o console do navegador (F12)
   - Digite: `console.log(LANDING_PAGE_CONFIG)`
   - Deve mostrar o objeto de configuração

### 4. **Formulário não envia**

**Sintomas:**
- Botão não funciona
- Dados não são enviados
- Sem feedback visual

**Soluções:**

1. **Verificar validação**
   - Todos os campos obrigatórios devem estar preenchidos
   - O campo "Gatilho de Contexto" deve ter pelo menos 10 caracteres

2. **Verificar console de erros**
   - Abra o console do navegador (F12)
   - Procure por erros JavaScript

3. **Testar em modo privado**
   - Abra a página em uma aba privada
   - Isso elimina problemas de cache

### 5. **Problemas de Estilo**

**Sintomas:**
- Página não carrega corretamente
- Estilos não aplicados
- Layout quebrado

**Soluções:**

1. **Limpar cache do navegador**
   - Ctrl+F5 (Windows) ou Cmd+Shift+R (Mac)

2. **Verificar se o CSS está carregando**
   - Abra as ferramentas de desenvolvedor (F12)
   - Vá na aba "Network"
   - Verifique se `styles.css` foi carregado

3. **Verificar fontes**
   - As fontes do Google Fonts podem não carregar
   - Use fontes do sistema como fallback

## 🧪 Testes de Diagnóstico

### Teste 1: Verificar Configuração
```javascript
// No console do navegador
console.log('Configuração:', LANDING_PAGE_CONFIG);
console.log('Webhook URL:', LANDING_PAGE_CONFIG.webhookUrl);
```

### Teste 2: Verificar Elementos
```javascript
// Verificar se os elementos existem
console.log('Formulário:', document.getElementById('postForm'));
console.log('Botão:', document.querySelector('.submit-btn'));
```

### Teste 3: Testar Webhook Manualmente
```javascript
// Teste direto no console
fetch('https://hook.us2.make.com/tyg6dmg588t2afk9qsofxgeruutr5drr', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({test: true})
}).then(r => console.log('Status:', r.status));
```

## 📞 Suporte Adicional

### Logs Úteis
- **Console do navegador**: F12 → Console
- **Network**: F12 → Network (para ver requisições)
- **Logs do Make.com**: Execuções → Detalhes da execução

### Informações para Suporte
Quando pedir ajuda, inclua:
1. Erro exato do console
2. URL do webhook (sem a chave secreta)
3. Navegador e versão
4. Sistema operacional
5. Screenshot do erro

### Recursos Úteis
- [Documentação do Make.com](https://www.make.com/en/help)
- [Guia CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
- [Teste de Webhook](https://webhook.site/)

---

**💡 Dica**: Sempre teste primeiro com o arquivo `test.html` para identificar problemas específicos antes de usar a landing page principal. 