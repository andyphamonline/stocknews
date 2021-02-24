import React, { useState } from 'react'
import styled from 'styled-components'
import { searchPlaceholder } from '../../lib/index'
import { fetchNews } from '../../api/yahooFinance'

const SearchWrapper = styled.div`
  form {
    display: flex;
    justify-content: space-between;
  }

  input {
    width: 70%;
  }

  button {
    width: 20%;
  }
`

export default function Search() {
  const [value, setValue] = useState('')
  let [news, setNews] = useState('')
  const isDisabled: boolean = value === '' ? true : false

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) : Promise<void> => {
    e.preventDefault()

    const newsString = await fetchNews(value)

    setNews(JSON.stringify(newsString))
  }

  return (
    <SearchWrapper>
      <form onSubmit={handleSubmit}>
        <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} placeholder={searchPlaceholder} />
        <button onClick={handleSubmit} disabled={isDisabled}>Submit</button>
      </form>
      <div>
        {news}
      </div>
    </SearchWrapper>
  )
}