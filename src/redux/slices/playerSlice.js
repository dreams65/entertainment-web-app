import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    item : []
}

export const playerSlice = createSlice({
    name : 'player',
    initialState,
    reducers : {
        showFilmPage(state, action) {
            state.item = action.payload;
        }
    }
})

export const { showFilmPage } = playerSlice.actions;

export default playerSlice.reducer;