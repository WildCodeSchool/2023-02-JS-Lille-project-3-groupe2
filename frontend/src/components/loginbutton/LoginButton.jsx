import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginButton.scss";

function LoginButton() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div>
      <ul className={`login_container ${dropdownOpen ? "active" : ""}`}>
        <li>
          <button
            type="button"
            className="login_button"
            onClick={toggleDropdown}
          >
            Connexion
          </button>
        </li>
        {dropdownOpen && (
          <li className="dropdown-container">
            <ul>
              <li>
                <Link to="/login"> Candidat</Link>
              </li>
              <li>
                <Link to="/login"> Entreprise</Link>
              </li>
            </ul>
          </li>
        )}
      </ul>
    </div>
  );
}

export default LoginButton;
