import React from "react";
import { FaGithub } from "react-icons/fa";
import "./footer.css";

function Footer() {
  return (
    <>
      <div
        className="footer"
        style={{
          height: "20vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          gap: "15vw",
        }}
      >
        <h3>COSMETICS SHOP ®</h3>
        <div
          style={{
            color: "white",
            textDecoration: "none",
            display: "flex",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              paddingRight: 20,
            }}
          >
            <h4>
              created by: Aleksa Jankovic{" "}
              <a
                href="https://github.com/aleksax1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub style={{ width: 25, height: 25 }} />
              </a>
            </h4>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Footer;
