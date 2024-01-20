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