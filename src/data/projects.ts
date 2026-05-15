import type { Project } from '@/types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Sistema de Agendamento do CRAS',
    cat: 'Desenvolvimento Web',
    year: '2024',
    desc: 'Plataforma pública para agendamento nos centros de assistência social (CRAS) de Campos/RJ. Mais de 60 mil cidadãos cadastrados em uso ativo.',
    tags: ['Next.JS', 'TypeScript', 'Node.js', 'PostgreSQL', 'Dbeaver'],
    bg: '#14211c',
    icon: '◈',
    image: '/projects/agendamento.png',
    url: 'http://socialcampos.com.br/'
  },
  {
    id: 2,
    title: 'CineNotes',
    cat: 'Desenvolvimento Web',
    year: '2025',
    desc: 'Avaliação de filmes com critérios próprios: direção, roteiro, trilha, atuação e mais. Perfis detalhados de filmes, atores e diretores, com avaliações da comunidade.',
    tags: ['Next.JS', 'TypeScript', 'Node.js', 'PostgreSQL', 'Supabase', 'API', 'Branding', 'Naming', 'Illustrator'],
    bg: '#1a1626',
    icon: '▷',
    image: '/projects/cinenotes.png',
    url: 'http://cinenotes-seven.vercel.app/'
  },
  {
    id: 3,
    title: 'Conecta Social Campos',
    cat: 'Desenvolvimento Mobile',
    year: '2025',
    desc: 'App oficial da Secretaria de Assistência Social de Campos/RJ. Centraliza programas, serviços e eventos em um único lugar, com painel web para gestores atualizarem a agenda pública.',
    tags: ['React Native', 'TypeScript'],
    bg: '#1d1f14',
    icon: '◧',
    featured: true,
    image: '/projects/conecta-social-campos.png'
  },
  {
    id: 4,
    title: 'Daychain - Construa seu protocolo diário.',
    cat: 'Desenvolvimento Web',
    year: '2026',
    desc: 'Ferramenta para montar e acompanhar protocolos de hábitos diários. Monte sua rotina em blocos, defina metas e visualize sua consistência ao longo do tempo.',
    tags: ['Next.JS', 'Supabase', 'SQL'],
    bg: '#1a1d2b',
    icon: '⬡',
    image: '/projects/daychain.png'

  },
  // {
  //   id: 5,
  //   title: 'Dashboard Analytics',
  //   cat: 'Desenvolvimento Web',
  //   year: '2023',
  //   desc: 'Painel de métricas para e-commerce com gráficos interativos, filtros avançados e exportação de relatórios.',
  //   tags: ['React', 'D3.js', 'REST API'],
  //   bg: '#16201c',
  //   icon: '◑',
  // },
  // {
  //   id: 6,
  //   title: 'EP — Produção Musical',
  //   cat: 'Produção Musical',
  //   year: '2023',
  //   desc: 'Produção, mixagem e masterização de EP de 5 faixas. Electronic, ambient e breaks. Publicado no Spotify e Bandcamp.',
  //   tags: ['Ableton', 'Mixagem', 'Masterização'],
  //   bg: '#1e1620',
  //   icon: '◌',
  // },
];
