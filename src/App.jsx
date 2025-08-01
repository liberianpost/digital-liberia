import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Home from "./Home";
import System from "./System";
import Dssn from "./Dssn";
import Digitalliberia from "./Digitalliberia";
import Libpay from "./Libpay";
import MoeDashboard from "./System"; // Import your dashboard component
import UnauthorizedPage from "./System"; // Import your unauthorized component

function App() {
  return (
    <AuthProvider>
      <div className="app-container">
        <Routes>
          <Route index element={<Home />} />
          <Route path="system" element={<System />} />
          <Route path="dssn" element={<Dssn />} />
          <Route path="digital-liberia" element={<Digitalliberia />} />
          <Route path="libpay" element={<Libpay />} />
          <Route path="moe-dashboard" element={<MoeDashboard />} />
          <Route path="unauthorized" element={<UnauthorizedPage />} />
          <Route path="liberian-post" element={<div>Coming Soon</div>} />
          <Route path="*" element={<Home />} /> {/* Fallback */}
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
