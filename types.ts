export interface Country {
  name: string
  nativeName: string
  topLevelDomain: Array<string>
  capital: string
  languages: Array<{
    name: string
    nativeName: string
  }>
  region: string
  subregion: string
  currencies: Array<{
    code: string
    name: string
    symbol: string
  }>
  borders?: Array<string>
  area: number
  population: number
  flags?: {
    png: string
    svg: string
  }
  flag: string
}

export interface RawCountry {
  name: string
  topLevelDomain: string[]
  alpha2Code: string
  alpha3Code: string
  callingCodes: string[]
  capital: string
  altSpellings: string[]
  subregion: string
  region: string
  population: number
  latlng: number[]
  demonym: string
  area: number
  gini: number
  timezones: string[]
  borders: string[]
  nativeName: string
  numericCode: string
  flags: {
    svg: string
    png: string
  }
  currencies: Array<{
    code: string
    name: string
    symbol: string
  }>
  languages: Array<{
    iso639_1: string
    iso639_2: string
    name: string
    nativeName: string
  }>
  translations: {
    br: string
    pt: string
    nl: string
    hr: string
    fa: string
    de: string
    es: string
    fr: string
    ja: string
    it: string
    hu: string
  }
  flag: string
  regionalBlocs: Array<{
    acronym: string
    name: string
    otherNames: string[]
    otherAcronyms?: string[]
  }>
  cioc: string
  independent: boolean
}

export enum Service {
  Alpha = "alpha",
  Name = "name",
  All = "all",
  Capital = "capital",
  Region = "region",
  Codes = "codes",
  Currency = "currency",
  Lang = "lang"
}

export type CountryHomePage = Omit<
  Country,
  | 'nativeName'
  | 'topLevelDomain'
  | 'languages'
  | 'subregion'
  | 'currencies'
  | 'borders'
  | 'area'
>

export type Region = "africa"| "america"| "asia"| "europe"| "oceania"

export type FilterRegion = Array<Region>
