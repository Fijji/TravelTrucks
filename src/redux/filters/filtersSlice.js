import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    location: "",
    vehicleType: "",
    features: [],
  },
  reducers: {
    setLocationFilter(state, action) {
      state.location = action.payload;
    },
    setVehicleTypeFilter(state, action) {
      state.vehicleType = action.payload;
    },
    addFeatureFilter(state, action) {
      if (!state.features.includes(action.payload)) {
        state.features.push(action.payload);
      }
    },
    removeFeatureFilter(state, action) {
      state.features = state.features.filter(
        (feature) => feature !== action.payload,
      );
    },
    clearFeaturesFilter(state) {
      state.features = [];
    },
  },
});

export const {
  setLocationFilter,
  setVehicleTypeFilter,
  addFeatureFilter,
  removeFeatureFilter,
  clearFeaturesFilter,
} = filtersSlice.actions;

export default filtersSlice.reducer;
