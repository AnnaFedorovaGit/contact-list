import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { addContactNew, deleteContactById, fetchAll } from "./operations";


const initState = {
    contacts: [],
    isLoading: false,
    error: null,
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState: initState,
    extraReducers: (builder) => builder
        // ---------- FETCH All CONTACTS--------------
        .addCase(fetchAll.fulfilled, (state, action) => {
            state.isLoading = false;
            state.contacts = action.payload;
        })
        // ---------- ADD NEW CONTACT ----------------
        .addCase(addContactNew.fulfilled, (state, action) => {
            state.isLoading = false;
            state.contacts.push(action.payload);
            // state.contacts.unshift(action.payload);
            // state.contacts = [action.payload, ...state.contacts];
        })
        // ---------- DELETE CONTACT -----------------
        .addCase(deleteContactById.fulfilled, (state, action) => {
            state.isLoading = false;
            state.contacts = state.contacts.filter(
                contact => contact.id !== action.payload.id
            );
            // const deleteContactIndex = state.contacts.findIndex(contact => contact.id === action.payload.id)
            // state.contacts.splice(deleteContactIndex, 1)
        })

        .addMatcher(isAnyOf(fetchAll.pending, addContactNew.pending, deleteContactById.pending ),
            state => {
                state.isLoading = true;
                state.error = null;
            }
        )
        .addMatcher(isAnyOf(fetchAll.rejected, addContactNew.rejected, deleteContactById.rejected ),
            (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            }
        )
});


export const contactsReducer = contactsSlice.reducer;
