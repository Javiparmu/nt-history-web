import React from 'react'

interface EmptyGameListProps {
    steamId: string
}

const EmptyGameList = ({steamId,}: EmptyGameListProps) => {
  return (
    steamId !== ''
      ? <h3 className='mt-10 text-center text-xl font-semibold'>No games found</h3>
      : <h3 className='mt-10 text-center text-xl text-lime-400 italic mt-10'>Search for a steam ID to show history</h3>
  )
}

export default EmptyGameList