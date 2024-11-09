import React from 'react'
import markupLeftArt from '../assets/markup-left.svg'
import markupRightArt from '../assets/markup-right.svg'
import heroLeftArt from '../assets/hero-left.svg'
import heroRightArt from '../assets/hero-right.svg'
import Image from 'next/image'

interface Props {
  className?: string
  isHero?: boolean
}

const VisualContainer: React.FC<Props> = ({
  className = '',
  isHero = false,
}) => {
  return (
    <div className={`art-box ${className}`}>
      <div className='art-box-group'>
        <Image
          src={isHero ? heroLeftArt.src : markupLeftArt.src}
          alt='First art'
          width={10}
          height={10}
          className='art-box-image-1st scroll-right-hide'
        />
        <Image
          width={10}
          height={10}
          src={isHero ? heroRightArt.src : markupRightArt.src}
          alt='Second art'
          className='art-box-image-2nd scroll-right-hide delay-[400ms]'
        />
      </div>
      <div className=' absolute bottom-0 right-0 flex flex-row items-end gap-[2rem] translate-y-[8rem] translate-x-[6rem] '>
        <div
          className={`art-box-blurry-1st ${
            isHero ? 'bg-white/40' : ''
          } scroll-right-hide delay-[200ms]`}
        ></div>
        <div
          className={`art-box-blurry-2nd ${
            isHero ? 'bg-white/40' : ''
          } scroll-right-hide delay-[600ms]`}
        ></div>
      </div>
    </div>
  )
}

export default VisualContainer
