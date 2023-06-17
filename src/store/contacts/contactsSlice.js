import { createSlice, nanoid } from "@reduxjs/toolkit";
import {initialState} from './initialState'

export const contactsSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    deleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(({ id }) => id !== payload);
    },
    addContact: (state, { payload }) => {
      state.contacts.push({
        name: payload.name,
        number: payload.number,
        id: nanoid(),
      });
      },
      filterContact: (state, {payload}) => {
          state.filter = payload;          
    }
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { deleteContact, addContact, filterContact } = contactsSlice.actions;