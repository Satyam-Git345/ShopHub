import { createSlice } from "@reduxjs/toolkit";
import { productsList } from "./Products";

// const productReducer = (state = [], action) => {
//   return state;
// };

// export default productReducer;

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading:false,
    error:''
  },
  reducers: {
    fetchProductsState(state){
        state.loading=true
    }, 
    fetchProductsError(state,action){
        state.loading=false
        state.error=action.payload
    }, 
    updateAllProducts(state, action) {
      state.products =action.payload;
      state.loading=false
    },
  },
});

export default productSlice.reducer;

export const { updateAllProducts,fetchProductsState,fetchProductsError} = productSlice.actions;
