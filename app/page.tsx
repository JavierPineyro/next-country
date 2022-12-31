import ListOfCountries from 'app/components/Countries/ListOfCountries'
import SearchForm from 'app/components/Form'
import styles from './page.module.css'
/* for now this is the only solution until react team resolves this shit :D with
  ts and next server components
*/
export default async function Home() {
  return (
    <main className={styles.container}>
      <SearchForm />
      {/* @ts-expect-error Server Component */}
      <ListOfCountries />
    </main>
  )
}
