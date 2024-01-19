import { Game, } from '@/interfaces/GameInterfaces'

export const searchGames = async (steamId: string): Promise<Game[]> => {
  if (steamId === '') return [] as Game[]

  const response = await fetch(`${process.env.GCLOUD_URL}/nuclear/runs?steamId=${steamId}`, {
    method: 'GET',
    headers: {
      'Authorization': `Basic ${process.env.AUTHORIZATION_TOKEN}`,
    },
    redirect: 'follow',
  })

  if (response.ok) {
    return response.json()
  }

  return [] as Game[]
}

export const getGridCols = (gamesLength: number): { gridCols: string, mdGridCols: string} => {
  const gridCols = gamesLength === 1 ? 'grid-cols-1' : 'grid-cols-2'

  const mdGridCols = gamesLength === 1 ? 'grid-cols-1' : gamesLength === 2 ? 'grid-cols-2' : 'grid-cols-3'

  return {
    gridCols,
    mdGridCols,
  }
}

export const saveLastRun = async (steamId: string, steamKey: string): Promise<void> => {
  try {
    if (steamId === '' || steamKey === '') return
    await fetch(`${process.env.NEXT_PUBLIC_GCLOUD_URL}/api/save-last-run?steamId=${steamId}&key=${steamKey}`, {
      method: 'GET',
      headers: {
        'Authorization': `Basic ${process.env.AUTHORIZATION_TOKEN}`,
      },
      redirect: 'follow',
    })
  } catch (error) {
    console.log(error)
  }
}
