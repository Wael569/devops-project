import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">
        TP Formulaire
      </Link>

      <div className="navbar-nav">
        <Link className="nav-link" to="/">
          Formulaire
        </Link>
        <Link className="nav-link" to="/users">
          Utilisateurs
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
