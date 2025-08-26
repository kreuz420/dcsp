# 🔧 Guia de Solução de Problemas - Webhooks

## 📋 Problemas Comuns e Soluções

### 1. **Webhook não responde (Timeout)**
**Sintomas:**
- Loading spinner fica rodando indefinidamente
- Console mostra erro de timeout
- Status 408 ou erro de rede

**Soluções:**
- Verificar se o webhook está ativo no Make
- Confirmar se a URL está correta
- Verificar se há firewall bloqueando a conexão

### 2. **Erro 404 - Webhook não encontrado**
**Sintomas:**
- Status 404 na resposta
- "Webhook not found" no console

**Soluções:**
- Verificar se a URL do webhook está correta
- Confirmar se o webhook foi criado no Make
- Verificar se o webhook não foi deletado

### 3. **Erro 500 - Erro interno do servidor**
**Sintomas:**
- Status 500 na resposta
- Erro interno no Make

**Soluções:**
- Verificar logs do Make
- Confirmar se o cenário está configurado corretamente
- Verificar se há erros na lógica do webhook

### 4. **Dados não chegam corretamente**
**Sintomas:**
- Webhook responde mas dados estão vazios
- Campos faltando na resposta

**Soluções:**
- Verificar estrutura dos dados enviados
- Confirmar mapeamento no Make
- Verificar se todos os campos obrigatórios estão sendo enviados

## 🛠️ Ferramentas de Diagnóstico

### 1. **Página de Teste**
Use o arquivo `test-coldmessage-webhook.html` para testar o webhook isoladamente.

### 2. **Console do Navegador**
Abra o DevTools (F12) e verifique:
- Logs de requisição
- Status da resposta
- Erros de JavaScript

### 3. **Logs do Make**
No Make, verifique:
- Histórico de execuções
- Logs de erro
- Status do cenário

## 📊 Estrutura de Dados Esperada

### Cold Messager
```json
{
  "executivoVenda": "Nome do executivo de venda",
  "empresa": "Nome da empresa",
  "segmento": "Segmento selecionado",
  "persona": "CFO",
  "prioridade_da_oferta": "D&O",
  "hipotese_de_dor": "Texto da hipótese",
  "palavras_chave_de_noticias": "palavras, chave, opcionais",
  "canal": "email",
  "framework_copy": "AIDA",
  "cta_tipo": "agenda direta"
}
```

### Criador de Posts
```json
{
  "executiveName": "Nome do executivo",
  "targetSegment": "Segmento",
  "centralTheme": "Tema",
  "contextTrigger": "Contexto",
  "dominantEmotion": "Emoção",
  "callToAction": "CTA",
  "postType": "Tipo",
  "depthLevel": "Nível"
}
```

### Deepdive
```json
{
  "razaoSocial": "Razão social",
  "segmentoAtuacao": "Segmento"
}
```

## 🔗 URLs dos Webhooks

### Atual (config.js)
```javascript
// Criador de Posts
webhookUrl: "https://hook.us2.make.com/vd3tce9oprad7vv8eg165gouw7i8j4wn"

// Deepdive
deepdiveWebhookUrl: "https://hook.us2.make.com/cnrxdj1jqrddvoavj47jn9qnwqm34om0"

// Cold Messager
coldmessageWebhookUrl: "https://hook.us2.make.com/v869wy7klg85j2685oudrx825w8qvevs"
```

## 🚀 Passos para Resolver Problemas

### 1. **Teste Básico**
1. Abra `test-coldmessage-webhook.html`
2. Preencha os dados de teste
3. Clique em "Testar Webhook"
4. Verifique o resultado

### 2. **Verificação no Make**
1. Acesse o Make
2. Vá para o cenário do Cold Messager
3. Verifique se está ativo
4. Teste manualmente com dados de exemplo

### 3. **Verificação de Configuração**
1. Abra `config.js`
2. Confirme se a URL está correta
3. Verifique se não há espaços extras
4. Teste a URL no navegador

### 4. **Logs Detalhados**
1. Abra o DevTools (F12)
2. Vá para a aba Console
3. Preencha o formulário
4. Verifique todos os logs

## 📞 Suporte

Se o problema persistir:
1. Capture screenshots dos erros
2. Salve os logs do console
3. Documente os passos que levam ao erro
4. Entre em contato com o suporte técnico

## 🔄 Atualizações de Webhook

Para atualizar um webhook:
1. Crie um novo webhook no Make
2. Atualize a URL em `config.js`
3. Teste com a página de teste
4. Confirme que está funcionando antes de usar em produção 