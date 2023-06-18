import { createAsyncThunk } from "@reduxjs/toolkit";
// import { deleteContact, getContacts, postContact } from "api/contacts";
import  axios  from "axios";

axios.defaults.baseURL = 'https://648d72132de8d0ea11e7d858.mockapi.io';

export const getContactsThunk = createAsyncThunk(
  'contacts/getContacts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios('/contacts');
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/contacts`, contact);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteСontact',
  async (contactId, { rejectWithValue }) => {
    try {
      await axios.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// export const getContactsThunk = createAsyncThunk(
//     'contacts/getContacts',
//     async () => {
//         return await getContacts()
//     }
// )

// export const postContactThunk = createAsyncThunk(
//     'contacts/postContact',
//     async (contact) => {
//         return await postContact(contact)
//     }
// )

// export const deleteContsctThunk = createAsyncThunk(
//     'contacts/deleteContact',
//     async (id) => {
//         return await deleteContact(id)
//     }
// )