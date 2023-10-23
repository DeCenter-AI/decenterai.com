import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// @ts-ignore
import Favicon from '../../public/favicon.ico'
import Favicon16x16 from '../../public/favicon-16x16.png'
import Favicon32x32 from '../../public/favicon-32x32.png'
import SafariPinnedTab from '../../public/safari-pinned-tab.svg'
import AppleTouchIcon from '../../public/apple-touch-icon.png'
import { AppDescription, AppName, AppSiteManifest } from '../../enums/app'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  applicationName: AppName,
  authors: [{ name: 'Hiro', url: 'https://bit.ly/m/laciferin' }],
  keywords: ['DecenterAI', 'AI Infra'],
  title: AppName,
  description: AppDescription,
  icons: [
    { rel: 'icon', url: Favicon.src },
    { rel: 'icon', sizes: '16x16', url: Favicon16x16.src },
    { rel: 'icon', sizes: '32x32', url: Favicon32x32.src },
    { rel: 'mask-icon', url: SafariPinnedTab.src, color: '#5bbad5' },
    { rel: 'apple-touch-icon', url: AppleTouchIcon.src },
  ],
  manifest: AppSiteManifest,
  themeColor: '#ffffff',
  other: {
    'msapplication-TileColor': '#da532c',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Decenter AI</title>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
