import Image from 'next/image'

import Setup1 from '@/assets/setup_1.png'
import Setup2 from '@/assets/setup_2.png'
import Setup3 from '@/assets/setup_3.png'
import Setup4 from '@/assets/setup_4.png'
import Setup5 from '@/assets/setup_5.png'
import Setup6 from '@/assets/setup_6.png'
import Setup7 from '@/assets/setup_7.png'

export function BackgroundImage() {
  return (
    <div
      className="absolute min-h-screen -top-6 right-0 gap-x-10 grid grid-cols-bg-image shrink-0"
      style={{
        background: '#09090A 50% / cover no-repeat',
      }}
    >
      <div className="flex flex-col gap-10">
        <Image src={Setup1} alt="" width={500} />
        <Image src={Setup2} alt="" width={500} className="opacity-30" />
        <Image src={Setup3} alt="" width={500} className="opacity-30" />
      </div>

      <div className="flex flex-col gap-10">
        <Image src={Setup4} alt="" width={300} className="opacity-30" />
        <Image src={Setup5} alt="" width={300} className="opacity-30" />
        <Image src={Setup6} alt="" width={300} className="opacity-30" />
        <Image src={Setup7} alt="" width={300} className="opacity-30" />
      </div>
    </div>
  )
}
