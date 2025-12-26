import { useEffect, useState } from "react";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import {
  updateAllProducts,
  fetchProductsState,
  fetchProductsError,
} from "../slices/productSlice";
import Loader from "./Loader";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((s) => s?.products?.products);
  const isLoading = useSelector((s) => s?.products?.loading);
  const error = useSelector((s) => s?.products?.error);

  useEffect(() => {
    dispatch(fetchProductsState());
    const fetchProducts = () => {
      fetch("https://fakestoreapi.com/products")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          dispatch(updateAllProducts(data));
        })
        .catch((err) => {
          dispatch(fetchProductsError("Something Went Wrong..."));
        });
    };
    fetchProducts();
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
