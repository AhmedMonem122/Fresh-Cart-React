import { Fragment } from "react";
import "./App.css";
import NavbarComponent from "./components/Navbar/NavbarComponent";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Fragment>
      <NavbarComponent />
      <div className="container py-4">
        <Home />
      </div>
    </Fragment>
  );
}

export default App;
