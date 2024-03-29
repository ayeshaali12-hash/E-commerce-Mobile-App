import { createSlice } from "@reduxjs/toolkit";

const WishlistSlice = createSlice({
    name: 'wishlist',
    initialState:{
        data:[]
    },
    reducers:{
        addItemToWishlist(state, action){
            let tempData = state.data;
            let isItemExist = false;
            tempData.map((item)=>{
                if(item.id==action.payload.id){
                    isItemExist = true;
                    console.log(action.payload.id)
                }
            });
            if(!isItemExist){
                tempData.push(action.payload);
            }
            state.data = tempData;
        },

        // RemoveItemFromWishlist(state, action){
        //     let tempData = state.data;
        //     console.log("tempData",tempData);
        // }

        RemoveItemFromWishlist(state, action){
            let tempData = state.data;
            tempData.splice(action.payload, 1)
            state.data = tempData;
        },

    },
});
export const {addItemToWishlist, RemoveItemFromWishlist} = WishlistSlice.actions;
export default WishlistSlice.reducer;