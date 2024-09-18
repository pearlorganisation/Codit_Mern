import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartData: [],
    defaultPrice: 0,
    isOrderCheckout: false,
    isCartOpen: false,
  },
  reducers: {
    toggleCart(state, action) {
      state.isCartOpen = action.payload;
    },

    addItem(state, action) {
      const newItemId = action.payload.id;
      const existingItem = state.cartData.find((item) => item.id === newItemId);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.cartData.push(action.payload);
      }
    },

    removeItem(state, action) {
      state.cartData = state.cartData.filter(
        (item) => item.id !== action.payload
      );
    },

    incrementItem(state, action) {
      state.cartData = state.cartData.map((item) => {
        if (item.id === action.payload) {
          item.quantity++;
        }
        return item;
      });
    },

    decrementItem(state, action) {
      state.cartData = state.cartData
        .map((item) => {
          if (item.id === action.payload) {
            item.quantity--;
          }
          return item;
        })
        .filter((item) => item.quantity !== 0);
    },
  },
});

export const { addItem, decrementItem, incrementItem, removeItem } =
  cartSlice.actions;
export default cartSlice.reducer;

// addToCart: (state, action) => {
//   const { _id, price } = action.payload;
//   let existingItem = state.cartData.find((item) => item.id === _id);

//   if (existingItem) {
//     existingItem.quantity += 1;
//     existingItem.price = (existingItem.quantity * price).toFixed(2);
//   } else {
//     state.cartData.push({
//       ...action.payload,
//       quantity: 1,
//       price: price,
//     });
//   }
// },
// decreaseQuantity: (state, action) => {
//   const { _id, price } = action.payload;
//   console.log("Decrement payload", action.payload);
//   let existingItem = state.cartData.find((item) => item.id === _id);

//   if (existingItem) {
//     existingItem.quantity -= 1;

//     if (existingItem.quantity < 1) {
//       state.cartData = state.cartData.filter((item) => item.id !== _id);
//     } else {
//       existingItem.price = (existingItem.quantity * price).toFixed(2);
//     }
//   }
// },
// increaseQuantity: (state, action) => {
//   const { _id, price } = action.payload;
//   console.log("Increment payload", action.payload);
//   let existingItem = state.cartData.find((item) => item.id === _id);

//   if (existingItem) {
//     existingItem.quantity += 1;
//     existingItem.price = (existingItem.quantity * price).toFixed(2);
//   }
// },
