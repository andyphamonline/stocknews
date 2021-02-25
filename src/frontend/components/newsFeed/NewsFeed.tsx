import React from 'react'
import styled from 'styled-components'
import { colorBlack, getGutter } from '../../lib/index'

const NewsFeedWrapper = styled.div`
  border: 1px solid ${colorBlack};
  padding: ${getGutter(2)}px;
`

export const NewsFeed = () => {
  return (
    <NewsFeedWrapper>
      <h1>NewsFeed</h1>
    </NewsFeedWrapper>
  )
}
