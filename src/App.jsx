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

import AdminLayout from "./admin/AdminLayout";
import Dashboard from "./admin/pages/Dashboard";
import Donations from "./admin/pages/Donations";
import Donors from "./admin/pages/Donors";
import Analytics from "./admin/pages/Analytics";
import Settings from "./admin/pages/Settings";
import Login from "./admin/pages/Login";
import ProtectedAdminRoute from "./admin/ProtectedAdminRoute";
import DonorProfile from "./admin/pages/DonorProfile";
import Newsletter from "./admin/pages/Newsletter";

const App = () => {
  return (
    <Router>
      <ScrollToTop />

      <Routes>

        {/* PUBLIC WEBSITE ROUTES */}
        <Route element={<Layout />}>

          <Route path="/" element={<IndexPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/donate" element={<DonatePage />} />

        </Route>

        {/* ADMIN DASHBOARD ROUTES */}
        <Route path="/admin/login" element={<Login />} />
        <Route
          path="/admin"
          element={
            <ProtectedAdminRoute>
              <AdminLayout />
            </ProtectedAdminRoute>
          }
        >

          <Route index element={<Dashboard />} />

          <Route path="donations" element={<Donations />} />
          <Route path="donors" element={<Donors />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="/admin/settings" element={<Settings />} />
          <Route path="donor/:email" element={<DonorProfile />} />
          <Route path="/admin/newsletter" element={<Newsletter />} />

        </Route>

      </Routes>

    </Router>
  );
};

export default App;
