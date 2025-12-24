import { produce } from "immer";
import {
  ADDWISHLISTITEM,
  DECREASEWISHLISTQTY,
  INCREASEWISHLISTQTY,
  REMOVEWISHLISTITEM,
} from "../ActionCreators/WishListActionCreators";

let initialState = {
  wishList: [],
};

const wishListReducer = (originalState = initialState, action) => {
  return produce(originalState, (state) => {
    switch (action.type) {
      case ADDWISHLISTITEM: {
        console.log("action.payload", action.payload);
        const { ProductID } = action.payload;
        const itemInwishlistindex = state.wishList.findIndex(
          (cartItem) => cartItem.ProductID == ProductID
        );
        if (itemInwishlistindex !== -1) {
          state.wishList[itemInwishlistindex].quanty += 1;
          break;
        } else {
          state.wishList.push({ ...action.payload, quanty: 1 });
          break;
        }
      }
      case REMOVEWISHLISTITEM: {
        const { ProductID } = action.payload;
        const found = state.wishList.findIndex(
          (cartitem) => cartitem.ProductID === ProductID
        );
        if (found !== -1) {
          return wishList.splice(found, 1);
        }
        break;
      }
      case INCREASEWISHLISTQTY: {
        const { ProductID } = action.payload;
        const found = state.wishList.findIndex(
          (cartitem) => cartitem.ProductID === ProductID
        );

        if (found !== -1) {
          state.wishList[found].quanty += 1;
          break;
        } else {
          console.log("Item not prseent in cart");
          break;
        }
      }
      case DECREASEWISHLISTQTY: {
        const { ProductID } = action.payload;
        const found = state.wishList.findIndex(
          (cartitem) => cartitem.ProductID === ProductID
        );
        if (found !== -1 && state.wishList[found].quanty > 1) {
          state.wishList[found].quanty -= 1;
          break;
        } else if (found !== -1 && state.wishList[found].quanty == 1) {
          state.wishList.splice(found, 1);
          break;
        }
      }
    }
    return state;
  });
};

export default wishListReducer;
