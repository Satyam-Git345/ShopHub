import { useSelector } from "react-redux";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader";
import ProtectedRoute from "./components/ProtectedRoute";

// Lazy imports
const ProductList = lazy(() => import("./components/ProductList"));
const Cart = lazy(() => import("./pages/Cart"));
const CheckoutPage = lazy(() => import("./components/CheckutPage"));
const WishList = lazy(() => import("./pages/WishList"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const Profile = lazy(() => import("./pages/Profile"));
const PaymentSuccess = lazy(() => import("./pages/PaymentSuccess"));
const PaymentFailed = lazy(() => import("./pages/PaymentFailed"));

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

      <Suspense fallback={<Loader />}>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<ProductList />} />
            <Route path="/wishlist" element={<WishList />} />
            <Route path="/cartitems" element={<Cart />} />
            <Route path="/checkoutpage" element={<CheckoutPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/payment-success" element={<PaymentSuccess />} />
            <Route path="/payment-failed" element={<PaymentFailed />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
