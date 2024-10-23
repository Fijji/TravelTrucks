import { createSelector } from "@reduxjs/toolkit";
import { selectAllCampers } from "../campers/campersSelectors.js";

// Selector to get the selected features from the state
export const selectFeaturesFilter = (state) => state.filters.features;

// Selector to get the selected vehicle type from the state
export const selectVehicleTypeFilter = (state) => state.filters.vehicleType;

// Selector to get the selected location from the state
export const selectLocationFilter = (state) => state.filters.location;

// Select all available features based on the filtered campers
export const selectAvailableFeatures = createSelector(
    [selectAllCampers, selectFeaturesFilter, selectVehicleTypeFilter, selectLocationFilter],
    (campers, selectedFeatures, selectedVehicleType, selectedLocation) => {
        const availableFeatures = new Set();

        // Filter campers based on selected filters to find out what features are available
        const filteredCampers = campers.filter((camper) => {
            const matchesLocation = selectedLocation
                ? camper.location.toLowerCase().includes(selectedLocation.toLowerCase())
                : true;

            const matchesVehicleType = selectedVehicleType
                ? camper.form === selectedVehicleType
                : true;

            const matchesFeatures = selectedFeatures.length
                ? selectedFeatures.every((feature) => camper[feature] === true)
                : true;

            return matchesLocation && matchesVehicleType && matchesFeatures;
        });

        // Go through the filtered campers and add available features to the set
        filteredCampers.forEach((camper) => {
            if (camper.AC) availableFeatures.add("AC");
            if (camper.kitchen) availableFeatures.add("kitchen");
            if (camper.bathroom) availableFeatures.add("bathroom");
            if (camper.water) availableFeatures.add("water");
            if (camper.radio) availableFeatures.add("radio");
            if (camper.refrigerator) availableFeatures.add("refrigerator");
            if (camper.microwave) availableFeatures.add("microwave");
            if (camper.gas) availableFeatures.add("gas");
        });

        return Array.from(availableFeatures);
    }
);

// Combine all the filters to select filtered campers
export const selectFilteredCampers = createSelector(
    [selectAllCampers, selectFeaturesFilter, selectVehicleTypeFilter, selectLocationFilter],
    (campers, selectedFeatures, selectedVehicleType, selectedLocation) => {
        return campers.filter((camper) => {
            // Match based on location
            const matchesLocation = selectedLocation
                ? camper.location.toLowerCase().includes(selectedLocation.toLowerCase())
                : true;

            // Match based on selected features
            const matchesFeatures = selectedFeatures.length
                ? selectedFeatures.every((feature) => camper[feature] === true)
                : true;

            // Match based on vehicle type
            const matchesVehicleType = selectedVehicleType
                ? camper.form === selectedVehicleType
                : true;

            return matchesLocation && matchesVehicleType && matchesFeatures;
        });
    }
);
