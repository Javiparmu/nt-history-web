import { Game, } from '@/interfaces/GameInterfaces'
import React from 'react'
import GameCard from './GameCard'
import { getGridCols, searchGames, } from '@/utils/helpers'
import EmptyGameList from './EmptyGameList'

interface GameListProps {
    steamId: string
}

const GameList = async ({ steamId, }: GameListProps) => {
  const gameList = await searchGames(steamId)

  const { gridCols, mdGridCols, } = getGridCols(gameList.length)

  const style = `grid ${gridCols} md:${mdGridCols} lg:grid-cols-1 w-full items-center justify-items-center gap-5 mb-20`

  return (
    <section className='mt-10'>
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