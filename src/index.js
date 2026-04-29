import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import { ShimmerPage } from "./components/Shimmer.jsx";

// Eager load auth (small, needed immediately)
import Login from "./auth/Login.jsx";
import SignUp from "./auth/SignUp.jsx";
import ForgotPassword from "./auth/ForgotPassword.jsx";
import ResetPassword from "./auth/ResetPassword.jsx";

// Lazy load all pages for code splitting
const HomePage    = lazy(() => import("./pages/home/HomePage.jsx"));
const AboutPage   = lazy(() => import("./pages/about/AboutPage.jsx"));
const AtsPage     = lazy(() => import("./divisions/ats/AtsPage.jsx"));
const AIMT        = lazy(() => import("./divisions/aimt/AimtPage.jsx"));
const Foundation  = lazy(() => import("./divisions/foundation/FoundationPage.jsx"));
const Payment     = lazy(() => import("./payment/PaymentPage.jsx"));
const Contact     = lazy(() => import("./contact/ContactPage.jsx"));
const ASAI        = lazy(() => import("./divisions/asai/AsaiPage.jsx"));
const Career      = lazy(() => import("./career/CareerPage.jsx"));
const Blog        = lazy(() => import("./blog/BlogPage.jsx"));
const Enroll      = lazy(() => import("./enroll/EnrollPage.jsx"));
const GetInvolved = lazy(() => import("./get-involved/GetInvolvedPage.jsx"));
const OpenAccount = lazy(() => import("./pages/home/OpenAccount.jsx"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy.jsx"));
const Terms       = lazy(() => import("./pages/Terms.jsx"));
const Services    = lazy(() => import("./pages/Services.jsx"));
const NotFound    = lazy(() => import("./components/NotFound.jsx"));

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <AuthProvider>
      <Navbar />
      <Suspense fallback={<ShimmerPage />}>
        <Routes>
          <Route path="/"              element={<HomePage />} />
          <Route path="/AIMT"          element={<AIMT />} />
          <Route path="/ATS"           element={<AtsPage />} />
          <Route path="/blog"          element={<Blog />} />
          <Route path="/openAccount"   element={<OpenAccount />} />
          <Route path="/foundation"    element={<Foundation />} />
          <Route path="/about"         element={<AboutPage />} />
          <Route path="/contact"       element={<Contact />} />
          <Route path="/enroll"        element={<Enroll />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/payment"       element={<Payment />} />
          <Route path="/getInvolved"   element={<GetInvolved />} />
          <Route path="/SignUp"         element={<SignUp />} />
          <Route path="/login"         element={<Login />} />
          <Route path="/ASAI"          element={<ASAI />} />
          <Route path="/career"        element={<Career />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/terms"         element={<Terms />} />
          <Route path="/services"      element={<Services />} />
          <Route path="*"              element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </AuthProvider>
  </BrowserRouter>
);
