// components/Brick.tsx
import { cn } from '@/lib/utils'
import React from 'react'

interface Props {
  wrapperClass?: string
  svgClass?: string
}

const Brick: React.FC<Props> = ({ wrapperClass, svgClass = '' }) => {
  return (
    <div className={cn('brick', wrapperClass)}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='320'
        height='57'
        fill='none'
      >
        <rect width='320' height='57' rx='7' className={svgClass}></rect>
      </svg>
    </div>
  )
}

export default Brick
