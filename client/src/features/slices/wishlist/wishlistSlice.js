import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlistData: [],
};

export const wishListSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishList(state, action) {
      const newItemId = action.payload.id;
      const existingItem = state.wishlistData.find(
        (item) => item.id === newItemId
      );

      if (existingItem) {
        state.wishlistData.pop(action.payload);
      } else {
        state.wishlistData.push(action.payload);
      }

      localStorage.setItem("wishlist", JSON.stringify(state.wishList));
    },
    removeFromWishList(state, action) {
      const newWishlist = state.wishlistData.filter(
        (product) => product?.id !== action.payload.id
      );
      state.wishlistData = newWishlist;
      localStorage.setItem("wishlist", JSON.stringify(state.wishList));
    },

    removeItemFromWishlist(state, action) {
      state.wishlistData = state.wishlistData.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addToWishList, removeFromWishList, removeItemFromWishlist } =
  wishListSlice.actions;
export default wishListSlice.reducer;
