import TransitionProvder from '@/components/providers/TransitionProvider'
import './globals.css'
import type { Metadata, } from 'next'

export const metadata: Metadata = {
  title: 'NTHistory',
  description: 'Check out your nuclear throne runs history.',
  icons: {
    icon: '/logo.webp',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/assets/fonts/n27regular/n27-regular-webfont.woff2"
          as="font"
          crossOrigin="anonymous"
          type="font/woff2"
        />
        <meta name="view-transition" content="same-origin" />
      </head>
      <body>
        <TransitionProvder>
          <main className='px-10 lg:px-16 xl:px-24 2xl:px-32'>
            {children}
          </main>
        </TransitionProvder>
      </body>
    </html>
  )
}
