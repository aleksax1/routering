import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homePage/homepage.jsx";
import About from "./pages/about/about.jsx";
import Products from "./pages/products/products.jsx";
import axios from "axios";
import OneProduct from "./pages/oneProduct/oneproduct.jsx";
import { Toaster } from "react-hot-toast";

function App() {
  return (<>
  <Toaster/>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/oneproduct/:id" element={<OneProduct />} />
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
