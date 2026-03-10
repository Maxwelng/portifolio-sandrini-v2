import type { Service } from '@/types'

export const services: Service[] = [
  { id: 'branding',      number: '01', name: 'Branding & Identidade Visual', description: 'Sistemas de identidade completos: logo, tipografia, paleta, padroes e diretrizes.' },
  { id: 'editorial',     number: '02', name: 'Design Editorial',              description: 'Revistas, livros e catalogos com diagramacao rigorosa e grid tipografico.' },
  { id: 'packaging',     number: '03', name: 'Design de Embalagem',           description: 'Embalagens que comunicam os valores da marca e criam experiencias memoraveis.' },
  { id: 'strategy',      number: '04', name: 'Estrategia de Marca',           description: 'Posicionamento, naming e arquitetura de marca.' },
  { id: 'art-direction', number: '05', name: 'Direcao de Arte',               description: 'Curadoria visual e direcao criativa para campanhas e conteudo de marca.' },
  { id: 'guidelines',    number: '06', name: 'Brand Guidelines',              description: 'Manuais de identidade para aplicacao consistente em todos os pontos de contato.' },
]
