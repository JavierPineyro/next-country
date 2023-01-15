'use client'

import Link from 'next/link'
import { useDarkStore } from 'utils';
import { AnalyticsWrapper } from './components/Analytics/AnalyticsWrapper';

import styles from './page.module.css'
import './globals.css'

type LayoutProp = {
  children: React.ReactNode
}

export default function RootLayout({ children }: LayoutProp) {

  const toggleColorMode = useDarkStore((state) => state.toggleColorMode)
  const darkMode = useDarkStore((state) => state.darkMode)

  return (
    <html lang="en">
      <head />
      <body className={darkMode ? styles.bodyDark: styles.bodyLight}>
        <header className={darkMode ? styles.headerDark : styles.headerLight}>
          <Link href="/">
            <h1>Where in the world?</h1>
          </Link>
          <button onClick={toggleColorMode} title='Change theme'>
            {darkMode? 'Light Mode': 'Dark Mode'}
          </button>
        </header>
        {children}
        <AnalyticsWrapper />
        <footer className={darkMode ? styles.footerDark : styles.footerLight}>
          by 
          <a target='_blank' rel="noopener noreferrer" title='Web App Github Repo' href='https://github.com/JavierPineyro/next-country'>
            Javier Piñeyro 
          </a>
          👋
        </footer>
      </body>
    </html>
  )
}
