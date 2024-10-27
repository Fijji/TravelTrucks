import { createSelector } from "@reduxjs/toolkit";
import { selectAllCampers } from "../campers/campersSelectors.js";

export const selectFeaturesFilter = (state) => state.filters.features;

export const selectVehicleTypeFilter = (state) => state.filters.vehicleType;

export const selectLocationFilter = (state) => state.filters.location;

const vehicleTypeMapping = {
  Van: "panelTruck",
  "Fully Integrated": "fullyIntegrated",
  Alcove: "alcove",
};

const featureKeyMapping = {
  AC: "AC",
  Automatic: "transmission",
  Kitchen: "kitchen",
  Bathroom: "bathroom",
  TV: "TV",
  Radio: "radio",
  Refrigerator: "refrigerator",
  Microwave: "microwave",
  Gas: "gas",
  Water: "water",
};

export const selectFilteredCampers = createSelector(
  [
    selectAllCampers,
    selectFeaturesFilter,
    selectVehicleTypeFilter,
    selectLocationFilter,
  ],
  (campers, selectedFeatures, selectedVehicleType, selectedLocation) => {
    return campers.filter((camper) => {
      const matchesLocation = selectedLocation
        ? camper.location.toLowerCase().includes(selectedLocation.toLowerCase())
        : true;

      const matchesFeatures = selectedFeatures.length
        ? selectedFeatures.every((feature) => {
            const jsonKey = featureKeyMapping[feature];
            if (feature === "Automatic") {
              return camper.transmission === "automatic";
            }
            return camper[jsonKey] === true;
          })
        : true;

      const matchesVehicleType = selectedVehicleType
        ? camper.form === vehicleTypeMapping[selectedVehicleType]
        : true;

      return matchesLocation && matchesVehicleType && matchesFeatures;
    });
  },
);
