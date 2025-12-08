
let initialState = {
  wishList: [],
}
const ADDWISHLISTITEM = "wishlist/addItem";
const REMOVEWISHLISTITEM = "wishlist/removeItem";
const INCREASEWISHLISTQTY = "wishlist/increaseQuanty";
const DECREASEWISHLISTQTY = "wishlist/decreaseQuanty";



//Action Creators
export const increaseWishlistQty = (ProductID) => {
  return {
    type: INCREASEWISHLISTQTY,
    payload: { ProductID },
  };
};

export const decreaseWishlistQty = (ProductID) => {
  return {
    type: DECREASEWISHLISTQTY,
    payload: { ProductID },
  };
};

export const AddwishListTiem=(productData)=>{
  console.log("AddwishListTiem",productData)
    return {
        type:ADDWISHLISTITEM,
        payload:productData
    }
}

export const RemovewishListTiem=(ProductID)=>{
    return {
        type:REMOVEWISHLISTITEM,
        payload:{ProductID}
    }
}


const wishListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDWISHLISTITEM: {
      console.log("action.payload",action.payload)
      const { ProductID } = action.payload;
      const itemInCart = state.wishList.find(
        (cartItem) => cartItem.ProductID == ProductID
      );

      if (itemInCart) {
        return {
          ...state,
          wishList: state.wishList.map((cartItem) => {
            if (cartItem.ProductID === ProductID) {
              return { ...cartItem, quanty: cartItem.quanty + 1 };
            }
            return cartItem;
          }),
        };
      }

      return {
        ...state,
        wishList: [...state.wishList, { ...action.payload,quanty: 1 }],
      };
    }

    case REMOVEWISHLISTITEM: {
      const { ProductID } = action.payload;
      const found = state.wishList.find(
        (cartitem) => cartitem.ProductID === ProductID
      );
      if (found) {
        const deleted = state.wishList.filter(
          (cartitem) => cartitem.ProductID !== ProductID
        );
        return { ...state, wishList: deleted };
      }
      return state;
    }
     case INCREASEWISHLISTQTY: {
      const { ProductID } = action.payload;
      const found = state.wishList.find(
        (cartitem) => cartitem.ProductID === ProductID
      );

      if (found) {
        return {
          ...state,
          wishList: state.wishList.map((cartitem) => {
            if (cartitem.ProductID === ProductID) {
              return { ...cartitem, quanty: cartitem.quanty + 1 };
            }
            return cartitem;
          }),
        };
      } else {
        console.log("Item not prseent in cart");
        return state;
      }
    }
    case DECREASEWISHLISTQTY: {
      const { ProductID } = action.payload;

      const found = state.wishList.find(
        (cartitem) => cartitem.ProductID === ProductID
      );

      if (found && found.quanty > 1) {
        return {
          ...state,
          wishList: state.wishList.map((cartitem) => {
            if (cartitem.ProductID === ProductID) {
              return { ...cartitem, quanty: cartitem.quanty - 1 };
            }
            return cartitem;
          }),
        };
      } else if (found && found.quanty === 1) {
        const remainingCartItems = state.wishList.filter(
          (cartitem) => cartitem.ProductID !== ProductID
        );

        return { ...state, wishList: remainingCartItems };
      }

      return state;
    }

    default: {
      return state;
    }
  }
};

export default wishListReducer;
