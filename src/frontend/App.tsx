import React from 'react'
import styled from 'styled-components'
import { colorBlack, getGutter } from './lib/index'
import Header from './components/header/Header'
import { TickerBoard } from './components/tickerBoard/TickerBoard'
import { WatchList } from './components/watchList/WatchList'
import { NewsFeed } from './components/newsFeed/NewsFeed'

const AppContainer = styled.div`
  border: 1px solid ${colorBlack};
  margin: ${getGutter(2)}px;
  padding: ${getGutter(2)}px;

  div {
    margin-bottom: ${getGutter(2)}px;
  }
`

// TO DO: move <Provider> to index.tsx, rewrite App.test.tsx to make it work
export const App = () => {
  return (
    <AppContainer>
      <Header />
      <TickerBoard />
      <WatchList />
      <NewsFeed />
    </AppContainer>
  )
}
