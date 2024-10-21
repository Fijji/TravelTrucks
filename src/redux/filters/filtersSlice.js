import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        location: '',
        vehicleType: '',
        features: [],
    },
    reducers: {
        setLocationFilter(state, action) {
            state.location = action.payload;
        },
        setVehicleTypeFilter(state, action) {
            state.vehicleType = action.payload;
        },
        setFeaturesFilter(state, action) {
            state.features = action.payload;
        },
    },
});

export const { setLocationFilter, setVehicleTypeFilter, setFeaturesFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
