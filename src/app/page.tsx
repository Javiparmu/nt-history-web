import GameList from '@/components/games/GameList'
import MainHeader from '@/components/MainHeader'
import SaveRun from '@/components/SaveRun'
import SearchBar from '@/components/SearchBar'

interface HomeProps {
    params: any
    searchParams: {
        steamId: string
    }
}

export default function Home({searchParams,}: HomeProps) {
  const steamId = searchParams?.steamId ?? ''

  return (
    <div>
      <MainHeader />
      <SaveRun />
      <SearchBar />
      {steamId !== '' &&  <GameList steamId={steamId} />}
    </div>
  )
}
