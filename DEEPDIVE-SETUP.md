# 🔧 Configuração do Webhook Deepdive

## 📋 **Configuração Necessária**

### **1. Webhook URL**
Você precisa configurar a URL do webhook para o Deepdive no arquivo `config.js`:

```javascript
// URL do webhook para Deepdive
deepdiveWebhookUrl: "https://hook.us2.make.com/SEU_WEBHOOK_DEEPDIVE_AQUI",
```

**Substitua `SEU_WEBHOOK_DEEPDIVE_AQUI` pela URL real do seu webhook do Make.com**

### **2. Parâmetros Enviados**
O Deepdive envia apenas 2 parâmetros:

```json
{
  "razaoSocial": "Nome da empresa",
  "segmentoAtuacao": "Segmento selecionado"
}
```

### **3. Segmentos Disponíveis**
Os segmentos são os mesmos da página de posts:
- Construção e Infraestrutura
- Recursos Naturais e Saneamento
- Atacado e Varejo
- Healthcare
- Instituições Financeiras (bancos, fintechs, fundos)
- Tecnologia, Media e Comunicação
- Agrobusiness
- Manufatura
- Mineração
- Transportes & Logística
- Portos

## 🎯 **Configuração no Make.com**

### **1. Criar Novo Cenário**
1. Acesse o Make.com
2. Crie um novo cenário
3. Adicione um **Webhook** como trigger

### **2. Configurar Webhook**
1. Clique no webhook
2. Copie a URL gerada
3. Cole no `config.js` no campo `deepdiveWebhookUrl`

### **3. Processar Dados**
1. Adicione um módulo **AI** ou **HTTP** para processar os dados
2. Use os parâmetros `razaoSocial` e `segmentoAtuacao`
3. Configure a análise conforme necessário

### **4. Configurar Resposta**
1. Adicione um módulo **Set up webhook response**
2. Configure a resposta no formato desejado:

```json
{
  "analysis": {
    "content": "Conteúdo da análise...",
    "metadata": {
      "generatedAt": "2024-12-19T10:00:00Z",
      "processingTime": "2.5s",
      "confidence": 0.95
    }
  }
}
```

## 🔄 **Fluxo de Funcionamento**

### **1. Usuário Preenche Formulário**
- Razão Social: Campo de texto livre
- Segmento de Atuação: Dropdown com opções

### **2. Dados Enviados**
- POST para o webhook configurado
- Content-Type: application/json
- Body: JSON com razaoSocial e segmentoAtuacao

### **3. Processamento no Make.com**
- Recebe os dados
- Processa com IA ou lógica customizada
- Gera análise baseada nos parâmetros

### **4. Resposta**
- Retorna análise formatada
- Pode incluir metadados
- Exibida na interface

## 🚀 **Teste da Configuração**

### **1. Verificar URL**
```javascript
console.log('Deepdive Webhook URL:', LANDING_PAGE_CONFIG.deepdiveWebhookUrl);
```

### **2. Teste Manual**
```bash
curl -X POST "SUA_URL_DO_WEBHOOK" \
  -H "Content-Type: application/json" \
  -d '{
    "razaoSocial": "Empresa Teste",
    "segmentoAtuacao": "Tecnologia, Media e Comunicação"
  }'
```

### **3. Teste na Interface**
1. Acesse `deepdive.html`
2. Preencha os campos
3. Clique em "Iniciar Análise"
4. Verifique o console para logs

## ⚠️ **Problemas Comuns**

### **1. Webhook não configurado**
- Erro: "Webhook URL não configurada"
- Solução: Configure `deepdiveWebhookUrl` no `config.js`

### **2. Webhook inativo**
- Erro: "HTTP 404/410"
- Solução: Verifique se o cenário está ativo no Make.com

### **3. Formato de resposta incorreto**
- Erro: "Erro no processamento"
- Solução: Configure corretamente o módulo de resposta

### **4. CORS**
- Erro: "CORS policy"
- Solução: Configure CORS no Make.com ou use proxy

## 📝 **Exemplo de Resposta Esperada**

```json
{
  "analysis": {
    "content": "Análise detalhada da empresa [Razão Social] no segmento [Segmento]...",
    "metadata": {
      "generatedAt": "2024-12-19T10:00:00Z",
      "processingTime": "2.5s",
      "model": "gpt-4",
      "confidence": 0.95,
      "insights": [
        "Insight 1",
        "Insight 2",
        "Insight 3"
      ],
      "recommendations": [
        "Recomendação 1",
        "Recomendação 2"
      ]
    }
  }
}
```

## 🔧 **Próximos Passos**

1. **Configure a URL** do webhook no `config.js`
2. **Crie o cenário** no Make.com
3. **Teste a integração** usando a interface
4. **Ajuste o processamento** conforme necessário
5. **Configure a resposta** no formato desejado

---

**✅ Após configurar, o Deepdive estará funcionando independentemente do Criador de Posts!** 