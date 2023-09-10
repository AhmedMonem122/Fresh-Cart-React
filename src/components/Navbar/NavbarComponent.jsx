import { Link } from "react-router-dom";
import freshCartLogo from "../../assets/images/freshcart-logo.svg";
import { Container, Nav, Navbar } from "react-bootstrap";
import useAuth from "../../hooks/use-auth";
import { Fragment } from "react";
import useWishlist from "../../hooks/use-wishlist";
import { useEffect } from "react";
import useCart from "../../hooks/use-cart";

const NavbarComponent = () => {
  const { userData, handleLogout } = useAuth();
  const { getLoggedUserWishlist, wishlistCount } = useWishlist();
  const { getLoggedUserCart, numOfCartItems } = useCart();

  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      getLoggedUserWishlist();
      getLoggedUserCart();
    }
  }, []);

  return (
    <Navbar collapseOnSelect expand="lg" className="">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={freshCartLogo} alt="Fresh Cart" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/brands">
              Brands
            </Nav.Link>
            <Nav.Link as={Link} to="/categories">
              Categories
            </Nav.Link>
            <Nav.Link as={Link} to="/products">
              All Products
            </Nav.Link>
          </Nav>
          <Nav>
            {userData ? (
              <Fragment>
                {" "}
                <Nav.Link as={Link} to="/cart" className="position-relative">
                  <i className="fa-solid fa-cart-arrow-down text-success fs-3">
                    <div className="numCustomize rounded-3 bg-success d-flex justify-content-center align-items-center">
                      <span className="text-white fs-6">{numOfCartItems}</span>
                    </div>
                  </i>
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/wishlist"
                  className="position-relative"
                >
                  <i className="fa-solid fa-heart text-danger fs-3">
                    <div className="wishCustomize rounded-3 bg-danger d-flex justify-content-center align-items-center">
                      <span className="text-white fs-6">{wishlistCount}</span>
                    </div>
                  </i>
                </Nav.Link>
                <Nav.Link as={Link} to="/allOrders">
                  All Orders
                </Nav.Link>
                <Nav.Item>
                  <button className="px-0 py-2 btn" onClick={handleLogout}>
                    Logout
                  </button>
                </Nav.Item>
              </Fragment>
            ) : (
              <Fragment>
                {" "}
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/register">
                  Register
                </Nav.Link>
              </Fragment>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
