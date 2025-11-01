import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AdminDashboard from "../src/pages/admin/AdminDashboard";
import AdminLayout from "../src/layout/AdminLayout";
import Landing from "../src/pages/Landing";
import AllUsers from "../src/pages/admin/AllUsers";
import UserDashboard from "../src/pages/user/UserDashboard";
import TripsGen from "../src/pages/user/TripsGen";
import BhojanGen from "../src/pages/user/BhojanGen";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="all-users" element={<AllUsers />} />
        </Route>
        <Route path="/user" element={<AdminLayout />}>
          <Route path="dashboard" element={<UserDashboard />} />
          <Route path="trips-generator" element={<TripsGen />} />
          <Route path="bhojan-generator" element={<BhojanGen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
