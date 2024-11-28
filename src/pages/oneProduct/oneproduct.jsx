import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";
import Footer from "../../components/footer/footer";
import Nav from "../../components/nav/nav";
import "./oneproduct.css";

function OneProduct() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [product, setproduct] = useState({});
  const totalPrice = product.price ? (product.price * quantity).toFixed(2) : 0;
  const toster = () => {
    toast.success("Successfully buyed !");
  };
  const fetchproduct = async () => {
    try {
      const { data } = await axios.get(`https://dummyjson.com/products/${id}`);
      console.log(data);
      const product = await data;
      setproduct(product);
    } catch (error) {
      console.error("Error fetching products", error);
    }
  };
  useEffect(() => {
    fetchproduct();
  }, []);
  return (
    <>
      <Nav />
      <h1>BUYING PRODUCT</h1>
      <img
        style={{
          width: "100%",
          height: "40vh",
          objectFit: "cover",
        }}
        src="https://www.shutterstock.com/image-photo/makeup-professional-cosmetics-on-pink-600nw-1398700589.jpg"
        alt=""
      />
      <div className="glavni">
        <div
          className="porudzbenica"
          style={{
            width: "100%",
            height: "50vh",
          }}
        >
          <h2 className="">Porudzbenica</h2>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>
            <span style={{ color: "black" }}>TOTAL PRICE: </span>
            <span style={{ color: "red", fontWeight: "bold" }}>
              ${totalPrice}
            </span>
          </p>
          <form>
            <label for="quantity">QUANTITY</label>
            <select
              name="quantity"
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </form>
          <button
            onClick={() => toast.success("Successfully purchased!")}
            style={{
              height: "5vh",
              border: "none",
              backgroundColor: "rgba(122, 43, 72, 0.753)",
              color: "aliceblue",
              textDecoration: "none",
              width: "7vw",
              marginTop: "10px",
              borderRadius: "10px",
            }}
          >
            PURCHOSE
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default OneProduct;
