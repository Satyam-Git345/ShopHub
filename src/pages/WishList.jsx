import React from "react";
import { useSelector } from "react-redux";
import WishListItems from "../components/WishListItems";
import { getAllWishListItems } from "../slices/wishListSlice";


export default function WishList() {
  const cartItems = useSelector(getAllWishListItems);
  if (cartItems.length === 0) {
    return (
      <div style={{
        display:"flex",
           justifyContent:'center',
           alignItems:"center"
      }}>
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
        Items in Your WishList
      </h2>

      <div className="cart-items-container">
        {cartItems.map(({ ProductID, title, rating, price, image, quanty }) => (
          <WishListItems
            key={ProductID}
            title={title}
            price={price}
            quanty={quanty}
            image={image}
            rating={rating}
            ProductID={ProductID}
          />
        ))}
      </div>
    </div>
  );
}
