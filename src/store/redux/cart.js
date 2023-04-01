import { createSlice } from "@reduxjs/toolkit";

const initalCartState = {
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {},
    clearCart: () => {}
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initalCartState,
    reducers: {
        add(state, action) {

            const updatedTotalAmount = state.totalAmount + action.payload.price * action.payload.amount;

            const existingCartItemIndex = state.items.findIndex(
                (item) => item.id === action.payload.id
              );
              const existingCartItem = state.items[existingCartItemIndex];
              let updatedItems;
          
              if (existingCartItem) {
                const updatedItem = {
                  ...existingCartItem,
                  amount: existingCartItem.amount + action.payload.amount,
                };
                updatedItems = [...state.items];
                updatedItems[existingCartItemIndex] = updatedItem;
              } else {
                updatedItems = state.items.concat(action.payload);
              }

              console.log(updatedTotalAmount)
              state.items= updatedItems;
            state.totalAmount= updatedTotalAmount

             

        },

        remove(state, action) {
            const existingCartItemIndex = state.items.findIndex(
                (item) => item.id === action.payload
              );
              const existingItem = state.items[existingCartItemIndex];
              const updatedTotalAmount = state.totalAmount - existingItem.price;
              let updatedItems;
              if (existingItem.amount === 1) {
                updatedItems = state.items.filter(item => item.id !== action.id);
              } else {
                const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
                updatedItems = [...state.items];
                updatedItems[existingCartItemIndex] = updatedItem;
              }
              state.items = updatedItems;
              state.totalAmount= updatedTotalAmount
             
        },

        clear(state) {
            state.items = [];
            state.removeItem = 0
           
        }
    }
})

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;