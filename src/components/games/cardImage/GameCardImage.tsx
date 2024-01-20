import Image from 'next/image'
import CardImageContainer from './CardImageContainer'
import { cardImageSize, runImageSize, } from '@/utils/constants'
import { CSSProperties, } from 'react'

interface GameCardImageProps {
    text: string
    image: string
    style?: CSSProperties
    textStyle?: CSSProperties
    isCard?: boolean
}

const GameCardImage = ({text, image, style, textStyle, isCard = false,}: GameCardImageProps) => {
  return (
    <CardImageContainer style={textStyle} text={text}>
      <div className={`${isCard ? cardImageSize : runImageSize} flex items-center`}>
        <Image style={style} className='rounded-md' src={image} alt={text} width={80} height={80}/>
      </div>
    </CardImageContainer>
  )
}

export default GameCardImage