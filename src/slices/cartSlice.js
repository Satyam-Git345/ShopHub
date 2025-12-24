import { createSlice } from "@reduxjs/toolkit";
import { productsList } from "./Products";
import { produce } from "immer";
const initialState = {
  cartItems: [],
  products: productsList,
  appliedCoupon: null,
  discount: 0,
};

// export const cartReducer = (originalState = initialState, action) => {
//   return produce(originalState, (state) => {
//     switch (action.type) {
//       case ADDCARTITEM: {
//         const { ProductID } = action.payload;
//         const itemInCartIndex = state.cartItems.findIndex(
//           (cartItem) => cartItem.ProductID == ProductID
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
//         const { ProductID } = action.payload;
//         const foundIndex = state.cartItems.findIndex(
//           (cartitem) => cartitem.ProductID === ProductID
//         );
//         if (foundIndex !== -1) {
//           return state.cartItems.splice(foundIndex, 1);
//         }
//         break;
//       }
//       case INCREASECARTQTY: {
//         const { ProductID } = action.payload;
//         const foundIndex = state.cartItems.findIndex(
//           (cartitem) => cartitem.ProductID === ProductID
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
//         const { ProductID } = action.payload;
//         const foundIndex = state.cartItems.findIndex(
//           (cartitem) => cartitem.ProductID === ProductID
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

const findCartItemIndex = (cartItems, ProductID) =>
  cartItems.findIndex((cartItem) => cartItem.ProductID === ProductID);

const cartslice = createSlice({
  name: "Cart",
  initialState: initialState,
  reducers: {
    AddNewCartItem(state, action) {
      const { ProductID } = action.payload;
      const itemInCartIndex = findCartItemIndex(state.cartItems, ProductID);
      if (itemInCartIndex !== -1) state.cartItems[itemInCartIndex].quanty += 1;
      else state.cartItems.push({ ...action.payload, quanty: 1 });
    },
    RemoveCartItem(state, action) {
      const { ProductID } = action.payload;
      const foundIndex = findCartItemIndex(state.cartItems, ProductID);
      if (foundIndex !== -1) return state.cartItems.splice(foundIndex, 1);
    },
    increaseCartItemQty(state, action) {
      const { ProductID } = action.payload;
      const foundIndex = findCartItemIndex(state.cartItems, ProductID);
      if (foundIndex !== -1) state.cartItems[foundIndex].quanty += 1;
      else console.log("Item not prseent in cart");
    },
    decreaseCartItemQty(state, action) {
      const { ProductID } = action.payload;
      const foundIndex = findCartItemIndex(state.cartItems, ProductID);
      if (foundIndex !== -1 && state.cartItems[foundIndex].quanty > 1)
        state.cartItems[foundIndex].quanty -= 1;
      else if (foundIndex !== -1 && state.cartItems[foundIndex].quanty == 1)
        state.cartItems.splice(foundIndex, 1);
    },
  },
});

export const {
  AddNewCartItem,
  RemoveCartItem,
  increaseCartItemQty,
  decreaseCartItemQty,
} = cartslice.actions;
export default cartslice.reducer;

