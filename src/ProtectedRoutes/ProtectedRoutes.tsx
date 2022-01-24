import React, { useEffect, useState } from "react";
// import { Redirect } from "react-router";
import { Routes, Route, useNavigate } from "react-router-dom";
import ContactDetailPage from "../Views/ContactDetailPage/ContactDetailPage";
import CreateContact from "../Views/CreateContact/CreateContact";
import Dashboard from "../Views/Dashboard/Dashboard";

const ProtectedRoutes = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/create-contact" element={<CreateContact />} />
        <Route path="/contact/detail/:id" element={<ContactDetailPage />} />
      </Routes>
    </div>
  );
};

export default ProtectedRoutes;
