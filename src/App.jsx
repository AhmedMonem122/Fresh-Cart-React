import { Fragment } from "react";
import "./App.css";
import NavbarComponent from "./components/Navbar/NavbarComponent";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage";
import CategoryProducts from "./components/CategoryProducts/CategoryProducts";
import BrandsPage from "./pages/BrandsPage/BrandsPage";
import BrandProducts from "./components/BrandProducts/BrandProducts";
import AllProductsPage from "./pages/AllProductsPage/AllProductsPage";

function App() {
  return (
    <Fragment>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/brands" element={<BrandsPage />} />
        <Route path="/products" element={<AllProductsPage />} />
        <Route path="/productDetails/:id" element={<ProductDetails />} />
        <Route path="/categoryProducts/:id" element={<CategoryProducts />} />
        <Route path="/brandProducts/:id" element={<BrandProducts />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
