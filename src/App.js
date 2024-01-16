import "./App.css";
import { Login } from "./Components/Login/Login";
import Home from "./Components/Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbarr/Navbar";
import Shop from "./Components/Page/Shop";
import ShopCategory from "./Components/Page/ShopCategory";
import Product from "./Components/Page/Product";
import Cart from "./Components/Page/Cart";
import Popular from "./Components/Popularr/Popular";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route
          path="/mens"
          element={<ShopCategory category="men"></ShopCategory>}
        />
        <Route
          path="/womens"
          element={<ShopCategory category="women"></ShopCategory>}
        />
        <Route
          path="/kids"
          element={<ShopCategory category="kid"></ShopCategory>}
        />
        <Route path="/products" element={<Product></Product>} />
        <Route path="/carts" element={<Cart></Cart>} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/api" element={<Popular></Popular>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
