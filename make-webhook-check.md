# 🔍 Verificação do Webhook no Make.com

## 🚨 Problema: Dados não chegam no webhook

**URL do Webhook:** `https://hook.us2.make.com/tyg6dmg588t2afk9qsofxgeruutr5drr`

## 🛠️ Passos para Verificar e Corrigir

### **1. Verificar Status do Webhook no Make.com**

1. **Acesse seu cenário no Make.com**
2. **Localize o módulo "Webhook"**
3. **Verifique se está:**
   - ✅ **Active** = Funcionando
   - ❌ **Inactive** = Precisa reativar

### **2. Verificar Execuções do Cenário**

1. **No Make.com, vá em "Executions"**
2. **Procure por execuções recentes**
3. **Verifique se há:**
   - ✅ **Execuções bem-sucedidas** (verde)
   - ❌ **Execuções com erro** (vermelho)
   - ⚠️ **Nenhuma execução** = Webhook não está recebendo dados

### **3. Testar Webhook Diretamente**

#### **Opção A: Teste no Navegador**
1. **Abra uma nova aba**
2. **Cole a URL:** `https://hook.us2.make.com/tyg6dmg588t2afk9qsofxgeruutr5drr`
3. **Deve aparecer uma página de teste do webhook**

#### **Opção B: Teste com Postman/Insomnia**
```http
POST https://hook.us2.make.com/tyg6dmg588t2afk9qsofxgeruutr5drr
Content-Type: application/json

{
  "test": true,
  "message": "Teste direto do webhook",
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```

### **4. Verificar Configuração do Cenário**

#### **Estrutura Recomendada:**
```
[Webhook] → [Router] → [AI Agent] → [Response]
```

#### **Configurações Importantes:**
1. **Webhook deve estar como primeiro módulo**
2. **Método: POST**
3. **Content-Type: application/json**
4. **Cenário deve estar "Active"**

### **5. Verificar Logs de Erro**

1. **No Make.com, vá em "Executions"**
2. **Clique em uma execução com erro**
3. **Verifique:**
   - **Erro específico**
   - **Dados recebidos**
   - **Módulo que falhou**

### **6. Problemas Comuns e Soluções**

#### **Problema: Webhook não recebe dados**
**Soluções:**
- Verificar se o webhook está ativo
- Confirmar se a URL está correta
- Testar com ferramenta externa

#### **Problema: Dados chegam mas não processam**
**Soluções:**
- Verificar configuração do AI Agent
- Confirmar formato dos dados
- Verificar logs de erro

#### **Problema: Erro de CORS**
**Soluções:**
- Configurar headers CORS no webhook
- Usar proxy CORS temporariamente
- Testar em servidor local

### **7. Teste com Debug Tool**

Use o arquivo `debug-webhook.html` para:
1. **Verificar status do webhook**
2. **Testar envio de dados**
3. **Identificar problemas específicos**

### **8. Checklist de Verificação**

- [ ] Webhook está ativo no Make.com
- [ ] Cenário está ativo
- [ ] URL do webhook está correta
- [ ] Teste direto funciona
- [ ] Execuções aparecem no Make.com
- [ ] Não há erros nos logs
- [ ] AI Agent está configurado corretamente

### **9. Comandos de Teste**

#### **Teste no Console do Navegador:**
```javascript
// Teste simples
fetch('https://hook.us2.make.com/tyg6dmg588t2afk9qsofxgeruutr5drr', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({test: true})
}).then(r => console.log('Status:', r.status))
  .catch(e => console.log('Erro:', e.message));
```

#### **Teste com cURL:**
```bash
curl -X POST https://hook.us2.make.com/tyg6dmg588t2afk9qsofxgeruutr5drr \
  -H "Content-Type: application/json" \
  -d '{"test": true, "message": "teste"}'
```

### **10. Próximos Passos**

1. **Execute o debug com `debug-webhook.html`**
2. **Verifique os logs no Make.com**
3. **Teste diretamente o webhook**
4. **Configure CORS se necessário**
5. **Verifique a configuração do AI Agent**

---

**💡 Dica**: Sempre verifique primeiro se o webhook está ativo e se o cenário está rodando antes de testar a landing page. 