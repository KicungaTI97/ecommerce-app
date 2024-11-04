import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Collection } from "./pages/Collection";
import { Product } from "./pages/Product";
import { Cart } from "./pages/Cart";
import { Contact } from "./pages/Contact";
import { Orders } from "./pages/Orders";
import { Login } from "./pages/Login";
import { PalceOrder } from "./pages/PlaceOrder";
import { About } from "./pages/About";
import { NavBar } from "./components/NavBar";

export default function App() {
  return (
    <h1 className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[7vw]">
      <NavBar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/login" element={<Login />} />
        <Route path="/place-order" element={<PalceOrder />} />
      </Routes>
    </h1>
  )
}