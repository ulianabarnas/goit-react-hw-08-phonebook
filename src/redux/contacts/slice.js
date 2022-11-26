import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from 'redux/operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      return state.filter(item => item.id !== action.payload);
      // const index = state.items.findIndex(
      //   task => task.id === action.payload.id
      // );
      // state.items.splice(index, 1);
    },
    [deleteContact.rejected]: handleRejected,
    //     addContact: {
    //       reducer(state, action) {
    //         state.push(action.payload);
    //       },
    //       prepare(contact) {
    //         return {
    //           payload: {
    //             ...contact,
    //             id: nanoid(),
    //           },
    //         };
    //       },
    //     },
    //     deleteContact(state, action) {
    //       return state.filter(item => item.id !== action.payload);
    //     },
  },
});

export const contactsReducer = contactsSlice.reducer;
