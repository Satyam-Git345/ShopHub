export const ADDCARTITEM = "cart/addItem";
export const REMOVECARTITEM = "cart/removeItem";
export const INCREASECARTQTY = "cart/increseqty";
export const DECREASECARTQTY = "cart/decreaseqty";
export const APPLY_COUPON = "cart/applyCoupon";
export const REMOVE_COUPON = "cart/removeCoupon";
//Action Creators
export const increaseCartItemQty = (ProductID) => {
  return {
    type: INCREASECARTQTY,
    payload: { ProductID },
  };
};
export const decreaseCartItemQty = (ProductID) => {
  return {
    type: DECREASECARTQTY,
    payload: { ProductID },
  };
};
export const AddNewCartItem = (productData) => {
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
export const applyCoupon = (coupon, discount) => ({
  type: APPLY_COUPON,
  payload: { coupon, discount },
});

export const removeCoupon = () => ({
  type: REMOVE_COUPON,
});
