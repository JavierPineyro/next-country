'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from './form.module.css'

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

  const handleCountryChange = (evt: ChangeEvent['inputEvent']) => {
    setkeyword(evt.target.value)
  }
  const handleRegionChange = (evt: ChangeEvent['selectEvent']) => {
    setRegion(evt.target.value)
  }
  const handleSubmit = (evt: ChangeEvent['submitInput']) => {
    evt.preventDefault()
    const URL = `/search/${region}/${keyword}/0`
    router.push(URL)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.textInput}
          onChange={handleCountryChange}
          value={keyword}
          placeholder="Search for a country..."
          autoComplete="off"
          required
          type="search"
          name="search"
          id="search"
        />
              
      <select
      className={styles.selectInput}
        defaultValue={'all'}
        onChange={handleRegionChange}
        name="filter"
        id="filter"
      >
        <option value="all">Filter by region...</option>
        {regions.map((region, index) => (
          <option key={index} value={region}>
            {region}
          </option>
        ))}
      </select>
      <div className={styles.wrapperSubmit}>
        <button className={styles.submit} type='submit'>Search</button>
      </div>
    </form>
  )
}

export default SearchForm
