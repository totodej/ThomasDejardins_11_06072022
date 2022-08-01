import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Accommodation from "./pages/Accommodation";
import Error from "./pages/Error";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Header />
    <Routes>
      <Route path="/ThomasDejardins_11_06072022/" element={<Home />} />
      <Route path="/ThomasDejardins_11_06072022/about" element={<About />} />
      <Route
        path="/ThomasDejardins_11_06072022/accommodation/:id"
        element={<Accommodation />}
      />
      <Route path="*" element={<Error />} />
    </Routes>
    <Footer />
  </Router>
);
