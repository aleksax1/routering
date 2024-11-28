import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/footer";
import Nav from "../../components/nav/nav";
import ProductsCard from "../../components/products/productsCard";

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?limit=10")
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);
  return (
    <>
      <Nav />
      <h1>COSMETICS PRODUCTS</h1>
      <img
        style={{
          width: "100%",
          height: "40vh",
          objectFit: "cover",
        }}
        src="https://www.shutterstock.com/image-photo/makeup-professional-cosmetics-on-pink-600nw-1398700589.jpg"
        alt=""
      />
      <div
        className="glavni"
        style={{
          marginTop: "30px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "5vh",
          color: "rgba(122, 43, 72, 0.753)",
          marginBottom: "30px",
        }}
      >
        <h2>Welcome to Our Brand</h2>
        <p>
          We offer a variety of high-quality products tailored to meet your
          needs.
        </p>
        <div style={{ display: "flex", gap: "20px" }}>
          {products.slice(0, 3).map((product) => (
            <ProductsCard key={product.id} product={product} />
          ))}
        </div>
        <button
          style={{
            height: "5vh",
            border: "none",
            backgroundColor: "rgba(100, 33, 62, 0.9)",
            color: "whote",
            textDecoration: "none",
            width: "7vw",
            borderRadius: "10px",
          }}
        >
          <Link
            to="/products"
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            See more
          </Link>
        </button>
      </div>

      <Footer />
    </>
  );
}

export default HomePage;
