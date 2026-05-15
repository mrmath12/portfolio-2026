export type Lang = 'pt' | 'en';

export const translations = {
  pt: {
    meta: {
      title: 'Matheus — Portfólio',
      description: 'Desenvolvedor Fullstack com visão de produto e sensibilidade de design.',
      htmlLang: 'pt-BR',
    },

    nav: {
      ariaLabel: 'Navegação principal',
      mobileAriaLabel: 'Navegação móvel',
      logoAriaLabel: 'Matheus — voltar ao início',
      links: {
        projetos: 'Projetos',
        habilidades: 'Habilidades',
        sobre: 'Sobre',
        skills: 'Skills',
        contato: 'Contato',
      },
      cta: 'Fale comigo',
    },

    footer: {
      copyright: '© 2026 Matheus. Todos os direitos reservados.',
    },

    heroEditorial: {
      available: 'Disponível para projetos · 2026',
      headline1: 'Dev que',
      headline2: 'entende',
      headline3: 'design.',
      bio: 'Desenvolvedor Fullstack, estudante de ADS, e criativo múltiplo — design gráfico, música, VJ. Código limpo e sensibilidade estética no mesmo pacote.',
      basedInLabel: 'Baseado em',
      basedInValue: 'Brasil 🇧🇷',
      statusLabel: 'Status',
      statusValue: 'Disponível',
    },

    heroMinimal: {
      location: 'Rio de Janeiro, BR — 2026',
      bio: 'Desenvolvedor Fullstack, estudante de ADS e criativo múltiplo. Design gráfico, música, VJ. Código limpo com sensibilidade estética.',
      ctaPrimary: 'Ver Projetos',
      ctaSecondary: 'Contato',
    },

    heroStudio: {
      headline1: 'Dev que',
      headline2: 'pensa',
      headline3: 'em produto.',
      bio: 'Desenvolvedor Fullstack com visão de produto e sensibilidade de design. Código limpo, interfaces que funcionam — e um background criativo que faz a diferença.',
      ctaPrimary: 'Ver Projetos',
      ctaSecondary: 'Fale comigo',
    },

    about: {
      sectionLabel: 'Sobre',
      headline1: 'Fullstack dev',
      headline2: 'com olho em',
      headline3: 'produto.',
      bio1: 'Sou Matheus — desenvolvedor Fullstack com raízes em design gráfico, produção musical e VJing. Construo aplicações web e mobile com a mesma atenção que daria a uma peça visual: cada detalhe tem razão de existir.',
      bio2: 'O que me diferencia: uma formação em design gráfico, produção musical e artes visuais que me dá uma leitura de produto fora do comum. Entendo de interface porque faço arte. Entendo de narrativa porque crio música.',
      stat1Label: 'Projetos entregues',
      stat2Label: 'Anos de experiência',
      stat3Label: 'Curiosidade',
      stat4Label: 'Brasil',
    },

    skills: {
      sectionLabel: 'Stack',
      headline: 'Tecnologia<br>que entrega.',
      bio: 'Stack focado em React, Node.js e TypeScript. Conforto no front, no back e no mobile — do MVP ao deploy em produção.',
      creativeLabel: 'Diferencial criativo',
      creativeBio: 'Design gráfico, VJ e produção musical me dão uma leitura de interface, narrativa visual e UX que a maioria dos devs não tem.',
      // Keys must match SKILLS_DATA keys exactly
      categoryLabels: {
        'Front-end': 'Front-end',
        'Back-end & Infra': 'Back-end & Infra',
        'Mobile': 'Mobile',
        'Diferenciais criativos': 'Diferenciais criativos',
      } as Record<string, string>,
    },

    projects: {
      sectionLabel: 'Portfólio',
      headline1: 'Projetos',
      headline2: 'Selecionados',
      featuredBadge: 'Em destaque',
      // Keys match project `cat` values — filter comparisons use the PT key as internal value
      filterLabels: {
        'Todos': 'Todos',
        'Desenvolvimento Web': 'Desenvolvimento Web',
        'Desenvolvimento Mobile': 'Desenvolvimento Mobile',
      } as Record<string, string>,
      // Descriptions keyed by project id
      descs: {
        1: 'Plataforma full-stack para agendamento de atendimento em unidades do CRAS de Campos/RJ. Serviço já conta com +60 mil usuários cadastrados.',
        2: 'Plataforma de avaliação de filmes, onde o usuário consegue avaliar filmes (usando mais de um critério), ver avaliações de outros usuários, alem de ter acesso à informações/detalhes sobre os filmes, atores e diretores.',
        3: 'App feito para a Secretaria Municipal de Assistência Social e Cidadania de Campos/RJ com o intuito de juntar todos os programas, serviços e subsecretarias em um único local, facilitando o acesso à população. Também conta com seção de eventos, onde gestores da secretaria podem cadastrar eventos (painel administrativo web)',
        4: 'Serviço focado em ajudar pessoas a construir hábitos saudáveis. Seja para aumentar sua produtividade, bem-estar ou saúde.',
      } as Record<number, string>,
    },

    contact: {
      sectionLabel: 'Contato',
      headline1: 'Vamos construir',
      headline2: 'algo juntos.',
      bio: 'Estou disponível para projetos de desenvolvimento web e mobile — MVPs, sistemas, interfaces, APIs. Me conta o que você precisa.',
      infoTipoLabel: 'Tipo de projeto',
      infoTipoValue: 'Web App · Mobile · Front-end · Back-end',
      infoDisponLabel: 'Disponibilidade',
      infoDisponValue: 'Disponível agora',
      form: {
        fieldName: 'Nome',
        fieldEmail: 'Email',
        fieldType: 'Tipo de projeto',
        fieldMessage: 'Mensagem',
        placeholderName: 'Seu nome',
        placeholderEmail: 'seu@email.com',
        placeholderType: 'Ex: Web App, API, Mobile, Landing Page…',
        placeholderMessage: 'Conta mais sobre o projeto…',
        submit: 'Enviar mensagem',
        successTitle: 'Mensagem enviada!',
        successDesc: 'Obrigado pelo contato. Retorno em até 48h.',
      },
    },

    rolesDev: ['Fullstack Developer', 'Estudante de ADS', 'Open to Work', 'Perfeccionista'] as string[],
    rolesCreative: ['Fullstack Developer', 'Designer Gráfico', 'DJ & VJ', 'Produtor Musical'] as string[],
    marqueeItems: [
      'Desenvolvedor Fullstack',
      'React · Node.js · TypeScript',
      'Estudante de ADS',
      'Código limpo',
      'Interfaces que funcionam',
      'Designer Gráfico',
      'DJ & VJ',
      'Produtor Musical',
      'Perfeccionista',
      'Curioso',
    ] as string[],
  },

  en: {
    meta: {
      title: 'Matheus — Portfolio',
      description: 'Fullstack Developer with product vision and design sensibility.',
      htmlLang: 'en',
    },

    nav: {
      ariaLabel: 'Main navigation',
      mobileAriaLabel: 'Mobile navigation',
      logoAriaLabel: 'Matheus — back to top',
      links: {
        projetos: 'Projects',
        habilidades: 'Skills',
        sobre: 'About',
        skills: 'Skills',
        contato: 'Contact',
      },
      cta: 'Contact me',
    },

    footer: {
      copyright: '© 2026 Matheus. All rights reserved.',
    },

    heroEditorial: {
      available: 'Available for projects · 2026',
      headline1: 'Dev who',
      headline2: 'understands',
      headline3: 'design.',
      bio: 'Fullstack Developer, Systems Analysis & Development student, and multi-creative — graphic design, music, VJ. Clean code and aesthetic sensibility in one package.',
      basedInLabel: 'Based in',
      basedInValue: 'Brazil 🇧🇷',
      statusLabel: 'Status',
      statusValue: 'Available',
    },

    heroMinimal: {
      location: 'Rio de Janeiro, BR — 2026',
      bio: 'Fullstack Developer, Systems Analysis & Development student and multi-creative. Graphic design, music, VJ. Clean code with aesthetic sensibility.',
      ctaPrimary: 'View Projects',
      ctaSecondary: 'Contact',
    },

    heroStudio: {
      headline1: 'Dev who',
      headline2: 'thinks',
      headline3: 'product.',
      bio: 'Fullstack Developer with product vision and design sensibility. Clean code, interfaces that work — and a creative background that makes the difference.',
      ctaPrimary: 'View Projects',
      ctaSecondary: 'Contact me',
    },

    about: {
      sectionLabel: 'About',
      headline1: 'Fullstack dev',
      headline2: 'with an eye for',
      headline3: 'product.',
      bio1: "I'm Matheus — a Fullstack developer with roots in graphic design, music production, and VJing. I build web and mobile applications with the same attention I'd give a visual piece: every detail has a reason to exist.",
      bio2: "What sets me apart: a background in graphic design, music production and visual arts that gives me an uncommon product perspective. I understand interfaces because I make art. I understand narrative because I create music.",
      stat1Label: 'Projects delivered',
      stat2Label: 'Years of experience',
      stat3Label: 'Curiosity',
      stat4Label: 'Brazil',
    },

    skills: {
      sectionLabel: 'Stack',
      headline: 'Technology<br>that delivers.',
      bio: 'Stack focused on React, Node.js and TypeScript. Comfortable on front-end, back-end and mobile — from MVP to production deploy.',
      creativeLabel: 'Creative edge',
      creativeBio: 'Graphic design, VJ and music production give me an understanding of interface, visual narrative and UX that most devs lack.',
      categoryLabels: {
        'Front-end': 'Front-end',
        'Back-end & Infra': 'Back-end & Infra',
        'Mobile': 'Mobile',
        'Diferenciais criativos': 'Creative edge',
      } as Record<string, string>,
    },

    projects: {
      sectionLabel: 'Portfolio',
      headline1: 'Selected',
      headline2: 'Projects',
      featuredBadge: 'Featured',
      filterLabels: {
        'Todos': 'All',
        'Desenvolvimento Web': 'Web Development',
        'Desenvolvimento Mobile': 'Mobile Development',
      } as Record<string, string>,
      descs: {
        1: 'Full-stack platform for scheduling appointments at CRAS units in Campos/RJ. The service already has +60 thousand registered users.',
        2: "Movie rating platform where users can rate films using multiple criteria, view other users' reviews, and access information/details about movies, actors and directors.",
        3: 'App built for the Municipal Secretary of Social Assistance and Citizenship of Campos/RJ to consolidate all programs, services and sub-secretaries in one place, making access easier for the population. Also features an events section where managers can create events via a web admin panel.',
        4: 'Service focused on helping people build healthy habits — whether to boost productivity, well-being or health.',
      } as Record<number, string>,
    },

    contact: {
      sectionLabel: 'Contact',
      headline1: "Let's build",
      headline2: 'something together.',
      bio: "I'm available for web and mobile development projects — MVPs, systems, interfaces, APIs. Tell me what you need.",
      infoTipoLabel: 'Project type',
      infoTipoValue: 'Web App · Mobile · Front-end · Back-end',
      infoDisponLabel: 'Availability',
      infoDisponValue: 'Available now',
      form: {
        fieldName: 'Name',
        fieldEmail: 'Email',
        fieldType: 'Project type',
        fieldMessage: 'Message',
        placeholderName: 'Your name',
        placeholderEmail: 'your@email.com',
        placeholderType: 'Ex: Web App, API, Mobile, Landing Page…',
        placeholderMessage: 'Tell me more about the project…',
        submit: 'Send message',
        successTitle: 'Message sent!',
        successDesc: "Thank you for reaching out. I'll reply within 48h.",
      },
    },

    rolesDev: ['Fullstack Developer', 'Systems Analysis & Development Student', 'Open to Work', 'Perfectionist'] as string[],
    rolesCreative: ['Fullstack Developer', 'Graphic Designer', 'DJ & VJ', 'Music Producer'] as string[],
    marqueeItems: [
      'Fullstack Developer',
      'React · Node.js · TypeScript',
      'ADS Student',
      'Clean code',
      'Interfaces that work',
      'Graphic Designer',
      'DJ & VJ',
      'Music Producer',
      'Perfectionist',
      'Curious',
    ] as string[],
  },
} as const;

export type TranslationKeys = typeof translations.pt;
