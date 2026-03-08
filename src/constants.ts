// =============================================================================
// ODONTOMARINGÁ — Constantes do Projeto
// Importado diretamente nos componentes e páginas Astro.
// Para atualizar qualquer dado (ex: WhatsApp), altere apenas aqui.
// =============================================================================

// ── WHATSAPP ─────────────────────────────────────────────────────────────────

export const WHATSAPP = {
  numero: '5544999999999',

  mensagens: {
    geral:        'Olá! Vi o OdontoMaringá e gostaria de uma avaliação.',
    formulario:   'Olá! Já preenchi o formulário no OdontoMaringá e gostaria de agilizar o atendimento.',
    implante:     'Olá! Tenho interesse em Implante Dentário em Maringá.',
    clareamento:  'Olá! Tenho interesse em Clareamento Dental em Maringá.',
    harmonizacao: 'Olá! Tenho interesse em Harmonização Orofacial em Maringá.',
    canal:        'Olá! Preciso de informações sobre Tratamento de Canal em Maringá.',
    ortodontia:   'Olá! Tenho interesse em Ortodontia em Maringá.',
    proteses:     'Olá! Tenho interesse em Próteses Dentárias em Maringá.',
    lentes:       'Olá! Tenho interesse em Lentes de Contato Dental em Maringá.',
    estetica:     'Olá! Tenho interesse em Odontologia Estética em Maringá.',
  },

  link(mensagem: string): string {
    return `https://wa.me/${this.numero}?text=${encodeURIComponent(mensagem)}`;
  },
} as const;


// ── GOOGLE ANALYTICS ─────────────────────────────────────────────────────────

export const GA4 = {
  measurementId: 'G-V8KT3BN5C6',
  eventos: {
    conversion:        'conversion',
    formSubmit:        'form_submit',
    whatsappClick:     'whatsapp_click',
    especialidadeView: 'especialidade_view',
  },
} as const;


// ── NETLIFY FORMS ─────────────────────────────────────────────────────────────

export const FORMS = {
  heroHome:         'captura-leads-dentistas',
  ctaHome:          'captura-leads-dentistas-cta',
  implante:         'captura-leads-implante',
  clareamento:      'captura-leads-clareamento',
  harmonizacao:     'captura-leads-harmonizacao',
  canal:            'captura-leads-canal',
  ortodontia:       'captura-leads-ortodontia',
  proteses:         'captura-leads-proteses',
  lentes:           'captura-leads-lentes',
  estetica:         'captura-leads-estetica',
  notificacaoEmail: 'scutadigital@gmail.com',
  successRedirect:  '/obrigado',
} as const;


// ── URLs ──────────────────────────────────────────────────────────────────────

export const URLS = {
  site: 'https://odontomaringa.netlify.app',
  repo: 'https://github.com/carvalhogomesag/odontomaringa',

  paginas: {
    home:         '/',
    obrigado:     '/obrigado',
    implante:     '/implante-dentario-maringa',
    clareamento:  '/clareamento-dental-maringa',
    harmonizacao: '/harmonizacao-orofacial-maringa',
    canal:        '/tratamento-de-canal-maringa',
    ortodontia:   '/ortodontista-maringa',
    proteses:     '/proteses-dentarias-maringa',
    lentes:       '/lentes-de-contato-dental-maringa',
    estetica:     '/odontologia-estetica-maringa',
  },
} as const;


// ── IDENTIDADE ────────────────────────────────────────────────────────────────

export const MARCA = {
  nome:      'OdontoMaringá',
  cidade:    'Maringá',
  estado:    'PR',
  descricao: 'Conectando pacientes aos melhores especialistas em odontologia de Maringá, PR.',
  ano:       '2026',
  copyright: '© 2026 OdontoMaringá · Maringá, PR',
  cta:       'Solicitar Contato',
} as const;


// ── ESPECIALIDADES ────────────────────────────────────────────────────────────

export const ESPECIALIDADES = [
  {
    slug:         'implante-dentario-maringa',
    titulo:       'Implante Dentário',
    descricao:    'Recupere sua mastigação e sorriso com implantes de titânio de última geração. Solução permanente e natural.',
    mensagemWa:   'implante' as const,
    formName:     'implante' as const,
    procedimento: 'Implante Dentário',
  },
  {
    slug:         'clareamento-dental-maringa',
    titulo:       'Clareamento Dental',
    descricao:    'Dentes mais brancos em poucas sessões. Técnica a laser ou caseira com supervisão profissional.',
    mensagemWa:   'clareamento' as const,
    formName:     'clareamento' as const,
    procedimento: 'Clareamento Dental',
  },
  {
    slug:         'harmonizacao-orofacial-maringa',
    titulo:       'Harmonização Orofacial',
    descricao:    'Botox, preenchimento, fios de sustentação e bioestimuladores para um rosto mais equilibrado.',
    mensagemWa:   'harmonizacao' as const,
    formName:     'harmonizacao' as const,
    procedimento: 'Harmonização Orofacial',
  },
  {
    slug:         'tratamento-de-canal-maringa',
    titulo:       'Tratamento de Canal',
    descricao:    'Alívio imediato da dor sem perder o dente. Técnicas modernas e minimamente invasivas.',
    mensagemWa:   'canal' as const,
    formName:     'canal' as const,
    procedimento: 'Tratamento de Canal',
  },
  {
    slug:         'ortodontista-maringa',
    titulo:       'Ortodontia',
    descricao:    'Aparelho fixo, alinhadores invisíveis e contenção. Sorriso alinhado para todas as idades.',
    mensagemWa:   'ortodontia' as const,
    formName:     'ortodontia' as const,
    procedimento: 'Ortodontia',
  },
  {
    slug:         'proteses-dentarias-maringa',
    titulo:       'Prótese & Reabilitação',
    descricao:    'Coroas, facetas de porcelana e próteses fixas para restaurar função e estética com perfeição.',
    mensagemWa:   'proteses' as const,
    formName:     'proteses' as const,
    procedimento: 'Prótese Dentária',
  },
  {
    slug:         'lentes-de-contato-dental-maringa',
    titulo:       'Lentes de Contato Dental',
    descricao:    'Facetas ultrafinas que transformam o sorriso com mínimo desgaste. Resultado natural e duradouro.',
    mensagemWa:   'lentes' as const,
    formName:     'lentes' as const,
    procedimento: 'Lentes de Contato Dental',
  },
  {
    slug:         'odontologia-estetica-maringa',
    titulo:       'Odontologia Estética',
    descricao:    'Soluções completas para um sorriso bonito e saudável: desde restaurações até transformações totais.',
    mensagemWa:   'estetica' as const,
    formName:     'estetica' as const,
    procedimento: 'Odontologia Estética',
  },
] as const;