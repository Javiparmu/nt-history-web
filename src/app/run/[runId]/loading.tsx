import { Skeleton, } from '@/components/ui/skeleton'
import React from 'react'

const RunLoading = () => {
  return (
    <div className='mt-20 flex flex-col items-center justify-center w-full'>
      <header className='flex items-center justify-center gap-10 lg:gap-20'>
        <Skeleton className="w-[80px] h-[80px] rounded-md" />
        <Skeleton className="w-[100px] h-[80px] rounded-md" />
        <Skeleton className="w-[80px] h-[80px] rounded-md" />
      </header>
      <section className='grid grid-cols-2 md:grid-cols-3 md:w-3/4 gap-10 items-center justify-center my-20'>
        {Array.from({ length: 9, }, (_, i) => (
          <div key={i} className='flex flex-col items-center justify-center gap-5'>
            <Skeleton className="w-[100px] h-[20px] rounded-md" />
            <Skeleton className="w-[100px] h-[100px] rounded-md" />
          </div>
        ))}
      </section>
    </div>
  )
}

export default RunLoading