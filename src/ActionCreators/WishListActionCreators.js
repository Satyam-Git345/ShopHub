export const ADDWISHLISTITEM = "wishlist/addItem";
export const REMOVEWISHLISTITEM = "wishlist/removeItem";
export const INCREASEWISHLISTQTY = "wishlist/increaseQuanty";
export const DECREASEWISHLISTQTY = "wishlist/decreaseQuanty";

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

export const AddwishListTiem = (productData) => {
  console.log("AddwishListTiem", productData);
  return {
    type: ADDWISHLISTITEM,
    payload: productData,
  };
};

export const RemovewishListTiem = (ProductID) => {
  return {
    type: REMOVEWISHLISTITEM,
    payload: { ProductID },
  };
};