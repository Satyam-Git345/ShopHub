import Product from "./Product";
import { useSelector } from "react-redux";

const ProductList = () => {
  const products = useSelector((s) => s?.products);
  return (
    <div className="products-container">
      {products.map(({ title, rating, price, image, id }) => (
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
