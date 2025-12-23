import { useSelector } from "react-redux";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader";

// Lazy imports
const ProductList = lazy(() => import("./components/ProductList"));
const Cart = lazy(() => import("./pages/Cart"));
const CheckoutPage = lazy(() => import("./components/CheckutPage"));
const WishList = lazy(() => import("./pages/WishList"));

const App = () => {
  //extract full redux state
  //1.
  // useSelector((state)=>{
  //     console.log("state",state)
  // })
  //2.
  useSelector(console.log)
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

      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/cartitems" element={<Cart />} />
          <Route path="/checkoutpage" element={<CheckoutPage />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
