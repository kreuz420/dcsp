# 🔧 Configuração CORS no Make.com - Solução para Erro 410

## 🚨 Problema Identificado
- **Erro 410**: Webhook desativado ou expirado
- **Erro CORS**: Headers de cross-origin não configurados

## 🛠️ Solução Passo a Passo

### **Passo 1: Verificar Webhook no Make.com**

1. **Acesse seu cenário no Make.com**
2. **Localize o módulo "Webhook"**
3. **Verifique o status:**
   - ✅ **Active** = Funcionando
   - ❌ **Inactive** = Precisa reativar

### **Passo 2: Reativar Webhook (se necessário)**

1. **Clique em "Show webhook settings"**
2. **Clique em "Activate"**
3. **Copie a nova URL do webhook**
4. **Atualize o arquivo `config.js`:**

```javascript
webhookUrl: 'NOVA_URL_DO_WEBHOOK_AQUI',
```

### **Passo 3: Configurar CORS no Make.com**

#### **Opção A: Usando "Set up webhook" (Recomendado)**

1. **Adicione um módulo "Set up webhook" ANTES do webhook atual**
2. **Configure os headers:**

```
Name: Access-Control-Allow-Origin
Value: *

Name: Access-Control-Allow-Methods  
Value: POST, OPTIONS

Name: Access-Control-Allow-Headers
Value: Content-Type, Authorization

Name: Access-Control-Max-Age
Value: 86400
```

3. **Configure o método:**
   - **Method**: POST
   - **Response**: JSON

#### **Opção B: Usando "HTTP" (Alternativo)**

1. **Adicione um módulo "HTTP"**
2. **Configure:**
   - **URL**: Sua URL do webhook
   - **Method**: POST
   - **Headers**: Adicione os headers CORS acima

### **Passo 4: Estrutura Recomendada do Cenário**

```
[Trigger] → [Set up webhook] → [Process Data] → [AI Agent] → [Response]
```

### **Passo 5: Testar a Configuração**

1. **Ative o cenário no Make.com**
2. **Teste com a página `test-webhook.html`**
3. **Verifique se os erros 410 e CORS foram resolvidos**

## 🔄 **Atualização do Config.js**

Após obter a nova URL do webhook, atualize o arquivo `config.js`:

```javascript
// Substitua esta linha:
webhookUrl: 'https://hook.us2.make.com/tyg6dmg588t2afk9qsofxgeruutr5drr',

// Pela nova URL:
webhookUrl: 'NOVA_URL_DO_WEBHOOK',
```

## 🧪 **Teste de Verificação**

Use este código no console do navegador para testar:

```javascript
// Teste simples
fetch('SUA_NOVA_URL_WEBHOOK', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({test: 'cors'})
}).then(r => console.log('Status:', r.status))
  .catch(e => console.log('Erro:', e.message));
```

## 📋 **Checklist de Verificação**

- [ ] Webhook está ativo no Make.com
- [ ] URL do webhook foi atualizada no config.js
- [ ] Headers CORS foram configurados
- [ ] Cenário está ativo no Make.com
- [ ] Teste simples funciona (status 200)
- [ ] Teste CORS passa
- [ ] Landing page funciona corretamente

## 🆘 **Se ainda houver problemas:**

1. **Verifique os logs do Make.com** em "Executions"
2. **Teste a URL do webhook** diretamente no navegador
3. **Use um proxy CORS** temporariamente:

```javascript
webhookUrl: 'https://cors-anywhere.herokuapp.com/SUA_URL_WEBHOOK',
```

---

**💡 Dica**: Sempre teste primeiro com `test-webhook.html` antes de usar a landing page principal. 