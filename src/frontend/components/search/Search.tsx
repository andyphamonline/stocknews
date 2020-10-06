import React, { useState, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { searchWordSubmitted } from './searchSlice';

const SearchContainer = styled.div`
  padding: 0 20px;

  input {
    width: 100%;
  }
`;

export default function Search() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(searchWordSubmitted({ value }));
  };

  return (
    <SearchContainer>
      <form onSubmit={handleSubmit}>
        <input
          value={value}
          type="text"
          placeholder="Search a stock symbol"
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </SearchContainer>
  );
}
