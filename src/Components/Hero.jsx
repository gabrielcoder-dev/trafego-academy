import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row px-10 md:px-32 items-center mb-10 justify-between mt-12 gap-16 animate-fade-right animate-once animate-duration-1000 animate-delay-100'>
      <div className='max-w-xl flex flex-col gap-6'>
        <img className='w-72' src="logo.png" alt="" />
        <h2 className='text-3xl font-bold'>
          <Typewriter
        words={['CHEGOU O MOMENTO DE APRENDER A FAZER TRAFEGO PAGO COMESTRATÉGIAS COMPROVADAS!']}
        loop={1}
        cursor
        cursorStyle="|"
        typeSpeed={30}
        deleteSpeed={50}
        delaySpeed={1000}
      />
        </h2>
        <p className='text-2xl font-semibold'>
          Você vai aprender de fato a fazer <span className='text-purple-800'>tráfego pago</span> , sem aparecer e sem investir em anúncios!
        </p>
        <a className='p-2 bg-purple-800 w-32' href="https://chat.whatsapp.com/KCWDPNu8txt9yYRxXELtED">Compre agora</a>
      </div>
      <img className='w-[35rem] animate-fade-left animate-once animate-duration-2000 animate-delay-100' src="./img-hero.png" alt="" />
    </div>
  )
}

export default Hero
