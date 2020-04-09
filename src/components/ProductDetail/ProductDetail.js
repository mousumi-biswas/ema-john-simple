import React from "react";
import { useParams } from "react-router-dom";
import Product from "../Product/Product";
import { useState } from "react";
import { useEffect } from "react";

const ProductDetail = () => {
  const { productKey } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("https://boiling-bayou-95906.herokuapp.com/product/" + productKey)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);

  return (
    <div>
      <h1>Your Product Details.</h1>
      {product && <Product showAddToCart={false} product={product}></Product>}
    </div>
  );
};

export default ProductDetail;
