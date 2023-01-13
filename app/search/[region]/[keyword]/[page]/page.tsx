import React from 'react'
import ListOfCountries from 'app/components/Countries/ListOfCountries'

import styles from './page.module.css'

import { capitalizeString, URLcountry } from 'utils'
import { Service, Country } from 'types'

type DataFetch = Array<Country> | Country
type Args = {
  region: string
  keyword: string
  pageNumber: number
}
type Props = {
  params: {
    region: string
    keyword: string
    page: string
  }
}

const SERVICE_FETCH = Service.Name

const getData = async (args: Args): Promise<DataFetch | null> => {
  const { region, keyword, pageNumber: page } = args

  const response = await fetch(`${URLcountry}/${SERVICE_FETCH}/${keyword}`)
  const data = await response.json()

  if (!Array.isArray(data)) {
    return null
  }

  if (region === Service.All) {
    return data
  } else {
    return data.filter((country) => country.region === capitalizeString(region))
  }
}

const SearchPage = async ({
  params: { region = Service.Name, keyword, page },
}: Props) => {
  const pageNumber = Number(page)
  const countries = await getData({ region, keyword, pageNumber })

  return (
    <main className={styles.container}>
      {/* @ts-expect-error Server Component */}
      {countries ? <ListOfCountries countries={countries} /> : 'none'}
    </main>
  )
}

export default SearchPage
