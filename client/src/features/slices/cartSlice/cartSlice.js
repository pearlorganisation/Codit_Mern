import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartData: [],
    defaultPrice: 0,
    isOrderCheckout: false,
  },
  reducers: {
    addToCart: (state, action) => {
      console.log("jfsgjf");
      const { _id, price } = action.payload;
      let existingItem = state.cartData.find((item) => item._id === _id);

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.price = (existingItem.quantity * price).toFixed(2);
      } else {
        state.cartData.push({
          ...action.payload,
          quantity: 1,
          price: price, 
        });
      }
    },
    decreaseQuantity:(state,action)=>{
        const { _id, price } = action.payload;
        let existingItem = state.cartData.find((item) => item._id === _id);


        if (existingItem) {
            existingItem.quantity -= 1;
    
            if (existingItem.quantity < 1) {
              state.cartData = state.cartData.filter((item) => item._id !== _id);
            } else {
              existingItem.price = (existingItem.quantity * price).toFixed(2);
            }

         
         
        
  
    }
},
    increaseQuantity:(state,action)=>{
        const { _id, price } = action.payload;
        let existingItem = state.cartData.find((item) => item._id === _id);

            
             if(existingItem)
             {
            existingItem.quantity += 1;
            existingItem.price =(existingItem.quantity * price).toFixed(2);

             }
    

    }
  }
});

export const { addToCart , increaseQuantity , decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
