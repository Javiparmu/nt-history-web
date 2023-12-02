'use client'

import React, { useState, useTransition, } from 'react'
import { usePathname, useRouter, } from 'next/navigation'
import Spinner from './ui/Spinner'

const SearchBar = () => {
  const [steamId, setSteamId,] = useState('')

  const { replace, } = useRouter()

  let pathname = usePathname()

  let [isPending, startTransition,] = useTransition()

  const handleSearch = (steamId: string) => {
    let params = new URLSearchParams(window.location.search)

    if (steamId !== '') {
      if (steamId !== params.get('steamId')) {
        params.set('steamId', steamId)

        startTransition(() => {
          replace(`${pathname}?${params.toString()}`)
        })
      }
    } else {
      params.delete('steamId')
    }
  }
  
  return (
    <div className='flex items-center justify-center mt-10'>
      <div className='relative w-[200px] lg:w-[300px]'>
        <div className='absolute top-1 -left-12 w-8 h-8'>
          { (isPending && steamId !== '') ? <Spinner /> : <div /> }
        </div>
        <search className='flex flex-col md:flex-row items-center md:items-end justify-center gap-2 md:gap-0'>
          <input value={steamId} onChange={(e) => setSteamId(e.target.value)} className='relative md:mt-15 text-black rounded-lg px-4 py-2' type="text" placeholder="Enter steam ID" name="search" />
          <button onClick={() => handleSearch(steamId)} className='rounded-lg px-4 py-2 bg-lime-600 ml-0 md:ml-3 lg:ml-5 font-semibold'>Search</button>
        </search>
      </div>
    </div>
  )
}

export default SearchBar