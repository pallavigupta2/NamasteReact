import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[],
    },
    reducers:{
        addItems:(state,action)=>{
            state.items.push(action.payload)
        },
        removeItems:(state,action)=>{
            state.items.pop()
        },
        clearItems:(state,action)=>{
            state.items.length = 0
        }
    }
})
//console.log('CartSlice',CartSlice)
export const {addItems,removeItems,clearItems} = CartSlice.actions
export default CartSlice.reducer;

