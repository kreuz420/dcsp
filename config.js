// Configurações da Landing Page do Agente I.A
// Modifique este arquivo para personalizar sua landing page

const LANDING_PAGE_CONFIG = {
    // Configurações básicas
    title: "Growth Copilot - Gerador de Posts Inteligente",
    subtitle: "Transforme insights em sugestões de conteúdo profissional para LinkedIn",
    
    // URL do webhook
    webhookUrl: "https://hook.us2.make.com/vd3tce9oprad7vv8eg165gouw7i8j4wn",
    
    // URL do webhook para Deepdive
    deepdiveWebhookUrl: "https://hook.us2.make.com/cnrxdj1jqrddvoavj47jn9qnwqm34om0",
    
    // URL do webhook para Coldmessage
    coldmessageWebhookUrl: "https://hook.us2.make.com/v869wy7klg85j2685oudrx825w8qvevs",
    
    // Validação dos campos
    validation: {
        required: ['executiveName', 'targetSegment', 'centralTheme', 'contextTrigger', 'dominantEmotion', 'callToAction', 'postType', 'depthLevel'],
        coldmessage: ['executivoVenda', 'empresa', 'segmento', 'persona', 'prioridade_da_oferta', 'hipotese_de_dor', 'canal', 'cta_tipo']
    },
    
    // Paleta de cores da Aon
    colors: {
        // Vermelho principal da Aon
        primary: '#DA291C',           // Aon Red - headlines e UI
        primaryHover: '#E63946',      // Aon Red Lighter - hover
        primaryActive: '#B71C1C',     // Aon Red Darker - active
        midnight: '#1A1A1A',          // Midnight - fundos profundos
        
        // Tons complementares
        secondary: '#FF6B6B',         // Vermelho secundário
        secondaryHover: '#FF8E8E',    // Vermelho secundário hover
        secondaryActive: '#E55555',   // Vermelho secundário active
        
        // Cinzas neutros
        grayA: '#2E2E2E',             // Gray A (100%) - texto principal e títulos
        grayAHover: '#545454',        // Gray A Hover (+15%)
        grayAActive: '#141414',       // Gray A Active (-5%)
        grayB: '#4C4D4F',             // Gray B (100%) - fundos
        grayC: '#696969',             // Gray C (100%) - texto secundário
        grayCHover: '#8F8F8F',        // Gray C Hover (+15%)
        grayCActive: '#5C5C5C',       // Gray C Active (-5%)
        grayD: '#9B9B9B',             // Gray D (100%) - breadcrumbs, placeholders
        grayE: '#C0C0C0',             // Gray E (100%) - linhas horizontais
        grayF: '#E4E4E4',             // Gray F (100%) - backgrounds de seção
        grayG: '#F8F8F8',             // Gray G (100%) - backgrounds de página
        
        // Cores de feedback
        error: '#BF4C4A',             // Error - erros, alertas
        warning: '#F0A800',           // Warning - avisos
        success: '#7AB800',           // Success - confirmações positivas
        
        // Cores de fundo e texto
        background: 'linear-gradient(135deg, #DA291C 0%, #FF6B6B 100%)',
        text: '#2E2E2E',
        textLight: '#696969',
        white: '#FFFFFF',
        lightGray: '#F8F8F8',
        border: '#E4E4E4'
    },
    
    // Opções dos campos (ATUALIZADAS)
    options: {
        targetSegment: [
            'Construção e Infraestrutura',
            'Recursos Naturais e Saneamento',
            'Atacado e Varejo',
            'Healthcare',
            'Instituições Financeiras (bancos, fintechs, fundos)',
            'Tecnologia, Media e Comunicação',
            'Agrobusiness',
            'Manufatura',
            'Mineração',
            'Transportes & Logística',
            'Portos'
        ],
        centralTheme: [
            'Inovação',
            'Tendências',
            'Cases de Sucesso',
            'Dicas e Insights',
            'Análise de Mercado',
            'Tecnologia',
            'Sustentabilidade',
            'Liderança',
            'Transformação Digital',
            'Estratégia'
        ],
        dominantEmotion: [
            'Confiança',
            'Entusiasmo',
            'Preocupação',
            'Esperança',
            'Urgência',
            'Curiosidade',
            'Inspiração',
            'Autoridade',
            'Empatia',
            'Determinação'
        ],
        callToAction: [
            'Comentário',
            'Enquete rápida no linkedin para ser respondida nos comentários',
            'Entre em contato',
            'Acesse o Material',
            'Comente para receber o material'
        ],
        postType: [
            'Educativo',
            'Promocional',
            'Storytelling',
            'Analítico',
            'Inspiracional',
            'Notícia',
            'Case de Sucesso',
            'Dica Rápida',
            'Opinião',
            'Tutorial'
        ],
        depthLevel: [
            'Básico',
            'Intermediário',
            'Avançado',
            'Especialista'
        ]
    },
    
    // Textos dinâmicos
    texts: {
        placeholders: {
            executiveName: "Digite o nome do executivo",
            contextTrigger: "Descreva o contexto, gatilho ou copie o link da matéria que inspirou este post"
        },
        buttons: {
            submit: "Gerar a Sugestão do Post"
        },
        messages: {
            loading: "Gerando sua sugestão de post personalizado...",
            validationError: "Por favor, preencha todos os campos obrigatórios.",
            success: "Sugestão de Post gerado com sucesso!",
            error: "Erro ao gerar o post. Tente novamente.",
            copied: "Sugestão de Post copiada para a área de transferência!",
            downloaded: "Sugestão de Post baixado com sucesso!"
        }
    },
    
    // Configurações de SEO
    seo: {
        title: "Growth Copilot - Gerador de Sugestão de Posts | IA para LinkedIn",
        description: "Transforme insights em sugestões de conteúdo profissional para LinkedIn com IA avançada do Growth Copilot. Gere sugestões de posts personalizados e impactantes.",
        keywords: "Growth Copilot, gerador de sugestões de posts, IA, LinkedIn, conteúdo profissional, automação, marketing digital",
        author: "Growth Copilot"
    }
};

// Exportar configuração para uso global
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LANDING_PAGE_CONFIG;
} else {
    window.LANDING_PAGE_CONFIG = LANDING_PAGE_CONFIG;
} 
