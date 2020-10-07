import React from 'react'
import styled from 'styled-components'
import { Provider } from 'react-redux'
import store from './store/store'
import { Header } from './components/Header'
import { TickerBoard } from './components/TickerBoard'
import { WatchList } from './components/WatchList'
import { NewsFeed } from './components/NewsFeed'

const AppContainer = styled.div`
  padding: 0 20px;
`

// TO DO: move <Provider> to index.tsx, rewrite App.test.tsx to make it work
export const App = () => {
  return (
    <Provider store={store}>
      <AppContainer>
        <Header />
        <TickerBoard />
        <WatchList />
        <NewsFeed />
      </AppContainer>
    </Provider>
  )
}
