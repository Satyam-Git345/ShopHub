import { useSelector } from "react-redux";
import Product from "./components/Product";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WishList from "./components/WishList";
import CartItems from "./components/CartItems";
import ProductList from "./components/ProductList";
import Cart from "./pages/Cart";
import CheckoutPage from "./components/CheckutPage";

const App = () => {
  const cartCount = useSelector((s) => s.carts?.cartItems?.length);
  const wishlistCount = useSelector((s) => s.wishlists?.wishList?.length);

  console.log("cartCount", cartCount);
  console.log("wishlistCount", wishlistCount);

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
