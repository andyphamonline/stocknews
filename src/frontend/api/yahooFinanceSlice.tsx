import { createSlice } from '@reduxjs/toolkit'

const initialState: object[] = []

const yahooFinanceSlice = createSlice({
  name: 'yahooFinance',
  initialState: initialState,
  reducers: {
    STOCK_FETCH_SUCCEEDED(state, action) {
      state.push(...action.payload.Content.result)
    },
    STOCK_FETCH_FAILED(state, action) {
      console.log(action)
    },
  },
})

export default yahooFinanceSlice.reducer
