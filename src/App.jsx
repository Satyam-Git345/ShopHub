import { useSelector } from "react-redux";

import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";

import ProductList from "./components/ProductList";
import Cart from "./pages/Cart";
import CheckoutPage from "./components/CheckutPage";
import WishList from "./pages/WishList";

const App = () => {
  const cartItems = useSelector((s) => s.carts?.cartItems);
  const wishListItems = useSelector((s) => s.wishlists?.wishList);

  const cartCount = cartItems.reduce((acc, curr) => {
    return acc + curr.quanty;
  }, 0);

  const wishlistCount = wishListItems.reduce((acc, curr) => {
    return acc + curr.quanty;
  }, 0);

  return (
    <>
      <Header cartCount={cartCount} wishlistCount={wishlistCount} />

      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/cartitems" element={<Cart />} />
        <Route path="/checkoutpage" element={<CheckoutPage />} />
      </Routes>
    </>
  );
};

export default App;
