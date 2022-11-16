import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchContacts,
  createContact,
  deleteContact,
} from '../../api/contacts';

export const contactsFetchStart = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      return await fetchContacts();
    } catch (error) {
      return rejectWithValue(error.data);
    }
  }
);

export const contactCreateThunk = createAsyncThunk(
  'contacts/addContact',
  async (data, { dispatch, rejectWithValue }) => {
    try {
      await createContact(data);
      await dispatch(contactsFetchStart());
    } catch (error) {
      return rejectWithValue(error.data);
    }
  }
);

export const contactDeleteThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (data, { dispatch, rejectWithValue }) => {
    try {
      await deleteContact(data);
      await dispatch(contactsFetchStart());
    } catch (error) {
      return rejectWithValue(error.data);
    }
  }
);
