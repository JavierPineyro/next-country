import React from 'react'
import Button from 'app/components/Button'
import { getCountryData } from 'utils'
import { Service } from 'types'

type Props = {
  params: {
    region: string
    keyword: string
    page: string
  }
}

const SERVICE_FECTH = Service.Name

// code fetch
const getData = async (region: string, keyword: string, page: number) => {
  const data = await getCountryData(keyword, SERVICE_FECTH)
  return data
}

const SearchPage = ({ params: { region, keyword, page } }: Props) => {
  const pageNumber = Number(page)
  const countries = getData(region, keyword, pageNumber)

  return (
    <div>
      <Button label="Back" toPage="/" />
      SearchPage {region + '/' + keyword}
    </div>
  )
}

export default SearchPage
