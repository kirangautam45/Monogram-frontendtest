// components/Score.tsx
import React from 'react'
import Image from 'next/image'
import ellipse from '../assets/score-ellipse.svg'
import { cn } from '@/lib/utils'

interface ScoreProps {
  wrapperClass?: string
  imgClass?: string
  scoreClass?: string
  children: React.ReactNode
}

const Score: React.FC<ScoreProps> = ({
  wrapperClass = '',
  imgClass = '',
  scoreClass = '',
  children,
}) => {
  return (
    <div className={cn('score', wrapperClass)}>
      <Image
        src={ellipse}
        alt='Score ellipse'
        className={cn('absolute h-full w-auto', imgClass)} // Use cn here for imgClass
        layout='intrinsic'
      />
      <div className={cn('typo-score score-shadow', scoreClass)}>
        {children}
      </div>
    </div>
  )
}

export default Score
