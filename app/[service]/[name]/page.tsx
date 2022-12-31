import React from 'react'
import Image from 'next/image'
import Button from 'app/components/Button'

import { Service } from 'types'
import { getCountryData } from 'utils'

import styles from './page.module.css'

type Props = {
  params: {
    name: string
    service: string
  }
}

const CountryPage = async ({ params }: Props) => {
  const country = await getCountryData(params.name, params.service)
  const mappedLanguages = country.languages?.map((lang) => lang.name)
  const codeService = Service.Alpha

  return (
    <article className={styles.article}>
      <div className={styles.wrap}>
        <Image
          className={styles.img}
          width={20}
          height={15}
          priority={true}
          src={country.flag}
          alt={`${country.name} flag`}
        />
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{country.name}</h3>
        <div className={styles.columns}>
          {/** --------------------------------- */}
          <div className={styles.firstCol}>
            <p className={styles.itemsNativeNave}>
              <span>Native Name: </span> {country.nativeName}
            </p>
            <p>
              <span>Population: </span> {country.population.toLocaleString()}
            </p>
            <p>
              <span>Region: </span> {country.region}
            </p>
            <p>
              <span>Sub Region: </span> {country.subregion}
            </p>
            <p>
              <span>Capital: </span>
              {country.capital?.length !== 0 && country.capital}
              {!country.capital && '???'}
            </p>
          </div>
          {/** --------------------------------- */}
          <div className={styles.secondCol}>
            <p>
              <span>Top Level Domain: </span> {country.topLevelDomain}
            </p>
            <p>
              <span>Currencies: </span>
              {country.currencies?.length !== 0 &&
                country.currencies?.map(
                  (curr) => ` ${curr.name} (${curr.symbol})`
                )}
              {!country.currencies && '???'}
            </p>
            <p className={styles.itemLang}>
              <span>Languages: </span>{' '}
              {mappedLanguages && mappedLanguages?.join(', ')}
            </p>
          </div>
          {/** --------------------------------- */}
        </div>
        <div className={styles.borders}>
          <span>Borders Countries: </span>
          {!country.borders && '  none'}
          {country.borders?.map((codeCountry) => {
            return (
              <Button
                key={codeCountry}
                toPage={`/${codeService}/${codeCountry}`}
                label={`${codeCountry} ↗︎`}
              />
            )
          })}
        </div>
      </div>
    </article>
  )
}

export default CountryPage
