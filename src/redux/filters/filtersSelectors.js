import { createSelector } from '@reduxjs/toolkit';

export const selectCampers = (state) => state.campers.items;
export const selectLocationFilter = (state) => state.filters.location;
export const selectVehicleTypeFilter = (state) => state.filters.vehicleType;
export const selectFeaturesFilter = (state) => state.filters.features;

export const selectFilteredCampers = createSelector(
    [selectCampers, selectLocationFilter, selectVehicleTypeFilter, selectFeaturesFilter],
    (campers, location, vehicleType, features) => {
        return campers.filter((camper) => {
            const matchesLocation = location ? camper.location.includes(location) : true;
            const matchesVehicleType = vehicleType ? camper.type === vehicleType : true;
            const matchesFeatures = features.length > 0
                ? features.every((feature) => camper.features.includes(feature))
                : true;

            return matchesLocation && matchesVehicleType && matchesFeatures;
        });
    }
);
