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
            Login
          </button>
        </li>
        {dropdownOpen && (
          <li className="dropdown-container">
            <ul>
              <li>
                <Link to="/register/candidate"> candidat</Link>
              </li>
              <li>
                <Link to="/register/enterprise"> enterprise</Link>
              </li>
            </ul>
          </li>
        )}
      </ul>
    </div>
  );
}

export default LoginButton;
