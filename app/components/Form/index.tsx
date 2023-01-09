'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

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
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleCountryChange}
        value={keyword}
        placeholder="Search a country ..."
        autoComplete="off"
        type="search"
        name="search"
        id="search"
      />
      <select
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
    </form>
  )
}

export default SearchForm
