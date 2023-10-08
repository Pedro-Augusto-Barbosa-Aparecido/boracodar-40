import { FooterCard } from './FooterCard'

import { GiftSvgIcon } from '@/components/icons/gift'
import { RocketSvgIcon } from '@/components/icons/rocket'
import { ThunderSvgIcon } from '@/components/icons/thunder'
import { ToolsSvgIcon } from '@/components/icons/tools'

export function Footer() {
  return (
    <footer className="flex z-10 mt-auto items-start justify-start lg:gap-20 gap-10">
      <FooterCard
        svgIcon={RocketSvgIcon}
        title="As últimas inovações"
        description="Mantenha-se atualizado com as mais recentes tecnologias e acessórios
   que vão revolucionar a forma como você trabalha."
      />
      <FooterCard
        svgIcon={ThunderSvgIcon}
        title="Reviews detalhadas"
        description="Analisamos os produtos mais populares do mercado para que você possa fazer as escolhas certas."
      />
      <FooterCard
        svgIcon={ToolsSvgIcon}
        title="Dicas de organização"
        description="Aumente sua eficiência e proteja sua saúde com conselhos especializados sobre ergonomia e organização."
      />
      <FooterCard
        svgIcon={GiftSvgIcon}
        title="Ofertas exclusivas"
        description="Como membro da nossa comunidade, você terá acesso a descontos e promoções especiais em produtos selecionados."
      />
    </footer>
  )
}
