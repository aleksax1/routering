import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import Footer from "../../components/footer/footer";
import Nav from "../../components/nav/nav";
import ProductsCard from "../../components/products/productsCard";
import "./products.css";
function Products() {
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState("asc");
  const [category, setCategory] = useState("beauty");

  useEffect(() => {
    axios
      .get(
        `https://dummyjson.com/products/category/${category}?sortBy=title&order=${sort}`
      )
      .then((response) => {
        setProducts(response.data.products);
        console.log(response.data.products);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [sort, category]);
  const onChangeSelect = (event) => {
    setCategory(event.target.value);
  };

  return (
    <>
      <Nav />
      <h1>COSMETICS PRODUCTS</h1>
      <img
        style={{
          width: "100%",
          height: "50vh",
          objectFit: "cover",
        }}
        src="https://www.shutterstock.com/image-photo/makeup-professional-cosmetics-on-pink-600nw-1398700589.jpg"
        alt=""
      />
      <div className="fileter">
        <p>ACENDING</p>
        <button
          onClick={() => setSort("asc")}
          style={{
            width: "5vh",
            height: "5vh",
            borderRadius: "16px",
            border: "none",
            backgroundColor: "gray",
          }}
        >
          <FaArrowUp style={{ height: "5vh", width: "3vh", color: "white" }} />
        </button>
        <p>DESCENDING</p>
        <button
          onClick={() => setSort("desc")}
          style={{
            width: "5vh",
            height: "5vh",
            borderRadius: "16px",
            border: "none",
            backgroundColor: "gray",
          }}
        >
          <FaArrowDown
            style={{ color: "white", height: "4vh", width: "3vh" }}
          />
        </button>
        <p>CATEGORY:</p>
        <select
          name="category"
          id="category"
          className="category"
          onChange={onChangeSelect}
          value={category}
        >
          <option value="beauty">beauty</option>
          <option value="fragrances">fragrances</option>
          <option value="sunglasses">sunglasses</option>
        </select>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: "50px",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {products.map((product) => (
          <ProductsCard key={product.id} product={product} />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Products;
