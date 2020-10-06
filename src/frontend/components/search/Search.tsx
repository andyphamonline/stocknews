import React, { useState, FormEvent } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { searchWordSubmitted } from './searchSlice'

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

export default function Search() {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const disabled: boolean = !value.length

  const handleSubmit = (e: any) => {
    e.preventDefault()
    dispatch(searchWordSubmitted({ value }))
  }

  return (
    <SearchContainer>
      <form onSubmit={handleSubmit}>
        <input
          value={value}
          type="text"
          placeholder="Search a stock symbol"
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="button" disabled={disabled} onClick={handleSubmit}>
          Search
        </button>
      </form>
    </SearchContainer>
  )
}
