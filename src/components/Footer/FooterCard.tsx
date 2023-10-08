import { ElementType } from 'react'

type FooterCardProps = {
  svgIcon: ElementType
  title: string
  description: string
}

export function FooterCard({
  description,
  title,
  svgIcon: SvgIcon,
}: FooterCardProps) {
  return (
    <div className="max-w-[274px] flex flex-col items-start justify-start gap-4">
      <SvgIcon />
      <span className="font-bold leading-7 text-lg">{title}</span>
      <p className="leading-5 text-[14px] text-base-gray-400">{description}</p>
    </div>
  )
}
