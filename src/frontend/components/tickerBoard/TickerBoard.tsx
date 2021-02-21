import React from 'react'
import styled from 'styled-components'
import { colorBlack, getGutter } from '../../lib/index'

const TickerBoardWrapper = styled.div`
  border: 1px solid ${colorBlack};
  padding: ${getGutter(2)}px;
`

export const TickerBoard = () => {
  return (
    <TickerBoardWrapper>
      <h1>TickerBoard</h1>
    </TickerBoardWrapper>
  )
}
