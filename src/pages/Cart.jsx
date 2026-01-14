import React, { useEffect, useState } from "react";
import CartItems from "../components/CartItems";
import { useDispatch, useSelector } from "react-redux";
import { CartTotalSection } from "../components/CartTotalSection";
import { fetchCartItemData, getAllCartItems, getAllCarts, getCartError, getCartLoading } from "../slices/cartSlice";

export default function Cart() {
  const dispatch=useDispatch();
  const carts = useSelector(getAllCarts);
  const isLoading = useSelector(getCartLoading);
  const error = useSelector(getCartError);

  console.log("carts",carts)
  console.log("isLoading",isLoading)
  console.log("error",error)
  const cartItems = useSelector(getAllCartItems);
  const total = cartItems.reduce((acc, curr) => {
    return acc + curr.price * curr.quanty;
  }, 0);

  useEffect(() => {
    dispatch(fetchCartItemData())
  }, []);

  if (cartItems.length === 0) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            margin: 0,
            fontWeight: "600",
            lineHeight: "1.4",
            minHeight: "50px",
            overflow: "hidden",
            fontSize: "25px",
            color: "blue",
          }}
        >
          Not items found add products
        </h2>
      </div>
    );
  }
  return (
    <div className="cart-container">
      <h2
        style={{
          margin: 0,
          textAlign: "center",
          fontWeight: "600",
          lineHeight: "1.4",
          minHeight: "50px",
          overflow: "hidden",
          marginTop: "20px",
          fontSize: "25px",
          color: "blue",
        }}
      >
        Items in Your Cart
      </h2>

      <div className="cart-items-container">
        {cartItems.map(({ id, title, rating, price, image, quanty }) => (
          <CartItems
            key={id}
            title={title}
            price={price}
            quanty={quanty}
            image={image}
            rating={rating}
            id={id}
          />
        ))}
      </div>
      <div>
        <CartTotalSection total={total.toFixed(3)} />
      </div>
    </div>
  );
}
