import { createSlice } from "@reduxjs/toolkit";

const loadFavoritesFromLocalStorage = () => {
  const storedFavorites = localStorage.getItem("favorites");
  return storedFavorites ? JSON.parse(storedFavorites) : [];
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: loadFavoritesFromLocalStorage(),
  reducers: {
    addToFavorites: (state, action) => {
      if (!state.includes(action.payload)) {
        state.push(action.payload);
        localStorage.setItem("favorites", JSON.stringify(state));
      }
    },
    removeFromFavorites: (state, action) => {
      const updatedState = state.filter((id) => id !== action.payload);
      localStorage.setItem("favorites", JSON.stringify(updatedState));
      return updatedState;
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
