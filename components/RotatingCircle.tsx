/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react'
import Image from 'next/image'
import circle from '@/assets/circle.png'
const RotatingCircle = () => {
  return (
    <section className='relative z-auto flex flex-col justify-center items-center  bg-no-repeat bg-center bg-[length:100%_auto] mt-[-45%] desktop:mt-[-45rem] '>
      <>
        <Image
          src={circle}
          alt='alt'
          width={1000}
          height={1000}
          className='animate-rotate globe-spline'
          loading='lazy'
        />
      </>
    </section>
  )
}

export default RotatingCircle
