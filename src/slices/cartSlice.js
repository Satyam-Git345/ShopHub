import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import { productsList } from "./Products";
import {toast } from 'react-toastify';
const initialState = {
  cartItems: [],
  products: productsList,
  appliedCoupon: null,
  discount: 0,
  ApiCarts:null,
  loading: false,
  error: "",
};

export const fetchCartItemData = createAsyncThunk(
  "cart/fetchCartItems",
  async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/carts/1`);
      return response.json();
    } catch (err) {
      throw err.messaage;
    }
  }
);

// export const cartReducer = (originalStat = initialState, action) => {
//   return produce(originalState, (state) => {
//     switch (action.type) {
//       case ADDCARTITEM: {
//         const { id } = action.payload;
//         const itemInCartIndex = state.cartItems.findIndex(
//           (cartItem) => cartItem.id == id
//         );
//         if (itemInCartIndex !== -1) {
//           state.cartItems[itemInCartIndex].quanty += 1;
//           break;
//         } else {
//           state.cartItems.push({ ...action.payload, quanty: 1 });
//           break;
//         }
//       }
//       case REMOVECARTITEM: {
//         const { id } = action.payload;
//         const foundIndex = state.cartItems.findIndex(
//           (cartitem) => cartitem.id === id
//         );
//         if (foundIndex !== -1) {
//           return state.cartItems.splice(foundIndex, 1);
//         }
//         break;
//       }
//       case INCREASECARTQTY: {
//         const { id } = action.payload;
//         const foundIndex = state.cartItems.findIndex(
//           (cartitem) => cartitem.id === id
//         );
//         if (foundIndex !== -1) {
//           state.cartItems[foundIndex].quanty += 1;
//           break;
//         } else {
//           console.log("Item not prseent in cart");
//           break;
//         }
//       }
//       case DECREASECARTQTY: {
//         const { id } = action.payload;
//         const foundIndex = state.cartItems.findIndex(
//           (cartitem) => cartitem.id === id
//         );
//         if (foundIndex !== -1 && state.cartItems[foundIndex].quanty > 1) {
//           state.cartItems[foundIndex].quanty -= 1;
//           break;
//         } else if (
//           foundIndex !== -1 &&
//           state.cartItems[foundIndex].quanty == 1
//         ) {
//           state.cartItems.splice(foundIndex, 1);
//           break;
//         }
//         break;
//       }
//       case APPLY_COUPON: {
//         return {
//           ...state,
//           appliedCoupon: action.payload.coupon,
//           discount: action.payload.discount,
//         };
//       }
//       case REMOVE_COUPON: {
//         return {
//           ...state,
//           appliedCoupon: null,
//           discount: 0,
//         };
//       }
//     }
//     return state;
//   });
// };

const findCartItemIndex = (cartItems, id) =>
  cartItems.findIndex((cartItem) => cartItem.ProductID == id);

const cartslice = createSlice({
  name: "Cart",
  initialState: initialState,
  reducers: {
    AddNewCartItem(state, action) {
      const { id } = action.payload;
      const itemInCartIndex = findCartItemIndex(state.cartItems, id);
      if (itemInCartIndex !== -1) state.cartItems[itemInCartIndex].quanty += 1;
      else state.cartItems.push({ ...action.payload, quanty: 1 });
    },
    RemoveCartItem(state, action) {
      const { id } = action.payload;
      const foundIndex = findCartItemIndex(state.cartItems, id);
      if (foundIndex !== -1) return state.cartItems.splice(foundIndex, 1);
    },
    increaseCartItemQty(state, action) {
      const { id } = action.payload;
      const foundIndex = findCartItemIndex(state.cartItems, id);
      if (foundIndex != -1) state.cartItems[foundIndex].quanty += 1;
      else console.log("Item not prseent in cart");
    },
    decreaseCartItemQty(state, action) {
      const { id } = action.payload;
      const foundIndex = findCartItemIndex(state.cartItems, id);
      if (foundIndex !== -1 && state.cartItems[foundIndex].quanty > 1)
        state.cartItems[foundIndex].quanty -= 1;
      else if (foundIndex !== -1 && state.cartItems[foundIndex].quanty == 1)
        state.cartItems.splice(foundIndex, 1);
    },

    setCurrentCartItems(state, action) {
      state.cartItems = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCartItemData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCartItemData.fulfilled, (state, action) => {
        state.loading = false;
        state.ApiCarts = action.payload;
        toast("carts fetched Successfully");
      })
      .addCase(fetchCartItemData.rejected, (state, action) => {
        toast("Error While fetching carts",{
            type:'error'
        });
        state.loading = false;
        state.error = action.payload || "Something went Wrong";
      });
  },
});

const getCartItems = (s) => {
  const cartItems = s.carts?.cartItems;
  const products = s.products?.products;

  return products
    .filter((product) =>
      cartItems.some((cartitem) => cartitem.ProductID === product.id)
    )
    .map((item) => {
      const found = cartItems.find(
        (cartitem) => cartitem.ProductID === item.id
      );
      return { ...item, quanty: found.quanty };
    });
};
//memoize a selecter that return new state using createSelector
export const getAllCartItems = createSelector(getCartItems, (state) => state);

export const {
  AddNewCartItem,
  RemoveCartItem,
  increaseCartItemQty,
  decreaseCartItemQty,
  setCurrentCartItems,
} = cartslice.actions;
export default cartslice.reducer;


export const getAllCarts = (s) => s?.carts?.ApiCarts;
export const getCartLoading = (s) => s?.carts.loading;
export const getCartError = (s) => s?.carts.error;
