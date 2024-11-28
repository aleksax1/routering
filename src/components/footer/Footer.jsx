import React from "react";
import './footer.css';
import { FaGithub } from "react-icons/fa";

function Footer() {
    return (
      <>
       <div className="footer" style={{
        height:"20vh",
        display:"flex",
        alignItems:"center",
        justifyContent:'space-evenly',
        gap:"15vw"
      }}>
        <h3>COSMETICS SHOP ®</h3>
        <div style={{
            color:"white",
            textDecoration:'none',
            display:'flex'

        }}>
          <div style={{
            display:"flex",
            alignItems: "center",
            paddingRight: 20,
          }}> 
                        <h4>created by: Aleksa Jankovic  <a href="https://github.com/aleksax1"><FaGithub style={{width:25,height:25}} /></a></h4> 
          </div>
          <div>
          </div>
        </div>
        </div>
    
      </>
    );
  }
  
  export default Footer;
  

