import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import System from "./System";
import Dssn from "./Dssn";
import Digitalliberia from "./Digitalliberia";
import Libpay from "./Libpay";

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route index element={<Home />} />
        <Route path="system" element={<System />} />
        <Route path="dssn" element={<Dssn />} />
        <Route path="digital-liberia" element={<Digitalliberia />} />
        <Route path="libpay" element={<Libpay />} />
        <Route path="liberian-post" element={<div>Coming Soon</div>} />
        <Route path="*" element={<Home />} /> {/* Fallback */}
      </Routes>
    </div>
  );
}

export default App;
