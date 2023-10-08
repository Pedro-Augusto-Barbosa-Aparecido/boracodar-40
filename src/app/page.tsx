import { BackgroundImage } from '@/components/BackgroundImage'
import { Footer } from '@/components/Footer'
import { Input } from '@/components/Input'

import { ChevronRight } from 'lucide-react'

export default function Home() {
  return (
    <main className="bg-base-black flex flex-col px-28 pt-40 pb-20 min-h-screen">
      <BackgroundImage />

      <section className="z-10 space-y-8">
        <div className="flex flex-col items-start justify-start gap-4">
          <span className="bg-linear-gradient bg-clip-text text-transparent text-base font-medium leading-6 tracking-[1.6px]">
            NEWSLETTER EXCLUSIVA
          </span>
          <h1 className="text-5xl font-bold leading-[48px] text-white">
            Workspace inspiration
          </h1>
        </div>

        <p className="leading-7 font-normal text-xl text-base-gray-400 max-w-md">
          Assine nossa newsletter e transforme seu espaço de trabalho em um
          oásis de produtividade!
        </p>

        <form className="flex gap-2">
          <Input name="email" />
          <button
            type="submit"
            className="text-base-black text-center rounded flex items-center align-middle gap-2 p-4 bg-linear-gradient hover:opacity-80"
          >
            <span className="font-bold text-[14px] p-0 m-0 leading-7">
              QUERO RECEBER
            </span>
            <ChevronRight className="w-6 h-6 p-0 m-0" strokeWidth={2} />
          </button>
        </form>
      </section>

      <Footer />
    </main>
  )
}
