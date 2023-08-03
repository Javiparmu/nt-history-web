'use client'

import useViewTransitionRouter from '@/hooks/useViewTransitionRouter'
import NextLink, { LinkProps as NextLinkProps, } from 'next/link'
import { AnchorHTMLAttributes, FC, MouseEvent, ReactNode, } from 'react'

type AnchorProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof NextLinkProps
>;

interface LinkProps extends AnchorProps, NextLinkProps {
  children: ReactNode;
}

const Link: FC<LinkProps> = ({ ...props }) => {
  const router = useViewTransitionRouter()

  const handleLinkClick = async (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    router.push(props.href.toString())
  }

  return <NextLink {...props} onClick={handleLinkClick} />
}

export default Link