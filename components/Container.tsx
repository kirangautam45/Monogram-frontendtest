import { cn } from '@/lib/utils'
import React from 'react'

interface ContainerProps {
  className?: string
  noPadding?: boolean
  children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({
  className = '',
  noPadding = false,
  children,
}) => {
  return (
    <div
      className={cn(
        'container mx-auto',
        !noPadding && 'px-4 tablet:px-6', // Only add padding if noPadding is false
        className // Merge additional classes from the props
      )}
    >
      {children}
    </div>
  )
}

export default Container
