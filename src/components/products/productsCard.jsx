import React from "react";
import { useNavigate } from "react-router-dom";
import "./productsCard.scss";
const ProductsCard = ({ product }) => {
  const imageUrl =
    product.images && product.images.length > 0
      ? product.images[0]
      : "fallback_image_url.png";
  const navigate = useNavigate();
  return (
    <div className="card"
     
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
      <div className="txt">
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
            <button onClick={() => navigate(`/oneproduct/${product.id}`)}>
              BUY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
