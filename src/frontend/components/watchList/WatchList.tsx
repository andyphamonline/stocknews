import React from 'react'
import styled from 'styled-components'
import { colorBlack, getGutter } from '../../lib/index'

const WatchListWrapper = styled.div`
  border: 1px solid ${colorBlack};
  padding: ${getGutter(2)}px;
`

export const WatchList = () => {
  return (
    <WatchListWrapper>
      <h1>WatchList</h1>
    </WatchListWrapper>
  )
}
