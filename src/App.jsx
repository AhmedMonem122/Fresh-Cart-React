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
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import AuthContextProvider from "./context/AuthContextProvider";
import { Toaster } from "react-hot-toast";
import LoginPage from "./pages/LoginPage/LoginPage";
import WishlistPage from "./pages/WishlistPage/WishlistPage";
import WishlistContextProvider from "./context/WishlistContextProvider";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import NotFound from "./components/NotFound/NotFound";
import CartPage from "./pages/CartPage/CartPage";
import CartContextProvider from "./context/CartContextProvider";

function App() {
  return (
    <Fragment>
      <AuthContextProvider>
        <CartContextProvider>
          <WishlistContextProvider>
            <Toaster position="top-center" reverseOrder={false} />

            <NavbarComponent />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/categories" element={<CategoriesPage />} />
              <Route path="/brands" element={<BrandsPage />} />
              <Route path="/products" element={<AllProductsPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route
                path="/wishlist"
                element={
                  <ProtectedRoute>
                    <WishlistPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/cart"
                element={
                  <ProtectedRoute>
                    <CartPage />
                  </ProtectedRoute>
                }
              />
              <Route path="/productDetails/:id" element={<ProductDetails />} />
              <Route
                path="/categoryProducts/:id"
                element={<CategoryProducts />}
              />
              <Route path="/brandProducts/:id" element={<BrandProducts />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </WishlistContextProvider>
        </CartContextProvider>
      </AuthContextProvider>
    </Fragment>
  );
}

export default App;
