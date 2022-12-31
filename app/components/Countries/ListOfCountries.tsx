import React from 'react'
import Link from 'next/link'

import Card from 'app/components/Countries/Card'
import styles from './Countries.module.css'

import { URLcountry } from 'utils'
import { Service } from 'types'
import type { RawCountry, CountryHomePage } from 'types'

async function getData(): Promise<Array<CountryHomePage>> {
  const service = 'all'
  const response = await fetch(`${URLcountry}/${service}`)
  const responseToJson: Array<RawCountry> = await response.json()
  return responseToJson.map((country) => {
    return {
      name: country.name,
      capital: country.capital,
      region: country.region,
      population: country.population,
      flags: {
        png: country.flags.png,
        svg: country.flags.svg,
      },
      flag: country.flag,
    }
  })
}

export default async function ListOfCountries() {
  const service = Service.Name
  const data = await getData()
  return (
    <section className={styles.content}>
      {data.map((country) => (
        <Link href={`/${service}/${country.name}`} key={country.name}>
          <Card country={country} />
        </Link>
      ))}
    </section>
  )
}
