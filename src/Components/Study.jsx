import React from 'react'

const Study = () => {
  return (
    <div className='flex mt-10 mb-8 flex-col justify-center items-center gap-20 px-10 md:px-32'>
      <h1 className='text-center uppercase font-bold text-2xl'>Oque você irá aprender na <span className='text-cyan-500'>Tráfego Academy</span>?</h1>
      <div className='flex flex-col md:flex-row items-center justify-between w-full'>
        <img className='w-64 md:mb-12' src="./meta-ads.png" alt="" />
        <img className='w-64 md:mb-12' src="./cap-cut.png" alt="" />
        <img className='w-60' src="./google-ads.png" alt="" />
      </div>
    </div>
  )
}

export default Study
