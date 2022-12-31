import Link from 'next/link'
import './globals.css'

type LayoutProp = {
  children: React.ReactNode
}

export default function RootLayout({ children }: LayoutProp) {
  return (
    <html lang="en">
      <head />
      <body>
        <header className="header">
          <Link href="/">
            <h1>Where in the world?</h1>
          </Link>
          <button>Theme</button>
        </header>
        {children}
        <footer className="footer">Footer</footer>
      </body>
    </html>
  )
}
