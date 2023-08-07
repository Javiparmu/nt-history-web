'use client'

import React, { useEffect, useLayoutEffect, useRef, useTransition, } from 'react'

const TransitionProvider = ({ children, }: { children: React.ReactNode }) => {
  const [isLoading, startTransition,] = useTransition()

  const promiseCallbacks = useRef<Record<
    'resolve' | 'reject',
    (value: unknown) => void
      > | null>(null)

  useEffect(() => {
    window.onpopstate = function () {
      document.startViewTransition(() => {
      })
      startTransition(() => {})
    }
  }, [])

  useLayoutEffect(() => {
    return () => {
      if (promiseCallbacks.current) {
        promiseCallbacks.current.resolve(undefined)
        promiseCallbacks.current = null
      }
    }
  })

  return children
}

export default TransitionProvider