import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { searchWordSubmitted } from './searchSlice'
import { fetchNews } from '../../api/yahooFinance'

const SearchContainer = styled.div`
  padding: 0 20px;

  form {
    display: flex;
  }

  input {
    width: 75%;
    margin-right: 5%;
  }

  button {
    width: 20%;
  }
`

export const Search = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const disabled: boolean = !value.length

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>): Promise<void> => {
    e.preventDefault()

    let news = await fetchNews(value)
     
    // dispatch(searchWordSubmitted({ value }))
  }

  return (
    <SearchContainer>
      <form onSubmit={handleSubmit}>
        <input
          value={value}
          type="text"
          placeholder="Search a stock symbol"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) : void => setValue(e.target.value)}
        />
        <button type="button" disabled={disabled} onClick={handleSubmit}>
          Search
        </button>
      </form>
    </SearchContainer>
  )
}