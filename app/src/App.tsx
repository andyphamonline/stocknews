import React from "react"
import Header from "./components/Header"
import TickerBoard from "./components/TickerBoard"
import WatchList from "./components/WatchList"
import NewsFeed from "./components/NewsFeed"

function App() {
  return (
    <div className="App">
      <Header />
      <TickerBoard />
      <WatchList />
      <NewsFeed />
    </div>
  )
}

export default App
