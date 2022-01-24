import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Views/Login/Login";
import Signup from "../Views/Signup/Signup";

const ProtectedRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default ProtectedRoutes;
