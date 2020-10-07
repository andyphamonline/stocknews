import { createSlice } from '@reduxjs/toolkit'

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    value: '',
  },
  reducers: {
    searchWordSubmitted(state, action) {
      state.value = action.payload.value
    },
  },
})

export const { searchWordSubmitted } = searchSlice.actions

export default searchSlice.reducer
