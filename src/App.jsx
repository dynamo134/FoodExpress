import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./components/AboutUs";
import Body from "./components/Body";
import "./App.css";
import { ContactUs } from "./components/ContactUS";
import { Cart } from "./components/Cart";
import { RestaurantMenu } from "./components/RestaurantMenu";

function App() {
  return (
    <Routes>
      {/* For Home page with Body */}
      <Route element={<Layout />}>
        <Route path="/" element={<Body />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/home" element={<Body />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/restaurant/:id" element={<RestaurantMenu />} />
      </Route>
    </Routes>
  ); 
}

export default App;
