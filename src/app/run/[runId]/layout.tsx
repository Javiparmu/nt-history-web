import Link from '@/components/Link'
import Image from 'next/image'
import React, { PropsWithChildren, } from 'react'

const RunLayout = ({children,}: PropsWithChildren) => {
  return (
    <>
      <Link href="/" className='flex items-end justify-start gap-4 my-5'>
        <Image style={{ viewTransitionName: 'logo',}} alt="header-logo" className='' src='/logo.webp' width={40} height={40} />
        <h1 style={{ viewTransitionName: 'title',}} className='font-bold text-xl md:text-3xl relative top-[0.55rem]'>
        NTHistory
        </h1>
      </Link>
      {children}
    </>
  )
}

export default RunLayout