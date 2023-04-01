import React from 'react'
import Link from 'next/link'

import Card from 'app/components/Countries/Card'
import styles from './Countries.module.css'

import { URLcountry } from 'utils'
import { Country, Service } from 'types'
import type { RawCountry, CountryHomePage } from 'types'

type Props = {
  countries: Array<Country> | undefined
  searchAll?: boolean
  filter?: string
}
type SectionProps = {
  data: Country[] | CountryHomePage[]
  service: Service
}

async function getData(): Promise<Array<CountryHomePage>> {
  const serviceFetch = Service.All
  const response = await fetch(`${URLcountry}/${serviceFetch}`)
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

function Section({ data, service }: SectionProps) {
  return (
    <>
      <section className={styles.content}>
        {data.map((country) => (
          <Link href={`/${service}/${country.name}`} key={country.name}>
            <Card country={country} />
          </Link>
        ))}
      </section>
      <p style={{ width: '100%', textAlign: 'center', fontSize: '26px' }}>
        Usa el buscador para los países que quieras!
      </p>
    </>
  )
}

export default async function ListOfCountries(props: Props) {
  const service = Service.Name

  if (props.countries) {
    return <Section data={props.countries} service={service} />
  }

  // Para /all/[region]
  const rawData = await getData()
  if (props.searchAll && props.filter) {
    const filterData = rawData.filter(
      (country) => country.region === props.filter
    )
    return <Section data={filterData} service={service} />
  }

  const data = rawData.slice(0, 39)
  return <Section data={data} service={service} />
}
