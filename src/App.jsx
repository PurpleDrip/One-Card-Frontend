import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";

import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import Register1Card from "./pages/1Card/Register1Card";
import AdminHome from "./pages/Home/AdminHome";
import Result from "./pages/Result";
import Verify from "./pages/Verify";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/homeadmin" element={<AdminHome />} />
        <Route path="/1card" element={<Register1Card />} />
        <Route path="/result" element={<Result />} />
        <Route path="/verify" element={<Verify />} />
      </Routes>
    </Router>
  );
};

export default App;
