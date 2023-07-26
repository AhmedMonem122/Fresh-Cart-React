import { Fragment } from "react";
import "./App.css";
import NavbarComponent from "./components/Navbar/NavbarComponent";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Fragment>
      <NavbarComponent />
      <Home />
      <Footer />
    </Fragment>
  );
}

export default App;
