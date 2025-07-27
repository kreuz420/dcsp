# 🔒 Configuração de Segurança

## 🎯 **Proteção por Senha Implementada**

O site agora está protegido por uma tela de login que garante que apenas pessoas com o link E a senha possam acessar.

## 🔧 **Como Configurar**

### **1. Alterar a Senha**
Edite o arquivo `auth.html` e altere a linha:

```javascript
const ACCESS_PASSWORD = 'dcsp2024'; // ← ALTERE AQUI
```

**Exemplo:**
```javascript
const ACCESS_PASSWORD = 'minhaSenhaSecreta123';
```

### **2. Página de Login**
- **URL:** `auth.html` (será a primeira página que os usuários verão)
- **Design:** Segue o padrão visual da DCSP
- **Funcionalidades:** 
  - Validação de senha
  - Mensagens de erro/sucesso
  - Redirecionamento automático
  - Sessão persistente

### **3. Proteção das Páginas**
Todas as páginas principais agora incluem:
- **`auth-check.js`** - Script de verificação
- **Redirecionamento automático** se não autenticado
- **Sessão de 24 horas** - Não precisa logar novamente
- **Botão de logout** no sidebar

## 🚀 **Como Funciona**

### **Fluxo de Acesso:**
1. **Usuário acessa qualquer página** → Redirecionado para `auth.html`
2. **Digita a senha correta** → Acesso liberado
3. **Navega pelo site** → Sessão mantida por 24 horas
4. **Clica em "Sair"** → Logout e volta para login

### **Segurança Implementada:**
- ✅ **Proteção por senha** - Apenas quem tem a senha acessa
- ✅ **Sessão persistente** - Não precisa logar a cada página
- ✅ **Expiração automática** - Sessão expira em 24 horas
- ✅ **Verificação contínua** - Checa autenticação a cada 5 minutos
- ✅ **Logout seguro** - Remove dados da sessão

## 📋 **Páginas Protegidas**

### **✅ Páginas com Proteção:**
- `index.html` - Criador de Posts
- `deepdive.html` - Deepdive + Discovery
- Qualquer página que inclua `auth-check.js`

### **✅ Páginas Públicas:**
- `auth.html` - Página de login (não tem proteção)

## 🔧 **Personalização**

### **Alterar Senha:**
```javascript
// Em auth.html, linha ~200
const ACCESS_PASSWORD = 'SUA_NOVA_SENHA_AQUI';
```

### **Alterar Tempo de Sessão:**
```javascript
// Em auth-check.js, linha ~20
const maxSessionTime = 24 * 60 * 60 * 1000; // 24 horas
// Para 12 horas: 12 * 60 * 60 * 1000
// Para 48 horas: 48 * 60 * 60 * 1000
```

### **Alterar Frequência de Verificação:**
```javascript
// Em auth-check.js, linha ~80
setInterval(function() {
    checkAuthentication();
}, 5 * 60 * 1000); // 5 minutos
// Para 1 minuto: 1 * 60 * 1000
// Para 10 minutos: 10 * 60 * 1000
```

## 🎨 **Design da Tela de Login**

### **Características:**
- **Cores da DCSP** - Gradiente azul oficial
- **Design responsivo** - Funciona em mobile
- **Feedback visual** - Mensagens de erro/sucesso
- **UX otimizada** - Foco automático, Enter para enviar

### **Elementos:**
- Logo da DCSP
- Campo de senha
- Botão de acesso
- Mensagens de status
- Informações sobre o ambiente

## 📱 **Responsividade**

### **Desktop:**
- Layout centralizado
- Card com sombra
- Espaçamento generoso

### **Mobile:**
- Layout adaptado
- Padding reduzido
- Fonte ajustada
- Touch-friendly

## 🔐 **Recomendações de Segurança**

### **1. Senha Forte:**
- Mínimo 8 caracteres
- Misture letras, números e símbolos
- Evite palavras comuns

### **2. Compartilhamento Seguro:**
- Envie o link E a senha separadamente
- Use canais seguros (email, WhatsApp)
- Não compartilhe em redes sociais

### **3. Monitoramento:**
- Verifique logs de acesso se disponível
- Troque a senha periodicamente
- Monitore uso não autorizado

## 🚀 **Deploy**

### **Para Publicar:**
1. **Altere a senha** no `auth.html`
2. **Faça upload** de todos os arquivos
3. **Configure** `auth.html` como página inicial
4. **Teste** o acesso com a nova senha

### **URLs Importantes:**
- **Login:** `https://seudominio.com/auth.html`
- **Posts:** `https://seudominio.com/index.html`
- **Deepdive:** `https://seudominio.com/deepdive.html`

## ⚠️ **Limitações**

### **Segurança do Cliente:**
- A senha está no código JavaScript (visível no navegador)
- Usuários técnicos podem ver a senha no código fonte
- Para segurança máxima, considere backend com autenticação

### **Para Segurança Empresarial:**
- Implemente autenticação no servidor
- Use HTTPS obrigatório
- Adicione rate limiting
- Implemente logs de acesso

---

**✅ Seu site agora está protegido e pronto para uso restrito!** 