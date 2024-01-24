import Link from '@/components/Link'
import { gamesDataExample, } from '@/data/gamesDataExample'
import { Game, } from '@/interfaces/GameInterfaces'
import { NoData, } from '@/utils/enums'
import Image from 'next/image'
import React from 'react'

interface PageProps {
    params: {
        runId: string
    },
    searchParams: {
        steamId: string
    }
}

export default async function RunPage({params, searchParams,}: PageProps) {
  const runId = params?.runId ?? ''
  const steamId = searchParams?.steamId ?? ''

  let run: Game
  const isExample = steamId === 'example-steam-id'

  if (isExample) {
    run = gamesDataExample.find((game: Game) => game.runId === runId) ?? {} as Game
  } else {
    const response = await fetch(`${process.env.GCLOUD_URL}/nuclear/run?id=${runId}`, {
      method: 'GET',
      headers: {
        'Authorization': `Basic ${process.env.AUTHORIZATION_TOKEN}`,
      },
      redirect: 'follow',
    })

    if (!response.ok) {
      return (
        <div className='flex flex-col items-center justify-center w-full h-screen'>
          <h1 className='text-2xl font-semibold'>Error: {response.status}</h1>
          <p className='text-xl font-300'>The run you are looking for does not exist.</p>
        </div>
      )
    }

    run = await response.json()
  }

  return (
    <>
      <Link href={isExample ? '/' : `/?steamId=${steamId}`} className='flex items-end justify-start gap-4 my-5'>
        <Image style={{ viewTransitionName: 'logo',}} alt="header-logo" className='' src='/logo.webp' width={40} height={40} />
        <h1 style={{ viewTransitionName: 'title',}} className='font-bold text-xl md:text-3xl relative top-[0.4rem]'>
          NTHistory
        </h1>
      </Link>
      <div className='mt-20 flex flex-col items-center justify-center w-full'>
        <header className='flex items-center justify-center gap-10 lg:gap-20'>
          <img style={{ viewTransitionName: `run-${run.runId}-character`,}} className='w-16 h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 xl:w-22 xl:h-22' src={`/images/characters/${run.character}.png`} alt="character" />
          <div style={{ viewTransitionName: `run-${run.runId}-title`,}} className='flex flex-col justify-center items-center'>
            <h1 className='text-center text-xl md:text-2xl font-semibold'>{run.character}</h1>
            <h2 className='text-center text-xl md:text-2xl font-300'>{run.type}</h2>
          </div>
          <img style={{ viewTransitionName: `run-${run.runId}-crown`,}} className='h-8 md:h-10 lg:h-12 xl:h-14' src={`/images/crowns/${run.crown}.png`} alt="crown" />
        </header>
        <section className='grid grid-cols-2 md:grid-cols-3 gap-10 md:w-3/4 items-center justify-center my-20'>
          <div className='flex flex-col items-center justify-center gap-5'>
            <h3 style={{ viewTransitionName: `run-${run.runId}-world-title`,}} className='text-center text-xl md:text-2xl font-semibold'>World: {run.world}</h3>
            <div className='w-[80px] h-[80px] md:w-[100px] md:h-[100px] flex justify-center'>
              <Image style={{ viewTransitionName: `run-${run.runId}-world`,}} className='rounded-md' src={`/images/areas/${run.world}.webp`} width={100} height={100} alt="world" />
            </div>
          </div>
          <div className='flex flex-col items-center justify-center gap-5'>
            <h3 style={{ viewTransitionName: `run-${run.runId}-weaponA-title`,}} className='text-center text-xl md:text-2xl font-semibold'>Weapon A</h3>
            <div className='w-[80px] h-[80px] md:w-[100px] md:h-[100px] flex justify-center items-start'>
              <Image style={{ viewTransitionName: `run-${run.runId}-weaponA`,}} className='rounded-md' src={`/images/weapons/${run.weaponA}.png`} width={100} height={100} alt="weapon A" />
            </div>
          </div>
          <div className='flex flex-col items-center justify-center gap-5'>
            <h3 style={{ viewTransitionName: `run-${run.runId}-weaponB-title`,}} className='text-center text-xl md:text-2xl font-semibold'>Weapon B</h3>
            <div className='w-[80px] h-[80px] md:w-[100px] md:h-[100px] flex justify-center items-start'>
              {run.weaponB !== NoData.Nothing
                ? <Image style={{ viewTransitionName: `run-${run.runId}-weaponB`,}} className='rounded-md' src={`/images/weapons/${run.weaponB}.png`} width={100} height={100} alt="weapon B" />
                : <div style={{ viewTransitionName: `no-image-${run.runId}-weaponB`,}} className='w-[80px] h-[80px] md:w-[100px] md:h-[100px] flex justify-center items-center bg-gray-500 rounded-md' />
              }
            </div>
          </div>
          <div className='flex flex-col items-center justify-center gap-5'>
            <h3 style={{ viewTransitionName: `run-${run.runId}-killedBy-title`,}} className='text-center text-xl md:text-2xl font-semibold'>Killed by</h3>
            <div className='w-[80px] h-[80px] md:w-[100px] md:h-[100px] flex justify-center'>
              <Image style={{ viewTransitionName: `run-${run.runId}-killedBy`,}} className='rounded-md' src={`/images/enemies/${run.lastHit}.gif`} width={100} height={100} alt="enemy" />
            </div>
          </div>
          <div className='flex flex-col items-center justify-center gap-5'>
            <h3 style={{ viewTransitionName: `run-${run.runId}-mutations-title`,}} className='text-center text-xl md:text-2xl font-semibold'>Mutations</h3>
            <div className='w-[80px] h-[80px] md:w-[100px] md:h-[100px] flex justify-center gap-5'>
              {run.mutations.length > 0
                ? run.mutations.map((mutation: string, index: number) => {
                  return (
                    <img style={{ viewTransitionName: `run-${run.runId}-mutation-${mutation}`,}} key={mutation + index} alt={mutation} className='w-6 h-6' src={`/images/mutations/${mutation}.webp`} />
                  )
                })
                : <div style={{ viewTransitionName: `no-image-${run.runId}-mutation`,}} className='w-[80px] h-[80px] md:w-[100px] md:h-[100px] flex justify-center items-center bg-gray-500 rounded-md' />
              }
            </div>
          </div>
          <div className='flex flex-col items-center justify-center gap-5'>
            <h3 style={{ viewTransitionName: `run-${run.runId}-mutation-ultra-title`,}} className='text-center text-xl md:text-2xl font-semibold'>Ultra mutation</h3>
            <div className='w-[80px] h-[80px] md:w-[100px] md:h-[100px] flex justify-center'>
              {run.ultraMutation !== NoData.None
                ? <Image style={{ viewTransitionName: `run-${run.runId}-mutation-ultra`,}} className='rounded-md' src={`/images/mutations/ultra/${run.ultraMutation}.webp`} alt={run.ultraMutation} width={100} height={100}/>
                : <div style={{ viewTransitionName: `no-image-${run.runId}-mutation-ultra`,}} className='w-[80px] h-[80px] md:w-[100px] md:h-[100px] flex justify-center items-center bg-gray-500 rounded-md' />
              }
            </div>
          </div>
          <div className='flex flex-col items-center justify-center gap-5'>
            <h3 style={{ viewTransitionName: `run-${run.runId}-kills-title`,}} className='text-center text-xl md:text-2xl font-semibold'>Kills</h3>
            <div className='w-[80px] h-[80px] md:w-[100px] md:h-[100px] flex justify-center'>
              <p style={{ viewTransitionName: `run-${run.runId}-kills-text`,}} className='text-center text-xl md:text-2xl font-300'>{run.kills}</p>
            </div>
          </div>
          <div className='flex flex-col items-center justify-center gap-5'>
            <h3 className='text-center text-xl md:text-2xl font-semibold'>Level</h3>
            <div className='w-[80px] h-[80px] md:w-[100px] md:h-[100px] flex justify-center'>
              <div className="border-4 border-lime-600 text-white w-[3.5rem] h-[3.5rem] rounded-full flex items-center justify-center">
                <p className='text-center text-xl md:text-2xl font-300'>{run.characterLvl}</p>
              </div>
            </div>
          </div>
          <div className='flex flex-col items-center justify-center gap-5'>
            <h3 className='text-center text-xl md:text-2xl font-semibold'>Skin</h3>
            <div className='w-[80px] h-[80px] md:w-[100px] md:h-[100px] flex justify-center'>
              <p className='text-center text-xl md:text-2xl font-300'>{run.skin}</p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
