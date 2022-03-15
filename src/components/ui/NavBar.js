import React from "react";
import "./navbar.css";
import { Link, NavLink, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("login", { replace: true });
  };

  return (
    <nav>
      <Link className="logo" to="/">Heroes</Link>

      <NavLink
        className={({ isActive }) => " " + (isActive ? "active" : "")}
        to="/marvel"
      >
        Marvel
      </NavLink>

      <NavLink
        className={({ isActive }) => " " + (isActive ? "active" : "")}
        to="/dc"
      >
        DC
      </NavLink>

      <div className="logout">
        <p>Carlos Paternina </p>
        <button className="btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};
