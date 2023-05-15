import { createSlice } from '@reduxjs/toolkit';
import DATA from '../../assets/local-data/data.json';

const initialState = {
  DATA
};

const bookmarkedSlice = createSlice({
  name: 'bookmark',
  initialState,
  reducers: {

    addBookmark: (state, action) => {
      const { id, isBookmarked } = action.payload;
      const updateDATA = state.DATA.map(item => {
        if (item.id === id) {
          return { ...item, isBookmarked }
        }
        return item;
      });
      return { ...state, DATA: updateDATA }
    },
  }
});

export const { addBookmark } = bookmarkedSlice.actions;
export default bookmarkedSlice.reducer;
