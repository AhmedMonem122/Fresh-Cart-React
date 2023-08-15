import { Fragment } from "react";
import "./App.css";
import NavbarComponent from "./components/Navbar/NavbarComponent";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./components/ProductDetails/ProductDetails";

function App() {
  return (
    <Fragment>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productDetails/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
