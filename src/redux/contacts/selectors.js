import { createSelector } from '@reduxjs/toolkit';


// export const selectPhonebook = state => state.contacts;

export const selectContacts = state => state.contacts.contacts;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.filter.filter;
// 
// export const selectPhonebookContacts = createSelector(selectPhonebook, state => state.contacts);
// export const selectPhonebookIsLoading = createSelector(selectPhonebook, state => state.isLoading);
// export const selectPhonebookError = createSelector(selectPhonebook, state => state.error);
// export const selectPhonebookFilter = createSelector(selectPhonebook, state => state.filter);

//

export const filteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  }
);

