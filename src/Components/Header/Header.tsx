import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.removeItem("token");
    navigate("/login");
    window.location.reload();
  };
  return (
    <div className="header">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <Link to="/" className="header-logo">
            Contact Manager
          </Link>
          <div className="d-flex align-items-center">
            {/* <Link to="/" className="profile-link">
              <span className="profile-image"></span>Profile
            </Link> */}
            <span
              className="d-inline-block logout-btn ms-3"
              onClick={logoutHandler}>
              Logout
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
