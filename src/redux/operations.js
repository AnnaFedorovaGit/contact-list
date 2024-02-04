import { createAsyncThunk } from "@reduxjs/toolkit"
import { fetchContacts, addContact, deleteContact } from '../services/api'


export const fetchAll = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => { 
    try {
        const contacts = await fetchContacts();
        return contacts;
    } catch (error) {
        // !!!rejectWithValue - обязательно
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const addContactNew = createAsyncThunk('contacts/addContact', async (newContact, thunkAPI) => { 
    try {
        const contact = await addContact(newContact);
        return contact;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const deleteContactById = createAsyncThunk('contacts/deleteContact', async (contactId, thunkAPI) => { 
    try {
        const deletedContact = await deleteContact(contactId);
        return deletedContact;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});
