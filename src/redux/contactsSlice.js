import { createSlice } from "@reduxjs/toolkit"
import { addContactNew, deleteContactById, fetchAll } from "./operations"


const initState = {
    contacts: [],
    isLoading: false,
    error: null,
};

const handlePending = state => {
    state.isLoading = true;
    state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState: initState,
    extraReducers: (builder) => builder
        .addCase(fetchAll.pending, handlePending)
        .addCase(fetchAll.fulfilled, (state, action) => {
            state.isLoading = false;
            state.contacts = action.payload;
        })
        .addCase(fetchAll.rejected, handleRejected)
        .addCase(addContactNew.pending, handlePending)
        .addCase(addContactNew.fulfilled, (state, action) => {
            state.isLoading = false;
            state.contacts.push(action.payload);
            // state.contacts.unshift(action.payload);
            // state.contacts = [action.payload, ...state.contacts];
        })
        .addCase(addContactNew.rejected, handleRejected)
        .addCase(deleteContactById.pending, handlePending)
        .addCase(deleteContactById.fulfilled, (state, action) => {
            state.isLoading = false;
            state.contacts = state.contacts.filter(
                contact => contact.id !== action.payload.id
            );
            // const deleteContactIndex = state.contacts.findIndex(contact => contact.id === action.payload.id)
            // state.contacts.splice(deleteContactIndex, 1)
        })
        .addCase(deleteContactById.rejected, handleRejected)
});


export const contactsReducer = contactsSlice.reducer;
