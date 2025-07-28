import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import System from "./System";

function App() {
  return (
    <Router>
      <div className="p-8 font-sans">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/system" element={<System />} />
          {/* Add other routes for your navigation links */}
          <Route path="/digital-liberia" element={<div>Digital Liberia Page (Coming Soon)</div>} />
          <Route path="/libpay" element={<div>LibPay Page (Coming Soon)</div>} />
          <Route path="/liberian-post" element={<div>Liberian Post Page (Coming Soon)</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
