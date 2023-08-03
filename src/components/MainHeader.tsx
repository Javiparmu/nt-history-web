import Image from 'next/image'
import React from 'react'

const MainHeader = () => {
  return (
    <header className='flex flex-col items-center justify-center mt-[60px]'>
      <Image style={{ viewTransitionName: 'logo',}} alt="header-logo" src='/logo.webp' width={50} height={50} />
      <h1 style={{ viewTransitionName: 'title',}} className='font-bold text-5xl md:text-7xl text-center mt-10'>
        NTHistory
      </h1>
      <h2 className='text-2xl text-center mt-5'>
      Check out your nuclear throne runs history.
      </h2>
    </header>
  )
}

export default MainHeader