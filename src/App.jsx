import { Fragment } from "react";
import "./App.css";
import NavbarComponent from "./components/Navbar/NavbarComponent";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage";
import CategoryProducts from "./components/CategoryProducts/CategoryProducts";

function App() {
  return (
    <Fragment>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/productDetails/:id" element={<ProductDetails />} />
        <Route path="/categoryProducts/:id" element={<CategoryProducts />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
