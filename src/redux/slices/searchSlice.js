import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: '',
}

export const searchSlice = createSlice({
    name: "searchInput",
    initialState,

    reducers : {
        setValue(state, action) {
            state.value = action.payload;
        }
    }
})

export const { setValue } = searchSlice.actions;
export default searchSlice.reducer;