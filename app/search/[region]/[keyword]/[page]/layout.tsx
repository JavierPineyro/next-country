import SearchForm from 'app/components/Form'
import styles from './page.module.css'

type LayoutProp = {
  children: React.ReactNode
}

export default function RootLayout({ children }: LayoutProp) {
  return (
    <main className={styles.container}>
      <div className={styles.divForm}>
        <SearchForm />
      </div>
      <main>{children}</main>
    </main>
  )
}
