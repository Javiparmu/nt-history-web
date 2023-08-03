'use client'

import { saveLastRun, } from '@/utils/helpers'
import { FormEvent, useState, } from 'react'

const SaveRunForm = () => {
  const [steamId, setSteamId,] = useState('')
  const [steamKey, setSteamKey,] = useState('')

  const handleSaveRun = async (e: FormEvent) => {
    e.preventDefault()
    
    await saveLastRun(steamId, steamKey)
  }

  return (
    <form onSubmit={handleSaveRun} className='flex flex-col items-center gap-5'>
      <input  value={steamId} onChange={(e) => setSteamId(e.target.value)} className='rounded-lg px-4 py-2 text-black' type="text" placeholder="Enter steam ID" name="search" />
      <input value={steamKey} onChange={(e) => setSteamKey(e.target.value)} className='rounded-lg px-4 py-2 text-black' type="text" placeholder="Enter steam key" name="search" />
      <button type="submit" className='bg-lime-600 py-3 px-6 rounded-3xl'>
          Save run
      </button>
    </form>
  )
}

export default SaveRunForm