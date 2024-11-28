import { Link } from "react-router-dom";
import Footer from "../../components/footer/footer";
import Nav from "../../components/nav/nav";

function About() {
  return (
    <>
      <Nav />
      <h1>ABOUT US</h1>
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
        style={{
          color: "white",
          padding: "20px",
          textAlign: "center",
          minHeight: "40vh",
          padding: "20vh 20vh",
          margin: "15vh 20vh",
          backgroundColor: "#e3c6c6e1",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            fontSize: "4vh",
          }}
        >
          Welcome to our website! We are passionate about providing the best
          products and services to our customers. Our mission is to ensure
          quality and customer satisfaction in everything we do.
        </p>
        <p
          style={{
            fontSize: "4vh",
          }}
        >
          Learn more about our{" "}
          <Link
            to="/products"
            style={{
              textDecoration: "none",
              color: "#3f0267e1",
            }}
          >
            PRODUCTS
          </Link>{" "}
          or contact us for any inquiries.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default About;
