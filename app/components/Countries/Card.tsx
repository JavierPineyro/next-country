import React from 'react'
import Image from 'next/image'

import styles from './Countries.module.css'

import { capitalizeString } from 'utils'
import type { CountryHomePage } from 'types'

type Props = {
  country: CountryHomePage
}

function Card({ country }: Props) {
  return (
    <article className={styles.items}>
      <Image
        className={styles.img}
        src={country.flag}
        alt={`${country.name}'s flag`}
        width={20}
        height={15}
        priority={true}
      />
      <header className={styles.wrapper}>
        <h3>{country.name}</h3>
        <p>
          <span className={styles.subtitle}>Population: </span>
          {country.population.toLocaleString()}
        </p>
        <p>
          <span className={styles.subtitle}>Region: </span>
          {country.region}
        </p>
        <p>
          <span className={styles.subtitle}>Capital: </span>
          {capitalizeString(country.capital) || '???'}
        </p>
      </header>
    </article>
  )
}

export default Card
