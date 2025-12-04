
import  {productsList} from "./Products";
const initialState = {
  cartItems: [],
  products: productsList,
};
const ADDCARTITEM = "cart/addItem";
const REMOVECARTITEM = "cart/removeItem";
const INCREASECARTQTY = "cart/increseqty";
const DECREASECARTQTY = "cart/decreaseqty";

//Action Creators
export const increaseCartItemQty = (ProductID) => {
 
  return {
    type: INCREASECARTQTY,
    payload: { ProductID},
  };
};
export const decreaseCartItemQty = (ProductID) => {
  return {
    type: DECREASECARTQTY,
    payload: { ProductID },
  };
};
export const AddNewCartItem = (productData) => {
  console.log("productData",productData)
  return {
    type: ADDCARTITEM,
    payload: productData,
  };
};

export const RemoveCartItem = (ProductID) => {
  return {
    type: REMOVECARTITEM,
    payload: { ProductID },
  };
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDCARTITEM: {
      console.log("cartReducerrrrrrr",action)
      const { ProductID } = action.payload;
      const itemInCart = state.cartItems.find(
        (cartItem) => cartItem.ProductID == ProductID
      );

      if (itemInCart) {
        return {
          ...state,
          cartItems: state.cartItems.map((cartItem) => {
            if (cartItem.ProductID === ProductID) {
              return { ...cartItem, quanty: cartItem.quanty + 1 };
            }
            return cartItem;
          }),
        };
      }

      return {
        ...state,
        cartItems: [...state.cartItems, {...action.payload,quanty:1 }],
      };
    }

    case REMOVECARTITEM: {
      const { ProductID } = action.payload;

      const found = state.cartItems.find(
        (cartitem) => cartitem.ProductID === ProductID
      );

      if (found) {
        const deleted = state.cartItems.filter(
          (cartitem) => cartitem.ProductID !== ProductID
        );
        return { ...state, cartItems: deleted };
      }

      return state;
    }

    case INCREASECARTQTY: {
      console.log("aaaaaaaaaaaaaaaaaaaaa")
      const { ProductID } = action.payload;
      console.log("ProductID",action.payload)
      const found = state.cartItems.find(
        (cartitem) => cartitem.ProductID === ProductID
      );

      if (found) {
        return {
          ...state,
          cartItems: state.cartItems.map((cartitem) => {
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

    case DECREASECARTQTY: {
      const { ProductID } = action.payload;

      const found = state.cartItems.find(
        (cartitem) => cartitem.ProductID === ProductID
      );

      if (found && found.quanty > 0) {
        return {
          ...state,
          cartItems: state.cartItems.map((cartitem) => {
            if (cartitem.ProductID === ProductID) {
              return { ...cartitem, quanty: cartitem.quanty - 1 };
            }
            return cartitem;
          }),
        };
      } else {
        console.log("There is only one item in cart");
        return state; 
      }
    }

    default:
      return state;
  }
};




