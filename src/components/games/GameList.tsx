import { Game, } from '@/interfaces/GameInterfaces'
import React from 'react'
import GameCard from './GameCard'
import { getGridCols, isEmpty, } from '@/utils/helpers'
import EmptyGameList from './EmptyGameList'
import { gamesDataExample, } from '@/data/gamesDataExample'
import { searchGames, } from '@/data/searchGames'

interface GameListProps {
    steamId: string
}

const GameList = async ({ steamId, }: GameListProps) => {
  let gameList: Game[] = []

  if (isEmpty(steamId)) {
    gameList = gamesDataExample
    steamId = 'example-steam-id'
  } else { 
    gameList = await searchGames(steamId)
  }

  const { gridCols, mdGridCols, } = getGridCols(gameList.length)

  const style = `grid ${gridCols} md:${mdGridCols} lg:grid-cols-1 w-full items-center justify-items-center gap-5 mb-20`

  return (
    <section className='mt-10'>
      {isEmpty(steamId) && <p className='text-lg text-gray-400 mb-4'>This is example data, use your Steam ID to see your runs.</p>}
      {gameList.length > 0
        ? <div className={style}>
          {gameList.map((game: Game) => {
            return (
              <GameCard game={game} steamId={steamId} key={game.runId}  />
            )
          })}
        </div>
        : <EmptyGameList steamId={steamId} />
      }
    </section>
  )
}

export default GameList