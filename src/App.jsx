import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import System from "./System";

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route index element={<Home />} />
        <Route path="system" element={<System />} />
        <Route path="digital-liberia" element={<div>Coming Soon</div>} />
        <Route path="libpay" element={<div>Coming Soon</div>} />
        <Route path="liberian-post" element={<div>Coming Soon</div>} />
        <Route path="*" element={<Home />} /> {/* Fallback */}
      </Routes>
    </div>
  );
}

export default App;
