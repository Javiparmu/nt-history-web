import React from 'react'

interface NoImageProps {
  style?: React.CSSProperties
}

const NoImage = ({style,}: NoImageProps) => {
  return (
    <div style={style} className='w-full h-full bg-gray-500 rounded-md'/>
  )
}

export default NoImage