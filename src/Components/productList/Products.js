import React, { useEffect, useState } from "react";
import "./Products.css";
import ProductsList from "./ProductsList";
import axios from "axios";

function Products({ cat, sort }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/products?category=${cat}`
            : `http://localhost:5000/products`
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    if (sort == "newest") {
      setProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort == "oldest") {
      setProducts((prev) =>
        [...prev].sort((a, b) => b.createdAt - a.createdAt)
      );
    } else if (sort == "asc") {
      setProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else if (sort == "desc") {
      setProducts((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sort]);

  return (
    <div className="products">
      {cat
        ? products &&
          products.map((item) => <ProductsList item={item} key={item._id} />)
        : products &&
          products
            .slice(0, 8)
            .map((item) => <ProductsList item={item} key={item._id} />)}
    </div>
  );
}

export default Products;