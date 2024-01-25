import React from 'react'

const SectionTitle = ({children,text}) => {
  return (
    <>
    <div className='flex flex-col gap-2 justify-center text-center  items-center'>
        <h5 className=' text-gray-600 font-semibold'>
       {children}
        </h5>
        <h1 className='w-8/12 [font-size:_clamp(2em,1vw,10em)] font-bold'>
        {text}
        </h1>
    </div>
    </>
  )
}

export default SectionTitle