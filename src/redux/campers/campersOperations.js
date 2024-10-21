import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the base URL for the API
const BASE_URL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers';

// Fetch all campers
export const fetchCampers = createAsyncThunk(
    'campers/fetchCampers',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get(`${BASE_URL}`);
            return response.data.items;  // items from the API
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

// Fetch camper by ID
export const fetchCamperById = createAsyncThunk(
    'campers/fetchCamperById',
    async (camperId, thunkAPI) => {
        try {
            const response = await axios.get(`${BASE_URL}/${camperId}`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
