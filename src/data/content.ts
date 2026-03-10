import type { Testimonial, Client, Slide, NavItem, Stat } from '@/types'

export const testimonials: Testimonial[] = [
  { id: 'camila', initials: 'CL', author: 'Camila Lopes',  role: 'Fundadora, Coletivo Norte',    text: 'Sandrini entendeu nossa essencia de forma surpreendente. Uma identidade que nos representa com precisao e beleza.' },
  { id: 'rafael', initials: 'RM', author: 'Rafael Melo',   role: 'Editor-chefe, Revista Camada', text: 'Profissionalismo impecavel e sensibilidade estetica rara. O design editorial ganhou um nivel completamente novo.' },
  { id: 'thais',  initials: 'TS', author: 'Thais Santos',  role: 'CEO, Botanica Co.',            text: 'Trabalhar com a Sandrini foi transformador. Estrategia, beleza e cuidado em cada detalhe do rebranding.' },
]

export const clients: Client[] = [
  { id: 'coletivo-norte', name: 'Coletivo Norte'  },
  { id: 'camada',         name: 'Revista Camada'  },
  { id: 'botanica',       name: 'Botanica Co.'    },
  { id: 'arco',           name: 'Arco Arquitetura' },
  { id: 'noma',           name: 'Noma Cafe'       },
  { id: 'luz',            name: 'Luz Studio'      },
  { id: 'raiz',           name: 'Raiz Design'     },
  { id: 'moca-flor',      name: 'Moca Flor'       },
  { id: 'atelier-duna',   name: 'Atelier Duna'    },
  { id: 'plano-b',        name: 'Plano B'         },
]

export const slides: Slide[] = [
  { id: 'slide-0', alt: 'Projeto 01', background: 'radial-gradient(ellipse at 30% 60%, #2e2e2e, #0e0e0e)' },
  { id: 'slide-1', alt: 'Projeto 02', background: 'radial-gradient(ellipse at 70% 40%, #1e3a5a, #07111e)' },
  { id: 'slide-2', alt: 'Projeto 03', background: 'radial-gradient(ellipse at 40% 70%, #3d2800, #120c00)' },
  { id: 'slide-3', alt: 'Projeto 04', background: 'radial-gradient(ellipse at 60% 30%, #1a3320, #060e08)' },
  { id: 'slide-4', alt: 'Projeto 05', background: 'radial-gradient(ellipse at 35% 55%, #2a1040, #0c0616)' },
  { id: 'slide-5', alt: 'Projeto 06', background: 'radial-gradient(ellipse at 65% 45%, #3a1010, #100404)' },
]

export const navItems: NavItem[] = [
  { number: '01', label: 'Projetos', href: '#projetos' },
  { number: '02', label: 'Sobre',    href: '#sobre'    },
  { number: '03', label: 'Servicos', href: '#servicos' },
  { number: '04', label: 'Contato',  href: '#contato'  },
]

export const stats: Stat[] = [
  { value: '9+',  label: 'Anos de experiencia'  },
  { value: '80+', label: 'Projetos entregues'   },
  { value: '3x',  label: 'Premiada'             },
  { value: '40+', label: 'Clientes'             },
]

export const tickerItems: string[] = [
  'Identidade Visual', 'Branding', 'Design Editorial', 'Tipografia',
  'Embalagem', 'Estrategia de Marca', 'Naming', 'Direcao de Arte',
]
