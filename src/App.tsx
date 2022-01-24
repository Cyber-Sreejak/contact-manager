import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import UnprotectedRoutes from "./UnprotectedRoutes/UnprotectedRoutes";
import ProtectedRoutes from "./ProtectedRoutes/ProtectedRoutes";

function App() {
  const token = localStorage.getItem("token");

  return (
    <div className="App">
      {!token ? <UnprotectedRoutes /> : <ProtectedRoutes />}
    </div>
  );
}

export default App;
