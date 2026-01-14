import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import api from "../api/api";
export const fetchProductsData = createAsyncThunk(
  "products/fetchProductItems",
  async () => {
    try {
      const response = await api.get("/");
      return response.data;
    } catch (err) {
      throw err.response?.data?.error || err.message;
    }
  }
);
const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    isLoading: false,
    error: "",
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProductsData.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isLoading = false;
        toast("Products fetched Successfully");
      })
      .addCase(fetchProductsData.rejected, (state, action) => {
        toast("Error While fetching Products", {
          type: "error",
        });
        state.isLoading = false;
        state.error = action.payload || "Something Went Wrong";
        toast(action.payload);
      });
  },
});

export default productSlice.reducer;

// export const fetchProducts = () => (dispatch) => {
//   dispatch(fetchProductsState());
//   fetch(`https://fakestoreapi.com/products`)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       dispatch(updateAllProducts(data));
//     })
//     .catch((err) => {
//       dispatch(fetchProductsError(err.message));
//     });
// };

//create multiple selector and use only exported function in another file
export const getAllProducts = (s) => s?.products.products;
export const getProductLoading = (s) => s?.products.isLoading;
export const getProductError = (s) => s?.products.error;

export const { updateAllProducts, fetchProductsState, fetchProductsError } =
  productSlice.actions;
