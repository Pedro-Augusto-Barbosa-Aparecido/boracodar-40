import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['500', '400', '900'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: '#boracodar 40 | Newsletter',
  description: 'Challenge from @rocketseat',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${roboto.className} overflow-hidden`}>
        <div className="min-h-screen">{children}</div>
      </body>
    </html>
  )
}
