import TransitionProvider from '@/components/providers/TransitionProvider'
import './globals.css'
import type { Metadata, } from 'next'

export const metadata: Metadata = {
  title: 'NTHistory',
  description: 'Check out your nuclear throne runs history.',
  icons: {
    icon: '/logo.webp',
  },
  applicationName: 'NTHistory',
  authors: [ {
    name: 'JaviParmu',
    url: 'https://github.com/Javiparmu',
  }, {
    name: 'Ángel Párraga',
    url: 'https://github.com/ImAngelParraga',
  },],
  keywords: [
    'nuclear',
    'throne',
    'nuclear throne',
    'history',
    'nuclear throne history',
    'nuclear throne runs',
    'nuclear throne run',
    'nuclear throne run history',
    'nuclear throne stats',
    'nuclear throne statistics',
    'nuclear throne run stats',
  ],
  viewport: 'width=device-width, initial-scale=1.0',
  twitter: {
    card: 'summary',
    site: '@JaviParmu',
    creator: '@JaviParmu',
    images: [
      {
        url: '/logo.webp',
        width: 256,
        height: 256,
        alt: 'NTHistory logo',
      },
    ],
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
        <link
          rel="preload"
          href="/logo.webp"
          as="image"
          crossOrigin="anonymous"
          type="image/webp"
        />
        <meta name="view-transition" content="same-origin" />
      </head>
      <body>
        <TransitionProvider>
          <main className='px-10 lg:px-16 xl:px-24 2xl:px-32'>
            {children}
          </main>
        </TransitionProvider>
      </body>
    </html>
  )
}
