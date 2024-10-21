import { createSelector } from '@reduxjs/toolkit';

// Select all campers from the store
export const selectAllCampers = (state) => state.campers.items;

// Select loading state
export const selectCampersLoading = (state) => state.campers.loading;

// Select error state
export const selectCampersError = (state) => state.campers.error;

// Select a camper by ID
export const selectCamperById = (state, camperId) => {
    return state.campers.items.find((camper) => camper.id === camperId);
};

// Select filtered campers based on the filters in the state
export const selectFilteredCampers = createSelector(
    [selectAllCampers, (state) => state.filters],
    (campers, filters) => {
        const { location, vehicleType, features } = filters;

        return campers.filter((camper) => {
            const matchesLocation = location
                ? camper.location.toLowerCase().includes(location.toLowerCase())
                : true;

            const matchesVehicleType = vehicleType
                ? camper.form === vehicleType
                : true;

            const matchesFeatures = features.length
                ? features.every((feature) => camper[feature])
                : true;

            return matchesLocation && matchesVehicleType && matchesFeatures;
        });
    }
);
