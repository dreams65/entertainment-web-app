import { configureStore } from '@reduxjs/toolkit';
import bookmarkedSlice from './slices/bookmarkedSlice';
import searchSlice from './slices/searchSlice';
import playerSlice from './slices/playerSlice';

export const store = configureStore({
  reducer: {
    bookmarkedSlice,
    searchSlice,
    playerSlice,
  },
})