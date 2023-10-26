import { createSlice } from "@reduxjs/toolkit"


const cartSlice=createSlice(
    {
        name:"cart",
        initialState:{
            Items:[]
        },
        reducers:{
            addItem:(state,action)=>{
                state.Items.push(action.payload)

            },
            removeItem:(state)=>{
                state.Items.pop();
            },
            clearCart:(state)=>{
                console.log("state is",state.Items)
               // state.Items=[];
                // state.Items.length=0
            }
        }
    }
)

export default cartSlice.reducer;

export const {addItem,removeItem,clearCart}=cartSlice.actions;