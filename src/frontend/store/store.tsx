import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../components/search/searchSlice';

export default configureStore({
  reducer: {
    searchWord: searchReducer,
  },
});
