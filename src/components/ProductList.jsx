import { useEffect, useState } from "react";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  getProductLoading,
  getProductError,
  fetchProductsData,
} from "../slices/productSlice";
import Loader from "./Loader";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(getAllProducts);
  const isLoading = useSelector(getProductLoading);
  const error = useSelector(getProductError);

  useEffect(() => {
    // dispatch(
    //   fetchData({
    //     URL: "products",
    //     onSuccess: updateAllProducts.type,
    //     onStart: fetchProductsState.type,
    //     onError: fetchProductsError.type,
    //   })
    // );
    // dispatch(fetchProductsState());
    // const fetchProducts = () => {
    //   fetch("http://localhost:4000/")
    //     .then((response) => {
    //       return response.json();
    //     })
    //     .then((data) => {
    //       dispatch(updateAllProducts(data));
    //     })
    //     .catch((err) => {
    //       dispatch(fetchProductsError("Something Went Wrong..."));
    //     });
    // };
    // fetchProducts();

    dispatch(fetchProductsData());
  }, []);

  return (
    <div className="products-container">
      {isLoading && <Loader />}
      {error && <h1>{error}</h1>}
      {products &&
        products?.length > 0 &&
        products?.map(({ title, rating, price, image, id }) => (
          <Product
            key={id}
            title={title}
            rating={rating}
            price={price}
            image={image}
            id={id}
          />
        ))}
    </div>
  );
};

export default ProductList;
