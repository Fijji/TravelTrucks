export const selectAllCampers = (state) => state.campers.items;

export const selectCampersLoading = (state) => state.campers.loading;

export const selectCampersError = (state) => state.campers.error;

export const selectCamperById = (state, camperId) => {
    return state.campers.items.find((camper) => camper.id === camperId);
};
