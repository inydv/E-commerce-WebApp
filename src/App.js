import React, { useEffect } from "react";
import "./App.css";
import About from "./Pages/about/About";
import Cart from "./Pages/cart/Cart";
import Contact from "./Pages/contact/Contact";
import Home from "./Pages//home/Home";
import LogIn from "./Pages/login/LogIn";
import Shop from "./Pages/shop/Shop";
import SinglePage from "./Pages/singlePage/SinglePage";
import Signup from "./Pages/signup/signup";
import Order from "./Pages/order/Order";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import {userRequest} from "./requestMethods";

function App() {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={user ? <Home /> : <LogIn />} />
        <Route exact path="/contact" element={user ? <Contact /> : <LogIn />} />
        <Route exact path="/about" element={user ? <About /> : <LogIn />} />
        <Route
          exact
          path="/singlepage/:id"
          element={user ? <SinglePage /> : <LogIn />}
        />
        <Route
          exact
          path="/shop/:category"
          element={user ? <Shop /> : <LogIn />}
        />
        <Route exact path="/cart" element={user ? <Cart /> : <LogIn />} />
        <Route exact path="/order" element={user ? <Order /> : <LogIn />} />
        <Route exact path="/signin" element={user ? <Home /> : <LogIn />} />
        <Route exact path="/signup" element={user ? <Home /> : <Signup />} />
      </Routes>
    </div>
  );
}

export default App;
