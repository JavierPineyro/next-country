'use client'

import Link from 'next/link'
import ThemeButton from './components/ThemeButton';
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
          <ThemeButton 
            darkMode={darkMode} 
            toggleColorMode={toggleColorMode} 
            title='Change Theme'
          />
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
