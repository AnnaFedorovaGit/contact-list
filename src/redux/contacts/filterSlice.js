import { createSlice } from "@reduxjs/toolkit"


const initState = {
    filter: ""
};

const filterSlice = createSlice({
    name: "filter",
    initialState: initState,
    reducers: {
        setFilter(state, action) {
            state.filter = action.payload;
        },
    },
});


export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
