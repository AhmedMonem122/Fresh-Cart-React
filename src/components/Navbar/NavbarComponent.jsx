import { Link, NavLink } from "react-router-dom";
import freshCartLogo from "../../assets/images/freshcart-logo.svg";
import useAuth from "../../hooks/use-auth";
import { Fragment, useState } from "react";
import useWishlist from "../../hooks/use-wishlist";
import { useEffect } from "react";
import useCart from "../../hooks/use-cart";

const NavbarComponent = () => {
  const [isActive, setIsActive] = useState(false);

  const { userData, handleLogout } = useAuth();
  const { getLoggedUserWishlist, wishlistCount } = useWishlist();
  const { getLoggedUserCart, numOfCartItems } = useCart();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 40 ? setIsActive(true) : setIsActive(false);
    });
  }, []);

  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      getLoggedUserWishlist();
      getLoggedUserCart();
    }
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg ${
        isActive ? "bg-white shadow-lg" : "navbar-transparent"
      }
      fixed-top py-3`}
    >
      <div className="container">
        <NavLink to="/" className="navbar-brand">
          <img src={freshCartLogo} alt="Fresh Cart" />
        </NavLink>
        <button
          className="navbar-toggler toggles"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars fs-3"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink as={Link} to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink as={Link} to="/brands" className="nav-link">
                Brands
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink as={Link} to="/categories" className="nav-link">
                Categories
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink as={Link} to="/products" className="nav-link">
                All Products
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
            {userData && localStorage.getItem("userToken") ? (
              <Fragment>
                {" "}
                <li className="nav-item">
                  <NavLink
                    as={Link}
                    to="/cart"
                    className="position-relative non-active-link nav-link"
                  >
                    <i className="fa-solid fa-cart-arrow-down text-success fs-3">
                      <div className="numCustomize rounded-3 bg-success d-flex justify-content-center align-items-center">
                        <span className="text-white fs-6">
                          {numOfCartItems}
                        </span>
                      </div>
                    </i>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    as={Link}
                    to="/wishlist"
                    className="position-relative non-active-link nav-link"
                  >
                    <i className="fa-solid fa-heart text-danger fs-3">
                      <div className="wishCustomize rounded-3 bg-danger d-flex justify-content-center align-items-center">
                        <span className="text-white fs-6">{wishlistCount}</span>
                      </div>
                    </i>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/profile" className="nav-link non-active-link">
                    <i className="fa-solid fa-user"></i> {userData?.name}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink as={Link} to="/allorders" className="nav-link">
                    All Orders
                  </NavLink>
                </li>
                <li className="nav-item">
                  <button className="px-0 py-2 btn" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </Fragment>
            ) : (
              <Fragment>
                {" "}
                <li className="nav-item">
                  <NavLink as={Link} to="/login" className="nav-link">
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink as={Link} to="/register" className="nav-link">
                    Register
                  </NavLink>
                </li>
              </Fragment>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
