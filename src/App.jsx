import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import NotFound from "./pages/notFound/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/footer/Footer";
import Dashes from "./pages/dishes/Dashes";
import Login from "./pages/login/Login";
import ForgetPassword from "./pages/forget/ForgetPassword";
import Register from "./pages/register/Register";
import { useState } from "react";

const App = () => {
  // const [user, setUser] = useState("");
  const [name, setName] = useState("");
  return (
    <div>
      <Router>
        {/* <Header name={name} /> */}
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="dishes" element={<Dashes />} />
          <Route path="/" element={<Login setName={setName} />} />
          <Route path="forget" element={<ForgetPassword />} />
          <Route path="register" element={<Register />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
};

export default App;
