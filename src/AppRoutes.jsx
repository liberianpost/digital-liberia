import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import LoadingFallback from "@components/LoadingFallback";

// Enhanced debugLazy with better error handling and logging
function debugLazy(importFn, name) {
  return React.lazy(async () => {
    console.log(`🌀 Attempting to load module: ${name}`);
    try {
      const module = await importFn();
      if (!module?.default) {
        console.error(`🚨 Module "${name}" has no default export`, module);
        return {
          default: () => (
            <div className="p-4 text-red-600">
              <p>
                Component <strong>{name}</strong> is missing a default export
              </p>
              <button
                onClick={() => window.location.reload()}
                className="mt-2 px-3 py-1 bg-blue-500 text-white rounded"
              >
                Reload
              </button>
            </div>
          ),
        };
      }
      console.log(`✅ Successfully loaded module: ${name}`);
      return module;
    } catch (error) {
      console.error(`🔥 Failed to load "${name}"`, error);
      return {
        default: () => (
          <div className="p-4 text-red-600">
            <p>
              Failed to load <strong>{name}</strong>
            </p>
            <pre className="text-xs mt-2 p-2 bg-gray-100 overflow-x-auto">
              {error.message}
            </pre>
            <button
              onClick={() => window.location.reload()}
              className="mt-2 px-3 py-1 bg-blue-500 text-white rounded"
            >
              Retry
            </button>
          </div>
        ),
      };
    }
  });
}

// ====================
// Core Website Pages (in src/)
// ====================
const Governance = debugLazy(() => import("./Governance"), "Governance");

// ====================
// Who We Are (in src/pages/)
// ====================
const WhoWeAre = debugLazy(() => import("./pages/WhoWeAre"), "WhoWeAre");
const WhatWeDo = debugLazy(() => import("./pages/WhatWeDo"), "WhatWeDo");
const WhatMakesUsDifferent = debugLazy(
  () => import("./pages/WhatMakesUsDifferent"),
  "WhatMakesUsDifferent"
);

// ====================
// Our Mission (in src/pages/)
// ====================
const OurMission = debugLazy(() => import("./pages/OurMission"), "OurMission");
const OurVision = debugLazy(() => import("./pages/OurVision"), "OurVision");
const OurPhilosophy = debugLazy(
  () => import("./pages/OurPhilosophy"),
  "OurPhilosophy"
);
const WhoWeServe = debugLazy(() => import("./pages/WhoWeServe"), "WhoWeServe");

// ====================
// Investors & Strategic Partners
// ====================
const Investors = debugLazy(() => import("./pages/Investors"), "Investors");
const TheOpportunity = debugLazy(
  () => import("./pages/investors/TheOpportunity"),
  "TheOpportunity"
);
const WhatWeHaveBuilt = debugLazy(
  () => import("./pages/investors/WhatWeHaveBuilt"),
  "WhatWeHaveBuilt"
);
const InvestorBusinessModel = debugLazy(
  () => import("./pages/investors/InvestorBusinessModel"),
  "InvestorBusinessModel"
);
const WhyPartner = debugLazy(
  () => import("./pages/investors/WhyPartner"),
  "WhyPartner"
);
const InvestmentPriorities = debugLazy(
  () => import("./pages/investors/InvestmentPriorities"),
  "InvestmentPriorities"
);

const SuspenseWrapper = ({ children }) => (
  <Suspense fallback={<LoadingFallback />}>{children}</Suspense>
);

const AppRoutes = () => {
  return (
    <Routes>
      {/* ==================== */}
      {/* Main Website Routes */}
      {/* ==================== */}
      <Route path="/" element={<Home />} />
      <Route
        path="/governance"
        element={
          <SuspenseWrapper>
            <Governance />
          </SuspenseWrapper>
        }
      />

      {/* ==================== */}
      {/* Who We Are */}
      {/* ==================== */}
      <Route
        path="/who-we-are"
        element={
          <SuspenseWrapper>
            <WhoWeAre />
          </SuspenseWrapper>
        }
      />
      <Route
        path="/what-we-do"
        element={
          <SuspenseWrapper>
            <WhatWeDo />
          </SuspenseWrapper>
        }
      />
      <Route
        path="/what-makes-us-different"
        element={
          <SuspenseWrapper>
            <WhatMakesUsDifferent />
          </SuspenseWrapper>
        }
      />

      {/* ==================== */}
      {/* Our Mission */}
      {/* ==================== */}
      <Route
        path="/our-mission"
        element={
          <SuspenseWrapper>
            <OurMission />
          </SuspenseWrapper>
        }
      />
      <Route
        path="/our-vision"
        element={
          <SuspenseWrapper>
            <OurVision />
          </SuspenseWrapper>
        }
      />
      <Route
        path="/our-philosophy"
        element={
          <SuspenseWrapper>
            <OurPhilosophy />
          </SuspenseWrapper>
        }
      />
      <Route
        path="/who-we-serve"
        element={
          <SuspenseWrapper>
            <WhoWeServe />
          </SuspenseWrapper>
        }
      />

      {/* ==================== */}
      {/* Investors & Strategic Partners */}
      {/* ==================== */}
      <Route
        path="/investors"
        element={
          <SuspenseWrapper>
            <Investors />
          </SuspenseWrapper>
        }
      />
      <Route
        path="/investors/opportunity"
        element={
          <SuspenseWrapper>
            <TheOpportunity />
          </SuspenseWrapper>
        }
      />
      <Route
        path="/investors/what-we-have-built"
        element={
          <SuspenseWrapper>
            <WhatWeHaveBuilt />
          </SuspenseWrapper>
        }
      />
      <Route
        path="/investors/business-model"
        element={
          <SuspenseWrapper>
            <InvestorBusinessModel />
          </SuspenseWrapper>
        }
      />
      <Route
        path="/investors/why-partner"
        element={
          <SuspenseWrapper>
            <WhyPartner />
          </SuspenseWrapper>
        }
      />
      <Route
        path="/investors/investment-priorities"
        element={
          <SuspenseWrapper>
            <InvestmentPriorities />
          </SuspenseWrapper>
        }
      />

      {/* ==================== */}
      {/* Fallback Routes */}
      {/* ==================== */}
      <Route
        path="/404"
        element={
          <div className="min-h-screen flex items-center justify-center bg-black text-white">
            <div className="text-center p-8 max-w-md">
              <h1 className="text-2xl font-bold mb-4">Page Not Found</h1>
              <p className="text-white/60 mb-6">
                The page you are looking for does not exist.
              </p>
              <button
                onClick={() => (window.location.href = "/")}
                className="px-4 py-2 bg-gradient-to-r from-red-600 to-blue-600 text-white rounded-xl hover:shadow-lg transition-all"
              >
                Return Home
              </button>
            </div>
          </div>
        }
      />

      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
};

export default AppRoutes;
