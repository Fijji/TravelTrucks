import { configureStore } from '@reduxjs/toolkit';
import { campersReducer } from './campers/campersSlice';
import filtersReducer from './filters/filtersSlice'; // Import the filters slice

export const store = configureStore({
    reducer: {
        campers: campersReducer,
        filters: filtersReducer,  // Add filters reducer to manage filter state
    },
});
