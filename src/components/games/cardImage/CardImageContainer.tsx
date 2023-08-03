import Text from '@/components/ui/Text'
import React, { PropsWithChildren, } from 'react'

interface CardImageContainerProps {
    text: string
    style?: React.CSSProperties
    className?: string
}

const CardImageContainer = ({children, text, className, style,}: PropsWithChildren<CardImageContainerProps>) => {
  return (
    <div className={`flex flex-col font-semibold items-center justify-center gap-1 ${className}`}>
      <Text style={style} className='text-center'>{text}</Text>
      {children}
    </div>
  )
}

export default CardImageContainer