import React from "react"
import styled from "styled-components"
import Header from "./components/Header"
import TickerBoard from "./components/TickerBoard"
import WatchList from "./components/WatchList"
import NewsFeed from "./components/NewsFeed"

const AppContainer = styled.div`
  padding: 0 20px;
`

function App() {
  return (
    <AppContainer>
      <Header />
      <TickerBoard />
      <WatchList />
      <NewsFeed />
    </AppContainer>
  )
}

export default App
