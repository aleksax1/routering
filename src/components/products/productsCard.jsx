import React from "react";
import { useNavigate } from "react-router-dom";
import "./products.scss";
const ProductsCard = ({ product }) => {
  const imageUrl =
    product.images && product.images.length > 0
      ? product.images[0]
      : "fallback_image_url.png";
  const navigate = useNavigate();
  return (
    <div
      style={{
        width: "28vw",
        backgroundColor: "pink",
        borderRadius: "10px",
        padding: "10px",
        color: "white",
        margin: "10px",
        boxShadow: "rgba(0, 0, 0, 0.3) 0px 7px 15px",
      }}
    >
      <img
        src={imageUrl}
        alt={product.title}
        style={{
          width: "100%",
          height: "40vh",
          borderRadius: "10px",
          objectFit: "contain",
          transition: "transform 0.6s ease",
          cursor: "pointer",
        }}
        onMouseOver={(e) => (e.target.style.transform = "scale(1.5)")}
        onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
      />

      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <div>
        <div
          style={{
            display: "flex",
            justifyItems: "center",
            alignItems: "center",
          }}
        >
          <button
            onClick={() => navigate(`/oneproduct/${product.id}`)}
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
            BUY
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
