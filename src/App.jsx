import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import NotFound from "./pages/notFound/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/footer/Footer";
import Dashes from "./pages/dishes/Dashes";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="dishes" element={<Dashes />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
