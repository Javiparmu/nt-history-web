'use client'

import { saveLastRun, } from '@/data/saveLastRun'
import { useState, useTransition, } from 'react'
import Spinner from './ui/Spinner'

const SaveRunForm = () => {
  const [error, setError,] = useState('')
  const [success, setSuccess,] = useState('')
  const [steamId, setSteamId,] = useState('')
  const [steamKey, setSteamKey,] = useState('')
  
  const [isLoading, startTransition,] = useTransition()

  const handleSaveRun = async () => {
    startTransition(async () => {
      const response = await saveLastRun(steamId, steamKey)

      if (response.success) {
        setSuccess(response.success)
        setSteamId('')
        setSteamKey('')
      } else if (response.error) {
        setError(response.error)
      }
    })

    setTimeout(() => {
      setError('')
      setSuccess('')
    }, 5000)
  }

  return (
    <form action={handleSaveRun} className='flex flex-col items-center gap-5'>
      <input value={steamId} onChange={(e) => setSteamId(e.target.value)} className='rounded-lg px-4 py-2 text-black' type="text" placeholder="Enter steam ID" name="search" />
      <input value={steamKey} onChange={(e) => setSteamKey(e.target.value)} className='rounded-lg px-4 py-2 text-black' type="text" placeholder="Enter steam key" name="search" />
      {isLoading && <Spinner />}
      {error && <p className='text-red-600'>{error}</p>}
      {success && <p className='text-lime-600'>{success}</p>}
      <button type="submit" className='bg-lime-600 py-3 px-6 rounded-3xl'>
          Save run
      </button>
    </form>
  )
}

export default SaveRunForm