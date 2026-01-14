import { produce } from "immer";
import {
  ADDWISHLISTITEM,
  DECREASEWISHLISTQTY,
  INCREASEWISHLISTQTY,
  REMOVEWISHLISTITEM,
} from "../ActionCreators/WishListActionCreators";
import { createSelector } from "@reduxjs/toolkit";

let initialState = {
  wishList: [],
};

const wishListReducer = (originalState = initialState, action) =>
  produce(originalState, (state) => {
    switch (action.type) {
      case ADDWISHLISTITEM: {
        const { ProductID } = action.payload;

        const index = state.wishList.findIndex(
          (item) => item.ProductID === ProductID
        );

        if (index !== -1) {
          state.wishList[index].quanty += 1;
        } else {
          state.wishList.push({ ...action.payload, quanty: 1 });
        }
        break;
      }

      case REMOVEWISHLISTITEM: {
        const { ProductID } = action.payload;

        const index = state.wishList.findIndex(
          (item) => item.ProductID === ProductID
        );

        if (index !== -1) {
          state.wishList.splice(index, 1);
        }
        break;
      }

      case INCREASEWISHLISTQTY: {
        const { ProductID } = action.payload;

        const index = state.wishList.findIndex(
          (item) => item.ProductID === ProductID
        );

        if (index !== -1) {
          state.wishList[index].quanty += 1;
        }
        break;
      }

      case DECREASEWISHLISTQTY: {
        const { ProductID } = action.payload;

        const index = state.wishList.findIndex(
          (item) => item.ProductID === ProductID
        );

        if (index !== -1) {
          if (state.wishList[index].quanty > 1) {
            state.wishList[index].quanty -= 1;
          } else {
            state.wishList.splice(index, 1);
          }
        }
        break;
      }

      default:
        break;
    }
  });


const getWishListItems = (s) => {
  const cartItems = s.wishlists?.wishList;
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
export const getAllWishListItems = createSelector(getWishListItems, (state) => state);



export default wishListReducer;
