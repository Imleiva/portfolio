/*
 * App.jsx - El corazón de mi portfolio
 *
 * Aquí es donde todo se conecta. Trato de mantener la estructura
 * simple y clara - Header, contenido principal, y Footer.
 * El ThemeProvider maneja mi tema favorito: modo oscuro
 */

import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails";
import ComingSoon from "./pages/ComingSoon/ComingSoon";
import NotFound from "./pages/NotFound/NotFound";
import "./styles/global.css";

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="app">
          <Header />
          {/* El contenido principal*/}
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/portfolio/:slug" element={<ProjectDetails />} />
              <Route path="/blog" element={<ComingSoon projectName="Blog" />} />
              <Route
                path="/coming-soon/:projectName?"
                element={<ComingSoon />}
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
