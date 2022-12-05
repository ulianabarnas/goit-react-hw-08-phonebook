import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  fetchContacts,
} from 'redux/contacts/operations';

import {
  addContactSuccessReducer,
  deleteContactSuccessReducer,
  fetchContactsSuccessReducer,
  fulfilledReducer,
  pendingReducer,
  rejectedReducer,
} from './caseRedusers';

const extraActions = [addContact, deleteContact, fetchContacts];

const getActions = type => extraActions.map(action => action[type]);

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, fetchContactsSuccessReducer)
      .addCase(addContact.fulfilled, addContactSuccessReducer)
      .addCase(deleteContact.fulfilled, deleteContactSuccessReducer)
      .addMatcher(isAnyOf(...getActions('pending')), pendingReducer)
      .addMatcher(isAnyOf(...getActions('rejected')), rejectedReducer)
      .addMatcher(isAnyOf(...getActions('fulfilled')), fulfilledReducer),
});

export const contactsReducer = contactsSlice.reducer;
