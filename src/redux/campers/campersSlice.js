import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers, fetchCamperById } from './campersOperations.js';

const initialState = {
    items: [],
    loading: false,
    error: null,
};

const campersSlice = createSlice({
    name: 'campers',
    initialState,
    extraReducers: (builder) => {
        // Fetch all campers
        builder
            .addCase(fetchCampers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCampers.fulfilled, (state, action) => {
                state.items = action.payload;
                state.loading = false;
            })
            .addCase(fetchCampers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });

        // Fetch camper by ID
        builder
            .addCase(fetchCamperById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCamperById.fulfilled, (state, action) => {
                const camperIndex = state.items.findIndex((camper) => camper.id === action.payload.id);
                if (camperIndex !== -1) {
                    state.items[camperIndex] = action.payload;
                } else {
                    state.items.push(action.payload);
                }
                state.loading = false;
            })
            .addCase(fetchCamperById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const campersReducer = campersSlice.reducer;
