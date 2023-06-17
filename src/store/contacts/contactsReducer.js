import { createReducer } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { addAction, deleteAction } from "./actions";

export const contactsReducer = createReducer(initialState, {
   [deleteAction]: (state, {payload}) => {      
      state.contacts = state.contacts.filter(({ id }) => id !== payload);       
    },
    [addAction]: (state, {payload}) => {
       state.contacts.push(payload) 
    },

})