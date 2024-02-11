import { createAsyncThunk } from "@reduxjs/toolkit";
import { requestDeleteContact, requestAddContact, requestFetchContacts } from '../../services/api';


export const fetchAll = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => { 
    try {
        const contacts = await requestFetchContacts();
        return contacts;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const addContactNew = createAsyncThunk('contacts/addContact', async (newContact, thunkAPI) => { 
    try {
        const contact = await requestAddContact(newContact);
        return contact;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const deleteContactById = createAsyncThunk('contacts/deleteContact', async (contactId, thunkAPI) => { 
    try {
        const deletedContact = await requestDeleteContact(contactId);
        return deletedContact;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

