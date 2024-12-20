import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import Teams from "./pages/Teams";
import Contact from "./pages/Contact";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import WebDevelopmentPlans from './pages/WebDevelopmentPlans';
import OfferBanner from "./pages/OfferBanner";
import ProjectPage from "./pages/ProjectPage";

function App() {
  return (
    <Router>
      <Header />
      <OfferBanner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/web-development-plans" element={<WebDevelopmentPlans />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
