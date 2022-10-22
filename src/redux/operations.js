import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Notiflix from 'notiflix';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      Notiflix.Notify.success('Contact load seccess');
      return response.data;
    } catch (e) {
      Notiflix.Notify.console.error('Error! We cannot load contacts');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', contact);
      Notiflix.Notify.success('Contact add seccess');
      return response.data;
    } catch (e) {
      Notiflix.Notify.console.error('Error! Try again!');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      Notiflix.Notify.success('Contact delete seccess');
      return response.data;
    } catch (e) {
      Notiflix.Notify.console.error('Error! Try again!');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
