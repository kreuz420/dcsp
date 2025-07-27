# 🚀 Agente I.A - Landing Page

Uma landing page moderna e responsiva para capturar informações e gerar posts personalizados através do seu agente de I.A criado no Make.com.

## ✨ Características

- **Design Moderno**: Interface limpa e profissional com gradientes e animações
- **Totalmente Responsiva**: Funciona perfeitamente em desktop, tablet e mobile
- **Validação em Tempo Real**: Feedback imediato sobre erros de preenchimento
- **Integração com Make.com**: Webhook configurável para conectar com sua automação
- **Geração de Posts**: Sistema inteligente de criação de conteúdo personalizado
- **Funcionalidades Extras**: Copiar para clipboard, download de posts, notificações

## 📋 Campos do Formulário

A landing page inclui todos os campos necessários para gerar posts personalizados:

1. **Nome do Executivo** - Nome da pessoa que assinará o post
2. **Segmento-alvo** - Setor de atuação (Tecnologia, Saúde, Finanças, etc.)
3. **Tema Central** - Foco principal do conteúdo (Inovação, Tendências, etc.)
4. **Gatilho de Contexto** - Contexto específico para o post
5. **Emoção Dominante** - Tom emocional desejado
6. **Call to Action Desejado** - Ação que o leitor deve tomar
7. **Tipo de Post** - Formato do conteúdo
8. **Nível de Profundidade** - Complexidade do conteúdo

## 🛠️ Configuração

### 1. Configurar Webhook do Make.com

1. Acesse seu projeto no Make.com
2. Crie um novo webhook ou use um existente
3. Copie a URL do webhook
4. Abra o arquivo `script.js`
5. Substitua a linha 3:
   ```javascript
   webhookUrl: 'https://hook.eu1.make.com/YOUR_WEBHOOK_URL_HERE',
   ```
   pela URL real do seu webhook:
   ```javascript
   webhookUrl: 'https://hook.eu1.make.com/abc123def456',
   ```

### 2. Estrutura de Dados Enviados

O formulário envia os seguintes dados para o webhook:

```json
{
  "executiveName": "João Silva",
  "targetSegment": "tecnologia",
  "centralTheme": "inovacao",
  "contextTrigger": "Nova regulamentação do setor...",
  "dominantEmotion": "confianca",
  "callToAction": "contato",
  "postType": "educativo",
  "depthLevel": "intermediario",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "userAgent": "Mozilla/5.0..."
}
```

### 3. Configurar Resposta do Agente

No Make.com, configure seu agente para:

1. **Receber os dados** do webhook
2. **Processar as informações** com I.A
3. **Retornar o post gerado** no formato:
   ```json
   {
     "success": true,
     "post": {
       "title": "Título do Post",
       "content": "Conteúdo completo do post...",
       "hashtags": ["#Tecnologia", "#Inovação"],
       "estimatedReadingTime": "2 min",
       "wordCount": 156
     }
   }
   ```

## 📁 Estrutura de Arquivos

```
Agente I.A posts/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # JavaScript e lógica
└── README.md           # Este arquivo
```

## 🚀 Como Usar

### Opção 1: Servidor Local
1. Instale um servidor local (como Live Server no VS Code)
2. Abra o arquivo `index.html` através do servidor
3. Acesse `http://localhost:3000` (ou porta configurada)

### Opção 2: Hospedagem
1. Faça upload dos arquivos para seu servidor web
2. Configure o webhook no Make.com
3. Acesse a URL da sua landing page

### Opção 3: GitHub Pages
1. Crie um repositório no GitHub
2. Faça upload dos arquivos
3. Ative o GitHub Pages nas configurações
4. Acesse `https://seuusuario.github.io/seurepositorio`

## 🎨 Personalização

### Cores e Estilo
Edite o arquivo `styles.css` para personalizar:
- Cores principais (procure por `#ff69b4`, `#ff4444`)
- Gradientes de fundo
- Tipografia
- Animações

### Opções dos Dropdowns
Modifique o arquivo `script.js` para alterar as opções dos campos:
- Procure pela constante `valueLabels`
- Adicione ou remova opções conforme necessário

### Validações
Ajuste as regras de validação no arquivo `script.js`:
```javascript
validation: {
    minContextLength: 10,    // Mínimo de caracteres
    maxContextLength: 500    // Máximo de caracteres
}
```

## 🔧 Funcionalidades Avançadas

### Notificações
O sistema inclui notificações automáticas para:
- Sucesso na geração do post
- Erros de validação
- Problemas de conexão

### Validação em Tempo Real
- Campos obrigatórios são validados ao perder o foco
- Contador de caracteres no campo de contexto
- Feedback visual imediato

### Responsividade
- Layout adaptativo para diferentes tamanhos de tela
- Otimizado para mobile, tablet e desktop
- Animações suaves e interações touch-friendly

## 🐛 Solução de Problemas

### Webhook não está funcionando
1. Verifique se a URL está correta no `script.js`
2. Teste o webhook no Make.com
3. Verifique o console do navegador para erros

### Posts não são gerados
1. Confirme se o agente no Make.com está configurado corretamente
2. Verifique se a resposta está no formato esperado
3. Teste com dados de exemplo

### Problemas de estilo
1. Verifique se todos os arquivos CSS estão carregando
2. Limpe o cache do navegador
3. Verifique se as fontes estão sendo carregadas

## 📞 Suporte

Para dúvidas ou problemas:
1. Verifique o console do navegador (F12)
2. Teste com dados diferentes
3. Confirme a configuração do Make.com

## 🔄 Atualizações Futuras

Possíveis melhorias:
- [ ] Integração com APIs de redes sociais
- [ ] Templates de post pré-definidos
- [ ] Sistema de histórico de posts gerados
- [ ] Análise de performance dos posts
- [ ] Integração com CRM
- [ ] Sistema de usuários e autenticação

---

**Desenvolvido com ❤️ para otimizar a geração de conteúdo com I.A** 