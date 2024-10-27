export const selectFavoriteIds = (state) => state.favorites;

export const selectIsFavorite = (camperId) => (state) =>
  state.favorites.includes(camperId);
