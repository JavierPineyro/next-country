'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from './form.module.css'
import { useDarkStore } from 'utils'

type ChangeEvent = {
  inputEvent: React.ChangeEvent<HTMLInputElement>
  selectEvent: React.ChangeEvent<HTMLSelectElement>
  submitInput: React.FormEvent<HTMLFormElement>
}
type selectValues = 'africa' | 'americas' | 'asia' | 'europe' | 'oceania'

const regions: selectValues[] = [
  'africa',
  'americas',
  'asia',
  'europe',
  'oceania',
]

const SearchForm = () => {
  const [keyword, setkeyword] = useState<string>('')
  const [region, setRegion] = useState<string>('all')

  const router = useRouter()
  const darkMode = useDarkStore((state) => state.darkMode)

  const handleCountryChange = (evt: ChangeEvent['inputEvent']) => {
    setkeyword(evt.target.value)
  }
  const handleRegionChange = (evt: ChangeEvent['selectEvent']) => {
    setRegion(evt.target.value)
  }
  const handleSubmit = (evt: ChangeEvent['submitInput']) => {
    evt.preventDefault()

    if (keyword === '') {
      router.push(`/all/${region}`)
    }
    const URL = `/search/${region}/${keyword}/0`
    router.push(URL)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={darkMode ? styles.textInputDark : styles.textInputLight}
        onChange={handleCountryChange}
        value={keyword}
        placeholder="Search for a country..."
        autoComplete="off"
        type="search"
        name="search"
        id="search"
        tabIndex={0}
      />

      <select
        className={darkMode ? styles.selectInputDark : styles.selectInputLight}
        defaultValue={'all'}
        onChange={handleRegionChange}
        name="filter"
        id="filter"
        tabIndex={1}
      >
        <option value="all">Filter by region...</option>
        {regions.map((region, index) => (
          <option key={index} value={region}>
            {region}
          </option>
        ))}
      </select>
      <div className={styles.wrapperSubmit}>
        <button className={styles.submit} type="submit">
          Search
        </button>
      </div>
    </form>
  )
}

export default SearchForm
