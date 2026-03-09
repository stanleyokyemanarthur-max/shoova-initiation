import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import Layout from "./components/Layout";

import { IndexPage } from "./pages/IndexPage";
import { AboutPage } from "./pages/AboutPage";
import { BlogPage } from "./pages/BlogPage";
import { ProgramsPage } from "./pages/ProgramsPage";
import { ContactPage } from "./pages/ContactPage";
import { DonatePage } from "./pages/DonatePage";

const App = () => {
  return (
    <Router>
      <ScrollToTop />

      <Routes>

        <Route element={<Layout />}>

          <Route path="/" element={<IndexPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/donate" element={<DonatePage />} />

        </Route>

      </Routes>

    </Router>
  );
};

export default App;