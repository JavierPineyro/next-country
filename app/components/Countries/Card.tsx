'use client'

import React from 'react'
import Image from 'next/image'

import styles from './Countries.module.css'

import { capitalizeString, useDarkStore } from 'utils'
import type { Country, CountryHomePage } from 'types'

type Props = {
  country: CountryHomePage | Country
}

function Card({ country }: Props) {

  const darkMode = useDarkStore(state => state.darkMode)

  return (
    <article className={darkMode ? styles.itemsDark : styles.itemsLight}>
      <Image
        className={styles.img}
        src={country.flag}
        alt={`${country.name}'s flag`}
        width={20}
        height={15}
        loading='lazy'
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
