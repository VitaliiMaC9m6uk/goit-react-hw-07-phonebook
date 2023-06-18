import { createSlice } from "@reduxjs/toolkit";
import {initialState} from './initialState'
import { addContactThunk, deleteContactThunk, getContactsThunk } from "./contactsThunks";




export const contactsSlice = createSlice({
  name: 'contact',
  initialState:initialState.contacts,
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(getContactsThunk.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.isLoading = false;
      })
      .addCase(getContactsThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(addContactThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(addContactThunk.fulfilled, (state, { payload }) => {
        state.items.push(payload);
        state.isLoading = false;
      })
      .addCase(addContactThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(deleteContactThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(
          contact => contact.id !== payload
        );
        state.isLoading = false;
      })
      .addCase(deleteContactThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },  
});

export const contactsReducer = contactsSlice.reducer;