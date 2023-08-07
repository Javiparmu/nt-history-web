import React from 'react'
import { Skeleton, } from '@/components/ui/skeleton'

const Loading = () => {
  return (
    <header className='flex flex-col items-center justify-center mt-[60px] gap-10'>
      <Skeleton className="w-[50px] h-[50px] rounded-md" />
      <Skeleton className="w-[100px] h-[50px] rounded-md" />
      <Skeleton className="w-[200px] h-[25px] rounded-md" />
    </header>
  )
}

export default Loading