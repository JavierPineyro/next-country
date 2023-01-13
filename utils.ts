import { Service } from 'types'
import type { Country } from 'types'

export const URLcountry = 'https://restcountries.com/v2'

export const capitalizeString = (str: string): string | undefined => {
  if (typeof str !== 'undefined') {
    let letter = str.at(0)?.toUpperCase()
    let restOfString = str.slice(1, str.length)
    return letter ? letter.concat(restOfString) : str
  }
}

export const getCountryData = async (
  name: string,
  service: string
): Promise<Country> => {
  const response = await fetch(`${URLcountry}/${service}/${name}`)
  const data = await response.json()

  // The NAME service return an Array of Country type
  if (service === Service.Name) {
    return {
      name: data[0].name,
      nativeName: data[0].nativeName,
      topLevelDomain: data[0].topLevelDomain,
      capital: data[0].capital,
      languages: data[0].languages,
      region: data[0].region,
      subregion: data[0].subregion,
      currencies: data[0].currencies,
      borders: data[0].borders,
      area: data[0].area,
      population: data[0].population,
      flags: {
        png: data[0].flags?.png,
        svg: data[0].flags?.svg,
      },
      flag: data[0].flag,
    }
  }

  // The ALPHA service return a Country type Object
  return {
    name: data.name,
    nativeName: data.nativeName,
    topLevelDomain: data.topLevelDomain,
    capital: data.capital,
    languages: data.languages,
    region: data.region,
    subregion: data.subregion,
    currencies: data.currencies,
    borders: data.borders,
    area: data.area,
    population: data.population,
    flags: {
      png: data.flags?.png,
      svg: data.flags?.svg,
    },
    flag: data.flag,
  }
}
