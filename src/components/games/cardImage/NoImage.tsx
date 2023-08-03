import React from 'react'

interface NoImageProps {
  style?: React.CSSProperties
}

const NoImage = ({style,}: NoImageProps) => {
  return (
    <div style={style} className='w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18 bg-gray-500 rounded-md'/>
  )
}

export default NoImage