import { Game, } from '@/interfaces/GameInterfaces'
import Image from 'next/image'
import React from 'react'
import GameCardImage from './cardImage/GameCardImage'
import CardImageContainer from './cardImage/CardImageContainer'
import NoImage from './cardImage/NoImage'
import Text from '@/components/ui/Text'
import Link from '@/components/Link'

interface GameCardProps {
  game: Game
}

const GameCard = ({game,}: GameCardProps) => {
  const timestamp = new Date(game.timestamp).toLocaleDateString()

  return (
    <Link href={`/run/${game.runId}`} className={`flex flex-col lg:flex-row w-full items-center justify-between bg-gray-700 border-4
    ${game.win ? 'border-lime-600 hover:border-lime-500' : 'border-red-600 hover:border-red-500'} rounded-md p-2 md:p-3 xl:p-5 
    gap-10 lg:gap-0 2xl:gap-40 cursor-pointer hover:scale-[1.005] transition-transform`} key={game.runId}>
      <div className='flex flex-col sm:flex-row items-center gap-5 lg:gap-10'>
        <img style={{ viewTransitionName: `run-${game.runId}-character`,}} className='w-12 md:w-14 lg:w-16 xl:w-18 xl:h-18' src={`/images/characters/${game.character}.png`} alt="character" />
        <div style={{ viewTransitionName: `run-${game.runId}-title`,}}>
          <Text className='text-center font-semibold'>{game.character}</Text>
          <Text className='text-center font-300'>{game.type}</Text>
        </div>
        <img style={{ viewTransitionName: `run-${game.runId}-crown`,}} className='h-6 md:h-8 lg:h-10 xl:h-12' src={`/images/crowns/${game.crown}.png`} alt="crown" />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 w-full flex items-center justify-between gap-2 lg:gap-0 lg:ml-20 2xl:ml-0'>
        <GameCardImage style={{ viewTransitionName: `run-${game.runId}-world`,}} textStyle={{ viewTransitionName: `run-${game.runId}-world-title`,}} text={game.world + ' ' + game.worldLevel + ' L' + game.loops} image={`/images/areas/${game.world}.webp`} isCard />
        <GameCardImage style={{ viewTransitionName: `run-${game.runId}-killedBy`,}} textStyle={{ viewTransitionName: `run-${game.runId}-killedBy-title`,}} text="Killed by" image={`/images/enemies/${game.lastHit}.gif`} isCard />
        <GameCardImage style={{ viewTransitionName: `run-${game.runId}-weaponA`,}} textStyle={{ viewTransitionName: `run-${game.runId}-weaponA-title`,}} text="Weapon A" image={`/images/weapons/${game.weaponA}.png`} isCard />
        <CardImageContainer style={{ viewTransitionName: `run-${game.runId}-weaponB-title`,}} text="Weapon B">
          {game.weaponB === 'Nothing'
            ? <NoImage style={{ viewTransitionName: `no-image-${game.runId}-weaponB`,}} />
            : (<div className='w-12 md:w-14 lg:w-16 xl:w-18 h-12 md:h-14 lg:h-16 xl:h-18 flex items-center'>
              <Image style={{ viewTransitionName: `run-${game.runId}-weaponB`,}} className='rounded-md' src={`/images/weapons/${game.weaponB}.png`} alt="weapon B" width={80} height={80}/>
            </div>)
          }
        </CardImageContainer>
        <CardImageContainer style={{ viewTransitionName: `run-${game.runId}-mutations-title`,}} text="Mutations">
          <div className='flex items-center gap-1'>
            <div className='w-12 md:w-14 lg:w-16 xl:w-18 h-12 md:h-14 lg:h-16 xl:h-18 xl:h-18 flex items-center justify-center gap-1'>
              {game.mutations.length > 0
                ? game.mutations.map((mutation: string, index: number) => {
                  return (
                    <img style={{ viewTransitionName: `run-${game.runId}-mutation-${mutation}`,}} key={mutation + index} alt={mutation} className='w-2md:w-3 lg:w-5' src={`/images/mutations/${mutation}.webp`} />
                  )
                })
                : <NoImage style={{ viewTransitionName: `no-image-${game.runId}-mutation`,}} />
              }
            </div>
          </div>
        </CardImageContainer>
        <CardImageContainer style={{ viewTransitionName: `run-${game.runId}-mutation-ultra-title`,}} text="Ultra mutation">
          <div className='flex gap-1'>
            {game.ultraMutation !== 'None'
              ? <Image style={{ viewTransitionName: `run-${game.runId}-mutation-ultra`,}} className='rounded-md' src={`/images/mutations/ultra/${game.ultraMutation}.webp`} alt={game.ultraMutation} width={30} height={30}/>
              : <NoImage style={{ viewTransitionName: `no-image-${game.runId}-mutation-ultra`,}} />
            }
          </div>
        </CardImageContainer>
        <CardImageContainer style={{ viewTransitionName: `run-${game.runId}-kills-title`,}} className='hidden lg:flex' text="Kills">
          <div style={{ viewTransitionName: `run-${game.runId}-kills-text`,}} className='w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18 flex items-center justify-center'>
            {game.kills}
          </div>
        </CardImageContainer>
      </div>
      <Text>{timestamp}</Text>
    </Link>
  )
}

export default GameCard
