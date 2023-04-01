import ListOfCountries from 'app/components/Countries/ListOfCountries'
import SearchForm from 'app/components/Form'
import styles from './page.module.css'

type Props = {
  params: {
    region: string
  }
}

export default async function AllPage({ params: { region } }: Props) {
  return (
    <main className={styles.container}>
      <div className={styles.divForm}>
        <SearchForm />
      </div>
      {/* @ts-expect-error Server Component */}
      <ListOfCountries filter={region} searchAll={true} />
    </main>
  )
}
