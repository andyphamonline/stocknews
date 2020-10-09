import { createSlice } from '@reduxjs/toolkit'

const yahooFinanceSlice = createSlice({
  name: 'yahooFinance',
  initialState: {
    news: [],
  },
  reducers: {
    STOCK_FETCH_SUCCEEDED(state, action) {
      console.log('inside YahooFinanceSlice: ')
      console.log(action)
      // state.news = action.payload.Content.result
    },
  },
})

export default yahooFinanceSlice.reducer
